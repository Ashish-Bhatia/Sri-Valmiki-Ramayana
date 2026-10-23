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
assert.deepEqual(numbers,Array.from({length:80},(_,i)=>i+1));
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
 47:[[47,1],[47,2]],48:[[47,3],[48,1]],49:[[48,2],[49,1]],50:[[49,2],[50,1]],
 51:[[50,2],[51,1]],52:[[51,2],[52,1]],53:[[52,2],[53,1]],54:[[53,2],[54,1]],
 55:[[54,2],[54,3]],56:[[56,1],[56,2]],57:[[56,3],[57,1]],
 58:[[57,2],[58,1]],59:[[58,2],[59,1]],60:[[59,2],[60,1]],
 61:[[60,2],[61,1]],62:[[61,2],[62,1]],63:[[62,2],[63,1]],64:[[63,2],[63,3]],
 65:[[65,1],[65,2]],66:[[66,1],[66,2]],67:[[67,1],[67,2]],
 68:[[68,1],[68,2]],69:[[69,1],[69,2]],70:[[70,1],[70,2]],
 71:[[71,1],[71,2]],72:[[72,1],[72,2]],73:[[73,1],[73,2]],
 74:[[74,1],[74,2]],75:[[75,1],[75,2]],76:[[76,1],[76,2]],
 77:[[76,3],[76,4]],78:[[78,1],[78,2]],79:[[79,1],[79,2]],80:[[80,1],[80,2]]
};
for(let n=18;n<=80;n++){
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
assert.equal(corrected,60);
assert.equal(resolvedFlags,21);
// The full passage 18–80 contains 126 unique hemistichs, without lost or repeated text.
const ordered=Array.from({length:63},(_,i)=>{
 const id=`1.1.${i+18}`;return segments(errata[id]?.text||rows.get(id).text);
}).flat().map(normalize);
assert.equal(ordered.length,126);
assert.equal(new Set(ordered).size,126);
assert.ok(!translations.verses['81'],'Verse 81 must remain pending.');
assert.ok(!errata['1.1.50'].text.includes('न विरोधो'),'Mārīca’s warning belongs to verse 51.');
assert.ok(errata['1.1.48'].text.startsWith('निजघान वने'),'Preserve the imported वने lexical reading.');
assert.ok(errata['1.1.51'].text.startsWith('न विरोधो बलवता क्षमो रावण तेन ते'));
assert.equal(rows.get('1.1.54').text,rows.get('1.1.55').text,'Retain the duplicated raw source rows.');
assert.match(rows.get('1.1.56').text,/1151/,'Preserve the raw token in its original record.');
assert.ok(!Array.from({length:10},(_,i)=>errata[`1.1.${i+51}`].text).join('').includes('1151'),'Stray token must not enter the corrected Sanskrit.');
assert.ok(errata['1.1.57'].text.startsWith('श्रमणीं'),'Preserve the imported lexical reading.');
assert.deepEqual(errata['1.1.57'].lexicalVariants.map(v=>[v.importedReading,v.parallelReading]),[['श्रमणीं','श्रमणाम्']]);
assert.ok(!errata['1.1.60'].text.includes('चकार सख्यं'),'The pact belongs to verse 61.');
assert.match(translations.verses['51'].en,/Rāvaṇa/);
assert.match(translations.verses['57'].connection.en,/Kabandha/);
assert.ok(errata['1.1.61'].text.startsWith('चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम्'));
assert.equal(segments(errata['1.1.61'].text)[1],'ततो वानरराजेन वैरानुकथनं प्रति');
assert.equal(rows.get('1.1.63').text,rows.get('1.1.64').text,'Retain duplicated raw rows 63/64.');
for(let n=61;n<=70;n++){
 assert.equal(errata[`1.1.${n}`].overlayKind,n<=64?'boundary-restoration':'display-normalization');
 assert.match(translations.verses[n].review.speaker,/Nārada.*Vālmīki/);
 if(n>=65)assert.deepEqual(segments(rows.get(`1.1.${n}`).text).map(normalize),segments(errata[`1.1.${n}`].text).map(normalize),'Correctly bounded rows must not change lexically.');
}
assert.ok(errata['1.1.64'].text.startsWith('राघवप्रत्ययार्थं'));
assert.match(errata['1.1.65'].text,/चास्थि/);
assert.match(errata['1.1.65'].latin,/pādāṅguṣṭhena/);
assert.ok(segments(errata['1.1.66'].text)[1].endsWith('तथा'));
assert.equal(errata['1.1.66'].lexicalVariants[0].otherReading,'तदा');
assert.match(translations.verses['61'].en,/\.\.\./);
assert.match(translations.verses['62'].en,/^\.\.\./);
assert.match(translations.verses['69'].en,/\[Vālin\]/);
assert.equal(rows.get('1.1.76').text,rows.get('1.1.77').text,'Retain duplicated raw rows 76/77.');
assert.equal(rows.get('1.1.76').latin,rows.get('1.1.77').latin,'Retain duplicated raw romanization.');
assert.ok(errata['1.1.71'].text.startsWith('स च सर्वान्समानीय वानरान्वानरर्षभः'));
for(let n=71;n<=80;n++){
 const c=errata[`1.1.${n}`];
 assert.equal(c.overlayKind,[76,77].includes(n)?'boundary-restoration':'display-normalization');
 assert.match(translations.verses[n].review.speaker,/Nārada.*Vālmīki/);
 if(![76,77].includes(n))assert.deepEqual(segments(rows.get(`1.1.${n}`).text).map(normalize),segments(c.text).map(normalize),'Normalization must preserve the complete lexical reading.');
}
assert.equal(Object.keys(errata).length,61);
assert.ok(errata['1.1.74'].text.startsWith('निवेदयित्वाऽऽभिज्ञानं प्रवृत्तिं च निवेद्य च'));
assert.ok(errata['1.1.74'].latin.startsWith("nivedayitvā''bhijñānaṃ"));
assert.equal(errata['1.1.74'].lexicalVariants[1].otherReading,'प्रवृत्तिं विनिवेद्य च');
assert.equal(segments(errata['1.1.76'].text).length,2);
assert.ok(!errata['1.1.76'].text.includes('ततो दग्ध्वा'));
assert.ok(errata['1.1.77'].text.startsWith('ततो दग्ध्वा पुरीं लङ्कामृते सीतां च मैथिलीम्'));
assert.equal(errata['1.1.77'].lexicalVariants[0].otherReading,'सीतां तु मैथिलीम्');
assert.ok(errata['1.1.78'].text.startsWith('सोऽधिगम्य'));
assert.ok(errata['1.1.78'].latin.startsWith("so'dhigamya"));
assert.equal(errata['1.1.78'].lexicalVariants[0].parallelReading,'सः अभिगंय');
for(const lang of ['en','hi']){
 assert.match(translations.verses['76'][lang],/\.\.\.$/,'Verse 76 must remain an explicit continuing fragment.');
 assert.match(translations.verses['77'][lang],/^\.\.\./,'Verse 77 must acknowledge the continuing construction.');
 assert.ok(translations.verses['76'].connection[lang]&&translations.verses['77'].connection[lang]);
}
assert.match(translations.verses['78'].en,/“Sītā has been seen\.”/);
assert.match(translations.verses['79'].en,/\[Rāma\]/);
assert.match(translations.verses['80'].en,/had Nala build/);
assert.equal(translations.sourceVerseIds,'1.1.1–1.1.80');
const index=read('index.html');
assert.match(index,/<strong id="translatedCount">80<\/strong>/);
assert.match(index,/assets\/app\.js\?edition=1\.1\.80/);
assert.match(read('assets/app.js'),/EDITION_REVISION="1\.1\.80"/);
assert.match(read('sources.html'),/through 1\.1\.80/);
assert.match(read('sources.html'),/1\.1\.18–1\.1\.80/);
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
console.log(JSON.stringify({result:'PASS',rawSanskritRecords:rows.size,bilingualVerses:numbers.length,boundaryCheckedVerses:63,newBoundaryCheckedVerses:10,displayOverlays:corrected,boundaryRestorations:46,displayNormalizations:14,rawFlagsResolvedInDisplay:resolvedFlags,remainingBaselineFlags:flags.flagCount-resolvedFlags,nextUntranslated:'1.1.81–1.1.90'},null,2));
