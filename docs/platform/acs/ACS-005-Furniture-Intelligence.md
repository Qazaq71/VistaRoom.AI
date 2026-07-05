# ACS-005 — Furniture Intelligence

**Статус:** AI Capability (Domain Intelligence, сервисный модуль)
**Соответствует:** Living Strategic Roadmap v1.3, Level 3 — Domain Intelligence → Furniture Intelligence
**Обслуживает:** Prompt Intelligence (ACS-004) как поставщик решений; PCS-005 (Product Intelligence), PCS-007 (Design Planning) как потребители классификации
**Версия документа:** 1.0

---

## Purpose

Знания о типах мебели, размерах, совместимости — как зафиксировано в Roadmap v1.3. Развивается по продуктовой потребности: в первую очередь обслуживает Product Intelligence (PCS-005, для сопоставления с реальными товарами) и Design Planning (PCS-007, для расстановки с учётом размеров).

Это первый ACS для Domain Intelligence модуля в этой серии документов — он должен реализовать требование, зафиксированное в ACS-004: каждое решение обязано сопровождаться `sourceRule` для последующей прослеживаемости (PCS-008, Design Reasoning).

## Responsibilities

- Классифицировать объект мебели, обнаруженный Scene Intelligence на изображении (тип, приблизительные размеры) — для сценариев частичной замены (PCS-002) и для сопоставления с товарами (PCS-005).
- На основании выбранного стиля (решение Style Intelligence) и свободного пространства (от Scene Intelligence) — предлагать подходящие типы и приблизительные размеры мебели для генерации с нуля (PCS-001).
- При замене объекта (PCS-002) — предлагать совместимые альтернативы с учётом уже выбранного стиля.
- Проверять совместимость между предметами мебели (например, пропорции дивана и журнального столика) и явно фиксировать несовместимые сочетания как проблему, а не пропускать их молча.
- Каждое решение сопровождать ссылкой на исходное правило/знание (`sourceRule`), либо явно указывать `sourceRule: null`, если решение не выводится из формализованного правила — без исключений, аналогично требованию, зафиксированному в ACS-004.

## Non-responsibilities

Модуль **не отвечает** за:
- расстановку мебели в пространстве (позиционирование, проходы) — это Layout & Ergonomics Intelligence;
- материал и цвет мебели — это Material Intelligence и Color Intelligence соответственно; Furniture Intelligence оперирует только типом и размером;
- сопоставление с конкретным товаром в каталоге — это Product Intelligence (PCS-005), которая лишь потребляет классификацию, произведённую здесь;
- вызов Provider Layer, Prompt Intelligence или других Domain Intelligence модулей напрямую (см. запрещённые зависимости ниже).

## Inputs

| Поле | Обязательность | Описание |
|---|---|---|
| `sceneObject` | Обязательно для классификации существующего объекта | Дескриптор объекта от Scene Intelligence (ACS-002), для сценариев PCS-002. |
| `spaceType` | Обязательно для рекомендаций с нуля | Тип пространства (жилое/коммерческое, конкретный подтип). |
| `freeSpace` | Обязательно для рекомендаций с нуля | Свободное пространство от Structured Scene (ACS-002). |
| `styleDecision` | Обязательно | Решение Style Intelligence, полученное через AI Orchestration (ACS-003) — Furniture Intelligence не запрашивает его напрямую у Style Intelligence. |
| `sizeConstraint` | Опционально | Дополнительное ограничение по размеру для конкретного предмета, передаваемое AI Orchestration (ACS-003) при повторном вызове в рамках разрешения конфликта с Layout & Ergonomics Intelligence. |

## Outputs

| Поле | Описание |
|---|---|
| `furnitureClassification` | Для существующего объекта: тип, приблизительные размеры, `sourceRule`. |
| `furnitureRecommendation[]` | Для генерации с нуля или замены: список подходящих типов мебели с размерами, уникальным `itemId` и `sourceRule`. `itemId` обязателен — используется Layout & Ergonomics Intelligence для ссылки на конкретный предмет в `ergonomicIssue.causingItemId` (см. ACS-006). |
| `compatibilityIssue[]` | Список обнаруженных несовместимых сочетаний, если есть. |

## Dependencies

- **Восходящие:** Scene Intelligence (ACS-002) — для классификации существующих объектов; AI Orchestration (ACS-003) — единственный источник `styleDecision` и, при повторном вызове, `sizeConstraint` (не Style Intelligence или Layout Intelligence напрямую).
- **Нисходящие (потребители):** Prompt Intelligence (ACS-004) — получает решения как часть `domainDecisions`; Product Intelligence (PCS-005) — потребляет классификацию для сопоставления с товарами; Design Planning (PCS-007) — потребляет данные о размерах; Layout & Ergonomics Intelligence (ACS-006) — потребляет `itemId` и размеры как обязательный вход (см. ACS-006).

**Запрещённые зависимости:** Furniture Intelligence не имеет права вызывать Provider Layer, Prompt Intelligence или другие Domain Intelligence модули (Material, Color, Layout, Style) напрямую — взаимодействие между модулями Domain Intelligence идёт только через Context Composer (AI Orchestration, ACS-003), а не напрямую друг с другом. Это ограничение введено намеренно: прямые связи между Domain Intelligence модулями создали бы ту же проблему непрослеживаемых зависимостей, что уже была найдена в архитектурном аудите проекта (модули без чётких границ, не подключённые к остальной системе предсказуемым образом). **Повторный вызов с `sizeConstraint` инициируется исключительно AI Orchestration (см. `resolveFurnitureLayoutConflict` в ACS-003) — Layout & Ergonomics Intelligence не имеет права вызвать Furniture Intelligence напрямую даже в рамках этого механизма.**

## Consumers

Prompt Intelligence (ACS-004), Product Intelligence (PCS-005), Design Planning (PCS-007), Layout & Ergonomics Intelligence (ACS-006, через AI Orchestration).

## Public Contract

```
classifyFurniture(sceneObject: SceneObjectDescriptor) => {
  type: string,
  approxDimensions: Dimensions,
  sourceRule: string | null
}

recommendFurniture(
  spaceType: string,
  freeSpace: SpaceDescriptor,
  styleDecision: StyleDecision,
  sizeConstraint?: SizeConstraint  // передаётся AI Orchestration при повторном вызове
) => FurnitureRecommendation[]  // { itemId, type, approxDimensions, sourceRule }

findCompatibleAlternatives(
  existingType: string,
  styleDecision: StyleDecision
) => FurnitureRecommendation[]

checkCompatibility(items: FurnitureItem[]) => CompatibilityIssue[]
```

## Extension Points

- Расширение таксономии мебели новыми типами (по мере подключения новых Knowledge Packs — Hospitality, Retail, Workspace и др. из PCS-004) должно быть аддитивным, не ломающим уже классифицированные объекты в существующих проектах.
- **Известный риск, требующий явного предотвращения:** по данным архитектурного аудита проекта, данные о стилях ранее существовали в трёх несинхронизированных местах (production dict, Style Registry, Knowledge/styles). Это не значит, что то же самое уже произошло с данными о мебели — подтверждённых сведений об этом нет. Но это прецедент того же класса риска: таксономия мебели должна иметь единственный источник истины (соответствующий Knowledge Pack), и при реализации важно не допустить дублирования по тому же паттерну, а не полагаться на то, что риск не повторится сам по себе.

## Knowledge Packs

**Residential Furniture** и **Commercial Furniture** — согласно принципу Commercial Dimension из Roadmap v1.3 (каждый Domain Intelligence модуль развивается одновременно для Residential и Commercial). Единый источник истины для таксономии — открытый вопрос реализации: подпакеты внутри общих Residential/Commercial Knowledge Packs или отдельные независимые пакеты, специфичные для мебели. Решение не принято в этом документе.

## Tests

- **Контрактные тесты:** каждое решение сопровождается `sourceRule` (или явным `null`) — ни одно решение не может быть возвращено без этого поля.
- **Boundary-тесты:** Furniture Intelligence не вызывает Provider Layer, Prompt Intelligence, другие Domain Intelligence модули напрямую.
- **Тесты совместимости:** заданный набор заведомо несовместимых сочетаний мебели (например, слишком крупный диван для малой площади) корректно помечается как `compatibilityIssue`.
- **Регрессионные тесты на таксономию:** добавление нового типа мебели не переклассифицирует ранее корректно классифицированные объекты.
- **Тест `sizeConstraint`:** повторный вызов `recommendFurniture` с заданным ограничением возвращает предметы, удовлетворяющие ограничению, с сохранением прежнего `itemId` для неизменившихся позиций (чтобы Layout мог корректно сопоставить обновлённый список).

## Performance Expectations

**Не определено.** Аналогично открытому вопросу в ACS-004 (Rule Engine): классификация и рекомендации могут быть реализованы как детерминированный lookup по таксономии (минимальная стоимость, без AI-вызова) или как LLM-вызов для неоднозначных случаев классификации (дополнительная стоимость/задержка). Выбор не сделан в этом документе — это тот же класс решения, что и в ACS-004, и оба, вероятно, стоит принимать согласованно, а не независимо друг от друга.

## ADR References

Не заполнено — требует сверки с ADR_INDEX.md, аналогично предыдущим ACS.

---

**Проверка на достоверность:** факт о трёх несинхронизированных местах хранения данных о стилях — из архитектурного аудита проекта, предоставленного вами ранее; это не означает и не утверждает, что аналогичная проблема уже существует для данных о мебели — я явно разграничил "известный прецедент риска" от "подтверждённого факта о текущем состоянии кода". Выбор модели реализации (детерминированная логика vs LLM) оставлен открытым. Добавление `sizeConstraint` и `itemId` — прямое следствие решения, принятого в ACS-003 для разрешения конфликта Layout↔Furniture, а не независимое расширение контракта.

**Источники:**
1. Living Strategic Roadmap v1.3.
2. ACS-001 – ACS-004, ACS-003 (обновление с решением о разрешении конфликта) и PCS-001–010, составленные ранее в этом диалоге.
3. Скриншот архитектурного аудита проекта (факт о трёх несинхронизированных источниках данных о стилях), предоставленный вами в начале этого диалога.

Внешние источники не привлекались.
