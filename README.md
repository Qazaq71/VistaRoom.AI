# SpaceAI — ИИ-дизайн интерьеров

Production-ready Next.js приложение с безопасным бэкендом, rate limiting и Replicate API.

## Структура проекта

```
spaceai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate/route.ts   ← POST: принимает фото, запускает Replicate
│   │   │   └── poll/route.ts       ← GET: проверяет статус генерации
│   │   ├── globals.css             ← все стили
│   │   ├── layout.tsx
│   │   └── page.tsx                ← главная страница (React)
│   └── lib/
│       ├── rateLimit.ts            ← защита от спама (3 генерации/день/IP)
│       └── prompts.ts              ← промпты для Replicate по стилю и типу комнаты
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

### 2. Добавьте токен Replicate

Откройте `.env.local` и замените значение:

```
REPLICATE_API_TOKEN=r8_ВАШ_ТОКЕН_ЗДЕСЬ
```

Получить токен: https://replicate.com/account/api-tokens (регистрация бесплатная)

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
   - `REPLICATE_API_TOKEN` = ваш токен
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
Браузер  →  POST /api/generate  →  Сервер (токен скрыт)  →  Replicate API
         ←  { predictionId }   ←                         ←  { id, status }

Браузер  →  GET /api/poll?id=xxx  →  Сервер  →  Replicate API
         ←  { status, outputUrl } ←          ←  { status, output }
```

Токен НИКОГДА не покидает сервер. В браузер идут только ID предикции и URL результата.

---

## Смена модели Replicate

В `src/app/api/generate/route.ts` измените `MODEL_VERSION`:

- SDXL img2img (текущая): `7762fd07cf82c948538e41f63f77d685e02b063e37e496241f10aa99441669b8`
- FLUX Kontext (лучше держит структуру): ищите на replicate.com/black-forest-labs

---

## Добавить Stripe (оплата)

1. Создайте продукты на https://stripe.com/products
2. Добавьте `STRIPE_SECRET_KEY` в `.env.local`
3. Создайте `src/app/api/checkout/route.ts` с Stripe Checkout Session
4. Добавьте проверку подписки в `generate/route.ts`

---

## Переменные окружения

| Переменная | Описание | Обязательная |
|---|---|---|
| `REPLICATE_API_TOKEN` | Токен с replicate.com | ✅ |
| `DAILY_LIMIT` | Лимит генераций в день/IP | нет (default: 3) |

---

## Стоимость

| Сервис | Стоимость |
|---|---|
| Vercel (хостинг) | Бесплатно (Hobby plan) |
| Replicate API | ~$0.01–0.04 за генерацию |
| Домен | ~$10/год (namecheap.com) |

При 100 генерациях в месяц: ~$1–4 расходов на API.
При 10 платящих клиентах по $19: $190 дохода.
