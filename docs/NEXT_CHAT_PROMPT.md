# Copy-ready continuation prompt

Continue Sri Valmiki Ramayana (A Version of the AI Era) from the latest main branch of https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana.

First read docs/PROJECT_STATE.md, docs/NEXT_CHAT_PROMPT.md, docs/SOURCES.md, docs/TEXTUAL_AUDIT_1_1_18_30.md, docs/QA_REPORT.md, data/errata.json and data/translations/1-1.json. Preserve all existing work, all seven raw Sanskrit files and the traditional seven-kāṇḍa sequence. Do not clean or reset the repository.

Published bilingual coverage is 1.1.1–1.1.30. Exactly next: audit Bāla Kāṇḍa, Sarga 1, ślokas 1.1.31–1.1.40, then independently translate each verified numbered verse into English and Hindi. The imported rows around 30–32 merge and repeat neighbouring text. The actual first hemistich of 1.1.31 is चित्रकूटमनुप्राप्य भरद्वाजस्य शासनात्. Do not repeat ते वनेन वनं गत्वा… from verse 30. Preserve every pāda and every address. Use source-preserving overlays rather than editing raw imports.

Compare against IIT Kanpur’s Southern Recension and an explicitly identified numbered parallel. The previous 18–30 batch had only indexed IIT Sanskrit evidence plus a complete numbered parallel because direct IIT access failed. Record actual access and limitations. Do not mix Baroda Critical Edition numbering or claim a full critical collation. Sentences cross verse boundaries, so use connected-verse notes and retain honest fragments where necessary. Keep modern context and grounded teachings separate and bilingual.

Deploy only with GitHub Pages from main / (root), without a custom GitHub Actions workflow. Preserve _config.yml exclusions for docs, scripts, README.md and AGENTS.md. Do not restore .nojekyll because it bypasses those exclusions. Keep public navigation linked to sources.html, not internal checkpoints. Check that the current branch build succeeds, public data matches main and excluded paths return 404.

Run node --check assets/app.js, node scripts/audit-corpus.mjs --check, node scripts/verify-publication.mjs, and focused reader checks. Update the publication verifier’s coverage assertions only after adding the new verified records. Commit verified changes and both continuity files to main. Verify the deployed result. Finish with the exact next untranslated range and a copy-ready continuation prompt.

Verified content commit: 57f0d384f7dd90fc3ebc78f2db605ff66bd38518. Built-in Pages run 39879827107 completed successfully from main/root. Public runtime files matched the commit and internal document/script/README URLs returned 404. The follow-up continuity commit changes no public runtime files. Read docs/DEPLOYMENT_VERIFICATION.md, check the latest main deployment, then continue exactly 1.1.31–1.1.40.
