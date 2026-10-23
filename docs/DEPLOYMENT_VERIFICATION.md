# Verified publication: Bāla Kāṇḍa 1.1.31–1.1.40

Date: 23 October 2026, Asia/Kolkata.
Website: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/
Verified reader: https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/?k=1&s=1&v=40

## Current release

- Translation and boundary-audit commit: [65c589d381b607268d0f70733334e2dfede677f8](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/65c589d381b607268d0f70733334e2dfede677f8).
- Successful managed Pages run: [39885497223](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39885497223). Build job `120192607921`; deploy job `120192748213`.
- Cache-refresh runtime commit: [988c6db553649a763c770d2d52f5f012ff33833b](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/commit/988c6db553649a763c770d2d52f5f012ff33833b).
- Successful managed Pages run: [39885804360](https://github.com/Ashish-Bhatia/Sri-Valmiki-Ramayana/actions/runs/39885804360). Build job `120193574475`; deploy job `120193711369`.
- Both build logs check out `ref: main`, record their corresponding `build_revision`, run Jekyll with `source: .` and `destination: ./_site`, and load `/github/workspace/./_config.yml`.
- Both build logs explicitly report `EntryFilter: excluded /scripts`, `/README.md` and `/docs`.
- Workflow path: GitHub-managed `dynamic/pages/pages-build-deployment`. No repository `.github/workflows` directory or custom deployment workflow exists. `.nojekyll` remains absent.
- Administrative Settings was not read. Main/root deployment is verified from the actual successful build inputs and public output, rather than an unsupported claim to have inspected the settings API.

## HTTP integrity and exclusions

The content release returned HTTP 200 with bytes identical to the committed files for thirteen public paths: `index.html`, `sources.html`, `assets/app.js`, `assets/styles.css`, `data/translations/1-1.json`, `data/errata.json` and all seven `data/sanskrit/{1..7}.json` downloads. Translation coverage is exactly 1–40; there are twenty-two errata entries, including the retained 1.1.6 lexical correction. Raw Sanskrit hashes remain unchanged.

Unversioned HTTP requests also returned the new forty-verse `index.html`, translations and errata. However, the browser retained the older cached thirty-verse data. The follow-up runtime change adds `edition=1.1.40` to the script URL and the translation/errata request URLs. All four release-specific URLs returned HTTP 200 with exact final bytes after deployment. No translation or source text changed in the cache-refresh commit. The revision marker must advance alongside the next publication.

After the cache-refresh deployment, all nine of the following paths returned HTTP 404:

- `docs/PROJECT_STATE.md`
- `docs/NEXT_CHAT_PROMPT.md`
- `docs/SOURCES.md`
- `docs/TEXTUAL_AUDIT_1_1_31_40.md`
- `docs/QA_REPORT.md`
- `scripts/audit-corpus.mjs`
- `scripts/verify-publication.mjs`
- `README.md`
- `AGENTS.md`, which is prohibited in public output and is also absent from the repository.

Internal records remain available in GitHub. The exclusion requirement applies to the Pages site, not to the public repository.

## Live reader checks

Observed in the live browser after loading the refreshed release:

- Forty published bilingual translations.
- Correct 1.1.31 begins चित्रकूटमनुप्राप्य…, with exactly its two hemistichs, English/Hindi, connected-verse notes, separate modern context and selected teachings.
- The disclosure opens the unchanged imported merged reading. Romanization follows the corrected text.
- Search for चित्रकूटमनुप्राप्य yields exactly one corrected verse, 31, rather than duplicated imported blocks.
- Hindi-only selection removes the English translation block and switches connected-verse/context/teaching paragraphs to Hindi.
- Verse 36 correctly presents Bharata's quoted request, followed by the description of Rāma.
- Verse 40 displays exactly रामस्तु पुनरालक्ष्य… / तत्रागमनमेकाग्रो…, both translations and separate editorial sections. Verse 41 remains explicitly pending in both languages.
- No internal navigation links were present. The tested desktop viewport had no horizontal overflow. No separate mobile viewport test is claimed.
- The copy button displayed “Sanskrit verse copied”. The automation clipboard reader returned an empty string, so clipboard payload verification is not claimed.

The reader was restored to both languages with transliteration off. Its final checked URL is the verse-40 address above.

## Textual limits and next action

The source check uses the complete numbered parallel and available indexed IIT base-Sanskrit extracts. Direct IIT and replacement-portal access failed. Imported lexical variants are retained and documented. No full critical collation or independent human review is claimed. Previous 1–17 translations retain their provisional status.

Local syntax, corpus-manifest and publication checks passed. All thirty previous translation objects, twelve previous correction objects, seven raw files and the preliminary flag manifest are preserved. Exactly next: **Bāla Kāṇḍa, Sarga 1, 1.1.41–1.1.50**, after reading the latest checkpoints and alignment ledger.

This evidence update changes only excluded internal records. The public files remain the verified runtime release above. Check the newest managed branch build before the next content update.

---

## Earlier verification record: coverage through 1.1.30

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
