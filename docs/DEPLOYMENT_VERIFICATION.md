# Release checkpoint: Bāla Kāṇḍa 1.1.71–1.1.80

Date: 24 October 2026, Asia/Kolkata.
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/

## Baseline build inspected before editing

- Latest main was `9c55fdf15b8e81a41fcd6c8a71d602041a3b25aa`.
- Managed run [40013216331](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/40013216331) completed successfully. Build `120618597377` and deploy `120618842614` passed.
- Inspected build log: checkout `ref: main`; Jekyll source `.`; matching baseline build revision; `/github/workspace/./_config.yml`; explicit exclusions for `/scripts`, `/README.md` and `/docs`.
- Actual build inputs establish **main / (root)**. Administrative Pages settings were not read. The workflow is GitHub-managed `dynamic/pages/pages-build-deployment`; the repository has no custom workflow and `.nojekyll` is absent.

## New content release

Local syntax, corpus, publication, baseline-preservation and independent Sanskrit/IAST checks pass for eighty bilingual records. Both cache markers are `1.1.80`. Seventy prior translations and fifty-one prior corrections retain exact values and value bytes; fifteen immutable whole files match baseline. The raw corpus and preliminary 3,213-flag manifest are unchanged.

The new content commit and its managed build do not yet exist at this checkpoint. New-release HTTP byte comparisons, internal-file exclusions and focused live reader checks are **pending**. Record them only after observing the published revision. The previous verified seventy-verse release and its evidence follow below.

---

# Verified publication: Bāla Kāṇḍa 1.1.61–1.1.70

Date: 24 October 2026, Asia/Kolkata.
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Verified reader: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/?k=1&s=1&v=70

## Release and actual managed build

- Content commit: [1c88bc2fb10d24c6c2a6f4b28813ba419407c2c3](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/1c88bc2fb10d24c6c2a6f4b28813ba419407c2c3). Its Git tree is `1b82d15818c7f29fb9ad1763f5122186e940c136`, identical to the fully checked local content tree. The connected GitHub tools published the atomic commit with an expected-head check. A local Git push lacked credentials and did not change remote main; no credential, permission or workflow was changed.
- Managed Pages run: [40012541012](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/40012541012), **completed / success**.
- Build job `120616297231` and deploy job `120616457642` completed successfully. Workflow path: `dynamic/pages/pages-build-deployment`, event `dynamic`.
- Inspected logs explicitly check out `ref: main`, run Jekyll with `source: .`, record `build_revision: 1c88bc2fb10d24c6c2a6f4b28813ba419407c2c3`, load `/github/workspace/./_config.yml`, and report `EntryFilter: excluded /scripts`, `/README.md` and `/docs`.
- Actual successful build inputs establish **main / (root)**. Administrative Pages settings were not read. No repository `.github/workflows` directory or custom workflow exists; `.nojekyll` remains absent. `_config.yml` is byte-identical to baseline.
- Latest-main baseline before editing, `58f3e1da511a2973cb9d3c8fdb3ec0da9d0089fd`, also has successful managed run `40005649424`, build `120592755827` and deploy `120593017308`, with inspected main/root inputs, matching revision and exclusions. Its public root returned HTTP 200.

## Exact public bytes and exclusions

Fourteen public files returned **HTTP 200 with bytes identical to the content commit**, using `edition=1.1.70`: `index.html`, `sources.html`, `assets/app.js`, `assets/styles.css`, `data/translations/1-1.json`, `data/errata.json`, `data/quality-flags.json` and all seven `data/sanskrit/{1..7}.json` downloads. Both plain root and edition-query root also returned HTTP 200 with the exact committed HTML.

| File | SHA-256 |
|---|---|
| index.html | `23dc4bbb3446839e8f9dba87dbdbda3cf302fe70b9f1f474173f6655ad58f849` |
| assets/app.js | `5466c13b7ca0e2c82c72735f971eca4a276f2c637706998779e80ca3efab2e6e` |
| data/translations/1-1.json | `7d224096a2592351dcd1a4347f914781d94cc844daa4194b7b5daadb17466e30` |
| data/errata.json | `a898bec67aa905845267820ac1d1895ad300b684ae1f44a717b256c1257e39bc` |

Both edition markers are **1.1.70**. Public translations contain seventy consecutive bilingual records. The fifty display overlays comprise forty-four boundary restorations and six display normalizations, plus the separate earlier lexical correction. Raw Sanskrit and the preliminary flag manifest retain their baseline hashes. Nineteen baseline flags have corrected displays; 3,194 remain unresolved by the overlays.

All **seventeen** internal/prohibited paths returned **HTTP 404**:

- `docs/DEPLOYMENT_VERIFICATION.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/PROJECT_STATE.md`
- `docs/QA_REPORT.md`
- `docs/SOURCES.md`
- `docs/TEXTUAL_AUDIT_1_1_18_30.md`
- `docs/TEXTUAL_AUDIT_1_1_31_40.md`
- `docs/TEXTUAL_AUDIT_1_1_41_50.md`
- `docs/TEXTUAL_AUDIT_1_1_51_60.md`
- `docs/TEXTUAL_AUDIT_1_1_61_70.md`
- `scripts/audit-corpus.mjs`
- `scripts/verify-publication.mjs`
- `README.md`
- `AGENTS.md`
- `.nojekyll`
- `.github/workflows/pages.yml`
- `_config.yml`

All internal Markdown records, both local check scripts and README are excluded from Pages. AGENTS, `.nojekyll` and custom workflow paths are also absent from the repository. These exclusions concern Pages output; the internal records remain available in the public GitHub repository.

## Focused live reader checks

- Live DOM showed **70** published translations and script `./assets/app.js?edition=1.1.70`. Verses 61–70 had exactly the committed corrected Sanskrit, their own numeric addresses and the independently authored English/Hindi. Verses 71 and 72 remained explicitly pending.
- Verse **61 begins चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम्**. ततो वानरराजेन… is its second half. Both continuing fragments and bilingual connected-verse notes were visible. Connected notes, modern context and teachings use separate reader sections.
- Corrected 63 and 64 appear as separate verses. The expanded original disclosure at 64 was visibly open and retained the unchanged merged import, including its 63 marker. The duplicate raw content is not repeated in the corrected sequence.
- The transliteration toggle displayed corrected 64 and 65 IAST, including `rāghavapratyayārthaṃ`, `dundubheḥ` and `pādāṅguṣṭhena`. Verse 66 retained **तथा** and disclosed the distinct indexed IIT **तदा** witness. The new correctly bounded rows are labelled normalization overlays rather than additional boundary defects in their textual notes.
- Hindi-only selection produced **12 Hindi translation blocks, zero English translation blocks**, and Hindi-only connected notes, modern context and teachings. This includes the pending blocks for 71–72. Both languages were restored afterward.
- Search for **राघवप्रत्ययार्थं तु दुन्दुभेः कायमुत्तमम्** returned exactly **one** corrected record, 1.1.64, with no duplicated raw 63/64 result.
- The verse-64 copy control succeeded. Read clipboard text matched **exactly** `1.1.64`, newline, and its two corrected Sanskrit half-verses with marker. There was no extra raw 63 half-verse. The feedback region had `role="status"`, `aria-live="polite"` and “Sanskrit verse copied”. Actual screen-reader speech was not tested.
- Keyboard Tab from the verse selector moved focus to **Copy verse 1.1.61**, with visible focus outline. This is a focused keyboard check, not a full accessibility audit.
- No internal navigation links or horizontal overflow at the tested **1348 CSS-pixel desktop width**. Screenshot review confirmed the visible Sanskrit and distinct note layout. No separate mobile viewport test is claimed.
- All **26** inspected warning/error messages came from the browser extension's metadata script. No site-origin warning/error appeared in that inspected log set. This does not claim control over browser-extension internals.
- Final state: both languages, transliteration off, search empty, verse **70** selected at the verified reader URL above.

## Preservation, textual limits and next step

Passed: JavaScript syntax, unchanged corpus-manifest check, expanded publication verification, explicit baseline comparisons and an independent Devanāgarī-to-IAST character-mapping check. All **60** prior translation objects, **41** prior errata objects, seven raw files, the quality manifest, exclusions and four previous audit ledgers match baseline. Runtime logic changed only at its edition marker.

[The new audit](./TEXTUAL_AUDIT_1_1_61_70.md) records all twenty distinct half-verses, actual source access and lexical/typographic differences. The complete numbered parallel supplies every boundary. IIT evidence was indexed, with direct access unavailable; no full fresh IIT collation or independent human reviewer is claimed. Earlier 1–17 translations retain their provisional status. The documented श्रमणीं in 57a and वने in 48a remain unchanged.

Exactly next: **1.1.71–1.1.80**, beginning **स च सर्वान्समानीय वानरान्वानरर्षभः**. Audit duplicated raw rows **76/77**, their continuing clauses and all boundaries before translation.

This evidence update changes excluded internal records and both continuity checkpoints only. Verified public runtime bytes remain unchanged. Check its resulting managed branch run before final handoff; this document does not claim to have inspected its own future run.

---

## Earlier verification record: coverage through 1.1.60

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
