# Interior Style Registry (DS-4)

## 1. Что это такое

`INTERIOR_STYLE_REGISTRY` — единый типизированный список всех 20 интерьерных
стилей проекта (`src/lib/interior/styles/registry.ts`), с типами
(`types.ts`) и категориями (`categories.ts`).

## 2. Почему это Single Source of Truth

До этого этапа стили были определены раздельно и рассинхронизированно:

- `STYLE_DISPLAY` — `src/app/components/StylePicker.tsx` (label, emoji, preview, desc)
- `STYLE_DESCRIPTIONS` — `src/lib/prompts.ts` (промпт-фрагменты для генерации)
- `MOCK_STYLES` — `src/app/developer/benchmark/services/BenchmarkService.ts` (моки для Benchmark)

Каждый источник знал только часть правды о стиле и мог разойтись с
остальными (например, `MOCK_STYLES` содержит `"modern"`, которого нет ни в
`STYLE_DISPLAY`, ни в `STYLE_DESCRIPTIONS`). Registry объединяет данные в один
объект `InteriorStyle` на стиль — id, отображаемое имя, эмодзи, категория,
описание, prompt fragment, превью и (пока пустые) списки цветов/материалов/
мебели/освещения/декора/негативов/тегов, которые будущие модули (Prompt
Engine, Material Engine и т.д.) смогут заполнять и использовать не трогая
структуру.

## 3. Почему `my_style` хранится отдельно

`my_style` — это не дизайн-стиль, а отдельный режим генерации
("настройте интерьер самостоятельно": свои цвета стен/пола, материалы,
освещение). У него нет `promptFragment`, `category` и прочих полей,
осмысленных для стиля из каталога. Поэтому он описан отдельным типом
`InteriorMyStyle` и константой `MY_STYLE`, и намеренно НЕ входит в
`INTERIOR_STYLE_REGISTRY`. Код, который перебирает каталог стилей, не должен
случайно получить `my_style` как один из вариантов.

## 4. Почему Prompt Engine не должен хранить стили

Prompt Engine (появится позже) отвечает за сборку финального промпта:
комбинирование `promptFragment` стиля с деталями комнаты, режимом
генерации, негативными промптами и т.д. Если он будет хранить собственную
копию данных о стилях, они снова разойдутся с остальными источниками.
Вместо этого Prompt Engine должен получать `InteriorStyle` из registry по
`slug` и использовать его поля как входные данные.

## 5. Почему Generation Engine не должен хранить стили

Generation Engine отвечает за вызов провайдера генерации изображений
(модель, API, таймауты, ретраи) и ничего не должен знать о том, что такое
"стиль" по смыслу — для него это просто `styleId`/готовый промпт,
пришедший сверху. Хранение каталога стилей в Generation Engine нарушило бы
разделение ответственности и создало бы ещё один источник правды.

## 6. Как будущие модули будут использовать registry

```
UI
  ↓ (показывает стили пользователю)
Style Registry            (src/lib/interior/styles)
  ↓ (отдаёт InteriorStyle по slug)
Prompt Engine              (соберёт финальный prompt/negative из promptFragment + деталей)
  ↓
Generation Engine          (вызовет провайдера с готовым prompt, не зная про стили)
  ↓
Provider                   (Replicate/OpenAI/etc.)
```

UI (например, будущая версия `StylePicker`) читает `INTERIOR_STYLE_REGISTRY`
и `MY_STYLE` для отображения списка и категорий. Benchmark, Prompt Engine и
другие внутренние инструменты используют тот же массив вместо собственных
копий.

## Статус миграции (по состоянию на DS-4)

Старые структуры **не удалены и не изменены** — сайт и генерация продолжают
работать от них:

- `STYLE_DISPLAY` (`src/app/components/StylePicker.tsx`) — публичный UI,
  трогать в этом этапе нельзя. TODO для будущей миграции нужно будет
  добавить здесь при переписывании `StylePicker.tsx` (отдельный этап).
- `STYLE_DESCRIPTIONS` (`src/lib/prompts.ts`) — использует `buildEditPrompt`,
  напрямую участвующий в реальной генерации. TODO для будущей миграции нужно
  будет добавить здесь при создании Prompt Engine.
- `MOCK_STYLES` (`src/app/developer/benchmark/services/BenchmarkService.ts`) —
  заменён на `INTERIOR_STYLE_REGISTRY` внутри `BenchmarkService.getStyles()`
  и `BenchmarkService.generate()` (см. TODO-комментарий над `MOCK_STYLES` в
  этом файле). Сама константа `MOCK_STYLES` оставлена нетронутой на случай
  отката.

Registry — новый параллельный источник данных. Существующие модули на него
пока не переключены (кроме `BenchmarkService`, где это было безопасно).
