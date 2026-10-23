# Sri Valmiki Ramayana
## A Version of the AI Era

A static, mobile-first reader preserving the **seven kāṇḍas → sargas → ślokas** of the Vālmīki Rāmāyaṇa.

**Website:** https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/

### Current scope (23 October 2026)
- **Sanskrit:** 23,291 imported Sanskrit verse records from a seven-kāṇḍa digitized corpus, arranged in 648 sargas. Imported does not mean critically proofread.
- **Original editorial translation:** Bāla Kāṇḍa 1.1.1–1.1.30 currently published in English and Hindi, with selected modern reflections/teachings.
- **Structural audit:** 3,213 of 23,291 digital verse records have been flagged for review due to numbering markers, multi-verse mergers or observed source overruns. See [QA report](./docs/QA_REPORT.md). A flag is not necessarily a confirmed textual error.
- **Quality:** 1.1.6 receives a transparent editorial correction, with primary-text comparison. Eleven source-preserving overlays now correct verse boundaries in 1.1.18–22 and 1.1.25–30. Direct IIT access was unavailable, so indexed IIT Sanskrit evidence and a complete numbered parallel are documented in the batch audit. Never hide textual limitations.
- **Architecture:** Plain static HTML, CSS and JavaScript. No build system, cloud database or custom GitHub Actions workflow.

### GitHub Pages, WITHOUT a custom GitHub Actions workflow
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, then **Save**.
4. Keep `_config.yml` and its exclusions. The built-in branch build copies the public static files and excludes internal records. Do not add `.nojekyll`, which bypasses these exclusions.
5. Confirm the public address: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/

GitHub itself operates Pages infrastructure. The project creates **no** `.github/workflows` files.

### File organization
```text
index.html                 Static entry page
_config.yml                Exclude internal records from branch-based Pages output
sources.html               Public edition notice and Sanskrit download links
assets/styles.css          Responsive design
assets/app.js              Navigation and verse reader
data/sanskrit/1.json       Bāla Kāṇḍa source transcription
...
data/sanskrit/7.json       Uttara Kāṇḍa source transcription
data/translations/1-1.json Independently authored English/Hindi, verses 1–30
data/errata.json           Transparent corrected-text overlay
data/quality-flags.json    Machine-audit flags for source segmentation
docs/QA_REPORT.md          Preliminary source quality report
scripts/audit-corpus.mjs    Locally reproducible source consistency scan
scripts/verify-publication.mjs  Source-preservation and publication checks
docs/SOURCES.md            Corpus provenance and editorial rules
docs/PROJECT_STATE.md      Permanent progress checkpoint
docs/NEXT_CHAT_PROMPT.md   Exact continuation instructions
```

### Reproduce the preliminary audit
After cloning the repository, run `node scripts/audit-corpus.mjs --check`. It checks whether the committed QA flag manifest matches the scanned digital Sanskrit sources. To regenerate the manifest locally, use `node scripts/audit-corpus.mjs --write` and manually review differences before committing. This has no role in GitHub Pages deployment.

### Non-negotiable editorial rules
1. Never rewrite, abridge or rearrange Sanskrit narrative order.
2. Keep the kāṇḍa.sarga.śloka reference on every verse; identify the source recension.
3. Treat Sanskrit transcription, source-derived meanings, independently authored translation, modern contextualization and teaching as **five separate data layers**.
4. Never fabricate an untranslated English/Hindi verse to imply completeness.
5. Resolve merged, missing and inconsistent text against primary editions before publishing a translation.
6. For each reviewed verse, record translation, Hindi translation, textual checks, interpretive notes, and sources.
7. Check `docs/PROJECT_STATE.md` before editing. Update it and `docs/NEXT_CHAT_PROMPT.md` at each completed work session.
8. No GitHub Actions deployment workflows. All web assets are static files committed to `main`.

This website is an **independent modern reading edition**, not a newly discovered manuscript or a replacement for scholarly editions.

[Sources and scholarly distinctions](./docs/SOURCES.md) · [Project state](./docs/PROJECT_STATE.md) · [Next prompt](./docs/NEXT_CHAT_PROMPT.md)

### Latest audited batch

Bāla Kāṇḍa 1.1.18–1.1.30 now has independent English and Hindi translations. The original imported text remains unchanged. Eleven overlays resolve merged or misplaced hemistichs, and connected-verse notes preserve sentences spanning numbered verses. This is a boundary check, not a full critical collation or independent human review. [Detailed audit](./docs/TEXTUAL_AUDIT_1_1_18_30.md).

The original manifest retains 3,213 raw-source flags. Ten now have corrected displays, and an additional unflagged overrun at 1.1.25 has also been corrected. Another 3,203 baseline flags remain unresolved. Run `node scripts/verify-publication.mjs` in addition to the original audit. Next untranslated batch: **1.1.31–1.1.40**.

Public navigation links to `sources.html`. Internal checkpoints and audits remain in Git and are excluded from Pages output. The prior `.nojekyll` marker was removed because it published every root file, including internal records. This is still main/root branch deployment, with no custom workflow.
