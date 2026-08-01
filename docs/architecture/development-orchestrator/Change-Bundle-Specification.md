# Change Bundle Specification — VistaRoom Development Orchestrator

## Status

New in Revision 2 (2026-08-01), produced in response to Engineering Review finding **ORCH-REV-001** ("no defined technical bridge between the safe copy and a real Git working tree"). Standalone specification file, machine-checkable counterpart to main document §33A (Change Transfer Protocol) and `Change-Set-Manifest.md`'s "Change Bundle" section. Not an ADR, not a PCS/ACS. Draft — Proposed for Engineering Re-Review; not Approved, Accepted, or Final.

**Reviewed for Revision 3 (2026-08-01) baseline correction (`OWNER-CORRECTION-PC-2.4`).** This file contains no reference to any `docs/project/Project Context` version and no reference to Gap G2. **No content change was required.** The package's authoritative project-state baseline is now Project Context v2.4 (see `Source-Gap-Report.md` §G2 Resolution History); this specification's own gating condition (Gap G1 — no Git provenance for the safe copy) is unaffected and remains open.

**Reviewed for Revision 4 (2026-08-01) editorial correction cycle (`ORCH-REREV-001`–`003`).** §4's Import Pipeline already runs Baseline Reconciliation before worktree creation/branch/commit/push, and this specification's scope ends at "push the review branch" — before `ARCHITECTURE_APPROVAL`, `PRE_PROMOTION_OWNER_APPROVAL`, or promotion — so it does not itself depict the ordering ORCH-REREV-001 found defective elsewhere, and does not need reordering. **No content change was required.** For the record: a new mandatory `PRE_PROMOTION_IMMUTABILITY_CHECK` guard now runs after this specification's pipeline completes and after `PRE_PROMOTION_OWNER_APPROVAL` (main document §23A) — it re-verifies, among other fields, this bundle's `change_bundle_id` and manifest SHA-256 against what was actually approved, before `CONTROLLED_PROMOTION` is permitted to apply the worktree this pipeline produced.

## Purpose

Defines exactly what a **Change Bundle** must contain and how Claude Code must validate and apply one, so that no file ever moves from the safe working copy into the primary VistaRoom AI repository through any path other than this one. This is the artifact-level answer to the question Revision 1 left open: *how do files created by Claude Cowork actually reach a real Git working tree?*

---

## 1. Why a Change Bundle, not a direct copy

The safe working copy used for this package contains no `.git` directory (`Source-Gap-Report.md`, G1). Even where a safe copy does have Git history, Claude Cowork never has Git access (main document §10) and must never be the agent that writes into the primary repository. A Change Bundle is the only artifact that may cross that boundary, and only Claude Code may import one — and only into an isolated Git working tree it creates fresh, never into the primary working folder directly.

**Forbidden, always, regardless of bundle validity:**

- Copying the entire safe copy, or synchronizing folders wholesale.
- Transferring any file not explicitly listed in the bundle's manifest.
- Transferring a file whose actual content hash does not match its declared hash.
- Applying any part of a bundle directly into the primary working folder before review and approval.
- Applying a bundle whose Baseline Reconciliation Gate outcome (§4 below) is `CONFLICTING_DRIFT` or `UNKNOWN`.

## 2. Change Bundle Schema

```yaml
change_bundle:
  schema_version: "1.0"
  produced_by: "Claude Cowork"
  produced_at: "<ISO-8601 timestamp>"
  change_set_manifest_ref: "Change-Set-Manifest.md"   # (1) the human-readable manifest this bundle implements

  files:                                               # (2)+(3)+(4)+(5)+(6)+(7)
    - path: "docs/architecture/development-orchestrator/<file>.md"   # (3) relative path
      operation: "CREATE"        # (4) one of: CREATE | MODIFY | DELETE | MOVE
      sha256: "<hex-64>"         # (5) SHA-256 of file content
      size_bytes: 0              # (6) file size
      mime_type: "text/markdown" # (7) artifact type
      moved_from: null           # required only if operation == MOVE

  base_reference:                                      # (8)
    branch: "UNKNOWN"            # literal UNKNOWN if the safe copy has no Git provenance — never guessed
    commit_hash: "UNKNOWN"       # same rule

  document_hashes:                                     # (9) — one entry per source document Context-Manifest.md lists as used
    - source_path: "docs/ARCHITECTURE.md"
      expected_sha256: "UNAVAILABLE — not computed by Claude Cowork in this session; to be populated by Claude Code from the primary repository before promotion"
    # ... one row per source in Context-Manifest.md; never a fabricated hex string

  allowed_paths:                                       # (10)
    - "docs/architecture/development-orchestrator/**"

  forbidden_paths:                                      # (11)
    - "docs/project/**"
    - "docs/roadmap/**"
    - "docs/adr/**"
    - "src/**"
    - ".env*"

  self_check_results:                                   # (12) — producing agent's own pass/fail against main document §51 Acceptance Criteria
    all_declared_sections_present: true
    no_forbidden_path_touched: true
    no_secret_value_written: true    # self-report only — see secret_scan_marker below

  secret_scan_marker: "NOT_EXECUTED_BY_COWORK"          # (13) — binding: never treated as satisfying Claude Code's own scan requirement

  import_instructions_ref: "Change-Bundle-Specification.md#4-import-pipeline"  # (14)

  rollback_manifest:                                    # (15) — exact inverse of `files`, for undoing a partially-applied bundle
    - path: "docs/architecture/development-orchestrator/<file>.md"
      inverse_operation: "DELETE"   # inverse of CREATE is DELETE; inverse of MODIFY restores prior content hash; inverse of DELETE is CREATE; inverse of MOVE reverses the move
```

**Field-by-field notes:**

1. **`change_set_manifest_ref`** — the bundle is never self-sufficient; it always accompanies (and must agree with) `Change-Set-Manifest.md`.
2–7. **`files[]`** — every file the bundle touches, with an unambiguous operation type, a real SHA-256 (never omitted, never fabricated — if a hash genuinely cannot be computed, the bundle is not ready to transfer), size, and MIME/artifact type.
8. **`base_reference`** — for this package, both fields are literally `UNKNOWN`, because the safe copy has no `.git` (`Source-Gap-Report.md` G1). A bundle with an `UNKNOWN` base reference is expected to yield a Baseline Reconciliation Gate outcome of `UNKNOWN` (§4 below) unless Claude Code can establish the baseline through some other means before the gate runs.
9. **`document_hashes[]`** — one row per source in `Context-Manifest.md`. For this revision, every `expected_sha256` is the honest `UNAVAILABLE` string — no hash was actually computed by Claude Cowork in this authoring session (no hashing tool was available in the safe-copy workspace).
10–11. **`allowed_paths` / `forbidden_paths`** — the allow-list is the only surface the bundle may write to; the forbidden-list is an explicit, always-checked denial list, not merely the complement of the allow-list (defense in depth).
12. **`self_check_results`** — Claude Cowork's own pass/fail against main document §51's Acceptance Criteria. Informational only — never a substitute for Claude Code's independent validation.
13. **`secret_scan_marker`** — always literally `NOT_EXECUTED_BY_COWORK` for any bundle Claude Cowork produces, because Claude Cowork has no scanning tool and no Git access in the safe-copy workspace. Claude Code's own full, independent secret scan (main document §32, §37) is mandatory regardless of this marker's value and is never skipped on the basis of it.
14. **`import_instructions_ref`** — points back to §4 below (or the equivalent section of the main document, §33A), so the bundle is self-describing about how it must be processed.
15. **`rollback_manifest`** — the exact inverse of `files[]`, computed at bundle-generation time, so a partially-applied bundle can always be fully undone without guessing.

## 3. Producing a Change Bundle (Claude Cowork side)

1. Finalize the change set in the safe copy (`FINAL_REVISION` state, main document §23).
2. Enumerate every created/modified/deleted/moved file under the declared allowed paths.
3. Compute SHA-256, size, and MIME type for each file.
4. Copy `Context-Manifest.md`'s source list into `document_hashes[]`, with each `expected_sha256` set honestly (a real hash if one was actually computed during authoring, `UNAVAILABLE` otherwise — never invented).
5. Set `base_reference` from whatever the safe copy's actual recorded provenance is (`UNKNOWN` if none, as in this package).
6. Run the self-check against main document §51's Acceptance Criteria; record results.
7. Set `secret_scan_marker: NOT_EXECUTED_BY_COWORK`.
8. Compute the `rollback_manifest`.
9. Emit the bundle alongside `Change-Set-Manifest.md`.

## 4. Import Pipeline (Claude Code side)

```text
Receive Change Bundle
→ Validate manifest (schema_version supported; change_set_manifest_ref resolves; all required fields present)
→ Verify SHA-256 for every file in files[] against actual content
→ Validate every path in files[] against allowed_paths; reject if any path is absent from allowed_paths or present in forbidden_paths
→ Run independent secret scan across every file's actual content (ignores secret_scan_marker as anything but a note)
→ Run the Baseline Reconciliation Gate (main document §31C):
    BASELINE_MATCH           → proceed
    NON_CONFLICTING_DRIFT     → re-verify document_hashes against current HEAD, produce a reconciliation report, then proceed
    CONFLICTING_DRIFT         → STOP. Do not apply. Require a fresh safe copy + fresh Cowork revision + fresh Engineering Review.
    UNKNOWN                   → STOP. Do not apply. Escalate to OWNER_DECISION.
→ (only if MATCH/NON_CONFLICTING_DRIFT) Create a clean Git worktree / temporary clone from the real repository
→ Apply exactly the operations listed in files[] — nothing else
→ Verify the resulting worktree diff matches files[] exactly (no extra, no missing, no altered files)
→ Create the review branch inside the worktree
→ Commit and push the review branch
```

## 5. Conflict and Rollback Handling

| Condition | Handling |
|---|---|
| A file the bundle wants to `CREATE`/`MODIFY` already exists in the worktree in a conflicting state | Block; do not overwrite; escalate to `OWNER_DECISION` with the conflicting paths listed |
| A file's actual content hash does not match its declared `sha256` | Block the entire bundle — no partial application; escalate |
| A path appears in `files[]` but not in `allowed_paths` | Block; treat as a scope violation (main document §37) |
| A path appears in `forbidden_paths` (even if also technically writable) | Block; hard stop; no override short of a corrected, re-issued bundle |
| Independent secret scan finds a match | Block; escalate to `OWNER_DECISION`; bundle is not applied, even partially |
| Baseline Reconciliation Gate returns `CONFLICTING_DRIFT` or `UNKNOWN` | Block promotion entirely; require a new safe copy; never force-apply the existing bundle |
| Import is interrupted partway through `files[]` application | Use `rollback_manifest` to fully undo whatever was applied; tear down the temporary worktree entirely; nothing partial is ever left reachable from a pushable branch |
| A corrected bundle is re-submitted after a fixed error | Treated as a brand-new bundle-validation pass from the top of §4 — idempotent by design, not a resume-in-place |
| Any failure at any step above | **Zero change to the primary working folder or to `main`.** The primary repository is byte-for-byte unchanged from before the import attempt began. |

## 6. Relationship to Other Artifacts

- `Change-Set-Manifest.md` — the human-readable description this bundle implements; must agree with it exactly (`files[]` here == the file list there).
- `Context-Manifest.md` — the source of `document_hashes[]`'s source list.
- `Source-Gap-Report.md` — G1 explains why `base_reference` is `UNKNOWN` for this package's actual bundle; G1b explains that this specification is the *protocol*, not a *resolution*, of that gap.
- Main document §31C (Baseline Reconciliation Gate) and §33A (Change Transfer Protocol) — the narrative version of §4/§5 above; this file is their machine-checkable counterpart.
- `MVP-Implementation-Handoff.md` §2 — the `ChangeBundle`/`ChangeBundleFile`/`BaselineReconciliationReport` TypeScript interfaces implement this schema.

---

*Prepared by Claude Cowork, Document Author role. This specification describes an artifact and a pipeline — it does not itself execute any Git operation, and producing this document does not constitute generating a real Change Bundle for this package (no such bundle has been generated or transferred in this session).*
