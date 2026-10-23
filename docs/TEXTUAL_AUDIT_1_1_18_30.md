# Bāla Kāṇḍa 1.1.18–1.1.30: source-preserving boundary audit

Date: 23 October 2026, Asia/Kolkata.
Baseline main commit: `ab2a6a6e0c4fccd21b6e09453a0f3c955ea163ea`.

## Scope and result

Thirteen numbered verses now have independently written English and Hindi translations. Eleven corrected display overlays restore verse boundaries. The original seven Sanskrit files, all previous translation entries 1–17, and the previous 1.1.6 correction remain unchanged.

This is a **verse-boundary audit**, not a full critical collation or a claim of independent human review. The imported corpus does not establish a uniquely original manuscript or a single fully identified printed base edition.

## Witnesses and actual access

1. IIT Kanpur / Rashtriya Sanskrit Vidyapeetham, Southern Recension, [Sarga 1](https://www.valmiki.iitk.ac.in/sloka?field_kanda_tid=1&field_sarga_value=1&language=dv). Direct requests timed out or returned gateway errors. Indexed Sanskrit extracts were retrieved for selected passages, including the 19–21, 25–28 and 28–31 blocks. These corroborate numbered boundaries but are not a newly downloaded complete IIT page. Search-index crawl dates were several months earlier. Some indexed commentary uses different numbering, so commentary headings were not substituted for the base Sanskrit markers.
2. [Numbered Sanskrit parallel hosted by Sanskrit Documents](https://sanskritdocuments.org/sites/valmikiramayan/baala/sarga1/balasans1.htm), accessed through the web retrieval service. Its base Sanskrit lines 199–278 supplied the complete boundary comparison for this batch. This is the `sites/valmikiramayan` presentation, **not** the separate `mirrors/ramayana/utf` Baroda Critical Edition text. Direct executor download of the parallel returned a server error, so no raw-HTML download is claimed.

The parallel has orthographic and transcription differences, including पृथ्वी / पृथिवी and apparent forms such as कांयया, ज्येष्टम् and गुहेअन. The overlays preserve the imported lexical reading. Only segmentation, ordinary whitespace and ASCII colon used as visarga are normalized. No conjectural lexical substitution is introduced. A later direct IIT check and specialist Sanskrit review remain appropriate.

## Alignment ledger

In the table, `row:segment` means the Nth hemistich in an untouched imported row, split at danda / numbered boundaries. A standard śloka here contains two hemistichs, normally four metrical pādas. The `sourceSegments` field in each correction makes this reconstruction reproducible.

| Correct verse | Imported hemistichs used | Finding |
|---|---|---|
| 1.1.18 | 1.1.18:1 + 1.1.18:2 | Remove the following verse’s opening hemistich from this display. |
| 1.1.19 | 1.1.18:3 + 1.1.19:1 | Restore धनदेन… before तमेवं…. |
| 1.1.20 | 1.1.19:2 + 1.1.19:3 | Split the duplicated 19–21 block at its numerical markers. |
| 1.1.21 | 1.1.19:4 + 1.1.21:1 | Join यौवराज्येन… and तस्याभिषेक…. |
| 1.1.22 | 1.1.21:2 + 1.1.21:3 | Separate Kaikeyī’s request from the preceding verse. |
| 1.1.23 | Unchanged row 1.1.23 | Already contains the two correct hemistichs. |
| 1.1.24 | Unchanged row 1.1.24 | Already contains the two correct hemistichs. |
| 1.1.25 | 1.1.25:1 + 1.1.25:2 | Remove the next verse’s opening hemistich. This overrun was missed by the original regex flags. |
| 1.1.26 | 1.1.25:3 + 1.1.26:1 | Preserve the transition from Lakṣmaṇa to Sītā within this verse. |
| 1.1.27 | 1.1.26:2 + 1.1.26:3 | Separate the duplicated Sītā description at its markers. |
| 1.1.28 | 1.1.26:4 + 1.1.28:1 | Preserve Sītā’s following and the citizens’ farewell as the two halves. |
| 1.1.29 | 1.1.28:2 + 1.1.28:3 | Restore the numbered Śṛṅgiberapura / Guha verse. |
| 1.1.30 | 1.1.28:4 + 1.1.30:1 | Preserve the Guha scene and the start of the onward journey. Citrakūṭa belongs to 31. |

Across 18–30 the corrected display contains 26 distinct hemistichs, each once and in the witnessed order. No verse from a different recension has been inserted. Sanskrit beyond 30 remains uncorrected in this batch, including the duplicate blocks in imported rows 30–32.

## Translation decisions

- Sentences run across 19–21, 21–22, 25–26, 26–28 and 28–32. Connected-verse notes and explicit ellipses preserve those boundaries. The translations do not move future actions into earlier verses to create self-contained prose.
- `सत्यपराक्रमम्` is rendered as unfailing in valour. `त्यागे` is rendered as generosity. Dharma in the comparison is retained as the personified Dharma.
- 1.1.26 supplies a clearly bracketed English verb from the immediately preceding verse. The first half concerns Lakṣmaṇa, while the second begins Sītā’s description.
- 1.1.28 does not establish that Daśaratha travelled to Śṛṅgiberapura. 1.1.30 does not establish that Guha continued to Citrakūṭa. Notes prevent these readings without adding a new Sanskrit line.
- Modern context and selected teachings are editorial inferences. None is presented as an additional śloka, a quotation, or a universal command to follow a family member’s wishes.
- The new translations were composed for this edition. No modern reference translation or commentary prose was pasted into them.

## Quality accounting

The immutable preliminary manifest still has **3,213** raw-source flags. Ten of those flags have corrected displays in this batch. The additional overrun at 1.1.25 was previously unflagged. Therefore **3,203 baseline flags remain unresolved by the display overlays**. These are alert counts, not counts of proven textual errors.

Run `node scripts/audit-corpus.mjs --check` to reproduce the original manifest. Run `node scripts/verify-publication.mjs` for source hashes, reconstruction, distinct hemistichs, translations, annotations, links and publication separation. Neither script deploys the website.

## Publication separation

The public reader links to `sources.html`, containing textual attribution, download links and edition limitations. Project checkpoints and audit records stay under `docs/`. `_config.yml` excludes `docs`, `scripts` and `README.md` from the branch-based Pages output. The former empty `.nojekyll` marker was deliberately removed because it bypassed those exclusions. Its history remains in Git. No custom workflow is created.

## Next untranslated batch

**Bāla Kāṇḍa, Sarga 1, 1.1.31–1.1.40.** Audit actual verse boundaries first. Start 1.1.31 with चित्रकूटमनुप्राप्य…, not with the preceding verse’s ते वनेन…. The current imported rows remain unchanged and require alignment before translation.
