# ADR-005 Integration — Implementation Package v1.0

Основан исключительно на: ACS-004, ADR-005, ED-002 (Accepted), ED-003 (Accepted), Gate1-Prompt-Pipeline-TZ.md Revision 2, финальном ТЗ ADR-005 Integration. Новых архитектурных решений не содержит.

## 1. Scope

Входит:

- mapToDomainDecisions() (ED-003)
- Подключение buildPromptDraft() (Builder, Gate 1)
- Подключение applyRules() (Rule Engine, Gate 1, GATE1_DEFAULT_RULESET)
- Подключение format() (Formatter, ADR-005)
- Минимальная интеграция в production pipeline (route.ts)

Не входит:

- Prompt Engine, Prompt Reasoning, refinePromptDraft()
- Semantic conflict resolution (Material/Color/Layout priority)
- Decomposition structuredScene/projectDesignContext
- Любые изменения ACS-004, ADR-005, ED-002, ED-003, Gate1-TZ Revision 2
- Изменение публичных контрактов buildPromptDraft(), applyRules(), format()

## 2. Files to modify

### Modified

| Файл | Причина изменения |
|---|---|
| src/app/api/generate/route.ts | Замена buildEditPrompt() + buildColorPrefix() на вызов mapToDomainDecisions() → buildPromptDraft() → applyRules() → format() для построения promptUsed. negative, mode, operation, aspectRatio, guidanceScale остаются как есть (owner decisions 2, 3) |

### New

| Файл | Причина создания |
|---|---|
| src/lib/interior/prompt-engine/bridge/mapToDomainDecisions.ts | Реализация ED-003 — bridge-функция RoomDetails/room/style → DomainDecision[] |
| src/lib/interior/prompt-engine/bridge/mapToDomainDecisions.contract.test.ts | Contract tests согласно ТЗ п.6 |

### No changes

| Файл | Причина отсутствия изменений |
|---|---|
| src/lib/prompts.ts | buildEditPrompt(), hexToColorDescription(), buildMyStylePart() переиспользуются как есть внутри bridge, не модифицируются |
| src/lib/interior/prompt-engine/acs004-prompt-builder-rules/acs004-prompt-builder-rules.ts | Публичный контракт ACS-004, не меняется |
| src/lib/interior/prompt-engine/formatter/formatter.ts, formatter.types.ts | Публичный контракт ADR-005, не меняется |
| src/services/InteriorService.ts | Не участвует в построении prompt |
| src/providers/image/OpenAIImageProvider.ts | Принимает готовый prompt в InteriorEditRequest, откуда он взят — не его забота |

## 3. Target Pipeline

Current:

```text
route.ts
  → buildColorPrefix() + buildEditPrompt()
  → promptUsed
  → interiorService.submit()
  → OpenAIImageProvider.submit()
  → Fal.ai
```

Target:

```text
route.ts
  → mapToDomainDecisions(details, room, style)   [ED-003]
  → buildPromptDraft(structuredScene, projectDesignContext, domainDecisions)   [Builder]
  → applyRules(promptDraft, GATE1_DEFAULT_RULESET)   [Rule Engine]
  → format(promptDraft, providerTarget)   [Formatter, ADR-005]
  → promptUsed = result.promptString
  → interiorService.submit()
  → OpenAIImageProvider.submit()
  → Fal.ai
```

negative, mode, operation, aspectRatio, guidanceScale вне этой цепочки — собираются в route.ts как прежде.

## 4. Implementation Order

Step 1 — реализовать mapToDomainDecisions() согласно ED-003 и таблице маппинга из финального ТЗ. Независим от route.ts.

Step 2 — написать contract tests для mapToDomainDecisions() (раздел 8 ниже). Независим от Step 3–4.

Step 3 — подключить в route.ts вызов mapToDomainDecisions() → buildPromptDraft() → applyRules() → format() для веток mode === 'style' и mode === 'partial'. Обработка StructuralValidationFailure (возврат из applyRules()) — как явная ветка, без throw.

Step 4 — проверить, что mode === 'clear' (erase) не затронут — там prompt: '' и новый pipeline не вызывается.

Step 5 — прогнать regression checklist (раздел 7).

Каждый шаг проверяем и коммитим отдельно.

## 5. Rules for Claude Code

НЕ менять ACS-004
НЕ менять ADR-005
НЕ менять публичные контракты buildPromptDraft(), applyRules(), format()
НЕ менять formatter.ts, formatter.types.ts
НЕ менять ED-002
НЕ менять ED-003
НЕ менять Gate1-Prompt-Pipeline-TZ.md Revision 2
НЕ реализовывать Prompt Engine
НЕ реализовывать Prompt Reasoning, refinePromptDraft()
НЕ реализовывать semantic conflict resolution (Material/Color/Layout)
НЕ трогать Track-1 типы (PromptDraft.ts, PromptBuilder, RuleEngine в src/lib/interior/prompt-engine/builder/, rules/) — это отдельная, не подключаемая в Gate 1 линия
НЕ добавлять negative в FormatterPromptDraft/FormatterResult
НЕ добавлять mode/operation/aspectRatio/guidanceScale в elements[]

## 6. Definition of Done

mapToDomainDecisions() реализован и вызывается из route.ts
buildPromptDraft() реально вызывается с результатом mapToDomainDecisions()
applyRules() реально вызывается с GATE1_DEFAULT_RULESET
format() реально вызывается, promptUsed строится из result.promptString
StructuralValidationFailure обрабатывается явно (не игнорируется, не падает в exception)
Все contract tests (раздел 8) проходят
Существующие тесты (formatter, acs004-prompt-builder-rules) проходят без изменений
Legacy-функциональность (erase, negative prompt, aspectRatio) не сломана

## 7. Regression Checklist

Генерация в режиме style (все стили из STYLE_DESCRIPTIONS)
Генерация в режиме partial (с маской)
Режим clear / erase (не затронут новым pipeline)
Режим my_style (кастомные HEX-цвета через hexToColorDescription)
negative prompt по-прежнему передаётся в editRequest (не потерян)
Пустые/отсутствующие поля RoomDetails (furniture, lighting и т.д.) не ломают сборку
Fallback для неизвестного roomKey/styleKey
aspectRatio, guidanceScale по-прежнему рассчитываются и передаются как раньше
Финальный запрос к провайдеру (OpenAIImageProvider.submit()) получает непустой prompt во всех сценариях кроме erase
promptUsed, возвращаемый клиенту (обрезка до 300 символов), не изменил формат ответа API

## 8. Required Tests

Contract tests:

Полный набор полей RoomDetails → корректный DomainDecision[] (mapToDomainDecisions)
Пустые/undefined поля не создают элемент
Массив → один DomainDecision на категорию, не N
sourceRule всегда null
Неизвестный styleKey/roomKey не вызывает исключение
Порядок элементов детерминирован

Integration tests:

route.ts (mode: style) → полная цепочка mapToDomainDecisions → buildPromptDraft → applyRules → format возвращает непустой promptString
route.ts (mode: partial) — то же самое
StructuralValidationFailure корректно обрабатывается без падения запроса

Regression tests:

Существующие сценарии генерации (все пункты раздела 7) дают результат, эквивалентный по смыслу текущему (не обязательно побайтово идентичный текст prompt, так как формат сборки меняется)

Smoke tests:

POST /api/generate с валидным изображением и минимальным набором полей завершается без 500 ошибки

## 9. Deliverables

Изменённый route.ts
Новый mapToDomainDecisions.ts + mapToDomainDecisions.contract.test.ts
Отчёт о прохождении всех тестов (contract, integration, regression, smoke)
Список фактически изменённых файлов (git diff) для owner review

## 10. Final Acceptance Criteria (Project Owner Checklist)

- [ ] mapToDomainDecisions() реализован строго по ED-003, без отклонений
- [ ] Builder/Rule Engine/Formatter вызываются в production pipeline впервые
- [ ] Ни один публичный контракт ACS-004/ADR-005 не изменён (проверяется diff'ом)
- [ ] ED-002, ED-003, Gate1-TZ Revision 2 не изменены
- [ ] Track-1 типы не изменены (git diff + SHA-256, по прецеденту ADR-005 Formatter Foundation)
- [ ] Все regression-сценарии (раздел 7) пройдены вручную или тестами
- [ ] negative prompt не потерян и не перемещён в Formatter
- [ ] mode/operation/aspectRatio/guidanceScale не появились в elements[]
- [ ] Prompt Engine / refinePromptDraft() не реализованы
