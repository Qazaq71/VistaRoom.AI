# Design Domain (DS-7.1 — Foundation, DS-7.1.1 — Evolution Foundation)

## 1. Что это такое

`Design Domain` (`src/lib/interior/design-domain`) — новая, полностью
изолированная ось AI Core, начинающая **Phase 7 — Spatial Intelligence**.
Design Domain описывает **верхнеуровневую категорию назначения
пространства** — Residential, Commercial, Hospitality, Public, Outdoor,
Industrial, Entertainment, Transportation, Healthcare, Education,
Mixed-Use (`domains.ts`, `DESIGN_DOMAIN_REGISTRY` в `registry.ts`).

Это не список помещений ("гостиная", "спальня", "офис") и не список
объектов ("вилла", "ресторан", "аэропорт") — это категории на один
уровень выше любого конкретного помещения или объекта.

## 2. Почему он существует отдельно от Style

`INTERIOR_STYLE_REGISTRY` (`src/lib/interior/styles`) отвечает на вопрос
"в каком визуальном языке оформлено пространство?" (минимализм,
скандинавский, ар-деко, ...). Design Domain отвечает на принципиально
другой вопрос: "что это за пространство по назначению?" (жилое,
коммерческое, гостиничное, ...).

Один и тот же Style (например, "минимализм") применим к пространствам из
любого Design Domain — жилая квартира, офис, отель, больница. И наоборот,
один и тот же Design Domain (например, "Hospitality") может содержать
пространства в десятках разных стилей. Это ортогональные оси, а не
иерархия одного понятия — смешивать их в одну структуру означало бы
нарушить Principle 3 (Style Registry — единственный источник знаний о
стилях) и Principle 10 (Один термин = одна концепция) ADR-000.

## 3. Почему он находится выше SpaceType

Space Type (комната/объект конкретного типа — "гостиная", "номер отеля",
"операционная") — это следующий уровень детализации **внутри** одного
Design Domain. У "жилой гостиной" и "гостиничного номера" разный набор
осмысленных Space Types, потому что они принадлежат разным Design
Domains. Поэтому Design Domain обязан существовать раньше и выше Space
Type: Space Type — это классификация *внутри* домена, а не наоборот.
Space Type будет построен отдельно, в DS-7.2, и будет ссылаться на
`DesignDomainId` из этого модуля — а не содержать собственную,
параллельную категоризацию пространств (Principle 19, Composition over
Duplication).

## 4. Почему он НЕ должен знать ничего о Prompt Engine

Design Domain — это чистая доменная классификация пространства, а не
часть сборки промпта. Он не решает, как называется пространство в
промпте, какие материалы/мебель/освещение для него типичны, и как это
объединяется в текст. Это ответственность будущих, более низких уровней
(Space Type → Style → Knowledge → Prompt Engine). Design Domain на этом
и любом будущем этапе:

- не импортирует `prompt-engine/**` (Builder/Rules/Formatter/Pipeline);
- не импортирует `prompt-domain/**` (`PromptContext` и под-контексты);
- не импортирует `knowledge/**` (Knowledge Base/Knowledge Core);
- не импортирует `styles/**` (Style Registry);
- ничего не знает про SpaceType (SpaceType появится в DS-7.2 и будет
  зависеть от Design Domain, а не наоборот).

Это соответствует Principle 1 (Domain не знает UI) и Principle 5 (Prompt
Engine работает только с `PromptContext`) ADR-000: новый доменный уровень
не обязан — и не должен — знать о слоях, которые будут построены поверх
него значительно позже.

## 5. Архитектурная диаграмма

Текущее состояние (DS-7.1):

```
Design Domain
  (Foundation)
```

Целевая Spatial Architecture (после завершения Phase 7):

```
Design Domain                 (src/lib/interior/design-domain, DS-7.1) — этот этап
  ↓
Space Type                     (DS-7.2 — ещё не создан)
  ↓
Style                           (src/lib/interior/styles, DS-4)
  ↓
Knowledge                        (src/lib/interior/knowledge, DS-6.4+)
  ↓
Prompt Engine                     (src/lib/interior/prompt-engine, DS-6.1+)
```

Зависимости идут строго сверху вниз: каждый уровень ссылается только на
уровни выше себя (по `id`), и ни один уровень не поднимается выше
Design Domain — Design Domain ничего не импортирует из уровней ниже
себя.

## 6. Почему DS-7.1 намеренно НЕ содержит Space Types

Это сознательное архитектурное решение, а не недосмотр. Design Domain и
Space Type — два разных уровня абстракции с разным жизненным циклом:
Design Domain — фиксированный, небольшой (11 значений) верхнеуровневый
список категорий, который меняется редко. Space Type — потенциально
большой, регулярно растущий список конкретных помещений/объектов внутри
каждого домена. Построение фундамента (Design Domain) отдельно от
следующего уровня (Space Type) позволяет провалидировать сам верхний
уровень изолированно, прежде чем на него начнёт полагаться более крупный
и более изменчивый Space Type — тот же принцип поэтапного построения, что
использовался для Style Registry → Prompt Domain → Prompt Engine →
Knowledge Base (Principle 20, Evolution over Rewrite).

## 7. Evolution Strategy (DS-7.1.1)

`DesignDomainMetadata` (`types.ts`, DS-7.1) уже существует и с этого этапа
официально закреплена как **точка будущего расширения** Design Domain.
Верхний контракт `DesignDomain` (`id`, `displayName`, `description`,
`icon`, `metadata`) должен оставаться маленьким и стабильным как можно
дольше — каждое новое top-level поле является breaking-изменением для
любого потребителя контракта (Space Type, Style, будущий Room Analyzer,
Material Engine, ...). Поэтому новая функциональность должна в первую
очередь расширять `metadata`, а не добавлять новые top-level поля к
`DesignDomain`.

Иллюстративные примеры будущих разделов `metadata` (ничего из этого не
реализовано на DS-7.1.1 — это не roadmap и не TODO, а демонстрация того,
куда рассчитана расти эта точка расширения):

- `capabilities`
- `generation`
- `analysis`
- `providers`
- `operations`
- `quality`
- `defaults`
- `roomAnalyzerHints`
- `renderingHints`
- `aiHints`
- и т.д.

DS-7.1.1 намеренно **не реализует ни одного** из этих разделов — это
исключительно архитектурная подготовка перед DS-7.2.

## 8. Evolution through Composition (Composition-first Evolution)

Правило: future evolution should extend `DesignDomain` through
composition and metadata before introducing new top-level properties.
Breaking changes to the `DesignDomain` contract should be considered only
when composition can no longer express the new capability.

Полное обоснование, связь с Principle 3/19/20 и текст нового Principle 22
зафиксированы в
[ADR-000, "Update — DS-7.1.1"](../../../../docs/adr/ADR-000-Architecture-Principles.md).

## 9. Decision Flow — для Design Domain

```
Need new capability
        ↓
Reuse existing model?  ── YES ──▶ Reuse
        │ NO
        ↓
Extend metadata?        ── YES ──▶ Metadata
        │ NO
        ↓
Compose new object?     ── YES ──▶ Composition
        │ NO
        ↓
Registry?               ── YES ──▶ Registry
        │ NO
        ↓
Change top-level contract
```

Design Domain уже имеет установленную точку расширения (`metadata`,
DS-7.1), поэтому в его собственном Decision Flow вопрос "расширить
metadata?" стоит сразу после "переиспользовать существующее?" — прежде
чем рассматривать создание новой вложенной композиции. Это не
противоречит общему правилу AI Core ниже — это его частный случай для
модуля, у которого `metadata` уже существует.

## 10. General AI Core Rule (не только Design Domain)

Тот же принцип — общая философия развития **любой** модели AI Core, а не
только Design Domain:

```
Reuse
  ↓
Composition
  ↓
Metadata
  ↓
Registry
  ↓
Top-level Contract
```

Здесь `Composition` стоит раньше `Metadata`, потому что это общее
правило для модулей, у которых ещё нет собственного установленного поля
`metadata` (Principle 19, Composition over Duplication, уже требует
композиции существующих `Feature`/`Entity`/`Relation`/`Context` раньше
любого нового поля). Как только у модуля появляется собственная
`metadata` (как у Design Domain, DS-7.1) — для этого конкретного модуля
`Metadata` может проверяться раньше новой композиции (см. §9) — сам
порядок `Reuse → Composition/Metadata → Registry → Top-level Contract`
не меняется, меняется только то, какая из двух already-established точек
расширения проверяется первой для конкретного модуля.

Это правило применяется к: Design Domain, Space Type, Knowledge, Prompt
Domain, Prompt Engine, Room Analyzer, Material Engine, Style Engine,
Furniture Planner, Object Detection, Automatic Masks — и ко всем будущим
модулям AI Core. Top-level Contract Change — всегда последний, а не
первый, вариант.

## 11. Future Capability (иллюстративно, не roadmap)

Демонстрация того, как `metadata` может расти под конкретный Design
Domain — **не** план работ, **не** TODO:

```
Commercial
  ↓ metadata
    ↓ capabilities
      ↓ branding
      ↓ zoning
      ↓ workflow
      ↓ accessibility
      ↓ signage

Residential
  ↓ metadata
    ↓ capabilities
      ↓ comfort
      ↓ decor
      ↓ lighting
      ↓ storage

Outdoor
  ↓ metadata
    ↓ capabilities
      ↓ terrain
      ↓ vegetation
      ↓ irrigation
      ↓ landscape
```

Ничего из перечисленного не реализовано — единственная цель этого
раздела показать, что уже существующая точка расширения (`metadata`)
достаточна, чтобы вместить домен-специфичные возможности без изменения
`DesignDomain`.

## 12. Универсальность

Design Domain сознательно **не содержит** интерьерной специфики — ни
поля, ни литерала, привязанного конкретно к интерьеру. Модель пригодна
для любых пространственных систем, не только Interior: Landscape,
Architecture, Retail, Hospitality, Marine, Aircraft, Exhibition, Urban,
Infrastructure, Industrial, Smart Building, Healthcare, Education и
любых будущих вертикалей — каждая из них могла бы использовать тот же
`DesignDomain`/`DesignDomainMetadata` контракт, просто с другими
значениями `metadata`.

## 13. Использование

```ts
import {
  DESIGN_DOMAIN_REGISTRY,
  getDesignDomain,
  getAllDesignDomains,
} from "@/lib/interior/design-domain";

const hospitality = getDesignDomain("hospitality");
const all = getAllDesignDomains();
```

## Статус (DS-7.1)

- `types.ts` — `DesignDomainId`, `DesignDomain`, `DesignDomainMetadata`,
  `DesignDomainRegistry`. Только типы, `readonly`, без методов.
- `domains.ts` — `DESIGN_DOMAINS`, 11 верхнеуровневых категорий.
- `registry.ts` — `DESIGN_DOMAIN_REGISTRY`, `getDesignDomain(id)`,
  `getAllDesignDomains()`. Обычный lookup, без логики.
- `index.ts` — публичная поверхность модуля.

Design Domain **нигде не используется** — не импортируется из Style
Registry, Knowledge, Prompt Domain, Prompt Engine, Generation Engine,
Provider, Developer Studio, Benchmark, публичного сайта или API. Space
Types намеренно отсутствуют — будут реализованы в DS-7.2.

## Статус (DS-7.1.1)

Документационный этап, без единой строки runtime-кода. `types.ts`,
`domains.ts`, `registry.ts`, `index.ts` **не изменены** —
`DesignDomainMetadata` уже существовала с DS-7.1 и уже удовлетворяла
требованию "точка расширения без реальных полей"; создавать её заново не
потребовалось.

Добавлено только: раздел "Evolution Strategy" (§7), "Evolution through
Composition" (§8), "Decision Flow" (§9), "General AI Core Rule" (§10),
"Future Capability" (§11, иллюстративно), "Универсальность" (§12) — и
соответствующий "Update — DS-7.1.1" в
[ADR-000](../../../../docs/adr/ADR-000-Architecture-Principles.md).

Design Domain по-прежнему нигде не используется и по-прежнему не
импортирует Prompt Engine, Prompt Domain, Knowledge, Knowledge Core,
Style Registry, Space Type, Developer Studio, Benchmark, API или
Production. Верхний контракт `DesignDomain` не изменился. Стратегия не
требует миграций, не требует рефакторинга, не меняет публичный API и
полностью совместима с DS-7.2, DS-7.3, DS-7.4.
