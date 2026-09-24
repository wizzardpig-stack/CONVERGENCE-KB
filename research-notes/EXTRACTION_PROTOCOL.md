# CONVERGENCE Extraction Protocol

## Purpose
Turn source material into atomic, reviewable rules without allowing an AI model to invent doctrine.

## Non-negotiable rules
1. Never create a rule from memory when extracting a source.
2. Every candidate rule must point to a registered `source_id`.
3. Preserve the source's tradition and school. Never silently merge Western, Jyotisha, Numerology, or Human Design doctrine.
4. Prefer exact chapter/verse/page/section locators. If unavailable, record the strongest locator that exists and mark textual certainty accordingly.
5. Quotes are evidence snippets only; keep them short. The normalized rule must be original wording.
6. Separate calculation facts from interpretive doctrine.
7. Never convert traditional doctrine into fake scientific probability.
8. Never resolve a conflict by popularity. Create a conflict record.
9. If a copyrighted source is marked reference-only, summarize the rule in original language; do not copy substantial text.
10. Extraction agents create `candidate` rules only. Human/reviewer approval is required for `approved`.

## Extraction workflow
For each source:
1. Verify it exists in `sources/registry/source_registry.csv`.
2. Identify technique sections.
3. Extract one proposition per rule.
4. Give it a stable rule ID.
5. Encode its triggering condition.
6. Write an original normalized rule.
7. Map it to practical domains and normalized concepts.
8. Record evidence level, empirical status, and textual certainty.
9. Search existing rules for corroboration or conflict.
10. Create/update conflict records where required.
11. Save candidate JSON under `rules/candidates/<tradition>/`.
12. Run schema validation before considering the batch complete.

## Atomicity test
A rule is too broad if it contains multiple independent IF/THEN claims. Split it.

Bad:
"Strong Mars makes someone assertive, helps career, causes arguments, and indicates younger siblings."

Better:
Separate rules for each source-supported claim and domain.

## Source hierarchy
- Primary classical / primary late
- Scholarly translation
- Official system source
- Technical secondary
- Practitioner secondary
- Tertiary

Lower tiers may contextualize higher tiers but should not silently override them.

## Conflict policy
Examples that require explicit conflicts:
- tropical vs sidereal coordinate assumptions
- Lahiri vs Raman vs Krishnamurti ayanamsha
- house systems
- orb conventions
- divisional-chart calculation variants
- retrograde doctrine
- textual/translation variants
- numerology reduction conventions
- proprietary Human Design interpretive variants

## Output standard
A user-facing sentence must ultimately be traceable:
raw birth data -> deterministic calculation -> technique -> rule(s) -> conflict policy -> synthesis -> prose.
