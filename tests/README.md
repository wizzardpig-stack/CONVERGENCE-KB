# CONVERGENCE-KB validation

Two validators are available.

## Fast validator — no extra dependencies
On Windows:
```
npm.cmd run validate:kb
```

This checks:
- source/technique required fields and duplicate IDs,
- rule source/technique referential integrity,
- candidate vs approved path/status consistency,
- approved review state,
- approved locator presence,
- do_not_ingest source violations,
- conflict references,
- duplicate rule/conflict IDs,
- JSON parse errors.

## Strict JSON Schema validator
Install:
```
python -m pip install -r requirements-dev.txt
```

Then:
```
python tests/validate_kb.py
```

This performs JSON Schema validation in addition to repository integrity checks as it evolves.

Examples under `rules/examples` and `conflicts/examples` are scaffolding only and must never be consumed as production doctrine.

## Planned benchmark coverage
- timezone and DST resolution,
- tropical and sidereal planetary longitudes,
- explicit ayanamsha selection,
- houses and angles,
- aspects/orbs,
- vargas,
- dashas,
- numerology calculations,
- Human Design mechanics,
- full provenance chain from input to final claim.
