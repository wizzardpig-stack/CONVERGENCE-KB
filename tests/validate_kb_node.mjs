#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];

function readText(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/^\uFEFF/, "");
}

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (quoted) {
      if (c === '"' && n === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else {
      if (c === '"') quoted = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field.replace(/\r$/, "")); rows.push(row); }
  const header = rows.shift() || [];
  return rows.filter(r => r.some(v => v.trim() !== "")).map(r =>
    Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? "").trim()]))
  );
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(ent => {
    const p = path.join(dir, ent.name);
    return ent.isDirectory() ? walk(p) : [p];
  });
}

function rel(p) { return path.relative(ROOT, p).replaceAll("\\", "/"); }
function loadJson(p) {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); }
  catch (e) { errors.push(`${rel(p)}: invalid JSON: ${e.message}`); return null; }
}
function requireFields(obj, fields, file) {
  for (const f of fields) if (obj?.[f] === undefined || obj?.[f] === null || obj?.[f] === "") errors.push(`${file}: missing required field ${f}`);
}

const sourceRows = parseCsv(readText("sources/registry/source_registry.csv"));
const techniqueRows = parseCsv(readText("techniques/technique_registry.csv"));

const sourceMap = new Map();
for (const r of sourceRows) {
  requireFields(r, ["source_id","title","author","tradition","school","rights_status","priority"], "source_registry.csv");
  if (sourceMap.has(r.source_id)) errors.push(`source_registry.csv: duplicate source_id ${r.source_id}`);
  sourceMap.set(r.source_id, r);
  if (r.priority === "P0" && !r.source_url) warnings.push(`${r.source_id}: P0 source has no source_url yet`);
}
const techniqueMap = new Map();
for (const r of techniqueRows) {
  requireFields(r, ["technique_id","name","tradition","status","output_type"], "technique_registry.csv");
  if (techniqueMap.has(r.technique_id)) errors.push(`technique_registry.csv: duplicate technique_id ${r.technique_id}`);
  techniqueMap.set(r.technique_id, r);
}

const ruleFiles = walk(path.join(ROOT, "rules")).filter(p => p.endsWith(".json"));
const ruleMap = new Map();
for (const p of ruleFiles) {
  const r = loadJson(p); if (!r) continue;
  const f = rel(p);
  requireFields(r, ["rule_id","status","tradition","school","source_id","source_locator","claim_type","technique_id","condition","normalized_rule","domains","concepts","evidence_level","empirical_status","textual_certainty","provenance"], f);
  if (ruleMap.has(r.rule_id)) errors.push(`${f}: duplicate rule_id ${r.rule_id}`);
  ruleMap.set(r.rule_id, r);
  if (!sourceMap.has(r.source_id)) errors.push(`${f}: unknown source_id ${r.source_id}`);
  if (!techniqueMap.has(r.technique_id)) errors.push(`${f}: unknown technique_id ${r.technique_id}`);
  const source = sourceMap.get(r.source_id);
  if (source?.rights_status === "do_not_ingest") errors.push(`${f}: source ${r.source_id} is marked do_not_ingest`);
  const loc = r.source_locator || {};
  const meaningful = ["book","chapter","verse","page","section"].some(k => loc[k]);
  if (f.includes("/approved/") && !meaningful) errors.push(`${f}: approved rule lacks a specific book/chapter/verse/page/section locator`);
  if (f.includes("/candidates/")) {
    if (r.status !== "candidate") errors.push(`${f}: file under rules/candidates must have status=candidate`);
    if (r.provenance?.review_state === "approved") errors.push(`${f}: candidate file cannot have approved review_state`);
  }
  if (f.includes("/approved/")) {
    if (r.status !== "approved") errors.push(`${f}: file under rules/approved must have status=approved`);
    if (r.provenance?.review_state !== "approved") errors.push(`${f}: approved rule must have review_state=approved`);
  }
}

const conflictFiles = walk(path.join(ROOT, "conflicts")).filter(p => p.endsWith(".json"));
const conflictIds = new Set();
for (const p of conflictFiles) {
  const c = loadJson(p); if (!c) continue;
  const f = rel(p);
  requireFields(c, ["conflict_id","rule_ids","conflict_type","description","materiality","resolution_policy","status"], f);
  if (conflictIds.has(c.conflict_id)) errors.push(`${f}: duplicate conflict_id ${c.conflict_id}`);
  conflictIds.add(c.conflict_id);
  if (!f.includes("/examples/")) {
    for (const id of c.rule_ids || []) if (!ruleMap.has(id)) errors.push(`${f}: references missing rule_id ${id}`);
  }
}

if (errors.length) {
  console.error("CONVERGENCE-KB validation FAILED");
  for (const e of errors) console.error("-", e);
  if (warnings.length) {
    console.error("\nWarnings:");
    for (const w of warnings) console.error("-", w);
  }
  process.exit(1);
}

console.log("CONVERGENCE-KB validation PASSED");
console.log(`${sourceMap.size} registered sources; ${techniqueMap.size} registered techniques; ${ruleMap.size} JSON rules; ${conflictIds.size} conflicts`);
if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.log("-", w);
}
