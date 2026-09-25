# Jyotisha Expansion 01 — Source Audit

**Audit date:** 2026-09-24
**Branch:** `research/jyotisha-expansion-01`
**Scope:** source verification only; no BPHS doctrinal rules were extracted.

## Decision summary

| Source | Decision | Edition actually used for candidates | Rights/access posture |
|---|---|---|---|
| `JYOT-SARAVALI-001` | **Extraction-eligible with conservative Sanskrit handling** | 1907 first-edition Devanagari scan, Internet Archive `saravali00kalyuoft` | Public-domain-era edition; scan is the source layer, not the 1983 Santhanam translation. OCR and translation uncertainty are recorded on every rule. |
| `JYOT-PHALADEEPIKA-001` | **Reference-only extraction-eligible** | 1937 first-edition English/Sanskrit translation by Panditabhushana V. Subrahmanya Sastri, Aruna Press, Internet Archive `in.ernet.dli.2015.92117` | The title page says copyright registered while Internet Archive metadata says public domain. Treat the translation as reference-only; no bulk text or long quotation is stored. |
| `JYOT-BPHS-001` | **Blocked for doctrinal extraction** | No candidate rules created; a 1992 Ranjan two-volume set is identified as a future reference-only candidate | Wisdomlib is a glossary/definition page. The Ranjan set has printed publisher copyright and uncleared translation/commentary rights; no bulk extraction. |

## Saravali audit

### Exact edition and text

- **Title:** *Saravali*.
- **Author:** Kalyanavarma; the scan’s title page uses the Sanskrit form `श्रीमत्कल्याणवर्मविरचिता`.
- **Edition:** 1907 first edition, as stated on the title/colophon pages of the scan.
- **Editor/translation status:** V. Subrahmanya Sastri is credited with textual readings on the title page. The scan is Sanskrit/Devanagari; no English translator is identified. The rules therefore use original English paraphrase, not an attributed English translation.
- **Publisher:** Bamba Nirayasagara Dharmashastra Mandir, Bombay, as shown in the colophon.
- **Stable item:** <https://archive.org/details/saravali00kalyuoft>.
- **Metadata:** <https://archive.org/metadata/saravali00kalyuoft>.
- **Completeness/locators:** The scan presents the numbered chapters and Sanskrit verse numbering. Chapter/verse citations are usable when the printed verse is legible; the OCR is not treated as a critical edition. Around the Putra and Kalatra sections the OCR omits a usable chapter heading, so those candidates retain the section and verse span while explicitly leaving the chapter number unresolved rather than guessing.

### Why the previous source record was replaced

The prior Open Library record pointed to the 1983 R. Santhanam English/Sanskrit edition. Its Internet Archive scan is access-restricted, the two-volume edition was not fully available, and the translation/commentary rights were uncleared. It remains documented in the source registry notes as a rejected/discovery-only lead; no rule in this batch is attributed to Santhanam.

### Rights and transmission handling

- The 1907 publication is recorded as `public_domain_us` in the registry because the source edition predates modern copyright; this does not clear unrelated modern editions.
- Temporary OCR was used only for analysis and is outside the repository.
- Rules contain original normalized wording, no long source quotation, and explicit transmission notes. The candidate `short_quote` fields are intentionally null where the Sanskrit OCR or the copyrighted translation made a minimal quote unnecessary; the chapter/verse locator and source terms provide the evidence pointer.
- Claims based on damaged OCR, uncertain sequence, or incomplete procedures remain low/medium textual certainty and are not marked executable merely because they are recorded.

## Phaladeepika audit

### Exact edition and text

- **Title:** *Mantreswara’s Phaladeepika* (the title page also uses *Phaladeepika* as the added title).
- **Author:** Mantreswara.
- **Edition:** 1937 first edition; the preface is dated 6 January 1937.
- **Translator:** Panditabhushana V. Subrahmanya Sastri, B.A. The title page also identifies him as a translator of Brihat Jataka, Jataka Parijata, and Sripati Paddhati.
- **Publisher:** Aruna Press, Bangalore.
- **Stable item:** <https://archive.org/details/in.ernet.dli.2015.92117>.
- **Metadata:** <https://archive.org/metadata/in.ernet.dli.2015.92117>.
- **Locators:** The scan has adhyaya/sloka headings and printed page numbers. The candidates use adhyaya/sloka; individual printed-page mapping is not asserted where the OCR/page image was not checked directly.

### Edition and rights cautions

- The title page states “Copy Right Registered.” Internet Archive metadata labels the item public domain, but that platform label is not a rights adjudication. The registry therefore remains `rights_review_required` and the translation is treated as reference-only.
- The 1992 S. S. Sareen/Sagar edition remains discovery-only: its catalog record identifies the edition, but access is search-limited and no reusable full text or cleared rights were found.
- The translator’s preface says earlier editions were incomplete, had mismatched slokas, and required relocation of missing material. The scan’s contents and body also contain chapter/sloka numbering inconsistencies. The rules preserve these as source uncertainties.
- The text refers to other authorities in its own prose. No Brihat Jataka, BPHS, Jaimini, Hora Sara, or modern Parashari rule was imported into a Phaladeepika candidate.

## BPHS audit (no extraction)

### Bibliographic finding

The current `JYOT-BPHS-001` URL is a Wisdomlib definition/glossary page for *Brihat-parashara-hora-shastra*, not a verse-level edition. It does not identify a complete translator/editor, publisher, or stable chapter/verse map.

A concrete edition candidate was independently located, but it remains outside the repository’s rights gate:

- **Work:** *Brihat Parasara Hora Sastra* (traditional attribution to Maharshi Parashara).
- **Publisher:** Ranjan Publications, New Delhi.
- **Edition statement on scans:** **1992**, two volumes.
- **Volume I:** English translation, commentary, annotation, and editing by **R. Santhanam**; preface dated 1984.
- **Volume II:** English translation undertaken by **Gouri Shankar Kapoor** because Santhanam was unavailable; preface dated 21 December 1987.
- **Structure:** 97 chapters, divided into chapters 1–45 (Volume I) and 46–97 (Volume II).
- **Relationship to the earlier issue:** the Library of Congress record describes a Ranjan first edition dated 1984–1988. The 1992 title pages do not establish whether the 1992 set is a second edition, reprint, or revised printing, so that relationship remains unresolved.

Evidence: [Library of Congress catalog record](https://lccn.loc.gov/85900536), [working Ranjan Volume II community scan](https://archive.org/details/pcis_brihat-parasara-hora-sastra-volume-2-by-maharshi-parasara-sanskrit-and-engl), and [community item](https://archive.org/details/BPHSEnglish). The previously cited Volume I item URL is unstable/404; its bibliographic details are therefore retained as provisional audit evidence, not as a directly reproducible extraction witness.

### Rights and access gate

The Ranjan volume title/copyright pages state **© With the Publishers**. An Internet Archive CC0 field is uploader/platform metadata, not a license grant from Ranjan Publications. The English translations, commentary, annotations, editing, diagrams, and printing therefore remain **reference-only and uncleared**; no bulk text, verbatim extraction, or repository redistribution is permitted.

Other witnesses reinforce the gate rather than replace it: the 1944 scan has a different 51 + 20 chapter arrangement and page defects; the 1952 DLI witness is Sanskrit/Hindi with publisher-reserved rights; the 1925 item is incomplete; and online Sanskrit collections are discovery/concordance resources, not edition-controlled rights-cleared witnesses.

### Transmission and numbering concerns

- Santhanam’s preface describes examining multiple Sanskrit/Hindi versions and selecting a Sanskrit version rendered through **Sitaram Jha**. Sitaram Jha is an editorial/base-text intermediary, not the author of BPHS.
- The preface also mentions shorter witnesses with approximately 36 and 25 chapters. The 97-chapter set is therefore an edition-specific recension, not automatically an authorial autograph or demonstrably complete text.
- The set contains planetary characters, 16 vargas, aspects, house effects, Bhava Padas, Upapada, Argala, Karakamsa, yoga families, Dashas, Ashtakavarga, and related procedures. No BPHS doctrine was extracted from these contents.
- A chapter/verse concordance must compare the exact volume, Sanskrit witness, printed page, translator/commentary layer, OCR confidence, and missing/duplicate/supplied material. Online transcriptions show gaps, duplicate numbering, malformed headings, and missing links; those defects cannot be transferred to the printed Ranjan edition without collation.
- David Pingree’s *Jyotiṣāstra: Astral and Mathematical Literature* (1981), pp. 86–88, is useful transmission scholarship: it describes the *purva-khanda* as a composite collection probably composed after about 600 CE and the *uttara-khanda* as following it before about 800 CE. These are scholarly reconstructions, not settled authorship or date claims, and Pingree is not a verse source.
- The translator’s Lahiri-ayanamsa example is an edition/example statement, **not** a repository-wide ayanamsha policy. Any future BPHS candidate must keep coordinate policy separate and disclose it.

### Future source recommendation

Keep `JYOT-BPHS-001` as a work-level placeholder with status **blocked for extraction / rights review required / reference-only**. Do not silently repoint it to a community scan. Reserve, but do not yet register, `JYOT-BPHS-RANJAN-1992-001` for a future rights-cleared set; if volume-specific rules are frequent, use separate volume IDs. A future record must preserve the Sanskrit base/recension, the 1992 edition statement, the 1984–1988 relationship uncertainty, Santhanam’s Volume I role, Kapoor’s Volume II role, 97-chapter division, and separate rights status for each layer.

### Required next gate

1. Obtain a rights-cleared copy or written permission.
2. Verify title page, copyright, publisher, edition, volume, printer, pagination, and any ISBN from page images.
3. Resolve the 1984–1988 versus 1992 issue relationship.
4. Record the Sanskrit base/recension separately from the English translators.
5. Build a chapter/verse/page concordance against the exact set and a complete legible scan.
6. Keep Pingree, ayanamsha, house-system, and dasha assumptions separate from the edition’s wording.

Highest-value future domains, once the gate passes:

1. graha nature and classifications;
2. bhava significations and house-lord procedure;
3. varga and divisional-chart doctrine;
4. Vimshottari and related dasha procedures;
5. yogas and yoga families;
6. Shadbala and source-specific strength components;
7. Ashtakavarga;
8. Arudha and related special ascendant procedures;
9. planetary aspects;
10. house-lord results and divisional-chart doctrine.

## Audit conclusion

Saravali and Phaladeepika now have explicitly selected, source-specific editions and candidate rules. BPHS remains audit-only. The repository records edition uncertainty, rights limits, and non-executable timing procedures rather than filling gaps with later Jyotisha doctrine.
