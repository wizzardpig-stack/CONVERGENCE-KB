# CONVERGENCE-KB tests

The knowledge base should eventually have automated validation for:

1. JSON Schema validation for every rule/conflict/technique.
2. Referential integrity: every rule source_id exists in the source registry.
3. Referential integrity: every technique_id exists in the technique registry.
4. No duplicate rule IDs.
5. No approved rule with review_state other than approved.
6. No conflict referencing missing rules once conflicts leave placeholder/example status.
7. Rights checks: sources marked do_not_ingest cannot have extracted text.
8. Locator checks: approved rules require at least one meaningful chapter/verse/page/section locator where the source supports one.
9. Domain/concept vocabulary validation.
10. Calculation-engine benchmark fixtures later: ephemeris, timezone, ayanamsha, houses, aspects, vargas, dashas, numerology, Human Design.

Examples under rules/examples and conflicts/examples are scaffolding only and must not be consumed as production doctrine.
