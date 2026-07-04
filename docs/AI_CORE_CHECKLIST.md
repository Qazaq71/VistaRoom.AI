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
- [ ] Space Type (`src/lib/interior/space-type/**`) не импортирует Prompt
      Engine (DS-7.2)
- [ ] Space Type не импортирует Style Registry (DS-7.2)
- [ ] Space Type не импортирует Knowledge (`knowledge/**`) (DS-7.2)
- [ ] Space Type не импортирует Prompt Domain (`prompt-domain/**`)
      (DS-7.2)
- [ ] Space Type ссылается на `DesignDomainId` (примитивный
      идентификатор), а не на весь объект `DesignDomain` — реестры
      Design Domain и Space Type остаются независимыми друг от друга
      (DS-7.2, ADR-000 Principle 21)
- [ ] Space Type полностью изолирован — ничто в Design Domain, Style
      Registry, Knowledge, Prompt Domain, Prompt Engine, Generation
      Engine, Provider, Developer Studio, Benchmark, публичном сайте или
      API не импортирует `src/lib/interior/space-type/**` (DS-7.2)
- [ ] `SpaceTypeMetadata` остаётся официальной, документированной точкой
      расширения Space Type — новые возможности (`capabilities`,
      `analysisHints`, `renderHints`, `providerHints`, `generationHints`,
      `qualityHints`, `futureFlags`, ...) добавляются туда, а не как новые
      поля верхнего контракта `SpaceType` (DS-7.2)
- [ ] Верхний контракт `SpaceType` (`id`, `designDomainId`, `displayName`,
      `description`, `icon`, `metadata`) не менялся с DS-7.2 — ни одно
      новое поле не добавлено напрямую (DS-7.2)
- [ ] `RoomContext` и `PromptContext` не изменены ни на одно поле при
      создании Space Type (ADR-004, DS-7.2)
- [ ] Между `RoomContext` и `SpaceType` по-прежнему нет ничего, кроме
      будущего явного Mapping/Adapter (DS-7.4) — DS-7.2 намеренно не
      вводит Mapping (ADR-004)
- [ ] Registry remains canonical — `SPACE_TYPE_REGISTRY` содержит только
      канонические типы пространств; персонализированные, стилевые,
      временные, клиентские и AI-сгенерированные варианты никогда не
      становятся `SpaceTypeId` (DS-7.2.1, Canonical Registry Policy)
- [ ] Metadata remains minimal — `SpaceTypeMetadata` не расширен новыми
      полями по факту документирования иллюстративного списка
      (`classification`, `behavior`, `analysis`, `generation`,
      `rendering`, `constraints`, `capabilities`, `workflow`,
      `accessibility`, `lightingScenario`, `occupancy`, `privacy`,
      `acoustics`, `climate`) — все перечисленные названия иллюстративны,
      ни одно не реализовано (DS-7.2.1, Metadata Evolution Strategy)
- [ ] Boundary invariant preserved — `RoomContext → Mapping/Adapter →
      SpaceType` остаётся постоянной границей; `RoomContext` не становится
      `SpaceType`, `SpaceType` не заменяет `RoomContext` (DS-7.2.1, Space
      Type Boundary Invariant; ADR-004 Section 3)
- [ ] SpaceType isolated — Space Type по-прежнему нигде не используется и
      не импортирует Prompt Engine, Prompt Domain (`RoomContext`,
      `PromptContext`), Knowledge (`KnowledgeFeature` и др.), Style
      Registry, Developer Studio, Benchmark, Provider, Generation Engine,
      публичный сайт или API (DS-7.2.1)
- [ ] Future evolution documented — Future Spatial Stack (`User Input →
      RoomContext → Room Analyzer → SpaceType → Knowledge → Prompt Engine
      → Generation`) и Future Spatial Axes (иллюстративная `SpaceCategory`:
      Indoor/Outdoor/Floating/Flying/Underground/Mixed) задокументированы
      как исключительно будущая работа — без реализации, без типов, без
      реестра (DS-7.2.1)
- [ ] Registry Protection — `SpaceType` никогда не становится
      `PromptContext`, не хранит prompt fragments, style-данные, provider
      hints, generation settings или бизнес-логику, и не импортирует
      Prompt Engine, Knowledge или `RoomContext` (DS-7.2.1, "What MUST
      NEVER happen")
- [ ] Spatial Knowledge is a Knowledge domain, not an integration —
      `knowledge/spaces/**` (DS-7.3) contains only canonical architectural
      knowledge records; it is not the Space Type ↔ Knowledge
      lookup/adapter originally sketched for "DS-7.3" in `ARCHITECTURE.md`
      Phase 7's overview — that connective work remains unstarted future
      work (DS-7.3)
- [ ] Spatial Knowledge records are `KnowledgeFeature` — every entry in
      `SPATIAL_KNOWLEDGE_REGISTRY` (`knowledge/spaces/registry.ts`) is a
      plain `KnowledgeFeature` (`knowledge/core/Feature.ts`); no
      `SpaceKnowledgeEntity`, `SpaceKnowledgeRecord`, or other duplicated
      model was created (DS-7.3, ADR-000 Principle 19)
- [ ] No new `FeatureType` literal introduced — `knowledge/spaces/**`
      reuses the existing `"space"` literal (`knowledge/core/
      FeatureTypes.ts`); `knowledge/core/**`, `knowledge/types.ts`, and
      `knowledge/index.ts` are unmodified by DS-7.3 (DS-7.3, ADR-000
      Principle 22 "Reuse" step)
- [ ] Structured knowledge lives in `metadata` — primary functions,
      spatial priorities, functional zones, privacy/traffic level,
      furniture categories, lighting requirements, accessibility,
      storage, acoustics, maintenance, safety, environmental constraints,
      and occupancy characteristics are all fields of each entry's
      existing `KnowledgeFeature.metadata`, not new top-level fields on a
      new type (DS-7.3, ADR-000 Principle 22 "Metadata" step)
- [ ] No Prompt-facing content in Spatial Knowledge — no entry in
      `knowledge/spaces/registry.ts` contains prompt fragments, provider
      hints, render/camera settings, image-generation instructions,
      quality/negative/style prompt text, or render engine names (DS-7.3)
- [ ] `spaces/` vs `space/` boundary documented — `knowledge/spaces/README.md`
      explicitly distinguishes the new per-canonical-Space-Type domain
      (`spaces/`, DS-7.3) from the pre-existing abstract layout/flow/zoning
      domain (`space/`, DS-6.4); both intentionally reuse the same
      `"space"` `FeatureType` literal as two independent, non-merged
      registries (DS-7.3)
- [ ] Knowledge does not import Space Type — `knowledge/spaces/registry.ts`
      does not import `space-type/**`, not even a type-only import of
      `SpaceTypeId`; each record's `id` matches a `SpaceTypeId` string by
      documented convention only (DS-7.3, mirrors "Space Type не
      импортирует Knowledge" above)
- [ ] Spatial Knowledge isolated — `knowledge/spaces/**` is not imported
      from Prompt Domain, Prompt Engine, Rule Engine, Generation Engine,
      Provider, Style Registry, Developer Studio, Benchmark, the public
      site, the API, `buildEditPrompt()`, or `prompts.ts` (DS-7.3)
- [ ] Boundary Protection documented — `knowledge/spaces/README.md` states
      the three non-overlapping questions: SpaceType answers "what space
      is this?", Knowledge answers "what is generally true about this
      space?", Prompt Engine answers "how should this influence prompt
      generation?" (DS-7.3)
- [ ] Future Spatial Intelligence chain documented, not implemented —
      `RoomContext → Room Analyzer → SpaceType → Spatial Knowledge →
      Rules → Prompt Draft → Formatter → Generation` is documented in
      `knowledge/spaces/README.md` as future work; only the Spatial
      Knowledge domain itself exists (DS-7.3)
- [ ] Commercial readiness is emergent — Office/Cafe/Restaurant/Retail/
      Hotel/Hospital/School/Airport/Warehouse/Factory/Gallery/Museum/
      Coworking coverage in `SPATIAL_KNOWLEDGE_REGISTRY` uses the same
      `KnowledgeFeature` composition as every residential entry; no
      commercial-specific type, field, or registry was introduced (DS-7.3)
- [ ] Spatial Knowledge Governance stated once — `knowledge/spaces/README.md`
      declares a single permanent responsibility ("what is generally true
      about this type of space?"), explicitly excluding generation,
      rendering, prompting, classification, analysis, and detection
      (DS-7.3.1)
- [ ] Canonical Knowledge Policy documented — allowed knowledge (typical
      circulation, privacy, lighting, storage, functional zones,
      accessibility, occupancy, acoustics, maintenance, safety) versus
      forbidden knowledge (client/project requirements, current
      uploaded/generated room, furniture coordinates, prompt wording,
      provider hints, rendering instructions, camera settings, business
      rules, temporary project data) is tabulated with where each
      forbidden category actually belongs instead (DS-7.3.1)
- [ ] Knowledge Stability Contract documented — Spatial Knowledge holds
      only stable/general/reusable architectural knowledge; never
      project-specific, customer-specific, session-specific,
      AI-generated, runtime, user-specific, or dynamic facts, which
      belong to Room Analyzer, a future Project Model, `PromptContext`,
      or future runtime layers (DS-7.3.1)
- [ ] Future Knowledge Layers are illustrative, not implemented —
      Structural/Environmental/Operational/Behavioral/Commercial/Safety/
      Accessibility/Compliance/Workflow/Building Code are documented as a
      possible future composition; none is a current `metadata` field,
      none is a separate registry, none is implemented (DS-7.3.1)
- [ ] Metadata Evolution documented, current model unchanged — the
      illustrative list (`behavior`, `workflow`, `environment`,
      `accessibility`, `operations`, `compliance`, `buildingCode`,
      `security`, `maintenance`, `visitorFlow`, `occupancy`, `energy`,
      `sustainability`) is not implemented; `SPATIAL_KNOWLEDGE_REGISTRY`'s
      `metadata` field set is unchanged by DS-7.3.1 (DS-7.3.1)
- [ ] Knowledge Boundary documented as four non-overlapping roles —
      `SpaceType → Spatial Knowledge → Rules → Prompt Draft → Formatter →
      Generation`; identify (`SpaceType`) / explain (Spatial Knowledge) /
      interpret (Rules) / generate (Prompt Engine) never overlap
      (DS-7.3.1)
- [ ] Future Consumers documented without a shape change — Prompt Engine,
      Room Analyzer, Furniture Planner, Material Engine, Object
      Detection, Automatic Zoning, Commercial/Healthcare/
      Hospitality/Industrial/Landscape Planner, Developer Studio,
      Benchmark, and future BIM integrations are named as future readers
      of the same `KnowledgeFeature` registry shape — none imports
      `knowledge/spaces/**` today (DS-7.3.1)
- [ ] Reuse Policy documented — the single official Decision Flow
      (`Reuse → Metadata → Composition → Registry → Top-level Contract`,
      ADR-000 Principles 19–22) is applied explicitly to
      `knowledge/spaces/**` as the mandatory evaluation order for any
      future extension (DS-7.3.1)
- [ ] Registry Protection formalized — `knowledge/spaces/README.md` lists
      twelve permanent prohibitions (Knowledge never becomes Prompt,
      never stores prompt text/providers/rendering instructions/project
      data/generated results/user preferences/coordinates/detected
      objects, never imports Prompt Engine/`RoomContext`/Space Type
      runtime) as "What MUST NEVER happen" (DS-7.3.1)
- [ ] Knowledge Identity documented across five layers — `SpaceType`
      ("what space is this?") / Spatial Knowledge ("what is generally
      true about spaces of this type?") / Room Analyzer ("what is true
      about THIS uploaded room?") / Prompt Engine ("how should AI use
      this knowledge?") / Generation ("produce the image") each answer a
      distinct question (DS-7.3.1)
- [ ] Spatial Knowledge Invariants recorded — Knowledge never classifies,
      never generates, never analyzes, never stores runtime facts, never
      owns Prompt logic, never owns rendering; always remains reusable
      (DS-7.3.1)
- [ ] DS-7.3.1 is documentation-only — `knowledge/spaces/{registry,
      index}.ts`, `knowledge/core/**`, `knowledge/types.ts`,
      `space-type/**`, `design-domain/**`, Prompt Engine, Prompt Domain,
      `PromptContext`, `RoomContext`, Rule Engine, Builder, Formatter,
      Pipeline, Style Registry, Developer Studio, Benchmark, the public
      site, the API, and Production are unmodified; no new ADR was
      created (ADR-000 Principles 19–22 and ADR-004 already own this
      responsibility) (DS-7.3.1)
- [ ] Is there an ADR for this architectural decision?
- [ ] Is the ADR registered in [ADR_INDEX](adr/ADR_INDEX.md)?
- [ ] Does an existing ADR already own this responsibility?
- [ ] Is a new ADR truly necessary?
- [ ] If a boundary/invariant was added, is it listed in ADR_INDEX's Local
      Invariants Registry?
- [ ] If a new ADR was created, were `ARCHITECTURE.md` and
      `AI_CORE_CHECKLIST.md` updated if needed?
- [ ] Architecture Area assigned? (one of CORE, PROMPT, SPATIAL,
      KNOWLEDGE, PROVIDER, STYLE, PRODUCTION, DEVELOPER, BENCHMARK — see
      [ADR_INDEX Architecture Areas](adr/ADR_INDEX.md#architecture-areas))
- [ ] Owner defined in the [ADR Registry](adr/ADR_INDEX.md#adr-registry)
      `Owner` column?
- [ ] ADR `Version` updated per the [ADR Versioning
      Policy](adr/ADR_INDEX.md#adr-versioning-policy) (major for a new
      invariant/boundary/ownership change, minor for clarification)?
- [ ] ADR `Stability` still correct per the [ADR Stability
      Policy](adr/ADR_INDEX.md#adr-stability-policy) (Stable / Growing /
      Experimental / Deprecated)?
- [ ] [ADR_MAP.md](adr/ADR_MAP.md) updated if the visual map's shape
      changed (new Area, new future placeholder, new relationship)?
- [ ] [Architecture Dashboard](adr/ADR_INDEX.md#architecture-dashboard)
      updated if this change affects an Area's coverage/owner/maturity/risk?
- [ ] Review Frequency assigned? (see [ADR_INDEX's Review
      Frequency](adr/ADR_INDEX.md#review-frequency))
- [ ] Decision Confidence assigned? (see [ADR_INDEX's Decision
      Confidence](adr/ADR_INDEX.md#decision-confidence))
- [ ] Related ADRs reviewed? (conceptual links only — must not be
      confused with `Depends On`; see [ADR
      Relationships](adr/ADR_INDEX.md#adr-relationships))
- [ ] [ADR History](adr/ADR_INDEX.md#adr-history) updated with a new
      entry, and `Version` bumped to match (major for a new
      invariant/boundary/ownership change, minor for clarification)?
- [ ] Tags updated for discoverability (navigation only — do not imply
      ownership)?

## Governance Completion Checks (DS-7.1.3e)

Verifies the [ARCHITECTURE.md Architecture Milestone
A1](ARCHITECTURE.md#architecture-milestone-a1--ai-core-foundation-complete)
closure stays intact — run once per future architectural stage, alongside
the checks above:

- [ ] Architecture Milestone recorded — `ARCHITECTURE.md` contains exactly
      one "Architecture Milestone A1" section; no second milestone section
      was added elsewhere
- [ ] Governance status updated — [ADR_INDEX's Architecture
      Status](adr/ADR_INDEX.md#architecture-status) still reads `Foundation
      Complete (A1)`, or has been deliberately advanced to a new milestone
      alongside `ARCHITECTURE.md`
- [ ] Governance Freeze respected — no change modifies the governance
      model itself (Registry shape, Versioning/Stability/Confidence/Review
      Frequency policies, Ownership/Governance Rules, Creation/Update/
      Decision checklists) without the [Governance Freeze
      Policy](ARCHITECTURE.md#governance-freeze-policy)'s explicit review +
      new-ADR-if-necessary + new-milestone sequence
- [ ] Future tooling separated from architecture — nothing in [Future
      Governance Automation](ARCHITECTURE.md#future-governance-automation)
      (ADR_MAP auto-generation, CI consistency validation, relationship
      validation, cross-reference detection, coverage validation, HTML
      portal, search/index, dependency visualization) is described as an
      architectural requirement or given ADR ownership
- [ ] Milestone timeline updated — new milestones are appended to the
      [Architecture Milestone
      Timeline](ARCHITECTURE.md#architecture-milestone-timeline) in order;
      the timeline is not repurposed as a roadmap
