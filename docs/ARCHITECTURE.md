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

## Phase 7 — Prompt Lab

Внутренний инструмент Developer Studio для итеративной отладки и
сравнения промптов, построенных Prompt Engine. Ещё не создан.

## Phase 8 — Production Integration

Подключение Prompt Engine к реальной генерации на публичном сайте
(замена/дополнение текущего `buildEditPrompt()` в `src/lib/prompts.ts`).
Ещё не выполнено.

## Phase 9 — Architecture Refactoring 2.0

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

См. также [AI_CORE_CHECKLIST.md](AI_CORE_CHECKLIST.md) — чек-лист перед
каждым новым архитектурным этапом (начиная с DS-6).
