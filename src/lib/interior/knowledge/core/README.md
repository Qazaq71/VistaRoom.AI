# Knowledge Core (DS-6.4.1 + DS-6.4.2)

## 1. Что это такое

Knowledge Core — более общий, доменно-независимый уровень абстракции под
существующим `StyleKnowledge`/`KnowledgeReference` (DS-6.4). Это
фундамент, а не замена: ничего в `../styles/*.ts` или
`../registry/KnowledgeRegistry.ts` не изменено и не использует ничего из
этой директории напрямую. С DS-6.4.2 `../types.ts` **начал** ссылаться на
`core/` (см. §3 "Унификация именования" и §8 "Дедупликация") — это
единственная новая связь, и она остаётся внутри `knowledge/**`.

Только типы (`Entity.ts`, `Feature.ts`, `FeatureTypes.ts`,
`KnowledgeGraph.ts`, `Relation.ts`, `RelationType.ts`) — без единой
строки реализации, без методов, без валидации, без значений по
умолчанию.

## 2. Архитектурная схема

```
KnowledgeGraph                (./KnowledgeGraph.ts) — контракт, не реализован
  │
  ├─ entities:  KnowledgeEntity[]     (./Entity.ts) — { id, type: KnowledgeEntityKind, name, ... }
  │
  ├─ features:  KnowledgeFeature[]    (./Feature.ts) — KnowledgeEntity + domain: FeatureType
  │       │
  │       ├─ MaterialFeature       (domain: "material")
  │       ├─ LightingFeature       (domain: "lighting")
  │       ├─ FurnitureFeature      (domain: "furniture")
  │       ├─ DecorFeature          (domain: "decor")
  │       ├─ ColorFeature          (domain: "color")
  │       ├─ ArchitectureFeature   (domain: "architecture")
  │       ├─ CompositionFeature    (domain: "composition")
  │       ├─ ConstraintFeature     (domain: "constraint")
  │       ├─ SpaceFeature          (domain: "space")
  │       ├─ MoodFeature           (domain: "mood")
  │       ├─ QualityFeature        (domain: "quality")
  │       └─ RenderingFeature      (domain: "rendering")
  │
  └─ relations: KnowledgeRelation[]   (./Relation.ts) — typed by RelationType
```

## 3. Унификация именования доменов (DS-6.4.2)

DS-6.4.1 ввёл `FeatureType` (`material`, `color`, `constraint`, ...)
параллельно уже существующему `KnowledgeCategory` (`../types.ts`:
`materials`, `colors`, `constraints`, ...) — два похожих списка с разными
литералами для одних и тех же трёх доменов. DS-6.4.2 устраняет это:

- **Канонический источник — `FeatureType`.** Он живёт в `core/` и с
  DS-6.4.2 состоит из двух именованных частей:
  `UniversalFeatureType` (`material`, `color`, `lighting`,
  `composition`, `constraint`, `space`, `mood`, `quality`, `rendering` —
  применимы почти к любой дизайн-дисциплине) и `InteriorFeatureType`
  (`furniture`, `decor`, `architecture` — специфичны для интерьеров по
  происхождению названия). `FeatureType = UniversalFeatureType |
  InteriorFeatureType`.
- **`KnowledgeCategory` теперь определяется через `FeatureType`:**
  `export type KnowledgeCategory = FeatureType | "style";` — не
  параллельный список, а прямая производная. Совпадение литералов
  гарантировано компилятором, а не дисциплиной именования.
- Изменились сами литералы для 3 из 12 доменов: `"materials"` →
  `"material"`, `"colors"` → `"color"`, `"constraints"` → `"constraint"`.
  Остальные 9 доменов уже были в единственном числе и не изменились.
  Это затронуло `category: "materials"`/`"colors"`/`"constraints"` во
  всех 20 файлах `../styles/*.ts` (значения строковых литералов внутри
  `knowledgeRefs`, не тип и не поведение) и три доменных типа
  (`MaterialKnowledge`, `ColorKnowledge`, `ConstraintKnowledge` в
  `../types.ts`).
- Директории (`../materials/`, `../colors/`, `../constraints/`, ...) **не
  переименованы** — это осознанно: `../styles/` тоже называется во
  множественном числе, а сам домен-литерал `"style"` — в единственном.
  Имя папки описывает "коллекцию", литерал типа описывает "категорию
  одной записи" — это два разных, оба легитимных, соглашения об
  именовании, которые не обязаны совпадать буква-в-букву.

Принцип "один домен → один литерал" теперь выполняется машиной
(TypeScript), а не только соглашением.

## 4. `KnowledgeEntity` / `KnowledgeEntityKind` (DS-6.4.2)

`KnowledgeEntity`: `id`, `type: KnowledgeEntityKind`, `name`,
`description?`, `tags?`, `metadata?`. Всё, что можно идентифицировать,
назвать и описать, независимо от домена.

`type` раньше был свободной `string` (DS-6.4.1) — DS-6.4.2 вводит
`KnowledgeEntityKind = "entity" | "feature" | "relation"`. Это
**структурная** ось ("какое место в иерархии Entity/Feature/Relation
занимает объект"), не путать с **предметной** осью `domain: FeatureType`
на `KnowledgeFeature` ("к какому домену дизайна относится"). `"relation"`
зарезервирован на будущее — на случай, если понадобится "овеществлённая"
связь со своими `id`/`name`/`metadata`, отдельная от лёгкого
`KnowledgeRelation` (`from`/`to`/`type`/`weight?`); сегодня такой сущности
нет, `KnowledgeRelation` остаётся единственной формой связи.

## 5. `KnowledgeFeature` — специализация на один домен

`KnowledgeEntity` (`type: "feature"`, зафиксировано) + `domain:
FeatureType`, `weight?`, `aliases?`, `relatedFeatures?`, `notes?`.
`domain` — единственное поле, которое строго типизирует принадлежность
фичи к домену. `MaterialFeature`, `LightingFeature` и т.д. — это
`KnowledgeFeature` с `domain`, зафиксированным на конкретном литерале —
чистое сужение типа, без дополнительных полей и без реализации.

**Feature — будущий строительный блок промптов.** Идея, ради которой
существует Knowledge Core: стиль должен собираться не из россыпи
`KnowledgeReference` с вручную написанными `id`/`name`, а из
переиспользуемых, типизированных `KnowledgeFeature` — одних и тех же
"кирпичиков материала/света/декора/...", на которые может сослаться любое
количество стилей (и, в будущем, любых других дизайн-категорий — не
только интерьеров). На DS-6.4.2 это по-прежнему только фундамент: ни один
стиль ни на одну `KnowledgeFeature` пока не ссылается — см. §7 "Migration
Strategy".

## 6. Relation mechanisms — почему их два (DS-6.4.2)

В модели одновременно существуют `KnowledgeFeature.relatedFeatures:
string[]` и `KnowledgeRelation`/`KnowledgeGraph`. Это не случайное
дублирование — у них разные задачи, и оба остаются:

```
KnowledgeRelation
  ↓
KnowledgeGraph
  ↓
сложные, типизированные связи (requires/conflicts/enhances/...,
с weight, между ЛЮБЫМИ двумя id — Feature↔Feature, Style↔Feature,
Entity↔Entity)

relatedFeatures
  ↓
плоский список id прямо на самой Feature
  ↓
быстрый lookup без обхода графа — для потребителей вроде будущего
Prompt Builder, которым не нужен весь граф, а нужно быстро
получить "что ещё сочетается с этим материалом"
```

`relatedFeatures` — денормализованный, дешёвый путь для простого случая.
`KnowledgeRelation`/`KnowledgeGraph` — полный, типизированный граф для
сложного случая (конфликты, требования, множественные типы связей,
связи не только между Feature). Ничего не читает и не синхронизирует
одно с другим — на DS-6.4.2 оба остаются чистыми, неиспользуемыми
контрактами.

## 7. Migration Strategy (DS-6.4.2)

Архитектурное направление, куда движется Knowledge Base — **декларация,
не выполняемая миграция**. Никакой код на DS-6.4.2 не переведён с одной
модели на другую, ничего не удалено, ничего не помечено deprecated.

```
KnowledgeReference   (../types.ts — лёгкий указатель id/name/category)
        ↓
KnowledgeFeature      (./Feature.ts — полноценная типизированная запись знания)
        ↓
StyleKnowledge         (../types.ts — стиль, ссылающийся на Feature, а не
                        на россыпь вручную написанных KnowledgeReference)
        ↓
Prompt Engine           (ещё не существует для Knowledge Base — будущий
                        потребитель, который читает StyleKnowledge/
                        KnowledgeFeature и строит текст промпта)
```

Как это стоит читать:

1. Сегодня (DS-6.4) `StyleKnowledge.knowledgeRefs` — это массивы
   `KnowledgeReference`: `{ id, name, category, weight?, notes? }`,
   написанные вручную в каждом файле `styles/*.ts`, ни на что реальное
   не ссылающиеся (домены `materials/`, `colors/`, ... — пустые).
2. Следующий логический шаг (не DS-6.4.2, будущий этап) —
   наполнить домены реальными `KnowledgeFeature`-записями (`MaterialFeature`
   и т.д.), на которые `KnowledgeReference.id` сможет реально указывать.
3. Дальше — сам `StyleKnowledge` мог бы ссылаться на `KnowledgeFeature`
   более прямо (не только через `id`, но, например, через
   `KnowledgeGraph`-связи `Style↔Feature`), но это требует, чтобы
   `StyleKnowledge` сам стал графовым узлом (`KnowledgeEntity`-совместимым)
   — на DS-6.4.2 `StyleKnowledge` **намеренно не** реализует
   `KnowledgeEntity` (см. §8 и `KnowledgeGraph.ts`, "KnowledgeGraph
   sufficiency").
4. Только после этого у Prompt Engine появится основание читать
   Knowledge Base напрямую — до этого момента Knowledge Base остаётся
   полностью не подключённой (см. `../README.md` §7).

Ни один из этих шагов не запланирован как часть какого-то конкретного
DS-этапа — это ориентир для будущих решений, а не бэклог.

## 8. Дедупликация (DS-6.4.2)

Ревизия полей `KnowledgeEntity`, `KnowledgeFeature`, `StyleKnowledge`,
`KnowledgeReference`, `KnowledgeRelation` на предмет случайного
дублирования:

- **Сокращено:** 12 доменных типов-заготовок в `../types.ts`
  (`MaterialKnowledge`, `FurnitureKnowledge`, ..., `QualityKnowledge`)
  были независимыми, почти идентичными по форме `KnowledgeFeature`-у
  копиями (`{ id, name, category, description?, notes? }` против
  `{ id, type, name, domain, description?, tags?, metadata?, weight?,
  aliases?, relatedFeatures?, notes? }`) — ровно та проблема, которую
  отметила ревизия DS-6.4.1. С DS-6.4.2 каждый `<Domain>Knowledge` — это
  **алиас** на соответствующий `<Domain>Feature` (`export type
  MaterialKnowledge = MaterialFeature;` и т.д.), а не отдельное
  определение. Все `<domain>/registry.ts` (`../materials/registry.ts` и
  т.д.) продолжают работать без единой правки — они лишь ссылались на имя
  типа, никогда на его форму напрямую.
- **Оставлено как есть, с комментарием:** `id`/`name` есть и на
  `KnowledgeEntity`/`KnowledgeFeature`, и на `KnowledgeReference`. Это не
  случайное дублирование, а намеренный паттерн "запись vs указатель"
  (как полноценная строка таблицы и внешний ключ с денормализованным
  названием) — `KnowledgeReference` **не** заменяется на
  `KnowledgeFeature`, потому что ссылка обязана оставаться лёгкой даже
  когда сама Feature не существует (домены пока пустые). См. комментарий
  на `KnowledgeReference` в `../types.ts`.
- **Оставлено как есть, с комментарием:** `category`
  (`KnowledgeReference`, `../types.ts`) и `domain`
  (`KnowledgeFeature`, `./Feature.ts`) — по сути одна и та же ось
  (принадлежность домену), но с разными именами и разной шириной:
  `category: KnowledgeCategory` шире (`FeatureType | "style"` — ссылка
  может указывать даже на другой стиль), `domain: FeatureType` уже
  (Feature никогда не бывает "стилем"). Разное имя отражает разную
  область значений, а не забывчивость.
- **Оставлено как есть, с комментарием:** `weight` встречается на
  `KnowledgeReference`, `KnowledgeFeature` и `KnowledgeRelation` — три
  разных смысла ("насколько стиль опирается на эту ссылку", "насколько
  сама Feature значима", "насколько сильна эта конкретная связь"), см.
  комментарии на каждом из трёх полей.
- **Оставлено как есть:** `StyleKnowledge` не расширяет `KnowledgeEntity`
  (не получает `type`/`tags`/`metadata`), несмотря на похожий набор
  `id`/`description`. Это намеренно отложено до Migration Strategy (§7) —
  добавлять это сейчас означало бы выполнять миграцию, а не только
  декларировать её.

## 9. Проверка масштабируемости (DS-6.4.2)

Ревизия для будущих вертикалей за пределами интерьеров: Landscape AI,
Exterior AI, Commercial Interior AI, Yacht Design, Aircraft Interior,
Furniture Designer, Fashion AI, Product Design, Game Environment,
Exhibition Booth Designer.

- **`KnowledgeEntity`/`KnowledgeFeature`/`KnowledgeRelation`/
  `KnowledgeGraph`** не содержат ничего интерьер-специфичного — ни одно
  поле не называется `roomType`, `wallMaterial` и т.п. Структура
  (Entity → Feature → Relation, id-based graph) одинаково подходит любой
  из перечисленных вертикалей без изменений.
- **`FeatureType`** — единственное место, где встречается
  предметно-специфичная лексика. С DS-6.4.2 он разделён на
  `UniversalFeatureType` (9 доменов, подходят Yacht Design, Aircraft
  Interior, Landscape AI, Exterior AI, Fashion AI, Product Design, Game
  Environment, Exhibition Booth Designer, Commercial Interior AI,
  Furniture Designer без изменений: material, color, lighting,
  composition, constraint, space, mood, quality, rendering) и
  `InteriorFeatureType` (3 домена — furniture, decor, architecture,
  названы по интерьерному происхождению, но не привязаны к рантайму
  интерьеров).
- **Вывод:** ни для одной из десяти перечисленных вертикалей текущая
  модель не требует новых *базовых* типов (`Entity`/`Feature`/
  `Relation`/`Graph`) — только, возможно, своего именованного набора
  доменов (см. §10 "Расширяемость FeatureType").

## 10. Расширяемость `FeatureType` (DS-6.4.2)

Риск, зафиксированный в ревизии DS-6.4.1: закрытый список доменов в
`FeatureType` рано или поздно потребует `FeatureType2` или
`LandscapeFeatureType`, живущего отдельно от `FeatureType`.

DS-6.4.2 избегает этого структурно, а не запретом: `FeatureType`
собирается аддитивно из именованных частей —
`UniversalFeatureType | InteriorFeatureType`. Когда появится
Landscape AI, Yacht Design и т.д., паттерн такой:

```ts
export type LandscapeFeatureType = "planting" | "terrain" | "hardscape";

export type FeatureType =
  | UniversalFeatureType
  | InteriorFeatureType
  | LandscapeFeatureType; // одна строка правки, не новый параллельный тип
```

`FeatureType` остаётся единственным каноническим именем на весь проект —
новые вертикали добавляют originalName-специфичный именованный кусок и
расширяют один и тот же union, а не заводят вторую систему типизации.
`KnowledgeCategory` (`FeatureType | "style"`) автоматически подхватывает
любое такое расширение, ничего в `../types.ts` менять не придётся.

## 11. `KnowledgeGraph` — достаточность контракта (DS-6.4.2)

Проверено против: графа зависимостей, рекомендаций, совместимости
материалов, конфликтов, брендов, композиций, связей Feature↔Feature,
Style↔Feature, Room↔Feature.

**Интерфейс не расширен** — текущая форма (`entities`, `features`,
`relations`) уже достаточна:

- Граф зависимостей / рекомендации / совместимость материалов /
  конфликты — всё это типизированные `KnowledgeRelation` между двумя
  `id` (`requires`/`supports`/`conflicts`/`enhances`/...) — не требует
  новых полей.
- Бренды — это просто ещё один `KnowledgeEntity` (`type: "entity"`,
  своя `metadata`), не отдельная сущность верхнего уровня.
- Композиции — набор `KnowledgeRelation` между `CompositionFeature` и
  другими Feature, либо сама `CompositionFeature` с `relatedFeatures`.
- Feature↔Feature — прямо поддержано: `relations` не ограничивает типы
  узлов, `from`/`to` — произвольные `string` id.
- Style↔Feature и Room↔Feature — поддержаны **синтаксически**
  (`from`/`to` — просто `string`, ничто не мешает передать
  `StyleKnowledge.id` или id комнаты), но не **типобезопасно**:
  `entities: KnowledgeEntity[]` не может содержать `StyleKnowledge`
  (он не реализует `KnowledgeEntity`), а "комната" — понятие Prompt
  Domain (`RoomContext`), не Knowledge Base. Расширять `KnowledgeGraph`
  ради этого сейчас означало бы либо тянуть `StyleKnowledge` из
  `../types.ts` в `core/` (создавая встречную зависимость `core/` →
  `../types.ts`, которая ломает сегодняшнее направление зависимостей
  `../types.ts` → `core/`, см. §3), либо ослаблять типизацию `entities`
  до `unknown[]`. Оба варианта хуже, чем оставить это ограничение
  задокументированным и отложенным до Migration Strategy (§7) — граф
  типобезопасно свяжет Style/Room, когда (и если) они сами станут
  `KnowledgeEntity`-совместимыми.

## 12. Статус на DS-6.4.1 / DS-6.4.2

DS-6.4.1: `core/` создан как изолированный, самодостаточный модуль —
только типы, ничем не используемые.

DS-6.4.2: имена доменов унифицированы (`FeatureType`/`KnowledgeCategory`,
§3), `KnowledgeEntity.type` строго типизирован (`KnowledgeEntityKind`,
§4), задекларирована Migration Strategy (§7, ничего не мигрировано),
явно задокументированы оба механизма связей (§6), проведена ревизия
масштабируемости (§9) и расширяемости `FeatureType` (§10), устранена
дублирующая пара `<Domain>Knowledge`/`<Domain>Feature` (§8), подтверждена
достаточность `KnowledgeGraph` (§11, интерфейс не расширен).

`../index.ts` (публичный экспорт Knowledge Base) по-прежнему **не
реэкспортирует** ничего из `./core` напрямую — увидеть эти типы явным
импортом можно только из `knowledge/core/*`. С DS-6.4.2 `../types.ts`
**внутренне** зависит от `core/` (см. §3, §8) — это первая и единственная
связь через границу `core/`, и она остаётся строго внутри
`src/lib/interior/knowledge/**`. Ничего за пределами `knowledge/**` —
Prompt Domain, Prompt Engine, Rule Engine, Generation Engine, Provider,
Style Registry, Developer Studio, Benchmark, публичный сайт, API — не
импортирует `knowledge/core/**`, ни напрямую, ни транзитивно.
