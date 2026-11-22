import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {config} from "../js/config.js";
const catalog=JSON.parse(await readFile(new URL("../data/courses.json",import.meta.url),"utf8"));
assert.match(config.supabaseUrl,/^https:\/\/[a-z0-9-]+\.supabase\.co$/);
assert.match(config.supabasePublishableKey,/^sb_publishable_/);
async function request(path){
 return fetch(config.supabaseUrl+"/rest/v1/"+path,{
  headers:{apikey:config.supabasePublishableKey},
  signal:AbortSignal.timeout(20000)
 });
}
const result=await request("courses?select=id&order=id");
assert.equal(result.status,200,"Public course catalog must be readable");
const rows=await result.json();
assert.deepEqual(rows.map(row=>row.id),catalog.courses.map(course=>course.id).sort((a,b)=>a-b));
for(const table of ["learning","course_resources"]){
 const response=await request(table+"?select=*&limit=1");
 assert.ok([401,403].includes(response.status),table+" must reject access without a session; received "+response.status);
}
console.log("PASS: 40 public courses; learning and study guides reject anonymous API access.");
