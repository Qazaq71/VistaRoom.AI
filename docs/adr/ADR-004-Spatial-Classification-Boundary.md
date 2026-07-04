# ADR-004 — Spatial Classification Boundary

## Status

Accepted. Documentation-only. Written ahead of DS-7.2 so the boundary
between `RoomContext` and the not-yet-built `SpaceType` is decided once,
in writing, instead of being rediscovered — or decided implicitly by
whichever PR happens to touch it first — during DS-7.4 (Prompt
Integration).

## 1. Context

Two concepts today, and one still to come, each partially describe "what
kind of space is this":

```
PromptContext
    └── RoomContext
            roomType: string
```

`RoomContext` (`src/lib/interior/prompt-domain/contexts/RoomContext.ts`)
already exists, as of DS-5, as one of `PromptContext`'s nine sub-contexts
(ADR-000 Principle 19 / the DS-6.5.1 fixed composition). It carries
`roomType: string` plus optional `roomName`, `dimensions`, `windows`,
`doors`, `existingFurniture`.

`SpaceType` does not exist yet. It is named as future work in ADR-000's
Phase 7 hierarchy (`Update — DS-7.1`, Principle 21):

```
Design Domain
  ↓
Space Type
  ↓
Style
  ↓
Knowledge
  ↓
Prompt Engine
```

and scheduled for DS-7.2 ("Space Type Foundation", `docs/ARCHITECTURE.md`
Phase 7).

Both `RoomContext.roomType` and the future `SpaceType` are, on the
surface, answers to the same question — "what is this space?" — which is
exactly the condition (ADR-000 Principle 10, "Один термин = одна
концепция") under which two things quietly collapse into one unless a
boundary is written down first. This ADR fixes that boundary *before*
`SpaceType` is built, so DS-7.2 is implemented against a decided contract
rather than one improvised mid-stage.

## 2. Decision

### RoomContext

- `RoomContext` describes the **observed room as given by the user's
  input** — raw, Prompt-Domain-shaped data (`roomType: string`,
  dimensions, openings, existing furniture).
- It belongs to **Prompt Domain**
  (`src/lib/interior/prompt-domain/**`) and follows the same rules as
  every other `PromptContext` sub-context: pure data, no methods, no
  formatting, no business logic (ADR-000 Principle 4).
- It stores the user's own words/selection for "room type" — it does not
  interpret, canonicalize, or classify them into any broader taxonomy.
- It performs **no spatial classification**. `roomType: string` is
  exactly what it has always been since DS-5: an open string field, not
  an enum, not a lookup key into a registry.

### SpaceType

- `SpaceType` is an **independent spatial model**, belonging to
  **Spatial Intelligence** (`src/lib/interior/design-domain/**` and its
  DS-7.2 sibling, not yet created).
- It describes the **semantic type of a space** — a classified category
  drawn from (or extending) a controlled vocabulary, referencing
  `DesignDomainId` per Principle 21, not free user text.
- Illustrative examples of the kind of value it holds: Living Room,
  Bedroom, Office, Restaurant, Retail, Hotel Lobby, Hospital Ward,
  Classroom, Museum, Airport Lounge, and any future category — this ADR
  does not enumerate a final list; DS-7.2 owns that.

### Главное правило

**`RoomContext` never becomes `SpaceType`. `SpaceType` never becomes
`RoomContext`.** Any relationship between them must be explicit:

```
RoomContext
    ↓
Mapping
    ↓
SpaceType
```

not

```
RoomContext === SpaceType
```

No inheritance, no structural aliasing, no field rename that quietly
turns one into the other. The two stay two distinct models connected only
by an explicit, named translation step.

## 3. Boundary Invariant

> **Boundary Invariant**
>
> The architectural boundary established by this ADR is invariant.
>
> Future evolution may introduce adapters, registries, analyzers,
> metadata, mappings or intermediate models.
>
> However, these extensions must never collapse, merge, replace or
> redefine the responsibilities of `RoomContext` and `SpaceType`.
>
> Both models must remain independent concepts throughout the lifetime
> of the architecture.

### Why this invariant exists

Section 2 fixes the boundary as of DS-7.1.3. That alone does not protect
it from eroding later — the most common failure mode in large AI
projects is not a single deliberate decision to merge two models, but a
slow drift across many small, individually-reasonable-looking changes,
each of which quietly narrows the gap between them until nothing is left
of the original boundary. This invariant exists so that every future
change — however convenient it looks in isolation — is checked against
the boundary before it lands, not after.

The recurring patterns this invariant explicitly forbids, regardless of
how they arrive (a rename, a "just this one field," a shared base class,
a well-intentioned unification pass):

```
RoomContext
    ↓
становится SpaceType
```

```
SpaceType
начинает хранить данные Prompt Domain
```

```
RoomContext
получает поля Spatial Intelligence
```

```
создаётся единая универсальная модель,
которая одновременно является
Prompt Domain
+
Spatial Classification
```

Every one of these is an architecture violation, independent of the
mechanism used to arrive at it (direct edit, inheritance, gradual field
accretion, or a "unifying" refactor) and independent of how well-intentioned
the change looks at the time it's proposed.

### Allowed Evolution

The invariant does not freeze the architecture — it constrains *how* it
grows. The following are explicitly allowed, as long as the boundary
between `RoomContext` and `SpaceType` itself stays intact:

- ✅ Adapter
- ✅ Mapping
- ✅ Metadata
- ✅ Registry
- ✅ Analyzer
- ✅ AI Classifier
- ✅ Rule Engine
- ✅ Composition
- ✅ Additional layers

Each of these is a new piece of structure that sits *alongside* or
*between* `RoomContext` and `SpaceType` — none of them requires either
model to stop being what Section 2 says it is.

### Forbidden Evolution

The following are explicitly forbidden, regardless of which future stage
or refactor proposes them:

- ❌ `RoomContext extends SpaceType`
- ❌ `SpaceType extends RoomContext`
- ❌ `merge(RoomContext, SpaceType)`
- ❌ rename `RoomContext` into `SpaceType`
- ❌ `PromptContext` directly owns `SpaceType` data
- ❌ `SpaceType` stores prompt fragments, style prompts, knowledge
  prompts, or generation data

### Architectural Test

Before any change that touches `RoomContext`, `SpaceType`, or the mapping
between them, check:

1. Does `RoomContext` remain a model of user input?
2. Does `SpaceType` remain a model of spatial classification?
3. Can the change be implemented through an Adapter, Mapping, or
   Composition?
4. Does the change avoid merging the two models into one?

If the answer to any of these is "no," the proposed change must be
reconsidered before it proceeds.

### Relation to ADR-000

This invariant does not introduce a new global Principle. It is a local
invariant of ADR-004, grounded in Principles already accepted in
ADR-000:

- **Principle 19** — Composition over Duplication.
- **Principle 20** — Evolution over Rewrite.
- **Principle 21** — Design Domain (spatial hierarchy).
- **Principle 22** — Evolution through Composition.

It does not restate these Principles in general form — it applies them
specifically and permanently to the `RoomContext`/`SpaceType` boundary
this ADR defines, the same way ADR-001/002/003 are named as concrete
applications of ADR-000's principles rather than separate rules
(ADR-000, Status). A future stage that wants to change how AI Core
evolves *in general* still edits ADR-000; a future stage that wants to
touch specifically the `RoomContext`/`SpaceType` boundary is bound by
this section.

## 4. Rationale

- **Separation of responsibility.** `RoomContext` is Prompt Domain's
  record of what the user said; `SpaceType` is Spatial Intelligence's
  classification of what kind of space that is. Conflating them would
  make Prompt Domain responsible for classification logic it was never
  meant to hold (ADR-000 Principle 4: Prompt Domain содержит только
  данные) and would make Spatial Intelligence dependent on raw user-input
  shape it should not need to know about.
- **Independent evolution.** `RoomContext` can keep accepting whatever
  free-text `roomType` the current UI sends without waiting on
  `SpaceType`'s vocabulary to stabilize; `SpaceType`'s taxonomy can grow
  (new Design Domains, new categories) without ever touching
  `PromptContext`'s shape. Each evolves on its own schedule.
- **No cyclical dependency.** The direction is one-way: `RoomContext`
  (Prompt Domain) feeds a Mapping/Adapter, which produces `SpaceType`
  (Spatial Intelligence) — never the reverse, consistent with ADR-000
  Principle 12 (Избегать циклических импортов) and the Design
  Domain → Space Type → Style → Knowledge → Prompt Engine dependency
  chain already fixed by Principle 21.
- **Principle 21 (Design Domain — верхняя пространственная ось).**
  `SpaceType` sits below Design Domain and references `DesignDomainId`,
  never the reverse. Keeping `RoomContext` outside that hierarchy — as a
  Prompt Domain concept feeding into it via Mapping, not a member of it —
  keeps the spatial hierarchy's shape intact exactly as Principle 21
  defined it.
- **Principle 22 (Evolution through Composition).** The `RoomContext →
  Mapping → SpaceType` shape *is* composition: a new capability
  (spatial classification) is added by composing two existing/future
  models through an explicit adapter, rather than by extending
  `RoomContext`'s top-level contract or collapsing it into `SpaceType`.
  This is the Decision Flow's `Composition` step, not a `Top-level
  Contract` change to either model.
- **Principle 20 (Evolution over Rewrite).** `SpaceType` is introduced
  *alongside* `RoomContext`, not as a replacement for it. `RoomContext`
  keeps working exactly as it does today; nothing about DS-7.2 (or the
  eventual Mapping step) requires breaking or rewriting Prompt Domain,
  `PromptContext`, or any of `RoomContext`'s existing callers (there are
  none in production yet, per ADR-003, but the same discipline holds
  regardless).

## 5. Migration Strategy

**Before DS-7.4:** `RoomContext` exists standalone, exactly as it does
today. `SpaceType` (once built in DS-7.2) also exists standalone, isolated
under Spatial Intelligence, per the same isolation discipline DS-7.1 used
for Design Domain. Neither references the other yet.

**After Prompt Integration (DS-7.4) begins:**

```
RoomContext
    ↓
Adapter / Mapping
    ↓
SpaceType
```

The Adapter/Mapping is a new, separate piece of code — it depends on both
`RoomContext` and `SpaceType`, never the other way around (Principle 12).
`PromptContext` itself is not changed to accommodate this: no existing
field is renamed, retyped, or removed. This is staged migration by
coexistence, per Principle 20 — no breaking rewrite of Prompt Domain is
required to introduce spatial classification.

## 6. Non-goals

This ADR does **not**:

- Introduce `SpaceType` itself (that is DS-7.2).
- Introduce a `SpaceRegistry` or any concrete taxonomy/vocabulary of
  space categories.
- Implement Prompt Integration (DS-7.4) or Knowledge Integration
  (DS-7.3).
- Add any new field to `PromptContext`.
- Add any new field to `RoomContext`.
- Pick or implement the Mapping/Adapter mechanism itself.

## 7. Examples

**Хорошо:**

```
RoomContext(roomType="office")
    ↓
RoomToSpaceMapper
    ↓
SpaceType(Office)
```

An explicit, named mapping step translates one model into the other. Both
models keep their own identity; the mapping is the only thing that knows
about both.

**Плохо:**

```
rename roomType -> SpaceType
```

```
SpaceType импортируется в Prompt Domain
```

```
RoomContext наследуется от SpaceType
```

Each of these collapses two independent concepts into one, violates
Principle 10 (Один термин = одна концепция) and/or Principle 12
(cyclical import risk — Prompt Domain reaching into Spatial
Intelligence), and reintroduces exactly the coupling this ADR exists to
prevent.

## 8. Future Evolution

Multiple mechanisms could eventually implement the `RoomContext →
SpaceType` mapping — a Rule Engine, an AI Classifier, a Vision Analyzer,
Manual Mapping, an ML Classifier, or some combination. This ADR
deliberately does **not** fix which mechanism is used. It fixes only the
architectural boundary: that a mapping step exists, that it is explicit,
and that it is the sole point of contact between the two models. Choosing
the mechanism is left to whichever stage (DS-7.4 or later) actually
implements it.

## 9. Backward Compatibility

Future evolution must preserve backward compatibility whenever reasonably
possible. Existing `PromptContext`-based implementations should continue
to work during any migration through adapters, mappings, or staged
transitions rather than breaking rewrites — consistent with ADR-000
Principle 20 (Evolution over Rewrite) and its pre-breaking-change
checklist.

## 10. Relation to existing ADRs

| ADR | Relation |
|---|---|
| ADR-000 | Architectural Principles — this ADR is a concrete application of Principles 10, 12, 19, 20, 21, and 22, not a new rule. |
| ADR-001 | Provider Terminology — unrelated axis (vendor integration naming); no overlap. |
| ADR-002 | MY_STYLE_ID — unrelated axis (style identifier); no overlap. |
| ADR-003 | Prompt Contracts — documents `PromptContext`'s `negativePrompt`/`generationMode` contracts; this ADR documents a different, spatial boundary within the same `PromptContext` family. |
| ADR-004 | Spatial boundary — this document. |

## Consequences

- No `.ts`/`.tsx` file is changed by this ADR. `RoomContext`,
  `PromptContext`, Prompt Domain, Prompt Engine, Knowledge Core, Design
  Domain, Rule Engine, Developer Studio, Generation Engine, the public
  site, and the API are all unchanged.
- DS-7.2 (Space Type Foundation) must be designed against this boundary:
  `SpaceType` is built as an independent model under Spatial
  Intelligence, referencing `DesignDomainId` (Principle 21), with no
  import of or from Prompt Domain.
- DS-7.4 (Prompt Integration) must introduce the `RoomContext →
  SpaceType` connection as an explicit Adapter/Mapping component, not as
  a change to either model's own shape.
- The Boundary Invariant (Section 3) applies to every future stage that
  touches `RoomContext`, `SpaceType`, or the mapping between them — not
  only DS-7.2/DS-7.3/DS-7.4, but any later refactor, unification effort,
  or new Spatial Intelligence module as well.
- `docs/ARCHITECTURE.md` and `docs/AI_CORE_CHECKLIST.md` gained matching
  entries (see below). No implementation changed. `npm run build` passes.

## Update — DS-7.1.3a Boundary Invariant

Documentation-only stage, no code/runtime change. Adds Section 3
("Boundary Invariant") above, ahead of DS-7.2, to close the gap the
original ADR-004 left open: Section 2 fixed the boundary *as decided
today*, but said nothing about how that boundary should be protected as
the architecture grows through DS-7.2 → DS-7.4 and beyond. This update
adds that protection as a local invariant of this ADR — not a new
ADR-000 Principle — grounded in Principles 19, 20, 21, and 22 already
accepted there. No other section of this ADR is changed in substance;
Sections 3–9 were renumbered to 4–10 to make room for the new Section 3.
`docs/ARCHITECTURE.md` gained a one-line note under Phase 7.1.3 recording
that ADR-004 was extended with this invariant. No `.ts`/`.tsx` file,
production code, or public site is affected. `npm run build` passes.
