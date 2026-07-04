# Knowledge Core (DS-6.4.1)

## 1. Что это такое

Knowledge Core — более общий, доменно-независимый уровень абстракции под
существующим `StyleKnowledge`/`KnowledgeReference` (DS-6.4). Это
фундамент, а не замена: ничего в `../styles/*.ts`,
`../registry/KnowledgeRegistry.ts` или в `../<domain>/registry.ts` не
изменено и не использует ничего из этой директории.

Только типы (`Entity.ts`, `Feature.ts`, `FeatureTypes.ts`,
`KnowledgeGraph.ts`, `Relation.ts`, `RelationType.ts`) — без единой
строки реализации, без методов, без валидации, без значений по
умолчанию.

## 2. Архитектурная схема

```
KnowledgeGraph                (./KnowledgeGraph.ts) — контракт, не реализован
  │
  ├─ entities:  KnowledgeEntity[]     (./Entity.ts)
  │
  ├─ features:  KnowledgeFeature[]    (./Feature.ts) — KnowledgeEntity + domain
  │       │
  │       ├─ MaterialFeature
  │       ├─ LightingFeature
  │       ├─ FurnitureFeature
  │       ├─ DecorFeature
  │       ├─ ColorFeature
  │       ├─ ArchitectureFeature
  │       ├─ CompositionFeature
  │       ├─ ConstraintFeature
  │       ├─ SpaceFeature
  │       ├─ MoodFeature
  │       ├─ QualityFeature
  │       └─ RenderingFeature
  │
  └─ relations: KnowledgeRelation[]   (./Relation.ts) — typed by RelationType
```

## 3. `KnowledgeEntity` — базовая сущность

`id`, `type`, `name`, `description?`, `tags?`, `metadata?`. Всё, что можно
идентифицировать, назвать и описать, независимо от домена.

## 4. `KnowledgeFeature` — специализация на один домен

`KnowledgeEntity` + `domain: FeatureType`, `weight?`, `aliases?`,
`relatedFeatures?`, `notes?`. `domain` — единственное поле, которое
строго типизирует принадлежность фиче к домену (`FeatureTypes.ts`).
`MaterialFeature`, `LightingFeature` и т.д. — это `KnowledgeFeature` с
`domain`, зафиксированным на конкретном литерале — чистое сужение типа,
без дополнительных полей и без реализации.

**Feature — будущий строительный блок промптов.** Идея, ради которой
существует Knowledge Core: стиль должен собираться не из
россыпи `KnowledgeReference` с вручную написанными `id`/`name`, а из
переиспользуемых, типизированных `KnowledgeFeature` — одних и тех же
"кирпичиков материала/света/декора/...", на которые может сослаться
любое количество стилей (и, в будущем, любых других дизайн-категорий —
не только интерьеров). На DS-6.4.1 это только фундамент: ни один стиль
ни на одну `KnowledgeFeature` пока не ссылается.

## 5. `KnowledgeRelation` / `RelationType` — связи между сущностями

`KnowledgeRelation`: `from`, `to` (id сущностей), `type: RelationType`,
`weight?`. `RelationType`: `requires | supports | conflicts | enhances |
optional | alternative | inherits`. Позволяет в будущем выразить, что
одна фича требует другую, конфликтует с ней, усиливает её и т.д. — без
единой строки логики, которая бы это интерпретировала.

## 6. `KnowledgeGraph` — контракт, не реализация

```ts
interface KnowledgeGraph {
  readonly entities: readonly KnowledgeEntity[];
  readonly features: readonly KnowledgeFeature[];
  readonly relations: readonly KnowledgeRelation[];
}
```

Ничего не создаёт, не хранит и не обходит граф — просто фиксирует форму
данных, которую сможет реализовать будущий этап.

## 7. Статус на DS-6.4.1

Изолированный, самодостаточный модуль. `../index.ts` (публичный экспорт
Knowledge Base) **не реэкспортирует** ничего из `./core` — увидеть эти
типы можно только явным импортом из `knowledge/core/*`. Ничего в
`styles/*.ts`, `KnowledgeRegistry.ts`, `<domain>/registry.ts`, Prompt
Domain, Prompt Engine, Rule Engine, Generation Engine, Provider,
Developer Studio, Benchmark, публичном сайте или API не импортирует
`knowledge/core/**`. См. также `../README.md` "Knowledge Core".
