# Jyotisha Expansion 01 — Cross-Source Comparison

**Compared traditions:** Kalyanavarma/*Saravali* (1907 Sanskrit edition), Mantreswara/*Phaladeepika* (1937 Sastri translation), and the existing Varahamihira/*Brihat Jataka* candidates.
**BPHS:** not used for comparison or extraction; see `jyotisha-expansion-01-source-audit.md`.

## Counting rule

The counts below are audit counts, not a claim that every shared keyword is a comparable proposition. A `corroborates` edge was added only where the normalized trigger and outcome are genuinely comparable across different source traditions. Similar wording, a repeated table, or a common domain without a comparable condition was recorded as a partial, scope, terminology, or not-comparable relationship instead.

| Relationship class | Count | Notes |
|---|---:|---|
| Independent corroborations | 5 strong definition edges | The graph contains 5 edge instances across 3 graph-bearing rules; partial/structural comparisons remain report-only because the schema has no typed edge strength. |
| Partial corroborations | 8 report-only comparisons | Broad varga, drishti, bhava, friendship, strength, yoga-family, vocation, and timing overlaps are documented but not represented as proof edges. |
| Active conflicts | 3 | Hora lordship, Drekkana lordship, and day/night temporal-strength assignments. |
| Terminology differences | 3 | Source-era yoga names, varga/dignity labels, and ordering/wording differences. |
| Calculation differences | 3 affected propositions | Hora, Drekkana, and day/night temporal-strength variants change a chart-relevant result. |
| Doctrinal differences | 3 affected propositions | The same three active source variants; no outcome conflict was manufactured from broad tables. |
| Scope differences | 4 | Broad outcome catalogues versus compact frameworks, and incomplete timing/strength fragments. |
| Not actually comparable | 5 groups | Sanskrit OCR passages without a stable English proposition, BPHS, modern systems, and source-specific outcome lists without equivalent triggers. |

## Strong agreements

1. **Sign lordship:** Phaladeepika I.6 independently gives the same Aries-through-Pisces lord sequence recorded in the existing Brihat Jataka candidate.
2. **Vargottama definition:** Saravali and Phaladeepika independently define Vargottama as a Navamsa bearing the same sign name as its Rasi; their broader varga tables are not merged.
3. **Moon-relative yoga definitions:** Sunapha, Anapha, and Durudhara are independently stated in Phaladeepika and the existing Brihat Jataka candidates. The Kemadruma qualification remains a source-qualified variant and is not a graph proof edge.

## Material disagreements

### Hora lordship — `CONFLICT-JYOT-HORA-LORDSHIP-001`

- Brihat Jataka candidate: sign-lord / eleventh-house-lord Hora variant.
- Phaladeepika III.4: two half-sign portions assigned to Sun and Moon with odd/even reversal.
- Materiality: chart-changing because the divisional owner changes.
- Resolution: preserve variants; require a user-selected source convention.

### Drekkana lordship — `CONFLICT-JYOT-DREKKANA-LORDSHIP-001`

- Brihat Jataka candidate: sign, eleventh, and twelfth lords in the reported variant.
- Phaladeepika III.4: sign, fifth, and ninth lords.
- Materiality: major because divisional-house ownership changes.
- Resolution: preserve variants; do not apply one sequence across schools.

### Day/night temporal strength — `CONFLICT-JYOT-DAY-NIGHT-STRENGTH-001`

- Phaladeepika IV.1: Mars, Moon, and Venus are night-strong; the other listed grahas are day-strong, with Mercury at all times.
- Brihat Jataka comparison candidate: Moon, Mars, and Saturn are night-strong; Venus is day-strong, with Mercury at all times.
- Materiality: major because the temporal-strength classification changes for Venus and Saturn.
- Resolution: preserve variants; do not expose one merged day/night list.

### Natural friendship table — provisional, not a conflict record

The Saravali Sanskrit OCR and the compressed Brihat Jataka table may differ in row alignment for some planet pairs, but the Sanskrit scan is damaged and the baseline table is itself compressed. This is **not** recorded as a conflict: the difference may be OCR, translation, or a genuine variant. It is preserved as a review note on the Saravali rule and must be collated before any conflict decision.

## Partial and scope-only comparisons

- **Graha signification:** all three works assign broad domains to planets, but the lists are not equivalent tables and are not linked as rule-level corroboration.
- **Varga taxonomy/weighting:** Phaladeepika gives explicit full/half/sixteenth language; Saravali and Brihat Jataka use related but differently structured portions. The weighting and broader taxonomies are not harmonized, and only the Vargottama definition is graph-linked.
- **Yoga families:** Phaladeepika’s Pancha Mahapurusha and Sankhya definitions are source-specific; no later yoga catalog is backfilled.
- **Vocation and dasha:** Phaladeepika’s tenth/Navamsa framework and Saravali’s karma/dasha fragments overlap in purpose, but their trigger sets and completeness differ. The batch records them as non-executable where the procedure is incomplete.
- **Bhava tables:** the first/late-house lookup tables share broad domains, but the source synonym lists and house groupings are not identical; the comparison remains report-only and no graph edge is claimed.
- **Benefic/malefic and strength:** classifications overlap, but source-era membership and conditioning differ; terminology and scope differences are preserved rather than averaged.

## Notable non-comparisons

- Saravali’s Sanskrit-only 1907 passages whose OCR is too damaged to establish a reliable English proposition.
- Phaladeepika’s extensive disease, death, longevity, child-count, and outcome tables where the trigger set is not equivalent to the compact baseline candidates.
- Timing formulas that require a separately locked dasha/transit engine, ayanamsha, or varga convention.
- BPHS, Jaimini, Hora Sara, and modern Parashari material, none of which was used to fill gaps.
- Same-source repetition within one text; repeated verses are not counted as independent corroboration.

## Sections not processed

- **Saravali:** Chapters 1–2, most of 9–23, 25–29, 32, and 42–54; detailed arishta, transit, yoga, and outcome tables were not expanded into rules. Only selected passages in Chapters 3–8, 24, 30, and 33–41 were used.
- **Phaladeepika:** Chapters 7, most detailed tables in 8–9 and 16–18, 13–14, and 22–28; extensive disease, death, longevity, child-count, Ashtakavarga, Kalachakra, and outcome catalogues were not expanded. Selected definitions/procedures from Adhyayas 1–6, 10–12, 15, 19–21 were used.
- **BPHS:** no doctrine sections were processed; the work remains audit-only pending a rights-cleared, edition-specific source.

## Review-driven deferrals

The final batch contains **32 Saravali** and **60 Phaladeepika** candidates (92 total). The following planned Saravali entries were deliberately deferred rather than retained as placeholders: the disputed drishti table, the 3.16 Saptamsa/3.11 Navamsa sequence, incomplete directional/temporal strength tables, the unencoded vocation sign-group table, the unencoded natural-friendship rows, the body-region sign mapping, the month/year remainder procedure, and incomplete dasha-result/quality fragments. The batch stays within the requested overall range without padding uncertain doctrine.

## Graph implementation

The candidate `corroborates` arrays are deliberately sparse. They contain only the five strong definition edges listed above; partial/structural comparisons remain in this report rather than being represented as unqualified proof edges. The three conflict files preserve Hora, Drekkana, and day/night variants instead of choosing a default rule. No source-mixing normalized rule was created.
