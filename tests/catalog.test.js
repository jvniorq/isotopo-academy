import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {courses,areas,routes,filterCourses,normalize} from "../js/catalog.js";
import {fieldArt} from "../js/graphics.js";
import {home,card,esc} from "../js/ui.js";

test("the catalog preserves 32 source courses and contains exactly 40 unique entries",()=>{
 assert.equal(courses.length,40);
 assert.deepEqual(courses.map(c=>c.id),Array.from({length:40},(_,i)=>i+1));
 for(const c of courses){
  assert(areas.some(a=>a.id===c.area));
  assert.equal(new URL(c.url).protocol,"https:");
  assert(c.description.length>40);
  assert(c.topics.length>=3);
  assert(c.hours===null||c.hours>0);
 }
});
test("Spanish search ignores accents and combines terms",()=>{
 assert.equal(normalize("  Radiológica  "),"radiologica");
 assert(filterCourses({q:"METROLOGIA"}).some(c=>c.id===2));
 assert(filterCourses({q:"tomografia dosis"}).some(c=>c.id===19));
 assert.deepEqual(filterCourses({q:"xyz-no-course"}),[]);
});
test("free content includes optional paid certificates but excludes paid tuition",()=>{
 const free=filterCourses({cost:"gratis"});
 assert(free.some(c=>c.id===1));
 assert(!free.some(c=>c.id===36));
 assert(!free.some(c=>c.id===35));
 assert.deepEqual(filterCourses({cost:"pago"}).map(c=>c.id),[36]);
 assert.deepEqual(filterCourses({cost:"certificado-pago"}).map(c=>c.id),[1]);
});
test("combined filters and duration exclude unknown values correctly",()=>{
 assert(filterCourses({area:"medicina",language:"Inglés",level:"Intermedio"}).every(c=>c.area==="medicina"&&c.language==="Inglés"&&c.level==="Intermedio"));
 assert(filterCourses({duration:"short"}).every(c=>c.hours!==null&&c.hours<=20));
 assert(filterCourses({duration:"unknown"}).every(c=>c.hours===null));
 assert.equal(filterCourses({availability:"Inscripción cerrada"})[0].id,36);
 assert.deepEqual(filterCourses({area:"medicina",cost:"pago"}),[]);
});
test("sorts and routes use valid catalog entries",()=>{
 assert.equal(filterCourses({sort:"new"})[0].id,40);
 assert.equal(filterCourses({sort:"duration"})[0].id,24);
 for(const r of routes)for(const id of r.courses)assert(courses.some(c=>c.id===id));
 assert.equal(routes.length,7);
});
test("portable catalog matches the application",async()=>{
 const json=JSON.parse(await readFile(new URL("../data/courses.json",import.meta.url),"utf8"));
 assert.deepEqual(json.courses,courses);assert.deepEqual(json.areas,areas);
});
test("original SVG diagrams have unique references and finite coordinates",()=>{
 const first=fieldArt("energia",true),second=fieldArt("medicina");
 assert(!/NaN|Infinity|undefined/.test(first+second));
 assert.notEqual(first.match(/id="([^"]+)"/)[1],second.match(/id="([^"]+)"/)[1]);
});
test("HTML output escapes text and exposes functional destinations",()=>{
 assert.equal(esc('<script>"x"</script>'),"&lt;script&gt;&quot;x&quot;&lt;/script&gt;");
 const output=home(new Set());
 assert(output.includes('href="#/cursos"'));assert(output.includes("data-reveal"));
 const savedCard=card(courses[0],new Set([1]));
 assert(savedCard.includes('aria-pressed="true"'));assert(savedCard.includes('href="#/curso/1"'));
});
