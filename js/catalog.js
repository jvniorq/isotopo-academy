import {courses,areas} from "./data.js";
export {courses,areas};
export const normalize = value => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
export const areaFor = id => areas.find(a=>a.id===id) || areas[0];
export const costLabel = c => ({gratis:"Gratuito","certificado-pago":"Curso gratuito · certificado de pago",pago:c.price ? "De pago · "+c.price : "De pago","por-verificar":"Costo por verificar"}[c.cost]);
export function filterCourses(state={},source=courses){
 const tokens=normalize(state.q).split(/\s+/).filter(Boolean).map(t=>t==="ct"?"tc":t);
 const result=source.filter(c=>{
  const haystack=normalize([c.title,c.description,c.provider,c.language,areaFor(c.area).name,...c.topics,...c.tags].join(" "));
  if(!tokens.every(t=>haystack.includes(t))) return false;
  for(const key of ["area","level","language","provider","format","availability","certificate"]) if(state[key] && c[key]!==state[key]) return false;
  if(state.cost && !(state.cost==="gratis" ? ["gratis","certificado-pago"].includes(c.cost) : c.cost===state.cost))return false;
  if(state.duration==="short" && !(c.hours!==null && c.hours<=20))return false;
  if(state.duration==="long" && !(c.hours!==null && c.hours>20))return false;
  if(state.duration==="unknown" && c.hours!==null)return false;
  return true;
 });
 const rank={Inicial:0,Intermedio:1,Avanzado:2};
 return result.sort((a,b)=>state.sort==="title"?a.title.localeCompare(b.title,"es"):state.sort==="level"?rank[a.level]-rank[b.level]||a.id-b.id:state.sort==="duration"?(a.hours??Infinity)-(b.hours??Infinity)||a.id-b.id:state.sort==="new"?b.id-a.id:a.id-b.id);
}
export const routes=[
{id:"comenzar",area:"fisica",name:"Tu primer paso en lo nuclear",level:"Inicial a intermedio",description:"Una entrada gradual: fenómenos físicos, programación y los fundamentos del núcleo.",courses:[4,3,27,28]},
{id:"reactores",area:"energia",name:"Del neutrón al sistema energético",level:"Intermedio a avanzado",description:"Conecta física de reactores, materiales, ingeniería y ciclo del combustible.",courses:[28,29,30,31,32,40]},
{id:"medicina",area:"medicina",name:"La física al servicio de la salud",level:"Intermedio",description:"Descubre la imagen médica, la gestión de dosis y las aplicaciones clínicas.",courses:[27,37,19,21,23,25]},
{id:"mediciones",area:"instrumentacion",name:"Medir. Interpretar. Comprender.",level:"Inicial a avanzado",description:"Sigue el recorrido de una medición: de la señal al resultado y su incertidumbre.",courses:[2,6,8,9,10,35,36]},
{id:"datos",area:"investigacion",name:"De los datos al descubrimiento",level:"Inicial a avanzado",description:"Construye herramientas para programar, analizar y modelar problemas científicos.",courses:[3,6,5,38,26]},
{id:"proteccion",area:"proteccion",name:"Una cultura de protección",level:"Inicial a intermedio",description:"Reúne fundamentos y aplicaciones de protección radiológica en distintos entornos.",courses:[1,35,20,22,24]},
{id:"fusion",area:"energia",name:"Explorar el futuro de la energía",level:"Intermedio a avanzado",description:"Prepara una base en electromagnetismo, física cuántica, plasmas y materiales.",courses:[7,11,33,39,30]}
];
