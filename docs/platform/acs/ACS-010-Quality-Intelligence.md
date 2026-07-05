# ACS-010 — Quality Intelligence

**Статус:** AI Capability (сервисный модуль)
**Соответствует:** Living Strategic Roadmap v1.3, Level 3 — Quality Intelligence
**Обслуживает:** проверяет результат Generation Intelligence (ACS-001) и при необходимости инициирует исправление через Generation Intelligence и Prompt Intelligence (ACS-004)
**Версия документа:** 2.0 (пересоздан с нуля по запросу)

---

## Purpose

Проверка сгенерированного результата и его доработка при обнаружении расхождений. Согласно Roadmap v1.3, состоит из: Critic Engine, Validation, Consistency Checks, Refinement Engine, Targeted Inpainting.

Модуль работает **после** того, как изображение уже сгенерировано — это принципиально отличает его от Domain Intelligence модулей и AI Orchestration, которые работают со структурированными данными до генерации.

## Разграничение с AI Orchestration (вопрос из ACS-006 — решение принято)

Зафиксировано ранее в ACS-006 и подтверждается здесь: конфликт между размерами мебели (Furniture Intelligence, ACS-005) и эргономическими нормами (Layout & Ergonomics Intelligence, ACS-006) обнаруживается **до** генерации изображения, на основе структурированных данных. Это по-прежнему не относится к Quality Intelligence. **Разрешение этого конфликта принято в ACS-003** (ограниченный цикл повторного согласования Furniture ↔ Layout на уровне оркестрации, до вызова Prompt Intelligence) — вопрос закрыт, разграничение ответственности подтверждено, а не остаётся открытым.

Quality Intelligence проверяет только то, что уже находится в сгенерированном изображении, сопоставляя его с решениями, которые были приняты заранее — это разграничение с AI Orchestration остаётся в силе независимо от того, что сам вопрос итерации Layout↔Furniture теперь решён в другом документе.

## Responsibilities

- **Critic Engine:** проверять сгенерированное изображение на сохранение геометрии из Structured Scene (окна, двери, пропорции) — прямое требование Success Criteria PCS-001 и PCS-002.
- **Validation:** проверять соответствие результата решениям, зафиксированным в `decisionTrace` (Prompt Intelligence, ACS-004) — например, соблюдён ли `ceilingColorDecision` (ACS-008).
- **Consistency Checks:** для проектов из нескольких помещений (PCS-003) — проверять визуальную согласованность уже сгенерированных изображений, дополняя (не заменяя) предварительное согласование через общий Project Design Context (ACS-003).
- **Refinement Engine:** инициировать повторную генерацию через Generation Intelligence с уточнённым промптом при обнаружении расхождения. Согласно контракту ACS-001, Quality Intelligence — единственный модуль, которому разрешено инициировать повторный вызов Generation Intelligence извне первоначального цикла.
- **Targeted Inpainting:** при точечном дефекте — запрашивать частичное исправление через Generation Intelligence в режиме `INPAINTING` (контракт ACS-001), используя `maskRegion` от Scene Intelligence (ACS-002).

## Non-responsibilities

Модуль **не отвечает** за:
- разрешение конфликтов между структурированными решениями Domain Intelligence модулей до генерации (AI Orchestration, ACS-003 — решение принято там, не здесь);
- принятие решений о стиле, материале, цвете, расстановке (Domain Intelligence модули);
- формирование исходного промпта (Prompt Intelligence, ACS-004) — Quality Intelligence запрашивает уточнённый промпт через `refinePromptDraft`, но не строит его сам;
- вызов Provider Layer напрямую, минуя Generation Intelligence.

## Связь с ACS-004 (Prompt Intelligence) — закрыта

Refinement Engine получает от Prompt Intelligence уточнённый `promptString` через метод `refinePromptDraft`. Это было зафиксировано как открытая правка в предыдущей версии этого документа — **правка внесена в ACS-004**: Quality Intelligence добавлен в раздел Consumers, а `refinePromptDraft` — в Public Contract ACS-004. Связь больше не является открытым вопросом.

## Inputs

| Поле | Обязательность | Описание |
|---|---|---|
| `generatedImage` | Обязательно | Результат Generation Intelligence (ACS-001). |
| `structuredScene` | Обязательно | От Scene Intelligence (ACS-002) — для проверки геометрии. |
| `decisionTrace` | Обязательно | От Prompt Intelligence (ACS-004) — для проверки соответствия принятым решениям. |
| `projectDesignContext` | Опционально | Для Consistency Checks в рамках проекта из нескольких помещений (PCS-003). |

## Outputs

| Поле | Описание |
|---|---|
| `critiqueReport` | Список обнаруженных расхождений. |
| `refinementInstruction` | Инструкция для Prompt Intelligence на построение уточнённого промпта, либо `null`. |
| `inpaintingRequest` | Запрос на точечное исправление через Generation Intelligence, если применимо. |

## Dependencies

- **Восходящие:** Generation Intelligence (ACS-001) — источник результата; Scene Intelligence (ACS-002); Prompt Intelligence (ACS-004) — источник `decisionTrace` и получатель запроса на уточнённый промпт.
- **Нисходящие:** отсутствуют — конечное звено проверки для одного цикла генерации.

**Запрещённые зависимости:** не вызывает Provider Layer напрямую, минуя Generation Intelligence; не вызывает Domain Intelligence модули напрямую — если расхождение указывает на проблему в исходном решении Domain Intelligence, а не только в его визуальном воплощении, это передаётся через AI Orchestration.

## Consumers

Прямых потребителей на уровне AI Capabilities нет — конечное звено для PCS-001/PCS-002. Косвенно влияет на PCS-003 через Consistency Checks.

## Public Contract

```
critique(
  generatedImage: ImageRef,
  structuredScene: StructuredScene,
  decisionTrace: DecisionRecord[]
) => CritiqueReport { issues: Issue[] }

checkProjectConsistency(
  generatedImages: ImageRef[],
  projectDesignContext: ProjectDesignContext
) => ConsistencyReport { issues: Issue[] }

requestRefinement(critiqueReport: CritiqueReport) => RefinementInstruction | null

requestTargetedInpainting(
  critiqueReport: CritiqueReport,
  maskRegion: RegionDescriptor
) => InpaintingRequest
```

## Extension Points

- Максимальное количество циклов Refinement должно быть настраиваемым параметром (согласно Engineering Rules, Roadmap v1.3). **Конкретное число не определено** — требует явного решения при реализации Gate 9 (Phase K).

## Knowledge Packs

Не использует Knowledge Packs напрямую — проверяет соответствие уже принятым решениям.

## Tests

- **Контрактные тесты:** `critique` обнаруживает заданный набор тестовых расхождений (искажённая геометрия, нарушенное решение по цвету потолка).
- **Boundary-тесты:** модуль не вызывает Provider Layer или Domain Intelligence модули напрямую.
- **Тесты ограничения циклов:** повторные вызовы не превышают заданный максимум.
- **Тесты Consistency Checks:** заданный набор тестовых проектов с намеренно несогласованными помещениями корректно помечается как проблема.

## Performance Expectations

**Не определено.** Каждый цикл доработки добавляет минимум один дополнительный вызов Generation Intelligence (≤ $0.061, ~60 сек, по данным ACS-001). Стоимость и задержка самого Critic Engine (вероятно, отдельный vision-вызов) — не измерялась в этом диалоге.

## ADR References

Рекомендуется ADR, фиксирующий максимальное число циклов Refinement и порядок эскалации при исчерпании лимита без устранения расхождения — не определено в этом документе.

---

**Проверка на достоверность:** оба вопроса, ранее зафиксированные как открытые в этом документе (разграничение с AI Orchestration по конфликту Layout↔Furniture и связь с ACS-004), закрыты по вашему явному указанию — решения внесены в соответствующие документы (ACS-003 и ACS-004), а не в этот, чтобы не создавать противоречий между версиями. Стоимость Critic Engine по-прежнему честно помечена как неизмеренная — эта неопределённость не была устранена, так как не относилась к двум закрываемым вопросам.

**Источники:**
1. Living Strategic Roadmap v1.3.
2. ACS-001 – ACS-009 и PCS-001–010, составленные ранее в этом диалоге.
3. ACS-003 (обновление с решением о разрешении конфликта Layout↔Furniture) и ACS-004 (обновление со связью Quality Intelligence → Prompt Intelligence), обновлённые в рамках этого запроса.
4. Ваше указание в этом сообщении о необходимости закрыть оба открытых архитектурных вопроса.

Внешние источники не привлекались.
