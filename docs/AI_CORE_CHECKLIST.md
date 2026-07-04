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
- [ ] Composition over Duplication — новые модели строятся через
      композицию существующих Entity/Feature/Relation/Context, а не через
      создание параллельных структур (ADR-000 Principle 19)
- [ ] Перед созданием нового класса/типа проверено по порядку: можно ли
      использовать существующий `Feature`, существующий `Entity`,
      существующий `Relation`, существующий `Context`, существующий
      `Registry` — только если все пять дали отрицательный ответ, создана
      новая модель (ADR-000 Principle 19, DS-6.4.3)
- [ ] Новая независимая модель (если создана) одновременно (а) описывает
      принципиально новую предметную область и (б) не могла быть выражена
      через существующие Entity/Feature/Relation/Context — оба условия
      задокументированы, а не одно (ADR-000 Principle 19, DS-6.4.3)
- [ ] `PromptDraft` (`prompt-engine/builder/PromptDraft.ts`) не содержит
      Section-моделей (`StyleSection`/`RoomSection`/...) — каждое поле
      типизировано напрямую существующим Prompt Domain типом
      (`RoomContext`, `StyleContext`, `MaterialContext`,
      `FurnitureContext`, `LightingContext`, `DecorContext`,
      `ConstraintContext`, `NegativePromptContext`, `PromptMetadata`), ни
      одно поле не переобъявлено (ADR-000 Principle 19, DS-6.5.1)
- [ ] `PromptDraftBuilder` присваивает секции `PromptDraft` по ссылке на
      соответствующий под-контекст `PromptContext`, а не копирует их поля
      в новую форму — нет `deep clone`, нет параллельного построения
      объекта (DS-6.5.1)
- [ ] `builder/sections/**` не существует — ни файлов, ни пустых
      заглушек, ни повторного импорта откуда-либо (DS-6.5.1)
- [ ] PromptDraft Evolution Strategy (ADR-000 "Update — DS-6.5.2")
      задокументирована, но не выполнена — `PromptDraft` остаётся
      фиксированной композицией девяти Prompt Domain контекстов; никакой
      `DomainRegistry`/`Map<DomainId, PromptContext>`/`PromptDomainGraph`
      не создан (DS-6.5.2)
- [ ] Эволюция `PromptDraft` в сторону registry-подобной композиции не
      названа техническим долгом, TODO или дефектом архитектуры нигде в
      коде/комментариях — это документированное будущее направление,
      пересматриваемое только при появлении объективной необходимости
      (реальная новая вертикаль, не гипотетическая) (DS-6.5.2)
- [ ] Evolution over Rewrite — перед любым крупным архитектурным
      изменением (замена/удаление работающего слоя, модели или контракта)
      письменно отвечено на 5 вопросов чек-листа: можно ли использовать
      существующую модель, можно ли добавить Adapter, можно ли выполнить
      миграцию поэтапно, можно ли поддерживать обе реализации параллельно,
      является ли полный Rewrite действительно единственным вариантом —
      breaking-изменение допустимо только если все пять ответов
      отрицательны (ADR-000 Principle 20, DS-6.5.3)
- [ ] Есть ли стратегия миграции для нового слоя/модели, вводимого рядом
      со старым (ADR-000 Principle 20, DS-6.5.3)
- [ ] Требуется ли Adapter/compatibility layer между старой и новой
      реализацией на время миграции (ADR-000 Principle 20, DS-6.5.3)
- [ ] Можно ли сохранить backward compatibility существующих
      caller'ов/контрактов вместо их немедленной замены (ADR-000
      Principle 20, DS-6.5.3)
- [ ] Можно ли провести staged migration (старое и новое сосуществуют,
      пока миграция не завершена) вместо одномоментного переключения
      (ADR-000 Principle 20, DS-6.5.3)
- [ ] Design Domain (`src/lib/interior/design-domain/**`) не импортирует
      Prompt Engine (DS-7.1)
- [ ] Design Domain не импортирует Style Registry (DS-7.1)
- [ ] Design Domain не импортирует Knowledge (`knowledge/**`) (DS-7.1)
- [ ] Design Domain не импортирует Prompt Domain (`prompt-domain/**`)
      (DS-7.1)
- [ ] Design Domain ничего не знает о SpaceType — SpaceType (DS-7.2)
      будет ссылаться на `DesignDomainId`, а не наоборот (DS-7.1)
- [ ] Design Domain полностью изолирован — ничто в Style Registry,
      Knowledge, Prompt Domain, Prompt Engine, Generation Engine,
      Provider, Developer Studio, Benchmark, публичном сайте или API не
      импортирует `src/lib/interior/design-domain/**` (DS-7.1)
- [ ] Evolution through Composition — перед добавлением любого нового
      top-level поля к любой модели AI Core (Design Domain, Space Type,
      Knowledge, Prompt Domain, Prompt Engine, Room Analyzer, Material
      Engine, Style Engine, Furniture Planner, Object Detection,
      Automatic Masks, будущие модули) проверено по единственному
      официальному Decision Flow, по порядку: можно ли переиспользовать
      существующую модель, можно ли расширить её `metadata` (если она у
      модели есть), можно ли выразить через композицию, можно ли
      добавить запись в registry — top-level контракт меняется только
      если все четыре предыдущих пункта дали отрицательный ответ
      (ADR-000 Principle 22, DS-7.1.1, консолидировано в DS-7.1.1a)
- [ ] `DesignDomainMetadata` остаётся официальной, документированной
      точкой расширения Design Domain — новые возможности (`capabilities`,
      `generation`, `analysis`, `providers`, `operations`, `quality`,
      `defaults`, `roomAnalyzerHints`, `renderingHints`, `aiHints`, ...)
      добавляются туда, а не как новые поля верхнего контракта
      `DesignDomain` (DS-7.1.1)
- [ ] Верхний контракт `DesignDomain` (`id`, `displayName`, `description`,
      `icon`, `metadata`) не менялся с DS-7.1 — ни одно новое поле не
      добавлено напрямую (DS-7.1.1)
- [ ] Ровно один официальный Decision Flow во всей документации AI Core
      (`Reuse → Metadata (если поддерживается) → Composition → Registry
      → Top-level Contract`) — ни в ADR-000, ни в `design-domain/README.md`,
      ни в `docs/ARCHITECTURE.md` не описан альтернативный порядок шагов
      (DS-7.1.1a)
- [ ] Models Without Metadata — для моделей без собственного поля
      `metadata` (`PromptContext`, `KnowledgeFeature`, `KnowledgeRelation`,
      Style Registry) шаг `Metadata` пропускается, а не переставляется;
      их поток — `Reuse → Composition → Registry → Top-level Contract`
      (DS-7.1.1a)
- [ ] AI Core Evolution Axiom ("Metadata enriches an existing model.
      Composition combines existing models. Registry organizes reusable
      models. Top-level contract changes are the last resort.")
      задокументирован как сжатая формулировка Principle 22, а не как
      новый, отдельный Principle (DS-7.1.1a)
- [ ] Principles 3/19/20/21/22 не пересекаются по ответственности —
      ownership (3) / reuse (19) / migration (20) / spatial architecture
      (21) / model evolution (22), каждый отвечает ровно на один вопрос
      (DS-7.1.1a)
- [ ] Architecture Maturity — новый Principle добавляется только при
      появлении принципиально новой архитектурной концепции; локальные
      детали реализации конкретного модуля никогда не порождают новый
      Principle (DS-7.1.1a)
- [ ] Universal AI Core Rule — единственный Decision Flow и AI Core
      Evolution Axiom применяются по умолчанию ко всем модулям AI Core
      (Design Domain, Space Type, Knowledge, Prompt Engine, Room
      Analyzer, Material Engine, Style Engine, Furniture Planner, Object
      Detection, Automatic Masks, Provider Layer, Generation Engine,
      будущие модули), без необходимости повторно документировать
      правило в README каждого нового модуля (DS-7.1.1a)
- [ ] `RoomContext` не импортирует `SpaceType` (ADR-004)
- [ ] `SpaceType` не импортирует Prompt Domain (ADR-004)
- [ ] Между `RoomContext` и `SpaceType` существует только явный
      Mapping/Adapter — никакого прямого присваивания, наследования или
      переименования одного в другое (ADR-004)
- [ ] Новые пространственные модели (`SpaceType` и любые будущие) не
      изменяют `PromptContext` напрямую — интеграция происходит только
      через явный Adapter/Mapping, вводимый на DS-7.4 (ADR-004)
