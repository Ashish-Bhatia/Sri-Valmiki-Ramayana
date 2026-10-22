# Sanskrit source, edition and translation policy
Updated: 2026-10-23

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

## Correcting and translating
- Keep an immutable source-layer record. Record textual emendations in `data/errata.json`; present the corrected reading with a traceable source.
- Translate English and Hindi independently into current, readable language. Do not paste modern copyrighted translations from reference sites.
- Treat modern reflections as editorial views, never as additional original ślokas.
- Clearly distinguish a teaching inferred from a narrative description from an explicit command or quotation.
- In ambiguous cases, prioritize textual certainty over output volume. Do not infer a missing verse.
- For each completed sarga, document edition, verse-range check, parallel sources, defects, corrected readings, translation reviewer, coverage, and audit result.

## Known edition / segmentation issue
Within the imported Bāla 1.1 corpus, 1.1.18 contains a continuation into the next verse and 1.1.19–1.1.22 include merged or repeated material. This dataset should **not** be treated as one clean śloka per imported JSON record without QA. The critical-edition text also varies in both numbering and wording; do not simply substitute verses from it while retaining Southern Recension labels.

## Copyright and manuscript images
The ancient Sanskrit composition is in the public domain; modern typesetting, digitization, translation, critical apparatus and scanned editions can have separate rights or reuse conditions. Keep source-specific attribution and check reuse terms before adding facsimile PDF scans or third-party translations.
