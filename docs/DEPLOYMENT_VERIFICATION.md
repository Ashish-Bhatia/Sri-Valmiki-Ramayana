# Verified GitHub Pages publication

Date: 23 October 2026, Asia/Kolkata.

- Public website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
- Content commit: [57f0d384f7dd90fc3ebc78f2db605ff66bd38518](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/57f0d384f7dd90fc3ebc78f2db605ff66bd38518).
- GitHub-managed branch build: [39879827107](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39879827107), completed, success.
- Build job `120174250002`: checkout `ref: main`, Jekyll `source: .`, destination `/github/workspace/./_site`, successful artifact upload.
- Deploy job `120174372246`: completed, success.
- Workflow path is GitHub-managed `dynamic/pages/pages-build-deployment`. No repository workflow was added. The repository has no `.github/workflows` directory.
- Authenticated Settings was not available. The selected branch and root folder are verified by the actual successful managed build inputs, rather than a claim to have read the administrative settings API.

## Public files

The following returned HTTP 200 with bytes equal to the committed local versions, including query-based cache verification:

1. `index.html`
2. `assets/app.js`
3. `assets/styles.css`
4. `data/translations/1-1.json`, containing 30 consecutive bilingual records.
5. `data/errata.json`, containing the retained earlier correction plus eleven new boundary overlays.
6. `sources.html`, with seven Sanskrit download links and reader-facing attribution.

All seven public `data/sanskrit/{1..7}.json` downloads also returned HTTP 200 and matched the immutable imported bytes. Their record counts sum to 23,291.

The live browser at `?k=1&s=1&v=30` displayed the exact corrected 1.1.30, English and Hindi translations, separate connected-verse notes and explicit pending labels for 1.1.31 onward. Preview checks also passed original-reading expansion, romanization, Hindi-only display, bilingual notes, corrected search, copy, share links and lack of horizontal overflow at the tested viewport. No separate mobile viewport test is claimed.

## Internal files excluded from the public site

All five returned HTTP 404:

- `docs/PROJECT_STATE.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/SOURCES.md`
- `scripts/audit-corpus.mjs`
- `README.md`

These records remain available through the GitHub repository. `_config.yml` is required for this separation. Reintroducing `.nojekyll` would bypass the exclusions.

## Editorial limits retained

This verification establishes publication and file integrity, not a fully verified Sanskrit corpus. The new 1.1.18–30 boundary check used indexed IIT Sanskrit extracts and the complete numbered parallel, with direct IIT access unavailable. Previous translations 1–17 retain their provisional status. The exact next untranslated batch is **1.1.31–1.1.40**.

This follow-up evidence commit changes only excluded internal documents. The public runtime files remain the byte-identical content verified above. Its own automatic branch build should be checked before the final user handoff.
