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

### Phase 6.4 — Modular Interior Knowledge Base Foundation (DS-6.4, текущий этап)

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
`src/lib/interior/styles/**` не изменено. Следующий этап — **DS-6.5
Universal Interior Rules**.

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
