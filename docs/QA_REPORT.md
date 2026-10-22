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
**Next: Bāla Kāṇḍa Sarga 1, verses 18–30**, carefully align with a same-recension text (IIT Kanpur). Extend English, Hindi and modern context only after source QA. Update this report, published coverage, checkpoint and next-chat prompt.
