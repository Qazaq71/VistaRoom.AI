# Architecture Roadmap

Этот документ фиксирует последовательность этапов (Developer Studio,
DS-1 → DS-N) построения AI Core VisataRoom AI и не описывает готовую
архитектуру целиком — он обновляется по мере выполнения каждого этапа.

## Phase 1 — Developer Studio

Внутренний инструмент (`src/app/developer/**`) для тестирования и отладки
AI-модулей отдельно от публичного сайта.

## Phase 2 — Benchmark

Инструмент сравнения провайдеров/моделей генерации внутри Developer
Studio.

## Phase 3 — Generation Engine

Единая точка вызова провайдеров генерации изображений (модель, API,
таймауты, ретраи), не знающая о смысле "стиля" или "промпта".

## Phase 4 — Style Registry

`INTERIOR_STYLE_REGISTRY` (`src/lib/interior/styles`) — единый
типизированный источник правды о всех интерьерных стилях, заменяющий
разрозненные `STYLE_DISPLAY` / `STYLE_DESCRIPTIONS` / `MOCK_STYLES`.

## Phase 5 — Prompt Domain (текущий этап, DS-5)

`PromptContext` (`src/lib/interior/prompt-domain`) — центральная
доменная модель, описывающая "что должно быть сгенерировано":
комната, стиль, материалы, мебель, освещение, декор, ограничения,
негативные промпты, метаданные. Только типы, без бизнес-логики. Пока
нигде не используется.

## Phase 5.1 — Architecture Cleanup (DS-5.1)

Небольшие, безопасные правки терминологии по итогам Architecture Review
1.0, перед началом DS-6. Не рефакторинг, не Prompt Engine. См.
"Architecture Decisions" ниже за деталями:

- `MY_STYLE_ID` — новая константа (`src/lib/interior/constants.ts`),
  единый источник истины для литерала `"my_style"`. Пока используется
  только в `styles/myStyle.ts` и `prompt-domain/types.ts`; production-код
  (`prompts.ts`, `route.ts`, `page.tsx`, `useImageGeneration.ts`,
  `StylePicker.tsx`) не тронут — миграция отложена.
- `BenchmarkProvider` → `BenchmarkSource`,
  `developerConfig.benchmark.provider` → `developerConfig.benchmark.source`
  — терминология "Provider = AI/model integration, Source = данные/сторедж"
  зафиксирована и применена там, где это было безопасно (нулевые
  дополнительные точки использования). `GenerationProvider` не
  переименован.
- `GenerationRequest`/`GenerationResponse`
  (`GenerationEngine/types.ts`) получили опциональное поле
  `negativePrompt?: string` — только тип, без логики. `InteriorEditRequest`
  (production) не менялся.

## Phase 5.2 — AI Core Final Polish (DS-5.2)

Финальная полировка AI Core перед DS-6: закрытие мелкого архитектурного
долга, который можно было устранить безопасно. Фундамент AI Core (Style
Registry, Prompt Domain, Generation Engine, Developer Studio, Benchmark)
после этого этапа считается завершённым. См.
[ADR-000 — Architecture Principles](adr/ADR-000-Architecture-Principles.md)
и [AI_CORE_CHECKLIST.md](AI_CORE_CHECKLIST.md).

- Зафиксирован главный документ принципов — `ADR-000`.
- Устранены 3 небольших magic-string/SSOT дублирования внутри Developer
  Studio (не в Prompt Domain, который в этом этапе не менялся):
  `developerConfig.benchmark.source` теперь типизирован через
  `BenchmarkSource` вместо повторного инлайн-юниона; `developerConfig.studioName`
  теперь ссылается на `DEVELOPER_STUDIO_NAME` вместо повторной строки;
  новая константа `DEVELOPER_ROOT_PATH` (`constants/developer.ts`) заменила
  три независимых литерала `"/developer"` в `lib/navigation.ts`,
  `hooks/useDeveloperNavigation.ts` и `page.tsx`; `DeveloperTopBar.tsx`
  теперь читает версию из `developerConfig.version` вместо второй
  захардкоженной строки `"Version 1.0"`.
- Проведён полный аудит (dead code, magic strings, naming, imports) по
  Developer Studio, Prompt Domain, Generation Engine, Benchmark и Style
  Registry — результаты и то, что сознательно оставлено без изменений,
  задокументированы в ADR-000 и в истории проекта. Prompt Domain, Generation
  Engine (перенос) и production не менялись, как и требовалось.

## Phase 6 — Prompt Engine

Соберёт `PromptContext` в финальный текстовый промпт/negative prompt для
провайдера, используя `promptFragment` стиля и данные всех
под-контекстов.

### Phase 6.1 — Prompt Engine Core / Foundation (DS-6.1, текущий этап)

Создан только фундамент (`src/lib/interior/prompt-engine`): структура
директорий (`builder/`, `formatter/`, `rules/`, `pipeline/`,
`validators/`, `templates/`) с README-описанием ответственности каждого
слоя, и типы-контракты без реализации — `PromptResult`, `PromptBuilder`,
`PromptFormatter`, `PromptRule`, `PromptValidator`, `PromptTemplate`,
`PromptPipeline` (`types.ts`, реэкспорт в `index.ts`).

Prompt Engine на этом этапе работает только с `PromptContext` (Prompt
Domain, DS-5) и не импортирует React, Next, Developer Studio, Generation
Engine, Provider или Benchmark. Ни одной реализации (`PromptBuilderImpl`,
`PromptFormatter`-логики, правил, валидаторов, шаблонов, pipeline) не
написано — только контракты. Не подключён ни к чему: публичный сайт,
API, `buildEditPrompt()`, `prompts.ts`, Generation Engine, Provider,
Style Registry, Prompt Domain и Benchmark не затронуты.

### Phase 6.2 — Prompt Builder MVP (DS-6.2)

Первая рабочая реализация внутри Prompt Engine:
`src/lib/interior/prompt-engine/builder/`.

- `PromptBuilder.ts` — `DefaultPromptBuilder`, первая реализация
  контракта `PromptBuilder` (`../types.ts`). Identity builder: получает
  `Readonly<PromptContext>`, возвращает новый `PromptContext` со всеми
  теми же данными (`{ ...context }`) — ничего не добавляет, не выводит,
  не сливает. Не мутирует вход (ADR-000 Principle 15).
- `PromptBuilderFactory.ts` — `createPromptBuilder()`, пока всегда
  возвращающая `DefaultPromptBuilder`; готовит место для будущих
  специализированных Builder (`InteriorPromptBuilder`,
  `FurniturePromptBuilder`, `ReplacePromptBuilder`,
  `CleanRoomPromptBuilder`, `RoomAnalysisPromptBuilder`).
- `README.md` — обновлён: описывает, что Builder не работает со
  строками, не знает про GPT/OpenAI/Formatter, создаёт только
  `PromptContext`.

Builder работает исключительно с Domain-моделью: не создаёт строк, не
знает про `positivePrompt`/`negativePrompt`, не импортирует GPT, OpenAI,
Formatter, Rules, Pipeline, Provider, Generation Engine, Developer
Studio, Benchmark, React или Next.js. Не подключён к реальной генерации
— публичный сайт, API, `buildEditPrompt()`, `prompts.ts`, Prompt Domain,
Generation Engine, Provider, Developer Studio и Benchmark не затронуты.

### Phase 6.2.1 — Rule Engine Preparation (DS-6.2.1)

Небольшие архитектурные уточнения перед DS-6.3, без единой строки
реализации Rules/Rule Engine:

- **`RuleSet`** назван как будущая концепция: логическая группа
  независимых `PromptRule` (например, будущие `InteriorRuleSet`,
  `LightingRuleSet`, `FurnitureRuleSet`, `MaterialRuleSet`,
  `DecorRuleSet`, `ConstraintRuleSet`, `MyStyleRuleSet`). Добавлен
  type-only контракт `PromptRuleSet` (`prompt-engine/types.ts`):
  `{ id, name, rules: PromptRule[], priority?: number }`. Ни один
  конкретный `RuleSet` не реализован.
- **Rule priority — metadata, не логика.** `PromptRule` не определяет
  порядок выполнения сам; это по-прежнему исключительно решение
  `PromptPipeline`. Опциональное поле `priority` на `PromptRuleSet` —
  данные для будущего Pipeline, а не бизнес-логика внутри правила.
  Сортировка не реализована.
- **Builder boundary.** Зафиксировано: `PromptBuilder` никогда не
  вызывает Rules и не знает о Rule Engine — он только создаёт/нормализует
  `PromptContext`. После Builder начинается Rule Engine, но это знает
  только Pipeline.
- `ADR-000` — добавлены Principle 17 (Builder не вызывает Rules) и
  Principle 18 (Rule priority — metadata, не логика).
  `docs/AI_CORE_CHECKLIST.md` — добавлены соответствующие пункты.
- Обновлена документация: `prompt-engine/README.md`,
  `builder/README.md`, `rules/README.md`, `pipeline/README.md`.

Не создано: `RuleEngine`, реальные `PromptRule`, `RuleRegistry`,
`RulePipeline`, сортировка по `priority`. Builder (`PromptBuilder.ts`,
`PromptBuilderFactory.ts`) не менялся. Публичный сайт, API,
`buildEditPrompt()`, `prompts.ts`, Generation Engine, Provider, Prompt
Domain, Style Registry, Developer Studio и Benchmark не затронуты.

### Phase 6.3 — Rule Engine Foundation (DS-6.3, завершён)

Первая рабочая реализация Rule Engine:
`src/lib/interior/prompt-engine/rules/`.

- `RuleEngine.ts` — интерфейс `RuleEngine`: `applyRules(context:
  Readonly<PromptContext>, ruleSet: PromptRuleSet): PromptContext`.
  Отдельный, более узкий контракт, чем `PromptPipeline` (`../types.ts`)
  — владеет только шагом "Rules" будущего прохода Builder → Rules →
  Formatter, не всем прохождением целиком.
- `DefaultRuleEngine.ts` — первая реализация: последовательно применяет
  каждое правило из `ruleSet.rules` (`Array.reduce`), передавая
  результат одного правила следующему, и возвращает новый
  `PromptContext`. При `rules.length === 0` — единственный возможный
  случай сейчас — возвращает новый `PromptContext`, идентичный входному
  по данным, без изменений. Не мутирует вход (ADR-000 Principle 15).
- `RuleRegistry.ts` — `getRuleSet(id): PromptRuleSet | undefined`,
  простая фабрика-таблица. Зарегистрирован ровно один `RuleSet` —
  `DEFAULT_RULE_SET` (`id: "default"`, `rules: []`).
- `README.md` — переписан: описывает `PromptRule`, `RuleSet`,
  `RuleEngine`, `RuleRegistry`, место Rule Engine между Builder и
  Formatter, и явно фиксирует, что Rule Engine не знает про Formatter,
  Prompt-как-строку, GPT/OpenAI/любую модель, Builder, Pipeline,
  Provider, Generation Engine, Developer Studio, Benchmark.

Rule Engine работает исключительно с `PromptContext`/`PromptRuleSet`: не
создаёт строк, не знает про `positivePrompt`/`negativePrompt`, не
импортирует React, Next.js, Builder, Formatter, Pipeline, Provider,
Generation Engine, Developer Studio или Benchmark. Ни одного настоящего
правила (`LightingRule`, `MaterialRule`, `FurnitureRule`, `StyleRule`) не
создано — только пустой `DEFAULT_RULE_SET`. Не подключён к реальной
генерации — публичный сайт, API, `buildEditPrompt()`, `prompts.ts`,
Prompt Domain, Builder, Formatter, Pipeline, Generation Engine, Provider,
Developer Studio и Benchmark не затронуты.

### Phase 6.3.1 — Rule Engine Diagnostics & Metadata (DS-6.3.1, завершён)

Небольшое, чисто архитектурное расширение контрактов Rule Engine перед
DS-6.4 (Universal Interior Knowledge Base) — без единой строки логики и
без изменения поведения `RuleEngine`/`DefaultRuleEngine`/`RuleRegistry`.

- **Rule Metadata.** `PromptRule` (`prompt-engine/types.ts`) расширен
  обязательным `readonly metadata: PromptRuleMetadata`:
  `{ id, name, description, enabled, priority }`, все поля `readonly`.
  `id`/`name`/`description` — только документация. `enabled` и
  `priority` зарезервированы на будущее (например, для Pipeline,
  который сможет пропускать отключённые правила или сортировать по
  приоритету) — на DS-6.3.1 ни одно из этих полей нигде не читается, и
  ни одно правило не имеет права читать `enabled`/`priority` (своё или
  чужое) для изменения своего поведения.
- **`RuleResult`.** Будущая, более богатая альтернатива тому, что
  сегодня возвращает `RuleEngine.applyRules` (голый `PromptContext`):
  `{ context: PromptContext; diagnostics?: RuleDiagnostics[]; warnings?:
  string[]; metrics?: RuleMetrics }`. Не производится и не принимается
  нигде — `RuleEngine` продолжает работать напрямую с `PromptContext`.
- **`RuleDiagnostics`/`RuleMetrics`.** `RuleDiagnostics` — `{ ruleId,
  message, severity: RuleDiagnosticSeverity }` (`"info" | "warning" |
  "error"`). `RuleMetrics` — `{ executionTime, changes }`. Оба — типы
  без реализации; ни одно правило их не производит.
- **`RuleTraceOptions`.** `{ enableTrace: boolean }` — контракт будущего
  флага трассировки прохождения `PromptContext` через `RuleSet`.
  `RuleEngine`/`DefaultRuleEngine` не принимают такую опцию и не пишут
  trace никуда.
- `rules/README.md` — добавлен раздел "Diagnostics", объясняющий
  metadata/`RuleResult`/`RuleDiagnostics`/`RuleMetrics`/`RuleTraceOptions`
  и их назначение: Developer Studio, Benchmark, будущий анализ качества
  Prompt Engine — не сам Rule Engine.
- `docs/AI_CORE_CHECKLIST.md` — добавлены пункты: все `PromptRule` имеют
  metadata; `RuleEngine` не использует metadata/diagnostics/trace
  напрямую; diagnostics предназначены только для будущего анализа.

`rules/RuleEngine.ts`, `rules/DefaultRuleEngine.ts`,
`rules/RuleRegistry.ts` **не изменялись** — Rule Engine работает точно
так же, как в DS-6.3. `PromptBuilder`, `PromptFormatter`, `PromptPipeline`,
Prompt Domain, Generation Engine, Provider, Developer Studio, Benchmark,
публичный сайт, API, `buildEditPrompt()` и `prompts.ts` не затронуты.

### Phase 6.4 — Modular Interior Knowledge Base Foundation (DS-6.4, завершён)

Новый, полностью изолированный модуль
`src/lib/interior/knowledge/` — база знаний о **смысле** каждого
интерьерного стиля, отдельная и от Style Registry (каталог), и от Prompt
Domain/Prompt Engine (сборка промпта). Это **не** Prompt Engine, **не**
Rule Engine, **не** Formatter, **не** production-интеграция — только
данные (типы + литералы) и тривиальные lookup-функции.

Архитектурная схема с учётом Knowledge Base:

```
Style Registry              (src/lib/interior/styles, DS-4)
  ↓
Knowledge Base                (src/lib/interior/knowledge, DS-6.4) — этот этап
  ↓
Prompt Domain                  (src/lib/interior/prompt-domain, DS-5)
  ↓
Prompt Builder                   (prompt-engine/builder, DS-6.2)
  ↓
Rule Engine                       (prompt-engine/rules, DS-6.3/DS-6.3.1)
  ↓
Formatter                          (prompt-engine/formatter — не реализован)
  ↓
Generation Engine
  ↓
Provider
```

- **`types.ts`** — `KnowledgeCategory` (union из 13 доменов: `style` +
  12 sub-доменов), универсальный указатель `KnowledgeReference` (`id`,
  `name`, `category`, `weight?`, `notes?`), `StyleKnowledge` (`id`,
  `styleId`, `displayName`, `description`, `designGoals`,
  `corePrinciples`, `knowledgeRefs` (`StyleKnowledgeRefs` — один
  `KnowledgeReference[]` на домен), `promptFragments`
  (`StylePromptFragments`), `negativeCharacteristics`, `qualityNotes`,
  `references`), плюс двенадцать минимальных доменных типов
  (`MaterialKnowledge`, `FurnitureKnowledge`, `LightingKnowledge`,
  `DecorKnowledge`, `ColorKnowledge`, `CompositionKnowledge`,
  `ConstraintKnowledge`, `RenderingKnowledge`, `ArchitectureKnowledge`,
  `SpaceKnowledge`, `MoodKnowledge`, `QualityKnowledge`). Все поля
  `readonly`.
- **`styles/`** — по одному файлу на каждый из 20 каталожных стилей
  (`minimalist` … `japanese_zen`), каждый экспортирует один
  заполненный `StyleKnowledge`. `styleId` совпадает с `InteriorStyle.id`
  (`styles/registry.ts`), но `StyleKnowledge` не импортирует
  `INTERIOR_STYLE_REGISTRY` и не дублирует его поля. `my_style`
  намеренно не имеет `StyleKnowledge` (см. `knowledge/README.md` §5).
  `styles/index.ts` агрегирует все 20 в `ALL_STYLE_KNOWLEDGE`.
- **`registry/KnowledgeRegistry.ts`** — `getStyleKnowledge(styleId)`,
  `getAllStyleKnowledge()`, простой lookup по `ALL_STYLE_KNOWLEDGE`, тем
  же по духу, что и `RuleRegistry.getRuleSet` (DS-6.3).
- **12 доменов-заготовок** (`materials/`, `furniture/`, `lighting/`,
  `decor/`, `colors/`, `composition/`, `constraints/`, `rendering/`,
  `architecture/`, `space/`, `mood/`, `quality/`) — каждый с пустым
  `registry.ts` (`<DOMAIN>_KNOWLEDGE_REGISTRY: []` + два lookup-метода),
  `index.ts` и `README.md` с пометкой `TODO: Future expansion domain.`
  Наполнение реальными записями — задача будущих этапов.

Knowledge Base **нигде не используется** — не импортируется из Prompt
Domain, Prompt Engine (Builder/Rules/Formatter/Pipeline), Style Registry,
Generation Engine, Provider, Developer Studio, Benchmark, публичного
сайта, API, `buildEditPrompt()` или `prompts.ts`. Ничего в
`src/lib/interior/styles/**` не изменено.

### Phase 6.4.1 — Knowledge Entity & Feature Foundation (DS-6.4.1, завершён)

Архитектурное усиление Knowledge Base: новый, полностью изолированный
подмодуль `src/lib/interior/knowledge/core/`, поднимающий уровень
абстракции над `StyleKnowledge`/`KnowledgeReference` (DS-6.4) — только
типы, без единой строки реализации.

```
KnowledgeGraph                (core/KnowledgeGraph.ts) — контракт, не реализован
  │
  ├─ entities:  KnowledgeEntity[]     (core/Entity.ts)
  ├─ features:  KnowledgeFeature[]    (core/Feature.ts) — KnowledgeEntity + domain
  │       └─ MaterialFeature / LightingFeature / FurnitureFeature /
  │          DecorFeature / ColorFeature / ArchitectureFeature /
  │          CompositionFeature / ConstraintFeature / SpaceFeature /
  │          MoodFeature / QualityFeature / RenderingFeature
  └─ relations: KnowledgeRelation[]   (core/Relation.ts) — typed by RelationType
```

- **`Entity.ts`** — `KnowledgeEntity`: `id`, `type`, `name`,
  `description?`, `tags?`, `metadata?`. Домен-независимая базовая
  сущность знаний.
- **`FeatureTypes.ts`** — `FeatureType`: union из 12 доменов (`material`,
  `lighting`, `furniture`, `decor`, `color`, `architecture`,
  `composition`, `constraint`, `space`, `mood`, `quality`, `rendering`).
  Единственное значение сингулярное/множественное отличается от
  `KnowledgeCategory` (`../types.ts`, `colors`/`constraints` во
  множественном числе) — см. архитектурную ревизию ниже.
- **`Feature.ts`** — `KnowledgeFeature` (`KnowledgeEntity` +
  `domain: FeatureType`, `weight?`, `aliases?`, `relatedFeatures?`,
  `notes?`) и 12 узких алиасов (`MaterialFeature`, `LightingFeature`,
  ...) — чистое сужение типа по `domain`, без новых полей и без
  реализации. Задуманы как будущий переиспользуемый "строительный блок"
  промптов вместо ручных `KnowledgeReference`.
- **`Relation.ts`/`RelationType.ts`** — `KnowledgeRelation` (`from`,
  `to`, `type: RelationType`, `weight?`) и `RelationType` (`requires |
  supports | conflicts | enhances | optional | alternative | inherits`).
- **`KnowledgeGraph.ts`** — интерфейс `{ entities, features, relations }`
  — контракт без реализации.
- **`core/README.md`** — архитектурная схема и обоснование ("Feature —
  будущий строительный блок промптов").
- **`knowledge/README.md`** — добавлен раздел 10 "Knowledge Core".

`core/` полностью изолирован: `knowledge/index.ts` не реэкспортирует
ничего из `core/`, `styles/*.ts`/`KnowledgeRegistry.ts`/
`<domain>/registry.ts` не изменены и ничего оттуда не импортируют.
Никакой существующий файл — Prompt Domain, Prompt Engine (Builder/Rules/
Formatter/Pipeline), Generation Engine, Provider, Style Registry,
Developer Studio, Benchmark, публичный сайт, API — не импортирует
`knowledge/core/**`.

### Phase 6.4.2 — Knowledge Core Cleanup & Unification (DS-6.4.2, завершён)

Завершающий этап Knowledge Core перед началом реализации Prompt Engine
(DS-6.5). Изменения затронули только `src/lib/interior/knowledge/**` и
`docs/**`; никакой рантайм-логики не добавлено.

1. **Унификация имён доменов.** DS-6.4.1 ввёл `FeatureType` (`material`,
   `color`, `constraint`, ...) параллельно уже существующему
   `KnowledgeCategory` (`materials`, `colors`, `constraints`, ...) — два
   похожих списка с разными литералами для тех же трёх доменов. DS-6.4.2
   делает `FeatureType` единственным источником: `FeatureType` теперь
   собирается из `UniversalFeatureType` (9 доменов, применимых к любой
   дизайн-дисциплине) и `InteriorFeatureType` (`furniture`, `decor`,
   `architecture` — интерьер-специфичные по происхождению), а
   `KnowledgeCategory` (`knowledge/types.ts`) определён как `FeatureType
   | "style"` — не отдельный список, а прямая производная. Затронуло
   литералы `"materials"→"material"`,
   `"colors"→"color"`, `"constraints"→"constraint"` во всех 20
   `styles/*.ts` (только значения строк в `knowledgeRefs`) и три доменных
   типа в `types.ts`. Директории (`materials/`, `colors/`,
   `constraints/`) не переименованы — намеренно, см.
   `knowledge/core/README.md` §3.
2. **`KnowledgeEntity.type` строго типизирован.** Новый
   `KnowledgeEntityKind = "entity" | "feature" | "relation"`
   (`core/Entity.ts`) заменил свободный `type: string`. Это структурная
   ось (место в иерархии Entity/Feature/Relation), отдельная от
   предметной оси `domain: FeatureType` на `KnowledgeFeature`.
   `KnowledgeFeature.type` зафиксирован на литерале `"feature"`.
3. **Migration Strategy задекларирована, не выполнена.** Новый раздел
   "Migration Strategy" в `core/README.md` фиксирует направление
   `KnowledgeReference → KnowledgeFeature → StyleKnowledge → Prompt
   Engine` как архитектурный ориентир. Явно подчёркнуто: ни один шаг не
   выполнен на DS-6.4.2 — `StyleKnowledge`/`KnowledgeReference` не
   изменили форму, ничего не помечено deprecated.
4. **Задокументированы два механизма связей.** `KnowledgeRelation`/
   `KnowledgeGraph` (сложные типизированные связи — requires/conflicts/
   enhances/..., для будущего анализа) и `KnowledgeFeature.relatedFeatures`
   (плоский список id для быстрого lookup, например будущим Prompt
   Builder) — оба остаются, ничего не удалено. `core/README.md`
   "Relation mechanisms" объясняет, когда какой использовать.
5. **Ревизия масштабируемости.** Проверено против Landscape AI, Exterior
   AI, Commercial Interior AI, Yacht Design, Aircraft Interior, Furniture
   Designer, Fashion AI, Product Design, Game Environment, Exhibition
   Booth Designer — `KnowledgeEntity`/`KnowledgeFeature`/
   `KnowledgeRelation`/`KnowledgeGraph` не содержат ничего
   интерьер-специфичного; только `FeatureType` несёт предметную лексику
   (см. п.6).
6. **`FeatureType` расширяем без `FeatureType2`.** Аддитивная композиция
   (`UniversalFeatureType | InteriorFeatureType | ...`) позволяет будущим
   вертикалям (Landscape, Yacht, ...) добавлять свой именованный
   sub-union и расширять один и тот же `FeatureType`, вместо создания
   параллельного типа.
7. **Устранена дублирующая пара `<Domain>Knowledge`/`<Domain>Feature`.**
   12 доменных типов-заготовок в `types.ts` (`MaterialKnowledge`, ...,
   `QualityKnowledge`), отмеченных ревизией DS-6.4.1 как почти идентичные
   копии `<Domain>Feature`, стали алиасами (`export type MaterialKnowledge
   = MaterialFeature;` и т.д.). Каждый `<domain>/registry.ts` продолжает
   работать без единой правки. `KnowledgeReference` и `StyleKnowledge`
   намеренно **не** слиты с `KnowledgeEntity`/`KnowledgeFeature` —
   задокументировано, почему это осознанное разделение (`types.ts`,
   `core/README.md` §8).
8. **`KnowledgeGraph` проверен и не расширен.** Ревизия против графа
   зависимостей, рекомендаций, совместимости материалов, конфликтов,
   брендов, композиций, связей Feature↔Feature/Style↔Feature/Room↔Feature
   подтвердила, что текущая форма (`entities`/`features`/`relations`)
   достаточна; типобезопасная интеграция Style/Room отложена до Migration
   Strategy (п.3), а не решается расширением интерфейса сейчас.

`../styles/*.ts` (кроме значений `category`), `KnowledgeRegistry.ts`,
`<domain>/registry.ts`, Prompt Domain, Prompt Engine (Builder/Rules/
Formatter/Pipeline), Rule Engine, Generation Engine, Provider, Style
Registry, Developer Studio, Benchmark, публичный сайт, API не изменены.
`knowledge/index.ts` по-прежнему не реэкспортирует `core/` напрямую;
`types.ts` — единственный файл, получивший новую внутреннюю зависимость
от `core/`, и она остаётся внутри `knowledge/**`.

### Phase 6.4.3 — ADR-000 Principle 19: Composition over Duplication (DS-6.4.3, текущий этап)

Документационный этап, без единой строки кода. Начиная с этого этапа в
AI Core действует **Principle 19 — Composition over Duplication**
(см. [ADR-000 — Architecture Principles](adr/ADR-000-Architecture-Principles.md)):
новая функциональность строится через композицию существующих
`Feature`/`Entity`/`Relation`/`Context`, а не через создание параллельных
моделей данных; новая независимая модель допускается только тогда, когда
существующие сущности принципиально не способны выразить новую
предметную область.

- `docs/adr/ADR-000-Architecture-Principles.md` — добавлен Principle 19 в
  список принципов и раздел "Update — DS-6.4.3" с мотивацией, основным
  правилом, примерами (правильно/нарушение), допустимыми исключениями,
  практическими последствиями и связью с принципами 1, 3, 5, 11, 15, 18.
- `docs/AI_CORE_CHECKLIST.md` — добавлен пункт проверки: новые модели
  строятся через композицию существующих Entity/Feature/Relation, а не
  через параллельные структуры.
- `docs/ARCHITECTURE.md` — этот раздел.

Prompt Engine, Builder, Rule Engine, Formatter, Pipeline, Knowledge Core,
Generation Engine, Benchmark, Developer Studio, API и публичный сайт не
затронуты — изменена только документация.

### Phase 6.5 — Prompt Builder Intelligence Layer / Prompt Composition Engine (DS-6.5, завершён)

Первая реализация внутри `builder/`, независимая от `PromptBuilder`
(`../types.ts`, DS-6.2): новый тип `PromptDraft` — промежуточное
представление (AST) будущего промпта — и `PromptDraftBuilder`, который
копирует `PromptContext` в `PromptDraft` без единой строки логики.

- `builder/PromptDraft.ts` — `PromptDraft`: объект из девяти строго
  типизированных секций (`style`, `room`, `materials`, `furniture`,
  `lighting`, `decor`, `constraints`, `negative`, `metadata`), по одной на
  под-контекст `PromptContext`. Ни `string`, ни `string[]`, ни каких-либо
  полей, предполагающих сборку текста.
- `builder/sections/*.ts` — девять моделей секций (`StyleSection`,
  `RoomSection`, `MaterialSection`, `FurnitureSection`, `LightingSection`,
  `DecorSection`, `ConstraintSection`, `NegativeSection`,
  `MetadataSection`). Поля каждой секции — прямая копия полей
  соответствующего Prompt Domain контекста (`StyleContext`,
  `RoomContext`, ...), без служебных полей `BaseDomainContext`
  (`version`/`createdAt`/`metadata`) и без искусственных полей, для
  которых нет источника данных в `PromptContext` сегодня.
- `builder/PromptDraftBuilder.ts` — `PromptDraftBuilder.build(context)`:
  один метод, который поле за полем копирует `Readonly<PromptContext>` в
  `PromptDraft`. Не implements `PromptBuilder` — та сигнатура
  (`build(): PromptContext`) описывает другой контракт; это осознанно
  отдельный, параллельный вход в Prompt Engine, ещё не подключённый ни к
  чему.

Builder не знает про Rule Engine, Formatter, Pipeline, Knowledge Base,
Developer Studio, React или API (ADR-000 Principle 14, 17). Не мутирует
`PromptContext` (Principle 15). `PromptDraftBuilder` не вызывается ни из
production-кода, ни из `RuleEngine`/`DefaultRuleEngine`, ни из
`PromptBuilderFactory` — публичный сайт, API, `buildEditPrompt()`,
`prompts.ts`, Prompt Domain, Rule Engine, Generation Engine, Provider,
Developer Studio и Benchmark не затронуты. `prompt-engine/index.ts` не
обновлён — как и предыдущие реализации (`DefaultPromptBuilder`,
`DefaultRuleEngine`), `PromptDraft`/`PromptDraftBuilder` пока не
реэкспортируются на верхнем уровне модуля.

Отдельная архитектурная ревизия по итогам этапа (дублирование секций с
Prompt Domain, универсальность для будущих вертикалей, соответствие
Principle 19) задокументирована в `builder/README.md` "Architecture
Review — DS-6.5" и обнаружила нарушение ADR-000 Principle 19: все девять
`Section`-моделей структурно дублировали соответствующие Prompt Domain
контексты. Рекомендации не были применены к коду на самом DS-6.5 —
исправление выполнено отдельным этапом, DS-6.5.1, ниже.

### Phase 6.5.1 — PromptDraft Composition Refactor (DS-6.5.1, завершён)

Исправление дублирования, найденного собственной ревизией DS-6.5.
`builder/sections/*.ts` (`StyleSection`, `RoomSection`, `MaterialSection`,
`FurnitureSection`, `LightingSection`, `DecorSection`,
`ConstraintSection`, `NegativeSection`, `MetadataSection`) удалены
полностью — без заглушек, без пустых файлов.

- `builder/PromptDraft.ts` — переписан на композицию: все девять полей
  (`room`, `style`, `materials`, `furniture`, `lighting`, `decor`,
  `constraints`, `negative`, `metadata`) типизированы напрямую
  существующими Prompt Domain типами (`RoomContext`, `StyleContext`,
  `MaterialContext`, `FurnitureContext`, `LightingContext`,
  `DecorContext`, `ConstraintContext`, `NegativePromptContext`,
  `PromptMetadata`), все `readonly`. Ни одного нового поля — `PromptDraft`
  теперь контейнер, а не параллельная модель.
- `builder/PromptDraftBuilder.ts` — переписан: возвращает `PromptDraft`,
  где каждый ключ — прямая ссылка на соответствующий под-контекст
  `PromptContext` (`room: context.room`, ..., `negative:
  context.negativePrompt`, `metadata: context.metadata`), без
  копирования полей и без deep clone.
- `prompt-engine/index.ts` — добавлены экспорты `PromptDraft` (type-only)
  и `PromptDraftBuilder` (класс) — единственное обновление публичной
  поверхности модуля на этом этапе; `types.ts` не менялся (Section-типы
  никогда не экспортировались оттуда).
- `builder/README.md`, `prompt-engine/README.md` — переписаны разделы про
  DS-6.5: зафиксирована история (Section-модели → обнаруженное
  дублирование → композиция), добавлена "Architecture Review — DS-6.5.1"
  с ответами на пять контрольных вопросов (дублирование устранено,
  Section-моделей не осталось, `PromptDraft` — композиция существующих
  контекстов, новых дублирующих моделей нет, Principle 19 подтверждён).

`PromptContext`, Prompt Domain, Rule Engine, Knowledge Core, Style
Registry, Generation Engine, Provider, Developer Studio, Benchmark,
публичный сайт, API, `buildEditPrompt()`, `prompts.ts` не затронуты.
`PromptDraft`/`PromptDraftBuilder` по-прежнему не вызываются из
production-кода. `npm run build` проходит. Следующий этап — **DS-6.6
Formatter**.

### Phase 6.5.2 — ADR Update: PromptDraft Evolution Strategy (DS-6.5.2, завершён, документация)

Документационный этап, без единой строки кода. Фиксирует, где сегодняшняя
фиксированная композиция `PromptDraft` (DS-6.5.1) может перестать
масштабироваться в будущем — и почему это решение сознательно не
принимается сейчас.

- `docs/adr/ADR-000-Architecture-Principles.md` — добавлен раздел "Update
  — DS-6.5.2 PromptDraft Evolution Strategy" с двумя подразделами:
  - **Future Evolution** — при существенном росте числа вертикалей/доменов
    за пределами интерьера (иллюстративно: Landscape, Exterior,
    Hospitality, Retail, Office, Yacht, Aircraft, Exhibition, Smart Home,
    HVAC, Acoustics, Accessibility, Brand Identity, Lighting Scenarios)
    фиксированный, перечислимый список полей `PromptDraft` перестаёт
    масштабироваться — каждая новая вертикаль требовала бы правки самого
    типа. В этом случае допустима эволюция в сторону открытой,
    registry-подобной композиции (например, `Domain Registry` →
    `Map<DomainId, PromptContext>`, или эквивалентная
    `DomainComposition`/`PromptDomainGraph`). Форма намеренно не
    зафиксирована — называть её точно сейчас значило бы проектировать
    заранее, без объективной необходимости.
  - **Decision Record** — почему это решение НЕ принимается на DS-6.5.2:
    сегодня доменов всего девять; статическая модель проще для чтения и
    сопровождения; типизация сильнее (`context.room: RoomContext`, а не
    `map.get("room") as RoomContext`); меньше уровень косвенности —
    `PromptDraftBuilder` остаётся пятистрочной, очевидно корректной
    композицией (DS-6.5.1); компиляция и сопровождение дешевле — не
    появляется новая абстракция (`DomainRegistry`, `DomainId`, обход
    графа), которую нужно изучать, тестировать и синхронизировать с
    `PromptContext`.
- `docs/AI_CORE_CHECKLIST.md` — добавлены пункты, фиксирующие: эта
  эволюция документирована, но не выполнена; она не технический долг, не
  TODO и не дефект архитектуры; она пересматривается только при
  появлении объективной необходимости (реальная новая вертикаль, а не
  гипотетическая).
- `src/lib/interior/prompt-engine/README.md` — добавлена короткая ссылка
  на ADR-000 "Update — DS-6.5.2" в разделе Architecture Guarantees.

Явно зафиксировано: это не рекомендация для текущей реализации, не
рефакторинг, не технический долг и не проблема архитектуры — это
документированное направление возможной будущей эволюции. До появления
объективной необходимости фиксированная композиция `PromptDraft`
(DS-6.5.1) остаётся эталонной.

`PromptDraft`, `PromptDraftBuilder`, Builder, Rule Engine, Formatter,
Pipeline, Prompt Domain, Knowledge Core, Style Registry, Generation
Engine, Provider, Developer Studio, Benchmark, публичный сайт, API,
`buildEditPrompt()`, `prompts.ts` — ни один runtime-файл не изменён,
изменена только документация. `npm run build` проходит.

### Phase 6.5.3 — ADR-000 Principle 20: Evolution over Rewrite (DS-6.5.3, текущий этап, документация)

Документационный этап, без единой строки кода. Запрошен как "DS-6.5.2";
переименован в истории документации в DS-6.5.3, потому что номер DS-6.5.2
уже занят предыдущим этапом (Phase 6.5.2 выше) — один номер этапа на одну
концепцию, то же правило Principle 10 ("Один термин = одна концепция"),
применённое к нумерации этапов.

В AI Core действует **Principle 20 — Evolution over Rewrite** (см.
[ADR-000 — Architecture Principles](adr/ADR-000-Architecture-Principles.md)):
архитектура эволюционирует через постепенную миграцию, а не через
разрушительный переписывание — новая реализация вводится рядом со старой
(через adapter, compatibility layer, staged migration или временное
сосуществование), и старая продолжает работать, пока новая не доказала
себя. Breaking-изменение допустимо только если разумной стратегии
совместимости не существует, либо долгосрочная архитектурная выгода явно
перевешивает стоимость миграции.

- `docs/adr/ADR-000-Architecture-Principles.md` — добавлен Principle 20 в
  список принципов и раздел "Update — DS-6.5.3" с мотивацией, основным
  правилом, хорошими примерами из истории самого проекта (Style Registry,
  Prompt Domain, Prompt Engine, `PromptDraft`, Knowledge Core, Feature
  Foundation, Rule Engine — все уже введены рядом со старой реализацией,
  не вместо неё), плохими примерами (удаление `PromptContext`/Style
  Registry/`Builder`/API без периода совместимости, "переписать всё
  правильно с нуля" вместо поэтапных стадий), чек-листом перед breaking
  rewrite (5 вопросов) и связью с Principle 2, 12, 15, 19.
- `docs/AI_CORE_CHECKLIST.md` — добавлены проверки перед крупными
  архитектурными изменениями: есть ли стратегия миграции, нужен ли
  Adapter, можно ли сохранить backward compatibility, можно ли провести
  staged migration.
- `src/lib/interior/prompt-engine/README.md` — добавлен подраздел
  "Architecture Evolution": Prompt Engine развивается эволюционно,
  Builder/Rules/Formatter/Pipeline могут заменяться независимо, новые
  реализации предпочтительно вводятся параллельно старым до завершения
  миграции.

Prompt Engine, Prompt Domain, Knowledge Core, Builder, Rule Engine,
Formatter, Pipeline, Developer Studio, Benchmark, публичный сайт и API не
затронуты — изменена только документация. `npm run build` проходит.
Следующий этап — **DS-6.6 Formatter**.

## Phase 7 — Spatial Intelligence

_Нумерация: "Prompt Lab" и последующие этапы, ранее занимавшие Phase
7–9, сдвинуты на Phase 8–10 (ни один из них ещё не был начат — "Ещё не
создан"/"Ещё не выполнено" — сдвиг не затрагивает никакой код). Spatial
Intelligence получает Phase 7, чтобы совпадать с фактической нумерацией
этапов (DS-7.1, DS-7.2, ...), уже согласованной для этой ветки работы._

Новая, независимая от Prompt Engine ось AI Core: пространственная модель,
описывающая, *что* за пространство генерируется, прежде чем к нему
применяется стиль. Целевая иерархия по завершении всей фазы:

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

Каждый уровень строится независимо, отдельным этапом, и не подключается
к предыдущим уровням AI Core до тех пор, пока явно не запланирована его
интеграция:

- **DS-7.1 — Design Domain Foundation** (текущий этап) — верхний уровень:
  фиксированный список категорий назначения пространства (Residential,
  Commercial, Hospitality, ...). См. подробности ниже и
  `src/lib/interior/design-domain/README.md`.
- **DS-7.2 — Space Type Foundation** — конкретные типы помещений/объектов
  внутри каждого Design Domain. См. подробности ниже и
  `src/lib/interior/space-type/README.md`.
- **DS-7.3 — Spatial Knowledge Foundation** — новый Knowledge-домен
  (`src/lib/interior/knowledge/spaces`) с каноническими записями общих
  архитектурных знаний по каждому существующему `SpaceTypeId`. См.
  подробности ниже и `src/lib/interior/knowledge/spaces/README.md`. Это
  **не** связывание (lookup/adapter) Space Type ↔ Knowledge — оно
  по-прежнему future work, см. "Phase 7.3" ниже.
- **DS-7.4 — Prompt Integration** — подключение Spatial Architecture к
  Prompt Engine через `PromptContext`. Ещё не создан.

### Phase 7.1 — Design Domain Foundation (DS-7.1, текущий этап)

Новый, полностью изолированный модуль
`src/lib/interior/design-domain/` — фундамент верхнего уровня будущей
Spatial Architecture. Только данные (типы + лукап), без единой строки
бизнес-логики.

- **`types.ts`** — `DesignDomainId` (union из 11 литералов:
  `residential`, `commercial`, `hospitality`, `public`, `outdoor`,
  `industrial`, `entertainment`, `transportation`, `healthcare`,
  `education`, `mixed_use`), `DesignDomainMetadata` (`priority`,
  `enabled`, `notes?`), `DesignDomain` (`id`, `displayName`,
  `description`, `icon`, `metadata`), `DesignDomainRegistry` (`readonly
  DesignDomain[]`). Все поля `readonly`, никаких методов.
- **`domains.ts`** — `DESIGN_DOMAINS`, 11 верхнеуровневых категорий
  пространства. Это категории, а не список помещений и не список
  объектов.
- **`registry.ts`** — `DESIGN_DOMAIN_REGISTRY`, `getDesignDomain(id)`,
  `getAllDesignDomains()` — обычный typed lookup, по аналогии с Style
  Registry (`styles/registry.ts`, DS-4) и Knowledge Registry
  (`knowledge/registry/KnowledgeRegistry.ts`, DS-6.4).
- **`index.ts`** — публичная поверхность модуля.
- **`README.md`** — архитектурное обоснование: почему Design Domain
  отделён от Style, почему стоит выше Space Type, почему ничего не знает
  о Prompt Engine.

Design Domain работает исключительно с собственными типами: не
импортирует Style Registry, Knowledge, Prompt Domain, Prompt Engine,
Generation Engine, Provider, Developer Studio, Benchmark, React или
Next.js. Ничего не знает о SpaceType (SpaceType — предмет DS-7.2, и он
будет ссылаться на `DesignDomainId`, а не наоборот). Полностью
изолирован — нигде не импортируется. Публичный сайт, API, Prompt Engine,
Prompt Domain, Knowledge, Style Registry, Developer Studio, Benchmark и
Production не затронуты.

### Phase 7.1.1 — Design Domain Evolution Foundation (DS-7.1.1, документация)

Документационный этап перед DS-7.2, без единой строки runtime-кода.
`design-domain/{types,domains,registry,index}.ts` не изменены —
`DesignDomainMetadata` (DS-7.1) уже была официальной, но
незадокументированной точкой расширения; DS-7.1.1 её документирует, а не
меняет.

Добавлен Principle 22 ADR-000 ("Evolution through Composition") и раздел
"Update — DS-7.1.1": закрепляет, что новая функциональность любой модели
AI Core (Design Domain, Space Type, Knowledge, Prompt Domain, Prompt
Engine, Room Analyzer, Material Engine, Style Engine, Furniture Planner,
Object Detection, Automatic Masks, будущие модули) расширяется через
`metadata`/композицию раньше нового top-level поля, а не через
постоянное изменение верхнего контракта. `design-domain/README.md`
получил шесть новых разделов (Evolution Strategy, Evolution through
Composition, Decision Flow, General AI Core Rule, Future Capability,
Универсальность) — иллюстративные, не roadmap. (Порядок шагов Decision
Flow, изначально описанный здесь двумя слегка разными версиями,
консолидирован в DS-7.1.1a ниже.)

Prompt Engine, Prompt Domain, Knowledge, Knowledge Core, Rule Engine,
Formatter, Pipeline, Builder, `PromptDraft`, Style Registry, Developer
Studio, Benchmark, публичный сайт, API и Production не затронуты. Design
Domain по-прежнему нигде не используется, верхний контракт `DesignDomain`
не изменился, SpaceType по-прежнему отсутствует.

### Phase 7.1.1a — AI Core Evolution Consolidation (DS-7.1.1a, документация)

Консолидационный этап — без единой строки runtime-кода. DS-7.1.1 назвал
Principle 22 верно по сути, но показал **два** слегка разных порядка
шагов для одной и той же идеи (Decision Flow для Design Domain — с
`Metadata` перед `Composition`, и "общий" — с `Composition` перед
`Metadata`), примирённых абзацем-объяснением. DS-7.1.1a убирает эту
неоднозначность: во всей документации AI Core теперь ровно один
официальный Decision Flow —

```
Reuse → Metadata (если модель уже её поддерживает) → Composition →
Registry → Top-level Contract
```

Principle 22 (ADR-000) и раздел "Update — DS-7.1.1" исправлены на месте,
чтобы использовать этот единственный порядок; `design-domain/README.md`
§9–§10 переписаны так же. Добавлен новый раздел "Update — DS-7.1.1a"
(ADR-000) с полной консолидацией: различие Metadata vs Composition,
исключение "модели без `metadata`" (`PromptContext`, `KnowledgeFeature`,
`KnowledgeRelation`, Style Registry), таблица реальных примеров
(`DesignDomain` → Metadata, `PromptContext`/`KnowledgeFeature`/
`PromptDraft` → Composition, Style Registry → Registry), таблица "одна
ответственность на Principle" (3 — ownership, 19 — reuse, 20 —
migration, 21 — spatial architecture, 22 — model evolution), **AI Core
Evolution Axiom**, компактное **Architect Decision Tree**, **Principle
Dependency Graph** (3 → 19 → 20 → 21 → 22 → Axiom), раздел "Architecture
Maturity" (методология AI Core считается стабильной; новые Principle —
только для принципиально новых концепций) и "Universal AI Core Rule"
(Decision Flow — методология по умолчанию для всей платформы, не
специфика Design Domain).

`docs/AI_CORE_CHECKLIST.md` получил соответствующие проверки
консолидации. Prompt Engine, Prompt Domain, Knowledge, Knowledge Core,
Knowledge Registry, Rule Engine, Formatter, Pipeline, Builder,
`PromptDraft`, Style Registry, Developer Studio, Benchmark, публичный
сайт, API, UI и SpaceType не затронуты — изменена только документация.
`npm run build` проходит.

### Phase 7.1.3 — ADR-004: Spatial Classification Boundary (DS-7.1.3, документация)

Документационный этап перед DS-7.2 — без единой строки runtime-кода.
Новый [ADR-004 — Spatial Classification Boundary](adr/ADR-004-Spatial-Classification-Boundary.md)
фиксирует границу между уже существующим `RoomContext`
(`src/lib/interior/prompt-domain/contexts/RoomContext.ts`, Prompt Domain)
и ещё не созданным `SpaceType` (Spatial Intelligence, DS-7.2) — до того,
как эта граница потребовалась бы задним числом на этапе DS-7.4 (Prompt
Integration).

Главное правило: `RoomContext` никогда не становится `SpaceType`,
`SpaceType` никогда не становится `RoomContext`; связь между ними —
только явный `Adapter`/`Mapping` (`RoomContext → Mapping → SpaceType`),
вводимый на DS-7.4, без изменения `PromptContext`. ADR-004 не вводит
`SpaceType`, `SpaceRegistry`, Prompt Integration, Knowledge Integration
или новые поля `PromptContext`/`RoomContext` — только фиксирует
архитектурную границу (ADR-000 Principles 10, 12, 19, 20, 21, 22).

`docs/AI_CORE_CHECKLIST.md` получил соответствующие проверки. Prompt
Domain, `RoomContext`, `PromptContext`, Prompt Engine, Knowledge Core,
Design Domain, Rule Engine, Developer Studio, Generation Engine,
публичный сайт и API не затронуты — изменена только документация.
`npm run build` проходит.

_DS-7.1.3a — ADR-004 дополнен разделом "Boundary Invariant": граница
между `RoomContext` и `SpaceType` объявлена неизменной на всё время
жизни архитектуры (локальная инварианта, не новый ADR-000 Principle).
Документация, `npm run build` проходит._

## Phase 8 — Prompt Lab

Внутренний инструмент Developer Studio для итеративной отладки и
сравнения промптов, построенных Prompt Engine. Ещё не создан.

## Phase 9 — Production Integration

Подключение Prompt Engine к реальной генерации на публичном сайте
(замена/дополнение текущего `buildEditPrompt()` в `src/lib/prompts.ts`).
Ещё не выполнено.

## Phase 10 — Architecture Refactoring 2.0

Не выполняется сейчас — только документируется как будущее направление:

- перенос к общей AI Core архитектуре при необходимости;
- выделение общих Domains;
- объединение Providers;
- выделение Pipelines;
- консолидация Shared Models.

## Architecture Decisions

Зафиксированные архитектурные решения (ADR). `ADR-000` — верхнеуровневые
принципы; `ADR-001/002/003` — их конкретные применения. `ADR-001/002/003`
изначально были только документацией; в DS-5.1 и DS-5.2 часть направлений
из них была частично и безопасно применена в коде (см. Phase 5.1/5.2 выше
и разделы "Update" в каждом ADR):

- [ADR-000 — Architecture Principles](adr/ADR-000-Architecture-Principles.md)
- [ADR-001 — Provider Terminology](adr/ADR-001-Provider-Terminology.md)
- [ADR-002 — MY_STYLE Identifier](adr/ADR-002-MyStyle-Identifier.md)
- [ADR-003 — PromptContext Contracts](adr/ADR-003-PromptContext-Contracts.md)
- [ADR-004 — Spatial Classification Boundary](adr/ADR-004-Spatial-Classification-Boundary.md)

For complete ADR navigation, ownership, lifecycle and future ADR backlog,
see [docs/adr/ADR_INDEX.md](adr/ADR_INDEX.md). For the visual architecture
map (relationships between areas, future placeholders, dependency tree),
see [docs/adr/ADR_MAP.md](adr/ADR_MAP.md).

Reference chain for any architectural change:

```
Architecture (this document)
  ↓
ADR_INDEX.md      (ownership, governance, versioning, lifecycle)
  ↓
ADR_MAP.md        (visual map)
  ↓
Individual ADR    (the actual decision)
  ↓
AI_CORE_CHECKLIST.md (verification)
```

`docs/adr/ADR_INDEX.md` is the governance registry — ownership, versioning,
history, confidence, review cadence, and lifecycle for every ADR.
`docs/adr/ADR_MAP.md` is the visual navigation layer — the area chain,
ownership map, and dependency tree, with no decisions and no tracked
metadata of its own. Individual ADR files (`docs/adr/ADR-0xx-*.md`)
contain the actual decisions — context, decision, consequences. None of
the three duplicates another's full content; they link and summarize.

См. также [AI_CORE_CHECKLIST.md](AI_CORE_CHECKLIST.md) — чек-лист перед
каждым новым архитектурным этапом (начиная с DS-6).

### DS-7.1.3c — ADR Governance & Architecture Knowledge System (документация)

Документационный этап, без единой строки кода. Расширяет DS-7.1.3b:
[docs/adr/ADR_INDEX.md](adr/ADR_INDEX.md) вырос в полноценный governance
layer — таблица ADR Registry получила колонки `Area`, `Scope`, `Version`,
`Stability`, `Owner`, `Last Updated`, `Depends On`, `Affects`; добавлены
Architecture Areas (9 областей: CORE, PROMPT, SPATIAL, KNOWLEDGE,
PROVIDER, STYLE, PRODUCTION, DEVELOPER, BENCHMARK), Architecture Coverage
Dashboard, Architecture Maturity (5 уровней: Principles → Boundaries →
Registries → Governance → Evolution — текущий уровень: Governance
достигнут, Evolution в процессе), ADR Ownership Rules, ADR Decision
Matrix, расширенный ADR Lifecycle, ADR Versioning Policy, ADR Stability
Policy, ADR Health Checklist, Architecture Drift Detection, Cross
Reference Rules, Architecture Glossary и Architecture Navigation Guide.

Новый [docs/adr/ADR_MAP.md](adr/ADR_MAP.md) — чисто визуальная карта
архитектуры (не второй индекс): цепочка областей, future placeholders
(Space Type, Room Analyzer, Furniture Planner, Material Engine, Object
Detection, Automatic Masks, Prompt Integration, Production Integration),
ADR Ownership Map и ADR Dependency Tree с обоснованием, почему ADR-000
остаётся корнем.

Consistency review нашёл и исправил одно расхождение: ADR-003 был указан
как `Active` в DS-7.1.3b, хотя сам файл ADR-003 имеет статус `Proposed` —
исправлено в ADR Registry и ADR Timeline. `docs/AI_CORE_CHECKLIST.md`
получил governance-проверки.

ADR-000/001/002/003/004, Prompt Engine, Prompt Domain, Knowledge Core,
Design Domain, Rule Engine, Formatter, Pipeline, Builder, `PromptDraft`,
Style Registry, Developer Studio, Benchmark, публичный сайт, API и
Production не затронуты. `npm run build` проходит.

### DS-7.1.3d — ADR Governance Final Polish (Enterprise Edition, документация)

Финальная документационная полировка ADR-экосистемы, без единой строки
кода. `docs/adr/ADR_INDEX.md` получил: колонки `Related ADRs` и `Tags` в
ADR Registry; раздел "ADR History" (per-ADR таблица версий: что менялось
и почему, отдельно от `git log`); "Review Frequency" и "Decision
Confidence" для каждого ADR; "ADR Relationships" (явное различие `Depends
On` vs `Related ADRs`); "Governance Health" (checklist владения);
"Governance Rules" (компактная форма One Area/Boundary/Invariant/ADR → One
Owner); "Future ADR Policy" (обязательные поля перед статусом `Active`);
"Architecture Evolution Rules" (что каждое governance-поле означает и что
не означает — ни одно из них не меняет владение); расширенный Architecture
Dashboard (`Owner ADR`, `Maturity`, `Risk`); Architecture Maturity
переоценена — **Level 5 (Evolution) объявлен достигнутым**: governance
model сам является механизмом эволюции, будущие модули развиваются внутри
него, а не через новый процесс; расширенный Glossary (`Area`, `Scope`,
`Owner`, `Dependency`, `Relationship`, `Confidence`, `Review Frequency`,
`History`, `Governance`); "Final Consistency Review" и "Final Governance
Statement" — ADR-система объявлена архитектурно завершённой.

`docs/adr/ADR_MAP.md` получил "Architecture Area Map" (цепочка CORE →
PROMPT → SPATIAL → KNOWLEDGE → PRODUCTION) и уточнение к ADR Dependency
Tree: `Related ADRs` — концептуальные связи, не рёбра зависимостей, и
намеренно не показаны на дереве. `docs/AI_CORE_CHECKLIST.md` получил
governance-проверки: Review Frequency, Decision Confidence, Related ADRs,
History, Tags, Dashboard, ADR_MAP.

ADR-000/001/002/003/004, Prompt Engine, Prompt Domain, Knowledge Core,
Design Domain, Rule Engine, Formatter, Pipeline, Builder, Developer
Studio, Benchmark, публичный сайт, API и Production не затронуты. `npm
run build` проходит.

### DS-7.1.3b — ADR Index & Architecture Decision Registry (документация)

Документационный этап, без единой строки кода. Добавлен
[docs/adr/ADR_INDEX.md](adr/ADR_INDEX.md) — официальный навигационный
реестр всех ADR: timeline, таблица владения (Registry), граф зависимостей,
маппинг принципов, Architecture Coverage Matrix, реестр локальных
инвариантов, backlog будущих ADR, правило навигации и чек-листы
создания/обновления ADR. ADR_INDEX не является ADR и не вводит новых
архитектурных принципов — он только фиксирует, где уже принятые решения
живут. `docs/AI_CORE_CHECKLIST.md` получил соответствующие пункты
верификации.

ADR-000/001/002/003/004, Prompt Engine, Prompt Domain, Knowledge Core,
Design Domain, Rule Engine, Formatter, Pipeline, Builder, `PromptDraft`,
Style Registry, Developer Studio, Benchmark, публичный сайт, API и
Production не затронуты. `npm run build` проходит.

### Phase 7.1.3e — Architecture Governance Final Completion (DS-7.1.3e, документация)

Documentation-only stage — no runtime code, no production, no API, no
TypeScript. This stage closes the Architecture Governance phase
**permanently**: after this stage, the governance model built across
DS-7.1.3/DS-7.1.3a/DS-7.1.3b/DS-7.1.3c/DS-7.1.3d is the permanent
architectural baseline of the project, and future architectural work is
expected to consist of adding new ADRs and new modules, not of redesigning
governance itself.

## Architecture Milestone A1 — AI Core Foundation Complete

The core architectural platform consisting of:

- Style Registry
- Prompt Domain
- Prompt Engine Foundation
- Rule Engine
- Knowledge Core
- Design Domain
- ADR Governance
- Architecture Evolution Methodology

is considered architecturally stable. Future development should primarily
extend this foundation rather than redesign it. The governance model is
complete and becomes the permanent architectural baseline of the project.

### Architecture Governance Completion

Architecture Governance is now considered complete. Future architectural
work should focus on new modules, new ADRs, and implementation — instead
of modifying the governance model itself. Governance changes should occur
only when a genuinely new architectural concept appears.

### Governance Stability Policy

Governance documents (`ARCHITECTURE.md`, `ADR_INDEX.md`, `ADR_MAP.md`,
`AI_CORE_CHECKLIST.md`, and individual ADRs) are expected to be highly
stable. Small clarifications are acceptable at any time. A structural
redesign of the governance model itself requires a new architecture
milestone — the next one after A1.

### Architecture Milestone Timeline

Historical orientation only — **this is not a roadmap**:

```
A0
Initial AI Core
  ↓
A1
AI Core Foundation Complete
  ↓
Future
Spatial Intelligence
  ↓
Future
Production Integration
  ↓
Future
Refactoring 2.0
```

### Future Governance Automation

**Future tooling — NOT architecture.** The items below are potential
developer-productivity tools that could be built on top of the governance
documents. They do not change the architecture itself, and they are
intentionally outside ADR governance:

- Automatic `ADR_MAP` generation from `ADR_INDEX`
- Architecture consistency validation in CI
- ADR relationship validation
- Broken cross-reference detection
- Architecture coverage validation
- HTML architecture portal generation
- Architecture search/index
- Dependency visualization

None of these tools represent an architectural decision, none of them
require an ADR, and none of them are implemented as part of this stage —
this list is a future-tooling backlog, not a commitment.

### Governance vs Tooling

Architecture Governance defines decisions. Automation tools, if ever
built (see [Future Governance Automation](#future-governance-automation)
above), only help maintain those decisions — they must never become the
source of architectural truth. Documentation (`ARCHITECTURE.md`, the ADRs,
`ADR_INDEX.md`, `ADR_MAP.md`) remains the canonical source, regardless of
what tooling is later built around it.

### Governance Freeze Policy

After Milestone A1, new modules may extend the architecture, but they must
follow the existing governance model. Changing the governance model itself
requires:

- explicit architectural review;
- a new ADR, if necessary;
- a new architecture milestone (beyond A1).

### Architecture Completion Statement

The AI Core architectural foundation is considered complete. Future work
should primarily expand the system through composition, new modules, and
new knowledge — rather than architectural redesign.

---

Prompt Engine, Prompt Domain, Knowledge Core, Design Domain, Rule Engine,
Builder, Formatter, Pipeline, Developer Studio, Benchmark, API, and
Production are not affected — this stage is documentation-only. `npm run
build` passes.

### Phase 7.2 — Space Type Foundation (DS-7.2)

New, fully isolated module `src/lib/interior/space-type/` — the second
spatial axis of AI Core, directly below Design Domain
(`src/lib/interior/design-domain`, DS-7.1), continuing Phase 7 — Spatial
Intelligence. Data only (types + lookup), no business logic, exactly the
same discipline DS-7.1 used for Design Domain and required by ADR-004.

- **`types.ts`** — `SpaceTypeId` (union of 51 illustrative literals across
  Residential, Commercial, Hospitality, Industrial, Healthcare, Education,
  Transportation, Outdoor, and Public), `SpaceTypeMetadata` (`priority`,
  `enabled`, `notes?` — the same shape and role as `DesignDomainMetadata`,
  reserved as the official future extension point), `SpaceType` (`id`,
  `designDomainId`, `displayName`, `description`, `icon`, `metadata`),
  `SpaceTypeRegistry` (`readonly SpaceType[]`). All fields `readonly`, no
  methods. `SpaceType.designDomainId` references `DesignDomainId`
  (imported from `../design-domain`) — the primitive identifier, not the
  `DesignDomain` object — keeping the two registries independent
  (Principle 21, ADR-000).
- **`space-types.ts`** — `SPACE_TYPES`, 51 illustrative Space Types,
  grouped by Design Domain for readability only (the grouping is not a
  type). Intentionally incomplete and easy to extend — a new Space Type is
  one new array element plus one new `SpaceTypeId` literal, no change to
  existing entries or to `registry.ts`.
- **`registry.ts`** — `SPACE_TYPE_REGISTRY`, `getSpaceType(id)`,
  `getAllSpaceTypes()` — plain typed lookup, by analogy with
  `DESIGN_DOMAIN_REGISTRY` (`design-domain/registry.ts`, DS-7.1) and
  `INTERIOR_STYLE_REGISTRY` (`styles/registry.ts`, DS-4).
- **`index.ts`** — the module's public surface.
- **`README.md`** — architectural rationale: the difference between
  Design Domain, Space Type, `RoomContext`, and the future Room Analyzer;
  the ADR-004 boundary; the `metadata` extension point; universality
  across future domains (Marine, Aircraft, Exhibition, Retail, Smart
  Building, ...); and an explicitly non-implemented Future Extension list
  (Space Analyzer, Knowledge integration, Prompt integration, Object
  Detection, Furniture Planner, Material Engine, Automatic Masks).

Space Type works exclusively with its own types plus `DesignDomainId`: it
does not import Prompt Engine, Prompt Domain (`RoomContext`,
`PromptContext`), Knowledge, Style Registry, Developer Studio, Benchmark,
Provider, Generation Engine, React, or Next.js. It does not import the
`DesignDomain` object itself, only the `DesignDomainId` type. It is fully
isolated — nowhere imported. Per ADR-004, `RoomContext` and `PromptContext`
are unchanged in every field, and no Mapping/Adapter between `RoomContext`
and `SpaceType` is introduced at this stage — that remains DS-7.4 (Prompt
Integration). Knowledge Integration (DS-7.3) is also not started. Prompt
Engine, Prompt Domain, Knowledge, Knowledge Core, Design Domain, Style
Registry, Rule Engine, Formatter, Pipeline, Builder, Developer Studio,
Benchmark, the public site, API, and Production are not affected. `npm run
build` passes.

### Phase 7.2.1 — Space Type Governance & Evolution Foundation (DS-7.2.1, документация)

Governance-этап перед DS-7.3, без единой строки runtime-кода —
`space-type/{types,space-types,registry,index}.ts` не изменены. **Space
Type Foundation (DS-7.2) считается архитектурно завершённым** для этого
уровня детализации: контракт `SpaceType`/`SpaceTypeMetadata`, состав
`SPACE_TYPE_REGISTRY` и публичная поверхность модуля зафиксированы как
стабильные.

`space-type/README.md` получил восемь governance-разделов: Space Type
Governance (единственная ответственность — семантическая классификация,
явно НЕ user input/prompt data/knowledge/rendering/generation/business
logic), Canonical Registry Policy (реестр содержит только канонические
типы; персонализированные/стилевые/временные/AI-сгенерированные варианты
никогда не становятся `SpaceTypeId`), Metadata Evolution Strategy
(расширенный иллюстративный список будущих разделов `metadata` —
`classification`, `behavior`, `analysis`, `generation`, `rendering`,
`constraints`, `capabilities`, `workflow`, `accessibility`,
`lightingScenario`, `occupancy`, `privacy`, `acoustics`, `climate` —
ничего не реализовано), Space Type Boundary Invariant (постоянное
закрепление ADR-004 Boundary Invariant для этого модуля: `RoomContext →
Mapping/Adapter → SpaceType`, граница никогда не стирается), Future
Spatial Stack (иллюстративная полная цепочка `User Input → RoomContext →
Room Analyzer → SpaceType → Knowledge → Prompt Engine → Generation`; явно
зафиксировано, что реально существуют только `RoomContext`, `SpaceType` и
Design Domain — всё остальное будущая работа), Future Spatial Axes
(иллюстративная будущая ортогональная ось `SpaceCategory`: Indoor,
Outdoor, Floating, Flying, Underground, Mixed — явно НЕ Space Types, без
реализации), Evolution Rules (единственный официальный Decision Flow —
`Reuse → Metadata → Composition → Registry → Top-level Contract` —
применён к Space Type), и Registry Protection / "What MUST NEVER happen"
(`SpaceType` никогда не становится `PromptContext`, не хранит prompt
fragments/style data/provider hints/generation settings/business logic, не
импортирует Prompt Engine/Knowledge/`RoomContext`).

Future stages extend Space Type through Room/Space Analyzer (mapping from
`RoomContext`), Knowledge Integration (DS-7.3), and Prompt Integration
(DS-7.4) — not by redesigning `SpaceType`'s own contract or registry.
`docs/AI_CORE_CHECKLIST.md` получил соответствующие governance-проверки.
Prompt Engine, Prompt Domain, Knowledge Core, Design Domain, Rule Engine,
Builder, Formatter, Pipeline, Developer Studio, Benchmark, API, and
Production are not affected. `PromptContext`, `RoomContext`,
`KnowledgeFeature`, and Style Registry are unchanged. `npm run build`
passes.

### Phase 7.3 — Spatial Knowledge Foundation (DS-7.3)

New Knowledge domain, `src/lib/interior/knowledge/spaces/` — general
architectural knowledge about *what is generally true* about each
canonical `SpaceTypeId` (`space-type/space-types.ts`, DS-7.2). This is
**not** DS-7.3 as originally sketched in Phase 7's overview above ("Design
Knowledge Integration" — a lookup/adapter connecting Space Type to
Knowledge); that connective work remains unstarted future work. This
stage builds the Knowledge side of that future connection first: the
content a future integration step would read, not the integration step
itself.

- **`spaces/registry.ts`** — `SPATIAL_KNOWLEDGE_REGISTRY`, 51
  `KnowledgeFeature` entries (`knowledge/core/Feature.ts`), one per
  canonical `SpaceTypeId` that exists in `space-type/space-types.ts` at
  the time of writing. Every entry uses `domain: "space"` — the existing
  `FeatureType` literal (`knowledge/core/FeatureTypes.ts`) — reused
  exactly as-is; no new literal, no new `<Domain>Feature`/`<Domain>Knowledge`
  alias, no change to `knowledge/core/**` or `knowledge/types.ts`.
  Structured knowledge (primary functions, typical activities, spatial
  priorities, functional zones, privacy level, traffic level, circulation,
  ergonomic concerns, furniture categories, lighting requirements,
  accessibility considerations, storage needs, acoustic expectations,
  maintenance characteristics, safety considerations, environmental
  constraints, occupancy characteristics) lives entirely in each entry's
  existing `metadata` field (ADR-000 Principle 22, "Metadata" step) — an
  illustrative, consistently-applied shape, not a new TypeScript contract.
- **`spaces/index.ts`** — re-exports `KnowledgeFeature` (type-only) plus
  `SPATIAL_KNOWLEDGE_REGISTRY`, `getSpatialKnowledge(id)`,
  `getAllSpatialKnowledge()` — the same lookup-function shape every other
  `knowledge/<domain>/index.ts` uses.
- **`spaces/README.md`** — full architectural rationale: the distinction
  between this domain (`spaces/`, per-canonical-Space-Type profiles) and
  the pre-existing `space/` domain (DS-6.4, abstract style-facing
  layout/flow/zoning concepts) that reuses the same `"space"` literal;
  Boundary Protection (`SpaceType` answers "what space is this?",
  Knowledge answers "what is generally true about this space?", Prompt
  Engine answers "how should this influence prompt generation?" — three
  non-overlapping questions); the future Spatial Intelligence chain
  (`RoomContext → Room Analyzer → SpaceType → Spatial Knowledge → Rules →
  Prompt Draft → Formatter → Generation`, only the Spatial Knowledge link
  implemented); an illustrative, non-implemented list of future knowledge
  categories (workflow, security, compliance, building code, fire safety,
  commercial/medical/industrial operations, hospitality/retail behavior,
  visitor flow, queue behavior); and why commercial readiness (Office,
  Cafe, Restaurant, Retail, Hotel, Hospital, School, Airport, Warehouse,
  Factory, Gallery, Museum, Coworking) emerges from reusing one
  composition (`KnowledgeFeature` + `metadata`) rather than from any
  commercial-specific type or registry.

`spaces/registry.ts` does not import `space-type/**` in any form — not
even a type-only import of `SpaceTypeId`. Each record's `id` matches the
corresponding `SpaceTypeId` string by convention only, documented in
`spaces/README.md` §5. This preserves the dependency direction
`docs/AI_CORE_CHECKLIST.md` already requires for Space Type ("Space Type
не импортирует Knowledge") without ever needing Knowledge to import
Space Type either — the two registries are connected by a shared id
convention, not a code dependency in either direction.

`knowledge/core/**`, `knowledge/types.ts`, `knowledge/index.ts`,
`knowledge/registry/KnowledgeRegistry.ts`, every other
`knowledge/<domain>/**`, `space-type/**`, `design-domain/**`, Prompt
Domain, Prompt Engine (Builder/Rules/Formatter/Pipeline), Rule Engine,
Generation Engine, Provider, Style Registry, Developer Studio, Benchmark,
the public site, the API, `buildEditPrompt()`, and `prompts.ts` are not
affected. `spaces/**` is not imported from anywhere outside itself — fully
isolated, exactly like every other Knowledge domain on the day it was
created. `docs/AI_CORE_CHECKLIST.md` and `knowledge/README.md` received
corresponding entries. `npm run build` passes.

### Phase 7.3.1 — Spatial Knowledge Governance & Evolution Foundation (DS-7.3.1, документация)

Governance-этап перед DS-7.4, без единой строки runtime-кода —
`knowledge/spaces/{registry,index}.ts` not modified. **Spatial Knowledge
(DS-7.3) is considered architecturally closed** at this level of detail:
its single responsibility, its content boundaries, and its evolution path
are now permanently documented, the same way DS-7.2.1 closed governance
for `space-type/**`.

`knowledge/spaces/README.md` received ten permanent governance sections:

- **Spatial Knowledge Governance** — the single responsibility ("what is
  generally true about this type of space?"); explicitly not generation,
  rendering, prompting, classification, analysis, or detection.
- **Canonical Knowledge Policy** — a table of allowed knowledge (typical
  circulation, privacy, lighting, storage, functional zones,
  accessibility, occupancy, acoustics, maintenance, safety) versus
  forbidden knowledge (client/project requirements, the current uploaded
  or generated room, furniture coordinates, prompt wording, provider
  hints, rendering instructions, camera settings, business rules,
  temporary project data), each mapped to where it actually belongs
  (Project Model, `RoomContext`, Room Analyzer, Generation Engine,
  Provider, Formatter, future Rules).
- **Knowledge Stability Contract** — Spatial Knowledge holds only stable,
  general, reusable architectural knowledge; never project-specific,
  customer-specific, session-specific, AI-generated, runtime, user-
  specific, or otherwise dynamic facts, which belong instead to Room
  Analyzer, a future Project Model, `PromptContext`, or future runtime
  layers.
- **Future Knowledge Layers** — an illustrative future composition
  (Structural, Environmental, Operational, Behavioral, Commercial,
  Safety, Accessibility, Compliance, Workflow, Building Code), explicitly
  not current `metadata` fields, not separate registries, and not
  implemented.
- **Metadata Evolution** — an expanded illustrative list (`behavior`,
  `workflow`, `environment`, `accessibility`, `operations`, `compliance`,
  `buildingCode`, `security`, `maintenance`, `visitorFlow`, `occupancy`,
  `energy`, `sustainability`), explicitly none implemented, current model
  unchanged.
- **Knowledge Boundary** — the permanent pipeline `SpaceType → Spatial
  Knowledge → Rules → Prompt Draft → Formatter → Generation`, with four
  non-overlapping roles (identify / explain / interpret / generate).
- **Future Consumers** — one Knowledge layer designed to serve many future
  consumers without a shape change: Prompt Engine, Room Analyzer,
  Furniture Planner, Material Engine, Object Detection, Automatic Zoning,
  Commercial/Healthcare/Hospitality/Industrial/Landscape Planner,
  Developer Studio, Benchmark, future BIM integrations.
- **Reuse Policy** — the single official Decision Flow (`Reuse →
  Metadata → Composition → Registry → Top-level Contract`, ADR-000
  Principles 19–22) applied explicitly to this domain.
- **Registry Protection ("What MUST NEVER happen")** — twelve permanent
  prohibitions: Knowledge never becomes Prompt, never stores prompt
  text/providers/rendering instructions/project data/generated
  results/user preferences/coordinates/detected objects, and never
  imports Prompt Engine, `RoomContext`, or Space Type runtime.
- **Knowledge Identity** — five layers, five distinct questions
  (`SpaceType` / Spatial Knowledge / Room Analyzer / Prompt Engine /
  Generation), extending the three-question Boundary Protection from
  DS-7.3 to the full future chain.
- **Spatial Knowledge Invariants** — seven permanent constraints: never
  classifies, never generates, never analyzes, never stores runtime
  facts, never owns Prompt logic, never owns rendering; always remains
  reusable.

No new ADR was created — this stage applies ADR-000 Principles 19–22 and
the existing ADR-004 boundary discipline to Spatial Knowledge; it does
not introduce a new architectural decision, so `docs/adr/ADR_INDEX.md` is
unchanged. `docs/AI_CORE_CHECKLIST.md` and `knowledge/README.md` received
corresponding entries. `knowledge/spaces/{registry,index}.ts`,
`knowledge/core/**`, `knowledge/types.ts`, `space-type/**`,
`design-domain/**`, Prompt Engine, Prompt Domain, `PromptContext`,
`RoomContext`, Rule Engine, Builder, Formatter, Pipeline, Style Registry,
Developer Studio, Benchmark, the public site, the API, and Production are
not affected. `npm run build` passes.
