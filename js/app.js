import {courses,areas,routes,areaFor,costLabel,filterCourses} from "./catalog.js";
import {icon,fieldArt} from "./graphics.js";
import {esc,card,empty,pageTop,home,specialtiesPage,routesPage,readingPage} from "./ui.js";
import {readStorage,writeStorage,startAnimations,stopAnimations,scrollTop,initMotion} from "./animations.js";
import * as auth from "./auth.js";
import {config} from "./config.js";

const main=document.querySelector("#main");
const knownIds=new Set(courses.map(c=>c.id));
let saved=new Set(readStorage("isotopo:saved",[]).filter(id=>knownIds.has(id)));
let learning=new Map(),viewToken=0,toastTimer,searchTimer,lastCatalog="#/cursos",catalogScroll=0,previousRoute="",dashboardTab="saved";
const stateKeys=["q","area","cost","level","language","duration","certificate","provider","format","availability","sort","page"];
const filterLabels={area:"Área",cost:"Costo del curso",level:"Nivel",language:"Idioma",duration:"Duración",certificate:"Certificado",provider:"Institución",format:"Formato",availability:"Disponibilidad"};
function toast(message){const el=document.querySelector("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),4200);}
function catalogState(){const query=(location.hash.split("?")[1]||"");return Object.fromEntries([...new URLSearchParams(query)].filter(([k])=>stateKeys.includes(k)));}
function saveCatalogState(state){
 const params=new URLSearchParams(Object.entries(state).filter(([,v])=>v && v!=="all" && v!=="1"));
 history.replaceState(null,"","#/cursos"+(params.size?"?"+params:""));lastCatalog=location.hash;
}
function options(values,current,first="Todos"){
 return '<option value="">'+first+'</option>'+values.map(v=>{const [value,label]=Array.isArray(v)?v:[v,v];return '<option value="'+esc(value)+'"'+(value===current?' selected':'')+'>'+esc(label)+'</option>';}).join("");
}
const unique=key=>[...new Set(courses.map(c=>c[key]))].sort((a,b)=>a.localeCompare(b,"es"));
const filters={
 area:areas.map(a=>[a.id,a.name]),
 cost:[["gratis","Gratuito"],["certificado-pago","Gratuito · certificado de pago"],["pago","De pago"],["por-verificar","Por verificar"]],
 level:["Inicial","Intermedio","Avanzado"],language:unique("language"),
 duration:[["short","Hasta 20 horas"],["long","Más de 20 horas"],["unknown","Duración no indicada"]],
 certificate:unique("certificate"),provider:unique("provider"),format:unique("format"),availability:unique("availability")
};
function filterLabel(key,value){const v=filters[key]?.find(item=>(Array.isArray(item)?item[0]:item)===value);return Array.isArray(v)?v[1]:v||value;}
function catalogPage(){
 const s=catalogState();
 return pageTop("Tu próximo descubrimiento","Conecta con lo<br>que quieres aprender.","40 cursos para explorar la ingeniería nuclear, a tu ritmo y según tus intereses.",'<div class="catalog-search">'+icon("search")+'<label class="sr-only" for="course-search">Buscar cursos por tema, título o institución</label><input id="course-search" type="search" placeholder="Prueba «física médica» o «metrología»" autocomplete="off" value="'+esc(s.q||"")+'"></div>')+
 '<div class="container catalog-layout"><button class="button button-outline filter-toggle" id="filter-toggle" aria-expanded="false" aria-controls="catalog-filters">'+icon("filter")+'Filtros</button><aside class="filters" id="catalog-filters" aria-label="Filtros de cursos"><div class="filters-top"><h2>Filtros</h2><button class="text-button" data-clear-filters>Limpiar</button></div>'+Object.entries(filters).map(([key,values])=>'<label class="filter-field"><span>'+filterLabels[key]+'</span><select data-filter="'+key+'">'+options(values,s[key])+'</select></label>').join("")+'</aside><section class="catalog-results" aria-label="Resultados de cursos"><div class="results-toolbar"><p id="result-count" role="status" aria-live="polite"></p><label><span class="sr-only">Ordenar cursos</span><select id="course-sort">'+options([["id","Selección del catálogo"],["title","Título: A–Z"],["level","Nivel: inicial a avanzado"],["duration","Menor duración conocida"],["new","Últimos añadidos"]],s.sort||"id","Ordenar por")+'</select></label></div><div id="active-filters" class="active-filters"></div><div id="course-results"></div><nav class="pagination" id="pagination" aria-label="Páginas de resultados"></nav></section></div>';
}
function updateCatalog(){
 const s=catalogState(),results=filterCourses(s),pages=Math.ceil(results.length/9);
 const page=Math.min(Math.max(1,Number(s.page)||1),Math.max(1,pages));
 if(String(page)!==String(s.page||1)){s.page=String(page);saveCatalogState(s);}
 document.querySelector("#result-count").textContent=results.length+" "+(results.length===1?"curso encontrado":"cursos encontrados");
 document.querySelector("#active-filters").innerHTML=Object.entries(s).filter(([k,v])=>v && !["page","sort"].includes(k)).map(([k,v])=>'<button class="filter-chip" data-remove-filter="'+k+'" aria-label="Quitar filtro '+esc(k==="q"?"Búsqueda":filterLabels[k])+': '+esc(v)+'">'+esc(k==="q"?v:filterLabel(k,v))+icon("close")+'</button>').join("");
 document.querySelector("#course-results").innerHTML=results.length?'<div class="course-grid">'+results.slice((page-1)*9,page*9).map(c=>card(c,saved,false)).join("")+'</div>':empty("Aún no hay coincidencias","Prueba otra palabra o elimina algún filtro para ampliar tu búsqueda.","#/cursos","Ver todos los cursos");
 document.querySelector("#pagination").innerHTML=pages>1?Array.from({length:pages},(_,i)=>'<button data-page="'+(i+1)+'" class="'+(page===i+1?"current":"")+'" aria-label="Página '+(i+1)+'"'+(page===i+1?' aria-current="page"':'')+'>'+(i+1)+'</button>').join(""):"";
 window.ScrollTrigger?.refresh();
}
function detailPage(c){
 const area=areaFor(c.area),isSaved=saved.has(c.id),record=learning.get(c.id);
 return '<section class="detail-hero"><div class="container"><nav class="breadcrumbs" aria-label="Ruta de navegación"><a href="'+esc(lastCatalog)+'">← Volver al catálogo</a><span>/</span><a href="#/cursos?area='+c.area+'">'+esc(area.short)+'</a></nav><div class="detail-top"><div><p class="eyebrow">'+esc(c.provider)+'</p><h1>'+esc(c.title)+'</h1><p>'+esc(c.description)+'</p><div class="tags"><span class="tag">'+esc(c.level)+'</span><span class="tag">'+esc(c.language)+'</span><span class="tag">'+esc(c.format)+'</span></div></div>'+fieldArt(c.area)+'</div></div></section>'+
 '<div class="container detail-layout"><div class="detail-content"><section data-reveal><h2>Conecta este curso con tu formación.</h2><p>'+esc(area.description)+'</p><p>Esta selección te orienta hacia una fuente de aprendizaje de '+esc(c.provider)+'. Consulta allí el programa completo y las condiciones de acceso.</p></section><section data-reveal><h2>Temas para explorar</h2><ul class="topic-list">'+c.topics.map(t=>'<li>'+icon("check")+esc(t)+'</li>').join("")+'</ul><p class="note">Resumen editorial orientativo. El temario oficial corresponde a la institución.</p></section><section data-reveal><h2>Antes de empezar</h2><p>'+esc(c.prerequisites)+'</p>'+(c.note?'<p class="note">'+esc(c.note)+'</p>':'')+'<p class="note">Fuente: '+esc(c.sourceStatus)+(c.checkedAt?' · Consultada el 21/11/2026.':'. Verificación individual pendiente.')+' Los costos y las convocatorias pueden cambiar.</p></section><section id="member-resources" data-reveal><h2>Tu espacio de estudio</h2>'+(auth.getUser()?'<p role="status">Cargando tus guías…</p>':'<div class="member-lock">'+icon("lock")+'<div><h3>Profundiza a tu manera.</h3><p>Las guías de estudio y la sincronización de tu aprendizaje estarán disponibles con una cuenta.</p><a class="text-link" href="#/registro">'+(auth.authEnabled?'Crear mi cuenta':'Conocer el espacio personal')+' ↗</a></div></div>')+'</section></div>'+
 '<aside class="enroll-card"><div class="cost">'+esc(costLabel(c))+'</div>'+(c.certificatePrice?'<p>'+esc(c.certificatePrice)+'</p>':'')+'<a class="button button-dark" href="'+esc(c.url)+'" target="_blank" rel="noopener noreferrer">Ir a la institución '+icon("external")+'</a><p>El curso se realiza en la plataforma de origen. Puede requerir un registro independiente.</p><button class="button button-outline" data-save="'+c.id+'" aria-pressed="'+isSaved+'">'+icon("bookmark")+(isSaved?'Curso guardado':'Guardar curso')+'</button><dl class="info-list">'+[["Duración",c.hours?c.hours+" horas":"Por verificar"],["Idioma",c.language],["Nivel",c.level],["Certificado",c.certificate],["Disponibilidad",c.availability]].map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+esc(v)+'</dd></div>').join("")+'</dl>'+(auth.getUser()?'<label class="learning-controls">Mi progreso<select data-progress="'+c.id+'">'+options([["not-started","Sin empezar"],["in-progress","En curso"],["completed","Completado"]],record?.status||"not-started","Seleccionar estado")+'</select></label><p>Estado registrado por ti; no equivale a una certificación.</p>':'')+'</aside></div>'+
 '<section class="section related"><div class="container"><div class="section-intro" data-reveal><div><p class="eyebrow">Sigue conectando ideas</p><h2>También podría interesarte.</h2></div></div><div class="course-grid">'+courses.filter(x=>x.area===c.area&&x.id!==c.id).slice(0,3).map(x=>card(x,saved)).join("")+'</div></div></section>';
}
function dashboardPage(){
 const user=auth.getUser();
 const list=courses.filter(c=>dashboardTab==="saved"?saved.has(c.id):learning.get(c.id)?.status===dashboardTab);
 return pageTop("Mi aprendizaje","Un espacio para<br>tus próximos pasos.",user?"Tus cursos guardados y tu progreso, en un mismo lugar.":"Guarda lo que te inspira. Tus favoritos se conservan en este navegador.")+
 '<section class="section"><div class="container">'+(!user?'<div class="availability-note">Estás explorando sin cuenta. Los favoritos se guardan solo en este dispositivo. '+(auth.authEnabled?'<a href="#/acceso">Inicia sesión para sincronizar.</a>':'La sincronización entre dispositivos estará disponible al activar las cuentas.')+'</div>':'')+
 '<div class="dashboard-top"><div class="dashboard-tabs" role="group" aria-label="Filtrar mi aprendizaje"><button class="'+(dashboardTab==="saved"?"active":"")+'" data-learning-tab="saved" aria-pressed="'+(dashboardTab==="saved")+'">Guardados ('+saved.size+')</button>'+(user?'<button data-learning-tab="in-progress" class="'+(dashboardTab==="in-progress"?"active":"")+'" aria-pressed="'+(dashboardTab==="in-progress")+'">En curso</button><button data-learning-tab="completed" class="'+(dashboardTab==="completed"?"active":"")+'" aria-pressed="'+(dashboardTab==="completed")+'">Completados</button>':'')+'</div>'+(user?'<button class="text-link text-button" data-signout>Cerrar sesión</button>':(saved.size?'<button class="text-link text-button" data-clear-saved>Borrar favoritos</button>':''))+'</div>'+
 (list.length?'<div class="course-grid">'+list.map(c=>card(c,saved)).join("")+'</div>':empty("Deja espacio a la curiosidad.","Guarda un curso con el marcador y encontrarás aquí tu próxima oportunidad de aprender."))+'</div></section>';
}
function authPage(mode){
 const signup=mode==="registro",reset=mode==="recuperar",newPassword=mode==="nueva-clave";
 const title=signup?"Crea tu espacio.":reset?"Vuelve a conectar.":newPassword?"Una nueva contraseña.":"Qué bueno verte de nuevo.";
 const submit=signup?"Crear cuenta":reset?"Enviar enlace":newPassword?"Guardar contraseña":"Iniciar sesión";
 return '<section class="auth-page"><div class="auth-art"><p class="eyebrow">Tu conocimiento sigue creciendo</p><h1>Cada descubrimiento<br>abre una nueva<br>posibilidad.</h1><p>Conecta cursos, construye tu camino y sigue haciendo preguntas.</p>'+fieldArt("energia")+'</div><div class="auth-form-wrap"><form class="auth-form" id="account-form" data-mode="'+mode+'"><h2>'+title+'</h2><p>'+(signup?'Comienza una trayectoria que sea tuya.':reset?'Te enviaremos un enlace para recuperar el acceso.':newPassword?'Elige una contraseña única de al menos 12 caracteres.':'Continúa donde dejaste tu curiosidad.')+'</p>'+(!auth.authEnabled?'<div class="availability-note"><strong>Las cuentas estarán disponibles próximamente.</strong><br>Puedes explorar los 40 cursos y guardar favoritos en este navegador desde ahora.</div>':'')+
 (signup?'<label>Nombre<input name="name" autocomplete="given-name" required maxlength="80" placeholder="Tu nombre"></label>':'')+
 (!newPassword?'<label>Correo electrónico<input name="email" type="email" autocomplete="email" required maxlength="254" placeholder="tu@correo.com"></label>':'')+
 (!reset?'<label>Contraseña<div class="password-wrap"><input id="account-password" name="password" type="password" autocomplete="'+(signup||newPassword?'new-password':'current-password')+'" required minlength="'+(signup||newPassword?12:1)+'" maxlength="128" placeholder="'+(signup||newPassword?'Al menos 12 caracteres':'Tu contraseña')+'"><button type="button" class="icon-button" data-password-toggle aria-label="Mostrar contraseña" aria-pressed="false">'+icon("eye")+'</button></div></label>':'')+
 '<div id="form-message" role="status" aria-live="polite"></div><button class="button button-dark" type="submit"'+(!auth.authEnabled?' disabled':'')+'>'+submit+icon("arrow")+'</button><div class="form-links">'+(signup?'<a href="#/acceso">Ya tengo una cuenta</a>':'<a href="#/registro">Crear una cuenta</a>')+(reset||newPassword?'<a href="#/acceso">Volver al acceso</a>':'<a href="#/recuperar">Olvidé mi contraseña</a>')+'</div><p class="privacy-hint">Conoce cómo se gestionan tus datos en nuestra <a href="#/privacidad">política de privacidad</a>.</p></form></div></section>';
}
async function render(){
 clearTimeout(searchTimer);const token=++viewToken;
 if(previousRoute==="/cursos"){lastCatalog=location.hash.startsWith("#/cursos")?location.hash:lastCatalog;catalogScroll=window.scrollY;}
 const path=(location.hash.replace(/^#/,"")||"/").split("?")[0],parts=path.split("/"),from=previousRoute;
 previousRoute=path;
 stopAnimations();closeMenu();
 let title="Conocimiento que transforma";
 if(path==="/"){main.innerHTML=home(saved);}
 else if(path==="/cursos"){title="Explorar cursos";main.innerHTML=catalogPage();updateCatalog();lastCatalog=location.hash;}
 else if(path==="/especialidades"){title="Especialidades";main.innerHTML=specialtiesPage();}
 else if(path==="/rutas"){title="Rutas de aprendizaje";main.innerHTML=routesPage();}
 else if(parts[1]==="curso"){
  const c=courses.find(c=>c.id===Number(parts[2]));
  if(c){title=c.title;main.innerHTML=detailPage(c);if(auth.getUser())loadResources(c.id,token);}
  else main.innerHTML='<div class="container section">'+empty("Este curso no está en el catálogo.","Explora los cursos disponibles para encontrar tu siguiente paso.")+'</div>';
 }else if(path==="/mi-aprendizaje"){title="Mi aprendizaje";main.innerHTML=dashboardPage();}
 else if(["/acceso","/registro","/recuperar","/nueva-clave"].includes(path)){title=path==="/registro"?"Crear cuenta":"Tu cuenta";main.innerHTML=authPage(parts[1]);}
 else if(["/acerca","/privacidad","/fuentes"].includes(path)){title={acerca:"Acerca de Isótopo",privacidad:"Privacidad",fuentes:"Fuentes y metodología"}[parts[1]];main.innerHTML=readingPage(parts[1],config.privacyContact);}
 else main.innerHTML='<div class="container section">'+empty("Un camino por descubrir.","La página que buscas no existe. Podemos volver al catálogo.")+'</div>';
 document.title=title+" — Isótopo";
 document.querySelectorAll("[data-nav]").forEach(el=>{const active=path.includes(el.dataset.nav);el.classList.toggle("active",active);if(active)el.setAttribute("aria-current","page");else el.removeAttribute("aria-current");});
 updateAccount();
 main.focus({preventScroll:true});
 scrollTop(path==="/cursos"&&from.startsWith("/curso/")?catalogScroll:0);
 startAnimations();
}
async function loadResources(id,token){
 try{
  const resources=await auth.readResources(id);if(token!==viewToken)return;
  document.querySelector("#member-resources").innerHTML='<h2>Tu espacio de estudio</h2>'+(resources.length?resources.map(r=>'<details class="resource"><summary>'+esc(r.title)+'</summary><p>'+esc(r.body).replace(/\n/g,"<br>")+'</p></details>').join(""):'<p>Las guías de este curso están en preparación. Ya puedes registrar tu progreso y visitar el material de la institución.</p>');
  window.ScrollTrigger?.refresh();
 }catch(e){if(token===viewToken)document.querySelector("#member-resources").innerHTML='<h2>Tu espacio de estudio</h2><p>'+esc(e.message)+'</p>';}
}
function updateAccount(){
 const user=auth.getUser(),link=document.querySelector("#account-link"),join=document.querySelector("#join-link");
 link.textContent=user?"Mi aprendizaje":"Iniciar sesión";link.href=user?"#/mi-aprendizaje":"#/acceso";
 join.textContent=user?"Explorar cursos":"Crear cuenta";join.href=user?"#/cursos":"#/registro";
}
function closeMenu(){document.querySelector("#mobile-menu").hidden=true;document.querySelector("#menu-toggle").setAttribute("aria-expanded","false");}
async function setSaved(id,value){
 if(auth.getUser()){
  const record=learning.get(id)||{status:"not-started"};
  await auth.writeLearning(id,{saved:value,status:record.status});learning.set(id,{...record,course_id:id,saved:value});
 }else{
  const next=new Set(saved);value?next.add(id):next.delete(id);
  if(!writeStorage("isotopo:saved",[...next]))throw new Error("Tu navegador no permite guardar favoritos.");
 }
 value?saved.add(id):saved.delete(id);
}
function refreshSaveButtons(id){
 document.querySelectorAll('[data-save="'+id+'"]').forEach(btn=>{
  const value=saved.has(id),c=courses.find(c=>c.id===id);btn.setAttribute("aria-pressed",String(value));
  if(btn.classList.contains("bookmark-button"))btn.setAttribute("aria-label",(value?"Quitar de guardados: ":"Guardar: ")+c.title);
  else btn.innerHTML=icon("bookmark")+(value?"Curso guardado":"Guardar curso");
 });
}
document.addEventListener("click",async event=>{
 const target=event.target.closest("button,a");if(!target)return;
 if(target.id==="menu-toggle"){const open=target.getAttribute("aria-expanded")==="true";target.setAttribute("aria-expanded",String(!open));document.querySelector("#mobile-menu").hidden=open;return;}
 if(target.closest("#mobile-menu")&&target.tagName==="A")closeMenu();
 if(target.classList.contains("skip")){event.preventDefault();main.focus();return;}
 try{
  if(target.dataset.save){
   const id=Number(target.dataset.save);target.disabled=true;const value=!saved.has(id);await setSaved(id,value);refreshSaveButtons(id);toast(value?"Curso guardado. Tu próximo paso te espera.":"Curso eliminado de tus guardados.");
   if(previousRoute==="/mi-aprendizaje"){const y=scrollY;await render();scrollTop(y);}
  }
  if(target.dataset.saveRoute){
   target.disabled=true;const route=routes.find(r=>r.id===target.dataset.saveRoute);
   for(const id of route.courses)if(!saved.has(id))await setSaved(id,true);
   toast("Ruta guardada. Encuentra sus cursos en Mi aprendizaje.");
  }
  if(target.hasAttribute("data-clear-filters")){saveCatalogState({});await render();}
  if(target.dataset.removeFilter){const s=catalogState();delete s[target.dataset.removeFilter];delete s.page;saveCatalogState(s);await render();}
  if(target.dataset.page){const s=catalogState();s.page=target.dataset.page;saveCatalogState(s);updateCatalog();document.querySelector(".results-toolbar").scrollIntoView({behavior:"instant",block:"start"});document.querySelector("#result-count").tabIndex=-1;document.querySelector("#result-count").focus({preventScroll:true});}
  if(target.id==="filter-toggle"){const open=target.getAttribute("aria-expanded")==="true";target.setAttribute("aria-expanded",String(!open));document.querySelector("#catalog-filters").classList.toggle("is-open",!open);}
  if(target.hasAttribute("data-password-toggle")){const input=document.querySelector("#account-password"),show=input.type==="password";input.type=show?"text":"password";target.setAttribute("aria-label",show?"Ocultar contraseña":"Mostrar contraseña");target.setAttribute("aria-pressed",String(show));}
  if(target.dataset.learningTab){dashboardTab=target.dataset.learningTab;await render();}
  if(target.hasAttribute("data-clear-saved")){if(!writeStorage("isotopo:saved",[]))throw new Error("No se pudieron borrar los favoritos.");saved.clear();await render();toast("Favoritos borrados de este navegador.");}
  if(target.hasAttribute("data-signout")){await auth.signOut();toast("Sesión cerrada.");location.hash="#/";}
 }catch(e){toast(e.message||"No se pudo completar la acción.");}finally{if(target.isConnected)target.disabled=false;}
});
document.addEventListener("input",event=>{
 if(event.target.id!=="course-search")return;
 clearTimeout(searchTimer);searchTimer=setTimeout(()=>{const s=catalogState();s.q=event.target.value;delete s.page;saveCatalogState(s);updateCatalog();},180);
});
document.addEventListener("change",async event=>{
 const target=event.target;
 if(target.dataset.filter||target.id==="course-sort"){
  clearTimeout(searchTimer);const s=catalogState();s.q=document.querySelector("#course-search").value;
  s[target.dataset.filter||"sort"]=target.value;delete s.page;saveCatalogState(s);updateCatalog();
 }
 if(target.dataset.progress){
  const id=Number(target.dataset.progress),old=learning.get(id)||{saved:saved.has(id),status:"not-started"};
  target.disabled=true;
  try{await auth.writeLearning(id,{saved:old.saved,status:target.value});learning.set(id,{...old,status:target.value});toast("Tu progreso se ha actualizado.");}
  catch(e){target.value=old.status;toast(e.message);}finally{target.disabled=false;}
 }
});
document.addEventListener("submit",async event=>{
 if(event.target.id!=="account-form")return;event.preventDefault();
 if(!auth.authEnabled)return;
 const form=event.target,data=new FormData(form),mode=form.dataset.mode,button=form.querySelector('[type="submit"]'),message=document.querySelector("#form-message");
 button.disabled=true;message.className="form-message";message.textContent="Un momento…";
 try{
  if(mode==="registro"){const active=await auth.signUp(String(data.get("name")).trim(),String(data.get("email")).trim(),String(data.get("password")));message.textContent=active?"Cuenta creada.":"Revisa tu correo para confirmar la cuenta. Si ya tenías una, puedes iniciar sesión.";if(active)location.hash="#/mi-aprendizaje";}
  else if(mode==="recuperar"){await auth.resetPassword(String(data.get("email")).trim());message.textContent="Si el correo está registrado, recibirás un enlace para recuperar el acceso.";}
  else if(mode==="nueva-clave"){await auth.updatePassword(String(data.get("password")));toast("Contraseña actualizada.");history.replaceState(null,"",location.pathname+"#/mi-aprendizaje");await render();}
  else{await auth.signIn(String(data.get("email")).trim(),String(data.get("password")));location.hash="#/mi-aprendizaje";}
  form.reset();
 }catch(e){message.className="form-message error";message.textContent=e.message;}finally{if(button.isConnected)button.disabled=false;}
});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeMenu();document.querySelector("#menu-toggle").focus({preventScroll:true});}});
window.addEventListener("hashchange",render);
window.addEventListener("isotopo:auth",async event=>{
 try{
  if(event.detail.user){learning=new Map((await auth.readLearning()).map(x=>[x.course_id,x]));saved=new Set([...learning.values()].filter(x=>x.saved).map(x=>x.course_id));}
  else{learning.clear();saved=new Set(readStorage("isotopo:saved",[]).filter(id=>knownIds.has(id)));dashboardTab="saved";}
  updateAccount();
  if(event.detail.event==="PASSWORD_RECOVERY" || (event.detail.user&&new URLSearchParams(location.search).get("recovery")==="1")){location.hash="#/nueva-clave";return;}
  if(["/mi-aprendizaje"].includes(previousRoute)||previousRoute.startsWith("/curso/"))await render();
 }catch(e){toast(e.message);}
});
initMotion();
if(!location.hash)history.replaceState(null,"",location.pathname+location.search+"#/");
await render();
try{await auth.initAuth();}catch(e){toast(e.message);}
