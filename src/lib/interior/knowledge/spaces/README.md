# Spatial Knowledge (DS-7.3)

## 1. What this is

`spaces/` holds general architectural knowledge about **space types** —
what is generally true about a Living Room, a Hospital Ward, an Airport
Terminal, and every other canonical `SpaceTypeId`
(`src/lib/interior/space-type/types.ts`, DS-7.2): its primary functions,
typical human activities, spatial priorities, functional zones, privacy
level, traffic characteristics, circulation, ergonomic concerns, typical
furniture categories, lighting requirements, accessibility
considerations, storage needs, acoustic expectations, maintenance
characteristics, safety considerations, environmental constraints, and
occupancy characteristics.

This is a Knowledge domain like every other one under `knowledge/**`
(`materials/`, `furniture/`, `lighting/`, `decor/`, `architecture/`,
`space/`, `constraints/`, `colors/`, ...) — not a special case, not a
replacement for any of them, and not connected to Prompt Engine,
Prompt Domain, Formatter, Builder, Pipeline, Rule Engine, Developer
Studio, the API, or production. See `../README.md` §2 ("Knowledge Base
не содержит логики") — everything said there about the Knowledge Base as
a whole applies to `spaces/` unchanged.

## 2. `spaces/` (this domain) vs. `space/` (existing domain)

These are two intentionally different, non-overlapping domains that
happen to have adjacent names — the distinction matters (Principle 10,
"Один термин = одна концепция" — the *concepts* are one term each, even
though the directory names are visually similar):

- **`space/`** (singular, DS-6.4) — abstract, style-facing layout/flow/
  zoning *concepts* (e.g. "open-plan layout", "circulation flow") that a
  `StyleKnowledge` can reference via `knowledgeRefs.space`. Keyed by
  arbitrary concept ids. See `../space/README.md`.
- **`spaces/`** (plural, this domain, DS-7.3) — concrete, per-canonical-
  Space-Type *profiles* (Living Room, Hospital Ward, Airport Terminal,
  ...). Keyed by `SpaceTypeId`-matching ids. Not referenced by any
  `StyleKnowledge.knowledgeRefs` field today — reserved for the future
  Space Type → Knowledge integration named in
  `src/lib/interior/space-type/README.md` and `docs/ARCHITECTURE.md`
  Phase 7.

Both domains reuse the same `FeatureType` literal, `"space"`
(`../core/FeatureTypes.ts`) — this is not a naming collision to fix, it
is the same underlying subject-matter axis ("this is spatial knowledge")
applied to two different, independently-registered collections. Nothing
merges `space/`'s `SPACE_KNOWLEDGE_REGISTRY` with this domain's
`SPATIAL_KNOWLEDGE_REGISTRY`; they are separate arrays in separate files.
No new `FeatureType` literal was added for this stage — see §3.

## 3. Represented as `KnowledgeFeature` — no custom models

Every record in `registry.ts` is a plain `KnowledgeFeature`
(`../core/Feature.ts`), the same base type every other domain's entries
narrow via a `<Domain>Feature` alias. This domain does **not** add a new
alias (no `SpaceTypeFeature`, no `SpaceTypeKnowledge`) and does **not**
add a new `FeatureType` literal — doing either would touch
`../core/FeatureTypes.ts` / `../core/Feature.ts` / `../types.ts`, which
are out of scope for DS-7.3 (see `../README.md` — this stage only adds
new files under `spaces/` plus documentation).

Per the official AI Core Decision Flow (ADR-000 Principle 22, "Evolution
through Composition"): `Reuse → Metadata → Composition → Registry →
Top-level Contract`. This domain stops at **Reuse** for the domain
literal (`"space"`, already exists) and uses **Metadata** for everything
structured beyond `KnowledgeFeature`'s own fields — every field listed in
§1 (primary functions, spatial priorities, functional zones, ...) lives
in `KnowledgeFeature.metadata` (`Readonly<Record<string, unknown>>`,
inherited from `KnowledgeEntity`, `../core/Entity.ts`), not as new
top-level fields on a new type. No `SpaceKnowledgeEntity`, no
`SpaceKnowledgeRecord`, no duplicated contract — Principle 19
(Composition over Duplication) satisfied by construction.

The `metadata` shape documented in §1 is illustrative and consistently
applied across entries in `registry.ts` — it is **not** a TypeScript
interface, and nothing validates it. This mirrors how `SpaceTypeMetadata`
(`space-type/types.ts`) and `DesignDomainMetadata`
(`design-domain/types.ts`) treat their own illustrative-but-unenforced
extension fields.

## 4. Allowed vs. forbidden knowledge

Allowed (see §1) — general, reusable architectural/spatial facts about a
space type, true regardless of which style, provider, or prompt will
later be generated for it.

Forbidden, and absent from every record in `registry.ts`: prompt
fragments, provider hints, render/camera settings, image-generation
instructions, quality/negative/style prompt text, render engine names, or
any AI-provider-facing wording. If a future contributor is tempted to add
one of these to a `spaces/` entry, it belongs in Prompt Engine instead
(once a Prompt Integration stage — DS-7.4 or later — actually connects
Knowledge to it, which has not happened yet — see §7).

## 5. `SpaceType` integration — id-only, one direction

`spaces/registry.ts` does **not** import `src/lib/interior/space-type/**`
— not the runtime, not even a type-only import of `SpaceTypeId`. Each
record's `id` is a plain `string` chosen, by convention and documented
here, to match the corresponding `SpaceTypeId` value in
`space-type/space-types.ts` (e.g. `"living_room"`, `"hospital_ward"`,
`"airport_terminal"`). This keeps the dependency direction exactly as
`docs/AI_CORE_CHECKLIST.md` already requires for Space Type ("Space Type
не импортирует Knowledge") — Knowledge may one day be *read* by a future
consumer that also knows about `SpaceType`, but `SpaceType` itself never
imports `Knowledge`, and `Knowledge` never imports `SpaceType`. Two
independent registries, connected only by a shared id convention — no
bidirectional dependency, no runtime coupling.

`SPATIAL_KNOWLEDGE_REGISTRY` currently has one entry per canonical
`SpaceTypeId` defined in `space-type/space-types.ts` at the time of
writing (51 entries, covering Residential, Commercial, Hospitality,
Industrial, Healthcare, Education, Transportation, Outdoor, and Public
Design Domains — see `space-type/README.md`). Adding a new canonical
`SpaceTypeId` in the future does not require touching this file's
existing entries — the Space Type Boundary Invariant and Canonical
Registry Policy (`space-type/README.md`, `docs/AI_CORE_CHECKLIST.md`)
already forbid non-canonical variants from becoming `SpaceTypeId`s, and
this domain follows the same "one canonical record per canonical id"
discipline.

## 6. Boundary Protection — three different questions

Three models answer three different questions, and none of them
overlaps another's answer:

- **`SpaceType`** (`space-type/**`, DS-7.2) answers *"What space is
  this?"* — a classified, controlled vocabulary of concrete space types.
- **Knowledge** (`spaces/**`, this domain) answers *"What is generally
  true about this space?"* — architectural facts, independent of any
  particular generation request.
- **Prompt Engine** (`prompt-engine/**`, not connected here) will one day
  answer *"How should this knowledge influence prompt generation?"* — a
  question this stage does not touch and does not attempt to answer.

`SpaceType` never imports Knowledge; Knowledge never imports Prompt
Engine, Prompt Domain, the Rule Engine, the Formatter, the Builder, the
Pipeline, Developer Studio, the API, or production; Prompt Engine does
not import `spaces/**` today. Keeping these boundaries intact is what
lets each of the three evolve independently — see `space-type/README.md`
and ADR-004 for the parallel `RoomContext ↔ SpaceType` boundary this
mirrors.

## 7. Future Spatial Intelligence (documented, not implemented)

The intended future chain, once later stages choose to build it:

```
RoomContext
  ↓
Room Analyzer          (future — not created)
  ↓
SpaceType               (space-type/**, DS-7.2)
  ↓
Spatial Knowledge        (spaces/**, this domain, DS-7.3)
  ↓
Rules                     (future — not created)
  ↓
Prompt Draft               (future — not created)
  ↓
Formatter
  ↓
Generation
```

Only **Spatial Knowledge** (this domain) is implemented on DS-7.3.
`Room Analyzer`, the `SpaceType → Spatial Knowledge` lookup itself, any
`Rules` that would consume this knowledge, and any `Prompt Draft`
integration are all future work — no code, no type, no registry entry
for any of them exists yet, and none is implied by anything in this
directory.

## 8. Illustrative future knowledge categories (not implemented)

Beyond the architectural knowledge populated today (§1), future stages
could illustratively extend individual records' `metadata` with:
workflow, security, compliance, building code, fire safety, commercial
operations, medical operations, industrial process, hospitality
behavior, retail behavior, visitor flow, and queue behavior. None of
these are implemented, reserved as a field name, or scheduled for a
specific future stage — naming them now is documentation of a direction,
not a roadmap or a TODO (same convention as `space-type/types.ts`'s own
illustrative `SpaceTypeMetadata` extension list).

## 9. Commercial readiness — emergent, not special-cased

`SPATIAL_KNOWLEDGE_REGISTRY` already covers every commercial-adjacent
canonical `SpaceTypeId` that exists today — `office`, `cafe`,
`restaurant`, `shop`/`retail_showroom`, `hotel`/`hotel_room`,
`hospital_ward`/`clinic`, `classroom`/`lecture_hall`, `airport_terminal`,
`warehouse`, `factory`, `gallery`, `museum`, `coworking`, and more —
using exactly the same `KnowledgeFeature` shape as every residential
entry. No commercial-specific type, registry, or architecture was
introduced to support this; it emerges from reusing one composition
(`KnowledgeFeature` + `metadata`) across every domain (`DesignDomainId`,
`space-type/types.ts`) a `SpaceTypeId` can belong to. A space type not
yet in `space-type/space-types.ts` (e.g. a future "Cinema") gets no
`spaces/` record until it is added there first, by design (§5).

## 10. Status on DS-7.3

Created: `spaces/{README.md, index.ts, registry.ts}`. Populated:
`SPATIAL_KNOWLEDGE_REGISTRY` with 51 canonical records, one per
`SpaceTypeId` in `space-type/space-types.ts` at the time of writing.

Not modified: `../core/**`, `../types.ts`, `../index.ts`,
`../registry/KnowledgeRegistry.ts`, any other `knowledge/<domain>/**`,
`space-type/**`, `design-domain/**`, Prompt Domain, Prompt Engine
(Builder/Rules/Formatter/Pipeline), Rule Engine, Generation Engine,
Provider, Style Registry, Developer Studio, Benchmark, the public site,
the API, `buildEditPrompt()`, or `prompts.ts`. `spaces/**` is not
imported from anywhere outside itself — fully isolated, exactly like
every other Knowledge domain on the day it was created (`../README.md`
§7).
