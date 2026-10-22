# PROJECT STATE · CONTROLLING CHECKPOINT
**Checkpoint date:** 2026-10-23 (Asia/Kolkata)
**Repository:** https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana
**Pages target:** https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
**Site title:** Sri Valmiki Ramayana (A Version of the AI Era)

## Immutable requirements
- GitHub Pages source is **main / (root)**. Never add or rely on a custom GitHub Actions deployment workflow. Retain `.nojekyll`.
- Traditional 7 kāṇḍas, in order: Bāla → Ayodhyā → Araṇya → Kiṣkindhā → Sundara → Yuddha → Uttara. Preserve their sarga order and each imported śloka numeric address.
- Display the Sanskrit original, independently authored English and Hindi for reviewed verses, separately labelled modern context and key teaching.
- Academic honesty: edition variants and textual errors must be explicit. Do not assert a modern digital transcription is the unique original Sanskrit manuscript.
- At the end of **every** user-facing response provide a copy-ready **NEXT CHAT PROMPT** with the exact next action. In each repository commit, update this file and `docs/NEXT_CHAT_PROMPT.md`.

## Progress ledger
- [x] Confirmed target repository, public, default branch main (initially only README).
- [x] Researched source traditions: IIT Kanpur Southern Recension, Sanskrit Documents Baroda Critical Edition digitization, GRETIL's non-commercial e-text restrictions.
- [x] Imported Sanskrit corpus via seven Git blobs (23,291 individual uniquely addressed Sanskrit records, 648 sargas, across seven kāṇḍas).
- [x] Original foreign-language meanings/annotations from source dataset explicitly **not copied**.
- [x] Static responsive editorial site assets created: `index.html`, `assets/styles.css`, `assets/app.js`, and `.nojekyll`.
- [x] Reader navigation by book / sarga / śloka; original Sanskrit always prominent; translation language selection, search, progress, share and mobile navigation.
- [x] Authored and published **English and Hindi editorial translations for 1.1.1–1.1.17**, plus selected modern contextual notes and distinct teachings in `data/translations/1-1.json`.
- [x] 1.1.6 typographic emendation documented with IIT Kanpur cross-check in `data/errata.json`.
- [ ] Verify on a live GitHub Pages URL (requires Settings → Pages → Deploy from a branch → main / (root); current connected GitHub tool cannot modify Pages settings).
- [ ] Execute systematic corpus-wide verse segmentation audit and add a reproducible `docs/QA_REPORT.md`.
- [ ] Finish Bāla Kāṇḍa Sarga 1, starting at **1.1.18**. Source rows around 1.1.18–1.1.22 have merged/duplicated passages. Fix source display via source-preserving errata and verse-by-verse alignment with a *same-recension* reference. Then independently translate each verified verse into both languages and add teachings only where appropriate.
- [ ] Continue Bāla Kāṇḍa Sarga 2, then follow the fixed source order, no skipped verses.

## Exact current coverage
- Sanskrit: imported `1.1.1` through `7.111.25` as digital records; review status largely **unverified**.
- Authored bilingual translations: **1.1.1–1.1.17**, 17 records, provisional until formal QA pass.
- Modern-context/teaching annotations: limited to selected verses among this translated range.
- Untranslated verses render with an explicit 'translation pending' indicator, NOT a synthetic translation.
- Known source defect: `1.1.18`–`1.1.22` merged / repeated, requires correction prior to new translation.
- Critical-edition and Southern-Recension sarga/verse numbering sometimes differ. Never silently crosswalk them.

## Read these before continuing
1. `docs/SOURCES.md`
2. `data/translations/1-1.json`
3. `data/errata.json`
4. `data/sanskrit/1.json`, specifically source records `s=1`, `v=18..30`
5. `assets/app.js`

## Deployment rules
Static only, no bundler, GitHub Pages source must be main/(root). Manual Pages setting may still be required. No workflow file under `.github/workflows`.

## EXACT NEXT ACTION
**Audit and correct Bāla Kāṇḍa 1.1.18–1.1.30 against an explicitly identified same-recension textual witness, resolve merged/duplicated verse-boundary anomalies without rewriting the imported source, then publish independent English and Hindi translations and separate modern teachings for verified verses. Update the source notes, QA ledger, translation coverage and this checkpoint in the same Git commit. Verify Pages branch deployment settings if accessible, without workflows.**
