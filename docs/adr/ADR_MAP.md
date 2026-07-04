# ADR Map — Visual Architecture Navigation

This document is **not another index**. [ADR_INDEX.md](ADR_INDEX.md) owns
ownership, versioning, lifecycle, and governance — this file exists purely
as a **visual architecture map**: how the pieces connect, and where future
pieces are expected to attach. It makes no decisions and tracks no
metadata (no versions, no status, no owners — those live in ADR_INDEX).

## Architecture Map

```
AI Core
  ↓
Architecture Principles        (ADR-000)
  ↓
Provider                       (ADR-001)
  ↓
Prompt                         (ADR-003)
  ↓
Spatial                        (ADR-004)
  ↓
Knowledge                      (no ADR yet — ADR-000 Principles 19/22)
  ↓
Production                     (no ADR yet — Phase 9 candidate)
```

This chain is a navigation aid, not a strict dependency order — in
practice every arrow below the first ultimately depends only on ADR-000,
not on the ADR directly above it in this list (see [ADR Dependency
Tree](#adr-dependency-tree)). It is drawn this way because it mirrors the
order these areas appear in `docs/ARCHITECTURE.md`'s phase history: AI
Core's foundations (Provider/Style), then Prompt, then Spatial, then
Knowledge, then (eventually) Production.

### Future placeholders

Not yet built, not yet owned by any ADR. Shown here only to mark where
they attach once they exist — see [ADR_INDEX.md's Future ADR
Backlog](ADR_INDEX.md#future-adr-backlog) for planning detail:

```
Spatial
  ├── Space Type            (attaches below Design Domain, DS-7.2)
  ├── Room Analyzer          (attaches below Space Type, Phase 8)
  ├── Object Detection       (feeds Room Analyzer, Phase 8)
  └── Automatic Masks        (feeds Object Detection, Phase 8)

Knowledge
  ├── Material Engine        (Phase 8)
  └── Furniture Planner      (Phase 8, depends on Space Type)

Prompt
  └── Prompt Integration     (DS-7.4 — connects RoomContext → SpaceType into PromptContext)

Production
  └── Production Integration (Phase 9 — connects Prompt Engine to buildEditPrompt()/prompts.ts)
```

No decisions are made by this map. Whether each placeholder becomes its
own ADR or an extension of an existing one is decided when that stage
starts, per [ADR_INDEX's ADR Creation
Checklist](ADR_INDEX.md#adr-creation-checklist).

## ADR Ownership Map

| Area | Responsible ADR | Protected Boundary | Future Expansion |
|---|---|---|---|
| CORE | ADR-000 | (none — defines boundaries for others) | New Principles only for genuinely new architectural concepts (ADR-000 §10, Architecture Maturity) |
| PROVIDER | ADR-001 | `Provider` (AI/model vendor) vs `Source` (data/storage origin) | Optional future rename pass unifying `ImageProvider`/`GenerationProvider` → `AIProvider` (Phase 10) |
| STYLE | ADR-002 | `MY_STYLE_ID` as the single literal owner | Migrating remaining production call sites in one pass |
| PROMPT | ADR-003 | Prompt Domain stays data-only; Prompt Engine owns text assembly | Contract 1 (`negativePrompt`) and Contract 2 (`generationMode`) resolutions, both deferred to DS-6+ |
| SPATIAL | ADR-004 | `RoomContext` ↔ `SpaceType` (Boundary Invariant) | `SpaceType` (DS-7.2), Knowledge Integration (DS-7.3), Prompt Integration adapter (DS-7.4) |
| KNOWLEDGE | none yet (ADR-000 Principles 19/22) | Knowledge Core stays composition-based, not a parallel model hierarchy | Candidate: Knowledge Graph ADR if graph semantics become load-bearing |
| PRODUCTION | none yet | (none yet) | Candidate: Production Integration ADR at Phase 9 |
| DEVELOPER | none yet (ADR-000 Principle 2) | Developer Studio consumes AI Core, never defines it | Candidate ADR only if Developer Studio's own config/navigation grows a real invariant |
| BENCHMARK | none yet (ADR-001, `BenchmarkSource`) | Benchmark input source naming (`Source`, not `Provider`) | Candidate ADR only if Benchmark gains its own protected boundary |

## ADR Dependency Tree

```
ADR-000
├── ADR-001
├── ADR-002
├── ADR-003
└── ADR-004
```

**Why ADR-000 stays root:** every other ADR is stated, in its own text, to
be a concrete application of ADR-000's principles rather than an
independent rule (ADR-001's Status line, ADR-002's Status line, ADR-003's
Consequences section, and ADR-004 §10 all say this explicitly). None of
ADR-001/002/003/004 depend on each other — they are siblings, each
applying a different subset of ADR-000's principles to a different Area
(see [ADR_INDEX's Principle Mapping](ADR_INDEX.md#principle-mapping)).
This keeps the dependency graph a flat tree, one level deep, with no
cross-edges between siblings — consistent with ADR-000 Principle 12
(avoid cyclical imports) applied to the documentation graph itself.

## Cross-links

- Ownership, version, status, stability, and the full backlog:
  [ADR_INDEX.md](ADR_INDEX.md)
- System structure and stage history: [../ARCHITECTURE.md](../ARCHITECTURE.md)
- Verification checklist: [../AI_CORE_CHECKLIST.md](../AI_CORE_CHECKLIST.md)
