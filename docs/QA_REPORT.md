# Digital Sanskrit corpus · preliminary automated QA report
**Scan date:** 2026-10-23
**Baseline source:** Ashutosh-Vijay/Valmiki_Ramayan_Dataset blob `ce3e290c437f22d9a716798cf24dcfe1365ecc02`
**Scope:** all imported `data/sanskrit/{1..7}.json` records (23,291 records in 648 sargas).
**Purpose:** Flag suspicious row-to-verse boundaries. This is a first-pass machine check, NOT critical-edition collation.

## Structural validation
- Numeric address keys (`kanda.sarga.shloka`): **23,291 unique** (no duplicate numeric keys detected).
- Sanskrit `shloka_text` field: **23,291 nonblank**.
- Recognizable embedded numeric verse reference: absent in **8** rows.
- Embedded reference mismatch OR more than one distinct embedded verse reference: **3,204** rows.
- Additional manually flagged overrun without an additional explicit reference: **1** row (`1.1.18`).
- Distinct records flagged for editorial review: **3,213** of 23,291 (approximately **13.8%**).
- **20,078** records not flagged by this specific test. Unflagged DOES NOT mean proofread, translation-ready or error-free.

## Detected anomalies by kāṇḍa
| Kāṇḍa | Total records | Embedded-reference anomaly | No recognizable marker |
|---|---:|---:|---:|
| Bāla | 2,217 | 350 | 0 |
| Ayodhyā | 4,262 | 526 | 2 |
| Araṇya | 2,439 | 382 | 0 |
| Kiṣkindhā | 2,445 | 404 | 0 |
| Sundara | 2,772 | 459 | 0 |
| Yuddha | 5,693 | 1,024 | 1 |
| Uttara | 3,463 | 59 | 5 |
| **Total** | **23,291** | **3,204** | **8** |

## Representative issue
- Bāla `1.1.18` includes a subsequent fragment in the source row despite a single explicit verse marker. This requires philological review.
- Bāla `1.1.19` and `1.1.20` contain multiple explicit verse addresses and duplicated text segments; they cannot be treated as separately verified ślokas.
- Bāla `1.1.21` and `1.1.22` similarly repeat shared content.
- `1.1.6` contains an apparent transcription error in the digital corpus. `data/errata.json` records a corrected reading cross-checked against IIT Kanpur's Southern Recension.

## Reproduce the scan
Clone the repository and run `node scripts/audit-corpus.mjs --check`. To recompute and write the manifest locally, run `node scripts/audit-corpus.mjs --write`. No GitHub Actions workflow or third-party Node package is required.

## How the scan works
1. Read every source record with its numeric `kanda.sarga.shloka` fields.
2. Detect explicitly written numeric addresses matching forms such as `1.1.19` or similar Devanāgarī punctuation around numbers.
3. Flag if the row includes distinct embedded addresses beyond its own, lacks its own expected address, or lacks a recognizable embedded address entirely.
4. Add manually observed source-overrun anomalies that are invisible to this regex check.
5. Write the flags to `data/quality-flags.json`; display the warning on each affected Sanskrit card.

## Limits and editorial rules
- This regex audit does not verify the linguistic content of the Sanskrit.
- It does not detect every missing, merged, truncated or reordered verse. It will also flag legitimate multi-verse passages requiring contextual review.
- It cannot resolve cross-recension numbering differences. Comparing the Baroda Critical Edition to the Southern Recension requires an explicit concordance.
- Never silently delete or replace the imported base record; use a documented correction/normalized layer with source location and reviewer.
- Do not publish English/Hindi or teachings for newly selected flagged verses until their text boundaries are verified.
- Before declaring a sarga complete, verify sequential addresses, exact Sanskrit segmentation, parallel same-recension witness, English/Hindi translations, references and teaching vs interpretation classification.

## Priority
**Next: Bāla Kāṇḍa Sarga 1, verses 81–90**, carefully align with a same-recension text (IIT Kanpur). Extend English, Hindi and modern context only after source QA. Update this report, published coverage, checkpoint and next-chat prompt.

## Completed boundary audit: 1.1.18–1.1.30

Thirteen verses received numbered-boundary checks. Eleven display overlays now correct 18–22 and 25–30. Raw imports and this preliminary flag manifest remain unchanged. Ten existing flags have corrected displays, leaving 3,203 unresolved baseline flags. One newly observed overrun, 1.1.25, was missed by the regex test and has also been corrected in the display.

The [detailed audit](./TEXTUAL_AUDIT_1_1_18_30.md) records source access, all hemistich mappings and interpretive decisions. Direct IIT access was unavailable. Indexed IIT Sanskrit extracts were corroborated against the complete numbered Sanskrit Documents parallel. This is a boundary check, not a full critical collation or independent human review.

Publication checks: `node scripts/verify-publication.mjs`. They verify seven immutable source hashes, 30 consecutive bilingual entries, 11 overlays reconstructed from imported hemistichs, 26 distinct hemistichs across 18–30, correct embedded addresses, bilingual annotations, source links, no internal navigation and branch publication exclusions. Browser QA covers corrected text, original-reading expansion, matching romanization, language selection, corrected search and source downloads.

GitHub Pages baseline evidence: successful built-in run [39869234028](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39869234028), head `ab2a6a6e0c4fccd21b6e09453a0f3c955ea163ea`. Its build log checks out `ref: main` and uploads `path: .`, confirming the main/root branch deployment. The root public URL returned HTTP 200 with the baseline HTML. The Settings UI required sign-in and was not inspected as an authenticated administrator. Post-commit verification passed for content commit `57f0d384f7dd90fc3ebc78f2db605ff66bd38518` and successful built-in Pages run `39879827107`. Six changed public runtime files matched committed bytes over HTTP 200. Five internal document/script/README paths returned HTTP 404. The build checked out main and used source `.`. Live browser rendering showed the corrected verses, 30 published translations and explicit pending content. See [deployment evidence](./DEPLOYMENT_VERIFICATION.md).

## Completed boundary audit: 1.1.31–1.1.40

Ten verses receive independent English and Hindi translations and ten source-preserving overlays. [The alignment and interpretation ledger](./TEXTUAL_AUDIT_1_1_31_40.md) records every hemistich, retained lexical difference and source-access limitation. Direct IIT access failed; indexed IIT base-Sanskrit extracts and the complete numbered parallel were used. No independent human reviewer or full critical collation is claimed.

The three newly resolved baseline flags are 1.1.31, 1.1.39 and 1.1.40. Seven defects in previously unflagged rows 32–38 were also corrected. Cumulative totals: 40 bilingual translations, 23 boundary-checked verses, 21 boundary overlays, thirteen baseline flags with corrected displays and 3,200 unresolved baseline flags. The earlier 1.1.6 lexical correction remains separate. The raw 3,213-flag manifest and all seven source files remain unchanged. The publication verifier now checks 46 distinct hemistichs across 18–40. All thirty previous translation objects and twelve previous errata objects match the latest-main baseline.

The next batch is exactly **1.1.41–1.1.50**. Imported rows 41–43 again combine or displace adjacent hemistichs. Start 41 with प्रविश्य तु महारण्यं… and restore सुतीक्ष्णं… to 42a. Post-push Pages and reader verification for this batch is recorded in `docs/DEPLOYMENT_VERIFICATION.md` when complete.

## Completed boundary audit: 1.1.41–1.1.50

Boundaries were aligned before translation. [The ledger](./TEXTUAL_AUDIT_1_1_41_50.md) maps all twenty imported hemistichs to the ten numbered verses. Nine new overlays restore 41–45 and 47–50; 46 is already correctly bounded. The imported वने in 48a remains explicit despite the parallel's रणे. Indexed IIT passages provide selected corroboration, with direct access unavailable. No full critical collation or independent human review is claimed.

Cumulative totals are fifty consecutive English/Hindi records, thirty-three boundary-checked verses, thirty boundary overlays and sixty-six distinct hemistichs across 18–50. The earlier 1.1.6 lexical correction remains separate. Two additional baseline flags, 44 and 45, now have corrected displays. Fifteen baseline flags are resolved in the display and 3,198 remain unresolved by boundary overlays. Seven new unflagged defects in 41–43 and 47–50 are also corrected.

Passed: `node --check assets/app.js`, `node scripts/audit-corpus.mjs --check` and `node scripts/verify-publication.mjs`. The publication verifier also checks the exact new alignment map, no translation of 51, the retained वने reading and matching `1.1.50` script/data cache markers. All forty prior translation objects and twenty-two prior errata objects match baseline `27a4232240a5e22f3bcbbedd33f676441e92b126`. Seven raw files, the flag manifest, `_config.yml` and the two earlier audit ledgers are byte-identical.

Exactly next: **1.1.51–1.1.60**, beginning न विरोधो बलवता क्षमो रावण तेन ते… in 51a. Imported rows again cross boundaries. Audit duplicate 54/55 blocks and the stray `1151` token in row 56 before translating. Publication evidence is maintained in `docs/DEPLOYMENT_VERIFICATION.md`.

## Completed boundary audit: 1.1.51–1.1.60

Numbered boundaries were established before translation. [The new ledger](./TEXTUAL_AUDIT_1_1_51_60.md) records all twenty unique imported half-verses. Ten new overlays correct all ten displays. Raw 54/55 are identical merged blocks and remain unchanged. Their content is presented once. Raw 56 retains its `1151` token, while the corrected Sanskrit excludes it and places the preceding instruction in 57a. The imported श्रमणीं remains explicit against the parallel's श्रमणाम्.

The complete numbered parallel supplies every boundary. Indexed IIT base-Sanskrit passages corroborate selected 50–55 and 57–60 passages. Direct IIT access failed, including timeouts for 56 and 59. No full fresh IIT collation or independent human reviewer is claimed.

Cumulative totals: sixty consecutive English/Hindi records, forty-three boundary-checked verses, forty boundary overlays and eighty-six unique half-verses across 18–60. The earlier 1.1.6 lexical correction is separate. Two additional baseline flags, 54 and 55, now have corrected displays. Seventeen baseline flags are resolved in the display and 3,196 remain unresolved by these overlays. Eight unflagged defects in 51–53 and 56–60 are corrected. Raw counts and the preliminary 3,213-flag manifest remain unchanged.

Passed: JavaScript syntax, corpus-manifest and publication checks. All fifty earlier translation objects, thirty-one earlier correction objects, seven raw files, the flag manifest, `_config.yml` and three earlier audit ledgers match baseline `65881d11f3a9dfeb9b6d41d47474d8c04f4b4d6c`. Both edition markers are `1.1.60`.

Exactly next: **1.1.61–1.1.70**, beginning चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम् from raw row 60. Audit the complete range, including duplicated rows 63/64, before translating. Deployment and focused reader evidence are maintained in `docs/DEPLOYMENT_VERIFICATION.md`.


## Completed boundary audit: 1.1.61–1.1.70

Date: 24 October 2026, Asia/Kolkata. [The new ledger](./TEXTUAL_AUDIT_1_1_61_70.md) records boundaries established before translation, actual source access and lexical differences. Four restorations recover 61–64, starting with the pact from raw 60:2 and using the duplicated raw 63/64 block once. Six display/IAST normalizations on correctly bounded 65–70 do not count as new boundary defects. All ten have traceable mappings and imported-reading disclosures.

Direct IIT opens failed. Indexed sarga Sanskrit corroborates selected 61–64, 66–67 and 70 blocks, and indexed separately numbered Sanskrit embedded in a multi-commentary page corroborates 63–70. The complete numbered parallel supplies every boundary. Its printed differences at 64–65 and the IIT तथा/तदा difference at 66 are disclosed without replacing imported lexemes. No fresh full IIT collation or independent human review is claimed.

Totals: seventy bilingual records; fifty-three boundary-checked verses; 106 distinct half-verses; forty-four boundary restorations plus six display normalizations. The separate 1.1.6 lexical correction makes fifty-one errata objects overall. Baseline flags 63 and 64 now have corrected displays, bringing the resolved count to nineteen and the unresolved count to 3,194. Two unflagged boundary defects, 61 and 62, are also corrected. The original 3,213-flag manifest remains unchanged.

JavaScript syntax, corpus-manifest and publication verification pass. All sixty previous translation objects, forty-one previous correction objects, seven raw files, the manifest, `_config.yml` and four older ledgers match baseline `58f3e1da511a2973cb9d3c8fdb3ec0da9d0089fd`. Runtime logic is unchanged except for the edition marker. Both markers are `1.1.70`. Post-commit public verification is recorded separately when observed.

Exactly next: **1.1.71–1.1.80**, beginning स च सर्वान्समानीय वानरान्वानरर्षभः. Audit duplicated raw rows 76/77 and continuing clauses before translation.


## Boundary check completed for 1.1.71–1.1.80

Date: 24 October 2026, Asia/Kolkata. [The ledger](./TEXTUAL_AUDIT_1_1_71_80.md) establishes every boundary before translation and distinguishes actual cached/indexed evidence from fresh direct access. The complete numbered `sites/valmikiramayan` parallel supplies all ten boundaries. Cached IIT 71 and 76 pages corroborate 71 and separately marked 76–77. Indexed IIT base Sanskrit supplies the remaining blocks. The direct sarga, 77 and 80 opens timed out; 74 and 78 were inaccessible. No full fresh IIT download, critical collation or independent human review is claimed.

Two overlays separate the duplicated four-half-verse raw 76/77 block. Eight others normalize already correctly bounded displays and matching IAST. All raw rows and all work through 70 remain intact. The double avagraha at 74, च निवेद्य च, च मैथिलीम् at 77 and अधिगम्य at 78 are retained. Distinct numbered commentary readings विनिवेद्य, तु and अभिगम्य, and the parallel’s printed अभिगंय, are disclosed. Previous श्रमणीं, वने and तथा are preserved.

Nārada narrates to Vālmīki throughout. Verse 76 remains a continuing fragment completed by 77. Hanumān’s actual short report is quoted at 78. All supplied names and words are marked. No ring specification, invented dialogue, modern yojana conversion, construction method or moral instruction endorsing violence is added. Connected notes, modern context and teachings remain separate and bilingual.

Coverage: eighty consecutive bilingual records, sixty-three checked verses and 126 unique half-verses. Sixty display overlays comprise forty-six restorations and fourteen normalizations; the separate earlier lexical correction makes sixty-one errata objects. Twenty-one baseline flags have corrected displays; 3,192 remain unresolved by these overlays. All seventy previous translation objects and fifty-one previous correction objects retain both their values and exact value bytes. Seven raw files, the flag manifest, exclusions, CSS and five previous ledgers are byte-identical. Both edition markers are `1.1.80`.

JavaScript syntax, corpus, publication, baseline preservation and independent Devanāgarī/IAST checks pass. Publication evidence is recorded separately after observation. Exactly next: **1.1.81–1.1.90**, beginning **तेन गत्वा पुरीं लङ्कां हत्वा रावणमाहवे**. Audit 83/84 ordering explicitly against numbered IIT base Sanskrit and the complete parallel; do not silently transfer another arrangement or Baroda numbering.
