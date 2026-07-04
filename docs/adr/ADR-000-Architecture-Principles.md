# ADR-000 — Architecture Principles

## Status

Accepted. This is the top-level architectural constitution for VisataRoom
AI's AI Core; ADR-001, ADR-002, and ADR-003 are concrete applications of
these principles, not separate rules.

## Context

By DS-5.2, several independent architectural boundaries had accumulated
across `src/lib/interior/**` (Style Registry, Prompt Domain) and
`src/app/developer/**` (Developer Studio, Generation Engine, Benchmark),
each documented in its own README, but with no single place stating the
principles all of them are instances of. This ADR is that place. It
does not introduce new rules — it names the rules that ADR-001/002/003
and the module READMEs were already each independently enforcing.

## Principles

1. **Domain не знает UI.** Domain code (`src/domain/**`,
   `src/lib/interior/prompt-domain/**`, `src/lib/interior/styles/**`)
   contains no React, no hooks, no components, no `"use client"`. It must
   compile and run identically in a server context with zero UI
   dependencies.

2. **Developer Studio использует AI Core, но не определяет его.**
   `src/app/developer/**` is a *consumer* of Style Registry, Prompt
   Domain, and (its own) Generation Engine — it may read from them, but
   the domain models themselves must never import from
   `src/app/developer/**`. Developer Studio is where AI Core is exercised
   and benchmarked, not where it is designed.

3. **Style Registry — единственный источник знаний о стилях.**
   `INTERIOR_STYLE_REGISTRY` (`src/lib/interior/styles`) is the one place
   that knows what interior styles exist, their display names, prompt
   fragments, and categories. Nothing else — not Benchmark, not Developer
   Studio, not a future Prompt Engine — redefines style data; they only
   reference this registry (as `BenchmarkService.ts` and `StyleContext.ts`
   already do).

4. **Prompt Domain содержит только данные.** `PromptContext` and its
   sub-contexts (`src/lib/interior/prompt-domain/**`) are pure types and
   plain data — no methods, no formatting, no string assembly, no
   business logic. Assembling a final prompt string is explicitly not
   this layer's job.

5. **Prompt Engine работает только с PromptContext.** When Prompt Engine
   is built (Phase 6, not started), its only input contract is
   `PromptContext`. It must not reach around it to read Style Registry,
   Developer Studio config, or request/response shapes directly — those
   all flow into it *through* `PromptContext`.

6. **Formatter — единственное место генерации текста.** Whatever
   component eventually turns `PromptContext` into an actual prompt
   string (referred to as a Formatter/Prompt Engine concern) is the only
   place that concatenates or formats prompt text. No other layer
   (Provider, Generation Engine, Style Registry) should build prompt
   strings of its own.

7. **Generation Engine не знает о стилях.** `GenerationEngine`
   (`src/app/developer/engines/GenerationEngine`) accepts an already-built
   `prompt: string` on `GenerationRequest` — it has no knowledge of style
   IDs, categories, or the Style Registry. It only knows how to submit a
   request to a provider and shape the response.

8. **Provider — интеграция с AI.** "Provider" is reserved exclusively for
   adapters that call a real external AI/model vendor API (`ImageProvider`
   in production, `GenerationProvider` in Developer Studio). See
   ADR-001.

9. **Source — источник данных.** "Source" is reserved for where
   data/images/benchmark inputs come from (storage/location), never for
   AI vendor integration. See ADR-001 (`BenchmarkSource`).

10. **Один термин = одна концепция.** A given word is used for exactly
    one concept across the codebase. When the same word would otherwise
    mean two things (as it did for "Provider" and, orthogonally, for
    "mode" — see ADR-003 Contract 2), one of the two gets a different
    name rather than sharing the word.

11. **Минимизировать magic strings.** A string literal that is compared,
    branched on, or reused in more than one place should have exactly one
    named owner (a `const`, a union type, or both) that every call site
    imports, instead of being retyped independently at each site. See
    ADR-002 (`MY_STYLE_ID`) and the DS-5.2 cleanup below
    (`DEVELOPER_ROOT_PATH`, `BenchmarkSource`).

12. **Избегать циклических импортов.** Dependencies flow one direction:
    Style Registry → Prompt Domain → (future) Prompt Engine → Generation
    Engine → Provider → Model, and separately Developer Studio →
    Benchmark → Generation Engine. Nothing lower in a chain imports back
    up it.

13. **Domain важнее UI.** When a UI convenience and a domain-boundary rule
    conflict, the domain boundary wins — UI code adapts to the domain
    model, not the other way around.

## Consequences

- ADR-001 (Provider Terminology), ADR-002 (MY_STYLE Identifier), and
  ADR-003 (PromptContext Contracts) are read as concrete instances of
  principles 8–11 above, not independent decisions.
- `docs/AI_CORE_CHECKLIST.md` operationalizes these principles as a
  pre-flight checklist for every future architectural stage (starting
  with DS-6).
- These principles are not enforced by tooling (no lint rule, no CI
  check) as of DS-5.2 — they are enforced by review discipline only.
  Adding automated enforcement (e.g. an import-boundary lint rule) is a
  candidate for a future stage, not decided here.
