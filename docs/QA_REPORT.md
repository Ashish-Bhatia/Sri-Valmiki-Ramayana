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
**Next: Bāla Kāṇḍa Sarga 1, verses 41–50**, carefully align with a same-recension text (IIT Kanpur). Extend English, Hindi and modern context only after source QA. Update this report, published coverage, checkpoint and next-chat prompt.

## Completed boundary audit: 1.1.18–1.1.30

Thirteen verses received numbered-boundary checks. Eleven display overlays now correct 18–22 and 25–30. Raw imports and this preliminary flag manifest remain unchanged. Ten existing flags have corrected displays, leaving 3,203 unresolved baseline flags. One newly observed overrun, 1.1.25, was missed by the regex test and has also been corrected in the display.

The [detailed audit](./TEXTUAL_AUDIT_1_1_18_30.md) records source access, all hemistich mappings and interpretive decisions. Direct IIT access was unavailable. Indexed IIT Sanskrit extracts were corroborated against the complete numbered Sanskrit Documents parallel. This is a boundary check, not a full critical collation or independent human review.

Publication checks: `node scripts/verify-publication.mjs`. They verify seven immutable source hashes, 30 consecutive bilingual entries, 11 overlays reconstructed from imported hemistichs, 26 distinct hemistichs across 18–30, correct embedded addresses, bilingual annotations, source links, no internal navigation and branch publication exclusions. Browser QA covers corrected text, original-reading expansion, matching romanization, language selection, corrected search and source downloads.

GitHub Pages baseline evidence: successful built-in run [39869234028](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39869234028), head `ab2a6a6e0c4fccd21b6e09453a0f3c955ea163ea`. Its build log checks out `ref: main` and uploads `path: .`, confirming the main/root branch deployment. The root public URL returned HTTP 200 with the baseline HTML. The Settings UI required sign-in and was not inspected as an authenticated administrator. Post-commit verification passed for content commit `57f0d384f7dd90fc3ebc78f2db605ff66bd38518` and successful built-in Pages run `39879827107`. Six changed public runtime files matched committed bytes over HTTP 200. Five internal document/script/README paths returned HTTP 404. The build checked out main and used source `.`. Live browser rendering showed the corrected verses, 30 published translations and explicit pending content. See [deployment evidence](./DEPLOYMENT_VERIFICATION.md).

## Completed boundary audit: 1.1.31–1.1.40

Ten verses receive independent English and Hindi translations and ten source-preserving overlays. [The alignment and interpretation ledger](./TEXTUAL_AUDIT_1_1_31_40.md) records every hemistich, retained lexical difference and source-access limitation. Direct IIT access failed; indexed IIT base-Sanskrit extracts and the complete numbered parallel were used. No independent human reviewer or full critical collation is claimed.

The three newly resolved baseline flags are 1.1.31, 1.1.39 and 1.1.40. Seven defects in previously unflagged rows 32–38 were also corrected. Cumulative totals: 40 bilingual translations, 23 boundary-checked verses, 21 boundary overlays, thirteen baseline flags with corrected displays and 3,200 unresolved baseline flags. The earlier 1.1.6 lexical correction remains separate. The raw 3,213-flag manifest and all seven source files remain unchanged. The publication verifier now checks 46 distinct hemistichs across 18–40. All thirty previous translation objects and twelve previous errata objects match the latest-main baseline.

The next batch is exactly **1.1.41–1.1.50**. Imported rows 41–43 again combine or displace adjacent hemistichs. Start 41 with प्रविश्य तु महारण्यं… and restore सुतीक्ष्णं… to 42a. Post-push Pages and reader verification for this batch is recorded in `docs/DEPLOYMENT_VERIFICATION.md` when complete.
