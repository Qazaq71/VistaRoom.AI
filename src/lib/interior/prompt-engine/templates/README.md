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
  Provider, API, React — Prompt Engine в целом AI-agnostic (`ADR-000`
  [Principle 14](../../../../../docs/adr/ADR-000-Architecture-Principles.md)).
- Не мутируют входной `PromptContext` — возвращают новый экземпляр
  (`ADR-000` Principle 15). Контракт `PromptTemplate.apply` принимает
  `Readonly<PromptContext>`.

## Статус

Foundation (DS-6.1): только контракт `PromptTemplate` в `../types.ts`.
Конкретные шаблоны не реализованы.
