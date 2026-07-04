# Services

Слой интеграций и выполнения действий Developer Studio.

Services отвечают за практическое взаимодействие с внешним миром: файлами,
хранилищами, внешними API, логированием и расчётами — без принятия
"интеллектуальных" решений. Они выполняют то, что им поручают Engines или
страницы Developer Studio.

## Реализованные сервисы

- **BenchmarkService** (`src/app/developer/benchmark/services/BenchmarkService.ts`)
  — запуск бенчмарков поверх `GenerationEngine` и `INTERIOR_STYLE_REGISTRY`.
  Живёт внутри `benchmark/`, а не в этой папке, так как принадлежит
  конкретно модулю Benchmark, а не общему слою Developer Studio.

## Будущие сервисы

- **GenerationService** — взаимодействие с генерацией изображений
- **PromptService** — сохранение и чтение промптов
- **LogService** — запись и чтение логов
- **ImageService** — работа с изображениями
- **CostService** — учёт стоимости операций

Кроме `BenchmarkService`, остальные сервисы пока не реализованы — эта
папка (`src/app/developer/services`) остаётся архитектурной заготовкой
для будущих общих сервисов Developer Studio.
