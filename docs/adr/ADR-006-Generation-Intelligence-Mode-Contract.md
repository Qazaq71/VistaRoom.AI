# ADR-006 — Generation Intelligence Mode Contract

## Status

Accepted. Формализует контракт, уже полностью описанный в
[ACS-001 — Generation Intelligence](../platform/acs/ACS-001-Generation-Intelligence.md),
как решение **R4** [Architecture Freeze
Resolution](../architecture/audits/Architecture-Freeze-Resolution.md).
Номер этого ADR подтверждён без изменений относительно провизорного
номера в `ADR-Backlog-Consolidated.md` («ADR-006» — «Generation
Intelligence: контракт режимов `mode`»).

## Problem

Generation Intelligence (ACS-001) — единая точка вызова генерации
изображения у провайдера для двух разных Platform Capabilities: PCS-001
(Smart Interior Generation, полная перерисовка) и PCS-002 (Intelligent
Room Transformation, частичное редактирование). Без явного, проверяемого
контракта, разграничивающего режимы вызова, есть риск несогласованных
вызовов — например, вызов с режимом полной генерации, но с переданной
маской региона, либо вызов частичного редактирования без маски. Это не
абстрактный риск: сам ACS-001 фиксирует, что подобное рассогласование
«вероятно, ошибка на стороне вызывающего PCS», а не то, что Generation
Intelligence должен домысливать или тихо исправлять.

## Context

Согласно Roadmap v1.3, Generation Intelligence сам не решает, *что*
генерировать — он получает готовый Prompt String (от Prompt Intelligence,
см. [ADR-005](ADR-005-Formatter-DecisionTrace-Contract.md)) и параметры
режима, вызывает провайдера и возвращает результат. Модуль существует
именно для того, чтобы PCS-001 и PCS-002 не реализовывали каждый свою
собственную интеграцию с провайдером, а использовали один общий,
предсказуемый контракт.

ACS-001 уже фиксирует техническую границу между PCS-001 и PCS-002 как
разграничение по параметру `mode`, а не по отдельным реализациям:

| | PCS-001 (Smart Interior Generation) | PCS-002 (Intelligent Room Transformation) |
|---|---|---|
| **Режим (`mode`)** | `FULL_GENERATION` | `PARTIAL_EDIT` или `INPAINTING` |
| **Обязательное наличие исходного изображения** | Да (референс комнаты), используется как основа для полной перерисовки | Да, используется как основа с сохранением незатронутых зон |
| **Обязательное наличие маски/региона** | Нет | Да — без маски вызов в этом режиме не допускается |
| **Ожидаемый результат** | Полностью перерисованное изображение помещения | Изображение с изменённой только заданной зоной, остальное — визуально идентично исходному |

Это разграничение уже принято в ACS-001; данный ADR формализует его как
архитектурное решение, проверяемое тестами, а не пересматривает его.

## Decision

Generation Intelligence определяет режим вызова провайдера **исключительно
на основании явно переданного параметра `mode`**, а не самостоятельного
анализа контекста. Модуль обязан отклонять вызов с ошибкой, если:

- `mode = FULL_GENERATION`, но передана маска/регион — несогласованный
  вызов, вероятная ошибка на стороне вызывающего PCS;
- `mode = PARTIAL_EDIT` или `INPAINTING`, но маска/регион отсутствует.

Это не бизнес-правило, а инвариант контракта — он проверяется тестами (см.
ACS-001, раздел Tests), а не остаётся на усмотрение вызывающего кода.

## Mode Contract

### FULL_GENERATION

- Используется PCS-001 (Smart Interior Generation).
- Обязателен `sourceImage` (референсное изображение помещения) как основа
  для полной перерисовки.
- `maskRegion` **запрещён** — его наличие делает вызов невалидным.
- Ожидаемый результат: полностью перерисованное изображение помещения.

### PARTIAL_EDIT

- Используется PCS-002 (Intelligent Room Transformation).
- Обязателен `sourceImage` как основа с сохранением незатронутых зон.
- `maskRegion` **обязателен** — без него вызов невалиден.
- Ожидаемый результат: изображение с изменённой только заданной зоной,
  остальное визуально идентично исходному.

### INPAINTING

- Используется PCS-002 (Intelligent Room Transformation), наравне с
  `PARTIAL_EDIT`, — оба режима PCS-002 подчиняются одному и тому же
  требованию обязательной маски.
- Обязателен `sourceImage`.
- `maskRegion` **обязателен** — без него вызов невалиден.
- Ожидаемый результат: как и `PARTIAL_EDIT` — изменена только заданная
  зона.

## Provider

Generation Intelligence (ACS-001) — единая точка вызова генерации у
Provider Layer. Provider Layer используется как внутренний слой этого
модуля (интеграция с `gpt-image-2/edit` или другим провайдером), а не как
отдельный AI Capability верхнего уровня.

## Consumers

- **PCS-001 (Smart Interior Generation)** — вызывает с
  `mode = FULL_GENERATION`.
- **PCS-002 (Intelligent Room Transformation)** — вызывает с
  `mode = PARTIAL_EDIT` или `INPAINTING`.
- **Quality Intelligence (Refinement Engine, Phase K)** — потенциальный
  потребитель при необходимости повторного вызова после неудачной
  валидации; повторный вызов инициируется извне, сам модуль не запускает
  себя рекурсивно (согласно ACS-001 Consumers).

## Dependencies

Восходящие (согласно ACS-001 Dependencies):

- **Prompt Intelligence** — единственный источник `promptString`.
  Generation Intelligence не формирует и не модифицирует промпт
  самостоятельно (см. [ADR-005](ADR-005-Formatter-DecisionTrace-Contract.md)).
- **Scene Intelligence** — источник `maskRegion`, только для режимов
  `PARTIAL_EDIT`/`INPAINTING`.

Запрещённые зависимости (согласно ACS-001):

- Generation Intelligence не имеет права напрямую обращаться к Domain
  Intelligence, Knowledge Packs или Production-коду — все необходимые
  данные приходят через `promptString` и явные параметры вызова.
- Не имеет права принимать решения о повторной генерации — это решает
  Quality Intelligence/оркестратор; Generation Intelligence только
  исполняет вызов, который его попросили сделать.

## Public Contract

Функциональный контракт (без привязки к конкретному языку/фреймворку,
согласно ACS-001 Public Contract):

```
generate(params: {
  promptString: string,
  mode: "FULL_GENERATION" | "PARTIAL_EDIT" | "INPAINTING",
  sourceImage: ImageRef,
  maskRegion?: RegionDescriptor,   // обязателен только для PARTIAL_EDIT / INPAINTING
  size: Dimensions,
  qualityTier: "low" | "medium"
}) => {
  status: "success" | "error",
  resultImage?: ImageRef,
  actualCost: number,
  actualLatency: number,
  providerMetadata: ProviderMetadata,
  errorCode?: string
}
```

## Non-goals

Generation Intelligence **не отвечает** за (согласно ACS-001
Non-responsibilities):

- понимание содержимого помещения — это Scene Intelligence;
- формирование самого текста промпта — это Prompt Intelligence
  ([ADR-005](ADR-005-Formatter-DecisionTrace-Contract.md));
- определение маски/области для частичного редактирования — Scene
  Intelligence передаёт готовый регион, Generation Intelligence его не
  вычисляет;
- проверку качества результата (соответствие геометрии, стилю,
  ограничениям) — это Quality Intelligence;
- решение о повторной генерации при неудачном результате — это решает
  Quality Intelligence/оркестратор;
- бизнес-логику (тарифы, лимиты пользователя) — это уровень Production
  Platform.

Этот ADR также не решает:

- добавление нового режима (например, `MULTI_STAGE` для Phase H) — это
  требует явного расширения enum `mode` и отдельного ADR, а не неявного
  расширения поведения существующих режимов (ACS-001, Extension Points);
- Performance Budget для `PARTIAL_EDIT`/`INPAINTING` — по данным ACS-001
  подтверждён только для `FULL_GENERATION` (≤ $0.061, ~60 сек); данные для
  режимов редактирования — неподтверждённое предположение по аналогии,
  требующее отдельного замера;
- расширение bridge за пределы узла, зафиксированного в R1 Architecture
  Freeze Resolution (см. Bridge Mapping ниже).

## Bridge Mapping Track1 ↔ Track2

Согласно решению **R1** Architecture Freeze Resolution: полный мост между
всеми 20 PCS/ACS и Track 1 не строится. Строится только узкая
мэппинг-таблица для узла, задействованного в Gate 1:

```
Track 1                          Track 2
────────────────────────────     ────────────────────────────────
Generation Engine             →  ACS-001 Generation Intelligence
Provider Layer
```

Других соответствий этот ADR не устанавливает.
