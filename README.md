# VistaRoom AI — ИИ-дизайн интерьеров

Production-ready Next.js приложение с безопасным бэкендом, rate limiting и Fal.ai API.

## Структура проекта

```
VistaRoom AI/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate/route.ts   ← POST: принимает фото, запускает Fal.ai
│   │   │   ├── poll/route.ts       ← GET: проверяет статус генерации
│   │   │   └── proxy/route.ts      ← GET: проксирует изображения (CORS)
│   │   ├── globals.css             ← все стили
│   │   ├── layout.tsx
│   │   └── page.tsx                ← главная страница (React)
│   └── lib/
│       ├── rateLimit.ts            ← защита от спама (3 генерации/день/IP)
│       └── prompts.ts              ← промпты для Fal.ai по стилю и типу комнаты
├── .env.local                      ← ВАШ токен (не коммитить в git!)
├── .env.example                    ← шаблон для команды
├── next.config.js
├── package.json
└── tsconfig.json
```

## Быстрый старт (локально)

### 1. Установите зависимости

```bash
npm install
```

### 2. Добавьте переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните значения:

```
FAL_API_KEY=your_fal_api_key_here
BLOB_READ_WRITE_TOKEN=your_blob_token_here
```

- Fal.ai API key: https://fal.ai/dashboard/keys
- Vercel Blob token: https://vercel.com/docs/storage/vercel-blob

### 3. Запустите одной командой

```bash
npm run dev
```

Откройте http://localhost:3000 — готово!

---

## Деплой в интернет (Vercel) — бесплатно

Vercel — лучший хостинг для Next.js, имеет бесплатный план.

### Вариант A: через браузер (проще)

1. Загрузите папку проекта на GitHub
2. Зайдите на https://vercel.com → "Add New Project"
3. Выберите ваш репозиторий
4. В разделе "Environment Variables" добавьте:
   - `FAL_API_KEY` = ваш Fal.ai ключ
   - `BLOB_READ_WRITE_TOKEN` = ваш Vercel Blob токен
   - `DAILY_LIMIT` = `3`
5. Нажмите "Deploy" → через 2 минуты сайт в интернете

### Вариант B: через терминал

```bash
npm install -g vercel
vercel login
vercel --prod
```

Vercel сам спросит про переменные окружения при первом деплое.

---

## Как работает защита от спама

Файл `src/lib/rateLimit.ts` отслеживает IP-адреса в памяти (LRU-cache).
Каждый IP может сделать не более `DAILY_LIMIT` (по умолчанию 3) генераций в 24 часа.

При превышении лимита API возвращает `429 Too Many Requests` с понятным сообщением.

Изменить лимит:
```
DAILY_LIMIT=5   # в .env.local
```

---

## Архитектура безопасности

```
Браузер  →  POST /api/generate  →  Сервер (ключ скрыт)  →  Fal.ai API
         ←  { predictionId }   ←                        ←  { request_id, status_url }

Браузер  →  GET /api/poll?id=xxx  →  Сервер  →  Fal.ai API
         ←  { status, outputUrl } ←          ←  { status, images }
```

Ключ `FAL_API_KEY` НИКОГДА не покидает сервер. В браузер идут только ID запроса и URL результата.

---

## Переменные окружения

| Переменная | Описание | Обязательная |
|---|---|---|
| `FAL_API_KEY` | API-ключ с fal.ai/dashboard/keys | ✅ |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob токен для хранения изображений | ✅ |
| `DAILY_LIMIT` | Лимит генераций в день/IP | нет (default: 3) |

---

## Стоимость

| Сервис | Стоимость |
|---|---|
| Vercel (хостинг) | Бесплатно (Hobby plan) |
| Fal.ai API | ~$0.01–0.05 за генерацию |
| Vercel Blob | Бесплатно до 1 ГБ |
| Домен | ~$10/год (namecheap.com) |

При 100 генерациях в месяц: ~$1–5 расходов на API.
При 10 платящих клиентах по $19: $190 дохода.
