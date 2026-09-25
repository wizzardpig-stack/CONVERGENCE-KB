# Jyotisha Expansion 01 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build a source-separated Jyotisha expansion from verified Saravali and Phaladeepika texts, compare it with existing Brihat Jataka candidates, audit BPHS without extracting it, and publish a reviewed candidate-only branch.

**Architecture:** Keep every doctrine rule in `rules/candidates/jyotisha/` with a source-specific `JYOT-SARAVALI-*`, `JYOT-PHALADEEPIKA-*`, or existing `JYOT-BRIHATJATAKA-*` identity. Store only minimal quotes and source locators in the repository; keep copyrighted retrieval artifacts in an approved temporary workspace and delete them after review. Use the existing rule/conflict schemas and add only narrowly scoped source techniques.

**Tech Stack:** Existing JSON knowledge-base schema, CSV technique registry, Node validation (`npm.cmd run validate:kb`), source URLs/HTML text, and read-only doctrine-reviewer audits.

**Spec:** User request in the current conversation: `research/jyotisha-expansion-01`, Saravali and Phaladeepika extraction, Brihat Jataka comparison, BPHS audit-only, 80–120 target new rules, no approval/merge.

## Global Constraints

- Use only `JYOT-SARAVALI-001` and `JYOT-PHALADEEPIKA-001` for new doctrine rules.
- Use existing `JYOT-BRIHATJATAKA-001` rules for comparison only; never re-extract Brihat Jataka.
- Audit `JYOT-BPHS-001` without doctrinal extraction unless a rights-safe exact edition is verified.
- Do not silently substitute discovery/catalog records, internet summaries, or other Jyotisha sources.
- Preserve source-specific author/school boundaries: Kalyanavarma, Mantreswara, and Varahamihira remain distinct.
- Every new rule is `status: candidate` with `provenance.review_state: unreviewed`.
- No rule may claim scientific validity or independent corroboration within one source.
- Every new rule needs an exact source URL, chapter/verse locator where available, `source_terms`, and `transmission_notes`. A `short_quote` is required only when a minimal rights-safe excerpt is available and useful; a documented null is permitted for OCR-sensitive or reference-only translation layers to avoid storing copyrighted text.
- Do not store bulk copyrighted verse text or reconstructed copyrighted corpora in the repository.
- Do not assume a named ayanamsha, tropical/sidereal default, or later calculation convention.
- No rule approval and no merge into `main`.

## Review Focus

- Discovery URL mistaken for a verified, rights-safe edition: extraction must stop until the exact text and rights are documented.
- Saravali/Phaladeepika/Brihat Jataka source mixing: every normalized rule must remain attributable to one source.
- Grouped outcomes or independent planets/houses/yogas: split unless a cohesive lookup table or procedure.
- Incomplete dasha/varga/aspect/strength passages: mark non-executable and list missing dependencies.
- False corroboration/conflict: require genuinely comparable source propositions and preserve unresolved differences.

---

### Task 1: Verify source editions and rights

**Files:**
- Modify: `sources/registry/source_registry.csv` only if a verified edition or source URL is established.
- Create: temporary source-audit notes outside the repository; a concise rights/transmission summary may be committed, but never copyrighted text.

**Interfaces:**
- Produces a source gate decision for each of `JYOT-SARAVALI-001`, `JYOT-PHALADEEPIKA-001`, and `JYOT-BPHS-001`.
- Each decision records exact title, author/editor, translator, publisher/date, URL, rights status, locator quality, and extraction eligibility.

- [x] **Step 1: Read the registry, protocol, and rights metadata for all three Jyotisha sources.**
- [x] **Step 2: Follow only authorized project research methods to locate exact text for Saravali and Phaladeepika; distinguish catalog records from full text.**
- [x] **Step 3: Verify whether each available text supports chapter/verse locators and minimal quotation.**
- [x] **Step 4: Audit BPHS edition, translator/editor, publisher/date, rights, interpolation/transmission, and verse numbering without extracting BPHS doctrine.**
- [x] **Step 5: Record blocked sources and stop extraction for any source that fails the rights/edition gate.**
- [x] **Step 6: Run a short source-gate review before materializing rules.**

### Task 2: Extract Saravali candidates

**Files:**
- Create: `rules/candidates/jyotisha/JYOT-SARAVALI-*.json` only after Task 1 passes.
- Modify: `techniques/technique_registry.csv` with narrowly scoped `JYOT-SARAVALI-*` rows.

**Interfaces:**
- Consumes the verified Saravali edition and its exact locator map.
- Produces approximately 40–60 high-value atomic candidates covering graha/rashi/bhava/Lagna/dignity/drishti/strength/varga/navamsha/drekkana/yoga/vocation/wealth/relationships/children/timing where source-supported. Review-driven removal of placeholder or ambiguous passages may leave the final count slightly below the range; unresolved material is deferred rather than padded.

- [x] **Step 1: Inventory chapters and classify passages as foundational, atomic, grouped table/formula, context-only, ambiguous, or deferred.**
- [x] **Step 2: Add one candidate per independently testable proposition; keep true lookup tables and formulas cohesive.**
- [x] **Step 3: Record exact source metadata, minimal quote, source terms, transmission notes, domains, and explicit calculation dependencies.**
- [x] **Step 4: Mark incomplete source procedures non-executable rather than filling gaps from later Jyotisha.**
- [x] **Step 5: Run `npm.cmd run validate:kb` and review all Saravali files and techniques.**

### Task 3: Extract Phaladeepika candidates

**Files:**
- Create: `rules/candidates/jyotisha/JYOT-PHALADEEPIKA-*.json` only after Task 1 passes.
- Modify: `techniques/technique_registry.csv` with narrowly scoped `JYOT-PHALADEEPIKA-*` rows.

**Interfaces:**
- Consumes the verified Phaladeepika edition and its exact locator map.
- Produces 40–60 high-value atomic candidates covering the requested doctrine areas without importing Saravali or Brihat Jataka assumptions.

- [x] **Step 1: Inventory chapters and identify high-value passages with reliable verse/page locators.**
- [x] **Step 2: Extract source-specific classifications, relationships, vargas, yogas, and judgment procedures.**
- [x] **Step 3: Preserve Mantreswara attribution and translation uncertainty in every affected rule.**
- [x] **Step 4: Mark incomplete timing, strength, or varga procedures non-executable.**
- [x] **Step 5: Run `npm.cmd run validate:kb` and review all Phaladeepika files and techniques.**

### Task 4: Build the cross-source graph

**Files:**
- Modify: `rules/candidates/jyotisha/*.json` only for evidence-backed `corroborates`, `conflicts_with`, or source-specific relationship metadata.
- Create/modify: `conflicts/active/CONFLICT-*.json` only for real incompatible source propositions.

**Interfaces:**
- Consumes the new Saravali/Phaladeepika candidates and existing Brihat Jataka candidates.
- Produces explicit relationship classifications: independent corroboration, partial corroboration, terminology difference, calculation difference, doctrinal difference, scope difference, apparent conflict, or not comparable.

- [x] **Step 1: Compare sign lordship, exaltation/debilitation, friendship, benefic/malefic, bhava, drishti, strength, varga, navamsha, yoga, Lagna, career, wealth, and relationship propositions.**
- [x] **Step 2: Add `corroborates` only for genuinely independent source support; never use same-source repetition.**
- [x] **Step 3: Create conflicts only where incompatibility changes classification, calculation, interpretation, timing, terminology, or technique behavior.**
- [x] **Step 4: Record not-comparable and scope-difference cases in review notes rather than inventing graph edges.**
- [x] **Step 5: Run validation and inspect every new relationship/conflict reference.**

### Task 5: Audit BPHS and finalize source report

**Files:**
- Modify: `sources/registry/source_registry.csv` only if the audit establishes a better verified source record.
- Create: no BPHS candidate rules.

**Interfaces:**
- Produces a BPHS edition/rights/transmission audit and future extraction recommendation.

- [x] **Step 1: Record exact title/version, translator/editor, publisher/date, rights, chapter structure, verse numbering, and interpolation concerns.**
- [x] **Step 2: Identify future high-value BPHS domains without extracting doctrine.**
- [x] **Step 3: State whether the current source is suitable, reference-only, blocked, or requires a new source ID.**

### Task 6: Final doctrine review, validation, commit, and push

**Files:**
- Modify: any objective-error files identified by review.
- Create: no approved rules.

- [ ] **Step 1: Run `npm.cmd run validate:kb`.**
- [ ] **Step 2: Run read-only doctrine-reviewer against every new Saravali/Phaladeepika candidate, every new technique, every new conflict/corroboration edge, modified Brihat Jataka metadata, and BPHS audit conclusions.**
- [ ] **Step 3: Remediate objective errors only and rerun the reviewer.**
- [ ] **Step 4: Run `npm.cmd run validate:kb` and `git diff --check` again.**
- [ ] **Step 5: Confirm all new rules remain candidate/unreviewed and no copyrighted corpus is in the repository.**
- [ ] **Step 6: Commit with `Research Jyotisha expansion 01 Saravali Phaladeepika`.**
- [ ] **Step 7: Push `research/jyotisha-expansion-01` without merging.**
