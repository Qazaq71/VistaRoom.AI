# Change Set Manifest — VistaRoom Development Orchestrator (Architecture Workflow Package)

## Status

```text
Revision: 4
Version: 0.4.0
Status: Draft — Proposed; Ready for Engineering Re-Review
```

Prepared by Claude Cowork for Claude Code's `REPOSITORY_VALIDATION` / `BASELINE_RECONCILIATION` steps (see main architecture document, §23 canonical State Registry). Not yet validated, not yet committed, not yet pushed. This manifest, together with `Change-Bundle-Specification.md`, is what the Change Bundle actually transferred to Claude Code must conform to (main document §33A).

**Revision 4 correction (2026-08-01) — ORCH-REREV-003, editorial metadata consistency.** Prior to this correction, this manifest's leading metadata block read "Draft, Revision 2," even though this file's own body already carried Revision 3 baseline-correction content (`OWNER-CORRECTION-PC-2.4`) and this is now, in fact, Revision 4. The leading metadata now states Revision 4 unambiguously and matches the body throughout. See `Revision-Report-Revision-3-to-4.md` for the full account, and the `Revision History` immediately below for the complete lineage.

**Revision 3 (2026-08-01) — baseline correction (`OWNER-CORRECTION-PC-2.4`).** Project Context v2.4 is now recorded as the final, approved, canonical, authoritative Project Context baseline (v2.3 superseded/historical), per direct Project Owner instruction — see `Source-Gap-Report.md` §G2 Resolution History. This closed G2; **G1 remains open and unaffected**. The Risk Level block below was recomputed accordingly at that time and is unchanged by Revision 4 (§ below).

## Revision History (new, Revision 4)

```yaml
revision_history:
  - revision: 1
    version: 0.1.0
    purpose: "Initial architecture package"
  - revision: 2
    version: 0.2.0
    purpose: "Engineering Review corrections ORCH-REV-001-008"
  - revision: 3
    version: 0.3.0
    purpose: "OWNER-CORRECTION-PC-2.4 baseline correction"
  - revision: 4
    version: 0.4.0
    purpose: "Editorial workflow-order and metadata consistency corrections"
```

## Purpose

This Change Set Manifest describes **Revision 4** of the VistaRoom Development Orchestrator architecture package.

Revision 4 includes, cumulatively:

- the original Revision 1 architecture package;
- Revision 2 Engineering Review corrections (`ORCH-REV-001`–`008`);
- Revision 3 Project Context v2.4 baseline correction (`OWNER-CORRECTION-PC-2.4`);
- Revision 4 workflow-order, artifact metadata, manifest metadata, and pre-promotion immutability corrections (`ORCH-REREV-001`–`003`).

This manifest describes exactly what this Architecture Workflow revision created/changed inside the safe working copy, so Claude Code can validate the change set, run checks, run the Baseline Reconciliation Gate, create the review branch, and push — without having to independently rediscover scope.

---

## Base Reference

```text
Base branch: N/A — cannot be determined. No .git directory exists anywhere in
    the safe working copy (confirmed: `git status` → "fatal: not a git
    repository"). See Source-Gap-Report.md, Gap G1. This remains UNRESOLVED
    in Revision 2 — it is not this package's job to resolve it (see
    Finding-Disposition-Report.md, ORCH-REV-004: disposition
    OWNER_DECISION_REQUIRED / structural, not something Cowork can close from
    inside the safe copy).
Base commit hash: N/A — UNAVAILABLE. Must be supplied by Claude Code from the
    primary VistaRoom AI repository's actual current HEAD before this change
    set can be meaningfully diffed against "main". Claude Cowork did not
    invent a value, in Revision 1 or in this Revision 2.
Safe copy location: C:\Users\user\Documents\Cowork\VistaRoom-AI-Safe-2026-08-01
Primary repository location: NOT accessed by Claude Cowork (out of access
    boundary per task instructions). To be resolved by Claude Code.
```

**Required Claude Code action before proceeding past this manifest:** run `git rev-parse HEAD` and `git branch --show-current` in the primary VistaRoom AI repository, confirm whether the documents this package is based on (in particular `docs/project/Project Context v2.4.md` — now the authoritative baseline, `OWNER-CORRECTION-PC-2.4` — and, for historical comparison only, `v2.3.md`; also `docs/adr/ADR_INDEX.md` through ADR-015) match that HEAD, and record the real base branch/commit here (or in an addendum) before creating the review branch. This is now formally the **Baseline Reconciliation Gate** (main document §31C) — its four possible outcomes (`BASELINE_MATCH` / `NON_CONFLICTING_DRIFT` / `CONFLICTING_DRIFT` / `UNKNOWN`) and the required handling for each are specified there and in `Change-Bundle-Specification.md`. Given the base reference above is `UNKNOWN`, a real reconciliation run against this actual change set would very likely return `UNKNOWN` unless Claude Code has an independent way to establish a baseline before the gate runs.

---

## Change Bundle (Revision 2, new — ORCH-REV-001)

This Change Set Manifest is the human-readable description of the change set; the machine-checkable transfer artifact Claude Code actually imports is the **Change Bundle**, whose full field schema is defined in the standalone `Change-Bundle-Specification.md` (this directory) and summarized in main document §33A. The Change Bundle must include, at minimum: this manifest; the full file list below with per-file SHA-256, size, MIME type, and operation type; the base reference and document-level source hashes (§ below); the allowed/forbidden path declarations; self-check results; the secret-scan marker `NOT_EXECUTED_BY_COWORK`; import instructions; and a rollback manifest. **Uncontrolled copying of the safe copy (whole-folder sync, blind file transfer, or any transfer of a file not listed below) is forbidden** — see main document §33A for the full prohibition list and the exact transfer pipeline.

## Created Files (Revision 1 — all still present, none pre-existing)

| Path (relative to safe copy root) | Purpose |
|---|---|
| `docs/architecture/development-orchestrator/README.md` | Folder index, matching repo convention (Назначение / Что здесь хранится / Что запрещено хранить здесь / Связанные разделы). Revision 3: Revision/Version/Status updated, G2-resolved wording. Revision 4: Revision/Version updated to 4/0.4.0, links to the two new Revision 4 artifacts added, historical vs. current artifacts clearly separated |
| `docs/architecture/development-orchestrator/VistaRoom-Development-Orchestrator-Architecture.md` | Main architecture document — Architecture Workflow fully specified, Development/Testing/Release Workflows specified as contracts only. Revision 2: sections added/expanded for ORCH-REV-001–008 (§16A, §31A–C, §33A, §47A, revised §23/§45/§46/§50/§51/§52). Revision 3: §1/§2/§3/§8/§47A/§49/§51/§52 updated for `OWNER-CORRECTION-PC-2.4`. Revision 4: §1 metadata, §19 Architecture Workflow Sequence diagram, §23 State Registry (normativity statement + transition updates), new §23A Pre-Promotion Immutability Check, §24 Artifact Model, §29 diagram, §33, §51, §52, and footer updated for `ORCH-REREV-001`–`003` |
| `docs/architecture/development-orchestrator/Context-Manifest.md` | Required Context Manifest artifact — sources used, trust levels, freshness, exclusions. Revision 2: adds `source_use_mode` and `document_sha256` fields per source (ORCH-REV-008/004). Revision 3: new Project Context Authority section, v2.4 `source_use_mode` upgraded to `DIRECT_FULL`, real computed SHA-256 for v2.3/v2.4. Revision 4: reviewed — no workflow-order, Artifact Model, or manifest-metadata content present; **no changes required** |
| `docs/architecture/development-orchestrator/Source-Gap-Report.md` | Required Source Gap Report — the no-git gap (G1, still open), Project Context version conflict (G2), Roadmap version resolution (G3), and other gaps. Revision 3: **G2 resolved** (`OWNER-CORRECTION-PC-2.4`) — new G2 Resolution History; G1 unaffected, still open. Revision 4: reviewed — G1 still open, G2 still resolved and unaffected by an editorial cycle; **no changes required** |
| `docs/architecture/development-orchestrator/Change-Set-Manifest.md` | This file. Revision 2: adds Change Bundle summary, decomposed risk block, updated promotion restrictions. Revision 3: `architecture_governance_risk` recomputed high→medium (G2 resolved); `effective_risk` held at high (G1/promotion still high). Revision 4: leading metadata corrected from stale "Revision 2" to Revision 4 (`ORCH-REREV-003`), `Revision History` YAML added, Purpose rewritten to describe Revision 4 as cumulative, file counts recomputed, Promotion Restrictions updated for the immutability guard |
| `docs/architecture/development-orchestrator/ADR-Proposal-List.md` | Required ADR Proposal List — 10 candidate ADRs, none created/accepted. Revision 2: recategorized into Category A (3 items, block MVP) / B (6 items, provisional) / C (1 item, deferred) per ORCH-REV-005. Revision 3: reviewed, no v2.3/v2.4/G2-dependent content found — no changes required. Revision 4: reviewed, promotion-sequence text already matches canonical order — no changes required, confirming note added |
| `docs/architecture/development-orchestrator/MVP-Implementation-Handoff.md` | Required handoff package for a future Claude Code implementer. Revision 2: adds Execution Connector / Change Bundle / Baseline Reconciliation contracts, corrects ADR-blocked-items table to Category A only. Revision 3: reviewed, confirmed baseline-agnostic — status note added confirming v2.4 baseline and that G2 was never an MVP blocker in this file. Revision 4: reviewed, Forbidden Operations sequence already matches canonical order — no changes required, confirming note added |
| `docs/architecture/development-orchestrator/External-Review-Context-Package.md` | Required compact package for ChatGPT/external reviewers. Revision 2: corrects provenance claims (ORCH-REV-008), reflects all other Revision 2 changes. Revision 3: states v2.4 as authoritative, removes G2 from Known Open Items, adds `OWNER-CORRECTION-PC-2.4` to change summary. Revision 4: adds a "Revision 4 editorial correction" block (§0A) describing `ORCH-REREV-001`–`003` for the re-reviewer |

## Created Files (Revision 2, new)

| Path (relative to safe copy root) | Purpose |
|---|---|
| `docs/architecture/development-orchestrator/Change-Bundle-Specification.md` | Standalone Change Bundle schema and transfer-protocol specification (ORCH-REV-001) — the machine-checkable counterpart to §33A of the main document. Revision 3: reviewed, no v2.3/v2.4/G2-dependent content found — no changes required. Revision 4: reviewed, import pipeline order already matches canonical order — no changes required, confirming note added |
| `docs/architecture/development-orchestrator/Revision-Report.md` | Required Revision 1 → Revision 2 account: findings disposition, sections changed, residual risks, self-check results, re-review readiness. **Kept intact/historical — not edited in Revision 3 or Revision 4.** |
| `docs/architecture/development-orchestrator/Finding-Disposition-Report.md` | Per-finding disposition record for ORCH-REV-001–008 (disposition, rationale, exact files/sections, evidence of closure, residual risk, owner decision, re-review focus). **Kept intact/historical — not edited in Revision 3 or Revision 4; scoped to ORCH-REV-001–008 only.** |

## Created Files (Revision 3, new)

| Path (relative to safe copy root) | Purpose |
|---|---|
| `docs/architecture/development-orchestrator/Revision-Report-Revision-2-to-3.md` | Standalone Revision 2 → Revision 3 account for the `OWNER-CORRECTION-PC-2.4` baseline correction — kept separate from the historical Revision 1 → 2 `Revision-Report.md` per governing instructions. **Kept intact/historical — not edited in Revision 4.** |

## Created Files (Revision 4, new)

| Path (relative to safe copy root) | Purpose |
|---|---|
| `docs/architecture/development-orchestrator/Revision-Report-Revision-3-to-4.md` | New, standalone Revision 3 → Revision 4 account for this editorial correction cycle (`ORCH-REREV-001`–`003`) — kept separate from the historical Revision 1→2 and Revision 2→3 reports per governing instructions |
| `docs/architecture/development-orchestrator/Finding-Disposition-Report-Revision-3-to-4.md` | New, standalone per-finding disposition record for `ORCH-REREV-001`–`003` — kept separate from the historical `Finding-Disposition-Report.md` (scoped to `ORCH-REV-001`–`008`), per governing instructions |

**File counts (recomputed for real, Revision 4 — not carried forward from Revision 3):**

```yaml
file_counts:
  total_files: 14              # 8 (Revision 1) + 3 (Revision 2, new) + 1 (Revision 3, new) + 2 (Revision 4, new)
  created_files_cumulative: 14 # same set — nothing has ever been deleted or moved
  created_this_revision: 2     # Revision-Report-Revision-3-to-4.md, Finding-Disposition-Report-Revision-3-to-4.md
  modified_this_revision: 7    # main document, Change-Set-Manifest.md (this file), README.md,
                                # External-Review-Context-Package.md (substantive edits), plus
                                # ADR-Proposal-List.md, MVP-Implementation-Handoff.md,
                                # Change-Bundle-Specification.md (reviewed, confirming note only —
                                # no substantive content required changing)
  unchanged_this_revision: 2   # Context-Manifest.md, Source-Gap-Report.md — reviewed, no change needed
  deleted_files: 0
  moved_files: 0
  historical_reports: 3        # Revision-Report.md, Finding-Disposition-Report.md,
                                # Revision-Report-Revision-2-to-3.md — all preserved unedited
  current_reports: 2           # Revision-Report-Revision-3-to-4.md, Finding-Disposition-Report-Revision-3-to-4.md
```

**Total: 14 files under one directory (`docs/architecture/development-orchestrator/`) — 8 from Revision 1, 3 new in Revision 2 (11 total after Revision 2), 1 new in Revision 3 (12 total after Revision 3), plus 2 new in Revision 4 (14 total after Revision 4). Files substantively edited in Revision 4: 4 (main document, this Change-Set-Manifest, README, External-Review-Context-Package). Files reviewed with only a minimal confirming note added (no substantive content required changing): 3 (ADR-Proposal-List, MVP-Implementation-Handoff, Change-Bundle-Specification). Files reviewed and requiring no change at all: 2 (Context-Manifest, Source-Gap-Report). Historical reports intentionally left byte-for-byte untouched: 3 (Revision-Report.md, Finding-Disposition-Report.md, Revision-Report-Revision-2-to-3.md). New current reports created: 2. All Markdown, zero code files.**

## Modified Files

**None outside `docs/architecture/development-orchestrator/`.** Per task instructions §2/§21 (Revision 1) and the fixes-prompt's identical constraint (Revision 2), this package does not modify `docs/project/*`, `docs/roadmap/*`, any existing ADR file (`docs/adr/ADR-0*.md`, `ADR_INDEX.md`, `ADR_MAP.md`, `ADR-Backlog-Consolidated.md`), or any VistaRoom AI source code (`src/**`). This was verified by construction in both revisions: every `Write`/`Edit` operation in this session targeted only paths under the new `docs/architecture/development-orchestrator/` directory.

## Deleted Files

**None.**

## Moved / Renamed Files

**None.**

---

## Purpose of the Change Set (summary)

Delivers Revision 2 of the Architecture Workflow documentation package for a new internal tool, the VistaRoom Development Orchestrator, responding to an independent Engineering Review verdict of `CHANGES_REQUIRED` (findings ORCH-REV-001–008). Documentation only — no application code, no configuration change to the VistaRoom AI product, no dependency added to `package.json`, no change to `.env.example`, `.gitignore`, or `.clineignore`.

## Proposed Review Branch

```text
architecture/development-orchestrator
```

(Matches the exact example given in the governing task specification, §9; unchanged in Revision 2.)

## Risk Level (Revision 2 — decomposed per ORCH-REV-007; replaces Revision 1's single "Low" rating; recomputed in Revision 3 for the G2 baseline correction; reviewed in Revision 4 — unaffected by `ORCH-REREV-001`–`003`, no recomputation required)

**Revision 1's problem.** A single scalar rating of **Low** was assigned to the entire change set. That rating is accurate for *technical* risk (documentation-only, no code, no build/deploy surface) but silently absorbed materially higher *governance*, *baseline*, and *promotion* risk that this package's own Source Gap Report already documented (G1: no Git provenance at all; G2: Project Context authority — at the time — an open owner decision). Revision 2 replaced the single rating with a decomposed block. Revision 3 recomputes it honestly for the `OWNER-CORRECTION-PC-2.4` baseline correction:

```yaml
risk:
  technical_change_risk: low            # documentation-only, one directory, no code, no dependency/build/deploy surface touched — UNCHANGED
  architecture_governance_risk: medium  # DOWN from Revision 2's "high": G2 (Project Context v2.3 vs v2.4
                                         # authority) is RESOLVED by direct Project Owner instruction,
                                         # OWNER-CORRECTION-PC-2.4 — see Source-Gap-Report.md §G2
                                         # Resolution History. Held at medium, not low, because (a) G1
                                         # (no .git) means this workspace cannot independently verify
                                         # this safe copy's Project Context v2.4.md matches the primary
                                         # repository's current copy, and (b) v2.4's own internal text
                                         # still self-describes several nested sub-decisions as pending
                                         # (Context-Manifest.md, Project Context Authority section) —
                                         # neither reopens G2, both are honest residual governance risk
  security_risk: low                    # no secret material present anywhere in this package; independent Claude Code scan is still mandatory and unwaived — UNCHANGED
  baseline_risk: high                   # G1 — the safe copy has no .git, no recorded base commit, no way to verify freshness from inside this workspace — UNCHANGED, not affected by the G2 baseline correction
  promotion_risk: high                  # the Change Transfer Protocol (§33A) and Baseline Reconciliation Gate (§31C) remain newly specified and have not yet been exercised against a real Change Bundle — UNCHANGED
  effective_risk: high                  # = maximum of the above — UNCHANGED from Revision 2; still pinned to high by baseline_risk and promotion_risk (both G1-driven), regardless of the G2 resolution
```

**Rule:** `effective_risk = maximum applicable component risk` (main document §47A). It must be recomputed — not carried forward unchanged — after: the Baseline Reconciliation Gate runs (§31C), any G2-equivalent owner decision (G2 itself is now closed — see above), the ChatGPT Engineering Review, Claude Project's review, Claude Code's independent secret scan, and any conflict resolution.

**Gates that key off `effective_risk`** (main document §47A): Context Intelligence Layer mode selection (`effective_risk: high` forces assurance mode, §15); the Escalation Manager's significance threshold (§27); the level of supporting evidence `PRE_PROMOTION_OWNER_APPROVAL` requires (a high-`effective_risk` change set must present the full risk breakdown and any reconciliation report, not just a pass/fail summary); and the rigor required of a `NON_CONFLICTING_DRIFT` reconciliation report under the Baseline Reconciliation Gate.

**This package's own honest self-rating, right now (Revision 3):** `effective_risk: high` — still driven by `baseline_risk` (G1 remains genuinely unresolved) and, now, `promotion_risk` (still unexercised for real); `architecture_governance_risk` moved from `high` to `medium` because G2 is genuinely resolved, but that alone was never enough to lower `effective_risk`, since `baseline_risk`/`promotion_risk` independently pin it to `high`. This is a genuine recomputation, not a default lowering: only the component whose documented driver actually closed was changed, and by exactly one honest step (high → medium, not high → low). `baseline_risk` and `promotion_risk` cannot be lowered by further Cowork-side documentation work alone — they require real Claude Code / Git access outside this workspace's boundary (Source-Gap-Report.md).

## Required Checks (Claude Code, before pushing)

1. **Manifest and Change Bundle validation** *(new, Revision 2, ORCH-REV-001)* — validate the Change Bundle's manifest against this file and `Change-Bundle-Specification.md`; verify every declared file's SHA-256; validate every file's path against the allowed-path declaration; confirm zero forbidden-path entries.
2. **Secret scan** — full-content scan of all files in the bundle (not just filename/gitignore pattern matching) for API-key-shaped strings, tokens, credentials. *Status from Claude Cowork's own manual check: no secret values were written anywhere in this package, in either revision; `.env.example` variable content beyond names was never read. Independent Claude Code scan still required per §32/§37 defense-in-depth policy — the bundle's `NOT_EXECUTED_BY_COWORK` marker is explicitly not a substitute for this (§33A).*
3. **Baseline Reconciliation Gate** *(new, Revision 2, ORCH-REV-004)* — run the four-outcome gate (§31C) before creating any Git worktree or applying any bundle operation; `CONFLICTING_DRIFT`/`UNKNOWN` block promotion and require a fresh safe copy, not a forced apply.
4. **Scope check** — confirm `git diff --stat` (once a base commit is established) shows changes only under `docs/architecture/development-orchestrator/**`, nothing else.
5. **No modification to protected paths** — explicitly confirm zero diff on `docs/project/**`, `docs/roadmap/**`, `docs/adr/**` (including `ADR_INDEX.md`, `ADR_MAP.md`, `ADR-Backlog-Consolidated.md`), and `src/**`.
6. **Internal link check** — verify cross-references between all files in this directory (main document → Context-Manifest.md/Source-Gap-Report.md/etc., plus the three new Revision 2 artifacts) resolve to real relative paths.
7. **Markdown structural check** — confirm the main architecture document contains every section it declares in its own structure, including the Revision 2 additions (§16A, §31A–C, §33A, §47A) — mechanically greppable by heading text. (Revision 2 note: do not check against a hard-coded section *count* — check for the presence of named headings instead, consistent with ORCH-REV-006's "no hard-coded counts" rule applied generally.)
8. **Formal documentation checks** — whatever the primary repository's actual CI/lint configuration requires; **could not be determined from the safe copy** (no `.github/`, no markdownlint config found — see Source-Gap-Report.md, G5). Claude Code should check the primary repository directly for the real requirement rather than assuming none exists.
9. **Worktree isolation check** *(new, Revision 2, ORCH-REV-001)* — confirm the bundle was (or will be) applied only inside a clean Git worktree/temporary clone, never directly inside the primary working folder.
10. **Pre-Promotion Immutability Check** *(new, Revision 4, ORCH-REREV-001)* — immediately before `CONTROLLED_PROMOTION`, confirm the `candidate_identity` (review branch, review commit SHA, Change Bundle ID, Change Bundle manifest SHA-256, architecture revision, Claude Project verdict, owner approval reference) exactly matches what Claude Project and the Project Owner actually approved (main document §23A); on any mismatch, block promotion and return to `REPOSITORY_VALIDATION`, `ARCHITECTURE_APPROVAL`, or `OWNER_DECISION` per the mismatch's cause — never proceed, never auto-update the approval.

## Secret Scan Status

**Not run** (Claude Cowork has no scanning tool and no Git access in this workspace, in either revision). Manual self-review performed instead: grepped own output mentally against `.env.example`'s variable *names* while drafting — confirmed no value, real or placeholder-as-if-real, was written into any file in this directory, across both Revision 1 and Revision 2 content. **This is not a substitute for Claude Code's required automated scan (Required Checks, item 2 above).** The Change Bundle's `secretScanMarker` field is `NOT_EXECUTED_BY_COWORK`.

## Promotion Restrictions (Revision 2 — updated for the disambiguated owner gates, ORCH-REV-002; Revision 4 — adds the Pre-Promotion Immutability Check guard, ORCH-REREV-001)

- No push to `main` under any circumstance from this change set directly — only to the named review branch, and only after a clean Change Bundle import into a dedicated worktree (§33A).
- No merge without, in order: Change Bundle validation → Baseline Reconciliation Gate outcome of `BASELINE_MATCH`/`NON_CONFLICTING_DRIFT` → Claude Code validation (this manifest's checks) → Claude Project `APPROVED` verdict → **`PRE_PROMOTION_OWNER_APPROVAL`** (main document §23 — this is the blocking gate; it is granted *before* `CONTROLLED_PROMOTION`, never assumed from a later `POST_PROMOTION_VERIFICATION`) → **`PRE_PROMOTION_IMMUTABILITY_CHECK`** (main document §23A, new Revision 4 — a mandatory guard, not a new state, confirming the exact review commit/bundle/revision approved is the exact one about to be merged; a mismatch blocks `CONTROLLED_PROMOTION` and returns the workflow to `REPOSITORY_VALIDATION`, `ARCHITECTURE_APPROVAL`, or `OWNER_DECISION`, never to a silently-updated approval).
- `POST_PROMOTION_VERIFICATION` (after `MAIN_WORKSPACE_UPDATE`) confirms the result of an already-completed merge — it is not a second opportunity to authorize or block the merge, and no component may treat it as such.
- No content in this change set may be treated as an accepted ADR, an accepted Project Context revision, or an accepted Roadmap change — it proposes (ADR Proposal List, now Category A/B/C) and documents (architecture package) only.
- If Claude Code's Baseline Reconciliation Gate (above) returns `CONFLICTING_DRIFT` or `UNKNOWN`, this change set **must not** be force-merged as-is — a new safe copy must be generated, context re-selected, and the revision/review cycle re-run (§31C).
- If Claude Code's Pre-Promotion Immutability Check (above) finds a mismatch, this change set **must not** be force-merged, the stored approval must not be silently updated, and no bundle may be swapped in under the old approval — any post-approval change requires a brand-new candidate identity, a new technical validation pass, a new Claude Project review, and a new `PRE_PROMOTION_OWNER_APPROVAL` (§23A).

---

*Prepared by Claude Cowork, Document Author role. This manifest itself is part of the change set it describes. Revision 4, Draft — Proposed for Engineering Re-Review; not Approved, Accepted, or Final. Baseline correction `OWNER-CORRECTION-PC-2.4` applied (Revision 3) — Project Context v2.4 authoritative, v2.3 superseded; G2 resolved, G1 remains open. Editorial correction cycle `ORCH-REREV-001`–`003` applied (Revision 4) — workflow order synced to the canonical State Registry, Pre-Promotion Immutability Check guard added, Artifact Model and this manifest's own metadata corrected to Revision 4.*
