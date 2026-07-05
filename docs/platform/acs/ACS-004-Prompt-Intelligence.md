# ACS-004 — Prompt Intelligence

**Статус:** AI Capability (сервисный модуль)
**Соответствует:** Living Strategic Roadmap v1.3, Level 3 — Prompt Intelligence
**Обслуживает:** Generation Intelligence (ACS-001) как основной потребитель; PCS-008 (Design Reasoning) как зависимый потребитель
**Версия документа:** 1.0

---

## Purpose

Превращать структурированный контекст (сцена, проектный контекст, решения Domain Intelligence) в финальный Prompt String для Generation Intelligence. Состоит из четырёх компонентов по Roadmap v1.3: Prompt Builder, Formatter, Rule Engine, Prompt Reasoning.

**Значимое замечание:** по данным более раннего архитектурного аудита проекта, именно Formatter — компонент, превращающий структурированные данные в промпт-строку — не был реализован, несмотря на то, что назывался "следующим этапом" 7+ раз подряд в предыдущей архитектуре (AI Core до перехода на Roadmap v1.x). Этот документ фиксирует формальный контракт именно для того, чтобы этот компонент имел чёткие границы и мог быть реализован и проверен, а не оставался неопределённо откладываемым.

## Responsibilities

- **Prompt Builder:** собирать PromptDraft из решений Domain Intelligence (Style/Material/Color/Layout — модули, для которых ACS ещё не составлены) и Structured Scene.
- **Rule Engine:** применять жёсткие и мягкие правила, разрешать конфликты между решениями разных Domain Intelligence модулей (например, если Style Intelligence и Material Intelligence предлагают противоречащие друг другу материалы).
- **Formatter:** конвертировать PromptDraft в финальный Prompt String, пригодный для конкретного провайдера генерации.
- **Prompt Reasoning:** решать, что усиливать, а что исключать из промпта, на основании Unified AI Context (терминология из более ранней версии обсуждения Roadmap).
- **Сохранять прослеживаемость решений** (decision trace) при форматировании — не терять информацию о том, какое правило/знание привело к каждому конкретному элементу промпта, даже когда финальный результат представляет собой плоскую строку для провайдера.

## Non-responsibilities

Модуль **не отвечает** за:
- содержание решений о стиле, материалах, цвете, расстановке — это Domain Intelligence (Prompt Intelligence только собирает и форматирует их результат, не принимает решений самостоятельно);
- вызов провайдера генерации — это Generation Intelligence (ACS-001);
- анализ фото и геометрию — это Scene Intelligence (ACS-002);
- формулирование текста объяснений для пользователя — это Design Reasoning (PCS-008), которая лишь **потребляет** decision trace, произведённый здесь, но формулирует объяснение самостоятельно.

## Ключевая архитектурная связь с PCS-008 (Design Reasoning)

Это явная фиксация зависимости, отмеченной как незакрытая в PCS-008: Design Reasoning не может работать, если Domain Intelligence и Prompt Intelligence не сохраняют причину каждого решения в прослеживаемом виде.

**Решение:** Formatter обязан возвращать не только `promptString`, но и параллельный `decisionTrace` — список записей вида `{element: "материал пола", value: "дуб", sourceRule: "Style_Japandi_Material_Rule_04"}`. Это не опциональная возможность, а обязательная часть контракта. Если для какого-то элемента промпта источник решения не передан от Domain Intelligence модуля, Formatter обязан пометить этот элемент как `sourceRule: null`, а не подставлять правдоподобное объяснение самостоятельно — это тот же принцип "явный отказ вместо домысленного результата", уже применённый в ACS-002 (`ErrorNotFound`) и зафиксированный как требование в PCS-008.

## Inputs

| Поле | Обязательность | Описание |
|---|---|---|
| `structuredScene` | Обязательно | От Scene Intelligence (ACS-002). |
| `projectDesignContext` | Обязательно | От AI Orchestration (ACS-003). |
| `domainDecisions` | Обязательно | Массив решений от Domain Intelligence модулей, каждое — со ссылкой на исходное правило/знание (`sourceRule`). |
| `providerTarget` | Обязательно | Для какого провайдера форматируется промпт (сейчас — `gpt-image-2/edit`; контракт должен допускать замену без изменения остального пайплайна). |

## Outputs

| Поле | Описание |
|---|---|
| `promptString` | Финальная строка, передаваемая в Generation Intelligence (ACS-001) как часть параметра `promptString` его контракта. |
| `decisionTrace` | Массив записей с прослеживаемостью каждого элемента промпта до источника решения — обязателен для PCS-008. |

## Dependencies

- **Восходящие:** Scene Intelligence (ACS-002), AI Orchestration (ACS-003, источник Project Design Context и порядка вызова), Domain Intelligence модули (Style/Material/Color/Layout Intelligence — ACS-005–009).
- **Нисходящие (потребители):** Generation Intelligence (ACS-001) — потребитель `promptString`; Design Reasoning (PCS-008) — потребитель `decisionTrace`; **Quality Intelligence (ACS-010) — потребитель, инициирующий построение уточнённого промпта при обнаружении расхождения (см. `refinePromptDraft` в Public Contract ниже).**

**Решение зафиксировано (ранее было открытым, отмеченным в ACS-010):** Quality Intelligence имеет право вызывать Prompt Intelligence для получения уточнённого `promptString` после обнаружения расхождения в сгенерированном изображении. Это не нарушает направление зависимости "Domain → Prompt", так как Quality Intelligence не является Domain Intelligence модулем — она находится на одном уровне с Prompt Intelligence и Generation Intelligence (Level 3, сервисные модули), и её право обращаться к обоим уже установлено в ACS-001 (Consumers) для Generation Intelligence.

**Запрещённые зависимости:** Prompt Intelligence не имеет права вызывать Provider Layer напрямую, минуя Generation Intelligence (тот же принцип, что уже зафиксирован для AI Orchestration в ACS-003). Не имеет права самостоятельно обращаться к Domain Intelligence модулям за решениями — получает их только через AI Orchestration, сохраняя однонаправленный поток данных (согласуется с ранее сформулированным правилом границ: Domain-модули не импортируют Prompt Engine, то есть направление зависимости идёт от Domain к Prompt, а не наоборот).

## Consumers

Generation Intelligence (ACS-001) — прямой потребитель `promptString`; Design Reasoning (PCS-008) — потребитель `decisionTrace`, активация которой отложена до появления ACS Domain Intelligence модулей (зафиксировано в PCS-008); **Quality Intelligence (ACS-010) — потребитель `refinePromptDraft` при доработке результата.**

## Public Contract

```
buildPromptDraft(
  structuredScene: StructuredScene,
  projectDesignContext: ProjectDesignContext,
  domainDecisions: DomainDecision[]  // { element, value, sourceRule }
) => PromptDraft

applyRules(
  promptDraft: PromptDraft,
  ruleSet: RuleSet
) => PromptDraft  // конфликты разрешены, жёсткие/мягкие правила применены

format(
  promptDraft: PromptDraft,
  providerTarget: string
) => {
  promptString: string,
  decisionTrace: DecisionRecord[]  // sourceRule: string | null
}

refinePromptDraft(
  previousPromptDraft: PromptDraft,
  refinementInstruction: RefinementInstruction  // от Quality Intelligence, ACS-010
) => PromptDraft  // повторно проходит через applyRules() и format()
```

`refinePromptDraft` не является отдельным механизмом форматирования — она переиспользует уже существующие `applyRules` и `format`, добавляя инструкцию доработки как дополнительное ограничение к исходному `PromptDraft`, а не строя промпт заново с нуля.

## Extension Points

- Добавление нового провайдера (`providerTarget`) не должно менять контракт `format()` — расширяется только внутренняя логика форматирования под конкретный провайдер.
- **Открытый технический вопрос, требующий проверки:** по данным истории проекта, ранее используемая модель (`flux-pro/v1/canny`) не интерпретировала HEX-коды цвета напрямую — для этого был построен отдельный `hexToColorDescription` helper, конвертирующий HEX в описательные названия цветов. После перехода на `gpt-image-2/edit` актуальность этого ограничения **не подтверждена повторно** в рамках этого диалога — требует проверки перед тем, как решать, нужен ли аналогичный механизм в Formatter для текущего провайдера, или это ограничение относилось только к предыдущей модели.

## Knowledge Packs

Не использует Knowledge Packs напрямую — получает уже применённые решения от Domain Intelligence, которые сами обращаются к пакетам.

## Tests

- **Контрактные тесты:** `decisionTrace` присутствует для каждого элемента промпта; элементы без источника помечены `sourceRule: null`, а не заполнены произвольно.
- **Boundary-тесты:** Prompt Intelligence не вызывает Provider Layer напрямую и не обращается к Domain Intelligence модулям в обход AI Orchestration.
- **Тесты конфликтов правил:** Rule Engine детерминированно разрешает заданный набор тестовых конфликтов между решениями Domain Intelligence модулей.
- **Регрессионный тест на HEX-цвета** (при подтверждении актуальности ограничения, см. Extension Points выше): цветовые значения передаются в промпт как описательные названия, а не как необработанные HEX-коды, если провайдер их не интерпретирует.
- **Контрактный тест `refinePromptDraft`:** результат содержит инструкцию доработки как дополнительное ограничение поверх исходного `PromptDraft`, не теряя ранее принятые решения Domain Intelligence и их `sourceRule`.

## Performance Expectations

**Не определено.** Ключевой открытый вопрос: реализуется ли Rule Engine и Prompt Reasoning как детерминированная логика (без AI-вызова, минимальная стоимость и задержка) или как LLM-вызов (дополнительная стоимость/задержка сверх уже подтверждённых для Generation Intelligence). Выбор между этими двумя подходами не сделан ни в одном из документов этой серии и должен быть принят до фиксации Performance Budget этого модуля — в отличие от решения о параллелизме (ACS-003), это не было явно поручено данному документу, поэтому оставляю как открытый вопрос, а не принимаю решение самостоятельно.

## ADR References

Рекомендуется отдельный ADR, фиксирующий: (1) обязательность `decisionTrace` в контракте Formatter, (2) закрытие исторического пробела "Formatter не реализован" явной ссылкой на этот документ как источник контракта.

**Закрыто:** [ADR-005 — Formatter decisionTrace Contract](../../adr/ADR-005-Formatter-DecisionTrace-Contract.md) (Architecture Freeze Resolution R4) формализует оба пункта выше на основании контракта, уже описанного в этом документе.

---

**Проверка на достоверность:** факт о 7+ отложенных итерациях Formatter и о `hexToColorDescription` — из более ранней истории проекта (память о предыдущих сессиях и архитектурный аудит), не выдуман. Актуальность ограничения по HEX-цветам для текущей модели `gpt-image-2/edit` явно помечена как неподтверждённая повторно, а не перенесена как факт по умолчанию. Связь с Quality Intelligence (`refinePromptDraft`) была ранее зафиксирована как открытая (в ACS-010) и закрыта в этом обновлении с явным обоснованием — не переносится как готовый факт. Выбор между детерминированным Rule Engine и LLM-вызовом оставлен открытым, а не решён произвольно.

**Источники:**
1. Living Strategic Roadmap v1.3.
2. ACS-001, ACS-002, ACS-003, ACS-010 и PCS-001–010, составленные ранее в этом диалоге.
3. Скриншот архитектурного аудита проекта (факт о незавершённом Formatter, 7+ отложенных итераций), предоставленный вами в начале этого диалога.
4. Память о предыдущих сессиях работы над проектом (использование `hexToColorDescription` для `flux-pro/v1/canny`, недоступность прямой интерпретации HEX-кодов этой моделью).
5. Ваше указание в этом сообщении о необходимости закрыть открытые архитектурные вопросы.

Внешние источники не привлекались.
