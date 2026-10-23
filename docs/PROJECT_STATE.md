# PROJECT STATE · CONTROLLING CHECKPOINT

Checkpoint date: 23 October 2026, Asia/Kolkata.
Repository: https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Title: Sri Valmiki Ramayana (A Version of the AI Era)
Baseline latest main read before this batch: `27a4232240a5e22f3bcbbedd33f676441e92b126`.

## Controlling requirements

- Preserve published text and imported source records. Do not reset or clean the repository. Read the latest main checkpoint, next prompt, sources, errata and existing translations before editing.
- Preserve the traditional sequence Bāla → Ayodhyā → Araṇya → Kiṣkindhā → Sundara → Yuddha → Uttara, with every sarga and śloka address in order.
- Publish exact source-preserving Sanskrit displays, independently written English and Hindi, separately labelled modern context and selected grounded teachings. Do not invent, silently merge, duplicate or reorder verses.
- Preserve raw Sanskrit. Put boundary corrections in `data/errata.json`, with original-reading disclosure, corrected romanization and traceable source segments. Record lexical differences rather than silently mixing editions.
- Deploy only with GitHub Pages **main / (root)** and GitHub's built-in branch process. Never add a custom workflow.
- Keep `_config.yml` exclusions for `docs`, `scripts`, `README.md` and `AGENTS.md`. Keep `.nojekyll` absent: it previously bypassed exclusions and published internal files. Public reader navigation links to `sources.html`.
- Update both this checkpoint and `docs/NEXT_CHAT_PROMPT.md` in every project commit. End completion responses with the exact next action and a copy-ready prompt.
- Advance both the script edition marker in `index.html` and `EDITION_REVISION` in `assets/app.js` with every new translation batch, so cached script, errata and translations agree.

## Published translation coverage and source integrity

- Bilingual coverage: **1.1.1–1.1.50, fifty consecutive English/Hindi records**. No translations exist beyond 50 in this checkpoint.
- New batch: **1.1.41–1.1.50**, ten translations, nine corrected display overlays and twenty distinct hemistichs. Verse 46 needs no boundary overlay. All forty prior translation objects and twenty-two prior errata objects remain identical to baseline.
- Earlier 1.1.1–17 translations retain their previous provisional editorial status. Boundary checks cover **1.1.18–50**, thirty-three verses. These checks do not establish a fully proofread critical text.
- Cumulative boundary overlays: **thirty**, for 18–22, 25–45 and 47–50, plus the separately retained 1.1.6 lexical correction. Verses 23–24 and 46 need no overlay. The corrected 18–50 display has sixty-six distinct hemistichs, each once and in sequence.
- Raw Sanskrit: **23,291 records / 648 sargas**, addresses 1.1.1–7.111.25. Seven raw files and the preliminary flag manifest remain byte-identical. Imported counts do not establish complete textual coverage.
- English, Hindi, connected-verse notes, modern context and teachings stay in separate fields and reader sections. Nārada narrates this batch to Vālmīki. No invented direct dialogue is supplied. Mārīca's actual warning begins in 51a, outside this batch.

## Source evidence and limitations

Read `docs/TEXTUAL_AUDIT_1_1_41_50.md` and the unchanged earlier ledgers for 18–30 and 31–40. The complete numbered Sanskrit Documents `sites/valmikiramayan` parallel supplies every new boundary. Indexed IIT base-Sanskrit extracts corroborate selected 41–42, 44–45 and 50–51 passages. The verse-50 page was retrieved as indexed content, not a fresh direct download. Direct IIT requests failed with 502/503 responses. A direct executor download of the parallel returned 406, while web retrieval supplied the numbered text.

The imported **वने** (“in the forest”) in 48a is retained and translated. The parallel has **रणे** (“in battle”). Its possible status as a transcription error remains unresolved. Earlier documented lexical variants remain unchanged. The Baroda Critical Edition is not silently substituted. This is a boundary check and independently authored editorial translation, without a claimed full critical collation or independent human reviewer.

## Quality ledger

- Immutable preliminary manifest: **3,213 raw-source flags**.
- This batch corrects displays for two existing flags: 1.1.44 and 1.1.45.
- Seven unflagged boundary defects, 41–43 and 47–50, also receive overlays.
- Cumulative existing flags resolved by boundary overlays: **fifteen**. Remaining baseline flags unresolved by these overlays: **3,198**. Unflagged rows still require review.
- The next verse **1.1.51 begins न विरोधो बलवता क्षमो रावण तेन ते…**, Mārīca's warning, found in imported row 50's second hemistich. The imported row 51 begins with 51b. Rows 54/55 duplicate a block, and row 56 has a stray `1151` token. Audit the complete next range before translating.

## Validation and publication status

Passed before this content commit:

- `node --check assets/app.js`
- `node scripts/audit-corpus.mjs --check`
- `node scripts/verify-publication.mjs`
- Object comparison for all forty prior translations and twenty-two errata; byte comparison for seven raw files, the flag manifest, `_config.yml` and both prior audit ledgers.

The verifier checks fifty consecutive bilingual records, thirty-three boundary-checked verses, thirty boundary overlays, sixty-six distinct hemistichs, the exact new alignment map, preserved वने in 48a, pending 51, source hashes, cache markers and publication separation. The reader retains the seven-book/sarga structure, language selection, corrected Sanskrit and romanization, original imports, search and copy/link controls. Coverage is updated in `index.html` and `sources.html`. Both cache markers are **1.1.50**.

Before this update, baseline main `27a4232240a5e22f3bcbbedd33f676441e92b126` had successful managed Pages run **39886119077**. Build job `120194582631` checked out `ref: main`, used Jekyll `source: .`, recorded the matching build revision, loaded `_config.yml` and explicitly excluded docs, scripts and README.md. The root public URL returned HTTP 200 with baseline HTML. The managed workflow path is `dynamic/pages/pages-build-deployment`; there is no custom repository workflow. Administrative Pages settings were not read. Main/root is verified from actual successful build inputs.

The new fifty-verse content is locally verified. Post-push deployment, HTTP integrity, exclusions and live reader results must be recorded in `docs/DEPLOYMENT_VERIFICATION.md` and reflected in both checkpoints before final handoff. No completed fifty-verse deployment is claimed by this pre-push checkpoint.

## Exact next action

After verifying the fifty-verse release, read latest main and audit and independently translate **Bāla Kāṇḍa, Sarga 1, 1.1.51–1.1.60**, beginning with Mārīca's warning in 51a. Preserve everything through 50 and all raw Sanskrit. Update both continuity checkpoints, advance cache markers, commit to main and verify deployment without a custom workflow.
