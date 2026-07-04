# ADR Index — Architecture Decision Registry

This document is **not an ADR**. It is the official Architecture Decision
Registry for VisataRoom AI's AI Core. It does not decide anything — it
records where each architectural decision lives, who owns it, and what
future work should check before writing a new one.

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

## ADR Timeline

| ADR | Stage | Decision Area | Status |
|---|---|---|---|
| ADR-000 | DS-5.2 (+ updates through DS-7.1.1a) | Architecture Principles | Active |
| ADR-001 | DS-5 (+ updates DS-5.1/5.2) | Provider Terminology | Active |
| ADR-002 | DS-5 (+ updates DS-5.1/5.2) | MY_STYLE_ID Identifier | Active |
| ADR-003 | DS-5 (+ updates DS-5.1/5.2) | Prompt Context Contracts | Active |
| ADR-004 | DS-7.1.3 (+ update DS-7.1.3a) | Spatial Classification Boundary | Active |

## ADR Registry

| ADR | Name | Purpose | Owns | Protected Boundary / Invariant | Related Principles | Status |
|---|---|---|---|---|---|---|
| [ADR-000](ADR-000-Architecture-Principles.md) | Architecture Principles | Top-level architectural constitution for AI Core | Architecture principles and AI Core evolution methodology (Principles 1–22, Decision Flow, Evolution Axiom) | Principle set itself; no single local boundary — general methodology | 1–22 (all) | Active |
| [ADR-001](ADR-001-Provider-Terminology.md) | Provider Terminology | Disambiguates "Provider" vs "Source" vs vendor identifier | Provider / Source terminology boundary | `Provider` = AI/model vendor integration only; `Source` = data/storage origin only | 8, 9, 10 | Active |
| [ADR-002](ADR-002-MyStyle-Identifier.md) | MY_STYLE_ID Identifier | Single source of truth for the `"my_style"` literal | `MY_STYLE_ID` identity decision | One literal, one owning constant (`src/lib/interior/constants.ts`) | 11 | Active |
| [ADR-003](ADR-003-PromptContext-Contracts.md) | Prompt Context Contracts | Documents (not implements) `negativePrompt` and `generationMode` contracts | `PromptContext` contract decisions (Contract 1, Contract 2) | Prompt Domain stays data-only; text assembly stays Prompt Engine's job | 4, 5, 6, 7 | Active |
| [ADR-004](ADR-004-Spatial-Classification-Boundary.md) | Spatial Classification Boundary | Fixes the boundary between `RoomContext` and the future `SpaceType` | `RoomContext` ↔ `SpaceType` boundary | **Boundary Invariant:** `RoomContext` and `SpaceType` must remain independent concepts; only an explicit Adapter/Mapping connects them | 10, 12, 19, 20, 21, 22 | Active |

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
repeats it for its own relation to ADR-000).

## Principle Mapping

| Principle | Meaning | Applied by ADRs |
|---|---|---|
| Principle 3 | Single Source of Truth (Style Registry) | ADR-000 |
| Principle 15 | Immutable Context (`PromptContext` never mutated) | ADR-000, ADR-003 |
| Principle 19 | Composition over Duplication | ADR-000, ADR-003, ADR-004 |
| Principle 20 | Evolution over Rewrite | ADR-000, ADR-004 |
| Principle 21 | Design Domain — spatial axis | ADR-000, ADR-004 |
| Principle 22 | Evolution through Composition | ADR-000, ADR-004 |

## Architecture Coverage Matrix

| Architectural Area | Current Owner ADR | Status | Notes |
|---|---|---|---|
| Architecture Principles | ADR-000 | Covered | Principles 1–22, Decision Flow, Evolution Axiom |
| Provider Terminology | ADR-001 | Covered | `Provider` vs `Source` vs vendor identifier |
| MY_STYLE_ID | ADR-002 | Covered | Single constant, partially migrated (see ADR-002 Updates) |
| Prompt Contracts | ADR-003 | Covered | Documented, not implemented — DS-6+ work |
| Spatial Classification | ADR-004 | Covered | `RoomContext` ↔ `SpaceType` boundary + invariant |
| Style Registry | ADR-000 / future ADR if needed | Partially covered | Owned today by Principle 3; no dedicated ADR yet |
| Knowledge Core | ADR-000 / future ADR if needed | Partially covered | Owned today by Principles 19/22; no dedicated ADR yet |
| Prompt Engine | ADR-003 + ADR-000 | Partially covered | Contracts documented (ADR-003); AI-agnosticism/immutability under ADR-000 Principles 14/15 |
| Design Domain | ADR-000 Principle 21 | Covered by principle, no separate ADR yet | May receive its own ADR if it outgrows Principle 21 |
| Space Type | Future ADR or ADR-004 extension | Not yet implemented | DS-7.2; boundary already fixed by ADR-004 |
| Room Analyzer | Not yet defined | — | Phase 8 candidate — see Future ADR Backlog |
| Material Engine | Not yet defined | — | Phase 8 candidate — see Future ADR Backlog |
| Furniture Planner | Not yet defined | — | Phase 8 candidate — see Future ADR Backlog |
| Object Detection | Not yet defined | — | Phase 8 candidate — see Future ADR Backlog |
| Automatic Masks | Not yet defined | — | Phase 8 candidate — see Future ADR Backlog |
| Production Integration | Future ADR | Not yet defined | Phase 9 candidate — see Future ADR Backlog |
| Refactoring 2.0 | Future ADR | Not yet defined | Phase 10 candidate — see Future ADR Backlog |

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

## ADR Lifecycle

Statuses: **Draft → Accepted → Active → Superseded / Archived.**

Rules:

- No ADR is deleted.
- Superseded ADRs must point to their replacement.
- Archived ADRs remain for historical context.
- ADR_INDEX must always show current status (see [ADR
  Registry](#adr-registry) and [ADR Timeline](#adr-timeline) above).

## Local Invariants Registry

| Invariant | Owning ADR | Protected Boundary | Description |
|---|---|---|---|
| Boundary Invariant | ADR-004 | `RoomContext` ↔ `SpaceType` | Prevents `RoomContext` and `SpaceType` from collapsing into one model; only an explicit Adapter/Mapping connects them. |
| Future invariants | TBD | TBD | TBD |

## Future ADR Backlog

Planning only. No decisions are made here.

| Future ADR Candidate | Likely Phase | Reason | Status |
|---|---|---|---|
| Space Type Foundation | DS-7.2 or after implementation | May extend ADR-004 or receive its own ADR depending on final scope | Candidate |
| Room Analyzer | Phase 8 | Image understanding boundary | Candidate |
| Material Engine | Phase 8 | Material knowledge / transformation boundary | Candidate |
| Furniture Planner | Phase 8 | Furniture arrangement boundary | Candidate |
| Object Detection | Phase 8 | Detection / segmentation boundary | Candidate |
| Automatic Masks | Phase 8 | Mask generation boundary | Candidate |
| Production Integration | Phase 9 | Migration from `buildEditPrompt()` to Prompt Engine | Candidate |
| Provider Unification | Refactoring 2.0 | `GenerationProvider`/`ImageProvider`/`AIProvider` terminology unification | Candidate |
| Knowledge Graph | Future | Entity/Feature/Relation graph semantics | Candidate |
| Rendering Pipeline | Future | Prompt/result/rendering pipeline boundary | Candidate |

## ADR Navigation Rule

For any architectural change:

1. Check ADR_INDEX.
2. Identify the existing owner ADR.
3. If an owner exists, update it.
4. If no owner exists, decide whether a new ADR is justified (see [ADR
   Creation Checklist](#adr-creation-checklist)).
5. Register the new ADR in ADR_INDEX immediately.
6. Update `ARCHITECTURE.md` and `AI_CORE_CHECKLIST.md` if affected.

## Relationship to ARCHITECTURE.md

`ARCHITECTURE.md` describes system structure. ADR files explain *why* key
decisions were made. ADR_INDEX shows *where* each decision lives.
`AI_CORE_CHECKLIST.md` verifies that decisions remain true. These
documents must not duplicate each other's full content — they link and
summarize.

## Relationship to AI_CORE_CHECKLIST.md

`AI_CORE_CHECKLIST.md` is not a design document — it is a verification
tool. When a new ADR introduces a protected boundary, `AI_CORE_CHECKLIST`
should receive concrete checks. Example: ADR-004 introduced the
`RoomContext` ↔ `SpaceType` boundary; `AI_CORE_CHECKLIST` added checks for
no direct import / no direct mutation between the two.

## ADR Maintenance Rules

ADR_INDEX must be updated whenever:

- a new ADR is created;
- an ADR status changes;
- a protected invariant is added;
- an ADR ownership boundary changes;
- a future ADR candidate becomes active;
- an ADR is superseded or archived.

## Architecture Drift Prevention

ADR_INDEX prevents:

- duplicate ADRs;
- conflicting decisions;
- hidden ownership;
- forgotten invariants;
- undocumented boundaries;
- uncontrolled ADR growth.
