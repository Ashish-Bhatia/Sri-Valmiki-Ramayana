# Verified publication: Bāla Kāṇḍa 1.1.51–1.1.60

Date: 23 October 2026, Asia/Kolkata.
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Verified reader: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/?k=1&s=1&v=60

## Current release

- Translation, audit and cache-marker commit: [97b4168e9473909cf15bc88630d2a5ce61dba791](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/97b4168e9473909cf15bc88630d2a5ce61dba791).
- Successful managed Pages run: [40004902628](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/40004902628).
- Build job `120590218426`; deploy job `120590432606`; both completed successfully. The run's final result is `completed / success`.
- Inspected build logs check out `ref: main`, run Jekyll with `source: .`, record the matching `build_revision`, load `/github/workspace/./_config.yml`, and explicitly exclude `/scripts`, `/README.md` and `/docs`.
- Workflow path: GitHub-managed `dynamic/pages/pages-build-deployment`. No repository `.github/workflows` directory or custom deployment workflow exists. `.nojekyll` remains absent.
- Administrative settings were not read. The actual successful build inputs and deployed output establish main/root.
- Baseline main `65881d11f3a9dfeb9b6d41d47474d8c04f4b4d6c` also had successful managed run `39888137638`, build job `120201087696` and deploy job `120201221917`, with matching main/root inputs and exclusions. The pre-deployment root request returned the older fifty-verse HTML. After deployment, fresh root requests without a query and with `edition=1.1.60` returned exact new HTML with HTTP 200.

## Public integrity and exclusions

Fourteen public paths returned HTTP 200 with exact content-commit bytes, using `edition=1.1.60` checks:

- `index.html` and `sources.html`.
- `assets/app.js` and `assets/styles.css`.
- `data/translations/1-1.json`, exactly sixty consecutive bilingual records.
- `data/errata.json`, forty boundary overlays and the unchanged earlier 1.1.6 lexical correction.
- The unchanged `data/quality-flags.json`.
- All seven immutable `data/sanskrit/{1..7}.json` downloads.

Selected SHA-256 evidence:

| File | SHA-256 |
|---|---|
| index.html | `2142de741b831f44774a3f629ea9d710c0db7865ca1433cc2c9c72319198bf7b` |
| assets/app.js | `e6cbcfc37b5cf09d4120e11bc52c41d11832263c64c89c979da72984681062df` |
| data/translations/1-1.json | `cdc9bea1b882c0fb0b5901034a8588042a99d3c038a4f8c9cd3cdbd647aeb3a7` |
| data/errata.json | `7a92344547cda9e4fe2fdce23f6e5d993dacea5abc88e664d1c8df0bac3d09d4` |

Both edition markers are `1.1.60`. All seven raw SHA-256 hashes and the preliminary flag manifest match baseline. Seventeen original flags have corrected displays; 3,196 remain unresolved by these overlays. These figures do not establish complete textual correctness.

All sixteen internal/prohibited paths returned HTTP 404:

- `docs/PROJECT_STATE.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/SOURCES.md`
- `docs/TEXTUAL_AUDIT_1_1_18_30.md`
- `docs/TEXTUAL_AUDIT_1_1_31_40.md`
- `docs/TEXTUAL_AUDIT_1_1_41_50.md`
- `docs/TEXTUAL_AUDIT_1_1_51_60.md`
- `docs/QA_REPORT.md`
- `docs/DEPLOYMENT_VERIFICATION.md`
- `scripts/audit-corpus.mjs`
- `scripts/verify-publication.mjs`
- `README.md`
- `AGENTS.md`
- `.nojekyll`
- `.github/workflows/pages.yml`
- `_config.yml`

`AGENTS.md`, `.nojekyll` and the custom workflow path are also absent from the repository. Internal project records remain available in GitHub; these exclusions apply to the Pages output.

## Live reader checks

Observed in the live reader:

- Sixty published translations and `./assets/app.js?edition=1.1.60`.
- Verse 51 begins exactly न विरोधो बलवता क्षमो रावण तेन ते and ends after अनादृत्य… with its own 1.1.51 marker. Mārīca's actual speech, continuing-clause note, English/Hindi, context and teaching are distinct.
- Verse 56 contains exactly its two half-verses. Its expanded original-reading disclosure includes the untouched third half-verse and stray `1151`. Corrected Sanskrit excludes that token.
- Verse 57's romanization begins `śramaṇīṃ dharmanipuṇāmabhigaccheti rāghava`, preserving the imported lexical reading.
- Hindi-only selection shows twelve Hindi translation blocks on the tested page, zero English translation blocks and Hindi-only connected-verse notes. The reader was restored to both languages.
- Search for कबन्धन्नाम रूपेण returns one corrected match, 1.1.55, without repeated raw 54/55 content.
- Verse 60 has आदितस्तद्यथावृत्तं… / सुग्रीवश्चापि… with its own marker, separate English/Hindi and annotations. The friendship pact is not moved in from 61a.
- Verse 61 remains explicitly pending in both languages.
- The verse-56 copy button succeeds. Its clipboard payload was read and equals `1.1.56` followed by the exact corrected Sanskrit, including its retained internal whitespace, with no `1151` or extra 57a half-verse.
- No internal navigation or horizontal overflow was found at the tested desktop viewport. No separate mobile viewport test is claimed.
- Final state: both languages, transliteration off, verse 60 selected at the verified reader URL above.

## Validation, textual limits and next action

Passed: JavaScript syntax, unchanged corpus-manifest and publication verification. All fifty earlier translation objects, thirty-one earlier errata objects, seven raw files, the flag manifest, `_config.yml` and three earlier audit ledgers match baseline. The expanded verifier checks sixty bilingual records, forty-three checked verses, forty overlays and eighty-six distinct half-verses, with exact new mappings and raw duplicate/token preservation.

[The audit](./TEXTUAL_AUDIT_1_1_51_60.md) records every half-verse and the retained श्रमणीं / parallel श्रमणाम् difference. The complete numbered parallel supplies all boundaries. Indexed IIT base-Sanskrit blocks corroborate selected 50–55 and 57–60 passages, with direct access unavailable and timeouts recorded for 56 and 59. This is not a full critical collation or independent human review. Earlier translations 1–17 retain their prior provisional status.

Exactly next: **Bāla Kāṇḍa, Sarga 1, 1.1.61–1.1.70**, starting चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम् from raw row 60:2. Audit the entire range first, including duplicated raw rows 63/64.

This follow-up evidence commit changes only excluded internal records and both continuity checkpoints. Public runtime bytes remain identical to the verified content release. Its own managed branch result must be checked before final handoff; this record does not claim its future run was inspected.

---

## Earlier verification record: coverage through 1.1.50

# Verified publication: Bāla Kāṇḍa 1.1.41–1.1.50

Date: 23 October 2026, Asia/Kolkata.
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Verified reader: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/?k=1&s=1&v=50

## Current release

- Translation, audit and cache-marker commit: [0abbe950729869ed8fc7e64d4467ace5eab28dd1](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/0abbe950729869ed8fc7e64d4467ace5eab28dd1).
- Successful managed Pages run: [39887733062](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39887733062).
- Build job `120199746759`; deploy job `120199880189`; both completed successfully.
- The actual build log checks out `ref: main`, runs Jekyll with `source: .`, records `build_revision: 0abbe950729869ed8fc7e64d4467ace5eab28dd1` and loads `/github/workspace/./_config.yml`.
- The log explicitly reports `EntryFilter: excluded /scripts`, `/README.md` and `/docs`.
- Workflow path: GitHub-managed `dynamic/pages/pages-build-deployment`. No repository `.github/workflows` directory or custom deployment workflow exists. `.nojekyll` remains absent.
- Administrative Pages settings were not read. Main/root is verified from the successful build inputs and public output.
- The baseline main before editing, `27a4232240a5e22f3bcbbedd33f676441e92b126`, also had successful managed run `39886119077` with matching main/root inputs and exclusions. Its public root HTML matched baseline bytes.

## HTTP integrity and exclusions

Fourteen public paths returned HTTP 200 with bytes identical to the content commit, using `edition=1.1.50` query checks:

- `index.html` and `sources.html`.
- `assets/app.js` and `assets/styles.css`.
- `data/translations/1-1.json`, exactly fifty consecutive bilingual records.
- `data/errata.json`, thirty boundary overlays plus the unchanged earlier 1.1.6 lexical correction.
- The unchanged `data/quality-flags.json`.
- All seven immutable `data/sanskrit/{1..7}.json` downloads.

Both runtime markers are `1.1.50`. The live browser loaded the matching script URL and fifty-verse data. The seven raw SHA-256 hashes and the preliminary flag manifest match the baseline. Fifteen baseline flags now have corrected displays; 3,198 remain unresolved by boundary overlays. These counts are not a claim of full textual completeness.

All thirteen internal/prohibited paths below returned HTTP 404:

- `docs/PROJECT_STATE.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/SOURCES.md`
- `docs/TEXTUAL_AUDIT_1_1_41_50.md`
- `docs/TEXTUAL_AUDIT_1_1_31_40.md`
- `docs/QA_REPORT.md`
- `docs/DEPLOYMENT_VERIFICATION.md`
- `scripts/audit-corpus.mjs`
- `scripts/verify-publication.mjs`
- `README.md`
- `AGENTS.md`
- `.nojekyll`
- `.github/workflows/pages.yml`

`AGENTS.md`, `.nojekyll` and the custom workflow path are also absent from the repository. Internal records remain in GitHub; the exclusions apply to the Pages site.

## Live reader checks

Observed in the live browser after reloading the new release:

- Fifty published bilingual translations and the `./assets/app.js?edition=1.1.50` script URL.
- Verse 41 contains exactly प्रविश्य तु महारण्यं… / विराधं राक्षसं… and its own 1.1.41 marker. Its English/Hindi and connected-verse note are visible. Modern context is a separate section.
- Verse 42 starts सुतीक्ष्णं चाप्यगस्त्यं च… and ends with the acceptance of Indra's bow.
- Verse 41's disclosure opens the unchanged merged imported text, including its extra सुतीक्ष्णं… half-verse. Corrected and imported romanizations remain distinct.
- Search for सुतीक्ष्णं returns exactly one corrected record, 1.1.42, without repeating the imported overrun in 41.
- Hindi-only selection removes the English translation block and switches the connected-verse note to Hindi. The reader was restored to both languages.
- Verse 50 contains सहायं वरयामास… / वार्यमाणस्सुबहुशो… with exactly its own numeric marker. Its English/Hindi, continued-clause note, modern context and selected teaching are displayed separately. Mārīca's actual warning is not moved into 50.
- Verse 51 remains explicitly pending in both translation columns.
- The verse-50 copy button reports success. Clipboard contents were read and match `1.1.50` followed by the exact corrected two-hemistich Sanskrit display, without the imported 51a warning.
- No internal navigation links or horizontal overflow were found at the tested desktop viewport. No separate mobile viewport test is claimed.
- Final reader state: both languages, transliteration off, verse 50 selected.

## Local validation and editorial limits

Passed: JavaScript syntax, unchanged corpus-manifest checks and publication verification. All forty prior translation objects, twenty-two prior errata objects, seven raw files, the flag manifest, publication exclusions and earlier audit ledgers match baseline.

The [new audit](./TEXTUAL_AUDIT_1_1_41_50.md) maps every imported hemistich. The complete numbered parallel supplies all boundaries; indexed IIT passages corroborate selected passages, with direct IIT access unavailable. The imported वने in 48a remains explicit against the parallel's रणे. No full critical collation or independent human review is claimed. Earlier 1–17 translations retain their provisional status.

Exactly next: **Bāla Kāṇḍa, Sarga 1, 1.1.51–1.1.60**, starting न विरोधो बलवता क्षमो रावण तेन ते… in 51a. Audit the whole range before translating, including duplicated 54/55 blocks and the stray `1151` token in raw row 56.

This evidence update changes only excluded internal documents and both continuity checkpoints. Public runtime bytes remain identical to the verified content commit. Check the follow-up managed branch build before final handoff; this record does not claim its own future run was inspected.

---

## Earlier verification record: coverage through 1.1.40

# Verified publication: Bāla Kāṇḍa 1.1.31–1.1.40

Date: 23 October 2026, Asia/Kolkata.
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Verified reader: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/?k=1&s=1&v=40

## Current release

- Translation and boundary-audit commit: [65c589d381b607268d0f70733334e2dfede677f8](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/65c589d381b607268d0f70733334e2dfede677f8).
- Successful managed Pages run: [39885497223](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39885497223). Build job `120192607921`; deploy job `120192748213`.
- Cache-refresh runtime commit: [988c6db553649a763c770d2d52f5f012ff33833b](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/988c6db553649a763c770d2d52f5f012ff33833b).
- Successful managed Pages run: [39885804360](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39885804360). Build job `120193574475`; deploy job `120193711369`.
- Both build logs check out `ref: main`, record their corresponding `build_revision`, run Jekyll with `source: .` and `destination: ./_site`, and load `/github/workspace/./_config.yml`.
- Both build logs explicitly report `EntryFilter: excluded /scripts`, `/README.md` and `/docs`.
- Workflow path: GitHub-managed `dynamic/pages/pages-build-deployment`. No repository `.github/workflows` directory or custom deployment workflow exists. `.nojekyll` remains absent.
- Administrative Settings was not read. Main/root deployment is verified from the actual successful build inputs and public output, rather than an unsupported claim to have inspected the settings API.

## HTTP integrity and exclusions

The content release returned HTTP 200 with bytes identical to the committed files for thirteen public paths: `index.html`, `sources.html`, `assets/app.js`, `assets/styles.css`, `data/translations/1-1.json`, `data/errata.json` and all seven `data/sanskrit/{1..7}.json` downloads. Translation coverage is exactly 1–40; there are twenty-two errata entries, including the retained 1.1.6 lexical correction. Raw Sanskrit hashes remain unchanged.

Unversioned HTTP requests also returned the new forty-verse `index.html`, translations and errata. However, the browser retained the older cached thirty-verse data. The follow-up runtime change adds `edition=1.1.40` to the script URL and the translation/errata request URLs. All four release-specific URLs returned HTTP 200 with exact final bytes after deployment. No translation or source text changed in the cache-refresh commit. The revision marker must advance alongside the next publication.

After the cache-refresh deployment, all nine of the following paths returned HTTP 404:

- `docs/PROJECT_STATE.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/SOURCES.md`
- `docs/TEXTUAL_AUDIT_1_1_31_40.md`
- `docs/QA_REPORT.md`
- `scripts/audit-corpus.mjs`
- `scripts/verify-publication.mjs`
- `README.md`
- `AGENTS.md`, which is prohibited in public output and is also absent from the repository.

Internal records remain available in GitHub. The exclusion requirement applies to the Pages site, not to the public repository.

## Live reader checks

Observed in the live browser after loading the refreshed release:

- Forty published bilingual translations.
- Correct 1.1.31 begins चित्रकूटमनुप्राप्य…, with exactly its two hemistichs, English/Hindi, connected-verse notes, separate modern context and selected teachings.
- The disclosure opens the unchanged imported merged reading. Romanization follows the corrected text.
- Search for चित्रकूटमनुप्राप्य yields exactly one corrected verse, 31, rather than duplicated imported blocks.
- Hindi-only selection removes the English translation block and switches connected-verse/context/teaching paragraphs to Hindi.
- Verse 36 correctly presents Bharata's quoted request, followed by the description of Rāma.
- Verse 40 displays exactly रामस्तु पुनरालक्ष्य… / तत्रागमनमेकाग्रो…, both translations and separate editorial sections. Verse 41 remains explicitly pending in both languages.
- No internal navigation links were present. The tested desktop viewport had no horizontal overflow. No separate mobile viewport test is claimed.
- The copy button displayed “Sanskrit verse copied”. The automation clipboard reader returned an empty string, so clipboard payload verification is not claimed.

The reader was restored to both languages with transliteration off. Its final checked URL is the verse-40 address above.

## Textual limits and next action

The source check uses the complete numbered parallel and available indexed IIT base-Sanskrit extracts. Direct IIT and replacement-portal access failed. Imported lexical variants are retained and documented. No full critical collation or independent human review is claimed. Previous 1–17 translations retain their provisional status.

Local syntax, corpus-manifest and publication checks passed. All thirty previous translation objects, twelve previous correction objects, seven raw files and the preliminary flag manifest are preserved. Exactly next: **Bāla Kāṇḍa, Sarga 1, 1.1.41–1.1.50**, after reading the latest checkpoints and alignment ledger.

This evidence update changes only excluded internal records. The public files remain the verified runtime release above. Check the newest managed branch build before the next content update.

---

## Earlier verification record: coverage through 1.1.30

# Verified GitHub Pages publication

Date: 23 October 2026, Asia/Kolkata.

- Public website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
- Content commit: [57f0d384f7dd90fc3ebc78f2db605ff66bd38518](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/57f0d384f7dd90fc3ebc78f2db605ff66bd38518).
- GitHub-managed branch build: [39879827107](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39879827107), completed, success.
- Build job `120174250002`: checkout `ref: main`, Jekyll `source: .`, destination `/github/workspace/./_site`, successful artifact upload.
- Deploy job `120174372246`: completed, success.
- Workflow path is GitHub-managed `dynamic/pages/pages-build-deployment`. No repository workflow was added. The repository has no `.github/workflows` directory.
- Authenticated Settings was not available. The selected branch and root folder are verified by the actual successful managed build inputs, rather than a claim to have read the administrative settings API.

## Public files

The following returned HTTP 200 with bytes equal to the committed local versions, including query-based cache verification:

1. `index.html`
2. `assets/app.js`
3. `assets/styles.css`
4. `data/translations/1-1.json`, containing 30 consecutive bilingual records.
5. `data/errata.json`, containing the retained earlier correction plus eleven new boundary overlays.
6. `sources.html`, with seven Sanskrit download links and reader-facing attribution.

All seven public `data/sanskrit/{1..7}.json` downloads also returned HTTP 200 and matched the immutable imported bytes. Their record counts sum to 23,291.

The live browser at `?k=1&s=1&v=30` displayed the exact corrected 1.1.30, English and Hindi translations, separate connected-verse notes and explicit pending labels for 1.1.31 onward. Preview checks also passed original-reading expansion, romanization, Hindi-only display, bilingual notes, corrected search, copy, share links and lack of horizontal overflow at the tested viewport. No separate mobile viewport test is claimed.

## Internal files excluded from the public site

All five returned HTTP 404:

- `docs/PROJECT_STATE.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/SOURCES.md`
- `scripts/audit-corpus.mjs`
- `README.md`

These records remain available through the GitHub repository. `_config.yml` is required for this separation. Reintroducing `.nojekyll` would bypass the exclusions.

## Editorial limits retained

This verification establishes publication and file integrity, not a fully verified Sanskrit corpus. The new 1.1.18–30 boundary check used indexed IIT Sanskrit extracts and the complete numbered parallel, with direct IIT access unavailable. Previous translations 1–17 retain their provisional status. The exact next untranslated batch is **1.1.31–1.1.40**.

This follow-up evidence commit changes only excluded internal documents. The public runtime files remain the byte-identical content verified above. Its own automatic branch build should be checked before the final user handoff.
