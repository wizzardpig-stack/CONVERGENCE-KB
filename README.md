# CONVERGENCE-KB

The provenance-aware knowledge base for CONVERGENCE: a cross-system interpretation engine spanning Western astrology, Jyotisha, numerology, and Human Design.

## Core principle
The AI does not invent the doctrine. User-facing prose must be traceable:

`birth data -> deterministic calculation -> technique -> source-backed rule -> conflict policy -> synthesis -> prose`

## Repository map
- `sources/registry/source_registry.csv` — source catalog and rights metadata
- `schemas/` — machine-readable contracts
- `techniques/technique_registry.csv` — supported/researched techniques
- `rules/candidates/` — unapproved extracted rules
- `rules/approved/` — reviewed production rules
- `conflicts/` — disagreements between schools/methods
- `research-notes/` — extraction and taxonomy documentation
- `.opencode/agents/` — reusable OpenCode research/review agents
- `tests/` — integrity and schema checks

## Workflow
1. Register a source.
2. Research a technique.
3. Extract atomic candidate rules.
4. Validate schema and provenance.
5. Detect duplicates/conflicts.
6. Review.
7. Promote approved rules.
8. Consume only approved rules in the eventual product.

## OpenCode
OpenCode should load the root `AGENTS.md`. The repository also includes:
- `researcher` subagent — extracts candidate rules
- `doctrine-reviewer` subagent — audits provenance and overreach

## Current state
The repository is scaffolding the research engine. Example rules/conflicts are intentionally non-production placeholders.
