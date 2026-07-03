# Developer Studio

Внутренняя платформа разработки VistaRoom AI. Доступна только по маршруту
`/developer`, не является частью публичного сайта и не подключается к нему.
Служит каркасом, к которому со временем подключаются внутренние инструменты
(Benchmark, Prompt Lab, Style Lab и т.д.) без изменения самой основы.

## Структура папок

```
developer/
├── layout.tsx        route-layout /developer — metadata + DeveloperLayout
├── page.tsx           Dashboard — список разделов Developer Studio
├── developer.css       точка входа Tailwind, подключена только для /developer/*
├── benchmark/          страница модуля Benchmark
├── prompt-lab/         страница модуля Prompt Lab
├── style-lab/          страница модуля Style Lab
├── my-style-lab/        страница модуля My Style Lab
├── logs/                страница модуля Generation Logs
├── settings/            страница настроек Developer Studio
├── components/          переиспользуемые UI-компоненты
├── hooks/                React-хуки
├── lib/                  вспомогательная логика (навигация и т.п.)
├── types/                общие TypeScript-типы
├── constants/             общие константы
├── config/                конфигурация Developer Studio
├── services/              слой интеграций
├── engines/               слой интеллектуальной логики
├── assets/                внутренние визуальные материалы
└── utils/                 небольшие чистые хелперы
```

## Components

`src/app/developer/components` — переиспользуемые UI-блоки Developer Studio:
общий layout (`DeveloperLayout`), верхняя панель (`DeveloperTopBar`), боковая
навигация (`DeveloperSidebar`), а также универсальные элементы страниц
(`SectionHeader`, `DashboardCard`). Компоненты не содержат бизнес-логики —
только представление.

## Hooks

`src/app/developer/hooks` — React-хуки, инкапсулирующие клиентское
поведение (например, `useDeveloperNavigation` — определение активного
раздела на основе текущего пути). Хуки, использующие клиентские API
(`usePathname` и т.п.), помечаются `"use client"`.

## Navigation

`src/app/developer/lib/navigation.ts` — единственный источник правды о
разделах Developer Studio (Dashboard, Benchmark, Prompt Lab, Style Lab, My
Style Lab, Logs, Settings). Sidebar и Dashboard строятся из этого массива,
не дублируя список разделов.

## Types

`src/app/developer/types` — общие TypeScript-типы, используемые в
навигации и UI-компонентах Developer Studio.

## Constants

`src/app/developer/constants` — общие текстовые константы (название и
описание Developer Studio).

## Config

`src/app/developer/config` — конфигурация Developer Studio
(`developer.config.ts`): имя, версия, флаги окружения (например, `debug`).
Не содержит бизнес-логики — только статические настройки.

## Services

`src/app/developer/services` — слой интеграций и выполнения действий:
работа с файлами, API, логами, стоимостью, изображениями. Подробнее —
[services/README.md](./services/README.md).

## Engines

`src/app/developer/engines` — слой интеллектуальной логики: анализ,
подбор, принятие решений (PromptEngine, StyleEngine, RoomAnalyzer и т.д.).
Подробнее — [engines/README.md](./engines/README.md).

## Assets

`src/app/developer/assets` — внутренние визуальные материалы Developer
Studio (иконки, схемы, служебные изображения). Подробнее —
[assets/README.md](./assets/README.md).

## Будущие этапы

- Benchmark
- Prompt Lab
- Style Lab
- My Style Lab
- Generation Logs
- Room Analyzer
- Prompt Engine
- Style Engine
- Material Engine
- Furniture Planner
- Automatic Masks
