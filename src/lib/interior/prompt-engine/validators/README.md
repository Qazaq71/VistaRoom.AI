# Validators

## Ответственность

Validators проверяют, что `PromptContext` достаточно корректен/полон,
чтобы продолжить движение по pipeline (например, перед Formatter или
перед отправкой в Generation Engine на более поздних этапах).

Контракт: `PromptValidator` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: результат проверки (без строковой логики)

## Чего Validators не делают

- Не изменяют `PromptContext` — только читают.
- Не строят строки промпта.
- Не знают про Generation Engine, Provider, API, React, Developer Studio.

## Статус

Foundation (DS-6.1): только контракт `PromptValidator` в `../types.ts`.
Конкретные проверки не реализованы.
