# Source Gap Report — VistaRoom Development Orchestrator (Architecture Workflow Package)

## Status

Informational record, produced before authoring began (per the task's own stage order: baseline check → preliminary Context Manifest → Source Gap Report → authoring). Not an ADR. Does not require Proposed/Accepted lifecycle, but items marked **OWNER DECISION REQUIRED** below block full confidence in downstream Git/promotion steps until resolved.

**Revision 2 (2026-08-01).** Updated per Engineering Review finding **ORCH-REV-004** (Baseline Reconciliation Gate) — see the new §G1b below. **G1 and G2 were explicitly NOT closed by Revision 2.** That revision documented a *protocol* for how G1 will eventually be resolved by Claude Code (the Baseline Reconciliation Gate, main document §31C) — it did not, and structurally could not, resolve G1 from inside this safe copy, and did not invent a branch name, commit hash, or HEAD state to make it appear resolved. G2 likewise remained an open Owner decision (OQ-1) at the end of Revision 2.

**Revision 3 (2026-08-01) — baseline correction (`OWNER-CORRECTION-PC-2.4`).** The Project Owner has since directly confirmed, outside of Revision 2's scope and independent of Engineering Review findings ORCH-REV-001–008, that **Project Context v2.4 is the final, approved, canonical, and authoritative** Project Context baseline, and that **Project Context v2.3 is superseded and historical**. This closes **G2** — see the new §G2 Resolution History below. **G1 is NOT affected by this correction and remains open** — the safe copy still has no `.git`, and this baseline correction does not, and cannot, establish a branch, base commit, or freshness state for it. G1 and G2 are two structurally distinct gaps and this revision does not conflate them: closing G2 (an owner authority decision) says nothing about G1 (a missing-VCS structural fact).

## Purpose

Records everything that could not be established with confidence from the safe working copy alone: missing materials, stale sources, contradictions between documents, assumptions Claude Cowork had to make to proceed, and what requires the Project Owner's or Claude Code's follow-up before this package can be treated as fully validated. Per the task's governing rule ("если актуальность исходных материалов невозможно установить, не продолжай работу молча"), this report was produced *before* the main architecture document, and every gap listed here is referenced from the relevant section of that document rather than silently resolved.

---

## G1 — No Git repository in the safe working copy (BLOCKING for baseline/freshness validation; NOT blocking for continuing documentation work)

**Finding.** The safe working copy (`C:\Users\user\Documents\Cowork\VistaRoom-AI-Safe-2026-08-01`, mounted at `/sessions/tender-festive-cerf/mnt/Cowork/VistaRoom-AI-Safe-2026-08-01` for shell access) contains no `.git` directory at its root or in any parent up to the filesystem boundary. Running `git status` from the workspace root returns:

```
fatal: not a git repository (or any parent up to mount point /sessions/tender-festive-cerf/mnt)
Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).
```

**Consequence.** Claude Cowork cannot determine, from this workspace:
- the current Git branch (**branch = UNKNOWN — no VCS present in safe copy**);
- the base commit hash the copy was taken from (**base commit hash = UNAVAILABLE**);
- whether any file in the safe copy represents uncommitted changes relative to VistaRoom AI's main repository;
- whether the safe copy is fresh, stale, or partially synchronized;
- whether documents that reference specific commit hashes (see G1a below) are themselves consistent with the copy's actual provenance.

This is exactly the class of situation the task specification requires to be treated as a first-class, non-silent gap (§1: "Если актуальность исходных материалов невозможно установить, не продолжай работу молча. Создай Source Gap Report и укажи, что требуется синхронизация или решение владельца."). It is recorded here, is referenced throughout the main architecture document wherever baseline/freshness matters (Workspace Isolation Architecture, Baseline Synchronization and Freshness, Safe Copy Lifecycle, Change Set Manifest), and does **not** halt the documentation work itself — the task's own stage order (§23, Этап 5 → Этап 6) directs proceeding to authoring after the gap is documented, precisely because this stage produces documentation artifacts, not a Git operation.

**G1a — Internal evidence that the safe copy's freshness relative to main cannot be assumed even loosely.** `docs/project/Project Context v2.3.md` cites `Repository Baseline Reference: 4d6f33d462ab528f6cc4195d0cceb3845dc05414`. `docs/project/Project Context v2.4.md` cites a different, later `Repository Baseline Reference: HEAD 97537cf85f956847d764ec91d0e3b00977fdc08d`, and separately references commits `94398e947264c24b5db2ecb19fb8d29325a5faa1`, `e81965c58f09dd339cacee29c6633fd8ed1376c7`, and `52fac89e5ac2f0f9438090f19444ff51c6719f1d`. None of these commits can be verified, dated, or ordered from the safe copy, because there is no `.git` here. **Claude Cowork did not attempt to infer which (if any) of these commits the safe copy corresponds to** — doing so would be exactly the kind of invented baseline the task instructions forbid.

**Required resolution.** Claude Code (which has real local repository and Git access per the task's access model, §3) must, before any review branch is created from this package:
1. Determine the actual current branch and HEAD commit of the primary local VistaRoom AI repository.
2. Determine whether the safe copy's document set (particularly `docs/project/Project Context v2.4.md`, `docs/adr/ADR-015-*`, and the `docs/engineering-decisions/reviews/` Candidate-Lock chain) matches that HEAD or is behind it.
3. Report back whether the safe copy is fresh enough to serve as the basis for the review branch, or whether it must be regenerated from a newer snapshot before Claude Cowork's content is promoted.

Until step 3 is complete, the **Change Set Manifest**'s `base branch` / `base commit hash` fields are recorded as `N/A — no VCS in safe copy; to be supplied by Claude Code from the primary repository` rather than any assumed value.

### G1b — Baseline Reconciliation Gate protocol now specified (Revision 2, new, ORCH-REV-004) — this documents a future protocol, it does not resolve G1 now

Revision 2 adds a formal **Baseline Reconciliation Gate** (main document §31C) with four defined outcomes (`BASELINE_MATCH` / `NON_CONFLICTING_DRIFT` / `CONFLICTING_DRIFT` / `UNKNOWN`) that Claude Code must run before applying any Change Bundle produced from a safe copy. This is a protocol specification, produced from inside this safe copy by Claude Cowork — it describes *how G1-type situations will be handled going forward*, including this package's own. It is explicitly **not** a resolution of G1 itself: Claude Cowork still has no Git access in this workspace, still cannot determine the primary repository's actual current HEAD, and still has not computed any document-level source hash for real (every `document_sha256` field in `Context-Manifest.md` is honestly `UNAVAILABLE`). Applied honestly to this package's own actual change set, a real Baseline Reconciliation Gate run today would very likely return `UNKNOWN` — which, per its own defined handling, blocks promotion and escalates to the Owner/Claude Code, exactly as G1 has required since Revision 1. **G1 remains open.**

---

## G2 — Project Context authoritative baseline (RESOLVED BY PROJECT OWNER, Revision 3) — historically: four versions present, authoritative status ambiguous

**Status: RESOLVED_BY_PROJECT_OWNER (Revision 3, `OWNER-CORRECTION-PC-2.4`). Historical finding preserved below, unedited in substance, for traceability — the contradiction it describes was real and is not retroactively erased; only its resolution is new.**

### Historical finding (as it stood through Revision 2 — preserved for traceability)

`docs/project/` contains four files: `Project Context.md` (v2.1, header says "Active (Current Baseline)"), `Project Context v2.2.md` (header says "Active (Current Baseline)"), `Project Context v2.3.md` (header says **Status: Accepted**, Accepted by Project Owner 2026-07-14, explicitly `Supersedes: Project Context v2.2`), and `Project Context v2.4.md` (header says **Status: "IN-PLACE CORRECTED DRAFT... AWAITING VALID EXTERNAL TARGETED CORRECTION CLOSURE VERIFICATION, PROJECT OWNER ACCEPTANCE, AND SEPARATE REPOSITORY PERSISTENCE AUTHORIZATION"**, and explicitly states "Repository persistence of this corrected identity: NOT PERFORMED — NOT AUTHORIZED").

v2.4's body text further asserts: *"Начиная с этой reconciliation, `Project Context v2.4.md` формально закрепляется как sole active canonical Project Context... Project Context.md, v2.2 и v2.3 зафиксированы как Historical/Superseded/Inactive"* — i.e., v2.4 **claimed** supreme authority over v2.3 in its own body text, while its own header simultaneously stated that this very claim was an unauthorized, unaccepted draft.

**This was a genuine internal contradiction, not merely a version-ordering question**, and per task instructions §4 ("При конфликте документов: не выбирай решение молча") it was not resolved silently at the time.

**Resolution applied for Revision 1/2 of this package (with reasoning, not silent selection).** Claude Cowork treated **Project Context v2.3** as the authoritative Project Context baseline for the *VistaRoom Development Orchestrator* architecture package through Revision 2, because:
1. v2.3 carried an unambiguous `Status: Accepted`, `Accepted by: Project Owner`, `Acceptance Date: 2026-07-14`.
2. v2.4 carried no such acceptance — by its own text, acceptance and repository persistence were both explicitly pending.
3. Using an admittedly-unauthorized draft as "the requirements a new tool must be consistent with" would have risked building the Orchestrator's architecture against a baseline the Project Owner had not actually ratified.

v2.4 was still read (through Revision 2, header/status block only) and used as **informational context only** at that time — never as a source of binding requirements.

### G2 Resolution History (Revision 3, new)

The Project Owner has directly instructed Claude Cowork (2026-08-01) that this prior interpretation is superseded:

```yaml
gap_resolution:
  id: G2
  previous_status: OWNER_DECISION_REQUIRED
  new_status: RESOLVED_BY_PROJECT_OWNER
  authoritative_document: "docs/project/Project Context v2.4.md"
  superseded_document: "docs/project/Project Context v2.3.md"
  resolution_basis: "Direct Project Owner instruction"
  binding_effect: >
    Project Context v2.4 is the final, approved, canonical baseline.
    Project Context v2.3 is historical and non-binding.
  re_review_required: true
```

Effective immediately: **Project Context v2.4 is the sole authoritative Project Context baseline** for this package and for every statement this package makes about "current VistaRoom AI project state." **Project Context v2.3 is superseded and historical** — it may still be cited for change history / historical comparison (e.g., in this Source Gap Report, for traceability), but never again as a source of current binding requirements. This is not an Engineering Review finding disposition (it is unrelated to `ORCH-REV-001`–`ORCH-REV-008`) — it is a separate, narrower **owner baseline correction**, recorded here and propagated through the rest of this package per `Revision-Report-Revision-2-to-3.md`.

**Residual observation (non-blocking, does not reopen G2).** Claude Cowork read `Project Context v2.4.md` in full for this revision (`source_use_mode: DIRECT_FULL`, see `Context-Manifest.md`). Its own internal header and "Final Status" section still self-describe, as of the document's own last edit, as "IN-PLACE CORRECTED DRAFT ... AWAITING VALID EXTERNAL TARGETED CORRECTION CLOSURE VERIFICATION, PROJECT OWNER ACCEPTANCE, AND SEPARATE REPOSITORY PERSISTENCE AUTHORIZATION," and its own "Required Project Owner Decisions" section (11 items) and "Final Status" block describe several of its own internal correction-cycle sub-decisions as not yet separately confirmed. The direct Project Owner instruction to Claude Cowork (`OWNER-CORRECTION-PC-2.4`) is a separate, later, and — for the purposes of this package — controlling confirmation that supersedes that internal self-description; per the governing baseline-correction instructions §1, this direct instruction "имеет приоритет над предыдущей интерпретацией Cowork." This package does not edit `Project Context v2.4.md` itself (out of bounds per this package's access boundary) and does not resolve v2.4's own internal sub-decisions (e.g., Supporting Contracts 9–11 authorization) — it only records, honestly, that v2.4's self-described internal status and the direct Owner instruction to this package are two different facts, both true, and that this package is bound by the latter for its own baseline determination.

---

## G3 — Living Strategic Roadmap: two versions present, resolved without ambiguity

**Finding.** `docs/roadmap/` contains `Living-Strategic-Roadmap-v1.3.md` and `Living-Strategic-Roadmap-v1.4.md`. Unlike G2, this is **not ambiguous**: v1.4's header states `Status: Accepted`, `Accepted by: Project Owner`, `Acceptance Date: 2026-07-13`, `Supersedes: Living Strategic Roadmap v1.3`, and no later, competing claim of acceptance exists for any other roadmap version. v1.3 is referenced elsewhere (e.g., Architecture-Freeze-Completed.md, dated 2026-07-05, predates v1.4's acceptance) purely as historical continuity, not as a live competing baseline.

**Resolution applied.** **Living Strategic Roadmap v1.4** was treated as the current, authoritative Roadmap. No owner decision required for this item.

---

## G4 — ADR-000 file status wording lags its own governance registry (non-blocking, pre-existing, not caused by this package)

**Finding.** Architecture Freeze Resolution R9 (open, Low priority, owner: Governance) records that the `## Status` line inside ADR-000, ADR-001, ADR-002, and ADR-004 should be updated from "Accepted" to "Active" to match how `ADR_INDEX.md` already lists them. This was open at the time the safe copy's documents were last edited and, per task instructions §2/§21, **Claude Cowork does not modify any existing ADR file** to correct this — it is noted here only so the Context Manifest's "trust level: high" rating for ADR-000 is not misread as "internally perfectly consistent." This is VistaRoom AI's own pre-existing, already-tracked technical debt item (R9), not a defect introduced by this package.

---

## G5 — No CI / lint / automated-check configuration visible in the safe copy

**Finding.** No `.github/` directory, no `.markdownlint*` config, no ESLint config file, and no CI pipeline definition of any kind exists anywhere in the safe copy (checked at the repository root and via recursive search for common CI filenames). `package.json` defines only `dev`, `build`, `start`, and `test` (Vitest) scripts — no `lint` script.

**Consequence.** The main architecture document's **Change Set Manifest** cannot assert what automated checks the *main* VistaRoom AI repository actually runs on a review branch, because either (a) no such checks exist yet, or (b) they exist in the main repository/CI configuration but were not included in this safe copy (which contains no `.github` at all). Both are plausible and cannot be distinguished from here.

**Required resolution.** Claude Code should check the primary local repository (and any connected remote/CI configuration) for actual required checks before creating the review branch, rather than assuming the safe copy's absence of CI config means the main repository has none. The Change Set Manifest lists a conservative, VistaRoom-AI-appropriate minimum check set (secret scan, `git diff` scope review, internal link check) that holds regardless of what CI Claude Code finds.

---

## G6 — Two "Full-Platform Vision Architecture" owner-acceptance revisions exist; not used as binding source

**Finding.** `docs/engineering-decisions/reviews/` contains `VistaRoom-AI-Full-Platform-Vision-Architecture-Rev3-Owner-Acceptance-Decision.md` (accepted 2026-07-21) and a later `...-Rev5-Owner-Acceptance-Decision.md` (also accepted 2026-07-21, same day, superseding Rev3 per its own text — each acceptance decision cites the exact line count and SHA-256 of the accepted artifact). This appears to be a broader, separately-governed "full platform" vision layer sitting alongside the Living Strategic Roadmap, with its own acceptance process (artifact hashing rather than Git commit reference).

**Resolution applied.** This package treats the Full-Platform Vision Architecture documents as **out of scope / informational only**. The Orchestrator's job in this stage is Architecture Workflow tooling, not a restatement of VistaRoom AI's product vision, and neither Rev3 nor Rev5's content was needed to design a workflow orchestrator. Not reading the full ~1,770-line Rev5 document is a deliberate minimal-sufficient-context decision, recorded in the Context Manifest (Tier 3). If a future stage of this Orchestrator work needs to validate itself against the Full-Platform Vision Architecture specifically, that should be a scoped follow-up context request, not an assumption made here.

---

## G7 — Assumptions Claude Cowork made to proceed (recorded explicitly, not left implicit)

1. **A1 — "Repository" in the task brief means the primary local VistaRoom AI folder, not this safe copy.** The task brief and the safe copy's own absence of `.git` are consistent with this; no evidence contradicts it.
2. **A2 — The safe copy is reasonably representative of VistaRoom AI's documentation *structure and conventions*, even if its exact freshness relative to main HEAD is unknown.** This assumption is load-bearing for §1 (templates, naming, placement conventions) but is explicitly *not* extended to freshness-sensitive content (ADR numbering, Project Context authority) — see G1/G2.
3. **A3 — "Claude Code" in this package's design refers to an agent/tool with real local filesystem and Git access to the primary VistaRoom AI repository**, consistent with the task brief's §3 description; no independent verification of Claude Code's actual current capabilities was possible from this workspace.
4. **A4 — No orchestrator-relevant CI configuration exists that was deliberately excluded from the safe copy** (as distinct from `.env.local`/secrets, which are confirmed deliberately excluded per the task brief). This is a weaker assumption than A1–A3; see G5 for why it is flagged rather than treated as settled.

No assumption above was used to invent a *decision* (e.g., no assumption was used to pick a Git branch name, commit hash, or ADR number) — all are framing assumptions needed simply to write a coherent document about a workspace that inherently lacks Git metadata.

---

## G8 — Summary Table

| ID | Gap / Conflict | Blocking? | Resolution applied here | Requires |
|---|---|---|---|---|
| G1 | No `.git` in safe copy — branch/commit/freshness unknowable | Blocks Git-based validation & promotion steps; does not block authoring documentation | Documented as UNKNOWN/UNAVAILABLE throughout; not invented. **Still open in Revision 3 — unaffected by the G2 baseline correction; not conflated with it.** | Claude Code (real repo access) |
| G1a | Project Context v2.3/v2.4 cite specific, unverifiable commit hashes | Same as G1 | Hashes recorded verbatim, not verified, not used to infer safe-copy freshness | Claude Code |
| G1b | *(Revision 2, new)* No Baseline Reconciliation Gate protocol existed to say what happens if the primary repo drifted after safe-copy creation | Blocks confident Change Bundle application | Four-outcome gate now specified (main document §31C) — a protocol, not a resolution; applied to this package's own change set the honest outcome would likely be `UNKNOWN` | Claude Code (executes the gate for real) |
| G2 | *(RESOLVED, Revision 3)* Project Context had 4 versions; v2.4 historically self-contradicted (claimed authority, marked unauthorized) | Resolved — no longer blocks confidence in "current project state" claims | **v2.4 confirmed authoritative by direct Project Owner instruction (`OWNER-CORRECTION-PC-2.4`); v2.3 superseded/historical** | None — closed |
| G3 | Roadmap has 2 versions | Not blocking — unambiguous | v1.4 treated as authoritative | None |
| G4 | ADR-000/001/002/004 in-file Status wording lags registry (pre-existing R9) | Not blocking | Noted, not corrected (ADRs not modified) | Governance (pre-existing, tracked as R9) |
| G5 | No CI/lint config visible in safe copy | Not blocking for authoring; affects Change Set Manifest's "required checks" precision | Conservative minimum check set proposed; deferred to Claude Code for the real set | Claude Code |
| G6 | Two Full-Platform Vision Architecture revisions exist, not read in depth | Not blocking | Treated as out of scope/informational | None (follow-up only if future stage needs it) |
| G7 | Framing assumptions A1–A4 | Not blocking | Recorded explicitly | None required unless contradicted later |

---

*Produced by Claude Cowork, Document Author role, before authoring the main architecture document, per the task's required stage order. Revision 2 (2026-08-01) added G1b. Revision 3 (2026-08-01) resolves G2 by direct Project Owner instruction (`OWNER-CORRECTION-PC-2.4`) — see §G2 Resolution History above. **G1 remains open** and is not resolved by this or any Cowork revision — see `Revision-Report.md` (historical, Revision 1→2) and `Revision-Report-Revision-2-to-3.md` (this baseline correction).*
