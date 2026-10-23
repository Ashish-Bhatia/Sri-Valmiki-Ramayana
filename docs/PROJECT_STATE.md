# PROJECT STATE · CONTROLLING CHECKPOINT

Checkpoint date: 23 October 2026, Asia/Kolkata.
Repository: https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Title: Sri Valmiki Ramayana (A Version of the AI Era)
Baseline latest main read before this batch: `65881d11f3a9dfeb9b6d41d47474d8c04f4b4d6c`.

## Controlling requirements

- Preserve published text and imported source records. Never reset or clean the repository. Read the latest main checkpoints, sources, audit, QA, deployment evidence, errata and existing translations before editing.
- Preserve Bāla → Ayodhyā → Araṇya → Kiṣkindhā → Sundara → Yuddha → Uttara, every sarga and every numeric śloka address in order.
- Publish source-preserving Sanskrit, independently authored English and Hindi, separately labelled modern context and selected grounded teachings. Do not invent, silently merge, duplicate or reorder verses.
- Keep raw Sanskrit immutable. Record boundary overlays, corrected romanization, original-reading disclosure and traceable source segments in `data/errata.json`. Disclose lexical differences rather than mixing editions silently.
- Deploy only with GitHub Pages **main / (root)** and its managed branch process. Never add a custom workflow.
- Preserve `_config.yml` exclusions for `docs`, `scripts`, `README.md` and `AGENTS.md`. Keep `.nojekyll` absent, since it would bypass the exclusions. Public navigation links to `sources.html`.
- Update this file and `docs/NEXT_CHAT_PROMPT.md` in every project commit. End completion responses with the exact next action and a copy-ready prompt.
- Advance the `index.html` script edition marker and `EDITION_REVISION` in `assets/app.js` together for each new translation batch.

## Coverage and preservation

- Published English/Hindi: **1.1.1–1.1.60**, sixty consecutive records. There is no translation for 61 or later.
- New batch: **1.1.51–1.1.60**, ten translations, ten boundary overlays and twenty unique half-verses. All fifty prior translation objects and thirty-one prior errata objects are identical to baseline.
- Boundary-checked sequence: **1.1.18–1.1.60**, forty-three verses and eighty-six distinct half-verses, each once in order. Verses 23–24 and 46 require no overlay. Forty boundary overlays cover 18–22, 25–45 and 47–60. The earlier 1.1.6 lexical correction remains separate.
- Earlier translations 1–17 retain their provisional editorial status. This is not a fully proofread critical text.
- Raw Sanskrit: **23,291 records / 648 sargas**, 1.1.1–7.111.25. All seven raw files and the preliminary flag manifest remain byte-identical. `_config.yml` and all three older audit ledgers are unchanged. Imported counts do not prove complete textual coverage.
- Nārada narrates to Vālmīki. Mārīca speaks in 51a. Kabandha's instruction spans 56b–57a. Connected-verse notes, English/Hindi, modern context and teachings remain separate fields and reader sections.

## New boundary and reading decisions

Read `docs/TEXTUAL_AUDIT_1_1_51_60.md` and the unchanged earlier ledgers. Verse 51 begins **न विरोधो बलवता क्षमो रावण तेन ते**, from row 50:2. Raw 54 and 55 repeat an identical three-half-verse block. The corrected sequence uses those half-verses once. Raw 56 contains 56a, 56b, 57a and a stray `1151` token. The token remains in raw/imported disclosure and never enters corrected Sanskrit or translation.

The complete numbered Sanskrit Documents `sites/valmikiramayan` parallel establishes every new boundary. Indexed IIT base-Sanskrit passages corroborate selected 50–55 and 57–60 blocks. Direct requests failed, including timeouts for 56 and 59. Indexed content is not a fresh full IIT download. No full critical collation or independent human reviewer is claimed.

The imported **श्रमणीं** in 57a is retained against the parallel's **श्रमणाम्**. Both denote a woman ascetic; no sectarian affiliation is inferred. Prior lexical decisions, including वने in 48a against the parallel's रणे, remain unchanged. The Baroda Critical Edition is not silently substituted. No golden deer, fruit-tasting, additional caste identity or invented dialogue is added from later narrative or commentary.

Verse 60 contains Rāma's account and Sugrīva listening. The pact of friendship beginning **चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम्** belongs to **61a**, outside the published translation range.

## Quality ledger

- Immutable preliminary manifest: **3,213 raw-source flags**.
- This batch resolves displays for existing flags **54 and 55** and corrects eight unflagged defects in **51–53 and 56–60**.
- Cumulative baseline flags resolved in the display: **seventeen**. Remaining baseline flags unresolved by these overlays: **3,196**. Unflagged rows still require review.
- Exactly next: **1.1.61–1.1.70**. Begin 61 with the pact in raw row 60:2, not raw 61's ततो वानरराजेन… half-verse. Audit all boundaries first, including the duplicated raw 63/64 block.

## Validation and publication status

Passed: `node --check assets/app.js`, `node scripts/audit-corpus.mjs --check`, `node scripts/verify-publication.mjs`, and explicit baseline object/byte comparisons. The verifier checks sixty consecutive bilingual records, forty-three checked verses, forty boundary overlays, eighty-six unique half-verses, exact new mappings, the preserved raw duplication/token, श्रमणीं, retained वने, pending 61, seven raw hashes, both edition markers and publication separation.

Both edition markers are **1.1.60**. `index.html`, `sources.html` and README coverage are updated. The reader's structure and controls are preserved.

Baseline main **65881d11f3a9dfeb9b6d41d47474d8c04f4b4d6c** has successful managed Pages run **39888137638**, build job **120201087696**, deploy job **120201221917**. Inspected build logs confirm `ref: main`, Jekyll `source: .`, the matching revision, `_config.yml` and explicit docs/scripts/README exclusions. There is no custom repository workflow. The public root returned HTTP 200. Administrative Pages settings were not read; main/root is verified from successful actual build inputs.

Content commit **97b4168e9473909cf15bc88630d2a5ce61dba791** deployed successfully in managed Pages run **40004902628**. Build job **120590218426** and deploy job **120590432606** completed successfully. The inspected build confirms `ref: main`, Jekyll `source: .`, the matching revision, `_config.yml` and explicit docs/scripts/README exclusions. Administrative settings were not read; successful actual build inputs establish main/root.

Fourteen public files, including the unchanged flag manifest and seven raw downloads, returned HTTP 200 with exact content-commit bytes using `edition=1.1.60`. The root URL, both without a query and with the edition query, also returned HTTP 200 with the new committed HTML. Sixteen internal/prohibited paths returned HTTP 404, including every internal Markdown file, both audit scripts, README, AGENTS, `_config.yml`, `.nojekyll` and the custom workflow path.

Live reader QA confirms sixty translations, exact 51 opening, correctly bounded 56 and 60, retained imported `1151` in the disclosure, corrected 57 romanization, Hindi-only translation and note selection, one search match for कबन्धन्नाम रूपेण at 55, and explicitly pending 61. The verse-56 clipboard payload matches its corrected Sanskrit and ID, with no stray token. No internal navigation or horizontal overflow was found at the tested desktop viewport. No separate mobile viewport test is claimed. Final reader state is both languages, transliteration off, verse 60 selected. Full evidence is in `docs/DEPLOYMENT_VERIFICATION.md`.

This evidence commit updates excluded internal documents and both continuity checkpoints only. Verified public runtime bytes remain unchanged. Check its actual managed branch result before final handoff; this record does not claim its own future run was inspected.

## Exact next action

Check the latest managed evidence-commit build, then continue **Bāla Kāṇḍa, Sarga 1, 1.1.61–1.1.70** after a full boundary audit. Preserve everything through 60 and all raw Sanskrit. Advance both markers only with the next published translation batch.
