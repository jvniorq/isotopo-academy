let ctx,observer,lenis,frame;
export function readStorage(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
export function writeStorage(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
export const reducedMotion=()=>matchMedia("(prefers-reduced-motion: reduce)").matches||readStorage("isotopo:reduced-motion",false);
export function stopAnimations(){
 ctx?.revert();ctx=null;observer?.disconnect();observer=null;
 if(frame)cancelAnimationFrame(frame);frame=null;lenis?.destroy();lenis=null;
 document.querySelectorAll("#main [data-reveal]").forEach(el=>el.getAnimations().forEach(a=>a.cancel()));
}
export function startAnimations(){
 stopAnimations();
 const reduced=reducedMotion();document.documentElement.classList.toggle("no-motion",reduced);
 const btn=document.querySelector("#motion-toggle");
 if(btn){btn.textContent=reduced?"Movimiento reducido: activado":"Reducir movimiento";btn.setAttribute("aria-pressed",String(reduced));}
 if(reduced)return;
 const main=document.querySelector("#main");
 if(window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  ctx=gsap.context(()=>{
   gsap.from(".hero-copy > *",{y:22,opacity:0,duration:.85,stagger:.10,ease:"power2.out",clearProps:"all"});
   main.querySelectorAll("[data-reveal]").forEach(el=>{
    gsap.from(el,{y:26,opacity:0,duration:.72,ease:"power2.out",clearProps:"all",scrollTrigger:{trigger:el,start:"top 94%",once:true}});
   });
   if(main.querySelector(".hero-field"))gsap.to(".hero-field",{rotation:6,y:40,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
  },main);
  document.fonts.ready.then(()=>window.ScrollTrigger?.refresh());
 }else if("IntersectionObserver" in window){
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:"translateY(20px)"},{opacity:1,transform:"none"}],{duration:650,easing:"cubic-bezier(.2,.65,.3,1)"});observer.unobserve(entry.target);}
  }),{threshold:.08});
  main.querySelectorAll("[data-reveal]").forEach(el=>observer.observe(el));
 }
 if(window.Lenis&&matchMedia("(pointer:fine)").matches){
  lenis=new Lenis({duration:.85,smoothWheel:true});
  lenis.on("scroll",()=>window.ScrollTrigger?.update());
  const tick=time=>{lenis?.raf(time);frame=requestAnimationFrame(tick);};frame=requestAnimationFrame(tick);
 }
}
export function scrollTop(top=0){if(lenis)lenis.scrollTo(top,{immediate:true});window.scrollTo({top,behavior:"instant"});}
export function initMotion(){
 document.querySelector("#motion-toggle")?.addEventListener("click",()=>{
  writeStorage("isotopo:reduced-motion",!readStorage("isotopo:reduced-motion",false));startAnimations();
 });
 matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",startAnimations);
 window.addEventListener("scroll",()=>{
  const range=document.documentElement.scrollHeight-innerHeight;
  const progress=document.querySelector(".reading-progress");if(progress)progress.style.width=(range>0?Math.min(100,scrollY/range*100):0)+"%";
 },{passive:true});
}
