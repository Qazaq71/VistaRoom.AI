# ТЗ ADR-005 Integration — финальная версия для Claude Code

Задача: реализовать mapToDomainDecisions() (ED-003) как минимальный bridge-слой между production pipeline и ACS-004/ADR-005 pipeline. Route.ts не менять — bridge реализуется как отдельный, пока не подключённый модуль.

Вход: RoomDetails (из prompts.ts), room: string, style: string.

Выход: DomainDecision[].

## Правила маппинга элементов

| element | value | sourceRule |
|---|---|---|
| room | ROOM_NAMES[roomKey] | null |
| style | STYLE_DESCRIPTIONS[styleKey] или buildMyStylePart() для my_style | null |
| furniture | details.furniture.join(...) | null |
| lighting | details.lighting.join(...) | null |
| appliances | details.appliances.join(...) | null |
| wallFinish | details.wallFinish.join(...) | null |
| tilezone | details.tilezone.join(...) | null |
| wallColor | hexToColorDescription(wallColorHex) | null |
| floorColor | hexToColorDescription(floorColorHex) | null |
| tileColor | hexToColorDescription(tileColorHex) | null |
| extraNotes | details.extraNotes | null |

Пустое/отсутствующее поле — элемент не создаётся.

Явно исключено из маппинга:

- negative
- mode
- operation
- aspectRatio
- guidanceScale
- structuredScene
- projectDesignContext

## Contract tests

- Полный набор полей RoomDetails → корректный DomainDecision[]
- Пустые/undefined поля не создают элемент
- Массив → один DomainDecision на категорию, не N
- sourceRule всегда null
- Неизвестный styleKey/roomKey не вызывает исключение fallback как в prompts.ts
- Порядок элементов детерминирован

## Ограничения

- Не менять ACS-004
- Не менять ADR-005
- Не менять ED-002
- Не менять Gate1-Prompt-Pipeline-TZ.md Revision 2
- Не менять route.ts
- Не реализовывать Prompt Engine / refinePromptDraft()
- Не добавлять semantic conflict resolution Material/Color/Layout
- Track-1 типы не трогать

## Что дальше не входит в эту задачу

Подключение mapToDomainDecisions() в route.ts — отдельное будущее решение, требующее отдельного одобрения.

## Источники

- ED-003 owner decision
- предыдущее ТЗ ADR-005 Integration
- owner decisions по open questions
- route.ts
- prompts.ts
- acs004-prompt-builder-rules.ts
