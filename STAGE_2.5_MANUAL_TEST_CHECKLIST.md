# Stage 2.5 — ручной чек-лист реальной генерации

Выполнить после `next dev` с заполненным `.env.local` (`FAL_API_KEY`, `BLOB_READ_WRITE_TOKEN`).
Можно через UI (http://localhost:3000) или напрямую через `curl` — примеры ниже.

## 1. Redesign (без маски)

- В UI: режим "Стиль", загрузить фото, выбрать любой стиль → "Сгенерировать".
- Ожидается: `POST /api/generate` → `{ predictionId, statusUrl, status: "processing" }`,
  затем `/api/poll` циклически возвращает `processing`, в конце — `{ status: "succeeded", outputUrl }`.
- Проверить: `outputUrl` открывается, изображение соответствует запрошенному стилю,
  окна/двери/пропорции комнаты не изменились (см. `buildEditPrompt` negative-промпт).

## 2. Replace (с маской, mode=partial)

- В UI: режим "Частичное изменение", нарисовать маску на объекте, задать что заменить.
- Ожидается тот же flow, что и в п.1, но `operation: 'replace'`, `mask_url` присутствует в payload
  (проверяется логами `OpenAIImageProvider`: `generation_started` с `operation: "replace"`).
- Проверить: изменена только область под маской, остальное изображение не тронуто.

## 3. Erase (с маской, mode=clear)

- В UI: режим "Удалить объект", нарисовать маску на объекте, без текста.
- Проверить в логах: `promptUsed` в ответе `/api/generate` = `"(no prompt — erase mode)"`,
  но реально в Fal уходит `ERASE_FALLBACK_PROMPT` (не пустая строка — схема Fal требует prompt.length >= 2).
- Проверить: объект под маской убран и фон реалистично восстановлен.

## Для каждого сценария также проверить

- [ ] Fal не возвращает 4xx/422 (schema validation error) — если вернёт, ошибка будет
      залогирована как `generation_failed` с `responseBody` в серверных логах (Vercel/консоль),
      а клиент увидит только "Сервис генерации временно недоступен. Попробуйте позже."
- [ ] `quality: "medium"` присутствует в каждом payload (см. лог `generation_started`, поле `quality`).
- [ ] Итоговый ответ `/api/poll` — валидный JSON с `outputUrl`, без утечки Fal-URL с ключами или payload.
- [ ] Rate limit (`getRateLimit`) не блокирует тестовый IP (используйте `BYPASS_RATE_LIMIT=true` в `.env.local`).

## Пример curl (после получения predictionId/statusUrl из /api/generate)

```bash
curl "http://localhost:3000/api/poll?id=<predictionId>&statusUrl=<urlencoded statusUrl>"
```
