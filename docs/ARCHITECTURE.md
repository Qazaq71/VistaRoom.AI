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

## Phase 6 — Prompt Engine

Соберёт `PromptContext` в финальный текстовый промпт/negative prompt для
провайдера, используя `promptFragment` стиля и данные всех
под-контекстов. Ещё не создан.

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

Зафиксированные архитектурные решения (ADR). ADR-001/002/003 изначально
были только документацией; в DS-5.1 часть направлений из них была
частично и безопасно применена в коде (см. Phase 5.1 выше и разделы
"Update — DS-5.1 Architecture Cleanup" в каждом ADR):

- [ADR-001 — Provider Terminology](adr/ADR-001-Provider-Terminology.md)
- [ADR-002 — MY_STYLE Identifier](adr/ADR-002-MyStyle-Identifier.md)
- [ADR-003 — PromptContext Contracts](adr/ADR-003-PromptContext-Contracts.md)
