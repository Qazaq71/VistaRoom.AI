# Prompt Integration (DS-7.4 — Foundation)

## 1. What this is

`prompt-integration/` (`src/lib/interior/prompt-integration`) is the
**first architectural bridge** between Spatial Intelligence
(`design-domain/**`, DS-7.1; `space-type/**`, DS-7.2; `knowledge/spaces/**`,
DS-7.3) and Prompt Engine (`prompt-engine/**`, DS-6.1+). It is the explicit
Adapter/Mapping component anticipated by
[ADR-004 — Spatial Classification Boundary](../../../docs/adr/ADR-004-Spatial-Classification-Boundary.md)
§5 ("Prompt Integration (DS-7.4) must introduce the connection as an
explicit Adapter/Mapping component, not as a change to either model's own
shape") and named as future work in every prior Spatial Intelligence
README (`space-type/README.md` §10/§16, `knowledge/spaces/README.md`
§7/§18).

This stage creates **infrastructure only**:

- No production prompts are modified.
- No image generation changes.
- No prompt quality changes.
- `PromptContext` is not rewritten.
- `RoomContext` and `SpaceType` are not merged.
- No business logic, no Room Analyzer, no detection, no classification,
  no runtime intelligence.

`prompt-integration/**` is created **alongside** the existing Prompt
Engine and Spatial Intelligence layers, not instead of anything (ADR-000
Principle 20, Evolution over Rewrite) — exactly the same discipline every
prior DS-7.x stage used when introducing a new, initially-isolated module.

## 2. Before and after — the architectural goal

Before DS-7.4, `PromptContext` was assembled without any Spatial
Intelligence input:

```
User
  ↓
RoomContext
  ↓
PromptContext
  ↓
PromptDraft
  ↓
Formatter
  ↓
Generation
```

After DS-7.4, an explicit bridge exists — built, but not yet wired into
the chain above (see §7, "Future Room Analyzer", and §17, "Status", for
exactly what "not yet wired" means):

```
User
  ↓
RoomContext
  ↓
Room Analyzer (future — not implemented)
  ↓
SpaceType
  ↓
Spatial Knowledge
  ↓
Spatial Prompt Adapter          ← this module
  ↓
PromptContext
  ↓
PromptDraft
  ↓
Formatter
  ↓
Generation
```

Prompt Engine never imports Room Analyzer. Prompt Engine never classifies
spaces. Prompt Engine only ever consumes an already-classified `SpaceType`
through this module's explicit adapter — never directly.

## 3. `SpatialPromptContext` — a new composition model

`SpatialPromptContext` (`types.ts`) is a new, independent composition
model — **not** a replacement of `PromptContext` (`prompt-domain/types.ts`),
**not** an inheritance of it, and **not** a duplication of its fields:

```ts
export type SpatialPromptContext = {
  readonly spaceTypeId: SpaceTypeId;
  readonly designDomainId: DesignDomainId;
  readonly spatialKnowledge?: KnowledgeFeature;
  readonly futureMetadata?: SpatialPromptMetadata;
};
```

- `spaceTypeId` — the classified space type this context describes
  (`SpaceType.id`, `space-type/types.ts`).
- `designDomainId` — the design domain that space type belongs to
  (`SpaceType.designDomainId`), carried alongside the id for convenience,
  exactly the way `SpaceType` itself carries `designDomainId` as a
  primitive reference rather than requiring a second lookup (ADR-000
  Principle 21).
- `spatialKnowledge` — the matching Spatial Knowledge record
  (`KnowledgeFeature`, `knowledge/spaces/**`, DS-7.3), if one exists for
  this `spaceTypeId` (see `knowledge/spaces/README.md` §5 — not every
  future `SpaceTypeId` is guaranteed to have one immediately).
- `futureMetadata` — reserved extension point (§10), always `undefined`
  on DS-7.4; nothing populates it.

Every field is a **reference** — a primitive id, or a reference to an
already-existing `KnowledgeFeature` record. There is no `positivePrompt`,
no `negativePrompt`, no generated string, no prompt fragment anywhere in
this type. `SpatialPromptContext` answers "what does Spatial Intelligence
already know about this space?" — it does not answer "what should the
prompt say?" (that remains Prompt Engine's question, see §9).

## 4. `SpatialPromptAdapter` — the translation

`SpatialPromptAdapter` (`adapter.ts`) is the single component responsible
for composing `SpaceType` + Spatial Knowledge into a `SpatialPromptContext`:

```ts
export interface SpatialPromptAdapter {
  adapt(spaceTypeId: SpaceTypeId): SpatialPromptContext | undefined;
}
```

```
SpaceType
  +
Spatial Knowledge
  ↓
SpatialPromptAdapter
  ↓
SpatialPromptContext
```

`DefaultSpatialPromptAdapter` — the first and only implementation — takes
an already-classified `SpaceTypeId`, looks it up via `getSpaceType`
(`space-type/**`) and `getSpatialKnowledge` (`knowledge/spaces/**`), and
composes the result. No branching beyond a missing-record check, no
scoring, no heuristics, no AI call. The adapter owns the translation —
neither Prompt Engine nor any future caller needs to know that `SpaceType`
and Spatial Knowledge are two separate registries at all; they see one
composed reference object.

## 5. Prompt Boundary

Prompt Engine (`prompt-engine/**`) — if and when a future stage actually
wires this module in — consumes exactly one thing from Spatial
Intelligence:

**Allowed:**

- `SpatialPromptContext` (this module's type, `./types.ts`)

**Forbidden, even after such a future stage:**

- `SpaceType` registry (`space-type/registry.ts`) — direct import
- Spatial Knowledge registry (`knowledge/spaces/registry.ts`) — direct
  import
- `RoomContext` (`prompt-domain/contexts/RoomContext.ts`) reached from
  inside Spatial Intelligence code

No direct imports from Prompt Engine into `space-type/**` or
`knowledge/spaces/**` are introduced by this stage, and none are permitted
by any future stage either — `prompt-integration/**` is the sole point of
contact (§6). On DS-7.4 itself, Prompt Engine does not import
`prompt-integration/**` at all yet (§7) — this section documents the
permanent boundary for whenever that connection is made, not something
already wired up today.

## 6. Knowledge Usage — registries stay behind the adapter

**Prompt Engine never reads registries directly.** It consumes
already-prepared context objects only. `SpatialPromptAdapter` — and
nothing else — owns registry access:

- `adapter.ts` is the only file under `prompt-integration/**` that imports
  `getSpaceType` (`space-type/**`) and `getSpatialKnowledge`
  (`knowledge/spaces/**`).
- `registry.ts` exposes this module's own lookup surface
  (`getSpatialPromptContext`, `getAllSpatialPromptContexts`) built on top
  of the adapter — a future consumer reads through these two functions,
  never through `SPACE_TYPE_REGISTRY` or `SPATIAL_KNOWLEDGE_REGISTRY`
  directly. This mirrors how every other Spatial Intelligence module
  exposes a small, stable lookup surface instead of its raw registry
  array (`getSpaceType`/`getAllSpaceTypes`, `getSpatialKnowledge`/
  `getAllSpatialKnowledge`).
- `types.ts` imports only type-level references (`SpaceTypeId`,
  `DesignDomainId`, `KnowledgeFeature`) — no registry access.

## 7. Future Room Analyzer (planned, not implemented)

`prompt-integration/**` does not implement, and does not call, a Room
Analyzer. The full future pipeline, once a Room Analyzer exists:

```
RoomContext                (exists today — prompt-domain/**)
  ↓
Room Analyzer                 (planned — not implemented)
  ↓
SpaceTypeId
  ↓
SpatialPromptAdapter             (exists today — this module, DS-7.4)
  ↓
PromptContext                       (planned integration — not implemented)
  ↓
Prompt Engine
```

On DS-7.4, only `SpatialPromptAdapter` and everything below it in this
diagram exists. `RoomContext` is not read by anything in
`prompt-integration/**` — this module never imports `prompt-domain/**`.
Nothing calls `SpatialPromptAdapter.adapt()` with a `SpaceTypeId` derived
from a real `RoomContext` today; there is no such derivation mechanism
yet. This is explicitly future work, consistent with ADR-004 §8 ("Multiple
mechanisms could eventually implement the `RoomContext → SpaceType`
mapping — a Rule Engine, an AI Classifier, a Vision Analyzer, Manual
Mapping, an ML Classifier... Choosing the mechanism is left to whichever
stage actually implements it") — DS-7.4 is not that stage.

## 8. Commercial readiness — without changing Prompt Engine

Because `SpatialPromptContext` is composed from the same two registries
for every canonical `SpaceTypeId`, commercial space types are already
supported with zero commercial-specific code, exactly as
`knowledge/spaces/README.md` §9 already demonstrated for Spatial Knowledge
itself:

```
Restaurant
  ↓
SpaceType                 (space-type/space-types.ts: "restaurant")
  ↓
Spatial Knowledge            (knowledge/spaces/registry.ts: "restaurant")
  ↓
SpatialPromptAdapter            (this module)
  ↓
SpatialPromptContext
  ↓
Prompt Engine                      (future — not connected yet)
```

The identical composition already works, without any change to Prompt
Engine, for Office, Retail (`shop`/`retail_showroom`), Salon, Hotel
(`hotel`/`hotel_lobby`/`hotel_room`), Hospital
(`hospital_ward`/`clinic`/`operating_room`), Airport
(`airport_terminal`), School (`classroom`/`lecture_hall`), Warehouse, and
Museum — every one of these already has a canonical `SpaceType` (DS-7.2)
and Spatial Knowledge record (DS-7.3); `getSpatialPromptContext(id)`
composes all of them through the exact same code path. No
`CommercialPromptAdapter`, no per-vertical branch, no special case.

## 9. Prompt Intelligence — composition, not concatenation

Prompt quality does not evolve by making prompts longer. It evolves by
**composition**:

```
Style
  +
Spatial Intelligence
  +
Knowledge
  ↓
better prompts
```

**Prompt Intelligence is composition, not prompt concatenation.**
`SpatialPromptContext` is a step toward that composition — a structured
reference object a future Prompt Engine stage can read from, not a string
to append. Nothing in this stage produces, formats, or concatenates any
text; that responsibility remains exclusively the Formatter's, once built
(ADR-000 Principle 6).

## 10. Spatial Influence — future categories (documentation only)

Illustrative categories through which Spatial Knowledge could one day
influence prompt generation, once a future stage actually wires
`SpatialPromptContext` into Prompt Engine. **None of these is
implemented.** No field, no type, no logic exists for any of them today —
naming them documents a direction, not a roadmap or a TODO:

- layout
- traffic
- workflow
- privacy
- accessibility
- lighting
- zoning
- functional furniture
- circulation
- focal points
- negative space

Each of these already has a corresponding fact in
`SPATIAL_KNOWLEDGE_REGISTRY`'s `metadata` (`knowledge/spaces/registry.ts`
§1 — e.g. `trafficLevel`, `privacyLevel`, `functionalZones`,
`circulation`, `lightingRequirements`) that a future Rules layer
(`knowledge/spaces/README.md` §14, "Knowledge Boundary") could interpret
into one of these influence categories. This stage does not build that
Rules layer, and does not decide how any of these categories would
actually shape a prompt.

## 11. Future AI Pipeline (planned, not implemented)

The full future chain from user input to generation, once every
not-yet-built link is eventually built:

```
User
  ↓
RoomContext                 (exists — prompt-domain/**)
  ↓
Analyzer                       (planned — Room Analyzer, not implemented)
  ↓
SpaceType                         (exists — space-type/**, DS-7.2)
  ↓
Spatial Knowledge                    (exists — knowledge/spaces/**, DS-7.3)
  ↓
Prompt Integration                      (exists — this module, DS-7.4)
  ↓
Prompt Engine                              (exists as a layer — not connected
                                            to the above)
  ↓
Formatter                                     (not yet implemented)
  ↓
Generation                                       (exists — not connected to
                                                  the above)
```

Only `RoomContext`, `SpaceType`, `Spatial Knowledge`, and `Prompt
Integration` (this module) exist as code today, and none of the links
between "Prompt Integration" and "Generation" in this diagram is wired —
`PromptContext` does not read `SpatialPromptContext`, `PromptDraft` does
not read it, and the Formatter does not exist yet at all.

## 12. Architecture Rules — no responsibility overlap

Four permanent, non-overlapping responsibilities, extending the
"Knowledge Boundary" already established by `knowledge/spaces/README.md`
§14:

- **Prompt Integration** (this module) owns **spatial composition** —
  assembling `SpaceType` + Spatial Knowledge into `SpatialPromptContext`.
  It does not generate prompt text and does not decide how the result is
  used.
- **Prompt Engine** (`prompt-engine/**`) owns **prompt generation** —
  assembling `PromptContext`/`PromptDraft` into a final prompt. It does
  not classify spaces and does not read Spatial Intelligence registries
  directly (§5, §6).
- **Formatter** (`prompt-engine/formatter/**`, not yet implemented) owns
  **text formatting** — turning a `PromptDraft` into `positivePrompt`/
  `negativePrompt` strings. It is the only place prompt text is ever
  produced (ADR-000 Principle 6).
- **Generation** (Generation Engine/Provider) owns **image generation** —
  consuming a finished prompt string. It knows nothing about `SpaceType`,
  Spatial Knowledge, or `SpatialPromptContext`.

No layer performs another layer's job — a violation of any of the four
bullets above is an architecture violation regardless of how convenient
it looks in the moment (the same framing ADR-004 §3 already uses for the
`RoomContext`/`SpaceType` boundary).

## 13. Reuse Strategy

This module was built by applying the single official AI Core Decision
Flow (ADR-000 Principle 22, consolidated in DS-7.1.1a) — no new Principle,
no new ADR:

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

Applied here:

- **Reuse** — `SpaceTypeId`, `DesignDomainId`, and `KnowledgeFeature` are
  reused as-is from `space-type/**`, `design-domain/**`, and
  `knowledge/spaces/**`; none of them is redefined or copied.
- **Metadata** — `futureMetadata` (§10) reserves an extension point on
  `SpatialPromptContext` itself, the same pattern `SpaceTypeMetadata`/
  `DesignDomainMetadata` already established.
- **Composition** — `SpatialPromptContext` is a new type composed from
  the three reused references above; `SpatialPromptAdapter` is the
  component that performs the composition. This is the step this stage
  actually stops at — the new capability (a bridge between Spatial
  Intelligence and Prompt Engine) is expressible entirely through
  composition, without a new registry or a change to any existing
  top-level contract.
- **Registry** — not needed as a new *data* registry (there is no new
  canonical dataset here); `registry.ts` is a lookup-function surface over
  the composition, not a new array of records.
- **Top-level Contract** — not touched. `PromptContext`, `RoomContext`,
  `SpaceType`, and `KnowledgeFeature` are all unchanged (§16).

## 14. Future Evolution — future consumers

`SpatialPromptContext` and `getSpatialPromptContext`/
`getAllSpatialPromptContexts` are designed to be read, unchanged, by many
future consumers — none of which exists as an integration today:

- Prompt Engine (once a future stage wires it in, §5, §7)
- Furniture Planner
- Material Engine
- Object Detection
- Automatic Masks
- Commercial Planner
- Developer Studio
- Benchmark

None of these consumers imports `prompt-integration/**` today. The point
of this list, exactly as `knowledge/spaces/README.md` §15 already
demonstrated for Spatial Knowledge, is that this module's shape does not
need to change to eventually serve any of them — each would read the same
`SpatialPromptContext` shape through the same two lookup functions.

## 15. Usage

```ts
import {
  getSpatialPromptContext,
  getAllSpatialPromptContexts,
} from "@/lib/interior/prompt-integration";

const restaurantContext = getSpatialPromptContext("restaurant");
// restaurantContext?.designDomainId === "hospitality"
// restaurantContext?.spatialKnowledge?.metadata.trafficLevel === "high"

const allContexts = getAllSpatialPromptContexts();
```

Not called from any production code path, any Prompt Engine file, or any
API route today — see §17, "Status".

## 16. Boundary Invariant (ADR-004) — reaffirmed for this module

`prompt-integration/**` is exactly the "Adapter/Mapping" ADR-004 already
names as allowed evolution (§3, "Allowed Evolution": ✅ Adapter, ✅
Mapping, ✅ Composition) — it does not, and must never, collapse
`RoomContext` and `SpaceType` into one model:

```
RoomContext                    SpaceType
(Prompt Domain)                (Spatial Intelligence)
                                        ▲
                    SpatialPromptAdapter│
        (composes SpaceType + Spatial  │
         Knowledge only — never reads  │
         RoomContext) ──────────────────
```

- `SpatialPromptAdapter.adapt()` takes a `SpaceTypeId`, never a
  `RoomContext` — this module does not implement the `RoomContext →
  SpaceType` mapping itself (that remains the future Room Analyzer's job,
  §7).
- `prompt-integration/**` does not import `prompt-domain/**` at all — not
  `RoomContext`, not `PromptContext`, not any sub-context.
- `PromptContext`, `RoomContext`, `SpaceType`, and `KnowledgeFeature` are
  not modified by this stage (§17).

## 17. What MUST NEVER happen (Registry Protection)

Permanent prohibitions for `prompt-integration/**`, in the same spirit as
`space-type/README.md` §19 and `knowledge/spaces/README.md` §17:

- ❌ `SpatialPromptContext` becomes `PromptContext` (merged, renamed, or
  used interchangeably).
- ❌ `SpatialPromptAdapter` reads `RoomContext` or any `prompt-domain/**`
  type.
- ❌ `SpatialPromptAdapter` performs classification, detection, or
  analysis — it only composes already-classified references.
- ❌ Prompt Engine imports `space-type/**` or `knowledge/spaces/**`
  directly, bypassing this module.
- ❌ `SpatialPromptContext` stores generated prompt text, `positivePrompt`/
  `negativePrompt` fragments, or provider hints.
- ❌ `SpaceType`, `KnowledgeFeature`, or `PromptContext` top-level
  contracts are changed to accommodate this module.
- ❌ `buildEditPrompt()` (`src/lib/prompts.ts`) or any production
  generation path is modified by this stage.

## 18. Status (DS-7.4)

`prompt-integration/{types,adapter,registry,index}.ts` created:
`SpatialPromptContext` (`spaceTypeId`, `designDomainId`,
`spatialKnowledge?`, `futureMetadata?`, all `readonly`),
`SpatialPromptAdapter`/`DefaultSpatialPromptAdapter` (`adapt(spaceTypeId)`
composing `SpaceType` + Spatial Knowledge), and a lookup surface
(`getSpatialPromptContext`, `getAllSpatialPromptContexts`) mirroring every
other Spatial Intelligence module's registry pattern.

Not modified by this stage: `PromptContext`, `RoomContext`, any
`prompt-domain/**` sub-context, `PromptDraft`, `PromptBuilder`,
`RuleEngine`, the Formatter (still unimplemented), `SpaceType`,
`SpaceTypeMetadata`, `SPACE_TYPE_REGISTRY`, `KnowledgeFeature`,
`SPATIAL_KNOWLEDGE_REGISTRY`, `DesignDomain`, Style Registry, Generation
Engine, Provider, Developer Studio, Benchmark, the public site, the API,
`buildEditPrompt()`, or `prompts.ts`.

`prompt-integration/**` is not imported from anywhere outside itself —
fully isolated, exactly like every other Spatial Intelligence module on
the day it was created (`space-type/README.md` §Статус (DS-7.2),
`knowledge/spaces/README.md` §20). No new ADR and no new ADR-000
Principle were introduced — this stage applies ADR-000 Principles 19–22
and the existing ADR-004 boundary discipline (see
[ADR-004's "Update — DS-7.4"](../../../docs/adr/ADR-004-Spatial-Classification-Boundary.md)).
`npm run build` passes.
