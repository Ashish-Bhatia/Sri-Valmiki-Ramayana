# Sri Valmiki Ramayana
## A Version of the AI Era

A static, mobile-first reader preserving the **seven kāṇḍas → sargas → ślokas** of the Vālmīki Rāmāyaṇa.

**Website (after GitHub Pages is enabled):** https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/

### Current scope (23 October 2026)
- **Sanskrit:** 23,291 imported Sanskrit verse records from a seven-kāṇḍa digitized corpus, arranged in 648 sargas. Imported does not mean critically proofread.
- **Original editorial translation:** Bāla Kāṇḍa 1.1.1–1.1.17 currently published in English and Hindi, with selected modern reflections/teachings.
- **Quality:** 1.1.6 receives a transparent editorial correction, with primary-text comparison. A source-data anomaly in 1.1.18–1.1.22 requires further verse segmentation review. Never hide textual limitations.
- **Architecture:** Plain static HTML, CSS and JavaScript. No build system, cloud database or custom GitHub Actions workflow.

### GitHub Pages, WITHOUT a custom GitHub Actions workflow
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, then **Save**.
4. Leave the repository root `.nojekyll` file in place. This deploys the static files directly.
5. Confirm the public address: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/

GitHub itself operates Pages infrastructure. The project creates **no** `.github/workflows` files.

### File organization
```text
index.html                 Static entry page
.nojekyll                  Bypass Jekyll processing
assets/styles.css          Responsive design
assets/app.js              Navigation and verse reader
data/sanskrit/1.json       Bāla Kāṇḍa source transcription
...
data/sanskrit/7.json       Uttara Kāṇḍa source transcription
data/translations/1-1.json Independently authored English/Hindi, verses 1–17
data/errata.json           Transparent corrected-text overlay
docs/SOURCES.md            Corpus provenance and editorial rules
docs/PROJECT_STATE.md      Permanent progress checkpoint
docs/NEXT_CHAT_PROMPT.md   Exact continuation instructions
```

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
