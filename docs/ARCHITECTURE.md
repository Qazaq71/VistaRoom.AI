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
Style Registry, Prompt Domain и Benchmark не затронуты. Следующий этап —
DS-6.2 Prompt Builder (первая реализация).

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
