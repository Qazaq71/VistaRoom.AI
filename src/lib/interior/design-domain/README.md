# Design Domain (DS-7.1 — Foundation)

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

## 7. Использование

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
