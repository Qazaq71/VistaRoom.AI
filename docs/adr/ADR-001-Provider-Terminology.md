# ADR-001 — Provider Terminology

## Status

Accepted (direction only — no renaming performed yet).

## Context

The word **"Provider"** is currently used in the codebase for at least four
different concepts that are not interchangeable:

1. **`ImageProvider`** (`src/providers/image/ImageProvider.ts`) — the
   production-facing adapter interface between VisataRoom AI's
   `InteriorEditRequest`/`InteriorEditResult` domain model and a real AI
   vendor API. Implemented today by `OpenAIImageProvider`
   (`src/providers/image/OpenAIImageProvider.ts`), which talks to Fal.ai's
   `openai/gpt-image-2/edit` endpoint. Instantiated by
   `createImageProvider()` and consumed by `InteriorService`
   (`src/services/InteriorService.ts`) on the public site.

2. **`GenerationProvider`**
   (`src/app/developer/engines/GenerationEngine/GenerationProvider.ts`) — a
   *separate* interface used exclusively inside Developer Studio's
   `GenerationEngine`, for generation backends consumed by `Benchmark`.
   Today only `MockGenerationProvider` exists; `OpenAIProvider`,
   `FluxProvider`, `GeminiProvider`, `LocalProvider`, `ComfyUIProvider` are
   planned. This hierarchy is intentionally decoupled from production's
   `ImageProvider` (see `GenerationEngine/README.md`) — it is a sandbox, not
   a second implementation of the same contract.

3. **`BenchmarkProvider`**
   (`src/app/developer/benchmark/types/benchmark.ts`) —
   `"mock" | "public" | "local" | "blob" | "s3"`. This concept has **nothing
   to do with AI vendors**. It selects where Benchmark's *input test
   images* are read from (a storage/source location). It is configured as
   `developerConfig.benchmark.provider` in
   `src/app/developer/config/developer.config.ts`, directly adjacent to
   `developerConfig.generation.provider` (a `GenerationProviderType`, concept
   #2 above) — two fields named `provider` in the same object, meaning two
   unrelated things.

4. **`ImageProviderName`** (`src/types/image.ts`) — currently just `'fal'`.
   A vendor-identifier string type, already deliberately renamed away from
   `ImageProvider` specifically to avoid an import collision with concept
   #1. The comment above it in `types.ts` already documents this reasoning
   — it is the one place in the codebase that has already run into this
   exact problem and solved it locally.

None of this is a bug — each concept is internally consistent and well
documented where it's defined. The problem is purely terminological: the
same word is reused across independent concepts, which makes it harder to
reason about the codebase at a glance, harder to grep for one concept
without noise from the others, and easy to accidentally conflate when
writing new code (e.g. wiring a `BenchmarkProvider` value into something
that expects a `GenerationProviderType`).

## Decision

Going forward, **one word maps to one concept only**. When new code is
written or existing code is touched for unrelated reasons, prefer
vocabulary that disambiguates these four concepts instead of reusing
"Provider" generically. Recommended direction:

| Concept | Current name(s) | Recommended future name |
|---|---|---|
| Adapter that calls a real external AI generation vendor API | `ImageProvider` (production), `GenerationProvider` (Developer Studio) | `AIProvider` — same concept name in both places is fine, since it *is* the same concept (calling an AI vendor to generate/edit an image); the module boundary (production vs. Developer Studio) already disambiguates the instance, per `GenerationEngine/README.md`. |
| Where Benchmark's input test images come from (storage/source location, unrelated to AI vendors) | `BenchmarkProvider`, `developerConfig.benchmark.provider` | `BenchmarkSource` |
| A generic storage backend, if one is ever extracted from the `"local" \| "blob" \| "s3"` values above | *(does not exist as its own type yet)* | `StorageProvider` — reserved name, do not reuse for anything else |
| Vendor/model identifier string carried on a request/result | `ImageProviderName` | Keep as-is — already correctly disambiguated |

This table is a target direction, not a migration plan. No file in this
change renames anything.

## Consequences

- No code, types, exports, or APIs are renamed as part of this ADR.
- Future PRs that touch these areas should prefer the recommended
  vocabulary for *new* identifiers rather than introducing further
  "Provider" collisions, but are not required to retrofit existing names.
- A dedicated renaming pass, if ever undertaken, should be scoped as its
  own change (see `docs/ARCHITECTURE.md`, Phase 9 — Architecture
  Refactoring 2.0, "объединение Providers") and reviewed independently of
  feature work.
