# Rules

## Ответственность

Rules — набор небольших, композируемых шагов трансформации
`PromptContext`, применяемых между Builder и Formatter (нормализация,
ограничения, доменные корректировки). Каждое правило решает одну задачу
и не знает о других правилах.

Контракт: `PromptRule` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: `PromptContext`

## Чего Rules не делают

- Не строят строки промпта — это ответственность Formatter
  (`../formatter/README.md`).
- Не выполняют первичную сборку контекста — это ответственность Builder
  (`../builder/README.md`).
- Не знают про Style Registry, Developer Studio, Generation Engine,
  Provider, API, React.

## Статус

Foundation (DS-6.1): только контракт `PromptRule` в `../types.ts`.
Конкретные правила не реализованы.
