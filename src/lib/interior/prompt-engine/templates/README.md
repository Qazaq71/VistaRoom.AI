# Templates

## Ответственность

Templates описывают именованные, переиспользуемые формы трансформации
`PromptContext` — например, готовый набор правил для конкретного режима
генерации (`PromptGenerationMode`). Template — это композиция поведения
над `PromptContext`, а не текстовый шаблон строки.

Контракт: `PromptTemplate` (см. `../types.ts`).

- Получает: `PromptContext`
- Возвращает: `PromptContext`

## Чего Templates не делают

- Не строят строки промпта — строки появляются только в Formatter
  (`../formatter/README.md`).
- Не знают про Style Registry, Developer Studio, Generation Engine,
  Provider, API, React.

## Статус

Foundation (DS-6.1): только контракт `PromptTemplate` в `../types.ts`.
Конкретные шаблоны не реализованы.
