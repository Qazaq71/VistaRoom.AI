# Gate 2 C8 Implementation Package v1.0 — Step 7 Scope Decision

---

## 1. Title and Status

**Document:** Gate 2 C8 Implementation Package v1.0 — Step 7 Scope Decision
**Revision:** 5
**Status:** Accepted
**Accepted by:** Project Owner
**Accepted date:** 2026-07-13
**Supersedes:** Revision 4 (status: Revision Requested, not Accepted)
**Prepared by:** Claude (Chief Software Architect / Specification Partner)
**Date:** 2026-07-13

This document is a complete, standalone replacement for Revision 4. No section below assumes the reader has seen any earlier revision or message.

---

## 2. Decision Authority

* The Project Owner is the sole decision authority for this Scope Decision and for every subsequent authorization described in it.
* Claude Project (this session) acts as chief architect and specification partner. It prepares specifications and reviews evidence; it does not decide on the Owner's behalf.
* Claude Code is a separate implementation executor with repository access, acting only under explicit, separately granted authorizations.
* This document does not act on behalf of the Project Owner. It does not authorize repository modification, Claude Code execution, staging, commit, push, or Gate 2 closure. Preparation of this Proposal is the only action taken in producing this document.

---

## 3. Background and Historical Inventory Baseline

**Accepted architecture chain (verified, unchanged, not reopened by this document):**
ADR-010, ADR-011 (C8 Boundary / Representation), ADR-012 (C8 Evaluation Contract), ADR-013 (StructuredScene / Scene Graph Schema v0), ADR-014 (Perception Boundary) — all Status: Accepted, at their canonical paths under `docs/adr/` (e.g. `docs/adr/ADR-011-C8-Boundary-Representation.md`, `docs/adr/ADR-012-C8-Evaluation-Contract.md`, `docs/adr/ADR-013-StructuredScene-Scene-Graph-Schema-v0.md`, `docs/adr/ADR-014-Perception-Boundary.md`). Final Gate 2 Scope Decision — Accepted. Gate 2 C8 Implementation Package v1.0 — Accepted. Gate2-C8-Step6-Scope-Decision.md — Accepted; Step 6 implemented and technically accepted.

**Verified read-only historical inventory:**

* Branch: `main`
* HEAD: `b79c6646143f22207721fc66851a8857c1d83f3`
* `origin/main`: `b79c6646143f22207721fc66851a8857c1d83f3` (identical, up to date)
* `git status --short`: empty (clean working tree)
* `npx tsc --noEmit`: passed, zero errors
* `npx vitest run`: 9 test files passed, 140 tests passed, 0 failed
* The inventory made no repository changes; only read-only `git`, `tsc`, and `vitest` commands were run.

**This is historical evidence used to prepare this Proposal. It is not, and must not be treated as, the future Step 7 execution baseline.** By the time this Scope Decision is Accepted, saved, committed, and pushed (§9), and by the time Step 7 implementation is separately authorized, HEAD will legitimately differ from `b79c6646...` — at minimum by the Scope Decision's own commit. This divergence, by itself, is not a stop condition (see §14 and §18).

**Verified non-test source file inventory (13 files identified as carrying, or candidates for carrying, ADR references), at the historical HEAD above:**

Non-evaluator files (6): `structured-scene/types.ts`, `hybrid-validation/validate.ts`, `boundary-validator/validate.ts`, `boundary-validator/types.ts`, `evaluation-harness/types.ts`, `evaluation-harness/grounding.ts`.
Evaluator files (7): `evaluation-harness/evaluators/{q1-room-identity, q2-inventory, q3-spatial-relations, q6-natural-light, q7-lighting-affordances, q8-object-affordances, q9-explicit-conflicts}.ts`.

**Confirmed traceability gaps at the historical inventory HEAD:** `boundary-validator/validate.ts` and `evaluation-harness/grounding.ts` each carried **zero** ADR references at the time of inventory, despite each being the sole implementation of, respectively, the ADR-014 §4.7 boundary checks and the ADR-012 Grounding Requirement. This fact is carried forward into the scope determination in §7 and the completion requirement in §17.

This inventory is authoritative for **repository facts** observed at that historical HEAD. It is not authoritative for the **final scope decision** of which files Step 7 is permitted to touch — that determination is made independently in §7.

---

## 4. Formal Step 7 Definition

Step 7 already exists, formally, inside the Accepted Gate 2 C8 Implementation Package v1.0, §16, item 7:

> "Traceability comments + Closure Review readiness артефакт"

Step 7:

* is the final step of the current Gate 2 C8 Implementation Package;
* has not started;
* is not authorized for execution by this document;
* is a narrow, non-functional repository step;
* must prepare evidence for a later Final Gate 2 Closure Review;
* is not itself the Final Gate 2 Closure Review;
* does not close Gate 2;
* does not constitute Owner acceptance of Gate 2, of this Scope Decision's implementation, or of anything beyond what is explicitly authorized at each separate phase described in §23.

---

## 5. Purpose

To define the smallest safe implementation boundary for Step 7, covering:

1. Canonical ADR-to-code traceability (comment-level, non-functional).
2. A consolidated nodes/relations/attributes → Q1–Q11 traceability matrix.
3. Closure Review readiness evidence, consolidated from evidence that already exists across Steps 1, 2, 5, and 6.
4. Fresh regression re-verification, captured immediately before execution, not reused from stale historical numbers.
5. A narrow, pre-commit execution-record update to the Implementation Package's existing §20 Execution Trace section (see §22 for the exact boundary of what this record may and may not contain, given the self-referential commit/push problem resolved there).

Step 7 must not change runtime behavior, schemas, types, tests, fixtures, or product functionality of any kind.

---

## 6. Scope Rationale

The Implementation Package's own components list (§7) already names a "Traceability/Reporting Layer" responsible for "связывание артефактов с node/relation/attribute-определениями ADR-012/ADR-013 и формирование staged-отчёта." Steps 1, 2, 5, and 6 each independently reference ADR-011–014 in prose, and Step 6 already reports per-query supported/deferred/unsupported status. What is missing, and what Step 7 exists to produce, is:

* A single, explicit, centralized traceability matrix — not reconstructable today without manually cross-reading four ADRs and twelve source files.
* Formal, structured comment anchors at the specific implementation points that currently carry either no ADR reference (`boundary-validator/validate.ts`, `evaluation-harness/grounding.ts` — confirmed gaps, §3) or only informal prose reference not yet expressed as a structured, auditable tag.
* One consolidated readiness artefact referencing evidence required by §18 of `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md`, so that a future Final Gate 2 Closure Review does not need to re-derive it from scratch.

Step 7 is deliberately scoped as narrowly as possible: it adds no new architecture, no new capability, and no new evaluated claim — it only makes existing, already-accepted traceability explicit and auditable, and closes the two confirmed gaps identified in §3, to the extent they remain present at execution time (§15).

---

## 7. Exact Maximum Permitted Source Boundary

**Total maximum permitted source boundary: 12 files.**

**Resolution: Option A is adopted** — `boundary-validator/types.ts` remains outside the boundary. The canonical Boundary Validator TRACE block is placed in `boundary-validator/validate.ts` only; the violation-code taxonomy (`BOUNDARY_VIOLATION_CODES`, defined in `types.ts`) is referenced *from* that canonical block, not annotated independently at its own definition site.

**Rationale:** the violation-code enumeration is sufficiently self-describing for its source definition not to require a second, independent TRACE block — its complete normative mapping to specific ADR-014 §4.7 checks is provided in the readiness matrix, Block F (§12), which is the authoritative cross-reference, not the code names themselves. A second anchor at the type-definition site would restate the same ADR-014 §4.7 reference already carried by the canonical block in `validate.ts`, producing duplication rather than independent traceability value. This satisfies the requirement to choose the smallest set that provides complete, auditable, and understandable traceability without sacrificing completeness.

**The 12 permitted files, in full, with no wildcards:**

| #  | Exact path                                                                                   |
| -- | -------------------------------------------------------------------------------------------- |
| 1  | `src/lib/interior/structured-scene/types.ts`                                                 |
| 2  | `src/lib/interior/structured-scene/hybrid-validation/validate.ts`                            |
| 3  | `src/lib/interior/structured-scene/boundary-validator/validate.ts`                           |
| 4  | `src/lib/interior/structured-scene/evaluation-harness/types.ts`                              |
| 5  | `src/lib/interior/structured-scene/evaluation-harness/grounding.ts`                          |
| 6  | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q1-room-identity.ts`        |
| 7  | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q2-inventory.ts`            |
| 8  | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q3-spatial-relations.ts`    |
| 9  | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q6-natural-light.ts`        |
| 10 | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q7-lighting-affordances.ts` |
| 11 | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q8-object-affordances.ts`   |
| 12 | `src/lib/interior/structured-scene/evaluation-harness/evaluators/q9-explicit-conflicts.ts`   |

**This is a maximum permitted boundary, not an unconditional mandatory diff list.** No file is required to change solely because it appears here. Only files where a missing or non-canonical traceability link is actually demonstrated may be modified.

**However, this is qualified, not open-ended.** The actual source diff may be any justified subset of the 12-file maximum boundary — no individual file is mandatory solely because it is listed. **Successful completion of Step 7 requires that any of the two historical gaps identified in §3 that remain present at the immediate pre-execution baseline (§14) be closed.** If, at the immediate pre-execution inspection, `boundary-validator/validate.ts` and/or `evaluation-harness/grounding.ts` are found to still lack an ADR reference, the still-present gap(s) must be addressed within the accepted boundary as a condition of successful completion (§17). If either gap has already been closed by some other, separately authorized change prior to Step 7 execution, that file is not required to change again under this Scope Decision. This does not turn all 12 files into a mandatory diff. The Step 7 execution record (§22) must identify the files actually changed.

---

## 8. Exact Excluded Source Files/Categories

Outside the permitted boundary; must not be modified under any circumstance during Step 7:

* **`boundary-validator/types.ts`** — per the Option A resolution (§7).
* **All 4 test files:** `structured-scene/__tests__/structured-scene.contract.test.ts`, `hybrid-validation/__tests__/hybrid-validation.test.ts`, `boundary-validator/__tests__/boundary-validator.contract.test.ts`, `evaluation-harness/__tests__/evaluation-harness.contract.test.ts`. A read-only documentation search found no explicit rule requiring TRACE comments inside test files; this is stated as the finding of that search, not as a claim that every file in `docs/` was individually, manually reviewed.
* **All fixture files** (28 total) and their fixture barrels (4 `fixtures/index.ts` files).
* **All pure re-export barrel `index.ts` files:** `structured-scene/index.ts`, `hybrid-validation/index.ts`, `boundary-validator/index.ts`, `evaluation-harness/index.ts`, `evaluation-harness/evaluators/index.ts`.
* **`hybrid-validation/candidate-types.ts`** — already carries its one necessary ADR-014 reference; a second anchor would duplicate `validate.ts`.
* **`evaluation-harness/registry.ts`** and **`evaluation-harness/evaluate.ts`** — already sufficiently annotated / thin orchestration, no independent field-level logic requiring its own anchor.
* **`evaluation-harness/evaluators/shared.ts`** — generic helper with no query- or ADR-specific content of its own.
* **All of ADR-011, ADR-012, ADR-013, ADR-014** at their canonical paths under `docs/adr/`.
* Project Context (all versions), Living Strategic Roadmap, all PCS/ACS documents, `ADR_INDEX.md`, all production routes, API handlers, and UI files.

---

## 9. Pre-Execution Governance Prerequisite

**The Accepted Scope Decision is a governance prerequisite, not a Step 7 output.**

The repository copy of this Accepted Scope Decision:

* is saved at `docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md`;
* is saved only after a separate, explicit Owner authorization (§23, phase 4);
* is reviewed separately once saved (§23, phase 5);
* is staged, committed, and pushed only after separate, explicit authorizations for each of those three actions (§23, phases 6–8);
* **must already exist, committed, in `origin/main` before Step 7 implementation may begin;**
* **is not created, modified, or touched by Step 7 implementation itself** — it does not appear anywhere in the Step 7 implementation diff (see §10).

This file's existence and pushed state in `origin/main` is a precondition checked as part of the immediate pre-execution baseline procedure (§14), not a Step 7 deliverable.

**Required content of the saved repository copy:** the repository copy must contain an explicit recorded Owner Decision of **Accepted**, using the project's established governance format. A `Proposed` status, an unrecorded verbal approval, a recommendation of `Accepted` appearing inside the document text (such as the recommendation in §24 of this Proposal), or the mere presence of the file, is not sufficient evidence of acceptance. The distinction between this Proposal's own **recommended** option (§24) and an actual, recorded **Owner Decision** of Accepted is material and is checked explicitly at pre-execution time (§14).

---

## 10. Exact Step 7 Documentation Diff Boundary

**Maximum permitted documentation boundary:** exactly the following two paths and no others:

1. **`docs/engineering-decisions/reviews/Gate2-C8-Step7-Closure-Readiness.md`** — new file, the Closure Review readiness artefact.
2. **`docs/implementation/Gate2-C8-Implementation-Package-v1.0.md`** — existing file, modified only within its existing §20 Execution Trace / Owner Decisions section, subject to the verification rule in §22 and the pre-commit content boundary defined there.

**Successful completion of Step 7 requires both of these documents to exist / be updated (§17).** This is distinct from the maximum-boundary statement above: an in-progress diff that correctly halted at a stop condition (§18) before touching the second document is not, by that fact alone, a violation of this section — it is simply an incomplete execution requiring the Owner's attention. In an intermediate, not-yet-complete diff, only one of the two files may legitimately be present; a complete, successful Step 7 execution must show both.

**The Scope Decision file (`docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md`) must never appear in the Step 7 implementation diff.** It is a previously committed governance prerequisite (§9), not part of Step 7's own output. If it appears in `git diff --name-only` at any point during Step 7 implementation, this is a stop condition (§18).

**Total files potentially present in the unstaged Step 7 implementation diff:**

* an actual, justified subset of the 12 source files in §7, subject to the gap-closure qualification in §7;
* up to 2 documentation files (§10), with both required for successful completion.

No third documentation path, and no reference to "two or three documents," "as applicable," or any other open-ended count, applies anywhere in this document.

---

## 11. Traceability Comment Policy

* Changes are limited to **comment-only additions** and **narrowly scoped comment normalization** of existing prose into the canonical TRACE format (§12). No third category of change exists.
* **No executable token may change.** This explicitly includes: types, exports, constants, schemas, object values, arrays, function signatures, control flow, validation behavior, evaluator behavior, grounding behavior, runtime strings used by code, tests, and fixtures.
* **One small canonical TRACE block per actually modified source anchor file** — not one block per file merely because it is listed in the maximum boundary (§7). No permitted file is required to change solely because it appears there, subject to the gap-closure qualification of §7.
* Additional local comments are allowed only where the canonical block cannot clearly express the required relation, and must remain minimal — no comment noise.
* **Comment normalization rule:** existing comment text may be reformatted only when necessary to create a canonical TRACE block, provided that no architectural meaning, citation, qualification, rationale, or historical context already present is removed. Where normalization would remove useful context, the existing prose must remain unchanged, and the TRACE tag must be added separately alongside it, not in place of it.

**Canonical TRACE block format:**

```ts
// TRACE: ADR-013 §4.2 Node Category "Object" — supports ADR-012 Q2, Q7, Q8, Q9
```

```ts
// TRACE: implements ADR-012 Q6 (Natural-light blocking) via
// StructuredSceneV0 Blocking relation, blockingType === "light" (ADR-013 §4.3)
```

Rules for every comment:

* Must cite the specific ADR number and section.
* Must not restate, reinterpret, or alter the underlying architectural decision — it only points to where the decision lives.
* Must not introduce any traceability claim not independently verifiable by reading the cited ADR section.

---

## 12. Traceability Matrix Contract

The Closure Review readiness artefact must contain one centralized matrix — **nodes / relations / attributes → Q1–Q11** — organized into eight clearly separated blocks:

* **Block A — Node categories:** the four ADR-013 §4.2 node categories (Room, StructuralElement, Object, FreeSpaceRegion) and the queries each supports.
* **Block B — Relation categories:** the three ADR-013 §4.3 relation categories (Adjacency, Containment, parameterized Blocking) and the queries each supports.
* **Block C — Attributes consumed by Q1, Q2, Q3, Q6, Q7, Q8, Q9:** one row per field actually read by each evaluator, built exclusively from explicit field access observed in the current evaluator source code.
* **Block D — Deferred queries** (Q4, Q5, Q10, Q11): explicitly listed as deferred, referencing the existing deferral rationale.
* **Block E — Unsupported queries:** currently none (per the existing Step 6 record); this must be stated explicitly, not omitted.
* **Block F — Boundary Validator violation-code traceability:** each code in `BOUNDARY_VIOLATION_CODES` mapped to its corresponding ADR-014 §4.7 check. This block is the authoritative normative mapping referenced by the §7 rationale for excluding a second comment anchor in `boundary-validator/types.ts`.
* **Block G — ADR-012 Grounding Requirement traceability:** the `grounding.ts` implementation mapped to the Grounding Requirement it satisfies.
* **Block H — ADR-014 temporary Hybrid VLM + heuristic mechanism traceability:** the `hybrid-validation/validate.ts` mechanism mapped to its ADR-014 mechanism-class declaration and temporary/bounded/replaceable status.

**Each attribute-level row (Block C) may contain only:** query/evaluator identifier; exact `StructuredSceneV0` field or field path; node or relation category where applicable; the relevant ADR-013 representation reference; confidence/provenance dependency where explicitly present; grounding dependency where explicitly present; support status.

**The matrix must not infer:** new semantic meanings, intended future behavior, unstated capabilities, ergonomic meaning, design recommendations, or production perception behavior. It reports current, existing traceability only and must not redesign the evaluator contract.

---

## 13. Evidence Policy

Step 7 may create only:

* structured TRACE-comment evidence (§11);
* the nodes/relations/attributes → Q1–Q11 matrix (§12);
* Closure Review readiness consolidation, referencing evidence required by §18 of `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md` rather than re-deriving it;
* fresh TypeScript/Vitest regression evidence, captured immediately before execution (§14), not reused from the historical §3 baseline;
* repository and Git diff evidence (§16);
* the pre-commit execution-record evidence described in §22.

Step 7 must not create new capability evidence by modifying behavior, tests, schemas, or production integration. No evidence produced by Step 7 may be interpreted as evidence of a new or changed capability.

---

## 14. Immediate Pre-Execution Baseline Procedure

Before Step 7 implementation may begin, Claude Code must perform the following read-only checks and confirm every condition below:

```bash
test -f docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md
git log -1 --oneline -- docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md
git branch --show-current
git rev-parse HEAD
git rev-parse origin/main
git status --short
npx tsc --noEmit
npx vitest run
```

**Required confirmations:**

* branch is `main`;
* HEAD equals `origin/main`;
* working tree is clean;
* the Accepted Scope Decision file exists at its canonical path in current HEAD;
* `git log` shows the Scope Decision's commit present in current history;
* Claude Code has read the repository copy of the Scope Decision and confirmed that it records an explicit Owner Decision of **Accepted** (not merely a `Proposed` status, a recommendation, or an unrecorded approval — per §9), that its permitted boundary matches the execution request, and that no later governance record supersedes it;
* the verified source inventory (§3) remains materially valid;
* `npx tsc --noEmit` passes;
* `npx vitest run` passes with 0 failed;
* the actual test-file count and test count observed at this moment are recorded as the binding immediate pre-execution baseline;
* **the current state of the two historical gap files (`boundary-validator/validate.ts`, `evaluation-harness/grounding.ts`) is inspected and recorded**, so that §7/§15 can be applied correctly (i.e., so it is known whether either gap has already been closed by prior, separately authorized work).

**On push-state verification:** these checks confirm synchronization against the locally available `origin/main` remote-tracking reference at the time they are run, together with the fact that the preceding, separately authorized push phase (§23, phase 8) must already have independently reported a successful push and main/origin-main synchronization. No additional `git fetch` step is introduced or authorized by this Scope Decision.

**Correct handling of HEAD divergence from the historical §3 baseline:** by the time this procedure runs, HEAD will legitimately differ from the historical inventory HEAD `b79c6646...`. **This divergence, by itself, is not a stop condition.** A stop condition applies only under the specific conditions listed in §18.

**The historical 9 test files / 140 tests figure (§3) is not required to reappear.** The binding baseline is whatever `npx vitest run` actually reports at this immediate pre-execution moment.

---

## 15. Implementation Procedure

1. Execute the immediate pre-execution baseline procedure (§14) in full. Stop if any stop condition (§18) is triggered.
2. For each of the 12 files in the maximum permitted boundary (§7), independently determine whether a missing or non-canonical traceability link actually exists. **Any of the two historical gaps (`boundary-validator/validate.ts`, `evaluation-harness/grounding.ts`) that remain present at the immediate pre-execution baseline (§14) must be closed.** If a gap was already closed by prior, separately authorized work, that file need not change again.
3. Add or normalize exactly one canonical TRACE block per actually modified file (§11), plus minimal local notes only where necessary.
4. Draft the Closure Review readiness artefact at its fixed path (§10.1), populating the matrix (§12) exclusively from verified current source code and existing accepted governance documents.
5. Verify, per §22, that §20 of the Implementation Package is the correct Execution Trace / Owner Decisions section before touching it; if it cannot be unambiguously confirmed, stop.
6. Draft the narrow, pre-commit §20 execution-record update (§22) — containing only evidence available before the Step 7 implementation commit exists (see §22 for the exact, closed content list).
7. Run the post-modification verification commands (§16).
8. Stop and report if any stop condition (§18) is triggered at any point.
9. Present the complete unstaged diff and both documentation artefacts for architect review (§23, phase 12) — no staging occurs at this point.

---

## 16. Verification Commands and Expected Results

**Pre-execution (also see §14):**

```bash
test -f docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md
git log -1 --oneline -- docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md
git branch --show-current
git rev-parse HEAD
git rev-parse origin/main
git status --short
npx tsc --noEmit
npx vitest run
```

Expected: branch `main`; HEAD equals `origin/main`; Accepted Scope Decision exists in current HEAD with recorded status Accepted; its commit is present in current history; repository copy matches the execution request; working tree clean; TypeScript passes; Vitest passes with 0 failed; actual file/test counts recorded as the binding baseline; current state of the two historical gap files recorded.

**Post-modification:**

```bash
npx tsc --noEmit
npx vitest run
git diff --check
git diff --name-only
git diff
git diff --cached
git diff --cached --name-only
git status --short
```

Expected:

* `tsc --noEmit`: clean, identical outcome to the immediate pre-execution baseline (§14).
* `vitest run`: identical file count, identical test count, 0 failed — matching the immediate pre-execution baseline established in §14.
* `git diff --check`: clean.
* `git diff --name-only`: may contain only an actual modified subset of the 12 permitted source files (§7) plus, for a complete execution, both `docs/engineering-decisions/reviews/Gate2-C8-Step7-Closure-Readiness.md` and `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md`. **It must not contain `docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md`.**
* `git diff`: shows only comment additions/normalization in source files, plus the permitted documentation additions/updates; no executable-token changes anywhere.
* `git diff --cached` and `git diff --cached --name-only`: both empty — no staging occurs during Step 7 implementation or review.
* `git status --short`: shows only unstaged modifications/additions consistent with the above; nothing staged; no unrelated changes.

**Before staging authorization:** `git diff --cached` must be empty and `git diff --cached --name-only` must be empty. No staging is authorized during Step 7 implementation or review (§23).

---

## 17. Success Criteria

* All actual diffs remain inside the maximum permitted source boundary (§7) and the maximum documentation boundary (§10) — no file outside these appears in any diff, and the Scope Decision file never appears in the Step 7 implementation diff.
* No executable token changes anywhere.
* No test-file changes; no fixture changes; no barrel-file changes.
* No ADR changes (`docs/adr/ADR-011...014*.md` show empty diff).
* No Roadmap changes; no Project Context changes (any version); no `ADR_INDEX.md` changes; no PCS/ACS changes.
* No runtime, type, schema, or evaluator behavioral changes of any kind.
* **Any of the two historical traceability gaps still present at the immediate pre-execution baseline are closed:** `boundary-validator/validate.ts` and `evaluation-harness/grounding.ts` each carry a canonical TRACE block if they lacked one at that baseline.
* The traceability matrix (§12) is complete for the accepted representation/query scope, with all eight blocks (A–H) present and populated or explicitly marked not-applicable where appropriate.
* Boundary Validator traceability (Block F), Grounding Requirement traceability (Block G), and ADR-014 temporary mechanism traceability (Block H) are each explicit.
* **The Closure Review readiness artefact exists at its exact accepted path** and contains all required sections and status statements (§20).
* **The verified §20 Execution Trace / Owner Decisions section of the Implementation Package contains the pre-commit Step 7 execution record** as scoped in §22 — not commit or push evidence, which is explicitly out of scope for this record (§22).
* **Successful completion of Step 7 requires both documentation outputs** (readiness artefact and §20 execution record) to exist — an in-progress diff correctly halted at a stop condition before completing both is an incomplete execution, not a boundary violation.
* Post-modification TypeScript and Vitest results match the immediate pre-execution baseline captured in §14.
* `git diff --check` is clean.
* Staged diff (`git diff --cached`) is empty before any separate staging authorization.

---

## 18. Stop Conditions

Execution must stop immediately and return to the Project Owner if any of the following occurs:

* The Accepted Scope Decision file is missing from the repository at its canonical path.
* Its recorded status is not an explicit Owner Decision of Accepted.
* Its commit is not present in `origin/main`.
* A later governance document is found to supersede it.
* HEAD does not equal `origin/main`.
* The working tree is not clean at the start of execution.
* TypeScript or Vitest fails before any modification is made.
* §20 of the Implementation Package cannot be unambiguously confirmed as the existing Execution Trace / Owner Decisions section (see §22).
* An alternative readiness-artefact filename would be required due to an actual naming conflict discovered at execution time.
* The current source inventory no longer supports the accepted 12-file boundary.
* A required traceability statement cannot be added without changing executable code.
* A file outside the accepted boundaries (§7, §10) appears necessary.
* A test or fixture change appears necessary.
* A type, schema, contract, or runtime change appears necessary.
* An ADR modification appears necessary.
* The matrix (§12) reveals an apparent contradiction with ADR-011, ADR-012, ADR-013, or ADR-014.
* The readiness artefact would need to make an Owner-acceptance or Gate-closure decision on its own.
* The Scope Decision file appears in the Step 7 implementation diff.
* Any third documentation path, beyond the two specified in §10, appears necessary.
* An unrelated diff appears anywhere in the working tree.
* A required claim in the matrix or readiness artefact cannot be supported by primary-source code or documentation.
* The historical inventory (§3) is found to be materially invalidated by changes that occurred since it was taken.
* **The §20 execution record is found to require commit-hash or push evidence to be complete** — this is explicitly out of scope for the pre-commit record (§22); if this appears necessary, execution must stop rather than attempting a self-referential write.

**Note on non-stop-conditions:** a difference between the current HEAD and the historical inventory HEAD `b79c6646...`, by itself, is not a stop condition.

---

## 19. Explicit Out-of-Scope

Step 7 must not include, under any framing:

* Runtime behavior changes; new production capability.
* `StructuredSceneV0` schema changes; node or relation category changes; confidence/provenance semantic changes.
* Boundary Validator behavioral changes; Evaluation Harness behavioral changes; evaluator refactoring; grounding refactoring; query-registry changes.
* Tests or fixtures of any kind.
* Room Analyzer integration; image-to-StructuredScene production integration.
* Prompt Intelligence changes; Generation Intelligence changes.
* Existing Partial Edit / Clear / mask / inpainting changes of any kind.
* Editing/versioning foundation work.
* Project Mode Lite (architecture or implementation, in any form).
* Multi-view implementation; whole-property generation.
* Roadmap update; North Star formalization; Project Context update.
* Clerk, billing, or payments work of any kind.
* Any change to ADR-011 through ADR-014.
* The Final Gate 2 Closure Review itself.
* Any change to `ADR_INDEX.md`, ACS-002, or any other PCS/ACS document.

---

## 20. Readiness Artefact Status and Disclaimer

The Closure Review readiness artefact, at `docs/engineering-decisions/reviews/Gate2-C8-Step7-Closure-Readiness.md`, must carry:

**Status: Prepared for Closure Review**

And must explicitly state, verbatim or in substantively equivalent wording:

> "This artefact is not the Final Gate 2 Closure Review. It does not close Gate 2. It does not constitute Project Owner acceptance of Step 7, Gate 2 implementation, or Gate 2 closure."

Its internal structure (matrix, evidence required by §18 of the Implementation Package, regression evidence, disclaimers) is defined in §12–13 above and is not repeated here.

---

## 21. Product-Scope Boundary Clarification

The readiness artefact must additionally include, verbatim or in substantively equivalent wording:

> "Closure of Gate 2 C8 records architectural traceability for StructuredSceneV0, its validation boundaries, and the Evaluation Contract. It does not define the product scope of a future Project Mode Lite package and does not change, remove, or re-authorize the existing Partial Edit, Clear, mask, or inpainting capabilities."

This is a scope-boundary clarification only. It must not, and does not:

* authorize Project Mode Lite;
* define its implementation package;
* approve or remove editing capability of any kind;
* change the Roadmap;
* change Project Context;
* create a new ADR;
* create any new product decision.

---

## 22. Implementation Package §20 Execution-Trace Update

One narrow, additive documentation update is permitted to `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md`, limited strictly to its existing §20 Execution Trace / Owner Decisions section.

**Before modifying this file, Claude Code must verify** that §20 is currently the existing Execution Trace / Owner Decisions section used for the prior Step 3–6 records. If §20 is not that section, if numbering has changed, or if the expected section cannot be unambiguously identified, Claude Code must stop and return to the Project Owner — it must not select another section or renumber the document autonomously.

**Resolution of the self-referential commit/push evidence problem (Option A, adopted):** the `docs/implementation/Gate2-C8-Implementation-Package-v1.0.md` file is itself part of the Step 7 implementation diff and will itself be committed as part of the Step 7 implementation commit. It is therefore structurally impossible for this same file, within that same commit, to record the hash of its own commit or the evidence of its own subsequent push — recording either would require a further change to the file after the commit exists, which would not be reflected inside that commit, and attempting to close this loop would require an unbounded chain of follow-up commits. This Scope Decision explicitly resolves this by scoping the permitted §20 content to **pre-commit evidence only**.

**The Step 7 §20 update may record only evidence available before the Step 7 implementation commit exists:**

* Owner implementation authorization (the fact and date of the separate authorization under which Step 7 implementation proceeded — §23, phase 9);
* the immediate pre-execution repository state actually observed (§14);
* the immediate pre-execution TypeScript/Vitest baseline actually observed (§14);
* the actual modified subset of the §7 source boundary;
* the readiness artefact's path and status;
* the verification commands run and their actual results (pre- and post-modification, per §16);
* unstaged diff evidence (per §16);
* a status line reading, verbatim or in substantively equivalent wording: **"Implementation completed and verified. Awaiting commit and push authorization."**

**The Step 7 implementation commit hash and push evidence must not be recorded inside this same §20 update.** They are explicitly out of scope for this record. They must instead be recorded later, either:

* in the Final Gate 2 Closure Review (§23, phase 16–17); or
* in a separately scoped and separately authorized governance follow-up update to §20, if primary-source process requires it.

**This Scope Decision does not authorize any such follow-up update.** Any future follow-up recording the Step 7 commit/push evidence requires its own separate Owner Decision, its own separate scope, and its own separate authorization chain — it is not implied, pre-approved, or automatically triggered by this Scope Decision or by the Step 7 implementation it governs.

No unrelated section of the Implementation Package may be rewritten, reorganized, or otherwise touched.

---

## 23. Authorization Boundaries

The following phases are strictly separate. No phase implies or grants authorization for the next phase:

1. Revision 5 Proposal preparation (this document — completed by producing this text).
2. Project Owner review of this Proposal.
3. Project Owner acceptance, revision request, or rejection (§24).
4. Separate authorization to save the Accepted Scope Decision to `docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md`.
5. Review of the repository copy once saved.
6. Separate staging authorization for the Scope Decision file.
7. Separate commit authorization for the Scope Decision file.
8. Separate push authorization for the Scope Decision file.
9. Separate authorization for Claude Code to begin Step 7 implementation.
10. Read-only pre-execution checks (§14) confirming the Scope Decision is present, committed, Accepted, and pushed to `origin/main`.
11. Step 7 implementation (§15), producing a §20 record scoped as pre-commit evidence only (§22).
12. Review of the unstaged implementation diff (no staging has occurred at this point).
13. Separate staging authorization for the Step 7 implementation changes.
14. Separate Step 7 commit authorization.
15. Separate Step 7 push authorization.
16. Separate authorization to prepare the Final Gate 2 Closure Review — which, among other things, is where Step 7's own commit hash and push evidence are recorded (§22).
17. Project Owner review and decision on Gate 2 closure.

No phase in this list may be inferred from approval of a prior phase. Each requires its own explicit, separately recorded Owner Decision. No phase in this document authorizes any separate future governance follow-up to §20 beyond what is described in §22.

---

## 24. Owner Decision

**Recorded Owner Decision: Accepted**
**Accepted by:** Project Owner
**Accepted date:** 2026-07-13

The three options available for this decision, retained here for governance traceability, were:

* Accepted
* Revision Requested
* Rejected

The option actually selected by the Project Owner is **Accepted**, as recorded above. (For historical context only: this Revision 5 had carried an author's recommendation of Accepted, on the basis that it resolves the single blocking issue identified in the review of Revision 4 — the self-referential requirement to record a commit's own hash and push evidence inside a file that is part of that same commit — by adopting Option A: scoping the §20 Step 7 record to pre-commit evidence only, with commit/push evidence deferred to the Final Gate 2 Closure Review or a separately authorized follow-up, never implied or auto-triggered by this document (§22); and incorporating three minor corrections to §7/§15/§17, §10, and §22 regarding gap-closure conditionality, the documentation-boundary/completion distinction, and the separation of the modified source subset from the two documentation outputs. That recommendation has now been superseded by the recorded Owner Decision above.)

---

## 25. Exact Next Action After Owner Acceptance

This Revision 5 has been Accepted (§24). The separate, explicit Owner authorization to save this document to `docs/engineering-decisions/reviews/Gate2-C8-Step7-Scope-Decision.md` (§23, phase 4) has been granted, and this persistence has been carried out under that authorization only.

This persistence action does not itself authorize staging, commit, push, Step 7 implementation, or any later phase listed in §23. Each of those remains a separate, explicit Owner authorization not granted by this document.

---

**End of Revision 5, recorded as Accepted. This document has been saved to the repository under a separate, explicit Owner authorization limited to persistence (§23, phase 4). Step 7 implementation, staging, commit, push, and Gate 2 closure are not authorized by this document.**
