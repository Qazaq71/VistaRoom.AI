# ADR Index — Architecture Decision Registry

This document is **not an ADR**. It is the official Architecture Decision
Registry and governance layer for VisataRoom AI's AI Core. It does not
decide anything — it records where each architectural decision lives, who
owns it, how mature it is, and what future work should check before
writing a new one.

For the visual architecture map (relationships, future placeholders, the
Ownership Map, the Dependency Tree), see
[docs/adr/ADR_MAP.md](ADR_MAP.md). ADR_MAP is pure navigation — this
document (ADR_INDEX) is the governance record.

## Purpose

ADR_INDEX exists to:

- provide one navigation point for all ADRs;
- prevent duplicate ADRs;
- clarify ownership of architectural decisions;
- show protected boundaries and invariants;
- map architectural areas to decision records;
- guide whether a future change needs a new ADR or an update to an
  existing one.

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
Registry](#adr-registry) (`Area` column) and the [Architecture Coverage
Dashboard](#architecture-coverage-dashboard).

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

A new ADR must declare its Area in the [ADR Registry](#adr-registry) at
the moment it is registered (see [ADR Creation
Checklist](#adr-creation-checklist)). Two ADRs must never claim ownership
of the same Area for the same responsibility (see [ADR Ownership
Rules](#adr-ownership-rules)).

## ADR Timeline

| ADR | Stage | Decision Area | Status |
|---|---|---|---|
| ADR-000 | DS-5.2 (+ updates through DS-7.1.1a) | Architecture Principles | Active |
| ADR-001 | DS-5 (+ updates DS-5.1/5.2) | Provider Terminology | Active |
| ADR-002 | DS-5 (+ updates DS-5.1/5.2) | MY_STYLE_ID Identifier | Active |
| ADR-003 | DS-5 (+ updates DS-5.1/5.2) | Prompt Context Contracts | Proposed |
| ADR-004 | DS-7.1.3 (+ update DS-7.1.3a) | Spatial Classification Boundary | Active |

## ADR Registry

Full governance table. See [ADR Versioning
Policy](#adr-versioning-policy) for how `Version` is derived and [ADR
Stability Policy](#adr-stability-policy) for how `Stability` is assigned.

| ADR | Name | Area | Scope | Version | Status | Stability | Owner | Last Updated | Depends On | Affects |
|---|---|---|---|---|---|---|---|---|---|---|
| [ADR-000](ADR-000-Architecture-Principles.md) | Architecture Principles | CORE | Architecture Principles & Evolution Methodology | 7.1 | Active | Stable | AI Core (Architecture) | DS-7.1.1a | — (root) | ADR-001, ADR-002, ADR-003, ADR-004; every AI Core module |
| [ADR-001](ADR-001-Provider-Terminology.md) | Provider Terminology | PROVIDER | Provider Terminology | 1.2 | Active | Stable | Provider Layer / Generation Engine | DS-5.2 | ADR-000 (Principles 8, 9, 10) | Generation Engine, Benchmark (`BenchmarkSource`), future `AIProvider`/`StorageProvider` |
| [ADR-002](ADR-002-MyStyle-Identifier.md) | MY_STYLE_ID Identifier | STYLE | Style Identity (`MY_STYLE_ID`) | 1.2 | Active | Stable | Style Registry | DS-5.2 | ADR-000 (Principle 11) | Style Registry, Prompt Domain (`PromptGenerationMode`) |
| [ADR-003](ADR-003-PromptContext-Contracts.md) | Prompt Context Contracts | PROMPT | Prompt Context Contracts | 1.2 | Proposed | Growing | Prompt Engine / Prompt Domain | DS-5.2 | ADR-000 (Principles 4, 5, 6, 7) | Prompt Domain, Prompt Engine, Generation Engine, Production Integration (future) |
| [ADR-004](ADR-004-Spatial-Classification-Boundary.md) | Spatial Classification Boundary | SPATIAL | Spatial Classification Boundary | 2.0 | Active | Growing | Spatial Intelligence | DS-7.1.3a | ADR-000 (Principles 10, 12, 19, 20, 21, 22) | Prompt Domain (`RoomContext`), Spatial Intelligence (`SpaceType`, DS-7.2), Prompt Integration (DS-7.4) |

**Consistency correction (DS-7.1.3c):** ADR-003's `Status` is corrected to
**Proposed** here (it was listed as `Active` in the DS-7.1.3b registry).
ADR-003's own file states "Status: Proposed" and its Decision section is
explicit that both contracts are "documented, not implemented" — DS-6 (or
later) must still pick and implement a resolution. `Active` in this table
is reserved for ADRs whose decision is both accepted *and* currently
governing real code/documentation elsewhere (as ADR-000/001/002/004 all
are). ADR-003 has not cleared that bar yet.

## ADR Dependency Graph

```
ADR-000
├── ADR-001  Provider Terminology
├── ADR-002  MY_STYLE_ID
├── ADR-003  Prompt Context Contracts
└── ADR-004  Spatial Classification Boundary
```

ADR-000 is the root — it contains the global principles. ADR-001 through
ADR-004 are concrete applications of those principles, not separate rules
(each ADR's own "Status" section says this explicitly, and ADR-004 §10
repeats it for its own relation to ADR-000). See
[ADR_MAP.md](ADR_MAP.md#adr-dependency-tree) for the full dependency tree
with the reasoning for why ADR-000 stays root, and for the visual
architecture map this table is a compact summary of.

## Principle Mapping

| Principle | Meaning | Applied by ADRs |
|---|---|---|
| Principle 3 | Single Source of Truth (Style Registry) | ADR-000 |
| Principle 15 | Immutable Context (`PromptContext` never mutated) | ADR-000, ADR-003 |
| Principle 19 | Composition over Duplication | ADR-000, ADR-003, ADR-004 |
| Principle 20 | Evolution over Rewrite | ADR-000, ADR-004 |
| Principle 21 | Design Domain — spatial axis | ADR-000, ADR-004 |
| Principle 22 | Evolution through Composition | ADR-000, ADR-004 |

## Architecture Coverage Dashboard

Extends the DS-7.1.3b Architecture Coverage Matrix with `Owner`,
`Missing`, and `Priority` columns.

| Area | Coverage | Owner | Missing | Priority |
|---|---|---|---|---|
| Architecture Principles | Complete | ADR-000 | — | — |
| Provider Terminology | Complete | ADR-001 | — | — |
| MY_STYLE_ID | Complete | ADR-002 | — | — |
| Prompt Contracts | Complete (documented) | ADR-003 | Implementation decision (DS-6+) | Medium |
| Spatial Classification | Complete | ADR-004 | — | — |
| Style Registry | Partial | ADR-000 (Principle 3) | Dedicated ADR if it outgrows Principle 3 | Low |
| Knowledge Core | Partial | ADR-000 (Principles 19, 22) | Dedicated ADR if Knowledge Graph becomes load-bearing | Low |
| Prompt Engine | Partial | ADR-003 + ADR-000 (Principles 14, 15) | Formatter/Rule Engine implementation decisions | Medium |
| Design Domain | Partial (covered by principle) | ADR-000 (Principle 21) | Dedicated ADR if Design Domain outgrows Principle 21 | Low |
| Space Type | Planned | Future ADR or ADR-004 extension | New ADR/extension once DS-7.2 scope is known | High (blocks DS-7.2) |
| Room Analyzer | Future | Not yet defined | New ADR at Phase 8 | Medium |
| Material Engine | Future | Not yet defined | New ADR at Phase 8 | Medium |
| Furniture Planner | Future | Not yet defined | New ADR at Phase 8 | Medium |
| Object Detection | Future | Not yet defined | New ADR at Phase 8 | Medium |
| Automatic Masks | Future | Not yet defined | New ADR at Phase 8 | Low |
| Production Integration | Future | Not yet defined | New ADR at Phase 9 | High (gates production cutover) |
| Refactoring 2.0 / Provider Unification | Future | Not yet defined | New ADR at Refactoring 2.0 | Low |
| Developer Studio | Partial | ADR-000 (Principle 2) | Dedicated ADR if config/navigation grows complex | Low |
| Benchmark | Partial | ADR-001 (`BenchmarkSource`) | Dedicated ADR if Benchmark gains its own invariants | Low |

## Architecture Maturity

A five-level maturity model for AI Core's architecture documentation,
introduced at this stage (DS-7.1.3c) to make "how mature is this
architecture, really?" answerable at a glance:

| Level | Name | What it means | Status |
|---|---|---|---|
| 1 | **Principles** | Named, agreed architectural rules exist (ADR-000 Principles 1–22) | ✓ Complete |
| 2 | **Boundaries** | Concrete boundaries between specific models are fixed and protected (ADR-004 `RoomContext` ↔ `SpaceType`, Prompt Domain/UI boundary) | ✓ Complete |
| 3 | **Registries** | Reusable lookup structures exist for growth-by-registration (Style Registry, Knowledge Registry, Design Domain Registry, Rule Registry) | ✓ Complete |
| 4 | **Governance** | A navigable, ownership-tracked, versioned record of every decision exists (ADR_INDEX + ADR_MAP, this stage) | ✓ Complete as of DS-7.1.3c |
| 5 | **Evolution** | Governance is enforced automatically, not just documented (tooling/lint checks, automated drift detection) | ○ In progress — Decision Flow and Evolution Axiom (ADR-000 Principle 22) are documented; no automated enforcement exists yet (see ADR-000 Consequences) |

**Current overall maturity: Level 4 (Governance), with Level 5 (Evolution)
partially started.** This mirrors, and does not contradict, ADR-000's own
DS-7.1.1a "Architecture Maturity" note (stable principles/methodology) —
that note graded the *principles*; this model grades the *whole
documentation system* they live in.

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

Explicit governance rules, effective from this stage forward:

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

## ADR Update Checklist

Before updating an existing ADR:

1. Does the update preserve the ADR's original responsibility?
2. Does it add clarity without changing scope?
3. Does it introduce a new invariant?
4. Does it conflict with ADR-000?
5. Does it require updating ADR_INDEX?
6. Does it require updating `ARCHITECTURE.md` or `AI_CORE_CHECKLIST.md`?

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

Today's snapshot: ADR-000/001/002/004 are `Active`; ADR-003 is `Proposed`
(has not yet reached `Accepted`, since its Decision explicitly defers
implementation choice to DS-6+). No ADR is `Superseded` or `Archived` yet.

## ADR Versioning Policy

No semantic versioning is required — a simple `major.minor` integer pair
is enough.

- **Minor version** — documentation clarification, examples, checklists,
  non-functional wording. Does not change what the ADR decides.
- **Major version** — architectural decision changes, a new invariant, an
  ownership change, or a boundary change. Changes what the ADR actually
  governs.

Applied to today's ADRs (derived retroactively from each ADR's own
"Update" history — the `major.minor` numbers above in the [ADR
Registry](#adr-registry) are the artifact of this policy, not a value
stored in the ADR files themselves):

| ADR | Version | Reasoning |
|---|---|---|
| ADR-000 | 7.1 | Base (Principles 1–13) = 1.0; each of DS-6.1.1, DS-6.2.1, DS-6.4.3, DS-6.5.3, DS-7.1, DS-7.1.1 introduced a new Principle (new invariant) = major bump each (→7.0); DS-6.5.2 and DS-7.1.1a were clarifications/consolidations with no new Principle number = minor bumps (→7.1) |
| ADR-001 | 1.2 | Base Decision = 1.0; DS-5.1 applied the already-decided rename (`BenchmarkProvider→BenchmarkSource`) = minor (1.1); DS-5.2 re-audit, no rename = minor (1.2) |
| ADR-002 | 1.2 | Base Decision = 1.0; DS-5.1 applied the constant to two domain files = minor (1.1); DS-5.2 re-audit, no change = minor (1.2) |
| ADR-003 | 1.2 | Base Decision (both contracts documented, neither implemented) = 1.0; DS-5.1 added a type-only stub (no logic) = minor (1.1); DS-5.2 re-audit, no change = minor (1.2) |
| ADR-004 | 2.0 | Base Decision (boundary fixed) = 1.0; DS-7.1.3a added the **Boundary Invariant** section = a genuinely new invariant = major bump (2.0) |

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
- **ADR-003 → Experimental.** Status is `Proposed`; both contracts are
  explicitly "documented, not implemented," with the resolution left open
  for DS-6+.
- **ADR-004 → Growing.** The boundary and its invariant are settled, but
  DS-7.2 (`SpaceType`), DS-7.3 (Knowledge Integration), and DS-7.4 (the
  Adapter/Mapping) will all extend how this ADR is exercised in practice.

## Local Invariants Registry

| Invariant | Owning ADR | Protected Boundary | Description |
|---|---|---|---|
| Boundary Invariant | ADR-004 | `RoomContext` ↔ `SpaceType` | Prevents `RoomContext` and `SpaceType` from collapsing into one model; only an explicit Adapter/Mapping connects them. |
| Future invariants | TBD | TBD | TBD |

## ADR Health Checklist

For every ADR, ask:

1. Has an owner? (see [ADR Registry](#adr-registry) `Owner` column)
2. Has an invariant? (or explicitly has none yet)
3. Has a boundary? (or explicitly has none — e.g. ADR-001/002 are
   terminology decisions, not model boundaries)
4. Has examples? (good/bad, allowed/forbidden)
5. Has update history? (an "Update — DS-x.y" section per change)
6. Has a stated relationship to ADR-000?
7. Has a documented future evolution path?

Current snapshot:

| ADR | Owner | Invariant | Boundary | Examples | Update history | Relation to ADR-000 | Future evolution |
|---|---|---|---|---|---|---|---|
| ADR-000 | ✓ | — (defines invariants for others) | — (defines boundaries for others) | ✓ | ✓ (8 updates) | — (is the root) | ✓ (§10/§11, DS-7.1.1a) |
| ADR-001 | ✓ | — (terminology decision, no model boundary) | — | ✓ (table) | ✓ (2 updates) | ✓ | ✓ (Phase 10 renaming pass) |
| ADR-002 | ✓ | — (single-constant decision, no model boundary) | — | ✓ | ✓ (2 updates) | ✓ | ✓ (production migration, one pass) |
| ADR-003 | ✓ | — (none yet — deferred to DS-6+) | ✓ (Prompt Domain data-only vs Prompt Engine assembly) | ✓ | ✓ (2 updates) | ✓ | ✓ (two open contract options each) |
| ADR-004 | ✓ | ✓ (Boundary Invariant) | ✓ (`RoomContext` ↔ `SpaceType`) | ✓ | ✓ (1 update) | ✓ | ✓ (§8 Future Evolution) |

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
  "Update — DS-x.y" section recording why.

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

## Cross Reference Rules

Each document below has exactly one job. No document duplicates another's
full content — they link and summarize instead.

| Document | Job | Not its job |
|---|---|---|
| [ADR_INDEX.md](ADR_INDEX.md) (this file) | Ownership, governance, versioning, lifecycle, navigation | Does not restate full ADR text; does not draw the visual map |
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
no direct import / no direct mutation between the two. As of DS-7.1.3c,
`AI_CORE_CHECKLIST` also gained governance checks (Area assigned, Owner
defined, Version/Stability correct, ADR_MAP and Coverage Dashboard kept in
sync) — see that document.

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
| **Architecture Area** | One of the nine top-level groupings (CORE, PROMPT, SPATIAL, KNOWLEDGE, PROVIDER, STYLE, PRODUCTION, DEVELOPER, BENCHMARK) every ADR belongs to exactly one of. |
| **Ownership** | The rule that exactly one ADR is responsible for a given Area, boundary, or invariant — see [ADR Ownership Rules](#adr-ownership-rules). |
| **Scope** | The concrete responsibility an ADR covers, narrower than its Area (e.g. Area `PROMPT`, Scope "Prompt Context Contracts"). |
| **Dependency** | A `Depends On` relationship in the [ADR Registry](#adr-registry) — which other ADR's principles or decisions this one builds on. |
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
Modify the ADR (per the Update Checklist) — or create one (per the Creation Checklist)
        ↓
Update ADR_INDEX.md, and ADR_MAP.md if the map changed
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
- `ADR_MAP.md`'s visual map changes shape (new Area, new future
  placeholder, new relationship).
