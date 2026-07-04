# AI Core Checklist

Pre-flight checklist to run before starting any new AI Core architectural
stage (DS-6 and beyond). Derived from
[ADR-000 — Architecture Principles](adr/ADR-000-Architecture-Principles.md).
Not automated — reviewed by hand.

- [ ] Prompt Engine работает только с `PromptContext` (no direct reads of
      Style Registry, Developer Studio config, or request/response types)
- [ ] Builder/Formatter не дублирует string-building logic — one place
      assembles the final prompt text
- [ ] Formatter — единственная точка генерации текста
- [ ] Domain (`src/domain/**`, `src/lib/interior/**`) не знает React —
      no `"use client"`, no hooks, no components
- [ ] Domain не знает Developer Studio — nothing under `src/lib/interior/**`
      or `src/domain/**` imports from `src/app/developer/**`
- [ ] Style Registry (`INTERIOR_STYLE_REGISTRY`) остаётся единственным SSOT
      для стилей — no parallel style list is introduced
- [ ] Prompt Domain (`PromptContext` and sub-contexts) содержит только
      данные — no methods, no formatting, no business logic added to it
- [ ] Provider ничего не знает о стиле — `GenerationProvider`/`ImageProvider`
      implementations take an already-built request, not style IDs
- [ ] Generation Engine ничего не знает о Prompt Builder/Formatter — it
      only accepts a finished `prompt`/`negativePrompt` string
- [ ] Один термин = одна концепция — new identifiers checked against
      ADR-001 (`Provider` vs `Source`) and ADR-002/003 before naming
- [ ] Все новые AI-модули проходят через `PromptContext` — no module
      invents its own parallel "what to generate" shape
- [ ] Нет новых magic strings без единого владельца (`const`/union type)
- [ ] Нет новых циклических импортов между Style Registry, Prompt Domain,
      Generation Engine, Benchmark, Developer Studio
- [ ] Публичный сайт, API, `buildEditPrompt()`, `prompts.ts` не затронуты,
      если этап явно не про Production Integration (Phase 8)
- [ ] Prompt Engine ничего не знает об AI Provider — no `GPT`/`OpenAI`/
      `FLUX`/`Gemini`/`Claude`/`ComfyUI`/local-model branching anywhere
      under `src/lib/interior/prompt-engine/**` (ADR-000 Principle 14)
- [ ] `PromptContext` immutable — Builder/Rules/Pipeline never write to an
      existing `PromptContext` (`context.x = ...`); every step returns a
      new instance (`{ ...context, ... }`) (ADR-000 Principle 15)
- [ ] Rules независимы — no `PromptRule` reads, calls, or assumes the
      execution order of another rule; only `PromptPipeline` sequences
      them (ADR-000 Principle 16)
- [ ] Pipeline определяет порядок выполнения — rule/step ordering lives
      only in `PromptPipeline`, not in Builder, a Rule, or Formatter
      (ADR-000 Principle 16)
- [ ] Builder не вызывает Rules — no `PromptBuilder` implementation
      imports or calls `PromptRule`, `PromptRuleSet`, or `PromptPipeline`
      (ADR-000 Principle 17)
- [ ] Rule priority — если поле `priority` где-либо появляется, это
      metadata, которое читает только `PromptPipeline`; ни один
      `PromptRule.apply()` не читает свой или чужой `priority`, и
      сортировка по нему не реализована как часть правила (ADR-000
      Principle 18)
- [ ] RuleSet группирует правила по смыслу, но не даёт им знать друг о
      друге или о порядке выполнения — Principle 16 продолжает
      действовать внутри каждого `PromptRuleSet`
- [ ] Все `PromptRule` имеют `metadata` (`PromptRuleMetadata`: `id`,
      `name`, `description`, `enabled`, `priority`, все `readonly`) —
      никакая реализация правила не пропускает это поле (DS-6.3.1)
- [ ] `RuleEngine` не использует `metadata` напрямую — ни
      `enabled`, ни `priority`, ни любое другое поле `PromptRuleMetadata`
      не читается и не влияет на `RuleEngine.applyRules` (DS-6.3.1)
- [ ] `RuleEngine` не использует `diagnostics` — `RuleResult`,
      `RuleDiagnostics`, `RuleMetrics` нигде не производятся и не
      принимаются `RuleEngine`/`DefaultRuleEngine` (DS-6.3.1)
- [ ] `RuleEngine` не использует `trace` — `RuleTraceOptions` не
      принимается ни одним методом `RuleEngine`, никакой trace нигде не
      пишется (DS-6.3.1)
- [ ] Diagnostics (`RuleResult`, `RuleDiagnostics`, `RuleMetrics`,
      `RuleTraceOptions`) предназначены только для будущего анализа
      (Developer Studio, Benchmark, качество Prompt Engine) — не для
      логики самого Rule Engine (DS-6.3.1)
- [ ] Knowledge Base (`src/lib/interior/knowledge/**`) не дублирует
      Style Registry — `StyleKnowledge.styleId` ссылается на
      `InteriorStyle.id`, но не копирует его поля и не читает
      `INTERIOR_STYLE_REGISTRY` (DS-6.4)
- [ ] Knowledge Base не подключена к Prompt Domain, Prompt Engine
      (Builder/Rules/Formatter/Pipeline), Generation Engine, Provider,
      Developer Studio, Benchmark, публичному сайту, API,
      `buildEditPrompt()` или `prompts.ts` — ничего из перечисленного не
      импортирует `src/lib/interior/knowledge/**` (DS-6.4)
- [ ] Knowledge Base не содержит логики — `registry.ts`/
      `KnowledgeRegistry.ts` только lookup-функции по `id`, ни одна не
      строит текст промпта или не трансформирует `PromptContext`
      (DS-6.4)
- [ ] Knowledge Entity Layer (`src/lib/interior/knowledge/core/**`) —
      `KnowledgeEntity`/`KnowledgeFeature`/`KnowledgeGraph`/
      `KnowledgeRelation` остаются чистыми типами без реализации;
      `styles/*.ts`, `KnowledgeRegistry.ts`, `<domain>/registry.ts` и
      `knowledge/index.ts` не изменены и не импортируют `core/`; ничто
      за пределами `knowledge/core/**` (Prompt Domain, Prompt Engine,
      Rule Engine, Generation Engine, Provider, Style Registry,
      Developer Studio, Benchmark, публичный сайт, API) не импортирует
      `core/` (DS-6.4.1)
- [ ] Один домен → один литерал — `FeatureType` (`knowledge/core/
      FeatureTypes.ts`) — единственный источник имён доменов;
      `KnowledgeCategory` (`knowledge/types.ts`) определён как
      `FeatureType | "style"`, а не как параллельный список литералов;
      новый домен добавляется один раз, в `FeatureType` (DS-6.4.2)
- [ ] `KnowledgeEntity.type` типизирован `KnowledgeEntityKind` — нигде в
      `knowledge/core/**` не встречается `type: string`; структурная ось
      (`type`) и предметная ось (`domain: FeatureType`) не путаются друг
      с другом ни в коде, ни в комментариях (DS-6.4.2)
- [ ] Migration Strategy — задекларирована в `knowledge/core/README.md`,
      но не выполнена: `StyleKnowledge`, `KnowledgeReference` не изменили
      форму, ничего не помечено deprecated, ничего фактически не
      мигрировано (DS-6.4.2)
- [ ] `<Domain>Knowledge`/`<Domain>Feature` не дублируются — каждый из 12
      доменных типов в `knowledge/types.ts` (`MaterialKnowledge`, ...,
      `QualityKnowledge`) является алиасом соответствующего
      `<Domain>Feature` (`knowledge/core/Feature.ts`), а не отдельным
      определением (DS-6.4.2)
- [ ] `core/` остаётся изолирован от production даже после DS-6.4.2 —
      единственная новая зависимость на `core/` — из `knowledge/types.ts`,
      и она не выходит за пределы `src/lib/interior/knowledge/**`; ничто
      в Prompt Domain, Prompt Engine, Rule Engine, Generation Engine,
      Provider, Style Registry, Developer Studio, Benchmark, публичном
      сайте или API не импортирует `knowledge/core/**` прямо или
      транзитивно (DS-6.4.2)
