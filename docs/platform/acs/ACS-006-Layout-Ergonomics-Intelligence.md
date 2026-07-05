# ACS-006 — Layout & Ergonomics Intelligence

**Статус:** AI Capability (Domain Intelligence, сервисный модуль)
**Соответствует:** Living Strategic Roadmap v1.3, Level 3 — Domain Intelligence → Layout & Ergonomics Intelligence
**Обслуживает:** Prompt Intelligence (ACS-004) как поставщик решений; PCS-007 (Design Planning) как основной потребитель; PCS-004 (Commercial Design) для коммерческих норм
**Версия документа:** 1.0

---

## Purpose

Функциональное зонирование, расстановка мебели, эргономические нормы, проходы — согласно формулировке Capability 7 (Design Planning) и Domain Intelligence в Roadmap v1.3. Разделяется на две ветки, зафиксированные явно в Roadmap v1.3 как пример Commercial Dimension: **Residential Ergonomics** и **Commercial Regulations**.

Это модуль, на решениях которого прямо основан пример из PCS-008 (Design Reasoning): *"проход увеличен до 90 см согласно правилам Layout Intelligence"* — то есть его решения должны быть прослеживаемыми до конкретного правила с самого начала, а не добавляться постфактум.

## Responsibilities

- Определять функциональные зоны помещения (зона отдыха, рабочая зона, зона хранения и т.д.) на основе типа пространства и геометрии от Scene Intelligence.
- Проверять соответствие предложенной расстановки мебели минимальным нормам проходимости — для Residential (эргономика повседневного использования) и Commercial (нормативные требования, включая доступность для клиентов и персонала) по отдельным наборам правил.
- Определять точное расположение мебели в пределах свободного пространства с учётом размеров, полученных от Furniture Intelligence (ACS-005) — Layout решает **где**, Furniture Intelligence — **что и какого размера** (разделение ответственности, уже зафиксированное как non-responsibility в ACS-005).
- Фиксировать нарушения эргономических норм как явную проблему (`ergonomicIssue`), а не пропускать их или сглаживать.
- Каждое решение сопровождать `sourceRule` (или явным `null`), аналогично требованию из ACS-004 и ACS-005.

## Non-responsibilities

Модуль **не отвечает** за:
- тип и размер самой мебели — это Furniture Intelligence (ACS-005), Layout использует уже предложенные размеры, а не придумывает их;
- материал и цвет — Material Intelligence, Color Intelligence;
- выбор стиля — Style Intelligence; Layout в основном не зависит от стиля напрямую (зонирование определяется функцией и геометрией, а не эстетикой), за исключением редких случаев (например, open-space эстетика может влиять на степень зонирования) — это не детализировано в этом документе и требует уточнения при реализации, если оно окажется значимым;
- итоговую генерацию изображения — Generation Intelligence (ACS-001).

## Разрешение конфликта с Furniture Intelligence (решение принято в ACS-003)

Ранее здесь было зафиксировано как открытый вопрос: если предложенная Furniture Intelligence мебель не помещается с соблюдением минимальных проходов, кто инициирует повторный подбор.

**Решение принято в ACS-003 (AI Orchestration):** ограниченный цикл повторного согласования на уровне оркестрации, до вызова Prompt Intelligence. Layout & Ergonomics Intelligence по-прежнему **не имеет права** вызывать Furniture Intelligence напрямую — это ограничение не снято, оно остаётся в силе. Роль этого модуля в решении — **корректно формировать `ergonomicIssue` с обязательной ссылкой на конкретный предмет мебели** (`causingItemId`), чтобы AI Orchestration могла инициировать точный повторный запрос к Furniture Intelligence, а не пересчитывать всю рекомендацию заново.

## Inputs

| Поле | Обязательность | Описание |
|---|---|---|
| `structuredScene` | Обязательно | Геометрия и свободное пространство от Scene Intelligence (ACS-002). |
| `spaceType` | Обязательно | Тип пространства (Residential/Commercial и конкретный подтип). |
| `furnitureRecommendation[]` | Обязательно | Размеры и `itemId` мебели от Furniture Intelligence (ACS-005), полученные через AI Orchestration. |

## Outputs

| Поле | Описание |
|---|---|
| `functionalZones` | Список функциональных зон с границами. |
| `placementPlan` | Расположение конкретных предметов мебели в пределах пространства, с `sourceRule`. |
| `ergonomicIssue[]` | Список нарушений минимальных норм (проходы, доступность), **каждое с обязательным `causingItemId`**, ссылающимся на конкретный предмет из `furnitureRecommendation[]` — обязательное поле, необходимое AI Orchestration для точечного повторного запроса к Furniture Intelligence (см. ACS-003). |

## Dependencies

- **Восходящие:** Scene Intelligence (ACS-002) — геометрия; Furniture Intelligence (ACS-005) — размеры и `itemId` мебели, полученные через AI Orchestration (ACS-003), не напрямую.
- **Нисходящие (потребители):** Prompt Intelligence (ACS-004) — получает `placementPlan` как часть `domainDecisions`; Design Planning (PCS-007) — прямой потребитель как самостоятельной рекомендации; AI Orchestration (ACS-003) — потребитель `ergonomicIssue` для запуска цикла разрешения конфликта.

**Запрещённые зависимости:** Layout & Ergonomics Intelligence не имеет права вызывать Provider Layer, Prompt Intelligence или другие Domain Intelligence модули напрямую — включая Furniture Intelligence, даже в рамках механизма разрешения конфликта (см. выше — эту роль выполняет исключительно AI Orchestration).

## Consumers

Prompt Intelligence (ACS-004), Design Planning (PCS-007), Design Reasoning (PCS-008, через `sourceRule` в decision trace), AI Orchestration (ACS-003, потребитель `ergonomicIssue`).

## Public Contract

```
defineFunctionalZones(
  structuredScene: StructuredScene,
  spaceType: string
) => FunctionalZone[]

planPlacement(
  functionalZones: FunctionalZone[],
  furnitureRecommendation: FurnitureRecommendation[]  // включает itemId
) => {
  placementPlan: PlacementItem[],  // { itemType, position, sourceRule }
  ergonomicIssue: ErgonomicIssue[]  // { description, causingItemId, sourceRule }
}
```

## Extension Points

- Добавление новых коммерческих нормативов (Commercial Regulations) по мере расширения на новые типы пространств (PCS-004) — должно быть аддитивным.
- Расширение на более детальные сценарии использования пространства (упомянуто как Future Evolution в PCS-007) — не входит в первую реализацию.

## Knowledge Packs

**Residential Ergonomics** и **Commercial Regulations** — прямое соответствие Commercial Dimension принципу из Roadmap v1.3.

## Tests

- **Контрактные тесты:** каждое решение в `placementPlan` сопровождается `sourceRule` или явным `null`.
- **Boundary-тесты:** модуль не вызывает Furniture Intelligence, Prompt Intelligence, Provider Layer напрямую.
- **Тесты эргономических норм:** заданный набор тестовых сценариев с намеренно слишком узкими проходами корректно помечается как `ergonomicIssue` — отдельно для Residential и Commercial наборов правил.
- **Тест обязательности `causingItemId`:** каждый `ergonomicIssue` содержит ссылку на конкретный предмет мебели — запись без этого поля считается ошибкой контракта, так как без неё AI Orchestration не может выполнить точечный повторный запрос (см. ACS-003).

## Performance Expectations

**Не определено.** Аналогично ACS-004 и ACS-005 — выбор между детерминированным геометрическим расчётом (вероятно, наиболее реалистичный подход для проверки проходов — это скорее вычислительная, чем генеративная задача) и возможным LLM-вызовом для более сложных сценариев зонирования не сделан в этом документе.

## ADR References

Рекомендуется отдельный ADR, фиксирующий механизм разрешения конфликта Layout↔Furniture (принят в ACS-003) как значимое решение об управлении потоком между модулями, а не деталь одного документа.

---

**Проверка на достоверность:** пример "проход увеличен до 90 см согласно Layout Rules" — прямая цитата формулировки из Living Strategic Roadmap v1.3 (раздел Capability 8), не выдумана заново. Разделение Residential Ergonomics / Commercial Regulations — точная формулировка примера Commercial Dimension из той же Roadmap. Решение по итерации между Layout и Furniture Intelligence принято в ACS-003, а не в этом документе — здесь только отражена связанная с ним ответственность (формирование `causingItemId`).

**Источники:**
1. Living Strategic Roadmap v1.3.
2. ACS-001 – ACS-005, ACS-003 (обновление с решением о разрешении конфликта) и PCS-001–010, составленные ранее в этом диалоге.

Внешние источники не привлекались.
