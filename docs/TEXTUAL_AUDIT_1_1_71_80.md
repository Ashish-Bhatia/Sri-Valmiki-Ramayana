# Bāla Kāṇḍa 1.1.71–1.1.80: source-preserving audit

Date: 24 October 2026, Asia/Kolkata.
Baseline main: `9c55fdf15b8e81a41fcd6c8a71d602041a3b25aa`.

## Boundary ledger established before translation

The complete numbered Sanskrit Documents parallel and available IIT Southern Recension Sanskrit were aligned with the immutable imports before composing either translation. Twenty distinct half-verses supply ten consecutive addresses. **71 begins स च सर्वान्समानीय वानरान्वानरर्षभः**. Raw rows 76 and 77 are identical four-half-verse blocks containing both numbered verses. Their content must appear once, not twice. Verse 76 is a continuing participial construction whose main verb and concluding subject occur in 77b.

| Verse | Imported half-verses | Display treatment |
|---|---|---|
| 1.1.71 | 1.1.71:1 + 1.1.71:2 | Boundaries unchanged; normalize ASCII visarga and display layout. |
| 1.1.72 | 1.1.72:1 + 1.1.72:2 | Boundaries unchanged; normalize layout and matching IAST punctuation. |
| 1.1.73 | 1.1.73:1 + 1.1.73:2 | Boundaries unchanged; normalize layout. |
| 1.1.74 | 1.1.74:1 + 1.1.74:2 | Boundaries unchanged; retain the imported double avagraha and च निवेद्य च. |
| 1.1.75 | 1.1.75:1 + 1.1.75:2 | Boundaries unchanged; normalize layout. |
| 1.1.76 | 1.1.76:1 + 1.1.76:2 | Restore its boundary; do not pull in 77 to complete the sentence. |
| 1.1.77 | 1.1.76:3 + 1.1.76:4 | Restore its boundary; do not repeat the identical raw 77 block. |
| 1.1.78 | 1.1.78:1 + 1.1.78:2 | Boundaries unchanged; normalize ASCII visarga, retaining अधिगम्य. |
| 1.1.79 | 1.1.79:1 + 1.1.79:2 | Boundaries unchanged; normalize ASCII visarga. |
| 1.1.80 | 1.1.80:1 + 1.1.80:2 | Boundaries unchanged; normalize ASCII visarga. |

`row:segment` counts half-verses after splitting danda and numeric boundaries. Two restorations and eight display normalizations are distinct operations. All ten overlays retain a two-segment mapping, matching romanization and access to the original import. None changes a Sanskrit lexeme.

## Witnesses and actual access

- Complete numbered parallel: https://sanskritdocuments.org/sites/valmikiramayan/baala/sarga1/balasans1.htm . Web open on 24 October returned the full 909-line page, reported as crawled today. Sanskrit lines 568–569, 577–578, 584–585, 592–593, 600–601, 607–608, 609–610, 619–620, 627–628 and 635–636 establish 71–80. Its prose grouping of 76–77 does not override the separate Sanskrit markers. This is the `sites/valmikiramayan` presentation, not the Baroda Critical Edition mirror.
- IIT sarga Sanskrit: https://www.valmiki.iitk.ac.in/sloka?field_kanda_tid=1&field_sarga_value=1&language=dv . The open timed out. Search retrieval supplied indexed base-Sanskrit blocks for 71–75 and 78–80, reported as crawled four months earlier. Those blocks retain the imported च निवेद्य च in 74 and अधिगम्य in 78.
- IIT verse 71: https://www.valmiki.iitk.ac.in/content?field_kanda_tid=1&field_sarga_value=1&field_sloka_value=71&language=dv . Web open returned the numbered Sanskrit, reported as crawled 1.1 years earlier. This is a cached retrieval, not evidence of a fresh origin download.
- IIT verse 76: https://www.valmiki.iitk.ac.in/content?field_kanda_tid=1&field_sarga_value=1&field_sloka_value=76&language=dv . Web open returned separately marked 76 and 77 together, reported as crawled 1.2 years earlier. It corroborates all four half-verses and च मैथिलीम् in 77a. The separate verse-77 open timed out.
- IIT verse 72 with commentary selectors: https://www.valmiki.iitk.ac.in/content?etss=1&field_kanda_tid=1&field_sarga_value=1&field_sloka_value=72&language=dv&scnb=1 . Indexed retrieval, reported as crawled five months earlier, includes the separately numbered 72 base Sanskrit. Commentary prose is not substituted for verse text.
- IIT verse 73 with translation selectors: https://www.valmiki.iitk.ac.in/content?choose=1&etaa=1&etak=1&etgr=1&etmt=1&etnb=1&etss=1&etty=1&field_kanda_tid=1&field_sarga_value=1&field_sloka_value=73&language=dv . Indexed retrieval, reported as crawled five months earlier, supplies both half-verses and the 1.1.73 marker.
- IIT commentary witness: https://www.valmiki.iitk.ac.in/commentaries?field_commnetary_tid=8&field_kanda_tid=1&field_sarga_value=1&language=dv . Indexed separately numbered Sanskrit blocks corroborate 71–76 and 79–80a, while disclosing विनिवेद्य at 74. The same numbered blocks in https://www.valmiki.iitk.ac.in/content?field_kanda_tid=1&field_sarga_value=1&field_sloka_value=35&language=dv&scaa=1&scgr=1&sckt=1&scmt=1&scnb=1&scss=1&scty=1 show तु मैथिलीम् in 77 and अभिगम्य in 78. Both are indexed, reported as crawled four months earlier. Commentary prose elsewhere uses different addresses; those do not replace the base-Sanskrit markers.
- Direct opens of verse-74 and verse-78 content URLs were inaccessible. Verse-80 open timed out. A stronger-engine search for the 74, 76 and 78 passages initially returned no results; subsequent second-engine retrieval supplied the indexed evidence above.

No full fresh IIT download or collation is claimed. No modern translated or commentary prose is copied. The displayed ancient Sanskrit is reconstructed exclusively from the existing imports. All original raw text and romanization remain immutable.

## Lexical and orthographic readings

| Location | Retained import | Other witness | Decision |
|---|---|---|---|
| 74a | निवेदयित्वाऽऽभिज्ञानं | Parallel निवेदयित्वा अभिज्ञानम्; indexed IIT sarga retains the double avagraha. | Preserve both avagraha signs and matching `nivedayitvā''bhijñānaṃ`. Treat the recognition token as अभिज्ञानम्; do not invent a different token from the unusual spelling. |
| 74a | प्रवृत्तिं च निवेद्य च | Parallel प्रवृत्तिम् च निवेद्य च; indexed IIT numbered commentary block प्रवृत्तिं विनिवेद्य च. | Retain च निवेद्य च, also in indexed IIT base Sanskrit. The variant prefix वि is disclosed, not substituted. |
| 77a | सीतां च मैथिलीम् | Complete parallel and cached IIT 76/77 agree. Indexed numbered commentary block has सीतां तु मैथिलीम्. | Retain च; disclose the distinct तु witness. |
| 78a | सोऽधिगम्य | Indexed IIT base Sanskrit agrees. Complete parallel prints सः अभिगंय; indexed numbered commentary block has सो ऽभिगम्य. | Retain अधिगम्य and `so'dhigamya`. Both prefixes express approaching in this context, but are not silently interchanged. The parallel's printed गंय is also disclosed. |

The parallel's separated words, final म्/ं, anusvāra/homorganic nasal spellings and ASCII visarga presentation are orthographic differences, not authority to replace the adopted reading. In particular, raw 77b पुनरायान्महाकपि: is the sandhied return verb with महाकपिः, not another event. Prior श्रमणीं in 57a, वने in 48a and तथा in 66b remain unchanged.

## Translation and validation record

English and Hindi were independently composed after the boundary ledger and reviewed by the assistant. No independent human reviewer is claimed. Nārada remains the narrator speaking to Vālmīki. Hanumān’s brief “Sītā has been seen” in 78 is actual reported speech; no other quotation is invented.

71 identifies Sugrīva by a supplied bracketed name and describes gathering and dispatching the vānaras. It supplies no orders or routes. 72 retains a hundred yojanas without a fixed modern conversion or invented words of Sampāti. In 73, Sītā is absorbed in thought; an object such as Rāma is not inserted for ध्यायन्तीम्. In 74, अभिज्ञानम् is a recognition token, not an explicitly named ring. प्रवृत्तिम् is news / an account; its content is not supplied. तोरणम् remains the gateway arch, not the destruction of the entire grove. The double avagraha is displayed and romanized without hiding its unusual form.

75 distinguishes five commanders, seven ministers’ sons and Akṣa. It does not name a captor or weapon. In 76, उन्मुक्तम् is rendered released, not merely capable of obtaining release. The weapon’s understood bond, subject and pronoun are supplied in brackets where needed. यदृच्छया gives voluntary forbearance. No rope material, duration, name of the weapon, terms of the boon or audience with Rāvaṇa is invented. The unfinished construction is marked with ellipses in both languages and a bilingual link to 77.

77 completes the sentence with the return of the great vānara. ऋते excepts Maithilī Sītā from the burning. No list of other spared buildings is added. “News” for the substantive प्रियम् is bracketed. In 78, अमेयात्मा is rendered as an epithet of immeasurable spirit / आत्मबल, without a numerical or psychological claim. The passive quoted words are preserved; the Hindi identification of Hanumān is bracketed. अधिगम्य and its matching IAST remain explicit. In 79 the subject changes to [Rāma], bracketed in both languages. The sun comparison belongs to the arrows; no hydrological mechanism, refusal of passage or moral endorsement of coercion is added. In 80 the Ocean is personified, and the causative verb has [Rāma] commission Nala to build the bridge. No construction method, floating-stone claim, modern site or crossing from 81 is inserted.

Modern context and selected teachings at 71, 74, 78 and 80 are separate bilingual editorial reflections on organizing shared work, reassurance through information, truthful reporting and named responsibility. They do not turn burning or killing into general instructions.

All seventy previous translation objects and fifty-one previous errata objects match baseline, including exact original value bytes. Fifteen complete files are byte-identical: all seven raw files, the flag manifest, `_config.yml`, CSS and five older audit ledgers. Runtime logic changes only at its edition marker; the index changes only its script marker and displayed count. An independent character-mapping comparison matches Devanāgarī and IAST in all ten new overlays.

Passed: `node --check assets/app.js`, `node scripts/audit-corpus.mjs --check`, `node scripts/verify-publication.mjs`, `git diff --check`, baseline object/value-byte/whole-file comparisons and independent Sanskrit–IAST checks. The expanded verifier checks every mapping, duplicate preservation, variants, continuing fragments, speaker metadata, bilingual sections, marker consistency, pending 81 and publication separation.

Totals: eighty consecutive bilingual records; sixty-three checked verses and 126 unique half-verses across 18–80. Sixty display overlays comprise forty-six boundary restorations and fourteen normalizations. With the earlier 1.1.6 lexical correction there are sixty-one errata objects. Baseline flags 76 and 77 now have corrected displays, making twenty-one resolved in the display and 3,192 unresolved by these overlays. Eight normalizations do not count as newly found defects. The original 3,213-flag manifest is unchanged. Earlier 1–17 translations remain provisional.

Both edition markers are `1.1.80`. New release build, HTTP and focused reader observations belong in `docs/DEPLOYMENT_VERIFICATION.md` after actual inspection; none is claimed in advance.

## Exact next action

Complete this batch through 1.1.80, verify the managed main/root release and exclusions, then continue exactly **1.1.81–1.1.90**, beginning **तेन गत्वा पुरीं लङ्कां हत्वा रावणमाहवे**. Audit all boundaries first, including the 83/84 half-verse ordering difference between the imports and this parallel. Follow the adopted Southern Recension witness explicitly; do not silently transfer a different arrangement or Baroda numbering.
