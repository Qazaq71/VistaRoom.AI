# ADR-003 — PromptContext Contracts

## Status

Proposed. In DS-5.1, Contract 1 gained a type-only stub (see "Update —
DS-5.1 Architecture Cleanup" below); no generation logic is implemented
for either contract yet — that remains DS-6 (or later) work.

## Context

`PromptContext` (`src/lib/interior/prompt-domain`, introduced in DS-5) is a
pure-data domain model with **no consumers yet** — per its own README
(`src/lib/interior/prompt-domain/README.md`, section 9): "`PromptContext` и
все под-контексты созданы, но нигде не используются." Nothing in the
public site, API routes, `Benchmark`, `GenerationEngine`, Style Registry,
or `prompts.ts`/`buildEditPrompt()` reads from or writes to it today.

The documented target architecture (same README, section 8) is:

```
Style Registry → Prompt Domain → Prompt Engine → Generation Engine → ProviderFactory → Provider → Model
```

`Prompt Engine` (Phase 6 in `docs/ARCHITECTURE.md`) is the not-yet-created
component responsible for turning a `PromptContext` into the concrete
request shapes (`GenerationRequest`, `InteriorEditRequest`) that already
exist today. This ADR fixes two contracts that Prompt Engine will need to
satisfy, without implementing either of them now.

## Contract 1 — `negativePrompt` path

**Current state today (production, independent of Prompt Domain):**

- `src/lib/prompts.ts` → `buildEditPrompt()` returns
  `{ positive: string; negative: string }`. The `negative` string is
  built inline, ad hoc, per call (hardcoded phrases plus a
  `my_style`-conditional clause).
- `src/app/api/generate/route.ts` calls `buildEditPrompt(...)` but
  **destructures only `positive`** (e.g. line 171, 182:
  `const { positive } = buildEditPrompt(...)`). The computed `negative`
  string is discarded — it is never attached to `editRequest`, never part
  of `InteriorEditRequest`, and never sent to the provider.
- `InteriorEditRequest` (`src/domain/interior/InteriorEditRequest.ts`) has
  no `negativePrompt` field.
- `OpenAIImageProvider` (`src/providers/image/OpenAIImageProvider.ts`)
  submits a payload of `image_urls`, `prompt`, `mask_url`, `quality`,
  `num_images`, `output_format` to Fal.ai's `openai/gpt-image-2/edit`
  endpoint — there is no `negative_prompt` field in that payload today.

**Prompt Domain state today:**

- `NegativePromptContext`
  (`src/lib/interior/prompt-domain/contexts/NegativePromptContext.ts`)
  defines `{ negativePrompts: string[] }`, attached to `PromptContext` as
  `PromptContext.negativePrompt`. This is pure data with no formatting or
  assembly logic — the README (section 1) is explicit that turning this
  into a final string is Prompt Engine's job, not Prompt Domain's.

**Contract to be implemented in DS-6 (documented here, not built yet):**

```
PromptContext.negativePrompt.negativePrompts (string[])
  ↓  (Prompt Engine assembles into a single string)
GenerationRequest / InteriorEditRequest  (needs a negativePrompt field — does not exist yet)
  ↓
Provider (GenerationProvider / ImageProvider — needs to accept and forward it)
  ↓
Model (needs to actually support a negative-prompt concept)
```

Open question for whoever implements DS-6, recorded here rather than
decided: `openai/gpt-image-2/edit` (today's only production model,
per `OpenAIImageProvider.ts`) does not expose a `negative_prompt`
parameter in its current payload shape. Whether the negative prompt gets
folded into the positive prompt text, dropped for this model, or requires
a model change is left open.

## Contract 2 — `generationMode` ↔ production mode/operation enums

Three differently-scoped "mode"-shaped enums exist today and are **not**
the same axis:

- `InteriorOperation` (`src/types/image.ts:5`) —
  `'redesign' | 'replace' | 'erase'` — which pixel transformation the
  model performs.
- `InteriorMode` (`src/types/image.ts:7`) — `'style' | 'partial' | 'clear'`
  — the production API's request mode, used in `route.ts` to choose which
  `InteriorOperation`/prompt-building branch runs.
- `PromptGenerationMode` (`src/lib/interior/prompt-domain/types.ts:16`,
  exposed as the `generationMode` field on `StyleContext`) —
  `'preset' | 'my_style'` — an orthogonal axis: whether the *style itself*
  comes from the catalog (Style Registry) or from the user's custom
  configuration ("Мой стиль"). A request can independently be
  `InteriorMode: 'style'` or `'partial'` while its style source is either
  `'preset'` or `'my_style'` — the two axes are not variants of each other.

Neither `GenerationRequest` (`src/app/developer/engines/GenerationEngine/types.ts`)
nor `InteriorEditRequest` currently carries anything resembling
`generationMode`/`PromptGenerationMode` — it exists only inside the unused
`PromptContext`.

**Options for how Prompt Engine reconciles this, documented here for a
future decision — none chosen yet:**

1. **Keep fully orthogonal.** `generationMode` only ever selects which
   style-prompt-building branch Prompt Engine runs (catalog lookup vs.
   `buildMyStylePart`-equivalent); it never becomes a field on
   `GenerationRequest`/`InteriorEditRequest`, which continue to describe
   only the pixel operation via `InteriorOperation`/`InteriorMode`.
2. **Surface it explicitly.** Add a distinct field carrying the style
   source onto `GenerationRequest`/`InteriorEditRequest` (under a name
   that does not collide with `InteriorMode`, e.g. `styleSource`) so it is
   visible downstream for logging/analytics/benchmarking, without merging
   it into the existing mode/operation enums.
3. **Rename at the Prompt Domain layer.** Since `StyleContext.generationMode`
   already shares the word "mode" with `InteriorMode` for a different axis
   — the same terminology-collision pattern described in ADR-001 — a
   future rename of the `StyleContext` field away from `generationMode`
   (e.g. to `styleSource: 'catalog' | 'custom'`) may reduce confusion
   independently of which option above is chosen.

## Decision

Both contracts above are **documented, not implemented**. DS-6 (or a later
stage) must pick and implement one concrete resolution for each contract.
This ADR's role is to make sure that decision is made deliberately against
a written record of the current state, rather than rediscovered from
scratch or decided implicitly by whatever the first PR happens to do.

## Consequences

- `PromptContext`, `NegativePromptContext`, `StyleContext`,
  `InteriorEditRequest`, `buildEditPrompt()`, and `route.ts` are all
  unchanged by this ADR. `GenerationRequest`/`GenerationResponse` gained a
  type-only `negativePrompt?: string` field in DS-5.1 (see below) — no
  logic changed.
- DS-6 planning should treat "wire up `negativePrompt`" and "reconcile
  `generationMode` with `InteriorMode`/`InteriorOperation`" as two
  separate, explicit decisions to make before or during implementation.
- `generationMode` remains its own Prompt Domain concept for now (Option
  1/2/3 above are still all open) and will be explicitly mapped onto
  production's `InteriorMode`/`InteriorOperation` at the Production
  Integration stage (`docs/ARCHITECTURE.md`, Phase 8), not before.

## Update — DS-5.1 Architecture Cleanup

**Contract 1 — type-only stub added, no logic:**

`src/app/developer/engines/GenerationEngine/types.ts` now declares
`negativePrompt?: string` on both `GenerationRequest` and
`GenerationResponse`. This is purely a type-level placeholder for the
chain described above (`PromptContext` → Prompt Engine →
`GenerationRequest.negativePrompt` → Provider → Model) — no code reads,
builds, or forwards this field yet. `MockGenerationProvider` is unaffected
(the field is optional, so its existing object literals remain valid) and
was not edited. `InteriorEditRequest`/`InteriorEditResult` (the
production, non-Developer-Studio request shape) were **not** touched —
adding a matching field there is production-facing and stays out of scope
until Production Integration.

**Contract 2 — unchanged:** `generationMode` remains untouched and
undecided; no options were selected, no fields renamed.

## Update — DS-5.2 AI Core Final Polish

Re-audited; no change. DS-5.2's explicit constraints ("не менять Prompt
Domain," "не менять Generation Engine," "не начинать DS-6") mean both
contracts stay exactly as DS-5.1 left them: Contract 1 has its type-only
`negativePrompt?: string` stub and no logic; Contract 2 has three
documented options and no decision. Both remain DS-6 work. This ADR is
folded under [ADR-000](ADR-000-Architecture-Principles.md) principles
4–6 (Prompt Domain is data-only; Prompt Engine/Formatter own text
assembly) and 7 (Generation Engine doesn't know about styles).
