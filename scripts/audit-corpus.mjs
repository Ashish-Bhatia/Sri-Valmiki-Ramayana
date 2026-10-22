#!/usr/bin/env node
/**
 * Reproducible, preliminary source-transcription audit.
 * Run locally: node scripts/audit-corpus.mjs --check
 * Regenerate:  node scripts/audit-corpus.mjs --write
 * No packages or GitHub Actions required.
 * This checks address-marker consistency, NOT philological accuracy.
 */
import {readFileSync,writeFileSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {dirname,resolve} from "node:path";

const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const sourceBlob="ce3e290c437f22d9a716798cf24dcfe1365ecc02";
const pattern=/([1-7])\s*[.।]\s*(\d{1,3})\s*[.।]\s*(\d{1,3})/g;
const flags={},seen=new Set(),stats=[],overall={rows:0,missingMarker:0,markerMismatch:0,manuallyFlagged:0};
for(let k=1;k<=7;k++){
 const input=JSON.parse(readFileSync(resolve(root,"data/sanskrit",k+".json"),"utf8"));
 const s={kanda:k,rows:0,sargas:new Set(),markerMismatch:0,missingMarker:0};
 for(const verse of input.verses){
   const id=k+"."+verse.s+"."+verse.v;
   if(seen.has(id))throw new Error("Duplicate address "+id);
   if(!verse.text?.trim())throw new Error("Blank Sanskrit at "+id);
   seen.add(id); s.rows++;s.sargas.add(verse.s);overall.rows++;
   const matches=[...verse.text.matchAll(pattern)].map(m=>m.slice(1,4).join("."));
   if(matches.length===0){
     flags[id]="No embedded numeric verse reference found";
     overall.missingMarker++;s.missingMarker++;
   }else if(!matches.includes(id)){
     flags[id]="Embedded reference does not match this row address";
     overall.markerMismatch++;s.markerMismatch++;
   }else if(new Set(matches).size>1){
     flags[id]="Multiple different verse references in one source row";
     overall.markerMismatch++;s.markerMismatch++;
   }
 }
 stats.push({...s,sargas:s.sargas.size});
}
if(!flags["1.1.18"]){flags["1.1.18"]="Potential overrun beyond verse boundary; requires manual alignment";overall.manuallyFlagged++}
const obj={method:"Automated regex marker audit + one manually observed anomaly; flags require human verification",sourceSha:sourceBlob,countScanned:overall.rows,flagCount:Object.keys(flags).length,flags};
const path=resolve(root,"data/quality-flags.json");
const current=JSON.parse(readFileSync(path,"utf8"));
const same=JSON.stringify(current)===JSON.stringify(obj);
console.log(JSON.stringify({all:overall,totalFlags:obj.flagCount,perKanda:stats.map(s=>({kanda:s.kanda,rows:s.rows,sargas:s.sargas,markerMismatch:s.markerMismatch,missingMarker:s.missingMarker})),manifestIdentical:same},null,2));
if(process.argv.includes("--write"))writeFileSync(path,JSON.stringify(obj),"utf8");
else if(process.argv.includes("--check")&&!same){console.error("Manifest differs from source scan; run --write and review differences.");process.exitCode=1}
