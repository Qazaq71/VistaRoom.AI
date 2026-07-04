# Space Type (DS-7.2 — Foundation)

## 1. Что это такое

`Space Type` (`src/lib/interior/space-type`) — вторая пространственная ось
AI Core, сразу под `Design Domain` (`src/lib/interior/design-domain`,
DS-7.1), в рамках той же **Phase 7 — Spatial Intelligence**. Space Type
описывает **конкретный тип помещения или объекта** — Living Room, Bedroom,
Office, Restaurant, Hotel Room, Operating Room, Classroom, ... (`SPACE_TYPES`
в `space-types.ts`, `SPACE_TYPE_REGISTRY` в `registry.ts`).

Три модели, три разных вопроса, три разных уровня:

| Модель | Вопрос | Слой | Пример значения |
|---|---|---|---|
| `DesignDomain` | "Какой это класс пространства по назначению?" | Spatial Intelligence (DS-7.1) | `hospitality` |
| `SpaceType` | "Какое это конкретное пространство?" | Spatial Intelligence (DS-7.2, этот модуль) | `hotel_room` |
| `RoomContext` | "Что сказал пользователь о своей комнате?" | Prompt Domain (DS-5) | `roomType: "уютный гостиничный номер"` |

`RoomContext.roomType` — открытая строка, введённая или выбранная
пользователем; она ничего не классифицирует (ADR-004, Section 2).
`SpaceType` — классифицированное значение из контролируемого словаря,
которое (в будущем, DS-7.4) будет получено *из* `RoomContext` через явный
Mapping, а не наоборот. Будущий **Room Analyzer** (ещё не создан) — это
предполагаемое имя для компонента, который на входе получит `RoomContext`
(и, возможно, изображение/дополнительные данные), а на выходе даст
`SpaceType` — то есть будущая реализация как раз того самого Mapping,
о котором говорит ADR-004, Section 2. DS-7.2 его не реализует.

## 2. Почему он отделён от Design Domain

`DesignDomain` — маленький (11 значений), стабильный, верхнеуровневый
список категорий пространства по назначению. `SpaceType` — потенциально
большой и часто растущий список конкретных помещений/объектов *внутри*
каждого Design Domain. У "жилой гостиной" и "гостиничного номера" разный
осмысленный набор Space Types именно потому, что они принадлежат разным
Design Domains (`residential` и `hospitality` соответственно). Смешивание
двух списков в одну структуру нарушило бы Principle 10 ADR-000 (Один
термин = одна концепция) и Principle 21 (Design Domain — верхняя
пространственная ось, Space Type — уровень ниже, ссылается на неё, а не
наоборот).

Поэтому `SpaceType` ссылается на `DesignDomainId` (примитивный
идентификатор), а не на весь объект `DesignDomain` — так оба реестра
(`DESIGN_DOMAIN_REGISTRY` и `SPACE_TYPE_REGISTRY`) остаются независимыми
друг от друга: изменение состава `DESIGN_DOMAINS` не требует изменения
формы `SpaceType`, и наоборот.

## 3. Почему он НЕ должен знать ничего о Prompt Engine

Space Type — это чистая пространственная классификация, а не часть сборки
промпта. Он не решает, как называется пространство в промпте, какие
материалы/мебель/освещение для него типичны, и как это объединяется в
текст — это ответственность будущих, более низких уровней (Style →
Knowledge → Prompt Engine). Space Type на этом и любом будущем этапе:

- не импортирует `prompt-engine/**` (Builder/Rules/Formatter/Pipeline);
- не импортирует `prompt-domain/**` (`PromptContext`, `RoomContext` и
  прочие под-контексты);
- не импортирует `knowledge/**` (Knowledge Base/Knowledge Core);
- не импортирует `styles/**` (Style Registry);
- не импортирует Developer Studio, Benchmark, Provider, Generation Engine,
  API, публичный сайт;
- знает только `DesignDomainId` (примитивный тип, не сам модуль
  design-domain целиком), собственную `Metadata` и собственный `Registry`.

Это соответствует Principle 1 (Domain не знает UI) и Principle 5 (Prompt
Engine работает только с `PromptContext`) ADR-000: новый пространственный
уровень не обязан — и не должен — знать о слоях, которые будут построены
поверх него значительно позже (DS-7.3 — Knowledge Integration, DS-7.4 —
Prompt Integration).

## 4. Граница с RoomContext (ADR-004)

`RoomContext` (`src/lib/interior/prompt-domain/contexts/RoomContext.ts`) и
`SpaceType` — два постоянно раздельных концепта (ADR-004, Boundary
Invariant, Section 3). Между ними никогда не будет прямого слияния,
наследования или переименования одного в другое:

```
RoomContext                    SpaceType
(Prompt Domain, DS-5)          (Spatial Intelligence, DS-7.2 — этот модуль)
свободный текст пользователя   классифицированный тип пространства
    │                                   ▲
    │              Mapping              │
    └──────────── (DS-7.4, ещё нет) ────┘
```

DS-7.2 сознательно не вводит Mapping/Adapter — это предмет DS-7.4 (Prompt
Integration), согласно ADR-004, Section 6 (Non-goals) и Section 8 (Future
Evolution). `PromptContext` и `RoomContext` не изменены ни на одно поле.

## 5. Архитектурная диаграмма

Текущее состояние (после DS-7.2):

```
Design Domain                  (src/lib/interior/design-domain, DS-7.1)
  ↓
Space Type                     (src/lib/interior/space-type, DS-7.2) — этот этап
```

Целевая Spatial Architecture (после завершения Phase 7):

```
Design Domain                 (src/lib/interior/design-domain, DS-7.1)
  ↓
Space Type                     (src/lib/interior/space-type, DS-7.2) — этот этап
  ↓
Style                           (src/lib/interior/styles, DS-4)
  ↓
Knowledge                        (src/lib/interior/knowledge, DS-6.4+)
  ↓
Prompt Engine                     (src/lib/interior/prompt-engine, DS-6.1+)
```

Зависимости идут строго сверху вниз: `SpaceType` ссылается на
`DesignDomainId`, ни один уровень не поднимается выше Design Domain, и
Space Type ничего не импортирует из уровней ниже себя (Style, Knowledge,
Prompt Engine).

## 6. Metadata — точка будущего расширения

`SpaceTypeMetadata` (`types.ts`, DS-7.2) с этого этапа официально
закреплена как **точка будущего расширения** Space Type — по тому же
принципу, что и `DesignDomainMetadata` (DS-7.1.1). Верхний контракт
`SpaceType` (`id`, `designDomainId`, `displayName`, `description`, `icon`,
`metadata`) должен оставаться маленьким и стабильным как можно дольше —
каждое новое top-level поле является breaking-изменением для любого
будущего потребителя (Knowledge Integration, Room Analyzer, Material
Engine, Furniture Planner, ...).

Иллюстративные примеры будущих разделов `metadata` (ничего из этого не
реализовано на DS-7.2 — это не roadmap и не TODO, а демонстрация того,
куда рассчитана расти эта точка расширения):

- `capabilities` — что в принципе можно делать с этим типом пространства
- `analysisHints` — подсказки для будущего Room/Space Analyzer
- `renderHints` — подсказки для рендеринга/визуализации
- `providerHints` — подсказки, специфичные для AI-провайдера
- `generationHints` — подсказки для будущей генерации
- `qualityHints` — подсказки для контроля качества результата
- `futureFlags` — feature-flags для экспериментальных возможностей

А внутри них, ещё более иллюстративно (демонстрация глубины, не
конкретный план): Defaults, Accessibility, Occupancy, Workflow, Safety,
LightingScenario, Acoustics, Climate, Privacy.

```
Hotel Room
  ↓ metadata
    ↓ capabilities
      ↓ occupancy
      ↓ privacy
      ↓ workflow

Operating Room
  ↓ metadata
    ↓ analysisHints
      ↓ safety
      ↓ accessibility

Garden
  ↓ metadata
    ↓ renderHints
      ↓ lightingScenario
      ↓ climate
```

Ничего из перечисленного не реализовано — единственная цель этого раздела
показать, что уже существующая точка расширения (`metadata`) достаточна,
чтобы вместить будущие, домен-специфичные возможности без изменения
верхнего контракта `SpaceType` (Principle 22 ADR-000, Evolution through
Composition; единственный официальный Decision Flow — `Reuse → Metadata →
Composition → Registry → Top-level Contract`, см.
[`design-domain/README.md`](../design-domain/README.md), §8–§9).

## 7. Registry

`SPACE_TYPE_REGISTRY` (`registry.ts`) — Single Source of Truth для всех
Space Types, по аналогии с `DESIGN_DOMAIN_REGISTRY`
(`design-domain/registry.ts`) и `INTERIOR_STYLE_REGISTRY`
(`styles/registry.ts`). Только lookup, никакой логики:

- `getSpaceType(id: SpaceTypeId): SpaceType | undefined`
- `getAllSpaceTypes(): SpaceTypeRegistry`

## 8. Иерархия пространств (иллюстративный набор, DS-7.2)

`space-types.ts` содержит 51 иллюстративный Space Type, сгруппированный
(только для читаемости — группировка не является типом) по Design
Domain:

- **Residential** — Living Room, Bedroom, Kitchen, Dining Room, Bathroom,
  Home Office, Hallway, Closet, Laundry, Balcony, Garage
- **Commercial** — Office, Meeting Room, Reception, Coworking, Open
  Office, Private Office, Shop, Retail Showroom, Salon, Gym, Conference
  Room, Exhibition Booth
- **Hospitality** — Cafe, Restaurant, Hotel, Hotel Lobby, Hotel Room
- **Industrial** — Warehouse, Factory, Workshop, Laboratory
- **Healthcare** — Hospital Ward, Clinic, Operating Room, Waiting Area
- **Education** — Classroom, Lecture Hall, Library
- **Transportation** — Airport Terminal, Train Station, Cabin, Deck,
  Passenger Cabin, Cockpit (включает Marine/Aircraft-подобные
  пространства — см. §9, "Универсальность", о будущих отдельных Design
  Domains)
- **Outdoor** — Garden, Terrace, Courtyard, Pool Area
- **Public** — Museum, Gallery

Список **намеренно неполный** и легко расширяемый: добавление нового
Space Type — это один новый элемент массива в `space-types.ts` плюс один
новый литерал в `SpaceTypeId` (`types.ts`), без изменения формы уже
существующих элементов или сигнатур `registry.ts`.

## 9. Универсальность

Модель `SpaceType`/`SpaceTypeMetadata` сознательно не содержит интерьерной
специфики — ни поля, ни литерала, привязанного конкретно к интерьеру.
Она пригодна для любых пространственных вертикалей, не только Interior:

- Residential, Commercial, Hospitality (уже представлены в §8)
- Healthcare, Education (уже представлены в §8)
- Industrial, Transportation, Outdoor (уже представлены в §8)
- Marine, Aircraft — на DS-7.2 представлены через существующий
  `DesignDomainId: "transportation"` (Cabin, Deck, Passenger Cabin,
  Cockpit). Выделение отдельных `DesignDomainId` вроде `marine` или
  `aircraft` — задача самого Design Domain (DS-7.1-family), не Space
  Type; когда/если такие домены появятся, для них потребуется только
  новый `designDomainId` у существующих или новых Space Types — форма
  `SpaceType` не меняется.
- Exhibition, Retail — уже представлены в §8 (Museum, Gallery,
  Retail Showroom, Exhibition Booth)
- Smart Building и любые будущие вертикали — новый `DesignDomainId` +
  новые `SpaceTypeId` без изменения контрактов `types.ts`

Ни одно новое направление не требует переименования существующих типов
или структурного редизайна модуля.

## 10. Future Extension (иллюстративно, не roadmap)

Ничего из перечисленного ниже не реализовано на DS-7.2 — это только
обозначение направлений, для которых `SpaceType` спроектирован как
устойчивая точка опоры:

- **Space Analyzer** — компонент, который сопоставляет `RoomContext`
  (и/или изображение) с `SpaceType` (реализация Mapping из ADR-004,
  предположительно DS-7.4 или отдельный этап)
- **Space Registry expansion** — рост `space-types.ts` за пределы
  иллюстративных 51 значения
- **Knowledge integration** (DS-7.3) — связывание `SpaceType` со слоем
  Knowledge (`src/lib/interior/knowledge`)
- **Prompt integration** (DS-7.4) — подключение Spatial Architecture к
  `PromptContext` через явный Mapping/Adapter
- **Object Detection** — компьютерное зрение поверх пространства для
  подтверждения/уточнения `SpaceType`
- **Furniture Planner** — использование `SpaceType` как входа для
  планирования расстановки мебели
- **Material Engine** — использование `SpaceType` как входа для подбора
  материалов
- **Automatic Masks** — сегментация изображения пространства с опорой на
  `SpaceType`

## 11. Использование

```ts
import {
  SPACE_TYPE_REGISTRY,
  getSpaceType,
  getAllSpaceTypes,
} from "@/lib/interior/space-type";

const hotelRoom = getSpaceType("hotel_room");
const all = getAllSpaceTypes();
```

## 12. Space Type Governance

Постоянное закрепление ответственности Space Type (DS-7.2.1) — этап
governance, а не расширение возможностей.

Space Type — это **семантический классификационный слой**. Он отвечает
ровно на один вопрос: **"Какое это пространство?"** — и ни на какой
другой.

Space Type НЕ является:

- **пользовательским вводом** — это `RoomContext` (Prompt Domain, DS-5);
- **данными промпта** — это `PromptContext` и его под-контексты
  (Prompt Domain);
- **знанием** — это Knowledge/Knowledge Core (`knowledge/**`, DS-6.4+);
- **рендерингом** — рендеринг не существует на уровне Spatial
  Intelligence;
- **генерацией** — генерация принадлежит Generation Engine/Provider;
- **бизнес-логикой** — `registry.ts` содержит только typed lookup, ни
  единого условия, вычисления или побочного эффекта.

Единственная ответственность Space Type: классифицировать *тип*
пространства. Ничего больше — ни сейчас, ни в будущем, без прохождения
Evolution Rules (§18).

## 13. Canonical Registry Policy

`SPACE_TYPE_REGISTRY` (`registry.ts`) содержит **только канонические**
определения типов пространств — устойчивый, контролируемый словарь, а не
свободный или пользовательский список.

**Разрешено** (канонический тип пространства):

- Living Room
- Office
- Restaurant
- Warehouse
- Operating Room
- Airport Terminal
- Gallery

**Запрещено** (не канонический тип, а вариация/персонализация/шум):

- Modern Office
- Luxury Office
- Scandinavian Office
- John's Office
- Office 2
- Office Large
- Office With Reception
- Office For Lawyers
- Temporary Client Types
- Customer-specific Types
- AI-generated Types
- Regional Variants

Запрещённые примеры выше — это не типы пространств, а **вариации**: стиль
("Scandinavian", "Luxury"), персонализация ("John's"), конфигурация
("With Reception", "For Lawyers"), временные/клиентские артефакты
("Office 2", "Temporary Client Types") или сгенерированный/региональный
шум ("AI-generated Types", "Regional Variants"). Ни один из этих случаев
никогда не становится каноническим `SpaceTypeId` или элементом
`SPACE_TYPES`.

Такие вариации принадлежат другим, ещё не построенным уровням:

- будущей `metadata` (§14) — например, стилевые или конфигурационные
  подсказки для уже существующего канонического типа;
- будущему Knowledge (DS-7.3) — семантические связи и знания о вариациях
  стиля/назначения;
- будущему Room/Space Analyzer (§16) — интерпретация ввода пользователя
  относительно канонического словаря;
- будущей Prompt-логике (DS-7.4 и Prompt Engine) — свободный текст,
  стилистические модификаторы, персонализация.

Реестр остаётся маленьким, стабильным и каноническим намеренно — рост
происходит через новые канонические элементы (новые типы помещений,
которых ещё нет в словаре), а не через варианты уже существующих.

## 14. Metadata Evolution Strategy

`SpaceTypeMetadata` (DS-7.2) намеренно остаётся минимальной: `priority`,
`enabled`, `notes?`. Это осознанное решение, а не временный пробел —
контракт должен оставаться маленьким и стабильным как можно дольше
(§6, Evolution through Composition).

В дополнение к иллюстративным разделам, перечисленным в §6
(`capabilities`, `analysisHints`, `renderHints`, `providerHints`,
`generationHints`, `qualityHints`, `futureFlags`), DS-7.2.1 документирует
ещё один, более детализированный набор иллюстративных направлений, под
которые `metadata` могла бы вырасти в будущем:

- `classification`
- `behavior`
- `analysis`
- `generation`
- `rendering`
- `constraints`
- `capabilities`
- `workflow`
- `accessibility`
- `lightingScenario`
- `occupancy`
- `privacy`
- `acoustics`
- `climate`

**Это только примеры.** Ни один из них не реализован. Текущий контракт
`SpaceTypeMetadata` (`priority`, `enabled`, `notes?`) и верхний контракт
`SpaceType` не изменены этим этапом и не меняются одним лишь фактом
перечисления этих названий. Любое реальное добавление одного из этих
разделов — отдельный, будущий этап, проходящий через Evolution Rules
(§18), а не следствие DS-7.2.1.

## 15. Space Type Boundary Invariant

Постоянная (permanent) подсекция — закрепляет и конкретизирует для этого
модуля Boundary Invariant, уже установленный ADR-004 (Section 3) на
уровне всей архитектуры.

```
RoomContext
    ↓
Mapping / Adapter
    ↓
SpaceType
```

- Граница **постоянна**: `RoomContext` никогда не становится `SpaceType`.
- `SpaceType` никогда не заменяет и не поглощает `RoomContext`.
- Единственная связь между ними — явный, именованный Mapping/Adapter,
  который появится не раньше DS-7.4 (Prompt Integration).
- Будущие Analyzer'ы (Room Analyzer, Space Analyzer, AI Classifier —
  ADR-004, Section 3, Allowed Evolution) работают **между** двумя
  моделями — они не растворяют ни одну из них в другую.

Это не новый принцип — это применение уже принятого ADR-004 Boundary
Invariant конкретно к модулю `space-type`, зафиксированное здесь так,
чтобы каждый последующий этап (DS-7.3, DS-7.4 и любой будущий) проверял
себя по этой же границе.

## 16. Future Spatial Stack

Иллюстративная целевая архитектура полного пути от пользовательского
ввода до генерации (ничего из этого не реализовано целиком — часть
уровней уже существует, часть остаётся будущей работой):

```
User Input
  ↓
RoomContext                    (Prompt Domain, DS-5 — существует)
  ↓
Room Analyzer                  (будущее — не создан)
  ↓
SpaceType                      (Spatial Intelligence, DS-7.2 — существует)
  ↓
Knowledge                      (DS-6.4+ существует как слой; интеграция со SpaceType — DS-7.3, будущее)
  ↓
Prompt Engine                  (DS-6.1+ существует как слой; интеграция со SpaceType — DS-7.4, будущее)
  ↓
Generation                     (Provider/Generation Engine — существует как слой; интеграция — будущее)
```

Явно: **на сегодня (DS-7.2.1) реально существуют только `RoomContext` и
`SpaceType`** (а также Design Domain — уровень выше `SpaceType`, DS-7.1)
как самостоятельные, не связанные друг с другом модули. Room Analyzer,
связь `SpaceType` ↔ Knowledge, связь `SpaceType` ↔ Prompt Engine и связь
с Generation — **полностью будущая работа**, ничего из перечисленного не
начато.

## 17. Future Spatial Axes

Помимо `DesignDomainId` (DS-7.1) и `SpaceTypeId` (DS-7.2), в будущем
могут появиться дополнительные, **ортогональные** пространственные модели
— оси классификации, независимые и от Design Domain, и от Space Type.
Иллюстративный пример такой возможной оси — `SpaceCategory`:

- Indoor
- Outdoor
- Floating
- Flying
- Underground
- Mixed

Это **НЕ Space Types** — Space Type отвечает на вопрос "какое это
конкретное пространство" (Living Room, Operating Room, ...), а подобная
будущая ось отвечала бы на принципиально другой вопрос (например,
"пространство находится внутри здания, снаружи, на воде, в воздухе, под
землёй или является смешанным"). Это независимое измерение, а не
подкатегория и не замена `SpaceTypeId`.

На DS-7.2.1: **нет реализации, нет типов, нет реестра** — только
документация возможного направления. Если такая ось когда-либо появится,
она будет отдельным, новым top-level модулем (по аналогии с
`design-domain` и `space-type`), а не полем внутри `SpaceType` или
`SpaceTypeMetadata`.

## 18. Evolution Rules

Любое будущее расширение Space Type (или любой другой модели AI Core)
обязано пройти единственный официальный Decision Flow, уже установленный
Principle 22 ADR-000 и [`design-domain/README.md`](../design-domain/README.md)
§8–§9, в следующем порядке:

```
Reuse
  ↓
Metadata
  ↓
Composition
  ↓
Registry
  ↓
Top-level Contract
```

Переиспользование существующей модели рассматривается прежде, чем любое
расширение через `metadata` (§14); расширение через `metadata`
рассматривается прежде, чем композиция с другой моделью; композиция —
прежде, чем новая запись в registry; и только если ни один из
предыдущих шагов не выражает нужную возможность, рассматривается
изменение верхнего контракта `SpaceType`. Top-level Contract Change —
всегда последний, а не первый вариант.

## 19. What MUST NEVER happen (Registry Protection)

Перечень необратимо запрещённых состояний для `SpaceType`/
`SPACE_TYPE_REGISTRY` — независимо от того, насколько удобным выглядит
нарушение в моменте:

- ❌ `SpaceType` становится `PromptContext`
- ❌ `SpaceType` хранит фрагменты промпта (prompt fragments)
- ❌ `SpaceType` хранит информацию о стиле (Style Registry data)
- ❌ `SpaceType` хранит provider hints
- ❌ `SpaceType` хранит настройки генерации (generation settings)
- ❌ `SpaceType` хранит бизнес-логику
- ❌ `SpaceType` импортирует Prompt Engine
- ❌ `SpaceType` импортирует Knowledge
- ❌ `SpaceType` импортирует `RoomContext`

Каждый из этих пунктов — не гипотетический риск, а конкретное, проверяемое
условие: любой PR, вводящий одно из перечисленных состояний, нарушает
ADR-004 (Boundary Invariant, Section 3) и/или Principle 21 ADR-000
(Design Domain — верхняя пространственная ось) независимо от того, каким
путём это состояние было достигнуто (прямое поле, наследование,
"временный" хак, автоматическая генерация).

## Статус (DS-7.2)

- `types.ts` — `SpaceTypeId` (51 литерал), `SpaceType` (`id`,
  `designDomainId`, `displayName`, `description`, `icon`, `metadata`),
  `SpaceTypeMetadata` (`priority`, `enabled`, `notes?`),
  `SpaceTypeRegistry` (`readonly SpaceType[]`). Все поля `readonly`,
  никаких методов.
- `space-types.ts` — `SPACE_TYPES`, 51 иллюстративный Space Type,
  сгруппированный по Design Domain.
- `registry.ts` — `SPACE_TYPE_REGISTRY`, `getSpaceType(id)`,
  `getAllSpaceTypes()`. Обычный lookup, без логики.
- `index.ts` — публичная поверхность модуля.

Space Type **нигде не используется** — не импортируется из Style
Registry, Knowledge, Prompt Domain, Prompt Engine, Generation Engine,
Provider, Developer Studio, Benchmark, публичного сайта или API. Design
Domain не изменён и по-прежнему ничего не знает о Space Type (Principle
21). `RoomContext` и `PromptContext` не изменены ни на одно поле
(ADR-004). Mapping между `RoomContext` и `SpaceType`, Knowledge
Integration и Prompt Integration намеренно отсутствуют — они предмет
DS-7.3/DS-7.4.

## Статус (DS-7.2.1)

Governance-этап — без единой строки runtime-кода. `types.ts`,
`space-types.ts`, `registry.ts`, `index.ts` **не изменены**: верхний
контракт `SpaceType`, `SpaceTypeMetadata` (`priority`, `enabled`,
`notes?`), состав `SPACE_TYPES` (51 элемент) и сигнатуры `registry.ts`
остались ровно такими же, как на DS-7.2.

Добавлено только: §12 "Space Type Governance", §13 "Canonical Registry
Policy", §14 "Metadata Evolution Strategy", §15 "Space Type Boundary
Invariant", §16 "Future Spatial Stack", §17 "Future Spatial Axes", §18
"Evolution Rules", §19 "What MUST NEVER happen (Registry Protection)" —
все восемь разделов документируют существующую архитектуру и допустимые
пути будущей эволюции, ни один не вводит новый код, новое поле, новый
импорт или новую зависимость.

Prompt Engine, Prompt Domain, Knowledge Core, Design Domain, Rule Engine,
Builder, Formatter, Pipeline, Developer Studio, Benchmark, публичный
сайт, API и Production не затронуты. `PromptContext`, `RoomContext`,
`KnowledgeFeature`, Style Registry не изменены. Room Analyzer, Prompt
Integration, Knowledge Integration, Provider Integration и rendering-логика
по-прежнему не введены — этот этап документирует границы их будущего
появления, но не реализует ни одну из них. `npm run build` проходит.
