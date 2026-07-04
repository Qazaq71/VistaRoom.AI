# Prompt Domain (DS-5)

## 1. Что это такое

`PromptContext` — центральная доменная модель (Domain Model) для всех
будущих AI-модулей VisataRoom AI. Она описывает "что должно быть
сгенерировано" в виде строго типизированных данных: комната, стиль,
материалы, мебель, освещение, декор, ограничения, негативные промпты и
метаданные.

Это **не** Prompt Engine, **не** Prompt Builder, **не** Prompt Formatter и
**не** Prompt Rules. Здесь нет функций, методов, классов и бизнес-логики —
только типы (`types.ts` и `contexts/*.ts`). Сборкой финального
текста/промпта для провайдера будет заниматься отдельный, ещё не
созданный, Prompt Engine (см. `docs/ARCHITECTURE.md`, Phase 6).

## 2. Почему он расположен в `src/lib/interior`

Prompt Domain описывает предметную область интерьерной генерации
(комнаты, стили, материалы, мебель, освещение, декор) — ровно то, чем уже
занимается `src/lib/interior/styles` (Style Registry, DS-4). Он логически
принадлежит той же папке `src/lib/interior`, а не общему `src/domain`, где
живёт провайдер-агностичный контракт запроса/ответа (`InteriorEditRequest`
/ `InteriorEditResult`). `src/domain/interior` — это Domain Core уровня
"API-контракт", `src/lib/interior/prompt-domain` — это доменная модель
уровня "из чего состоит промпт". Обе модели существуют параллельно и не
дублируют друг друга.

## 3. Почему `PromptContext` — центральная модель AI Core

Каждый будущий AI-модуль (Room Analyzer, Material Engine, Furniture
Planner, Lighting Engine, Color Harmony Engine, Object Detection,
Automatic Masks, Repair Estimator, Shopping Planner и т.д.) должен читать
и изменять один и тот же язык данных, а не изобретать собственный. Вместо
этого каждый модуль работает только со "своим" под-контекстом:

- Room Analyzer → `RoomContext`
- Material Engine → `MaterialContext`
- Furniture Planner → `FurnitureContext`
- Lighting Engine / Color Harmony Engine → `LightingContext` / `DecorContext`
- Object Detection / Automatic Masks → `RoomContext` (`existingFurniture`, `dimensions`)
- Repair Estimator / Shopping Planner → `ConstraintContext` (`budgetLevel`), `MaterialContext`, `FurnitureContext`

`PromptContext` — это единственная точка сборки всех этих под-контекстов
в одну структуру, которую позже будет читать Prompt Engine (Phase 6).

## 4. Почему Prompt Domain не зависит от React

Это чистые TypeScript-типы без рантайм-кода, хуков, компонентов или
side-эффектов. Он должен одинаково работать в серверном коде (API-роуты,
Prompt Engine, будущие AI-сервисы) и не должен требовать React в качестве
зависимости.

## 5. Почему Prompt Domain не зависит от Developer Studio

Developer Studio (`src/app/developer/**`) — это внутренний
инструмент для тестирования и бенчмарков, а не источник домена. Prompt
Domain должен одинаково описывать промпт независимо от того, вызван ли он
из публичного сайта, Developer Studio, Benchmark или будущего Prompt Lab.
Поэтому он не импортирует ничего из `src/app/developer` и не знает о его
существовании.

## 6. Существующий `InteriorStyle` переиспользуется, а не дублируется

`StyleContext` ссылается на `InteriorStyle` / `InteriorMyStyle` из
`src/lib/interior/styles/types` — тот же Style Registry, что и в DS-4. Он
не создаёт новый тип стиля и не копирует его поля.

## 7. Reference-модели вместо `string[]`

Материалы, мебель, освещение и декор хранятся не как `string[]`, а как
массивы `{ id, name, role? }` (`MaterialReference`, `FurnitureReference`,
`LightingReference`, `DecorReference`). Это оставляет место для будущих
Engine (Material Engine, Furniture Planner и т.д.), которым понадобится
больше чем просто имя — например, привязка к конкретному каталожному `id`
или роль объекта в сцене (`"accent"`, `"primary"` и т.п.), без изменения
формы данных.

## 8. Архитектурная схема

```
Style Registry             (src/lib/interior/styles)
  ↓
Prompt Domain               (src/lib/interior/prompt-domain) — этот этап (DS-5)
  ↓
Prompt Engine                (ещё не создан — Phase 6)
  ↓
Generation Engine
  ↓
ProviderFactory
  ↓
Provider
  ↓
Model
```

## 9. Статус на DS-5

`PromptContext` и все под-контексты созданы, но **нигде не используются**.
Ничего в публичном сайте, API, Benchmark, Generation Engine, Style
Registry, `prompts.ts` или `buildEditPrompt()` не изменено. Это
исключительно новая, изолированная доменная модель, готовая к
подключению в будущих этапах (Prompt Engine и далее).
