# Sri Valmiki Ramayana
## A Version of the AI Era

A static, mobile-first reader preserving the **seven kāṇḍas → sargas → ślokas** of the Vālmīki Rāmāyaṇa.

**Website:** https://ashish-bhatia.github.io/Sri-Valmiki-Ramayana/

### Current scope (24 October 2026)
- **Sanskrit:** 23,291 imported Sanskrit verse records from a seven-kāṇḍa digitized corpus, arranged in 648 sargas. Imported does not mean critically proofread.
- **Original editorial translation:** Bāla Kāṇḍa 1.1.1–1.1.80 currently published in English and Hindi, with selected modern reflections/teachings.
- **Structural audit:** 3,213 of 23,291 digital verse records have been flagged for review due to numbering markers, multi-verse mergers or observed source overruns. See [QA report](./docs/QA_REPORT.md). A flag is not necessarily a confirmed textual error.
- **Quality:** 1.1.6 receives a transparent editorial correction, with primary-text comparison. Forty-six source-preserving overlays restore verse boundaries in 1.1.18–22, 1.1.25–45, 1.1.47–64 and 1.1.76–77. Fourteen normalize already correctly bounded displays in 65–75 and 78–80. Cached/indexed IIT Sanskrit and the complete numbered parallel are documented in each batch audit, without claiming a fresh full IIT collation. Never hide textual limitations.
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
data/translations/1-1.json Independently authored English/Hindi, verses 1–80
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

### Earlier audited batch: 1.1.18–1.1.30

Bāla Kāṇḍa 1.1.18–1.1.30 now has independent English and Hindi translations. The original imported text remains unchanged. Eleven overlays resolve merged or misplaced hemistichs, and connected-verse notes preserve sentences spanning numbered verses. This is a boundary check, not a full critical collation or independent human review. [Detailed audit](./docs/TEXTUAL_AUDIT_1_1_18_30.md).

The original manifest retains 3,213 raw-source flags. Ten now have corrected displays, and an additional unflagged overrun at 1.1.25 has also been corrected. Another 3,203 baseline flags remain unresolved. Run `node scripts/verify-publication.mjs` in addition to the original audit. That batch’s next range was **1.1.31–1.1.40**, now completed below.

Public navigation links to `sources.html`. Internal checkpoints and audits remain in Git and are excluded from Pages output. The prior `.nojekyll` marker was removed because it published every root file, including internal records. This is still main/root branch deployment, with no custom workflow.

### Earlier audited batch: 1.1.31–1.1.40

Ten new English/Hindi translations and ten boundary overlays extend coverage through 1.1.40. Raw Sanskrit and all prior translations/corrections are preserved. The complete numbered parallel and available indexed IIT base-Sanskrit extracts support the boundary check; direct IIT access failed. Imported lexical differences remain explicit. [Detailed audit](./docs/TEXTUAL_AUDIT_1_1_31_40.md).

The original flag manifest remains unchanged. Thirteen baseline flags now have corrected displays; 3,200 remain unresolved by the boundary overlays. Seven additional unflagged defects in 32–38 have been corrected. Run both audit scripts and the JavaScript syntax check. Exactly next: **1.1.41–1.1.50**, after verifying the main/root branch deployment and internal-file exclusions.

### Earlier audited batch: 1.1.41–1.1.50

Ten independently authored English/Hindi translations and nine boundary overlays extend coverage through 1.1.50. Verse 46 already has correct boundaries. The [new alignment ledger](./docs/TEXTUAL_AUDIT_1_1_41_50.md) records all twenty hemistichs and preserves the imported वने reading in 48a against the parallel’s रणे. All forty prior translation objects, twenty-two prior correction objects, seven raw files and the preliminary flag manifest remain unchanged.

Current totals: fifty bilingual translations, thirty-three boundary-checked verses, thirty boundary overlays and sixty-six distinct hemistichs across 18–50. Fifteen baseline flags have corrected displays; 3,198 remain unresolved by boundary overlays. The script and data cache markers advance to `1.1.50`. Modern context, teachings and connected-verse notes remain separate and bilingual.

Exactly next: **1.1.51–1.1.60**, beginning न विरोधो बलवता क्षमो रावण तेन ते…, after verifying the latest main/root branch build and internal-file exclusions.

### Earlier audited batch: 1.1.51–1.1.60

Ten new English/Hindi translations and ten source-preserving overlays extend coverage to 1.1.60. [The audit](./docs/TEXTUAL_AUDIT_1_1_51_60.md) restores twenty distinct half-verses, resolves the duplicated 54/55 display and excludes the stray `1151` from corrected Sanskrit while retaining all raw records. The imported श्रमणीं variant is documented and preserved. All fifty prior translation objects and thirty-one prior correction objects remain identical.

Current totals: sixty bilingual translations, forty-three boundary-checked verses, forty boundary overlays and eighty-six unique half-verses across 18–60. Seventeen baseline flags have corrected displays; 3,196 remain unresolved by boundary overlays. Both edition markers are `1.1.60`. Modern context and teachings remain separate and bilingual. All local validation passes.

Exactly next: **1.1.61–1.1.70**, beginning चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम् in raw row 60's second half. First audit the complete range, including duplicated 63/64 blocks. Verify the managed main/root build and internal-file exclusions without a custom workflow.


### Earlier audited batch: 1.1.61–1.1.70

Ten independent English/Hindi translations extend coverage to 1.1.70. [The audit](./docs/TEXTUAL_AUDIT_1_1_61_70.md) restores 61–64, beginning with the friendship pact from raw 60:2, and uses duplicated raw 63/64 content once. Six further overlays normalize displays and IAST on correctly bounded 65–70. Every new overlay discloses the imported reading. The parallel's printed differences at 64–65 and indexed IIT तथा/तदा difference at 66 are documented; imported readings remain intact. Direct IIT access failed, and indexed evidence is not a fresh collation.

Current totals: seventy bilingual translations, fifty-three boundary-checked verses and 106 unique half-verses. Fifty display overlays comprise forty-four boundary restorations and six normalizations. The separate earlier lexical correction remains intact. Nineteen baseline flags have corrected displays; 3,194 remain unresolved by the overlays. All sixty previous translations, forty-one previous corrections, raw corpus, flag manifest and publication exclusions are preserved. Both edition markers are `1.1.70`.

Exactly next: **1.1.71–1.1.80**, beginning स च सर्वान्समानीय वानरान्वानरर्षभः. Audit duplicated raw rows 76/77 and every boundary before translation. Preserve the managed main/root deployment and exclusions. No custom workflow or `.nojekyll` is permitted.


### Latest audited batch: 1.1.71–1.1.80

Ten independently authored English/Hindi translations extend coverage to 1.1.80. [The audit](./docs/TEXTUAL_AUDIT_1_1_71_80.md) separates the duplicated 76/77 block with two boundary restorations and normalizes eight already correctly bounded displays. Original readings and matching IAST remain available. Cached/indexed IIT Sanskrit and the complete numbered parallel were compared, with no claim of a fresh IIT collation. The readings at 74, 77 and 78 are explicitly disclosed, and the sentence spanning 76–77 remains connected without merging its numbered verses.

Totals: eighty bilingual records, sixty-three checked verses, 126 distinct half-verses, forty-six restorations and fourteen normalizations. Twenty-one baseline flags have corrected displays; 3,192 remain unresolved by these overlays. All seventy earlier translations, fifty-one earlier corrections, raw Sanskrit, flag manifest and publication exclusions are preserved. Both edition markers are `1.1.80`. Local syntax, corpus, publication, baseline byte/object and independent IAST checks pass.

Exactly next: **1.1.81–1.1.90**, beginning **तेन गत्वा पुरीं लङ्कां हत्वा रावणमाहवे**. Check 83/84 ordering against the adopted numbered IIT witness and complete parallel before translating. Keep main/root managed Pages, `_config.yml` exclusions, no `.nojekyll` and no custom workflow.
