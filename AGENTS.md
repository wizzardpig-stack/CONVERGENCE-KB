# CONVERGENCE-KB project instructions

This repository is the provenance-aware knowledge base for the CONVERGENCE synthesis engine.

## Mission
Build a source-backed rules graph for Western astrology, Jyotisha, numerology, and Human Design. The system must preserve disagreements between traditions and expose the reasoning behind user-facing interpretations.

## Before editing
Read:
- `research-notes/EXTRACTION_PROTOCOL.md`
- `schemas/rule.schema.json`
- `schemas/conflict.schema.json`
- `sources/registry/source_registry.csv`

## Hard rules
- Never invent a source, quotation, chapter, verse, page, rule, calculation, or historical claim.
- Never promote a candidate rule to approved merely because multiple websites repeat it.
- Never flatten conflicting schools into one rule.
- Never label interpretive doctrine as scientifically established.
- Keep astronomical/mathematical calculations separate from interpretive claims.
- Respect source rights metadata. Reference-only copyrighted material may be summarized in original wording but not copied at length.
- Every extracted rule must retain provenance.
- New extracted rules begin with `status: candidate` and `provenance.review_state: unreviewed`.
- When uncertain, record uncertainty rather than filling gaps.

## File conventions
- Candidate rules: `rules/candidates/<tradition>/RULE_ID.json`
- Approved rules: `rules/approved/<tradition>/RULE_ID.json`
- Conflicts: `conflicts/CONFLICT_ID.json`
- Technique registry: `techniques/technique_registry.csv`
- Source registry: `sources/registry/source_registry.csv`
- Tests/fixtures: `tests/`

## Practical domains
Primary domains are SELF, MONEY, LOVE, PURPOSE, SHADOW, TIME.
Secondary domains include CAREER, FAMILY, CREATIVITY, SPIRITUALITY, SEX_INTIMACY, SOCIAL, COMPATIBILITY, LOCATION, HEALTH_SYMBOLISM.

## Definition of done for an extraction batch
- Every rule validates against schema.
- Every rule names an existing source ID.
- Every rule has a usable source locator.
- Candidate rules are atomic.
- Conflicts are explicitly recorded.
- No invented citations.
- Rights restrictions are respected.
- A reviewer can reconstruct why the rule exists.
