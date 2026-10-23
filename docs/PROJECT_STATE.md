# PROJECT STATE · CONTROLLING CHECKPOINT

Checkpoint date: 23 October 2026, Asia/Kolkata.
Repository: https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Title: Sri Valmiki Ramayana (A Version of the AI Era)
Baseline main read before this batch: `ab2a6a6e0c4fccd21b6e09453a0f3c955ea163ea`.

## Controlling requirements

- Preserve existing published text and all imported source records. Do not reset or clean the repository merely because the original setup request is repeated. Audit existing content first.
- Preserve the traditional seven kāṇḍas: Bāla → Ayodhyā → Araṇya → Kiṣkindhā → Sundara → Yuddha → Uttara. Preserve all sarga and śloka addresses and their textual sequence.
- Publish Sanskrit, independently written English and Hindi, separately labelled modern context and selected grounded teachings. Never invent or silently merge verses.
- Use GitHub Pages **main / (root)** with its built-in branch deployment. Never add a custom GitHub Actions workflow.
- Keep public reader content separate from continuity and research files. `_config.yml` excludes `docs`, `scripts`, `README.md` and `AGENTS.md` from Pages output.
- The previous empty `.nojekyll` marker was intentionally removed after auditing publication behaviour. It bypassed exclusions and caused internal documents to be served. Do not restore it without another verified exclusion mechanism. This changes no Sanskrit or narrative content.
- End every user-facing completion response with an exact next action and a copy-ready continuation prompt. Update this checkpoint and `docs/NEXT_CHAT_PROMPT.md` in every project commit.

## Published coverage

- Imported Sanskrit: **23,291 records / 648 sargas**, from `1.1.1` through `7.111.25`. All seven raw files remain byte-identical to the baseline. Imported counts do not establish full textual completeness.
- English and Hindi translations: **1.1.1–1.1.30, 30 consecutive records**.
- Previous 1.1.1–1.1.17 translations and the earlier 1.1.6 correction are preserved. The first seventeen retain their prior provisional editorial status.
- Newly translated: **1.1.18–1.1.30**, thirteen verses.
- New boundary overlays: **eleven**, for **18–22 and 25–30**, in `data/errata.json`. Verses 23 and 24 needed no segmentation change. All 26 hemistichs in the new batch are distinct and appear once in the corrected sequence.
- Corrected romanization, original-reading disclosure, source links, bilingual connected-verse notes and bilingual editorial reflections are displayed separately.
- Untranslated verses remain explicitly marked as pending. No translations exist beyond 1.1.30 in this checkpoint.

## Evidence and limits

Read `docs/TEXTUAL_AUDIT_1_1_18_30.md` for every alignment and interpretive decision. IIT Kanpur Southern Recension indexed Sanskrit extracts supported selected passages. Direct IIT requests timed out or returned gateway errors. The complete numbered Sanskrit parallel hosted at `sanskritdocuments.org/sites/valmikiramayan/baala/sarga1/balasans1.htm` was used for all batch boundaries through web retrieval. It is distinct from the separate Baroda Critical Edition mirror. Imported lexical readings were preserved rather than replacing them with a different edition.

This is a verse-boundary check, not a full critical collation or independent human review. Do not call the entire Sanskrit corpus verified or a uniquely original manuscript. A future direct IIT comparison should be recorded honestly when access works.

## Quality ledger

- Original preliminary manifest: **3,213 raw-source flags**. It is retained unchanged and remains reproducible.
- Baseline flagged rows with corrected displays in this batch: **10**.
- Additional overrun identified and corrected: **1.1.25**, previously unflagged.
- Remaining baseline flags unresolved by these overlays: **3,203**. Unflagged rows still need textual review.
- Known next problems: imported 1.1.30–32 combine or repeat neighbouring hemistichs. Actual verse **1.1.31 begins चित्रकूटमनुप्राप्य…**, not ते वनेन….

## Website and deployment

The responsive reader retains seven-book navigation, sarga selection, Sanskrit, translation language choice, search, romanization, copy/link and reading position. Corrected Sanskrit and romanization are used for display, search and copy. Corrected rows no longer show an unresolved-source warning. The original imported reading is available in each correction’s disclosure. The public source/download page is `sources.html`. Reader navigation has no internal project-document links.

Baseline deployment was verified by built-in Pages run `39869234028`: `ref: main`, artifact `path: .`, successful deployment, public root HTTP 200 matching baseline HTML. The authenticated Settings UI was unavailable. The upcoming commit must be checked for a successful new branch build, new public data and HTTP 404 for excluded internal paths. No new-deployment result is claimed before the push.

## Checks

- `node --check assets/app.js`
- `node scripts/audit-corpus.mjs --check`
- `node scripts/verify-publication.mjs`
- Confirm previous seventeen entries and seven raw Sanskrit hashes are unchanged.
- Browser QA: Sanskrit overlays, original-reading disclosure, matching romanization, Hindi selection, corrected search, copy/link, pending verses and public source/download navigation.
- Post-push: compare deployed public files with the committed versions and confirm excluded internal paths are unavailable.

## Exact next action

**Audit and independently translate Bāla Kāṇḍa, Sarga 1, verses 1.1.31–1.1.40.** Resolve imported verse boundaries first against the IIT Kanpur Southern Recension and an explicitly identified numbered parallel. Preserve raw data and all earlier translations. Add source-preserving overlays, appropriate bilingual context/teachings and the next exact checkpoint. Commit to main, verify branch-root Pages deployment and keep internal documents excluded. Never create a custom workflow.
