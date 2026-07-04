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

Зафиксированные архитектурные решения (ADR) — только документация,
без изменений кода:

- [ADR-001 — Provider Terminology](adr/ADR-001-Provider-Terminology.md)
- [ADR-002 — MY_STYLE Identifier](adr/ADR-002-MyStyle-Identifier.md)
- [ADR-003 — PromptContext Contracts](adr/ADR-003-PromptContext-Contracts.md)
