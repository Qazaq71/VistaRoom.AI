# External Review Context Package — VistaRoom Development Orchestrator

## Status

Prepared for ChatGPT (Prompt and Task Architect / Engineering Reviewer role) and, if triggered, Grok (External Adversarial Reviewer role). This package is **deliberately compact** — it is not a repository dump. Neither ChatGPT nor Grok has, or should be assumed to have, access to anything beyond what is included or summarized here (main architecture document §10 Access Model). Revision 2 (2026-08-01) — this is the package for the **re-review** round, following an independent Engineering Review verdict of `CHANGES_REQUIRED` against Revision 1, findings `ORCH-REV-001`–`ORCH-REV-008`. See `Revision-Report.md` and `Finding-Disposition-Report.md` for the full account of what changed.

**Revision 3 (2026-08-01) — baseline correction, `OWNER-CORRECTION-PC-2.4`, unrelated to ORCH-REV-001–008.** The Project Owner has directly confirmed **Project Context v2.4 is final, approved, and canonical**; **Project Context v2.3 is superseded and historical**. This closed G2 (see §5 below). This is *not* a new Engineering Review round and does not reopen findings ORCH-REV-001–008 — it is a narrower, separate correction. See `Revision-Report-Revision-2-to-3.md`.

**Revision 4 (2026-08-01) — editorial correction cycle, following Engineering Re-Review verdict `CHANGES_REQUIRED` against Revision 3.** Three new, narrow findings (`ORCH-REREV-001`–`003`) are addressed — see §0A immediately below. This is the package for the **second re-review** round. See `Revision-Report-Revision-3-to-4.md` and `Finding-Disposition-Report-Revision-3-to-4.md`.

## What This Package Is

The Architecture Workflow's Engineering Review step (main document §19, §26) hands external reviewers: the candidate document, a short task framing, the Context Manifest, key constraints, relevant excerpts, open questions, assumptions, decisions already made, and — critically — an explicit list of what they do *not* have access to. This file is that package, updated for **Revision 2 re-review**.

---

## 0. What Changed Since the Last Review Round (read this first)

Revision 1 received verdict `CHANGES_REQUIRED` with eight findings, all addressed in Revision 2:

| Finding | One-line fix |
|---|---|
| ORCH-REV-001 | Added a concrete Change Transfer Protocol (main document §33A) — Change Bundle schema (manifest, per-file SHA-256, allowed/forbidden paths, secret-scan marker, rollback manifest), a defined validation/import pipeline, and conflict/rollback handling. New standalone `Change-Bundle-Specification.md`. |
| ORCH-REV-002 | Split the previously ambiguous `OWNER_APPROVAL` into `PRE_PROMOTION_OWNER_APPROVAL` (blocking, before merge) and `POST_PROMOTION_VERIFICATION` (confirms result only, after merge) — main document §23 canonical State Registry. |
| ORCH-REV-003 | Split `ProviderAdapter` (model invocation only) from `ExecutionConnector`/`AgentEndpoint` (real execution environment) — main document §16A/§17. Every currently recognized endpoint is honestly declared `HUMAN_MEDIATED`, not `AUTOMATABLE`, absent a tested programmatic interface. |
| ORCH-REV-004 | Added a four-outcome Baseline Reconciliation Gate (`BASELINE_MATCH` / `NON_CONFLICTING_DRIFT` / `CONFLICTING_DRIFT` / `UNKNOWN`) before any Change Bundle is applied — main document §31C. Document-level source hashes added to `Context-Manifest.md`, honestly marked `UNAVAILABLE` where not actually computed. |
| ORCH-REV-005 | ADR proposals recategorized into Category A (3 items, genuinely block MVP, justified) / B (6 items, provisional contracts, do not block the first spike) / C (1 item, deferred) — `ADR-Proposal-List.md`. |
| ORCH-REV-006 | One canonical Architecture Workflow State Registry (main document §23) is now the sole source of truth for state count; all "all N states" hard-coded prose removed. |
| ORCH-REV-007 | Replaced the single "Low" risk rating with a decomposed block (`technical_change_risk`, `architecture_governance_risk`, `security_risk`, `baseline_risk`, `promotion_risk`, `effective_risk = max(...)`) — `Change-Set-Manifest.md` §Risk Level, main document §47A. |
| ORCH-REV-008 | Introduced `source_use_mode` taxonomy; corrected ADR-000's provenance from an implied "read in depth" to the honest `INDIRECT_SUMMARY + METADATA_ONLY` (it was never opened directly — see `Context-Manifest.md` Tier 1B). |

**Reviewers should treat all eight as addressed and verify the fix, not re-raise the original problem statement as if unaddressed** — a reviewer disagreeing with *how* a fix was implemented is a valid new finding; simply re-stating the original problem is not.

**Separately, Revision 3 (`OWNER-CORRECTION-PC-2.4`) — not an Engineering Review finding, a direct Project Owner baseline correction:** Project Context v2.4 is now the confirmed final/approved/canonical/authoritative Project Context baseline; Project Context v2.3 is superseded/historical. This closes G2 (previously an open owner decision, OQ-1). **This is not part of the ORCH-REV-001–008 disposition and reviewers should not treat it as reopening any of those eight findings** — it only affects statements this package makes about "current VistaRoom AI project state" (§3, §5, §7 below) and the risk model's `architecture_governance_risk` component (§4 of `Change-Set-Manifest.md`, main document §47A).

## 0A. Revision 4 Editorial Correction (read this second — new since the last review round)

Revision 3 received Engineering Re-Review verdict `CHANGES_REQUIRED` with three new, narrow findings, all addressed in Revision 4:

| Finding | One-line fix |
|---|---|
| ORCH-REREV-001 | The canonical Architecture Workflow State Registry (main document §23) and several Mermaid diagrams (notably the §19 Architecture Workflow Sequence diagram) disagreed on workflow order — specifically, Change Bundle Generation and Baseline Reconciliation appeared *after* `PRE_PROMOTION_OWNER_APPROVAL` in the sequence diagram, which is wrong. Every diagram in the package now matches the State Registry's order exactly; an explicit normativity statement was added (§23: the State Registry is the sole normative source, diagrams are explanatory projections, a conflicting diagram is defective and must be fixed); and a new mandatory `PRE_PROMOTION_IMMUTABILITY_CHECK` guard (§23A) was added between `PRE_PROMOTION_OWNER_APPROVAL` and `APPROVED_FOR_PROMOTION`. |
| ORCH-REREV-002 | The Artifact Model (main document §24) still described the Candidate Architecture Document as "Revision 2." It now states Revision 4 explicitly, and separates historical revision/disposition artifacts (`Revision-Report.md`, `Finding-Disposition-Report.md`, `Revision-Report-Revision-2-to-3.md` — all preserved unedited) from current ones (`Revision-Report-Revision-3-to-4.md`, `Finding-Disposition-Report-Revision-3-to-4.md`, both new). |
| ORCH-REREV-003 | `Change-Set-Manifest.md`'s leading metadata still read "Draft, Revision 2" even though its body already carried Revision 3 content. Its leading metadata now reads Revision 4 unambiguously, with a `revision_history` YAML block covering Revisions 1–4, a rewritten cumulative Purpose statement, and freshly recomputed file counts. |

**What did not change in Revision 4 (verify this, not just the fixes above):**

- Architecture boundaries and every component/section not touched by the three findings above are unchanged from Revision 3.
- The canonical Architecture Workflow State Registry (§23) itself was **not reordered** — it was already correct; only the diagrams that had drifted from it were fixed.
- All Mermaid diagrams in the package are now synchronized with the State Registry's order.
- The `PRE_PROMOTION_IMMUTABILITY_CHECK` is implemented as a **mandatory transition guard**, not a new State Registry entry — the canonical state count is unaffected.
- The Artifact Model (§24) is updated; the Change Set Manifest's metadata is updated.
- Project Context v2.4 baseline (`OWNER-CORRECTION-PC-2.4`) is **unchanged** — still final/approved/canonical/authoritative; v2.3 still superseded/historical.
- **G1 remains open** (no `.git` in the safe copy; branch `UNKNOWN`, base commit `UNAVAILABLE`) — unaffected by this editorial cycle.
- **G2 remains closed** (resolved in Revision 3, `OWNER-CORRECTION-PC-2.4`) — unaffected by this editorial cycle.

**Reviewers should verify closure of these three findings specifically** — not re-litigate ORCH-REV-001–008 (Revision 2, closed) or the Project Context v2.4 baseline decision (Revision 3, closed and out of scope for this cycle).

## 1. Task Framing (short)

Produce and validate a complete architecture package (documentation only, no code) for a new internal tool, the **VistaRoom Development Orchestrator**, which will eventually automate the full AI-team engineering lifecycle (architecture → audit → revision → dev → review → test → release → controlled promotion). **This stage covers only the Architecture Workflow.** The package must: (a) work within VistaRoom AI's real, asymmetric multi-agent access model (Claude Cowork/Code/Project, ChatGPT, Grok — each with genuinely different access, and, as of Revision 2, an honestly-declared execution-connector automatability level), (b) treat token economy as a binding architectural requirement via a dedicated Context Intelligence Layer, (c) specify a shared core that Development/Testing/Release Workflows can plug into later without rewrite, and (d) never weaken the Safe Copy → Change Bundle → Baseline Reconciliation → Review Branch → Claude Project Review → `PRE_PROMOTION_OWNER_APPROVAL` → Controlled Merge → `POST_PROMOTION_VERIFICATION` promotion path (Revision 2 naming, main document §33/§33A).

## 2. Document Under Review

`VistaRoom-Development-Orchestrator-Architecture.md` (Revision 4, Version 0.4.0, Status "Draft — Proposed; Ready for Engineering Re-Review" — **not** Approved/Accepted/Final). **Not attached in full here** — provide the actual document alongside this package when initiating review; this file describes what accompanies it, not a substitute for it. Also provide, if the reviewer's context budget allows: `Revision-Report.md` / `Finding-Disposition-Report.md` (the historical Revision 1 → 2 change record, kept intact), `Revision-Report-Revision-2-to-3.md` (the historical Revision 2 → 3 baseline-correction record, `OWNER-CORRECTION-PC-2.4`), `Revision-Report-Revision-3-to-4.md` / `Finding-Disposition-Report-Revision-3-to-4.md` (the current Revision 3 → 4 editorial-correction record, `ORCH-REREV-001`–`003`), and `Change-Bundle-Specification.md` (standalone).

## 3. Context Manifest (condensed — full version, including the Revision 2 Source Use Mode Summary table, in `Context-Manifest.md`)

Primary sources actually opened and read directly (`source_use_mode: DIRECT_FULL` or `DIRECT_PARTIAL`, per `Context-Manifest.md`): `docs/ARCHITECTURE.md` (full), `docs/adr/ADR_INDEX.md` (registry tables), `docs/adr/ADR_MAP.md` (map + placeholders), `docs/governance/{ADR-Authoring-Convention,ADR-Numbering-Policy,Architecture-Engineering-Responsibility-Model}.md` (full), `docs/architecture/audits/Architecture-Freeze-Resolution.md` (full), `docs/architecture/milestones/Architecture-Freeze-Completed.md` (full), `docs/templates/*` (full), `package.json`/`tsconfig.json`/`README.md` (full).

**Correction from Revision 1 (ORCH-REV-008):** `docs/adr/ADR-000-Architecture-Principles.md` was **not** read directly — Revision 1's framing implied it was ("read in depth"). It is `source_use_mode: INDIRECT_SUMMARY + METADATA_ONLY`: its Principle list is known only via `ARCHITECTURE.md`'s own narrative summary of it, and its status/version only via the `ADR_INDEX.md` registry row. None of ADR-000's own 1112 lines were opened. See `Context-Manifest.md` Tier 1B for the full honesty record, including what this does and does not establish.

Authoritative project-state baseline used: **Project Context v2.4** — confirmed final, approved, canonical, and authoritative by direct Project Owner instruction (`OWNER-CORRECTION-PC-2.4`, Revision 3). **Project Context v2.3 is superseded and historical** — it was treated as authoritative through Revision 2 (because it carried an unambiguous `Status: Accepted` while v2.4 self-described as an unauthorized draft), but that treatment is superseded as of Revision 3; **this is no longer an open owner decision (G2/OQ-1 are closed) — see §5 below.** Authoritative roadmap: **Living Strategic Roadmap v1.4** (Accepted, 2026-07-13) — unambiguous, no owner decision needed.

Deliberately not deep-read (minimal-sufficient-context discipline; `source_use_mode: METADATA_ONLY` for most; see full Context Manifest for the complete list): individual PCS-001…010/ACS-001…010 content, individual ADR-001…015 files (registry metadata only), the 72-file `docs/engineering-decisions/reviews/` evaluation chain, `docs/reviews/source-review-mode-operation-2026-07-09.md`, Developer Studio sub-tool content (currently placeholder READMEs only).

**Document-level source hashes:** none were actually computed in this authoring session (no hashing tool available to Claude Cowork). Every source's `document_sha256` field in `Context-Manifest.md` reads `UNAVAILABLE — not computed by Claude Cowork; to be populated by Claude Code before promotion` — this is a real, load-bearing gap for the Baseline Reconciliation Gate (§4 below), not an oversight.

## 4. Key Architectural Constraints (binding — do not propose violating these without flagging it as an explicit, owner-escalating finding)

1. Claude Cowork never has Git access; Claude Code is the *only* bridge to Git; Claude Project never sees uncommitted content; ChatGPT/Grok never see the full repository.
2. No direct file copy from safe copy to primary repository is ever allowed — only the full Change Bundle → Baseline Reconciliation → review-branch → Claude Project review → `PRE_PROMOTION_OWNER_APPROVAL` → controlled merge chain (Revision 2, main document §33A).
3. No push to `main` except via Controlled Promotion after a granted `PRE_PROMOTION_OWNER_APPROVAL` — a state distinct from, and never satisfied by, `POST_PROMOTION_VERIFICATION` (Revision 2, ORCH-REV-002).
4. Maximum 3 autonomous Cowork revision cycles per review round; exceeding it is a mandatory escalation, not a soft warning.
5. No orchestrator component may become a required runtime dependency of the VistaRoom AI product.
6. No real secret value may appear in any artifact this workflow produces. A Change Bundle's `secretScanMarker: NOT_EXECUTED_BY_COWORK` is never treated as a substitute for Claude Code's own independent scan (Revision 2, §33A).
7. The Orchestrator core must remain workflow-agnostic; Development/Testing/Release Workflow support must be addable without rewriting it.
8. **(New, Revision 2)** No Change Bundle may be applied outside a clean Git worktree/temporary clone, and never before the Baseline Reconciliation Gate returns `BASELINE_MATCH` or `NON_CONFLICTING_DRIFT` (§31C). A `CONFLICTING_DRIFT`/`UNKNOWN` outcome always requires a fresh safe copy — never a forced apply.
9. **(New, Revision 2)** No Execution Connector may be treated as `AUTOMATABLE` without a tested, confirmed programmatic interface; today, all five recognized endpoints are honestly `HUMAN_MEDIATED` (§16A).

## 5. Known Open Items (do not silently assume these are resolved)

- **G1 (structural, affects this whole package's Git-related claims, still open in Revision 3 — unaffected by the baseline correction below).** The safe copy used to author this package has no `.git` directory. Branch and base commit hash are UNKNOWN/UNAVAILABLE. Do not assume any Git-based freshness claim in the document is verified — it isn't, and the document says so. A real Baseline Reconciliation Gate run (§31C) against this package's actual change set would very likely return `UNKNOWN` as a direct consequence.
- **G2 — RESOLVED (Revision 3, `OWNER-CORRECTION-PC-2.4`).** VistaRoom AI's `docs/project/` historically contained four Project Context versions with an internal contradiction: v2.3 was formally Accepted; v2.4 was textually newer, claimed supreme authority, but was self-described as an unauthorized, unpersisted draft. The Project Owner has since directly instructed Claude Cowork that **Project Context v2.4 is final, approved, and canonical**, and **v2.3 is superseded and historical**. Reviewers should treat this as closed, not as an item requiring further owner input — a reviewer who disagrees with the resolution itself (not with how it was propagated through this package) should raise that as an explicit new finding, since it is a direct Owner instruction the reviewer is being asked to build on, not a Cowork judgment call.
- **Open Questions OQ-2 through OQ-6** are listed in main document §49 — reviewers should treat these as known gaps, not omissions to flag as new findings (though a reviewer disagreeing with how one was framed is a valid finding). **OQ-1 is resolved** (see G2 above) and is retained in the numbering only for traceability.

## 6. Assumptions Made (see main document / Source Gap Report §G7 for full list)

- A1: "the primary repository" in the governing task brief means VistaRoom AI's real local Git repository, not this safe copy.
- A2: the safe copy's documentation *structure and conventions* are representative even though its exact Git freshness is unknown; this assumption is NOT extended to freshness-sensitive content (ADR numbering, Project Context authority).
- A3: Claude Code, as referenced throughout, has real local filesystem + Git access, consistent with the governing task brief. **(Revision 2 note: this is a claim about access, not about a confirmed unattended programmatic interface — the corresponding `claude-code-local-git` Execution Connector is honestly declared `HUMAN_MEDIATED`, §16A.)**
- A4: no orchestrator-relevant CI/lint configuration was deliberately stripped from the safe copy (weaker assumption, flagged as such).

## 7. Decisions Already Made (not open for silent re-litigation — challenge explicitly if you disagree)

- **(Revision 3)** Project Context **v2.4** (not v2.3) treated as authoritative baseline (§5 above / G2) — **closed by direct Project Owner instruction (`OWNER-CORRECTION-PC-2.4`), not a Cowork judgment call.** (Revision 1/2 treated v2.3 as authoritative for the reasons recorded in `Source-Gap-Report.md`'s historical G2 finding; that treatment is superseded.)
- Living Strategic Roadmap v1.4 treated as authoritative (unambiguous).
- TypeScript/Node.js recommended over Python for implementation (main document §17/§Handoff §6).
- Flat-file storage (no database) recommended for MVP, SQLite deferred as a documented future option (main document §41, ADR Proposal #5, Category C).
- Docs placed at `docs/architecture/development-orchestrator/` (matching existing `docs/implementation/`-style multi-file initiative convention) rather than a new top-level folder.
- **(New, Revision 2)** ADR Proposals #2, #6, #7, #8, #9, #10 moved from "Blocks MVP: Yes" to Category B (provisional contracts, do not block the first spike) — only #1, #3, #4 remain Category A blockers, each with an explicit justification in `ADR-Proposal-List.md`.
- **(New, Revision 2)** `PRE_PROMOTION_OWNER_APPROVAL` and `POST_PROMOTION_VERIFICATION` are two distinct states; no code path or prose in this package treats them as interchangeable.

## 8. What External Reviewers Do NOT Have Access To

- The safe working copy's filesystem directly (no tool access; only what's included/excerpted here).
- The primary VistaRoom AI repository, its Git history, or its actual current HEAD.
- `docs/engineering-decisions/reviews/*` (72-file evaluation chain), full PCS/ACS content, **ADR-000's own full text (1112 lines) — this package itself has also not read it directly; see §3 above, `source_use_mode: INDIRECT_SUMMARY + METADATA_ONLY`**, `docs/reviews/source-review-mode-operation-2026-07-09.md`, and anything under `src/**` beyond the structural facts stated in §3 above.
- Any real secret, credential, or `.env.local` content (never existed in this workspace).
- Authority to approve, accept, or merge anything — ChatGPT's and Grok's outputs are advisory findings only, consolidated by Claude Cowork and never auto-applied (main document §11, §26).

## 9. Requested Output Format

Findings only, in the schema below (main document §26) — free-form prose review is acceptable as supporting explanation but every actionable point must be expressed as one of these:

```yaml
finding:
  id: ORCH-REV-XXX
  severity: low | medium | high | critical
  category: <topic>
  location: "Section N"
  problem: "..."
  evidence: ["..."]
  required_change: "..."
  owner_decision_required: true | false
```

For this re-review round specifically, please indicate, per `ORCH-REREV-001`–`003` finding (§0A above — the three findings this Revision 4 editorial cycle addresses), whether you consider it **closed**, **partially closed** (explain what remains), or **not actually closed** (explain why the fix doesn't satisfy the original finding) — this maps directly onto `Finding-Disposition-Report-Revision-3-to-4.md`'s `re_review_focus` field. The earlier `ORCH-REV-001`–`008` findings (Revision 2) and the `OWNER-CORRECTION-PC-2.4` baseline correction (Revision 3) are both already closed and out of scope for this specific re-review round — a reviewer disagreeing with either should raise it as an explicit new finding, not assume it is still open.

---

*Prepared by Claude Cowork, Document Author role, as the compact external-review counterpart to the full architecture package. Does not replace `Context-Manifest.md` or `Source-Gap-Report.md` as the authoritative internal records — it summarizes them for an audience that cannot read the full corpus. Revision 4, Draft — Proposed for Engineering Re-Review; not Approved, Accepted, or Final. Baseline correction `OWNER-CORRECTION-PC-2.4` applied in Revision 3 (Project Context v2.4 authoritative, v2.3 superseded; G2 resolved, G1 remains open). Editorial correction cycle `ORCH-REREV-001`–`003` applied in Revision 4 (workflow order synced, immutability guard added, Artifact Model and Change Set Manifest metadata corrected) — see §0A above.*
