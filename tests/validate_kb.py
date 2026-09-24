#!/usr/bin/env python3
import csv, json, sys
from pathlib import Path

try:
    import jsonschema
except ImportError:
    print("Missing dependency: jsonschema. Run: pip install -r requirements-dev.txt")
    sys.exit(2)

ROOT = Path(__file__).resolve().parents[1]

def load_json(path):
    with path.open(encoding="utf-8") as f:
        return json.load(f)

def load_sources():
    p = ROOT / "sources/registry/source_registry.csv"
    with p.open(encoding="utf-8-sig", newline="") as f:
        return {r["source_id"] for r in csv.DictReader(f) if r.get("source_id")}

def load_techniques():
    p = ROOT / "techniques/technique_registry.csv"
    with p.open(encoding="utf-8-sig", newline="") as f:
        return {r["technique_id"] for r in csv.DictReader(f) if r.get("technique_id")}

def validate_group(folder, schema_path, kind, sources=None, techniques=None):
    schema = load_json(schema_path)
    errors = []
    seen = set()
    for p in folder.rglob("*.json"):
        data = load_json(p)
        try:
            jsonschema.validate(data, schema)
        except jsonschema.ValidationError as e:
            errors.append(f"{p.relative_to(ROOT)}: schema: {e.message}")
            continue
        obj_id = data.get("rule_id") or data.get("conflict_id") or data.get("technique_id")
        if obj_id in seen:
            errors.append(f"{p.relative_to(ROOT)}: duplicate id {obj_id}")
        seen.add(obj_id)
        if kind == "rule":
            if data["source_id"] not in sources:
                errors.append(f"{p.relative_to(ROOT)}: unknown source_id {data['source_id']}")
            if data["technique_id"] not in techniques:
                errors.append(f"{p.relative_to(ROOT)}: unknown technique_id {data['technique_id']}")
            if data["status"] == "approved" and data["provenance"]["review_state"] != "approved":
                errors.append(f"{p.relative_to(ROOT)}: approved rule lacks approved review_state")
    return errors

def main():
    sources = load_sources()
    techniques = load_techniques()
    errors = []
    errors += validate_group(ROOT/"rules", ROOT/"schemas/rule.schema.json", "rule", sources, techniques)
    errors += validate_group(ROOT/"conflicts", ROOT/"schemas/conflict.schema.json", "conflict")
    if errors:
        print("CONVERGENCE-KB validation FAILED")
        for e in errors:
            print("-", e)
        return 1
    print("CONVERGENCE-KB validation PASSED")
    print(f"{len(sources)} registered sources; {len(techniques)} registered techniques")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
