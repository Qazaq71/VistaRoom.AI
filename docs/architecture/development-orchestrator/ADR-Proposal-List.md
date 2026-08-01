# ADR Proposal List — VistaRoom Development Orchestrator

## Status

Proposal list only. **No ADR is created, numbered, or accepted by this document.** Per `docs/governance/ADR-Numbering-Policy.md` §1, an appearance in a list like this one "не создаёт обязательства присвоить именно этот номер именно этой теме — она носит справочный характер до момента фактического создания ADR." This list follows the same non-binding convention already established by `docs/adr/ADR-Backlog-Consolidated.md`.

Revision 2 (2026-08-01). Reorganized per Engineering Review finding **ORCH-REV-005** ("too many decisions declared MVP-blocking or proposed for premature freezing"). See `Revision-Report.md` / `Finding-Disposition-Report.md` for the full disposition.

**Reviewed for Revision 3 (2026-08-01) baseline correction (`OWNER-CORRECTION-PC-2.4`).** No proposal in this list references `docs/project/Project Context v2.3.md`, relies on v2.4's status as an unresolved/unauthorized draft, or lists Gap G2 as a reason or constraint — confirmed by direct re-read of this file. **No content change was required.** Project Context v2.4 is the package's authoritative baseline as of Revision 3 (see `Source-Gap-Report.md` §G2 Resolution History); this list's ADR numbering-freshness caveat (below) continues to depend only on Gap G1 (no `.git`), which remains open and unaffected by the G2 baseline correction.

**Reviewed for Revision 4 (2026-08-01) editorial correction cycle (`ORCH-REREV-001`–`003`).** This file's promotion-path sequence (Proposal #4's problem statement, below) already lists Change Bundle Generation → Claude Code Validation → Baseline Reconciliation → Review Branch → Claude Project Review → Corrections → `PRE_PROMOTION_OWNER_APPROVAL` → Controlled Merge → Main → Primary Update → `POST_PROMOTION_VERIFICATION`, matching the canonical Architecture Workflow State Registry's order (main document §23) exactly — no reordering was required. No proposal in this list describes the Candidate Architecture Document's own revision number, and no proposal restates `Change-Set-Manifest.md`'s metadata. **No content change was required.** For the record: the package's current revision is now 4 (`ORCH-REREV-001`–`003`, editorial workflow-order/metadata corrections and a new Pre-Promotion Immutability Check guard, main document §23A) — see `Revision-Report-Revision-3-to-4.md`.

## Numbering Note

Per `docs/adr/ADR_INDEX.md` as read from the safe copy, ADR-000 through ADR-015 already exist. The provisional next free number would be **ADR-016**, but this must be independently re-verified against the live `ADR_INDEX.md` in the primary repository at the moment any of these proposals is actually formalized (`ADR-Numbering-Policy.md` §5, step 2) — **not** against this safe copy, whose freshness relative to the primary repository's current state is unknown (`Source-Gap-Report.md`, Gap G1). No number below is assigned to any specific proposal for this reason.

## Format

Each entry: name · problem · why a decision is required · alternatives · consequences · blocks MVP? · needs owner?

## Category Overview (Revision 2, ORCH-REV-005)

Proposals are grouped into three categories, per `Architecture-Engineering-Responsibility-Model.md`'s own architecture/engineering split, applied here more strictly than Revision 1 did:

- **Category A — Architecture Boundary Decisions.** Genuine architectural boundaries that a future implementer could otherwise silently violate, and which are cheap to state now and expensive to retrofit later. **These are the only proposals that block MVP implementation (Phase 1) in this revision**, each with an explicit justification below.
- **Category B — Provisional Engineering Contracts.** Interface/contract shapes (state schema, provider adapter, execution connector, artifact schema, context package schema, policy interface). Revision 2's position: **do not block the first vertical-slice spike.** Required behavior, invariants, minimal fields, and versioning are defined now (in this package); exact TypeScript signatures are implemented against the sketch in `MVP-Implementation-Handoff.md` and only proposed as an ADR *after* real prototype evidence, per the sequence `prototype evidence → contract refinement → optional ADR if architecture-significant`.
- **Category C — Deferred Implementation Choices.** Concrete technology/mechanism choices (storage backend, queue, cache, deployment topology, scheduling, persistence mechanics) that do not need to be decided before MVP and are explicitly deferred.

| # | Proposal | Category | Blocks MVP? (Revision 2) |
|---|---|---|---|
| 1 | Orchestrator Removability and Non-Dependency Boundary | A | **Yes** — justified below |
| 2 | Context Intelligence Layer / Context Package Schema | B | No — provisional contract |
| 3 | Multi-Agent Access Model and Trust Boundaries | A | **Yes** — justified below |
| 4 | Workspace Isolation and Change Promotion Path | A | **Yes** — justified below |
| 5 | Context Index Storage Backing Store (flat files vs. SQLite) | C | No — deferred |
| 6 | Provider Adapter **and** Execution Connector Contracts (expanded, Revision 2, ORCH-REV-003) | B | No — provisional contract |
| 7 | Explicit State Machine / State Schema | B | No — provisional contract |
| 8 | Secret Handling and Safe Workspace Recreation Policy | B | No — provisional contract |
| 9 | Escalation and Human Approval Gateway Contract / Policy Interface | B | No — provisional contract |
| 10 | Development/Testing/Release Workflow Plug-in Interface | B | No — provisional contract |

---

## Category A — Architecture Boundary Decisions (block MVP; explicit justification required and given below)

### 1. Orchestrator Removability and Non-Dependency Boundary

- **Problem.** Nothing today formally forbids a future implementer from wiring the Orchestrator into VistaRoom AI's runtime path (e.g., a build script that fails if the Orchestrator's config is missing), which would violate the architectural position required by the task brief (§6) and this package's §43.
- **Why a decision is required.** This is a hard architectural boundary, not an implementation detail — it belongs in an ADR per `Architecture-Engineering-Responsibility-Model.md`'s own ADR/engineering split, not left to convention.
- **Alternatives considered.** (a) Document the boundary only in this architecture package, no ADR — rejected, has no enforcement teeth once implementation starts and other documents are added. (b) Enforce via CI check only, no ADR — rejected, a CI check without a recorded architectural decision behind it is easy to quietly remove later.
- **Consequences.** Accepting this ADR commits future implementers to a testable acceptance criterion ("delete the Orchestrator, VistaRoom AI still builds/runs/documents itself fully") as a permanent regression check, not just an MVP-time claim.
- **Blocks MVP?** **Yes.** Justification (Revision 2, held to a stricter bar than Revision 1): this is not a contract that can be safely retrofitted — if Phase 1 code is written without this boundary settled, the very first implementation decision (where does Orchestrator state/config live relative to `src/**`) risks violating the boundary before there is anything to correct. Unlike Category B items, there is no "build first, freeze later" sequencing available here: the boundary constrains the *first* file the implementer creates.
- **Needs Owner?** Yes.

### 3. Multi-Agent Access Model and Trust Boundaries

- **Problem.** The actual, asymmetric access of Claude Cowork / Claude Code / Claude Project / ChatGPT / Grok (task §3) is currently documented only in this architecture package and the originating task brief — nowhere does VistaRoom AI's own governance layer record it as a standing rule. Revision 2 sharpens this further: the Execution Connector model (§16A) now also depends on this boundary being settled, since `availabilityMode` is meaningless without a fixed access-tier definition to check it against.
- **Why a decision is required.** A future implementer or a future task brief could easily (and wrongly) assume, e.g., that Claude Project can read the safe copy directly, or that a `HUMAN_MEDIATED` endpoint can be silently treated as `AUTOMATABLE`. This needs to be a binding decision, not tribal knowledge re-derived per task.
- **Alternatives considered.** (a) Keep it only in this document — rejected, doesn't protect against drift when the Orchestrator gains new workflows/agents. (b) Make it a per-provider capability flag configuration only, no ADR — rejected, configuration can be edited without triggering governance review; the *boundary itself* (not just today's flag values) needs ADR-level protection.
- **Consequences.** Every future Agent Dispatcher change that alters which agent can perform which role, or which Execution Connector's `availabilityMode` is trusted for unattended operation, becomes an ADR-governed change, not a silent config edit.
- **Blocks MVP?** **Yes.** Justification: this is the basis for §10 (Access Model) and §16A (Execution Connector), which essentially every other section depends on for correctness — including the security-critical claim that no non-Repository-Engineer role can reach Git. A Phase 1 implementation without this settled would have no enforceable boundary to implement against.
- **Needs Owner?** Yes.

### 4. Workspace Isolation and Change Promotion Path

- **Problem.** The single legal path (Safe Copy → Cowork Authoring → Independent Review → Cowork Revisions → Change Bundle Generation → Claude Code Validation → Baseline Reconciliation → Review Branch → Claude Project Review → Corrections → `PRE_PROMOTION_OWNER_APPROVAL` → Controlled Merge → Main → Primary Update → `POST_PROMOTION_VERIFICATION`, per Revision 2's §33/§33A) is currently only documented, not a governance-enforced invariant.
- **Why a decision is required.** This is the mechanism that prevents any direct-copy shortcut into the primary repository (task §2/§10) — exactly the kind of platform-boundary decision the Responsibility Model says belongs in an ADR, not an engineering artifact. It is also the boundary the entire Change Transfer Protocol (§33A, ORCH-REV-001) and Baseline Reconciliation Gate (§31C, ORCH-REV-004) depend on for their authority to block promotion.
- **Alternatives considered.** (a) Rely on Claude Code's own discipline each time, no formal ADR — rejected, contradicts the task's explicit "не выбирай решение молча" and "не считай доступными материалы... не придумывай" ethos when it comes to *process* as much as content. (b) Enforce only via branch-protection rules on the Git host — rejected as *insufficient alone*; branch protection prevents a bad push but doesn't record *why* the multi-step review path (including the newly-specific Change Bundle and Baseline Reconciliation steps) exists, which matters if it's ever proposed to be shortened.
- **Consequences.** Any future proposal to skip a step (e.g., "let Claude Code auto-merge low-risk doc changes," or "skip Baseline Reconciliation for `NON_CONFLICTING_DRIFT`") becomes an ADR amendment, visible and reviewable, not a quiet policy change.
- **Blocks MVP?** **Yes.** Justification: Phase 4 (Git Integration Layer, Change Bundle Manager, Baseline Reconciliation Gate) is a direct implementation of this boundary; without it settled, there is no authoritative definition of what "controlled promotion" even means for the implementer to build against.
- **Needs Owner?** Yes.

---

## Category B — Provisional Engineering Contracts (do not block the first spike)

### 2. Context Intelligence Layer / Context Package Schema

- **Problem.** Token economy is a binding requirement (task §5) but nothing currently makes the "read index before full document, pass sections not files, cache by revision hash" discipline enforceable rather than aspirational.
- **Why a decision may eventually be required.** Determines a real architectural contract (what every role/provider call is entitled to receive) that later workflow additions must respect — but the exact `ContextPackage` shape (`MVP-Implementation-Handoff.md` §2) is exactly the kind of thing that should be refined against real Phase 2 implementation experience before being frozen.
- **Alternatives considered.** (a) Leave as informal best practice — rejected, this package's own experience (Context-Manifest.md Tier 1/2/3 split) shows the discipline needs an explicit, checkable rule set to stay consistent across many future runs. (b) Enforce token limits only, no section-retrieval requirement — rejected, a hard token cap without smarter retrieval just causes silent truncation, which the task explicitly forbids (§5, rule 13: correctness over mechanical savings). (c) **(Revision 2)** Freeze the exact schema as an ADR now — rejected as premature; the required *behavior* (index-first, section-level, hash-validated caching, no silent truncation) is binding starting now, but the *exact field shapes* should be informed by Phase 2's real implementation.
- **Consequences.** Binds the Context Intelligence Layer's required behavior (main document §15) as an architectural contract; the exact `ContextPackage` interface (`MVP-Implementation-Handoff.md` §2) is implemented against that behavior and revisited as an optional ADR only if Phase 2 reveals an architecture-significant design choice.
- **Blocks MVP?** **No (revised from Revision 1's "Yes").** Phase 2 can begin implementing against the behavioral contract already specified in main document §15; the exact schema is refined with real evidence, not frozen in advance.
- **Needs Owner?** No — Architecture-owned; Owner visibility recommended given the token-economy stakes.

### 6. Provider Adapter and Execution Connector Contracts (expanded, Revision 2, ORCH-REV-003)

- **Problem.** The Orchestrator must not hard-code Anthropic/OpenAI/xAI specifics into core logic (task §17's "provider adapters... не зависеть жёстко от OpenAI, Anthropic или xAI"), but the exact adapter interface (main document §17) — and, new in Revision 2, the separate Execution Connector interface (§16A) that the Revision 1 review correctly flagged as missing (ORCH-REV-003) — are both currently only sketches.
- **Why a decision may eventually be required.** This is the concrete mechanism that makes "provider independence" (task §6, §22 quality criteria) real rather than aspirational, and — separately — the mechanism that makes "execution environment honesty" (not claiming autonomy an endpoint doesn't have, §16A) real rather than aspirational.
- **Alternatives considered.** (a) Freeze both interfaces now, in one ADR — rejected in Revision 2; mirrors VistaRoom AI's own existing `ImageProvider` pattern (`src/providers/image/`) directionally, but that pattern evolved from real implementation, not an upfront freeze. (b) Leave interface design entirely to whoever builds Phase 3/4 — rejected, risks the interfaces being shaped around one provider's or one endpoint's quirks first and needing a breaking change later. (c) **(chosen)** Specify required behavior and minimal fields now (this package, §16A/§17), implement Phase 3 against that sketch, propose an ADR only once a real `ProviderAdapter` and a real `ExecutionConnector` have been built and exercised against at least two different endpoints (e.g., `cowork-safe-workspace` and `claude-code-local-git`).
- **Consequences.** Reduces the risk of freezing an interface shape before real usage reveals its actual pain points, while still binding the *behavioral* requirement (model calls never bypass `ProviderAdapter.invoke()`; execution environment claims are never made without a tested `ExecutionConnector`) starting now.
- **Blocks MVP?** **No (revised from Revision 1's "Yes").** Phase 3/4 implement against the sketch in `MVP-Implementation-Handoff.md` §2 (updated for the split, Revision 2); the ADR, if pursued, comes after prototype evidence.
- **Needs Owner?** No — Architecture-owned; Owner visibility recommended, not required.

### 7. Explicit State Machine as Canonical Workflow Representation / State Schema

- **Problem.** The task brief explicitly requires "явную state machine" (§17) and "Разработай явную конечную машину состояний" (§15) as opposed to an implicit, conversation-inferred workflow position — but nothing prevents a future implementer from taking a shortcut (e.g., inferring state from the latest artifact present) once under delivery pressure.
- **Why a decision may eventually be required.** This is exactly the kind of "boundary" decision (per `Architecture-Engineering-Responsibility-Model.md`) that underpins auditability (§38) and resumability (§39) guarantees made throughout this package — but the *requirement* ("state machine is the sole source of truth for workflow position," never inferred) is already binding via this architecture document itself; freezing the exact `StateDefinition`/`Transition` TypeScript shape (`MVP-Implementation-Handoff.md` §2) as an ADR before Phase 1 has run is premature.
- **Alternatives considered.** (a) Explicit state machine, single source of truth for workflow position — chosen as a *behavioral* requirement, binding now. (b) Implicit/LLM-inferred state from artifact history — rejected as unauditable and non-reproducible, contradicting task §22's "воспроизводимым" requirement. (c) **(Revision 2)** Freeze the exact schema as an ADR now — rejected as premature; the canonical State Registry (§23, ORCH-REV-006) is the binding artifact today, the TypeScript contract is implemented against it.
- **Consequences.** Every workflow (current and future) must be expressible as states + transitions before it can be added — a real constraint on how Development/Testing/Release Workflows (§20–22) get designed later — but the *interface* is refined with Phase 1 evidence.
- **Blocks MVP?** **No (revised from Revision 1's "Yes").** The canonical State Registry (main document §23) already provides everything Phase 1 needs to start; the ADR, if pursued, formalizes the schema after Phase 1 evidence.
- **Needs Owner?** No — Architecture-owned.

### 8. Secret Handling and Safe Workspace Recreation Policy

- **Problem.** Secret exclusion today relies on the safe copy being created correctly by whoever/whatever produces it (this package found `.env.local` correctly absent, but has no way to verify *why* it's absent — convention, tooling, or luck).
- **Why a decision may eventually be required.** Given the task's zero-tolerance framing on secrets (§1, §2, §13, §21), the *mechanism* that guarantees exclusion (not just the current observed absence) should eventually be an architecture decision, including the recreation cadence/triggers (main document §30.4).
- **Alternatives considered.** (a) Formalize safe-copy creation as a Safe Workspace Manager operation with mandatory exclusion rules and a recorded creation manifest (including base commit hash, closing part of Gap G1 for *future* runs) — the direction this package's required behavior already points toward. (b) Continue treating safe-copy creation as an out-of-band, undocumented step — rejected, this is precisely what produced Gap G1 for the current run.
- **Consequences.** Makes "no `.git`, no recorded base commit" (this run's actual situation) a defect to prevent going forward, not just a one-time inconvenience to document — as a *behavioral requirement*, binding now via §30; the ADR, if pursued, formalizes the exact Safe Workspace Manager operation contract after Phase 4 evidence.
- **Blocks MVP?** No — the MVP can operate with a manually-prepared safe copy (as this run did), but the gap it leaves (G1) should not be allowed to recur silently.
- **Needs Owner?** Yes — changes how safe copies are provisioned going forward, which is an operational/process change the Owner should confirm, though not before Phase 1 can start.

### 9. Escalation and Human Approval Gateway Contract / Policy Interface

- **Problem.** The escalation trigger list (task §12, main document §27) is currently prose in an architecture document — nothing makes it a checkable policy artifact a Policy Engine implementation could load and enforce verbatim.
- **Why a decision may eventually be required.** Human-in-the-loop boundaries are exactly the kind of "significant" decision the task itself treats as requiring explicit governance (§12's own framing: "не исключать [владельца] из критических решений") — but the exact `PolicyEngine`/`PolicyDecision` interface shape is an implementation contract, not the boundary itself (the boundary — that these triggers must always escalate, including `PRE_PROMOTION_OWNER_APPROVAL` never being skippable — is already binding via §23/§27).
- **Alternatives considered.** (a) Freeze the trigger list and its interface as an ADR-governed, versioned policy artifact now — deferred to post-Phase-1 in this revision. (b) Leave the trigger list as free-editable configuration — rejected, it is exactly the kind of thing that should not be quietly narrowed over time to reduce owner interruptions; the list itself (main document §27) remains binding prose regardless of ADR status.
- **Consequences.** Any future change narrowing or widening the escalation trigger list becomes a reviewable architectural change once formalized; until then, main document §27 is the binding source.
- **Blocks MVP?** No — MVP can launch with the trigger list as specified in this document (§27); the ADR, if pursued, formalizes the policy-interface contract for long-term stability after Phase 1/3 evidence.
- **Needs Owner?** Yes, eventually — not before Phase 1 can start.

### 10. Development/Testing/Release Workflow Plug-in Interface

- **Problem.** §20–22 of the main document sketch contracts for the three future workflows to prove the core doesn't need rewriting — but a sketch is not the same as a frozen interface a later implementer is bound to.
- **Why a decision may eventually be required.** This is precisely the "shared core, pluggable workflow" requirement from the task brief's opening framing and §7 — worth eventually locking in an ADR specifically so that when Development Workflow implementation actually starts (a separate future initiative), its authors are constrained to extend, not redesign, the core.
- **Alternatives considered.** (a) Freeze the plug-in interface (state/role/artifact-type registration contract) now, informed by the Architecture Workflow's real shape — rejected in Revision 2 as premature (the Architecture Workflow itself hasn't run yet). (b) Wait until Development Workflow implementation to define the interface, informed by real requirements at that time — closer to the Revision 2 position, but the required *sequence* (`prototype evidence → contract refinement → optional ADR if architecture-significant`) is now explicit rather than leaving the timing open-ended.
- **Consequences.** MVP scope (Architecture Workflow only) is entirely unaffected by when this ADR is pursued.
- **Blocks MVP?** No. MVP only needs Architecture Workflow; this ADR (if pursued) is a prerequisite for *starting* Development Workflow design, not for finishing the current stage.
- **Needs Owner?** No — Architecture-owned; should be revisited with real data once Architecture Workflow has run a few real cycles.

---

## Category C — Deferred Implementation Choices (do not block MVP)

### 5. Context Index Storage Backing Store (flat files vs. embedded database)

- **Problem.** The MVP recommendation (main document §41) is flat Markdown/YAML/JSONL, no database — but as the Context Catalog and Document Metadata Index grow (VistaRoom AI's own `docs/` tree is already ~150+ files), a query-heavy index may eventually need something like SQLite.
- **Why a decision may eventually be required.** This is a genuine "at least two viable options, justified" technology decision (task §17) that should not be made implicitly by whichever implementer happens to build the Context Catalog first, but it has no urgency — MVP scale does not need it.
- **Alternatives considered.** (a) Flat files only, forever — simplest, zero new dependency, human-diffable, but may not scale to fast fuzzy/dependency-graph queries. (b) SQLite from day one — better query support, still zero-ops/file-based, but adds a dependency and schema-migration surface not currently present anywhere in VistaRoom AI's stack (no DB driver in `package.json`).
- **Consequences.** Recommends deferring to (a) for MVP, formalizing (b) as the documented, not-built evolution path — an ADR here, if pursued, is purely to record the deferral rationale, not to gate anything.
- **Blocks MVP?** No — MVP explicitly uses flat files regardless of this ADR's outcome.
- **Needs Owner?** No — can be an Architecture-owned decision, but flagged for Owner visibility given it affects future infrastructure choices.

---

*Prepared by Claude Cowork, Document Author role. None of the above are ADRs. None are numbered. None are accepted. Formal ADR creation, if pursued, follows `docs/governance/ADR-Numbering-Policy.md` and `docs/governance/ADR-Authoring-Convention.md` in full, starting from a freshly-verified `ADR_INDEX.md` in the primary repository.*
