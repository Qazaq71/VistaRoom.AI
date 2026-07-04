# Spatial Knowledge (DS-7.3 / DS-7.3.1)

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
remain out of scope (see `../README.md` — DS-7.3 and DS-7.3.1 only add
files under `spaces/` plus documentation).

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
later be generated for it. Formalized further as the **Canonical
Knowledge Policy**, §11.

Forbidden, and absent from every record in `registry.ts`: prompt
fragments, provider hints, render/camera settings, image-generation
instructions, quality/negative/style prompt text, render engine names, or
any AI-provider-facing wording. If a future contributor is tempted to add
one of these to a `spaces/` entry, it belongs in Prompt Engine instead
(once a Prompt Integration stage — DS-7.4 or later — actually connects
Knowledge to it, which has not happened yet — see §7). The full,
formalized forbidden list — including project-specific and runtime data,
not just Prompt-facing content — is §17, "Registry Protection".

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
mirrors. The full five-layer identity question set (adding Room Analyzer
and Generation) is §18, "Knowledge Identity"; the full pipeline chain
these three sit inside is §14, "Knowledge Boundary".

## 7. Future Spatial Intelligence (planned, not implemented)

The complete intended future chain, once later stages choose to build
each link — every layer below `Spatial Knowledge` is **planned, not
implemented**:

```
User Input                (planned — not implemented)
  ↓
RoomContext                (exists today — prompt-domain/**)
  ↓
Room Analyzer                (planned — not implemented)
  ↓
SpaceType                     (exists today — space-type/**, DS-7.2)
  ↓
Spatial Knowledge              (exists today — spaces/**, this domain, DS-7.3)
  ↓
Rules                           (planned — not implemented)
  ↓
Prompt Draft                     (planned — not implemented as a Spatial
                                  Knowledge consumer; `PromptDraft` itself
                                  exists in prompt-engine/builder, DS-6.5.1,
                                  but does not read Spatial Knowledge)
  ↓
Formatter                         (exists today — not connected to Spatial
                                  Knowledge)
  ↓
Generation                         (planned — not implemented as a
                                  consumer of any of the above)
```

Only `RoomContext`, `SpaceType`, `Spatial Knowledge`, and `Formatter`
exist as code today, and none of them is connected to any of the others
through this chain — `Formatter` does not read `SpaceType` or Spatial
Knowledge, `SpaceType` does not read `RoomContext`, and nothing reads
Spatial Knowledge. `Room Analyzer`, the `SpaceType → Spatial Knowledge`
lookup itself, any `Rules` that would consume this knowledge, and any
integration into `Prompt Draft` or `Generation` are all future work — no
code, no type, no registry entry for any of them exists yet, and none is
implied by anything in this directory. See §13, "Future Knowledge
Layers", for how the *content* of Spatial Knowledge itself might grow
independently of this pipeline ever being wired up.

## 8. Metadata Evolution

Current `metadata` fields (§1) intentionally remain compact — the set
documented there is exactly what `registry.ts` populates today, no more.
Illustrative future capabilities that could extend individual records'
`metadata` in a later stage: `behavior`, `workflow`, `environment`,
`accessibility`, `operations`, `compliance`, `buildingCode`, `security`,
`maintenance`, `visitorFlow`, `occupancy`, `energy`, `sustainability` —
and, from the DS-7.3 illustrative list, still equally undecided: fire
safety, medical operations, industrial process, hospitality behavior,
retail behavior, and queue behavior.

Explicitly: **none of these are implemented.** None is reserved as an
actual field name in `registry.ts`, none has a TypeScript shape, and none
is scheduled for a specific future stage. Naming them is documentation of
a *direction* future work could take, not a roadmap, not a TODO list, and
not a commitment — the same convention `space-type/types.ts` already uses
for its own illustrative `SpaceTypeMetadata` extension list, and
`design-domain/types.ts` for `DesignDomainMetadata`. The current model
(§1's field set) remains the reference shape until an objective need
(not a hypothetical one) motivates extending it — see §16, "Reuse
Policy", for the required evaluation order before any such extension.

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

This same reasoning is why Office, Restaurant, Retail, Hotel, Hospital,
Factory, Warehouse, Airport, School, Museum, and Gallery all already have
canonical records without a single line of commercial-specific
architecture: each is just another `KnowledgeFeature` with `domain:
"space"` and a `metadata` object using the same field set as every other
entry (§1). Commercial specialization is a property of *content*
(which facts a given record states), never of *structure* (no
`CommercialKnowledgeFeature`, no `CommercialSpaceRegistry` exists or is
needed) — the same Reuse-first discipline as §16.

## 10. Spatial Knowledge Governance

**Spatial Knowledge has exactly one responsibility.** It answers:

> "What is generally true about this type of space?"

It does **not** answer, and never will, without a fundamentally new
architectural stage that changes this document first:

- How to generate — that is Prompt Engine / Generation Engine.
- How to render — that is the Formatter / Provider layer.
- How to prompt — that is Prompt Engine.
- How to classify — that is `SpaceType`.
- How to analyze — that is the future Room Analyzer.
- How to detect — that is future Object Detection.

This single-responsibility framing is permanent for this domain, not a
DS-7.3-specific note — it is the governing rule every future change to
`spaces/**` must be checked against (see §16, "Reuse Policy", and §19,
"Spatial Knowledge Invariants").

## 11. Canonical Knowledge Policy

`spaces/**` stores only **canonical, domain-independent architectural
facts** — knowledge that is true of a space type in general, not of any
specific instance of it.

**Allowed** (already reflected in every `registry.ts` entry, §1):
typical circulation, typical privacy level, typical lighting
expectations, typical storage needs, typical functional zones, typical
accessibility concerns, typical occupancy characteristics, typical
acoustic expectations, typical maintenance characteristics, typical
safety concerns.

**Forbidden**, and where it actually belongs instead:

| Forbidden in `spaces/**` | Belongs to |
|---|---|
| Client requirements | Future Project Model / a request-scoped input, not Knowledge |
| Project requirements | Future Project Model |
| Current uploaded room | `RoomContext` (`prompt-domain/**`) / future Room Analyzer |
| Generated room | Generation Engine output, never Knowledge |
| Furniture coordinates | Future Room Analyzer / Object Detection output |
| Prompt wording | Prompt Engine (Formatter, once built) |
| Provider hints | Provider layer |
| Rendering instructions | Formatter / Generation Engine |
| Camera settings | Formatter / Generation Engine |
| Business rules | Future Rules layer (`Rules`, not yet created — see §7) |
| Temporary project data | Future Project Model / session-scoped runtime state |

This table is the concrete instance of the general rule stated in §12,
"Knowledge Stability Contract".

## 12. Knowledge Stability Contract

Spatial Knowledge contains **stable, general, reusable architectural
knowledge** — facts that do not change between one generation request and
the next, one customer and the next, or one session and the next.

It never stores: project-specific, customer-specific, session-specific,
AI-generated, runtime, user-specific, or otherwise dynamic facts. If a
fact can change because of what a particular user uploaded, requested, or
received back from generation, it is dynamic, and it does not belong in
`spaces/registry.ts` regardless of how useful it might seem in the
moment.

Dynamic knowledge belongs to:

- **Room Analyzer** (future, not created) — facts about *this* uploaded
  room.
- **Project Model** (future, not created) — facts about *this* customer's
  project.
- **Prompt Context** (`prompt-domain/**`, exists today) — facts about
  *this* generation request.
- **Future Runtime Layers** (Rules, Prompt Draft consumers, Generation
  Engine state — none created for Spatial Knowledge yet) — facts produced
  or consumed *during* a specific generation.

This contract is permanent, not a DS-7.3/DS-7.3.1-specific note: any
future change to `spaces/**` that would introduce a dynamic, per-request,
or per-user field is a violation of this contract regardless of how it is
phrased or where in `metadata` it is placed.

## 13. Future Knowledge Layers

Illustrated future evolution of Spatial Knowledge's *content*, as a
conceptual layering — not a roadmap, not a registry, not metadata fields:

```
Knowledge
  ↓
Structural
Environmental
Operational
Behavioral
Commercial
Safety
Accessibility
Compliance
Workflow
Building Code
```

These are **future logical layers**, illustrating categories of
architectural fact Spatial Knowledge could one day organize itself
around. Explicitly, none of them:

- are current `metadata` fields (see §1 for what actually exists today);
- are implemented in any form;
- are separate registries (there is exactly one registry in this domain,
  `SPATIAL_KNOWLEDGE_REGISTRY`, and no plan to split it);
- exist as TypeScript types, unions, or interfaces anywhere in
  `spaces/**`.

They represent a possible future **composition** — additional facets a
`KnowledgeFeature` record's `metadata` could be organized into, following
the same Reuse-first Decision Flow every other extension in AI Core must
follow (§16). Naming them now, without implementing any of them, is
consistent with how `space-type/README.md` documents its own illustrative
"Metadata Evolution Strategy" and how `../README.md` §7 (Knowledge Core)
documents its "Migration Strategy" — declared direction, not commitment.

## 14. Knowledge Boundary

The permanent, four-role pipeline boundary Spatial Knowledge sits inside
— today only the first two links exist as code, and they are not
connected to each other:

```
SpaceType
  ↓
Spatial Knowledge
  ↓
Rules
  ↓
Prompt Draft
  ↓
Formatter
  ↓
Generation
```

- **`SpaceType`** identifies — it classifies which kind of space this is,
  nothing more.
- **Spatial Knowledge** (`spaces/**`) explains — it states what is
  generally true of that kind of space, nothing about how to use that
  fact.
- **Rules** (future, not created) interpret — they would decide what a
  given piece of knowledge implies for a specific generation.
- **Prompt Engine** (Prompt Draft + Formatter) generates — it turns
  interpreted knowledge into an actual prompt string.

These four responsibilities must never overlap: `SpaceType` must never
explain (store architectural facts) or interpret (contain rule logic);
Spatial Knowledge must never identify (define what a `SpaceTypeId` is —
that stays owned by `space-type/**`) or interpret (contain conditional
"if this knowledge, then this prompt fragment" logic — that is Rules');
Rules must never generate (produce prompt text directly — that is the
Formatter's exclusive job, ADR-000 Principle 6). See §10 for why Spatial
Knowledge in particular is confined to "explains" and nothing else.

## 15. Future Consumers

Spatial Knowledge is designed to be read, unchanged, by many future
consumers — none of which exist as an integration today:

- Prompt Engine
- Room Analyzer
- Furniture Planner
- Material Engine
- Object Detection
- Automatic Zoning
- Commercial Planner
- Healthcare Planner
- Hospitality Planner
- Industrial Planner
- Landscape Planner
- Developer Studio
- Benchmark
- Future BIM integrations

**One Knowledge layer, many consumers.** None of the consumers above
imports `spaces/**` today (§7 lists what actually exists) — the point of
this list is that `SPATIAL_KNOWLEDGE_REGISTRY`'s shape (`KnowledgeFeature`
+ illustrative `metadata`, §1) does not need to change to eventually
serve any of them, because none of them requires Spatial Knowledge to
know anything about *how* it will be consumed. A `MaterialEngine` reading
`typicalFurnitureCategories` and a `HealthcarePlanner` reading
`safetyConsiderations` read the exact same record shape, through the same
`getSpatialKnowledge(id)` lookup (`./registry.ts`) — this is what keeps
the list above from ever requiring a consumer-specific fork of the
registry.

## 16. Reuse Policy

Future domains — inside `knowledge/**` or any future consumer listed in
§15 — must reuse existing `KnowledgeFeature`s and the existing `"space"`
`FeatureType` literal before creating any new concept. The mandatory
evaluation order, identical to the one already governing every other AI
Core model (ADR-000 Principles 19–22):

```
Reuse
  ↓
Metadata
  ↓
Composition
  ↓
Registry
  ↓
Top-level Contract
```

Applied here: can an existing `KnowledgeFeature` record answer the new
question (Reuse)? If not, can its `metadata` be extended (Metadata, §8)?
If not, can the new capability be expressed by composing existing
`KnowledgeFeature`/`KnowledgeEntity`/`KnowledgeRelation` types (§13's
"Future Knowledge Layers" is exactly this — a possible future
composition, not yet needed)? If not, can it be a new registry entry
(Registry — this is how DS-7.3 itself was added: a new `<domain>/
registry.ts`, no change to `core/`)? Only if none of the first four apply
does a top-level contract change (a new `FeatureType` literal, a new
`KnowledgeFeature` field) become admissible — and even then, per
Principle 19, only when the new concept is both genuinely new *and*
provably inexpressible through the first four steps. See ADR-000
Principles 19 ("Composition over Duplication"), 20 ("Evolution over
Rewrite"), 21 ("Design Domain, верхняя пространственная ось"), and 22
("Evolution through Composition") for the full principle text this
policy is a concrete instance of.

## 17. Registry Protection — What MUST NEVER happen

The following must never happen to `spaces/**`, under any future stage,
without a fundamentally new architectural decision that first revises
this document:

- Knowledge becomes Prompt (no `spaces/**` type or record turns into, or
  is consumed as, a `PromptContext`/`PromptDraft` fragment directly).
- Knowledge stores prompt text.
- Knowledge stores providers (no provider names, no provider-specific
  hints).
- Knowledge stores rendering instructions (no camera settings, no render
  engine names, no quality/negative prompt text).
- Knowledge imports Prompt Engine.
- Knowledge imports `RoomContext`.
- Knowledge imports Space Type runtime (§5 — not even type-only).
- Knowledge stores project data (client requirements, project
  requirements — see §11's table).
- Knowledge stores generated results (no output of any past generation).
- Knowledge stores user preferences.
- Knowledge stores coordinates (furniture placement, camera position, or
  any other spatial coordinate of a specific room).
- Knowledge stores detected objects (no Object Detection output).

Every item on this list is either already true by construction (verified
in §15 of `../../README.md`-style self-review conventions — see §20
below) or is a permanent constraint on all future work in this directory.

## 18. Knowledge Identity

Five layers, five distinct questions, one responsibility each — no layer
answers another's question:

- **`SpaceType`** answers *"What space is this?"*
- **Spatial Knowledge** (`spaces/**`) answers *"What is generally true
  about spaces of this type?"*
- **Room Analyzer** (future, not created) answers *"What is true about
  THIS uploaded room?"*
- **Prompt Engine** (future consumer of the above — not connected today)
  answers *"How should AI use this knowledge?"*
- **Generation** (exists as infrastructure, not connected to any of the
  above through this chain) answers *"Produce the image."*

This is the same boundary already stated in §6 (three questions:
`SpaceType`/Knowledge/Prompt Engine) and §14 (the four-role pipeline),
extended to all five layers of the full future chain from §7. All three
framings describe the identical invariant from different angles — they
are not three competing definitions.

## 19. Spatial Knowledge Invariants

Permanent constraints on this domain, to be checked on every future
change to `spaces/**`:

- Knowledge never classifies (`SpaceType`'s job, §18).
- Knowledge never generates (Generation's job, §18).
- Knowledge never analyzes (Room Analyzer's job, §18).
- Knowledge never stores runtime facts (§12, Knowledge Stability
  Contract).
- Knowledge never owns Prompt logic (Prompt Engine's job, §10, §17).
- Knowledge never owns rendering (Formatter/Generation Engine's job, §10,
  §17).
- Knowledge always remains reusable (§15, §16 — any addition must survive
  the Reuse → Metadata → Composition → Registry → Top-level Contract
  evaluation).

## 20. Status

**DS-7.3** created `spaces/{README.md, index.ts, registry.ts}` and
populated `SPATIAL_KNOWLEDGE_REGISTRY` with 51 canonical records, one per
`SpaceTypeId` in `space-type/space-types.ts` at the time of writing.

**DS-7.3.1** (this revision) is documentation-only governance: no file
under `spaces/*.ts` changed, no new field, no new type, no new registry
entry, no runtime behavior of any kind. It permanently defines what
Spatial Knowledge is (§10), what it is not (§10, §17), how it evolves
(§8, §13, §16), and how it stays reusable across future consumers (§15,
§16) — closing the governance model for this domain the same way DS-7.2.1
closed it for `space-type/**`.

Not modified, by either DS-7.3 or DS-7.3.1: `../core/**`, `../types.ts`,
`../index.ts`, `../registry/KnowledgeRegistry.ts`, any other
`knowledge/<domain>/**`, `space-type/**`, `design-domain/**`, Prompt
Domain, Prompt Engine (Builder/Rules/Formatter/Pipeline), Rule Engine,
Generation Engine, Provider, Style Registry, Developer Studio, Benchmark,
the public site, the API, `buildEditPrompt()`, or `prompts.ts`.
`spaces/**` is not imported from anywhere outside itself — fully
isolated, exactly like every other Knowledge domain on the day it was
created (`../README.md` §7). `npm run build` passes.
