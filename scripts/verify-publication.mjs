#!/usr/bin/env node
// Local checks for the published edition. Does not deploy the website.
import assert from 'node:assert/strict';
import {readFileSync, existsSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=path=>readFileSync(resolve(root,path),'utf8');
const json=path=>JSON.parse(read(path));
const originalHashes=[
 '9f698130748acc1347bf4f25bba778f80ffa4b27b2de39bba21a675f39d263b6',
 'c09ec19fa76d9f11ddc302c818e0a4006d0cfd3050aee3298c0e52e63a1921a7',
 '97b0a155259fe46bb5ca57cb9a85a6c947e38288fc194457e0bb8746ceeb23b2',
 'efe451afaa4b4d9c5c0c79efe2d1eeae3d8db1425a9157836c977d51a9121e0e',
 'e4400fc538ded5dae6c1fb9ef052cc5792f2ef9fa5328c65d427768ad15232ff',
 '670f96c4612556af530992eb3948ef09f47bb472eff6854dfed59215f54365ad',
 'fdef486dc869b803bf55471fe0d91baae85214c05c806d5b23a733431bb005a2'
];
const books=originalHashes.map((expected,i)=>{
 const path=`data/sanskrit/${i+1}.json`;
 assert.equal(createHash('sha256').update(readFileSync(resolve(root,path))).digest('hex'),expected,`Imported Sanskrit changed: ${path}`);
 return json(path);
});
const rows=new Map(books.flatMap((b,i)=>b.verses.map(row=>[`${i+1}.${row.s}.${row.v}`,row])));
assert.equal(rows.size,23291);
const translations=json('data/translations/1-1.json');
const numbers=Object.keys(translations.verses).map(Number).sort((a,b)=>a-b);
assert.deepEqual(numbers,Array.from({length:50},(_,i)=>i+1));
const errata=json('data/errata.json');
const flags=json('data/quality-flags.json');
const normalize=s=>s.replace(/:/g,'ः').replace(/\s+/g,'').normalize('NFC');
function segments(text){
 return text.replace(/[।.]*1\.1\.\d+[।.]*/g,'।').split(/[।॥]+/).map(s=>s.trim()).filter(Boolean);
}
const used=new Set();
let corrected=0;
let resolvedFlags=0;
const newBoundaryMap={
 41:[[41,1],[41,2]],42:[[41,3],[42,1]],43:[[42,2],[43,1]],
 44:[[43,2],[44,1]],45:[[44,2],[44,3]],46:[[46,1],[46,2]],
 47:[[47,1],[47,2]],48:[[47,3],[48,1]],49:[[48,2],[49,1]],50:[[49,2],[50,1]]
};
for(let n=18;n<=50;n++){
 const id=`1.1.${n}`;
 const correction=errata[id];
 const tr=translations.verses[n];
 assert.ok(tr.en?.trim()&&tr.hi?.trim(),`Both translations required: ${id}`);
 assert.match(tr.hi,/[\u0900-\u097f]/);
 assert.equal(tr.review?.sanskrit,'verse-boundaries-checked');
 for(const field of ['context','teaching','connection']){
  if(tr[field])assert.ok(tr[field].en?.trim()&&tr[field].hi?.trim(),`Both annotation languages required: ${id}/${field}`);
 }
 if(newBoundaryMap[n]){
  const expected=newBoundaryMap[n].map(([row,segment])=>({row:`1.1.${row}`,segment}));
  if(n===46){
   assert.ok(!correction,'Verse 46 already has correct raw boundaries.');
   assert.equal(segments(rows.get(id).text).length,2);
  }else assert.deepEqual(correction?.sourceSegments,expected,`Incorrect audited alignment: ${id}`);
 }
 if(!correction)continue;
 corrected++;
 assert.equal(correction.verification,'verse-boundaries-checked');
 assert.ok(correction.latin?.trim(),`Corrected transliteration missing: ${id}`);
 assert.equal(correction.sourceSegments.length,2);
 const halves=correction.sourceSegments.map(loc=>{
  const key=`${loc.row}:${loc.segment}`;
  assert.ok(!used.has(key),`Repeated source hemistich: ${key}`);
  used.add(key);
  const part=segments(rows.get(loc.row).text)[loc.segment-1];
  assert.ok(part,`Missing source hemistich: ${key}`);
  return part;
 });
 const restored=segments(correction.text);
 assert.equal(restored.length,2,`Exactly two hemistichs required: ${id}`);
 assert.deepEqual(restored.map(normalize),halves.map(normalize),`Restored reading diverges from imported hemistichs: ${id}`);
 const markers=[...correction.text.matchAll(/([1-7])\.(\d+)\.(\d+)/g)].map(m=>m.slice(1).join('.'));
 assert.deepEqual(markers,[id],`Wrong or merged numeric address: ${id}`);
 if(flags.flags[id])resolvedFlags++;
}
assert.equal(corrected,30);
assert.equal(resolvedFlags,15);
// The full passage 18–50 contains 66 unique hemistichs, without lost or repeated text.
const ordered=Array.from({length:33},(_,i)=>{
 const id=`1.1.${i+18}`;return segments(errata[id]?.text||rows.get(id).text);
}).flat().map(normalize);
assert.equal(ordered.length,66);
assert.equal(new Set(ordered).size,66);
assert.ok(!translations.verses['51'],'Verse 51 must remain pending.');
assert.ok(!errata['1.1.50'].text.includes('न विरोधो'),'Mārīca’s warning belongs to verse 51.');
assert.ok(errata['1.1.48'].text.startsWith('निजघान वने'),'Preserve the imported वने lexical reading.');
const index=read('index.html');
assert.match(index,/<strong id="translatedCount">50<\/strong>/);
assert.match(index,/assets\/app\.js\?edition=1\.1\.50/);
assert.match(read('assets/app.js'),/EDITION_REVISION="1\.1\.50"/);
assert.match(read('sources.html'),/through 1\.1\.50/);
assert.match(read('sources.html'),/1\.1\.18–1\.1\.50/);
assert.match(index,/<title>Sri Valmiki Ramayana \(A Version of the AI Era\)<\/title>/);
assert.ok(!existsSync(resolve(root,'.nojekyll')),'The .nojekyll bypass would disable publication exclusions.');
for(const path of ['docs','scripts','README.md','AGENTS.md'])assert.ok(read('_config.yml').includes(`  - ${path}`));
assert.ok(!existsSync(resolve(root,'.github/workflows')),'Custom workflows are prohibited.');
for(const file of readdirSync(root).filter(p=>p.endsWith('.html'))){
 assert.ok(!/href=["'][^"']*(?:docs\/|scripts\/|PROJECT_STATE|NEXT_CHAT_PROMPT)/i.test(read(file)),`Internal navigation leaked: ${file}`);
 for(const match of read(file).matchAll(/(?:href|src)=["']\.\/([^"'#?]+)/g)){
  assert.ok(existsSync(resolve(root,match[1])),`Broken local asset/link in ${file}: ${match[1]}`);
 }
}
console.log(JSON.stringify({result:'PASS',rawSanskritRecords:rows.size,bilingualVerses:numbers.length,boundaryCheckedVerses:33,newBoundaryCheckedVerses:10,correctedOverlays:corrected,rawFlagsResolvedInDisplay:resolvedFlags,remainingBaselineFlags:flags.flagCount-resolvedFlags,nextUntranslated:'1.1.51–1.1.60'},null,2));
