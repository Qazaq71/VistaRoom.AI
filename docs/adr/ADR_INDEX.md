# ADR Index — Architecture Decision Registry

This document is **not an ADR**. It is the official Architecture Decision
Registry and long-term governance layer for VisataRoom AI's AI Core. It
does not decide anything — it records where each architectural decision
lives, who owns it, how mature and how confident it is, and what future
work should check before writing a new one.

For the visual architecture map (area chain, ownership, dependency tree,
future placeholders), see [docs/adr/ADR_MAP.md](ADR_MAP.md). ADR_MAP is
pure navigation — this document (ADR_INDEX) is the governance record.

## Architecture Status

**Current value: Spatial Intelligence Foundation Complete (A2)**

Single location indicating the current architectural maturity of the
whole platform. Two milestones are complete to date — see the
[Architecture Milestones](#architecture-milestones) registry below for
both:

- **A1 — AI Core Foundation Complete** (Style Registry, Prompt Domain,
  Prompt Engine Foundation, Rule Engine, Knowledge Core, Design Domain,
  ADR Governance, Architecture Evolution Methodology) — see
  [ARCHITECTURE.md's Architecture Milestone
  A1](../ARCHITECTURE.md#architecture-milestone-a1--ai-core-foundation-complete).
- **A2 — Spatial Intelligence Foundation Complete** (Design Domain, Space
  Type, Spatial Knowledge, Spatial Governance, Boundary Invariants,
  Evolution/Reuse Strategy, Commercial-readiness foundation) — see
  [ARCHITECTURE.md's Architecture Milestone
  A2](../ARCHITECTURE.md#architecture-milestone-a2--spatial-intelligence-foundation-complete).

This is distinct from the [Final Governance
Statement](#final-governance-statement) below, which is scoped only to the
ADR system itself, not the whole platform.

## Architecture Milestones

Registry of completed and future architecture-wide maturity milestones —
distinct from individual ADRs (an ADR owns one architectural
responsibility; a milestone declares a whole layer of the platform
stable). Full narrative for each milestone lives in
[ARCHITECTURE.md](../ARCHITECTURE.md); this table is the governance
record of status, ownership, and scope, in the same spirit as the [ADR
Registry](#adr-registry) below.

| Milestone | Status | Owner | Scope | Depends On | Affects | Reference |
|---|---|---|---|---|---|---|
| A1 | Completed | Architecture | AI Core Foundation (Style Registry, Prompt Domain, Prompt Engine Foundation, Rule Engine, Knowledge Core, Design Domain, ADR Governance, Architecture Evolution Methodology) | — | Every subsequent AI Core stage, including A2 | [ARCHITECTURE.md §A1](../ARCHITECTURE.md#architecture-milestone-a1--ai-core-foundation-complete) |
| A2 | Completed | Architecture | Spatial Intelligence Foundation (Design Domain, Space Type, Spatial Knowledge, Spatial Governance, Boundary Invariants, Evolution Strategy, Reuse Strategy, Commercial-readiness foundation, Architecture documentation, Future evolution methodology) | A1 | Future Spatial modules, Prompt Integration, Room Analyzer, Knowledge evolution | [ARCHITECTURE.md §A2](../ARCHITECTURE.md#architecture-milestone-a2--spatial-intelligence-foundation-complete) |

Future milestones (`Prompt Intelligence`, `Production Intelligence`,
`Refactoring 2.0` — see [ARCHITECTURE.md's Architecture Milestone
Timeline](../ARCHITECTURE.md#architecture-milestone-timeline)) are
illustrative labels only and are not registered here until each is
actually declared complete — registering a row before completion would
turn this table into a roadmap, which it is explicitly not (same rule as
[Future ADR Backlog](#future-adr-backlog) below).

## Purpose

ADR_INDEX exists to:

- provide one navigation point for all ADRs;
- prevent duplicate ADRs;
- clarify ownership of architectural decisions;
- show protected boundaries and invariants;
- map architectural areas to decision records;
- guide whether a future change needs a new ADR or an update to an
  existing one;
- track each ADR's own evolution, confidence, and review cadence over the
  multi-year lifetime of the project.

**ADR_INDEX is not a new architectural principle. ADR_INDEX does not make
decisions. ADR_INDEX records where decisions live.**

## Core Rule

> **One architectural responsibility — one ADR.**

Each architectural responsibility must have exactly one owning ADR. If a
new decision belongs naturally to an existing ADR, the existing ADR must
be updated instead of creating a new ADR. A new ADR is allowed only when a
genuinely new architectural responsibility appears — see the [ADR Creation
Checklist](#adr-creation-checklist) below.

## Architecture Areas

Every current and future ADR belongs to **exactly one** Architecture
Area. Areas are the top-level grouping used by the [ADR
Registry](#adr-registry) (`Area` column) and the [Architecture
Dashboard](#architecture-dashboard).

| Area | Meaning | Current Owner ADR |
|---|---|---|
| **CORE** | Cross-cutting architectural principles and evolution methodology | ADR-000 |
| **PROMPT** | `PromptContext`, Prompt Domain, Prompt Engine contracts | ADR-003 |
| **SPATIAL** | Design Domain, Space Type, spatial classification | ADR-004 |
| **KNOWLEDGE** | Knowledge Core, Knowledge Registry, Feature/Entity/Relation | none yet — governed today by ADR-000 Principles 19/22 |
| **PROVIDER** | AI/model vendor integration, storage/source terminology | ADR-001 |
| **STYLE** | Style Registry, style identity (`MY_STYLE_ID`) | ADR-002 |
| **PRODUCTION** | Public site, API, `buildEditPrompt()`, production integration | none yet — Phase 9 candidate |
| **DEVELOPER** | Developer Studio (internal tooling, config, navigation) | none yet — governed today by ADR-000 Principle 2 |
| **BENCHMARK** | Benchmark tool, `BenchmarkSource`, provider comparison | none yet — governed today by ADR-001 (`BenchmarkSource`) |
| **BRIDGE-PROMPT** | Track 1 ↔ Track 2 bridge — Formatter `decisionTrace` contract (mapped to ACS-004 Prompt Intelligence) | ADR-005 |
| **BRIDGE-GENERATION** | Track 1 ↔ Track 2 bridge — Generation Intelligence `mode` contract (mapped to ACS-001 Generation Intelligence) | ADR-006 |

**Verified (Architecture Freeze Resolution R4):** every current ADR
belongs to exactly one Area — ADR-000→CORE, ADR-001→PROVIDER,
ADR-002→STYLE, ADR-003→PROMPT, ADR-004→SPATIAL, ADR-005→BRIDGE-PROMPT,
ADR-006→BRIDGE-GENERATION. No ADR claims two Areas; no Area has two
owning ADRs. `BRIDGE-PROMPT`/`BRIDGE-GENERATION` are new Areas, not
extensions of `PROMPT`/`PROVIDER` — they own a genuinely distinct
responsibility (the narrow Track1↔Track2 mapping table from Architecture
Freeze Resolution R1), not the existing Track-1-internal responsibilities
already owned by ADR-003/ADR-001. See [Governance
Health](#governance-health) for the full check.

## ADR Timeline

| ADR | Stage | Decision Area | Status |
|---|---|---|---|
| ADR-000 | DS-5.2 (+ updates through DS-7.1.1a) | Architecture Principles | Active |
| ADR-001 | DS-5 (+ updates DS-5.1/5.2) | Provider Terminology | Active |
| ADR-002 | DS-5 (+ updates DS-5.1/5.2) | MY_STYLE_ID Identifier | Active |
| ADR-003 | DS-5 (+ updates DS-5.1/5.2) | Prompt Context Contracts | Proposed |
| ADR-004 | DS-7.1.3 (+ update DS-7.1.3a) | Spatial Classification Boundary | Active |
| ADR-005 | Architecture Freeze Resolution R4 | Formatter `decisionTrace` Contract | Accepted |
| ADR-006 | Architecture Freeze Resolution R4 | Generation Intelligence Mode Contract | Accepted |
| ADR-007 | Documentation-only (2026-07-08) | StructuredScene / ProjectDesignContext Null Placeholder | Accepted |
| ADR-008 | Documentation-only (2026-07-08) | Generation Intelligence Architectural Boundaries | Accepted |
| ADR-009 | Production Integration Contract (2026-07-09) | Production Integration Contract for ADR-006 | Accepted |
| ADR-015 | Phase 3 Owner Acceptance (2026-07-22) | Multi-Image Perception Boundary | Accepted |

## ADR Registry

Full governance table. `Depends On` and `Related ADRs` are deliberately
different relationships — see [ADR Relationships](#adr-relationships).
`Tags` are free-form navigation keywords only — see [Architecture
Evolution Rules](#architecture-evolution-rules).

| ADR | Name | Area | Scope | Version | Status | Stability | Owner | Last Updated | Depends On | Related ADRs | Affects | Tags |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ADR-000](ADR-000-Architecture-Principles.md) | Architecture Principles | CORE | Architecture Principles & Evolution Methodology | 7.1 | Active | Stable | AI Core (Architecture) | DS-7.1.1a | — (root) | — | ADR-001, ADR-002, ADR-003, ADR-004; every AI Core module | Principles, Composition, Metadata, Evolution, Governance, Boundary |
| [ADR-001](ADR-001-Provider-Terminology.md) | Provider Terminology | PROVIDER | Provider Terminology | 1.2 | Active | Stable | Provider Layer / Generation Engine | DS-5.2 | ADR-000 (Principles 8, 9, 10) | ADR-002 (same terminology-discipline family) | Generation Engine, Benchmark (`BenchmarkSource`), future `AIProvider`/`StorageProvider` | Provider, Source, Terminology, Generation |
| [ADR-002](ADR-002-MyStyle-Identifier.md) | MY_STYLE_ID Identifier | STYLE | Style Identity (`MY_STYLE_ID`) | 1.2 | Active | Stable | Style Registry | DS-5.2 | ADR-000 (Principle 11) | ADR-001 (terminology-discipline family), ADR-003 (`MY_STYLE_ID` underlies `PromptGenerationMode`) | Style Registry, Prompt Domain (`PromptGenerationMode`) | Style, Identity, MagicString, Registry |
| [ADR-003](ADR-003-PromptContext-Contracts.md) | Prompt Context Contracts | PROMPT | Prompt Context Contracts | 1.2 | Proposed | Growing | Prompt Engine / Prompt Domain | DS-5.2 | ADR-000 (Principles 4, 5, 6, 7) | ADR-002 (`generationMode` options reference `MY_STYLE_ID`), ADR-004 (same `PromptContext` family, different boundary) | Prompt Domain, Prompt Engine, Generation Engine, Production Integration (future) | Prompt, Generation, Contracts, NegativePrompt |
| [ADR-004](ADR-004-Spatial-Classification-Boundary.md) | Spatial Classification Boundary | SPATIAL | Spatial Classification Boundary | 2.0 | Active | Growing | Spatial Intelligence | DS-7.1.3a | ADR-000 (Principles 10, 12, 19, 20, 21, 22) | ADR-003 (same `PromptContext` family — see ADR-004 §10) | Prompt Domain (`RoomContext`), Spatial Intelligence (`SpaceType`, DS-7.2), Prompt Integration (DS-7.4) | Spatial, Boundary, Room, Space, Composition |
| [ADR-005](ADR-005-Formatter-DecisionTrace-Contract.md) | Formatter `decisionTrace` Contract | BRIDGE-PROMPT | Formatter obligatory `decisionTrace` output + Track1↔Track2 Prompt Intelligence bridge | 1.0 | Accepted | Growing | Architecture (Prompt Intelligence / Prompt Engine, Formatter) | Architecture Freeze Resolution R4 | ADR-000 (Principles 5, 6) | ADR-003 (same Prompt Engine/Formatter family, different responsibility — decisionTrace vs. negativePrompt/generationMode) | Prompt Engine, Formatter, ACS-004 Prompt Intelligence, PCS-008 Design Reasoning | Prompt, Formatter, DecisionTrace, Bridge, Gate1 |
| [ADR-006](ADR-006-Generation-Intelligence-Mode-Contract.md) | Generation Intelligence Mode Contract | BRIDGE-GENERATION | Generation Intelligence `mode` contract (`FULL_GENERATION`/`PARTIAL_EDIT`/`INPAINTING`) + Track1↔Track2 Generation Intelligence bridge | 1.0 | Accepted | Growing | Architecture (Generation Engine / Provider Layer) | Architecture Freeze Resolution R4 | ADR-000 (Principles 7, 8) | ADR-001 (same Provider/Generation Engine family, different responsibility — terminology vs. mode contract), ADR-003 (Contract 2 names a different, non-equivalent "mode" enum — `PromptGenerationMode`, not `mode`) | Generation Engine, Provider Layer, ACS-001 Generation Intelligence, PCS-001, PCS-002 | Generation, Mode, Provider, Bridge, Gate1 |
| [ADR-007](ADR-007-StructuredScene-ProjectDesignContext-Null-Placeholder.md) | StructuredScene / ProjectDesignContext Null Placeholder | *TBD — pending owner sign-off* | `structuredScene`/`projectDesignContext` inputs to `buildPromptDraft()` passed as `null` until ACS-002/ACS-003 producers exist | 1.0 | Accepted | *TBD — pending owner sign-off* | Project Owner | 2026-07-08 | ADR-000 (root) | ADR-004 (`SpatialPromptContext` — separate model, no overlap), ADR-005 (same `buildPromptDraft()` call, different parameters — not `decisionTrace`), ADR-006 (sequencing only — ADR-006 Integration does not start before this ADR) | Prompt Intelligence (ACS-004, future null-replacement), Scene Intelligence (ACS-002, future producer), AI Orchestration (ACS-003, future producer) | Prompt, Scene, StructuredScene, ProjectDesignContext, Placeholder, Bridge, Gate1 |
| [ADR-008](ADR-008-Generation-Intelligence-Architectural-Boundaries.md) | Generation Intelligence Architectural Boundaries | *TBD — pending owner sign-off* | Architectural boundaries for ACS-001 Generation Intelligence integration (six owner questions from ED-004) — scope only, does not change ADR-006's Public Contract | 1.0 | Accepted | *TBD — pending owner sign-off* | Project Owner | 2026-07-08 | ADR-000 (root) | ADR-006 (defines the integration boundaries of this contract, does not change it), ADR-007 (sequencing — same Gate 1 chain) | Generation Engine, Provider Layer, ACS-001 Generation Intelligence | Generation, Boundary, Integration, Bridge, Gate1 |
| [ADR-009](ADR-009-Production-Integration-Contract-for-ADR-006.md) | Production Integration Contract for ADR-006 Generation Intelligence | *TBD — pending owner sign-off* | *DRAFT — pending owner sign-off:* Production integration contract resolving the five open questions from ADR-008 §6 (mode/operation fallback dispatch, sync/async reconciliation, mask invariant mechanism, qualityTier/size formalization, place of `mode === 'clear'`) — does not change ADR-006's Public Contract | 1.0 | Accepted | *TBD — pending owner sign-off* | Project Owner | 2026-07-09 | ADR-000 (root), ADR-006, ADR-008 | ADR-006, ADR-008, ED-004, ADR-003 (orthogonal, no overlap — see Related Documents) | *DRAFT — pending owner sign-off:* Generation Engine, Provider Layer, ACS-001 Generation Intelligence, Implementation Package (future) | *DRAFT — pending owner sign-off:* Generation, Integration, Production, Mode, Dispatch, Bridge, Gate1 |
| [ADR-015](ADR-015-Multi-Image-Perception-Boundary.md) | Multi-Image Perception Boundary | *TBD — pending owner sign-off* | Bounded, same-operation 1–6 `ImageAsset` capture set for producing one consolidated `StructuredScene v0` via one `PerceptionResult` — partially supersedes ADR-014 Section 5 only with respect to the historical multi-view exclusion; all other ADR-014 decisions, boundaries and exclusions remain Accepted and unchanged | 1.0 | Accepted | *TBD — pending owner sign-off* | Project Owner | 2026-07-22 | ADR-000 (root), ADR-014 (partially superseded, Section 5 multi-view exclusion only) | ADR-014 (predecessor), ADR-012 (Accepted), ADR-013 (Accepted, revalidated by this ADR — content change not required), ADR-011, ADR-010 | Perception Mechanism Selection and Evaluation Architecture Rev3 (in-place corrected, same Phase 3 package), Candidate A Bounded Scope Decision Rev5, Full-Platform Vision Architecture Rev5 | Perception, MultiImage, Boundary, ADR-014, Phase3 |

**Consistency correction (DS-7.1.3c, carried forward):** ADR-003's
`Status` is `Proposed`, not `Active` — its own file says so, and its
Decision explicitly defers implementation to DS-6+. `Active` is reserved
for ADRs whose decision is both accepted *and* currently governing real
code/documentation elsewhere, which ADR-003 has not yet reached.

## ADR History

Per-ADR evolution record. This captures **architectural** evolution (what
changed about the decision itself, and why) — it is not a substitute for
`git log`, and does not restate commit-level detail already available
there.

### ADR-000 History

| Version | Change |
|---|---|
| 1.0 | Created — Principles 1–13, top-level architectural constitution (DS-5.2) |
| 2.0 | Principles 14–16 added — Prompt Engine architecture contracts (AI-agnosticism, immutability, rule independence) (DS-6.1.1) |
| 3.0 | Principles 17–18 added — Builder/Rule Engine boundary, rule priority as metadata (DS-6.2.1) |
| 4.0 | Principle 19 added — Composition over Duplication (DS-6.4.3) |
| 4.1 | Documentation clarification — `PromptDraft` Evolution Strategy documented, no new Principle (DS-6.5.2) |
| 5.0 | Principle 20 added — Evolution over Rewrite (DS-6.5.3) |
| 6.0 | Principle 21 added — Design Domain, top spatial axis (DS-7.1) |
| 7.0 | Principle 22 added — Evolution through Composition (DS-7.1.1) |
| 7.1 | Documentation clarification — single official Decision Flow consolidated, dual ordering retired (DS-7.1.1a) |

### ADR-001 History

| Version | Change |
|---|---|
| 1.0 | Created — Provider/Source terminology direction documented, no rename (DS-5) |
| 1.1 | `BenchmarkProvider` → `BenchmarkSource` applied (zero-call-site rename) (DS-5.1) |
| 1.2 | Documentation clarification — `BenchmarkSource` given its first real import consumer, re-audited, no further rename (DS-5.2) |

### ADR-002 History

| Version | Change |
|---|---|
| 1.0 | Created — `MY_STYLE_ID` single-constant decision documented, no code change (DS-5) |
| 1.1 | `MY_STYLE_ID` applied in `styles/myStyle.ts` and `prompt-domain/types.ts` (DS-5.1) |
| 1.2 | Documentation clarification — re-audited, no further migration (DS-5.2) |

### ADR-003 History

| Version | Change |
|---|---|
| 1.0 | Created — both contracts (`negativePrompt`, `generationMode`) documented, neither implemented (DS-5) |
| 1.1 | Contract 1 type-only stub added (`negativePrompt?: string` on `GenerationRequest`/`GenerationResponse`), no logic (DS-5.1) |
| 1.2 | Documentation clarification — re-audited, no change (DS-5.2) |

### ADR-004 History

| Version | Change |
|---|---|
| 1.0 | Created — `RoomContext` ↔ `SpaceType` boundary decided ahead of DS-7.2 (DS-7.1.3) |
| 2.0 | Boundary Invariant added — the boundary declared permanent for the lifetime of the architecture (DS-7.1.3a) |

### ADR-005 History

| Version | Change |
|---|---|
| 1.0 | Created — formalizes the `decisionTrace` contract already fully specified in ACS-004, plus the R1 narrow Track1↔Track2 bridge row for Prompt Intelligence, per Architecture Freeze Resolution R4. No new decision content; no code changed (Formatter implementation remains Gate 1 / R3 work). |

### ADR-006 History

| Version | Change |
|---|---|
| 1.0 | Created — formalizes the `mode` contract (`FULL_GENERATION`/`PARTIAL_EDIT`/`INPAINTING`) already fully specified in ACS-001, plus the R1 narrow Track1↔Track2 bridge row for Generation Intelligence, per Architecture Freeze Resolution R4. No new decision content; no code changed. |

## Review Frequency

Allowed values: `Every Phase`, `Every Major Architecture Review`, `Every 6
Months`, `Every 12 Months`, `Only When Modified`.

| ADR | Review Frequency | Why |
|---|---|---|
| ADR-000 | Every 12 Months | Root constitution; changes only for genuinely new architectural concepts (ADR-000 §10) — a slow, deliberate cadence matches that. |
| ADR-001 | Only When Modified | Terminology direction is settled (Stable); nothing left to periodically re-litigate until a rename pass is actually proposed. |
| ADR-002 | Only When Modified | Single-constant decision is settled (Stable); revisit only when a new production call site is migrated. |
| ADR-003 | Every Phase | `Experimental` confidence and `Proposed` status — both open contracts must be re-checked at the start of every Prompt Engine phase (DS-6+) until resolved. |
| ADR-004 | Every Phase | In practice, every Spatial Intelligence milestone (DS-7.2 Space Type, DS-7.3 Knowledge Integration, DS-7.4 Prompt Integration) must re-check the boundary still holds before proceeding. |
| ADR-005 | Every Phase | `Accepted` status with the underlying Formatter implementation still pending (Gate 1 / R3) — must be re-checked once Gate 1 lands and again at each subsequent phase that touches Prompt Intelligence. |
| ADR-006 | Every Phase | `Accepted` status; the `mode` contract must be re-verified as each subsequent Generation Intelligence consumer (Gate 1 Formatter, Gate 5 Room Transformation, Gate 9 Quality Intelligence refinement) is implemented. |

## Decision Confidence

Allowed values: `High`, `Medium`, `Low`.

- **High** — decision repeatedly validated (applied safely across multiple
  stages with no reversal).
- **Medium** — expected to evolve (the boundary/rule is settled, but its
  concrete resolution is still being worked out).
- **Low** — reserved for genuinely speculative, not-yet-written ADRs
  (none of today's five ADRs are at this tier — a future ADR drafted for
  an area with no prior art would start here, per the [Future ADR
  Policy](#future-adr-policy)).

| ADR | Confidence | Why |
|---|---|---|
| ADR-000 | High | Principles 1–22 validated across 15+ stages with zero reversals; DS-7.1.1a's own "Architecture Maturity" section confirms this. |
| ADR-001 | High | Both applied renames (DS-5.1, DS-5.2) were safe, zero-call-site changes with no rollback. |
| ADR-002 | High | Same pattern — every partial application has held without reversal. |
| ADR-003 | Medium | Both contracts are explicitly "documented, not implemented" — the boundary between Prompt Domain and Prompt Engine is solid, but the concrete resolution is still open (matches `Growing` stability, `Proposed` status). |
| ADR-004 | High | The boundary has held since DS-7.1.3 and was reinforced (not revised) by the DS-7.1.3a Boundary Invariant — a strengthening, not a re-litigation. |
| ADR-005 | Medium | Contract itself is fully specified (ACS-004) and formally accepted, but has zero implementations yet — Formatter is Gate 1 / R3 work, not yet started. Matches `Growing` stability, same pattern as ADR-003 at its own creation. |
| ADR-006 | Medium | Contract itself is fully specified (ACS-001) and formally accepted, but the invariant (reject `FULL_GENERATION`+mask, reject `PARTIAL_EDIT`/`INPAINTING` without mask) has no contract tests yet — pending Gate 1 implementation. |

## ADR Dependency Graph

```
ADR-000
├── ADR-001  Provider Terminology
├── ADR-002  MY_STYLE_ID
├── ADR-003  Prompt Context Contracts
├── ADR-004  Spatial Classification Boundary
├── ADR-005  Formatter decisionTrace Contract
└── ADR-006  Generation Intelligence Mode Contract
```

ADR-000 is the root — it contains the global principles. ADR-001 through
ADR-004 are concrete applications of those principles, not separate rules
(each ADR's own "Status" section says this explicitly, and ADR-004 §10
repeats it for its own relation to ADR-000). See
[ADR_MAP.md](ADR_MAP.md#adr-dependency-tree) for the full dependency tree
with the reasoning for why ADR-000 stays root, and for the Area chain and
ownership map this table is a compact summary of.

## ADR Relationships

Two different relationships appear in the [ADR Registry](#adr-registry),
and they must not be confused:

| | `Depends On` | `Related ADRs` |
|---|---|---|
| **Meaning** | A hard architectural dependency | A conceptual relationship, not a dependency |
| **Effect** | Affects implementation order — the dependency must exist/hold before the dependent decision can be exercised | No effect on order — purely for a reader's navigation ("what else touches this area?") |
| **Example** | ADR-004 depends on ADR-000 (Principles 19/20/21/22 must exist for the boundary's rationale to hold) | ADR-004 relates to ADR-003 (both concern the `PromptContext` family, but neither's implementation blocks the other — ADR-004 §10 states this explicitly: "unrelated axis; no overlap" for ADR-001/002, "same `PromptContext` family" for ADR-003) |
| **Cardinality today** | Every ADR-001..006 depends on ADR-000 only | ADR-001↔ADR-002 (terminology family), ADR-002↔ADR-003 (`MY_STYLE_ID` reference), ADR-003↔ADR-004 (`PromptContext` family), ADR-003↔ADR-005 (Prompt Engine/Formatter family), ADR-001↔ADR-006 (Provider/Generation Engine family), ADR-003↔ADR-006 (both name a "mode"-shaped concept, explicitly non-equivalent) |

Neither relationship changes ownership — see [Governance
Rules](#governance-rules).

## Principle Mapping

| Principle | Meaning | Applied by ADRs |
|---|---|---|
| Principle 3 | Single Source of Truth (Style Registry) | ADR-000 |
| Principle 15 | Immutable Context (`PromptContext` never mutated) | ADR-000, ADR-003 |
| Principle 19 | Composition over Duplication | ADR-000, ADR-003, ADR-004 |
| Principle 20 | Evolution over Rewrite | ADR-000, ADR-004 |
| Principle 21 | Design Domain — spatial axis | ADR-000, ADR-004 |
| Principle 22 | Evolution through Composition | ADR-000, ADR-004 |

## Architecture Dashboard

Supersedes the DS-7.1.3c Architecture Coverage Dashboard with `Owner ADR`,
`Maturity`, and `Risk` columns.

| Area | Owner ADR | Coverage | Maturity | Risk | Future Expansion |
|---|---|---|---|---|---|
| CORE | ADR-000 | Complete | Stable | Low | New Principle only for a genuinely new architectural concept |
| PROVIDER | ADR-001 | Complete | Stable | Low | Optional future rename pass (`AIProvider` unification, Phase 10) |
| STYLE | ADR-002 | Complete | Stable | Low | Remaining production call-site migration (single pass) |
| PROMPT | ADR-003 | Complete (documented) | Growing | Medium | Contract 1/2 resolutions, DS-6+ |
| SPATIAL | ADR-004 | Complete | Growing | Medium | `SpaceType` (DS-7.2), Knowledge Integration (DS-7.3), Prompt Integration adapter (DS-7.4) |
| KNOWLEDGE | none (ADR-000 Principles 19/22) | Partial | — | Low | Dedicated ADR candidate if Knowledge Graph becomes load-bearing |
| PRODUCTION | none | Future | — | High | Production Integration ADR at Phase 9 (gates production cutover) |
| DEVELOPER | none (ADR-000 Principle 2) | Partial | — | Low | Dedicated ADR only if config/navigation grows a real invariant |
| BENCHMARK | none (ADR-001, `BenchmarkSource`) | Partial | — | Low | Dedicated ADR only if Benchmark gains its own invariant |
| BRIDGE-PROMPT | ADR-005 | Complete (documented) | Growing | Medium | Formatter implementation itself is Gate 1 / R3 (Engineering), not this Area — this Area is closed once the contract is implemented and contract-tested |
| BRIDGE-GENERATION | ADR-006 | Complete (documented) | Growing | Medium | `mode` invariant contract tests, Gate 1; possible `MULTI_STAGE` mode extension at Phase H requires a new ADR, not an extension of ADR-006 |

## Architecture Maturity

A five-level maturity model for AI Core's architecture documentation,
first introduced at DS-7.1.3c, **re-evaluated and finalized** at this
stage (DS-7.1.3d):

| Level | Name | What it means | Status |
|---|---|---|---|
| 1 | **Principles** | Named, agreed architectural rules exist (ADR-000 Principles 1–22) | ✓ Complete |
| 2 | **Boundaries** | Concrete boundaries between specific models are fixed and protected (ADR-004 `RoomContext` ↔ `SpaceType`, Prompt Domain/UI boundary) | ✓ Complete |
| 3 | **Registries** | Reusable lookup structures exist for growth-by-registration (Style Registry, Knowledge Registry, Design Domain Registry, Rule Registry) | ✓ Complete |
| 4 | **Governance** | A navigable, ownership-tracked, versioned record of every decision exists (ADR_INDEX + ADR_MAP) | ✓ Complete |
| 5 | **Evolution** | The governance model itself supports controlled, long-term change — new decisions are added *through* the model (Registry rows, History entries, Review Frequency, Confidence), not by inventing a new process each time | ✓ **Achieved (DS-7.1.3d)** |

**Level 5 — Architecture Governance achieved.** As of this stage, AI Core
has a complete Principles → Boundaries → Registries → Governance →
Evolution stack. This is not "governance exists, evolution pending" — the
governance model itself (Versioning Policy, Stability Policy, Review
Frequency, Decision Confidence, History, the Creation/Update/Decision
checklists) *is* the evolution mechanism. Future modules (Space Type, Room
Analyzer, Material Engine, Furniture Planner, Object Detection, Automatic
Masks, Production Integration, and anything not yet named) evolve **inside
this existing governance model** — they register a new ADR or extend an
existing one, following the same Registry/History/Review/Confidence
fields already defined here. No new governance mechanism is expected to be
invented for them.

## Governance Health

Concrete, checkable claims about the current state of the registry (not a
process description — a snapshot, re-verifiable any time by reading the
[ADR Registry](#adr-registry)):

- [x] **Every Area has an owner or an explicit "none yet."** All 11 Areas
      appear in [Architecture Areas](#architecture-areas) with either an
      owning ADR or a named ADR-000 principle governing it provisionally.
- [x] **Every ADR has an owner.** See `Owner` column, [ADR
      Registry](#adr-registry) — all seven populated.
- [x] **Every invariant has an owner.** See [Local Invariants
      Registry](#local-invariants-registry) — Boundary Invariant is owned
      by ADR-004; `decisionTrace` Invariant by ADR-005; `mode` Invariant by
      ADR-006.
- [x] **Every boundary has an owner.** `RoomContext` ↔ `SpaceType` →
      ADR-004; Prompt Domain data-only vs. Prompt Engine assembly →
      ADR-003/ADR-000 Principle 4; the narrow Track1↔Track2 bridge rows →
      ADR-005 (Prompt Intelligence) and ADR-006 (Generation Intelligence),
      per Architecture Freeze Resolution R1/R4.
- [x] **Every dependency is documented.** See `Depends On` column, [ADR
      Registry](#adr-registry) — every ADR-001..006 names ADR-000 and the
      specific Principles it depends on.
- [x] **No duplicate ownership.** No Area, boundary, or invariant appears
      under two different `Owner ADR` values anywhere in this document.
- [x] **No orphan ADR.** All seven ADRs (000–006) are reachable from the
      [ADR Timeline](#adr-timeline), the [ADR Registry](#adr-registry),
      and [ADR_MAP.md](ADR_MAP.md).

## Governance Rules

The compact, canonical form of [ADR Ownership
Rules](#adr-ownership-rules) below:

```
One Area        →  One Owner
One Boundary     →  One Owner
One Invariant    →  One Owner
One ADR          →  One Responsibility
```

## Decision Ownership

- **ADR-000 owns global rules.** Principles that apply to every AI Core
  module by default (Decision Flow, Evolution Axiom, general terminology
  discipline) live in ADR-000 only.
- **Feature-specific ADRs own local boundaries.** A boundary or invariant
  that protects one specific pair of models or one specific area belongs
  in the ADR that owns that area, not in ADR-000.
- **Local invariants belong inside the ADR that owns the boundary, not in
  ADR-000.** Example: the Boundary Invariant belongs inside ADR-004, not
  ADR-000. Example: Provider naming belongs inside ADR-001, not ADR-000.

## ADR Ownership Rules

Explicit governance rules, effective from DS-7.1.3c forward:

1. **Every architectural concept has one owner.** One Area (see
   [Architecture Areas](#architecture-areas)), one owning ADR.
2. **Every invariant has one owner.** See the [Local Invariants
   Registry](#local-invariants-registry) — each row names exactly one
   owning ADR.
3. **Every boundary has one owner.** A boundary between two models is
   documented in exactly one ADR (e.g. `RoomContext` ↔ `SpaceType` lives
   only in ADR-004).
4. **Two ADRs must never own the same responsibility.** If a future
   change appears to require this, it is a signal to update the existing
   owning ADR instead of creating a second one — see [ADR Decision
   Matrix](#adr-decision-matrix).

## ADR Creation Checklist

Before creating a new ADR, answer:

1. Is this a new architectural responsibility?
2. Is there already an ADR that owns this area?
3. Can the existing ADR be extended?
4. Would a new ADR duplicate an existing boundary?
5. Does the decision need a protected invariant?
6. Does the decision affect multiple modules?
7. Is this a local implementation detail rather than an architectural
   decision?

**Rule:** if an existing ADR owns the responsibility, update the existing
ADR. If the issue is a local implementation detail, do not create an ADR.
Also see the [Future ADR Policy](#future-adr-policy) — a new ADR must
populate every governance field before it can become `Active`.

## ADR Update Checklist

Before updating an existing ADR:

1. Does the update preserve the ADR's original responsibility?
2. Does it add clarity without changing scope?
3. Does it introduce a new invariant?
4. Does it conflict with ADR-000?
5. Does it require updating ADR_INDEX?
6. Does it require updating `ARCHITECTURE.md` or `AI_CORE_CHECKLIST.md`?
7. Does it require a new [ADR History](#adr-history) entry, and does that
   entry bump `Version` per the [Versioning Policy](#adr-versioning-policy)?

## ADR Decision Matrix

A compact rendering of the [Creation](#adr-creation-checklist) and
[Update](#adr-update-checklist) checklists above, for quick reference:

| Need | Decision |
|---|---|
| New invariant on an area an existing ADR already owns | **Update** the existing ADR |
| New architectural area with no owning ADR | **Create** a new ADR |
| Implementation detail (file layout, helper function, naming inside one module) | **No ADR** — document it in the module's own README instead |
| Clarification/wording/example on an existing decision | **Update** the existing ADR (minor version bump — see [Versioning Policy](#adr-versioning-policy)) |
| Boundary or ownership change | **Update** the existing ADR (major version bump), never a silent edit |

## ADR Lifecycle

```
Draft
  ↓
Accepted
  ↓
Active
  ↓
Superseded
  ↓
Archived
```

Rules:

- No ADR is deleted.
- Superseded ADRs must point to their replacement.
- Archived ADRs remain readable forever, for historical context.
- ADR_INDEX must always show current status (see [ADR
  Registry](#adr-registry) and [ADR Timeline](#adr-timeline) above).
- A new ADR may not reach `Active` until it satisfies the [Future ADR
  Policy](#future-adr-policy).

Today's snapshot: ADR-000/001/002/004 are `Active`; ADR-003 is `Proposed`
(has not yet reached `Accepted`, since its Decision explicitly defers
implementation choice to DS-6+); ADR-005/006 are `Accepted` (the contracts
are settled and formally recorded per Architecture Freeze Resolution R4,
but neither yet governs real, contract-tested code — Formatter
implementation is Gate 1 / R3, and the `mode` invariant has no tests yet —
so neither has reached `Active`). No ADR is `Superseded` or `Archived`
yet.

## ADR Versioning Policy

No semantic versioning is required — a simple `major.minor` integer pair
is enough.

- **Minor version** — documentation clarification, examples, checklists,
  non-functional wording. Does not change what the ADR decides.
- **Major version** — architectural decision changes, a new invariant, an
  ownership change, or a boundary change. Changes what the ADR actually
  governs.

The `major.minor` numbers in the [ADR Registry](#adr-registry) are the
running total; the reasoning for each individual bump is recorded per-ADR
in [ADR History](#adr-history) above (retroactively derived from each
ADR's own "Update" sections — the number is not stored in the ADR files
themselves).

## ADR Stability Policy

| Stability | Meaning | Criteria |
|---|---|---|
| **Stable** | Decision is settled; future work is expected to comply, not renegotiate | No open questions in the ADR's own Decision/Consequences section; no dependent stage is still deciding how to apply it |
| **Growing** | Decision is settled in principle, but its concrete surface is still expanding as dependent stages land | The ADR names future stages that will extend it (e.g. new invariants, new mappings) without changing what's already decided |
| **Experimental** | Decision is provisional, pending a concrete implementation choice | The ADR's own Status is `Proposed`, or its Decision section defers a choice to a later stage |
| **Deprecated** | Decision has been superseded but is kept for historical reference | Reserved for a future `Superseded`/`Archived` ADR — not used by any ADR today |

Applied:

- **ADR-000 → Stable.** Confirmed stable by its own DS-7.1.1a "Architecture
  Maturity" section; Principles 1–22 are settled, only new *modules* are
  expected, not new *methodology*.
- **ADR-001 → Stable.** The Provider/Source terminology rule itself is
  settled; only the (optional, unscheduled) renaming pass remains, which
  does not change the rule.
- **ADR-002 → Stable.** `MY_STYLE_ID` as the single source of truth is
  settled; only remaining production call-site migrations are pending,
  which do not change the decision.
- **ADR-003 → Growing.** Note: `Status` is `Proposed` and `Confidence` is
  `Medium` (see above) — the boundary between Prompt Domain and Prompt
  Engine is not in question, but both contracts are still open. Tracked
  here as `Growing` rather than `Experimental` because the *shape* of the
  decision (two named, documented contracts) is settled; only their
  *resolution* is pending.
- **ADR-004 → Growing.** The boundary and its invariant are settled, but
  DS-7.2 (`SpaceType`), DS-7.3 (Knowledge Integration), and DS-7.4 (the
  Adapter/Mapping) will all extend how this ADR is exercised in practice.
- **ADR-005 → Growing.** The `decisionTrace` contract itself is settled
  (documented, accepted, not in question) — but Formatter has zero
  implementation yet (Gate 1 / R3), so the *shape* is fixed while its
  *exercise in practice* is still ahead. Same reasoning pattern ADR-003
  used at its own creation.
- **ADR-006 → Growing.** The `mode` contract and its invariant are
  settled, but no contract tests exist yet, and future consumers (Gate 1
  Formatter output feeding `generate()`, Gate 5 Room Transformation, Gate 9
  Quality Intelligence refinement calls) will all extend how this ADR is
  exercised.

## Local Invariants Registry

| Invariant | Owning ADR | Protected Boundary | Description |
|---|---|---|---|
| Boundary Invariant | ADR-004 | `RoomContext` ↔ `SpaceType` | Prevents `RoomContext` and `SpaceType` from collapsing into one model; only an explicit Adapter/Mapping connects them. |
| `decisionTrace` Invariant | ADR-005 | Formatter output (`promptString` + `decisionTrace`) | Formatter must never omit `decisionTrace`, and must never fabricate a `sourceRule` — an element with no source must be recorded as `sourceRule: null`, never a plausible guess. |
| `mode` Invariant | ADR-006 | Generation Intelligence `generate()` input (`mode` ↔ `maskRegion`) | Generation Intelligence must reject any call where `mode = FULL_GENERATION` carries a `maskRegion`, or where `mode = PARTIAL_EDIT`/`INPAINTING` lacks one — enforced by contract tests, never left to caller discipline. |
| Future invariants | TBD | TBD | TBD |

## ADR Health Checklist

For every ADR, ask:

1. Has an owner? (see [ADR Registry](#adr-registry) `Owner` column)
2. Has an invariant? (or explicitly has none yet)
3. Has a boundary? (or explicitly has none — e.g. ADR-001/002 are
   terminology decisions, not model boundaries)
4. Has examples? (good/bad, allowed/forbidden)
5. Has update history? (an [ADR History](#adr-history) table, plus the
   ADR's own "Update — DS-x.y" sections)
6. Has a stated relationship to ADR-000?
7. Has a documented future evolution path?
8. Has a Review Frequency and Decision Confidence assigned? *(added
   DS-7.1.3d)*

Current snapshot:

| ADR | Owner | Invariant | Boundary | Examples | History | Relation to ADR-000 | Future evolution | Review/Confidence |
|---|---|---|---|---|---|---|---|---|
| ADR-000 | ✓ | — (defines invariants for others) | — (defines boundaries for others) | ✓ | ✓ (9 entries) | — (is the root) | ✓ (§10/§11, DS-7.1.1a) | ✓ 12mo / High |
| ADR-001 | ✓ | — (terminology decision, no model boundary) | — | ✓ (table) | ✓ (3 entries) | ✓ | ✓ (Phase 10 renaming pass) | ✓ On-modify / High |
| ADR-002 | ✓ | — (single-constant decision, no model boundary) | — | ✓ | ✓ (3 entries) | ✓ | ✓ (production migration, one pass) | ✓ On-modify / High |
| ADR-003 | ✓ | — (none yet — deferred to DS-6+) | ✓ (Prompt Domain data-only vs Prompt Engine assembly) | ✓ | ✓ (3 entries) | ✓ | ✓ (two open contract options each) | ✓ Every Phase / Medium |
| ADR-004 | ✓ | ✓ (Boundary Invariant) | ✓ (`RoomContext` ↔ `SpaceType`) | ✓ | ✓ (2 entries) | ✓ | ✓ (§8 Future Evolution) | ✓ Every Phase / High |
| ADR-005 | ✓ | ✓ (`decisionTrace` Invariant) | ✓ (Track1↔Track2 Prompt Intelligence bridge row, R1) | ✓ | ✓ (1 entry) | ✓ (Principles 5, 6) | ✓ (Gate 1 Formatter implementation, R3) | ✓ Every Phase / Medium |
| ADR-006 | ✓ | ✓ (`mode` Invariant) | ✓ (Track1↔Track2 Generation Intelligence bridge row, R1) | ✓ | ✓ (1 entry) | ✓ (Principles 7, 8) | ✓ (Gate 1 contract tests, future `MULTI_STAGE` mode via new ADR) | ✓ Every Phase / Medium |

## Architecture Drift Prevention

ADR_INDEX prevents:

- duplicate ADRs;
- conflicting decisions;
- hidden ownership;
- forgotten invariants;
- undocumented boundaries;
- uncontrolled ADR growth.

### Architecture Drift Detection

Symptoms that indicate drift has already started, to watch for during
review:

- **Duplicate ADR** — two ADR files describing the same responsibility.
- **Multiple owners** — an Area or invariant with more than one ADR
  claiming it in the [ADR Registry](#adr-registry).
- **Conflicting terminology** — the same word used for two concepts
  across different ADRs (the exact failure mode ADR-001/ADR-000 Principle
  10 exist to prevent).
- **Hidden boundary** — a boundary enforced in code or a README that has
  no corresponding entry in the [Local Invariants
  Registry](#local-invariants-registry).
- **Missing invariant** — a protected boundary mentioned in prose but
  never written down as a named invariant with an owning ADR.
- **Undocumented evolution** — a module changed shape without an
  "Update — DS-x.y" section, or without a matching [ADR
  History](#adr-history) entry, recording why.

## ADR Navigation Rule / Architecture Review Workflow

For any architectural change:

```
Need architectural change
        ↓
Check ADR_INDEX
        ↓
Locate owner ADR
        ↓
Existing ADR owns it?
   │YES              │NO
   ↓                 ↓
Update it      Decide if a new ADR is
   │           justified (Creation Checklist)
   │                 ↓
   │           Register in ADR_INDEX
   │           (Future ADR Policy fields)
   ↓                 ↓
Update ADR_MAP.md if the map changed
        ↓
Update ARCHITECTURE.md / AI_CORE_CHECKLIST.md if affected
```

This is the same rule stated twice for two audiences: the short form
(check → locate → update-or-create → register) for quick reference, and
the flow above for a first-time reader working through an actual change.

## Future ADR Backlog

Planning only. No decisions are made here. Extends the DS-7.1.3b backlog
with `Area`, `Dependencies`, and `Blocking ADR` columns.

| Future ADR Candidate | Area | Priority | Dependencies | Expected Phase | Blocking ADR | Status |
|---|---|---|---|---|---|---|
| Space Type Foundation | SPATIAL | High | ADR-004 (boundary must hold) | DS-7.2 | ADR-004 | Candidate |
| Room Analyzer | SPATIAL / KNOWLEDGE | Medium | Space Type Foundation | Phase 8 | Space Type Foundation (candidate) | Candidate |
| Material Engine | KNOWLEDGE | Medium | Knowledge Core stable shape | Phase 8 | none | Candidate |
| Furniture Planner | KNOWLEDGE | Medium | Knowledge Core, Space Type | Phase 8 | Space Type Foundation (candidate) | Candidate |
| Object Detection | SPATIAL | Medium | Room Analyzer | Phase 8 | Room Analyzer (candidate) | Candidate |
| Automatic Masks | SPATIAL | Low | Object Detection | Phase 8 | Object Detection (candidate) | Candidate |
| Production Integration | PRODUCTION | High | ADR-003 (contracts resolved) | Phase 9 | ADR-003 | Candidate |
| Provider Unification | PROVIDER | Low | ADR-001 (direction already set) | Refactoring 2.0 | none | Candidate |
| Knowledge Graph | KNOWLEDGE | Low | Knowledge Core | Future | none | Candidate |
| Rendering Pipeline | PRODUCTION | Low | Production Integration | Future | Production Integration (candidate) | Candidate |

## Future ADR Policy

A new ADR **must** define all of the following before it can move past
`Draft`/`Proposed` into `Active`:

- Area (exactly one — see [Architecture Areas](#architecture-areas))
- Owner
- Boundary (or an explicit statement that this ADR is terminology/process,
  not a model boundary — as ADR-001/002 already do)
- Scope
- Version (starting at `1.0` — see [Versioning
  Policy](#adr-versioning-policy))
- Confidence (starting at `Medium` or `Low` — see [Decision
  Confidence](#decision-confidence); a brand-new ADR does not start at
  `High`)
- Review Frequency (see [Review Frequency](#review-frequency))
- History (at minimum, a `1.0 — Created` entry)
- Tags
- Related ADRs (or explicitly "none yet")

This is enforced by review, not by tooling — same as every other rule in
this document (see ADR-000 Consequences).

## Architecture Evolution Rules

How the per-ADR governance fields relate to each other, so they are never
conflated:

- **History tracks architectural evolution** — what changed about the
  decision, in order, across stages.
- **Version tracks architectural revision** — the `major.minor` number
  that results from History (see [Versioning
  Policy](#adr-versioning-policy)).
- **Confidence tracks architectural certainty** — how validated vs. how
  provisional the decision currently is (see [Decision
  Confidence](#decision-confidence)).
- **Review Frequency tracks governance cadence** — how often the decision
  must be re-checked, independent of whether it has actually changed (see
  [Review Frequency](#review-frequency)).
- **Tags improve discoverability only** — free-form keywords for
  searching the Registry; they carry no ownership meaning.
- **Related ADRs improve navigation only** — see [ADR
  Relationships](#adr-relationships); they do not affect implementation
  order the way `Depends On` does.

**None of History, Version, Confidence, Review Frequency, Tags, or Related
ADRs changes ownership.** Ownership is governed exclusively by [Governance
Rules](#governance-rules) and the `Owner`/`Area` columns of the [ADR
Registry](#adr-registry).

## Cross Reference Rules

Each document below has exactly one job. No document duplicates another's
full content — they link and summarize instead.

| Document | Job | Not its job |
|---|---|---|
| [ADR_INDEX.md](ADR_INDEX.md) (this file) | Ownership, governance, versioning, history, confidence, review cadence, lifecycle, navigation | Does not restate full ADR text; does not draw the visual map |
| [ADR_MAP.md](ADR_MAP.md) | Visual navigation only | Does not decide anything; does not track version/status/ownership metadata |
| [ARCHITECTURE.md](../ARCHITECTURE.md) | System structure and stage history overview | Does not restate ADR decisions or the full index |
| Individual ADR (`ADR-0xx-*.md`) | The actual decision, its context, and its consequences | Does not track cross-ADR ownership or the backlog |
| [AI_CORE_CHECKLIST.md](../AI_CORE_CHECKLIST.md) | Verification — pre-flight checks before a stage starts | Does not decide or narrate; only checks |

## Relationship to ARCHITECTURE.md

`ARCHITECTURE.md` describes system structure. ADR files explain *why* key
decisions were made. ADR_INDEX shows *where* each decision lives and how
it is governed. `AI_CORE_CHECKLIST.md` verifies that decisions remain
true. These documents must not duplicate each other's full content — they
link and summarize.

## Relationship to AI_CORE_CHECKLIST.md

`AI_CORE_CHECKLIST.md` is not a design document — it is a verification
tool. When a new ADR introduces a protected boundary, `AI_CORE_CHECKLIST`
should receive concrete checks. Example: ADR-004 introduced the
`RoomContext` ↔ `SpaceType` boundary; `AI_CORE_CHECKLIST` added checks for
no direct import / no direct mutation between the two. As of DS-7.1.3d,
`AI_CORE_CHECKLIST` also checks that Review Frequency, Decision
Confidence, History, and Tags stay current, and that ADR_MAP and the
Architecture Dashboard are kept in sync — see that document.

## Architecture Glossary

| Term | Definition |
|---|---|
| **Principle** | A numbered, general rule in ADR-000 that applies to every AI Core module by default (e.g. Principle 19, Composition over Duplication). |
| **ADR** | Architecture Decision Record — a single document recording one architectural responsibility: its context, decision, and consequences. |
| **Boundary** | The documented line between two models or layers that must never collapse into each other (e.g. `RoomContext` ↔ `SpaceType`, ADR-004). |
| **Invariant** | A boundary or rule declared permanent for the lifetime of the architecture — protected against gradual erosion by small, individually-reasonable changes. |
| **Registry** | A plain, typed lookup structure that organizes reusable instances of a model (Style Registry, Knowledge Registry, Design Domain Registry, Rule Registry). |
| **Composition** | Building a new, larger structure out of existing models, each keeping its own identity (ADR-000 Principle 19; e.g. `PromptContext` composed of sub-contexts). |
| **Metadata** | A field on an existing model reserved for extending that model without changing its top-level shape (e.g. `DesignDomain.metadata`). |
| **Evolution** | How the architecture is allowed to change over time — incrementally, alongside what exists, not by disruptive rewrite (ADR-000 Principle 20). |
| **Architecture Area** (**Area**) | One of the nine top-level groupings (CORE, PROMPT, SPATIAL, KNOWLEDGE, PROVIDER, STYLE, PRODUCTION, DEVELOPER, BENCHMARK) every ADR belongs to exactly one of. |
| **Scope** | The concrete responsibility an ADR covers, narrower than its Area (e.g. Area `PROMPT`, Scope "Prompt Context Contracts"). |
| **Owner** | The module or team responsible for an ADR's decision in practice (e.g. "Spatial Intelligence" owns ADR-004) — distinct from `Area`, which is the documentation grouping. |
| **Ownership** | The rule that exactly one ADR is responsible for a given Area, boundary, or invariant — see [Governance Rules](#governance-rules). |
| **Dependency** (`Depends On`) | A hard architectural dependency that affects implementation order — see [ADR Relationships](#adr-relationships). |
| **Relationship** (`Related ADRs`) | A conceptual link between two ADRs that does not affect implementation order — navigation only, see [ADR Relationships](#adr-relationships). |
| **Confidence** | How validated vs. provisional a decision currently is — `High`/`Medium`/`Low`, see [Decision Confidence](#decision-confidence). |
| **Review Frequency** | How often an ADR must be re-checked regardless of whether it changed — see [Review Frequency](#review-frequency). |
| **History** | The per-ADR, per-version record of what changed about a decision and why — see [ADR History](#adr-history). |
| **Governance** | The overall system (this document + ADR_MAP + the checklists) that tracks ownership, versioning, confidence, and cadence for every architectural decision. |
| **Stability** | How settled an ADR's decision is — `Stable`, `Growing`, `Experimental`, or `Deprecated`; see [ADR Stability Policy](#adr-stability-policy). |
| **Lifecycle** | The status progression an ADR moves through — `Draft → Accepted → Active → Superseded → Archived`; see [ADR Lifecycle](#adr-lifecycle). |

## Architecture Navigation Guide

The default flow for "I need to change X":

```
I need to change X
        ↓
Read ARCHITECTURE.md (what stage/phase is X part of?)
        ↓
Open ADR_INDEX.md (which ADR owns X's Area?)
        ↓
Open the owning ADR (what does it actually decide, and why?)
        ↓
Modify the ADR (per the Update Checklist) — or create one (per the Creation Checklist / Future ADR Policy)
        ↓
Update ADR_INDEX.md (Registry, History, Version, Confidence), and ADR_MAP.md if the map changed
        ↓
Update AI_CORE_CHECKLIST.md if a new boundary/invariant/governance field was added
```

## ADR Maintenance Rules

ADR_INDEX must be updated whenever:

- a new ADR is created;
- an ADR status, version, or stability changes;
- a protected invariant is added;
- an ADR ownership boundary changes;
- a future ADR candidate becomes active;
- an ADR is superseded or archived;
- an ADR's History gains a new entry (version bump);
- an ADR's Confidence or Review Frequency changes;
- Tags or Related ADRs need updating for discoverability;
- `ADR_MAP.md`'s visual map changes shape (new Area, new future
  placeholder, new relationship).

## Final Consistency Review (DS-7.1.3d)

Verified across `ADR_INDEX.md`, `ADR_MAP.md`, ADR-000/001/002/003/004,
`ARCHITECTURE.md`, and `AI_CORE_CHECKLIST.md`:

- [x] Every ADR has `Version`, `Status`, `Stability`, `History`,
      `Confidence`, `Review Frequency`, `Owner`, `Area`, `Scope`,
      `Depends On`, `Related ADRs`, and `Tags` populated — see the [ADR
      Registry](#adr-registry), [ADR History](#adr-history), [Review
      Frequency](#review-frequency), and [Decision
      Confidence](#decision-confidence) tables above.
- [x] No duplicate ownership — confirmed in [Governance
      Health](#governance-health).
- [x] No duplicate Areas — confirmed in [Architecture
      Areas](#architecture-areas) ("Verified" note).
- [x] No conflicting relationships — `Depends On` and `Related ADRs` for
      every ADR match what that ADR's own text says about the others
      (ADR-004 §10's own relationship table was used as the source for
      ADR-004's `Related ADRs` entry, not invented independently).

No inconsistency was found beyond the one already corrected at DS-7.1.3c
(ADR-003's status).

## Final Governance Statement

**The ADR system is considered architecturally complete as of DS-7.1.3d.**
Future work on it consists only of:

- adding new ADRs (per the [Future ADR Policy](#future-adr-policy)),
- updating existing ADRs (per the [ADR Update
  Checklist](#adr-update-checklist)),
- or extending this governance registry (new Registry rows, History
  entries, Tags, Related ADRs),

**without changing the governance model itself** — the Registry shape,
the Versioning/Stability/Confidence/Review Frequency policies, the
Ownership/Governance Rules, and the Creation/Update/Decision checklists
are the stable substrate every future architectural decision is expected
to fit into.
