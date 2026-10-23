# Sanskrit source, edition and translation policy
Updated: 2026-10-24

## Fundamental textual distinction
There is no surviving autograph manuscript by Vālmīki. The Rāmāyaṇa survives through several manuscript traditions and published editions. The familiar description of ~24,000 ślokas is conventional; digital corpora may contain different record counts, numbering and readings.

This project preserves **the order and addressing of its selected imported recension**, but does not call a single digitized file the uniquely original manuscript.

## Imported primary Sanskrit witness
The seven JSON files in `data/sanskrit/` are derived exclusively from:

- Repository: https://github.com/Ashutosh-Vijay/Valmiki_Ramayan_Dataset
- File: https://github.com/Ashutosh-Vijay/Valmiki_Ramayan_Dataset/blob/main/data/Valmiki_Ramayan_Shlokas.json
- Original dataset Git blob SHA: `ce3e290c437f22d9a716798cf24dcfe1365ecc02`
- Project's imported field mapping: `kanda` → file number; `sarga` → `s`; `shloka` → `v`; `shloka_text` → `text`; `transliteration` → `latin`.
- Counts: Bāla 2,217 (77 sargas); Ayodhyā 4,262 (119); Araṇya 2,439 (75); Kiṣkindhā 2,445 (67); Sundara 2,772 (68); Yuddha 5,693 (131); Uttara 3,463 (111). Total **23,291 records / 648 sargas**.
- All unique `kanda.sarga.verse` numeric keys at import; no blank Sanskrit source fields. This does **not** establish that every verse is present or correctly split.
- Source README indicates MIT licensing, but the exact textual derivation of its translations/annotations requires careful rights review. To avoid republishing translated/commentary prose of uncertain provenance, **this project imported only original-language transcription and romanization**, not its `translation`, `explanation` or `comments` fields.
- Source records are a **digital transcription undergoing comparison against editions**, not a verified critical edition. Source notes point to IIT Kanpur, M.N. Dutt and others, without definitively identifying a single printed base edition for every record. This is a provenance limitation.

## Cross-check sources, NOT silently merged into the base transcription
1. **IIT Kanpur / Rashtriya Sanskrit Vidyapeetham** project, Southern Recension: https://www.valmiki.iitk.ac.in/ ; opening verse: https://www.valmiki.iitk.ac.in/content?field_kanda_tid=1&field_sarga_value=1&field_sloka_value=1&language=dv
2. **Sanskrit Documents** Devanāgarī text derived from Tokunaga/John Smith digitization of the Baroda Critical Edition: https://sanskritdocuments.org/mirrors/ramayana/valmiki/ramayana.htm and https://sanskritdocuments.org/mirrors/ramayana/utf/1_balakanda_1.html . Critical-edition verse numbering and readings differ from the adopted digital corpus.
3. **GRETIL** Unicode archive: https://gretil.sub.uni-goettingen.de/gret_utfbk.htm . GRETIL's page limits its provided e-text files to scholarly reference and explicitly excludes commercial uses. For this reason its e-texts have **not** been bulk copied into this repository.

## Digital integrity warning
A preliminary structural scan of the imported text found **3,213 records requiring review** (see [QA report](./QA_REPORT.md)). Imported text therefore must not be described as proofread or guaranteed error-free. The reader visibly labels flagged records. These counts are audit alerts, not independent philological confirmations.

## Correcting and translating
- Keep an immutable source-layer record. Record textual emendations in `data/errata.json`; present the corrected reading with a traceable source.
- Translate English and Hindi independently into current, readable language. Do not paste modern copyrighted translations from reference sites.
- Treat modern reflections as editorial views, never as additional original ślokas.
- Clearly distinguish a teaching inferred from a narrative description from an explicit command or quotation.
- In ambiguous cases, prioritize textual certainty over output volume. Do not infer a missing verse.
- For each completed sarga, document edition, verse-range check, parallel sources, defects, corrected readings, translation reviewer, coverage, and audit result.

## Known edition / segmentation issue
Within the imported Bāla 1.1 corpus, several rows merge or repeat adjacent verses. Boundary overlays now correct 1.1.18–22, 1.1.25–45 and 1.1.47–50, while preserving every raw source row. The unflagged overrun at 1.1.25 was also identified. This dataset should **not** be treated as one clean śloka per imported JSON record without QA. The critical-edition text also varies in both numbering and wording; do not simply substitute verses from it while retaining Southern Recension labels.

## Copyright and manuscript images
The ancient Sanskrit composition is in the public domain; modern typesetting, digitization, translation, critical apparatus and scanned editions can have separate rights or reuse conditions. Keep source-specific attribution and check reuse terms before adding facsimile PDF scans or third-party translations.

## Boundary check completed for 1.1.18–1.1.30

See [the alignment ledger](./TEXTUAL_AUDIT_1_1_18_30.md). The complete numbered parallel used was https://sanskritdocuments.org/sites/valmikiramayan/baala/sarga1/balasans1.htm, a different presentation from the Baroda Critical Edition mirror listed above. IIT Kanpur indexed Sanskrit extracts corroborated selected passages. Direct IIT access was unavailable, and no full fresh direct IIT collation is claimed. The imported lexical readings were retained rather than silently adopting variants or typographic defects from the parallel.

Eleven overlays in `data/errata.json` reconstruct exact numbered verses from two imported hemistichs each. Corrected romanization accompanies these overlays. Original imports remain byte-identical. Two verses, 23 and 24, needed no boundary correction. Thirteen new bilingual translations extend published coverage to 1.1.30. Previous entries 1–17 retain their prior provisional status. No independent human review is claimed.

Raw-source alert counts remain 3,213. Ten baseline alerts now have corrected displays. The 1.1.25 overrun was outside that alert list. Another 3,203 baseline alerts still need resolution. No inference of textual completeness follows from these counts.

## Public and internal files

The public edition page is `sources.html`. It contains reader-facing provenance, source downloads and limitations. Internal research, continuity and audit records remain in `docs/`, excluded from the branch-based Pages build together with `scripts/` and `README.md` by `_config.yml`. Do not restore `.nojekyll` without replacing that exclusion mechanism, because the bypass would publish internal records again. GitHub Pages still deploys from main / (root), using its built-in branch process and no custom workflow.

## Boundary check completed for 1.1.31–1.1.40

See [the new alignment ledger](./TEXTUAL_AUDIT_1_1_31_40.md). Ten additional source-preserving overlays restore the next ten numbered verses. The complete numbered Sanskrit Documents parallel supplies all boundaries, with indexed IIT base-Sanskrit extracts corroborating selected passages. Direct access to the legacy IIT site and its newly identified portal failed. No full fresh IIT download or critical collation is claimed. Imported lexical variants, including मृते, सुमहात्मानं and दत्वा, are recorded and preserved rather than silently replaced by the parallel's readings.

Published English/Hindi coverage is now 1.1.1–1.1.40. All thirty previous translations, twelve previous errata entries and seven raw files remain unchanged. Twenty new distinct hemistichs continue the existing sequence, with forty-six distinct hemistichs across 18–40. The cumulative boundary layer has twenty-one overlays; the earlier 1.1.6 lexical correction remains separate. Thirteen baseline flags have corrected displays, leaving 3,200 baseline flags unresolved by these boundary overlays. Seven newly identified unflagged boundary defects in 32–38 have also received overlays. These counts do not establish textual completeness.

## Boundary check completed for 1.1.41–1.1.50

See [the alignment ledger](./TEXTUAL_AUDIT_1_1_41_50.md). The complete numbered Sanskrit Documents parallel establishes every boundary before translation. Available indexed IIT base-Sanskrit passages corroborate selected 41–42, 44–45 and 50–51 blocks. The verse-50 page was served as indexed content, not a fresh direct download. Direct legacy IIT access failed with 502/503 responses. A direct parallel download returned 406; web retrieval supplied its text. No full fresh IIT collation is claimed.

Nine new source-preserving overlays correct 41–45 and 47–50. Verse 46 needs no overlay. Twenty distinct hemistichs extend the checked sequence to 18–50, sixty-six distinct hemistichs in all. The imported वने in 48a is translated as “in the forest”, with the parallel’s रणे (“in battle”) explicitly disclosed rather than silently substituted. The possible lexical defect remains unresolved.

Published coverage is now 1.1.1–1.1.50. All forty earlier translation objects, twenty-two earlier errata objects, seven raw files and the original flag manifest remain unchanged. Thirty boundary overlays and the separate 1.1.6 lexical correction are present. Two additional baseline flags, 44 and 45, have corrected displays, making fifteen in total and leaving 3,198 baseline flags unresolved by boundary overlays. Seven unflagged boundary defects in 41–43 and 47–50 also receive corrections. These counts do not establish textual completeness. The first seventeen translations retain their prior provisional status.

The sentences spanning 41–44 and 47–51 retain their numbered boundaries. Mārīca's actual warning begins in 51a, outside this batch. Exactly next: 1.1.51–1.1.60, after a new boundary audit.

## Boundary check completed for 1.1.51–1.1.60

See [the alignment ledger](./TEXTUAL_AUDIT_1_1_51_60.md). The complete numbered Sanskrit Documents parallel supplies every boundary. Retrieved indexed IIT base-Sanskrit blocks corroborate selected 50–55 and 57–60 passages. Direct requests failed, including timeout errors for 56 and 59. Indexed retrieval is not a fresh IIT download. No full critical collation or independent human review is claimed.

Ten new overlays restore the next ten numbered verses. Duplicate raw rows 54/55 remain untouched, with their Sanskrit used once in the corrected sequence. The stray `1151` in raw row 56 remains in the original disclosure and is excluded from Sanskrit overlays. Its preceding instruction belongs to 57a. The imported श्रमणीं is retained there against the complete parallel's श्रमणाम्; both mean a woman ascetic. No sectarian identity is inferred.

Coverage is now 1.1.1–1.1.60. All fifty previous translations, thirty-one previous corrections, seven raw files and the flag manifest remain unchanged. Forty boundary overlays cover 18–22, 25–45 and 47–60, plus the separate 1.1.6 lexical correction. Forty-three checked verses contain eighty-six distinct half-verses. Seventeen baseline flags have corrected displays; 3,196 remain unresolved by the boundary overlays. Eight previously unflagged rows in this batch are also corrected. The initial 1–17 translations retain their provisional status.

Mārīca's warning is in 51a. Kabandha's instruction spans 56b–57a. Rāma's account spans 59b–60a, while Sugrīva's pact of friendship belongs to 61a. Exactly next: 1.1.61–1.1.70, after auditing all boundaries, including the duplicated 63/64 block.


## Boundary check completed for 1.1.61–1.1.70

[The new audit](./TEXTUAL_AUDIT_1_1_61_70.md), dated 24 October 2026, identifies the complete numbered `sites/valmikiramayan` parallel and actual indexed IIT witnesses. Direct IIT verse-61, verse-69 and sarga requests failed; no fresh full IIT collation is claimed. Indexed base-Sanskrit markers are distinguished from prose groupings and commentary numbering. No modern translated or commentary prose is copied.

Ten independently authored English/Hindi records extend coverage through 1.1.70. Four overlays restore 61–64; six normalize display/romanization on already correctly bounded 65–70, with imported readings disclosed. Raw 63/64 duplication remains untouched. Imported राघवप्रत्ययार्थं, चास्थि and पादाङ्गुष्ठेन are retained against the parallel's printed forms. Imported तथा in 66b agrees with the complete parallel and indexed IIT sarga block; the indexed multi-commentary page's numbered तदा reading is separately disclosed. Previous श्रमणीं in 57a and वने in 48a remain unchanged.

All sixty earlier translations and forty-one earlier errata objects are preserved. There are fifty-three checked verses, 106 unique half-verses, forty-four boundary restorations, six normalizations and the separate earlier lexical correction. Nineteen baseline flags have corrected displays; 3,194 remain unresolved by the overlays. These totals do not establish a fully proofread corpus. Exactly next: 1.1.71–1.1.80, after auditing duplicated raw 76/77 and all remaining boundaries in that range.


## Boundary check completed for 1.1.71–1.1.80

Date: 24 October 2026, Asia/Kolkata. [The ledger](./TEXTUAL_AUDIT_1_1_71_80.md) establishes every boundary before translation and distinguishes actual cached/indexed evidence from fresh direct access. The complete numbered `sites/valmikiramayan` parallel supplies all ten boundaries. Cached IIT 71 and 76 pages corroborate 71 and separately marked 76–77. Indexed IIT base Sanskrit supplies the remaining blocks. The direct sarga, 77 and 80 opens timed out; 74 and 78 were inaccessible. No full fresh IIT download, critical collation or independent human review is claimed.

Two overlays separate the duplicated four-half-verse raw 76/77 block. Eight others normalize already correctly bounded displays and matching IAST. All raw rows and all work through 70 remain intact. The double avagraha at 74, च निवेद्य च, च मैथिलीम् at 77 and अधिगम्य at 78 are retained. Distinct numbered commentary readings विनिवेद्य, तु and अभिगम्य, and the parallel’s printed अभिगंय, are disclosed. Previous श्रमणीं, वने and तथा are preserved.

Nārada narrates to Vālmīki throughout. Verse 76 remains a continuing fragment completed by 77. Hanumān’s actual short report is quoted at 78. All supplied names and words are marked. No ring specification, invented dialogue, modern yojana conversion, construction method or moral instruction endorsing violence is added. Connected notes, modern context and teachings remain separate and bilingual.

Coverage: eighty consecutive bilingual records, sixty-three checked verses and 126 unique half-verses. Sixty display overlays comprise forty-six restorations and fourteen normalizations; the separate earlier lexical correction makes sixty-one errata objects. Twenty-one baseline flags have corrected displays; 3,192 remain unresolved by these overlays. All seventy previous translation objects and fifty-one previous correction objects retain both their values and exact value bytes. Seven raw files, the flag manifest, exclusions, CSS and five previous ledgers are byte-identical. Both edition markers are `1.1.80`.

JavaScript syntax, corpus, publication, baseline preservation and independent Devanāgarī/IAST checks pass. Publication evidence is recorded separately after observation. Exactly next: **1.1.81–1.1.90**, beginning **तेन गत्वा पुरीं लङ्कां हत्वा रावणमाहवे**. Audit 83/84 ordering explicitly against numbered IIT base Sanskrit and the complete parallel; do not silently transfer another arrangement or Baroda numbering.
