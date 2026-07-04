# Knowledge Base (DS-6.4)

## 1. Что это такое

Knowledge Base — модульная база знаний о том, **что означает** каждый
интерьерный стиль и из каких доменов (материалы, мебель, освещение,
декор, цвета, композиция, ограничения, рендеринг, архитектура,
пространство, настроение, качество) складывается его смысл.

Это **не** Prompt Engine, **не** Rule Engine, **не** Formatter и **не**
production-интеграция. Здесь нет функций, собирающих текст промпта, нет
правил трансформации `PromptContext`, нет обращений к Style Registry на
запись. Это чистые данные (`types.ts` + литералы в `styles/*.ts`) и
несколько тривиальных lookup-функций (`registry/KnowledgeRegistry.ts`,
`<domain>/registry.ts`) — без единой строки бизнес-логики.

## 2. Knowledge Base не содержит логики

Ни один файл в этой директории не строит текст промпта, не вызывает
Prompt Domain, Prompt Engine, Rule Engine, Generation Engine или Provider.
`KnowledgeRegistry`/`<domain>/registry.ts` — это таблицы с одной функцией
поиска по `id`, ничем не отличающиеся по духу от `RuleRegistry.getRuleSet`
(`prompt-engine/rules/RuleRegistry.ts`, DS-6.3).

## 3. Style Registry — каталог, Knowledge Base — смысл

`src/lib/interior/styles` (Style Registry, DS-4) — это **каталог**:
список стилей с `id`, `displayName`, `emoji`, `previewImage`,
`promptFragment` для UI (`StylePicker`) и legacy-промптов
(`prompts.ts`). Knowledge Base **не дублирует** этот каталог и не
добавляет туда новых стилей.

`knowledge/styles/*.ts` — это **смысл**: почему стиль выглядит так, каких
целей он добивается, какие принципы за ним стоят, и на какие другие
domains (materials/furniture/lighting/...) он опирается.
`StyleKnowledge.styleId` — единственная связь между двумя моделями: он
обязан совпадать с `InteriorStyle.id` из `styles/registry.ts`, но
`StyleKnowledge` не импортирует и не читает `INTERIOR_STYLE_REGISTRY`.

## 4. StyleKnowledge ссылается на другие knowledge domains

`StyleKnowledge` не хранит "всё внутри себя". Вместо `materials: string[]`
и подобных плоских списков он хранит `knowledgeRefs` —
`KnowledgeReference[]` на домен (`materials`, `furniture`, `lighting`,
`decor`, `colors`, `composition`, `constraints`, `rendering`,
`architecture`, `space`, `mood`, `quality`). `KnowledgeReference` — это
универсальный указатель (`id`, `name`, `category`, `weight?`, `notes?`),
а не сама сущность. На DS-6.4 домены за пределами `styles/` — пустые
заготовки (см. §6), поэтому ссылки пока не резолвятся ни во что реальное;
это ожидаемо и позволяет добавлять новые стили уже сейчас, без ожидания
наполнения остальных доменов.

## 5. "Мой стиль" (`my_style`) — намеренно отсутствует

Knowledge Base описывает только каталожные (preset) стили. У `my_style`
("Мой стиль", `MY_STYLE_ID` в `src/lib/interior/constants.ts`) нет и не
может быть `StyleKnowledge` — это пользовательский промпт, а не
предустановленный смысл, который можно было бы формализовать в базе
знаний. В будущем "Мой стиль" будет собираться из knowledge-модулей
(materials/furniture/lighting/...) напрямую, а не через `StyleKnowledge`.

## 6. Остальные домены — расширяемые заготовки

`materials/`, `furniture/`, `lighting/`, `decor/`, `colors/`,
`composition/`, `constraints/`, `rendering/`, `architecture/`, `space/`,
`mood/`, `quality/` — на DS-6.4 это только:

- тип домена в `../types.ts` (например `MaterialKnowledge`);
- пустой `registry.ts` (`<DOMAIN>_KNOWLEDGE_REGISTRY: [] `+ пара
  lookup-функций);
- `index.ts`, реэкспортирующий тип и registry;
- `README.md` с пометкой `TODO: Future expansion domain.`

Наполнение реальными записями — задача будущих этапов, не DS-6.4.

## 7. Архитектурная схема

```
Style Registry              (src/lib/interior/styles)
  ↓
Knowledge Base                (src/lib/interior/knowledge) — этот этап (DS-6.4)
  ↓
Prompt Domain                  (src/lib/interior/prompt-domain)
  ↓
Prompt Builder                  (src/lib/interior/prompt-engine/builder)
  ↓
Rule Engine                      (src/lib/interior/prompt-engine/rules)
  ↓
Formatter                         (src/lib/interior/prompt-engine/formatter)
  ↓
Generation Engine
  ↓
Provider
```

Knowledge Base на DS-6.4 **не подключена** ни к одному из следующих
слоёв — ни к Prompt Domain, ни к Prompt Builder, ни к Rule Engine.
Ничего в публичном сайте, API, `buildEditPrompt()`, `prompts.ts`,
`StylePicker`, Benchmark, Developer Studio или Generation Engine не
импортирует `src/lib/interior/knowledge/**`.

## 8. Как добавить новый стиль

1. Убедиться, что стиль уже существует в Style Registry
   (`src/lib/interior/styles/registry.ts`) — Knowledge Base не создаёт
   новые `id` стилей.
2. Создать `styles/<styleId>.ts`, экспортирующий один объект
   `StyleKnowledge` с `styleId`, равным `InteriorStyle.id`.
3. Заполнить `description`, `designGoals`, `corePrinciples`,
   `knowledgeRefs`, `promptFragments`, `negativeCharacteristics`,
   `qualityNotes` — кратко (10–20 строк смысла на стиль), без длинных
   статей.
4. Добавить экспорт в `styles/index.ts` (`ALL_STYLE_KNOWLEDGE`).
   `KnowledgeRegistry.getStyleKnowledge`/`getAllStyleKnowledge` подхватят
   его автоматически — ничего в `registry/KnowledgeRegistry.ts` менять не
   нужно.

## 9. Как расширять другие домены (materials, lighting, furniture, ...)

1. Добавить конкретный тип-запись в `../types.ts`, если текущего
   `<Domain>Knowledge` недостаточно (сохраняя `readonly` на всех полях).
2. Наполнить `<domain>/registry.ts` реальными записями
   (`<DOMAIN>_KNOWLEDGE_REGISTRY: <Domain>Knowledge[]`).
3. `<domain>/index.ts` не менять — он уже реэкспортирует тип и registry.
4. Опционально — сослаться на новые записи из `styles/*.ts` через
   `knowledgeRefs.<domain>`.

Ни один из этих шагов не требует правок Prompt Domain, Prompt Engine,
Rule Engine, Style Registry, `prompts.ts`, API или Developer Studio.

## 10. Knowledge Core (DS-6.4.1 / DS-6.4.2)

`core/` — более общий, доменно-независимый фундамент под всем, что
описано выше: `KnowledgeEntity` → `KnowledgeFeature` →
`MaterialFeature`/`LightingFeature`/`FurnitureFeature`/`DecorFeature`/
`ColorFeature`/`ArchitectureFeature`/`CompositionFeature`/
`ConstraintFeature`/`SpaceFeature`/`MoodFeature`/`QualityFeature`/
`RenderingFeature`, плюс `KnowledgeRelation`/`RelationType` и контракт
`KnowledgeGraph`. Подробности, диаграмма, Migration Strategy и полная
архитектурная ревизия DS-6.4.2 — `core/README.md`.

Идея: в будущем стиль будет собираться не из `KnowledgeReference` с
вручную написанными `id`/`name` (§4 выше), а из переиспользуемых,
строго типизированных `KnowledgeFeature` — общих "кирпичиков"
материала/света/декора/..., на которые может сослаться любое число
стилей. Это только декларация направления (`core/README.md`
"Migration Strategy") — `StyleKnowledge` пока не ссылается ни на одну
`KnowledgeFeature`.

С DS-6.4.2 `../types.ts` **внутренне** зависит от `core/`:
`KnowledgeCategory` определён как `FeatureType | "style"` (единый
источник имён доменов, устраняющий рассинхрон `"materials"` vs
`"material"` и т.п. между `KnowledgeCategory` и `FeatureType`, DS-6.4.1),
а 12 доменных типов-заготовок (`MaterialKnowledge`, ...,
`QualityKnowledge`) стали алиасами соответствующих `<Domain>Feature` —
устраняя дублирование, отмеченное ревизией DS-6.4.1. Это единственная
связь через границу `core/`, и она остаётся строго внутри
`knowledge/**`: `core/` по-прежнему не реэкспортируется из `../index.ts`
напрямую, и ничто за пределами `knowledge/**` не импортирует
`knowledge/core/**` — ни прямо, ни транзитивно.

## 11. Статус на DS-6.4 / DS-6.4.1 / DS-6.4.2

DS-6.4: создана структура `knowledge/` с типами, заполненными
`StyleKnowledge` для всех 20 каталожных стилей и пустыми заготовками для
остальных 12 доменов.

DS-6.4.1: добавлен изолированный `core/` (Knowledge Entity & Feature
Foundation) — только типы, ничем не используемые.

DS-6.4.2: унифицированы имена доменов (`FeatureType`/`KnowledgeCategory`
— единый источник), `KnowledgeEntity.type` строго типизирован
(`KnowledgeEntityKind`), задекларирована Migration Strategy (без
выполнения миграции), устранена дублирующая пара
`<Domain>Knowledge`/`<Domain>Feature`, задокументированы оба механизма
связей (`KnowledgeRelation`/`KnowledgeGraph` для сложных связей,
`relatedFeatures` для быстрого lookup), проведена ревизия
масштабируемости и достаточности `KnowledgeGraph` — интерфейсы не
расширялись сверх необходимого. Подробности — `core/README.md`.

Knowledge Base (включая `core/`) нигде не используется — ни в
production, ни в Prompt Domain, ни в Prompt Engine, ни в Rule Engine.
Следующий этап после DS-6.4.2 — **DS-6.5 Universal Interior Rules**
(выполнен; см. `docs/ARCHITECTURE.md`).

## 12. Spatial Knowledge (`spaces/`, DS-7.3)

`spaces/` — тринадцатый Knowledge-домен, добавленный после DS-6.4:
канонические записи общих архитектурных знаний об **уже существующих**
`SpaceTypeId` (`src/lib/interior/space-type/**`, DS-7.2) — Living Room,
Bedroom, Kitchen, Hospital Ward, Airport Terminal и т.д. В отличие от
остальных 12 доменов, этот **не** пустая заготовка — на DS-7.3 сразу
заполнен 51 записью (по одной на каждый канонический `SpaceTypeId`).

Важное отличие от уже существующего `space/` (единственное число, §6):
`space/` хранит абстрактные, стилевые layout/flow/zoning-концепции;
`spaces/` (множественное число, новый домен) хранит конкретные профили
знаний по каждому каноническому типу помещения. Оба домена переиспользуют
один и тот же литерал `FeatureType`, `"space"` — новый литерал для этого
этапа не вводился (Principle 19/22, Reuse). Полное обоснование,
разграничение и Boundary Protection (`SpaceType` / Knowledge / Prompt
Engine — три разных вопроса) — `spaces/README.md`.

`spaces/registry.ts` не импортирует `space-type/**` ни в каком виде
(даже type-only) — `id` каждой записи лишь **соответствует по конвенции**
значению `SpaceTypeId`, задокументированной в `spaces/README.md` §5.
Направление зависимости остаётся тем же, что требует
`docs/AI_CORE_CHECKLIST.md` для Space Type: Knowledge не импортируется
из Space Type, и Space Type не импортируется в Knowledge.

Knowledge Base по-прежнему нигде не используется production-кодом —
`spaces/**` не подключён ни к Prompt Domain, ни к Prompt Engine, ни к
Rule Engine, ни к Style Registry, ни к производству. Подробности —
`spaces/README.md` §10 "Status".
