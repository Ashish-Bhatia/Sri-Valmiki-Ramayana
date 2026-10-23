# PROJECT STATE · CONTROLLING CHECKPOINT

Checkpoint date: 23 October 2026, Asia/Kolkata.
Repository: https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Title: Sri Valmiki Ramayana (A Version of the AI Era)
Baseline latest main read before this batch: `ef2f97b5118706c69008d68fcd5448aa620902c2`.

## Controlling requirements

- Preserve published text and imported source records. Do not reset or clean the repository. Read the latest main checkpoint, next prompt, sources, errata and existing translations before editing.
- Preserve the traditional sequence Bāla → Ayodhyā → Araṇya → Kiṣkindhā → Sundara → Yuddha → Uttara, with every sarga and śloka address in order.
- Publish exact source-preserving Sanskrit displays, independently written English and Hindi, separately labelled modern context and selected grounded teachings. Do not invent, silently merge, duplicate or reorder verses.
- Preserve raw Sanskrit. Put boundary corrections in `data/errata.json`, with original-reading disclosure, corrected romanization and traceable source segments. Record lexical differences rather than silently mixing editions.
- Deploy only with GitHub Pages **main / (root)** and GitHub's built-in branch process. Never add a custom workflow.
- Keep `_config.yml` exclusions for `docs`, `scripts`, `README.md` and `AGENTS.md`. Keep `.nojekyll` absent: it previously bypassed exclusions and published internal files. Public reader navigation links to `sources.html`.
- Update both this checkpoint and `docs/NEXT_CHAT_PROMPT.md` in every project commit. End completion responses with the exact next action and a copy-ready prompt.

## Published translation coverage and source integrity

- Bilingual coverage: **1.1.1–1.1.40, forty consecutive English/Hindi records**. No translations exist beyond 40 in this checkpoint.
- New batch: **1.1.31–1.1.40**, ten translations, ten corrected display overlays and twenty distinct hemistichs. All thirty prior translation objects and twelve prior errata objects remain identical to baseline.
- Earlier 1.1.1–17 translations retain their previous provisional editorial status. Boundary checks cover **1.1.18–40**, twenty-three verses. These checks do not establish a fully proofread critical text.
- Cumulative boundary overlays: **twenty-one**, for 18–22 and 25–40, plus the separately retained 1.1.6 lexical correction. Verses 23–24 needed no overlay. The corrected 18–40 display has forty-six distinct hemistichs, each once and in sequence.
- Raw Sanskrit: **23,291 records / 648 sargas**, addresses 1.1.1–7.111.25. Seven raw files and the preliminary flag manifest remain byte-identical. Imported counts do not establish complete textual coverage.
- English, Hindi, connected-verse notes, modern context and teachings stay in their separate fields and reader sections. Bharata's speech in 36 remains attributed to him within Nārada's narration.

## Source evidence and limitations

Read `docs/TEXTUAL_AUDIT_1_1_31_40.md` and the earlier `docs/TEXTUAL_AUDIT_1_1_18_30.md`. The complete numbered Sanskrit Documents `sites/valmikiramayan` parallel supplies all new boundaries. Indexed IIT Kanpur base-Sanskrit extracts corroborate selected 30–32, 32–34, 35–36 and 38–40 passages. Direct IIT access failed with inaccessible/502/503 responses. IIT's identified replacement portal also failed. A direct executor download of the parallel returned 406, while web retrieval supplied the numbered text.

Imported मृते, सुमहात्मानं and दत्वा remain as imported, with differences from the parallel disclosed. The separate Baroda Critical Edition is not silently substituted. This is a boundary check and an independently authored editorial translation, without a claimed full critical collation or independent human reviewer.

## Quality ledger

- Immutable preliminary manifest: **3,213 raw-source flags**.
- This batch corrects displays for three existing flags: 1.1.31, 1.1.39 and 1.1.40.
- Seven unflagged boundary defects, 1.1.32–38, also receive overlays.
- Cumulative existing flags resolved by boundary overlays: **thirteen**. Remaining baseline flags unresolved by these overlays: **3,200**. Unflagged rows still need review.
- The next imported rows 41–43 cross numbered boundaries. Verse **1.1.41 begins प्रविश्य तु महारण्यं…**. **सुतीक्ष्णं चाप्यगस्त्यं च… belongs to 42a**, not 41. Audit all ten next verses before translating.

## Checks and website

Passed before this content commit:

- `node --check assets/app.js`
- `node scripts/audit-corpus.mjs --check`
- `node scripts/verify-publication.mjs`
- Baseline-object comparison for all thirty prior translations and twelve errata; byte comparison for all seven raw files and the flag manifest.

The reader retains seven-book/sarga navigation, forty published translations, language selection, corrected Sanskrit and romanization, original imports, copy/link, search and explicit pending labels for verse 41 onward. Public edition coverage is updated in `index.html` and `sources.html`.

Content commit `65c589d381b607268d0f70733334e2dfede677f8` deployed successfully in built-in Pages run **39885497223**. Build job `120192607921` checked out `main`, used Jekyll `source: .`, loaded `_config.yml` and explicitly excluded docs, scripts and README.md. Thirteen public files, including all seven raw Sanskrit downloads, returned HTTP 200 with exact committed bytes. Nine internal/prohibited paths returned 404. Unversioned HTTP requests also returned the new forty-verse files.

Live browser QA exposed cached thirty-verse JSON despite those successful HTTP checks. Runtime commit `988c6db553649a763c770d2d52f5f012ff33833b` adds the `1.1.40` edition marker to the app script, translations and errata request URLs. Its managed Pages run **39885804360** completed successfully. Build job `120193574475` again confirms main/root, Jekyll exclusions and the correct build revision. All four release-specific public URLs matched the final bytes; nine internal/prohibited paths returned 404 after that release.

The live browser now confirms forty bilingual translations, correct 31 and 40, Bharata's speech in 36, Hindi-only display, corrected search, original-reading expansion and corrected romanization. Verse 41 remains pending. No internal navigation or desktop horizontal overflow was observed. The copy button reported success, but clipboard payload verification was unavailable. No separate mobile viewport test is claimed. See `docs/DEPLOYMENT_VERIFICATION.md` for exact evidence and limits.

Advance both the script marker in `index.html` and `EDITION_REVISION` in `assets/app.js` when publishing the next batch. Administrative Pages settings have not been read; branch/root is verified from successful managed build inputs and public responses. This follow-up evidence commit changes excluded internal records only, leaving the verified runtime bytes unchanged.

## Exact next action

Read the latest checkpoint and confirm the latest managed branch build, then audit and independently translate **Bāla Kāṇḍa, Sarga 1, 1.1.41–1.1.50**, preserving everything through 40 and all raw Sanskrit. Update both continuity checkpoints, commit to main and verify deployment without a custom workflow.
