import {readdir} from "node:fs/promises";
import {execFileSync} from "node:child_process";
for(const file of await readdir("js"))if(file.endsWith(".js"))execFileSync(process.execPath,["--check","js/"+file],{stdio:"inherit"});
console.log("All application modules passed syntax validation.");
