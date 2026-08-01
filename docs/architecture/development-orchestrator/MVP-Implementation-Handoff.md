# MVP Implementation Handoff — VistaRoom Development Orchestrator

## Status

Draft. Revision 2 (2026-08-01) — updated per Engineering Review findings ORCH-REV-001–008; see `Revision-Report.md` / `Finding-Disposition-Report.md`. Written for a future **Claude Code** implementer (or a human engineer), to be picked up only after: the main architecture document reaches `ARCHITECTURE_APPROVAL` = `APPROVED` (or `CHANGES_REQUIRED` items are closed), `PRE_PROMOTION_OWNER_APPROVAL` is granted, and the Project Owner has approved starting implementation. **No code should be written from this handoff before that approval exists** — this document describes what to build, not permission to start building it now. This document itself is not Approved/Accepted/Final — it is Draft, Proposed for Engineering Re-Review alongside the rest of this package.

**Reviewed for Revision 3 (2026-08-01) baseline correction (`OWNER-CORRECTION-PC-2.4`).** This file names no `docs/project/Project Context` version, its "Baseline Validation" reference (§4) is about Gap G1 (Git provenance), not Gap G2 (Project Context authority), and no item in §11's ADR-Blocked Items table cites G2 as a blocker. **No content change was required.** For the record: the package's authoritative project-state baseline is now Project Context v2.4 (Gap G2 resolved — see `Source-Gap-Report.md`); Gap G2 was never an MVP-implementation blocker in this file, and remains true after the correction. Gap G1 (no `.git`) is unaffected and continues to gate the items it already gated (§3 Build Order step 6, §8 Forbidden Operations).

**Reviewed for Revision 4 (2026-08-01) editorial correction cycle (`ORCH-REREV-001`–`003`).** §8 Forbidden Operations already states the promotion pipeline as `CHANGE_BUNDLE_GENERATION` → `REPOSITORY_VALIDATION` → `BASELINE_RECONCILIATION` → `REVIEW_BRANCH_CREATION`, matching the canonical Architecture Workflow State Registry's order (main document §23) exactly — no reordering was required. This file does not describe the Candidate Architecture Document's own revision number and does not restate `Change-Set-Manifest.md`'s metadata. **No content change was required.** For the record: a new mandatory `PRE_PROMOTION_IMMUTABILITY_CHECK` guard now exists between `PRE_PROMOTION_OWNER_APPROVAL` and `APPROVED_FOR_PROMOTION` (main document §23A) — a future implementer should never allow `CONTROLLED_PROMOTION` to run without it passing; this is consistent with, and reinforces, §8's existing "never allow `CONTROLLED_PROMOTION` to run without a recorded, granted `PRE_PROMOTION_OWNER_APPROVAL`" rule, not a replacement for it.

## Purpose

Translates the architecture package (`VistaRoom-Development-Orchestrator-Architecture.md` and companions) into a concrete, ordered implementation plan: project structure, interfaces, build order, first vertical slice, test strategy, readiness criteria, forbidden operations, security checks, branching strategy, and ADR-blocked items.

---

## 1. Recommended Project Structure

A **separate repository or a clearly isolated top-level directory** outside `src/**` (per main document §43's removability requirement — never inside VistaRoom AI's own application source tree). Suggested shape, TypeScript/Node.js (rationale in §6 below):

```text
vistaroom-development-orchestrator/
├── src/
│   ├── core/
│   │   ├── workflow-engine/
│   │   ├── state-machine/
│   │   ├── agent-dispatcher/
│   │   ├── tool-dispatcher/
│   │   ├── context-intelligence/
│   │   │   ├── catalog/
│   │   │   ├── metadata-index/
│   │   │   ├── task-classifier/
│   │   │   ├── dependency-resolver/
│   │   │   ├── section-retriever/
│   │   │   ├── package-builder/
│   │   │   ├── expansion-controller/
│   │   │   ├── token-budget/
│   │   │   ├── provenance-log/
│   │   │   ├── cache/
│   │   │   ├── freshness-validator/
│   │   │   └── conflict-detector/
│   │   ├── prompt-registry/
│   │   ├── artifact-manager/
│   │   ├── review-manager/
│   │   ├── decision-manager/
│   │   ├── escalation-manager/
│   │   ├── policy-engine/
│   │   ├── token-cost-budget/
│   │   ├── retry-recovery/
│   │   ├── audit-log/
│   │   ├── git-integration/
│   │   ├── workspace-isolation/
│   │   │   ├── safe-workspace/
│   │   │   ├── baseline-sync/
│   │   │   └── freshness-validator/
│   │   ├── secret-scanner/
│   │   ├── human-approval-gateway/
│   │   ├── observability/
│   │   ├── configuration/
│   │   ├── provider-adapters/       # model invocation only (§17) — Revision 2, ORCH-REV-003
│   │   │   ├── contract.ts          # the ProviderAdapter interface itself
│   │   │   ├── anthropic-adapter.ts
│   │   │   ├── openai-adapter.ts
│   │   │   └── xai-adapter.ts
│   │   ├── execution-connectors/    # real execution environment (§16A) — new, Revision 2, ORCH-REV-003
│   │   │   ├── contract.ts          # the ExecutionConnector / AgentEndpoint interface
│   │   │   ├── cowork-safe-workspace.ts
│   │   │   ├── claude-code-local-git.ts
│   │   │   ├── claude-project-remote-git-review.ts
│   │   │   ├── openai-external-review.ts
│   │   │   └── xai-adversarial-review.ts
│   │   ├── change-bundle/           # Change Transfer Protocol (§33A) — new, Revision 2, ORCH-REV-001
│   │   │   ├── bundle-manager.ts
│   │   │   ├── bundle-schema.ts
│   │   │   └── rollback-manifest.ts
│   │   └── baseline-reconciliation/ # Baseline Reconciliation Gate (§31C) — new, Revision 2, ORCH-REV-004
│   │       └── gate.ts
│   └── workflows/
│       └── architecture-workflow/   # only this one implemented in MVP
│           ├── states.ts
│           ├── roles.ts
│           └── artifacts.ts
├── config/
│   ├── workflows/architecture-workflow.yaml
│   ├── policy/allowed-paths.yaml
│   ├── policy/escalation-triggers.yaml
│   └── token-budgets.yaml
├── test/
└── docs/                            # this Orchestrator's own architecture docs, mirrored/linked from VistaRoom AI's docs/architecture/development-orchestrator/
```

**Never** create `src/orchestrator/` or any equivalent inside the VistaRoom AI product tree — this is the single most important structural rule from this handoff (main document §43, ADR Proposal #1).

## 2. Key Interfaces / Contracts (Category B provisional contracts — implement against these, do not freeze as ADRs before Phase 1/3 evidence, per `ADR-Proposal-List.md` Revision 2 / ORCH-REV-005)

```ts
// core/state-machine/contract.ts
type WorkflowState = string; // e.g. "AUTHORING" — validated against the canonical Architecture Workflow State Registry (main document §23)
interface Transition {
  from: WorkflowState;
  to: WorkflowState;
  event: string;
  guard?: (ctx: WorkflowRunContext) => boolean;
}
interface StateDefinition {
  name: WorkflowState;
  category: "normal" | "approval" | "recovery" | "terminal"; // Revision 2, ORCH-REV-006
  role: RoleName;
  entryConditions: string[];
  inputArtifactTypes: string[];
  outputArtifactTypes: string[];
  completionCriteria: string;
  allowedTransitions: Transition[];
  timeout?: string;           // Revision 2, ORCH-REV-006 — "N/A" or a concrete bound; approval states typically have none (no auto-expiry into promotion)
  retryPolicy?: RetryPolicy;
  escalationTriggers?: string[];
  terminal: boolean;          // Revision 2, ORCH-REV-006
}

// core/provider-adapters/contract.ts — Revision 2, ORCH-REV-003: model invocation ONLY, no environment/access fields here
interface ModelRequest { role: RoleName; promptPackage: PromptPackage; contextPackage: ContextPackage; }
interface ModelResponse { structuredResult: StructuredResult; usage: { inputTokens: number; outputTokens: number; costEstimate?: number }; }
interface ProviderAdapter {
  readonly providerId: string;   // "anthropic" | "openai" | "xai"
  readonly modelId: string;
  readonly supportsStructuredOutput: boolean;
  readonly maxContextTokens: number;
  readonly supportsToolCalling: boolean;
  invoke(request: ModelRequest): Promise<ModelResponse>;
}

// core/execution-connectors/contract.ts — new, Revision 2, ORCH-REV-003 (main document §16A)
type AvailabilityMode = "AUTOMATABLE" | "HUMAN_MEDIATED" | "UNAVAILABLE";
interface ExecutionCapabilities {
  tools: string[];
  allowedPaths: string[];
  localAccess: boolean;
  remoteAccess: boolean;
  gitCapabilities: { read: boolean; commit: boolean; push: boolean; merge: boolean };
  writeCapability: boolean;
  shellCapability: boolean;
  networkCapability: boolean;
  requiresHumanConfirmation: boolean;
  trustTier: "high" | "medium" | "low";
  availabilityMode: AvailabilityMode; // never claim AUTOMATABLE without a tested programmatic interface
  invocationMethod: "api" | "cli" | "desktop-workflow" | "manual-handoff" | "connector";
}
interface ExecutionConnector {
  readonly endpointId: string;               // e.g. "cowork-safe-workspace", "claude-code-local-git"
  readonly providerAdapterRef?: string;
  readonly capabilities: ExecutionCapabilities; // computed per endpoint + role + workflow state + run policy
  invokeRole(role: RoleName, promptPackage: PromptPackage, contextPackage: ContextPackage): Promise<StructuredResult>;
}

// core/context-intelligence/contract.ts
interface ContextPackage {
  taskId: string;
  mode: "efficient" | "assurance";
  sections: Array<{ sourcePath: string; sectionRef: string; content: string; trustLevel: "high" | "medium" | "low" }>;
  tokenBudget: number;
  tokensUsed: number;
  provenance: ContextManifestEntry[]; // Revision 2: each entry now also carries sourceUseMode (ORCH-REV-008) and documentSha256 (ORCH-REV-004)
}

// core/artifact-manager/contract.ts
interface Artifact {
  type: string;               // e.g. "ContextManifest", "RevisionReport", "ChangeBundle" (new, Revision 2)
  path: string;
  revision: number;
  producingState: WorkflowState;
  producingRole: RoleName;
  sourceManifestRef?: string; // required for authored content
}

// core/change-bundle/contract.ts — new, Revision 2, ORCH-REV-001 (main document §33A; full field schema in Change-Bundle-Specification.md)
interface ChangeBundleFile {
  path: string;
  operation: "CREATE" | "MODIFY" | "DELETE" | "MOVE";
  sha256: string;
  sizeBytes: number;
  mimeType: string;
}
interface ChangeBundle {
  changeSetManifestRef: string;
  files: ChangeBundleFile[];
  baseReference: string;              // real base commit, or literal "UNKNOWN" — never invented
  documentHashes: Record<string, string>; // source path -> sha256, or "UNAVAILABLE"
  allowedPaths: string[];
  forbiddenPaths: string[];
  selfCheckResults: Record<string, boolean>;
  secretScanMarker: "NOT_EXECUTED_BY_COWORK"; // Claude Code's own scan is still mandatory
  rollbackManifest: ChangeBundleFile[]; // inverse operations
}

// core/baseline-reconciliation/contract.ts — new, Revision 2, ORCH-REV-004 (main document §31C)
type BaselineReconciliationOutcome = "BASELINE_MATCH" | "NON_CONFLICTING_DRIFT" | "CONFLICTING_DRIFT" | "UNKNOWN";
interface BaselineReconciliationReport {
  outcome: BaselineReconciliationOutcome;
  evidence: string[];
  requiresNewSafeCopy: boolean; // true for CONFLICTING_DRIFT and UNKNOWN
}

// core/policy-engine/contract.ts
interface PolicyDecision { allow: boolean; reason?: string; escalate?: boolean; }
interface PolicyEngine {
  checkToolCall(action: ToolAction, ctx: WorkflowRunContext): PolicyDecision;
  checkPath(path: string, allowList: string[]): PolicyDecision;
}
```

These contracts (`StateDefinition`/`Transition`, `ProviderAdapter`, `ExecutionConnector` (new), `ContextPackage`, `ChangeBundle` (new), `BaselineReconciliationReport` (new), `Artifact`/`PolicyDecision`) are Category B **provisional** engineering contracts per `ADR-Proposal-List.md` Revision 2 (ORCH-REV-005): implement against the shapes above for Phase 1–4, but do not propose freezing these exact signatures as an ADR until real prototype evidence exists (`prototype evidence → contract refinement → optional ADR if architecture-significant`).

## 3. Build Order (matches main document §46 Phased Delivery Plan)

1. **State Machine + Workflow Engine** (no agents yet) — load `config/workflows/architecture-workflow.yaml`, validate transitions, persist run state. Test: can walk a hand-fed sequence of events through **all states declared by the canonical Architecture Workflow State Registry** (main document §23 — Revision 2, ORCH-REV-006: do not hard-code a state count here or anywhere else; count the registry's rows if a number is needed) without an agent in the loop.
2. **Artifact Manager + Audit Log + Configuration Manager** — every state transition produces an Audit Log entry; artifacts get typed, versioned paths.
3. **Policy Engine (minimal)** — Allowed Path Policy + forbidden-command list enforced on a stub Tool Dispatcher.
4. **Context Intelligence Layer** — start with Context Catalog + Metadata Index + Section Retriever only (the highest-value token-economy components); Token Budget Manager next; Cache/Freshness/Conflict Detector last within this phase.
5. **Provider Adapter Registry + Execution Connector Registry + one real model adapter** (recommend Anthropic first, since it backs three of the five roles — Cowork/Code/Project — via access-tier variants; note per §16A/§17 (Revision 2) that a `ProviderAdapter` binding alone is insufficient — an `ExecutionConnector` must also be bound, and today every recognized endpoint is honestly `HUMAN_MEDIATED`, so this phase's "first real agent call" is a human-mediated call through a tested `ProviderAdapter`, not yet an unattended one) — first real model call.
6. **Git Integration Layer + Workspace Isolation (Safe Workspace / Baseline Sync / Freshness / Secret Scanner) + Change Bundle Manager + Baseline Reconciliation Gate** — this is where Gap G1's fix lives: Safe Workspace Manager must record a real base commit hash at creation time, closing the gap this very handoff's own source package experienced. This phase also implements the Change Transfer Protocol (main document §33A) end-to-end for the first time: bundle generation, validation, baseline reconciliation, clean-worktree application.
7. **Remaining Provider Adapters (OpenAI, xAI) and their Execution Connectors** + Escalation Manager + Human Approval Gateway (including the disambiguated `PRE_PROMOTION_OWNER_APPROVAL` / `POST_PROMOTION_VERIFICATION` gates, main document §23).
8. **Full Architecture Workflow MVP acceptance run** against a real, small task, including a real Change Bundle transfer and a real Baseline Reconciliation Gate outcome.

## 4. First Vertical Slice (concrete, minimal, end-to-end)

Do not build breadth-first. The first slice that should work end-to-end, before anything else is polished:

> Owner types a one-line task → Task Specification is produced → Safe Workspace Validation confirms the configured safe copy path exists and is in-bounds → Baseline Validation records whatever is knowable (even `UNAVAILABLE`) → Context Selection produces a minimal Context Package from a hand-populated Context Catalog covering just 3–5 real VistaRoom AI documents → Claude Cowork (via the Anthropic adapter) authors a short draft → the draft and a Context Manifest are saved as Artifacts → the run reaches `ENGINEERING_REVIEW` and stops there (human reads the draft manually; ChatGPT integration not required for this slice).

This proves the State Machine, Context Intelligence Layer, Artifact Manager, and one Provider Adapter together, without needing Git integration or multi-agent review yet — those are added in the next slices, matching the build order above.

## 5. Test Strategy

- **Unit tests**: every core component in isolation (state machine transition validity, policy engine allow/deny, token budget enforcement, secret scanner pattern matching) — use Vitest, matching VistaRoom AI's own established convention (`ED-001-project-test-runner.md`), for consistency even though this is a separate codebase.
- **Contract tests**: every Provider Adapter implementation against the shared `ProviderAdapter` interface (model-invocation fields only, Revision 2); every Execution Connector implementation against the shared `ExecutionConnector` interface — capability flags must be honest, and a test must assert that a connector claiming `gitCapabilities.push: false` is never bound to the Repository Engineer role by the Agent Dispatcher, and that no connector is treated as `availabilityMode: "AUTOMATABLE"` without a corresponding passing integration test exercising its real invocation method (§16A).
- **State machine conformance tests**: replay every transition table row from main document §23 as a table-driven test; assert illegal transitions are rejected.
- **Integration tests**: full Architecture Workflow run against a disposable, throwaway safe-copy fixture (never a real safe copy) with a mocked Provider Adapter (no real API calls in CI).
- **Escalation tests**: one test per trigger in main document §27's list, asserting it actually routes to `OWNER_DECISION`.
- **Removability test (acceptance-critical, ADR Proposal #1)**: a CI job that builds/tests VistaRoom AI's product (`spaceai`) with the Orchestrator's repository entirely absent, asserting zero impact.

## 6. Technology Justification (summary; full comparison in main document §17)

- **Language/runtime: TypeScript on Node.js.** Matches VistaRoom AI's own stack (Next.js/TypeScript/strict mode) and its established test runner (Vitest, ED-001) — lowest friction for any engineer already working on this codebase, and enables sharing lightweight type definitions if ever useful (e.g., artifact/document metadata shapes). Alternative considered: Python — stronger ecosystem for some agent-orchestration tooling, but introduces a second language/runtime with zero existing precedent anywhere in this repository, complicating tooling, CI, and maintainer overlap for no offsetting benefit at this project's scale.
- **Storage: flat files (Markdown + YAML front-matter for human artifacts, JSONL for logs, YAML for config), no database.** Matches the complete absence of any DB dependency in VistaRoom AI's own `package.json` (product itself is serverless: Vercel + Upstash Redis + Vercel Blob, no SQL/NoSQL database at all). SQLite is the documented, deferred alternative (ADR Proposal #5) for the Context Catalog specifically, if/when corpus size or query complexity justifies it.
- **Execution model: sequential async state machine, no queue infrastructure in MVP.** Architecture Workflow is human-gated and low-throughput by design (bounded 3-cycle loops, mandatory escalations) — a queue/worker system would add operational complexity with no present throughput need. Upstash Redis (already used by the VistaRoom AI product) is the natural future provider-adapter choice if Development/Testing/Release Workflows eventually need real concurrency — not adopted now.
- **Config format: YAML for human-authored policy/workflow definitions, JSON/JSONL for machine logs.** Matches the shape already used in the task specification's own examples (`context_request:`, `finding:` YAML blocks).

## 7. Readiness Criteria (before this handoff is considered "done" as an implementation)

1. First vertical slice (§4) runs end-to-end against a disposable fixture.
2. All Architecture Workflow states declared by the canonical State Registry (main document §23) are implemented and conformance-tested.
3. Context Intelligence Layer demonstrably reduces tokens passed to a review-role adapter versus a naive "send the whole corpus" baseline, on a fixture corpus.
4. Secret Scanner blocks a fixture commit containing a synthetic (clearly fake, e.g., `sk-FAKE-...`) secret pattern.
5. Removability test (§5) passes.
6. Full audit trail is producible and human-readable for a complete fixture run.
7. Owner has reviewed and approved the MVP acceptance criteria (main document §45) as met.

## 8. Forbidden Operations (hard constraints on the implementer, not just the runtime)

- Never write orchestrator state/config files inside `src/**` of the VistaRoom AI product.
- Never implement a code path that commits, pushes, or merges from any component other than the Git Integration Layer, and never allow that layer to be invoked by anything claiming the Document Author role.
- Never implement a "fast path" that copies files from a safe copy into a primary repository's working tree without going through the full pipeline: `CHANGE_BUNDLE_GENERATION` → `REPOSITORY_VALIDATION` → `BASELINE_RECONCILIATION` → `REVIEW_BRANCH_CREATION` (main document §23, §33A — Revision 2, ORCH-REV-001/004).
- Never apply a Change Bundle anywhere other than a clean Git worktree/temporary clone created fresh from the real repository (main document §33A) — never directly into the primary working folder.
- Never proceed past a Baseline Reconciliation Gate outcome of `CONFLICTING_DRIFT` or `UNKNOWN` by force-applying the existing bundle — always require a fresh safe copy and a fresh review cycle (main document §31C).
- Never allow `CONTROLLED_PROMOTION` to run without a recorded, granted `PRE_PROMOTION_OWNER_APPROVAL` — this is a distinct, blocking state from `POST_PROMOTION_VERIFICATION`, and no code path may treat the latter as satisfying the former (main document §23, Revision 2, ORCH-REV-002).
- Never hard-code a vendor SDK call outside `core/provider-adapters/*-adapter.ts`; never implement environment/access logic (file/Git/shell/network capability checks) anywhere other than `core/execution-connectors/*.ts` (Revision 2, ORCH-REV-003 — keep the two concerns structurally separate).
- Never mark an `ExecutionConnector`'s `availabilityMode` as `AUTOMATABLE` without a passing, tested, unattended-invocation integration test for that specific endpoint (main document §16A).
- Never store a real secret value in any fixture, test, or log — use obviously-fake patterns only (e.g., `sk-FAKE-...`) for Secret Scanner tests.
- Never let the Token Budget Manager silently truncate content below what a role needs to avoid fabricating a fact — over-budget must always surface as a `context_request` or escalation, never silent truncation.
- Never fabricate a `document_sha256` or a base commit hash where one was not actually computed — record `UNAVAILABLE`/`UNKNOWN` instead (main document §31B, Revision 2, ORCH-REV-004).
- Never hard-code a specific Architecture Workflow state count anywhere in code, tests, or documentation — derive it from the canonical State Registry (main document §23, Revision 2, ORCH-REV-006).
- Never implement Development/Testing/Release Workflow *logic* under this handoff — MVP scope is Architecture Workflow only (main document §45; ADR Proposal #10 is a Category B item that gates when workflow-*plugin* work may start, per `ADR-Proposal-List.md`).

## 9. Security Checks (mirrors main document §37, implementation-facing)

- Static review: no vendor API key ever appears as a string literal anywhere in the Orchestrator's own source.
- Dependency review: any new npm dependency added to the Orchestrator's `package.json` should be checked for known vulnerabilities before merge (standard practice; not currently automated anywhere visible in the safe copy — see Source-Gap-Report.md G5).
- Policy Engine unit tests must cover every entry in the Allowed Path Policy and forbidden-command list from main document §37's table.
- Audit Log unit tests must confirm no unmasked secret-shaped string can reach a log entry (property-based test recommended: feed a synthetic secret through every logging call site).

## 10. Branching Strategy

- Orchestrator's own repository/directory: standard feature-branch workflow, PR review before merge to its own main — this is a separate concern from VistaRoom AI's branching strategy.
- When the Orchestrator *acts on* VistaRoom AI's repository (as a running tool, once built), it must always use the review-branch mechanism specified in main document §33–34 (`architecture/<topic>` naming convention, one dedicated branch per candidate, never direct-to-main).
- Recommend the Orchestrator's own repository adopt the same review-branch naming discipline for its own changes, for consistency, though this is not architecturally required by this package.

## 11. ADR-Blocked Items (Revision 2 — restructured per ORCH-REV-005)

**Only Category A proposals actually block starting Phase 1.** Per `ADR-Proposal-List.md` Revision 2, Category B (provisional engineering contracts) and Category C (deferred implementation choices) do **not** block implementation — they inform it. Revision 1 of this handoff incorrectly implied several Category-B-equivalent items (#6, #7, #9, #10) were hard blockers; that has been corrected.

### Category A — genuinely blocks Phase 1 (must be Owner-decided and ADR-accepted before Phase 1 begins)

| Item | Blocked by proposal |
|---|---|
| Any code path that could let a non-Repository-Engineer role reach Git, or that treats an `ExecutionConnector` as having capabilities it hasn't been granted | #3 (Multi-Agent Access Model and Trust Boundaries) |
| Any shortcut in the Safe Copy → Main promotion chain, including skipping Change Bundle validation or the Baseline Reconciliation Gate | #4 (Workspace Isolation and Change Promotion Path) |
| Writing Orchestrator state/config anywhere that could make VistaRoom AI depend on the Orchestrator at runtime | #1 (Orchestrator Removability and Non-Dependency Boundary) |

### Category B — informs implementation, does NOT block Phase 1 from starting

| Item | Informed by proposal (implement against the provisional contract in §2 above; do not wait for an ADR) |
|---|---|
| `ContextPackage` schema refinement | #2 (Context Intelligence Layer / Context Package Schema) |
| `ProviderAdapter` and `ExecutionConnector` interface refinement | #6 (expanded, Revision 2 — covers both interfaces) |
| `StateDefinition`/`Transition` schema refinement | #7 (Explicit State Machine / State Schema) |
| Safe Workspace Manager's exact creation/exclusion mechanics | #8 (Secret Handling and Safe Workspace Recreation Policy) |
| `PolicyEngine`/escalation-trigger interface refinement | #9 (Escalation and Human Approval Gateway Contract / Policy Interface) |
| Starting Development/Testing/Release Workflow **implementation** specifically (not the Architecture Workflow itself) | #10 (Plug-in Interface) — this one item genuinely gates *Development Workflow* work, but not Architecture Workflow Phase 1–5 |

### Category C — no gating at all

| Item | Proposal |
|---|---|
| Database/SQLite adoption for the Context Catalog | #5 (Context Index Storage Backing Store) — flat files are the MVP default regardless of this proposal's eventual disposition |

---

*Prepared by Claude Cowork, Document Author role, for a future Claude Code (or human engineer) implementer. This document authorizes nothing by itself — implementation begins only after `PRE_PROMOTION_OWNER_APPROVAL`-equivalent Owner approval of the architecture package (main document §23). This handoff is Draft, Proposed for Engineering Re-Review — not Approved, Accepted, or Final.*
