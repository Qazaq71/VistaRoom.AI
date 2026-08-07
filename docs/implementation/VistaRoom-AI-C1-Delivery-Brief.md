# VistaRoom AI — C1 Delivery Brief

## 1. Document Control

```text
Название: VistaRoom AI — C1 Delivery Brief
Статус: DRAFT — READY FOR INDEPENDENT REVIEW
Дата: 2026-08-07
Owner: Nurlan
Scope: C1 — первый коммерческий запуск (Lean Delivery Decision, раздел 4)
Целевой ориентир коммерческого запуска: октябрь 2026 года
Document allowance: 1 of maximum 3 pre-launch Markdown documents
Главный источник: VistaRoom-AI-Lean-Delivery-Decision-Accepted-RU.md
  (ПРИНЯТО 2026-08-07; SHA-256 633766FF…22EFAB1; commit c42b77c9…)
```

Документ не является принятым до отдельного решения Owner. Он ссылается на принятые источники и не копирует их содержание.

## 2. Цель и измеримый результат C1

Итог: платный продукт, в котором пользователь загружает 1–6 фото одной комнаты, получает проверенный анализ, дизайнерское решение с объяснением, редактирование по маске и сохранённую историю проекта — на русском и английском.

Проверяемые результаты C1 (Lean Delivery Decision §4, п.1–13):

1. Identities `Operation → RoomCase[1] → ImageAsset[1..6] → PerceptionResult` реализованы в схемах, БД и API; mixed-room input отклоняется.
2. Все 34 категории Residential-34 доступны в одном управляемом процессе; ни одна не скрыта и не заявлена частично.
3. VLM-анализ по Mechanism Class B (VLM + эвристическая валидация) формирует StructuredScene, проходящую boundary/hybrid validation; при ненадёжном выводе — честный insufficient-data результат.
4. Дизайнерская логика v1 (стиль, цвет, материалы, освещение) выдаёт решения с понятным объяснением важных выборов.
5. Генерация/редактирование сохраняет принятые границы помещения и геометрию; проверка — до показа пользователю.
6. Частичное редактирование по маске: замена, удаление, ограниченное изменение дизайна — меняется только маскированная область.
7. История итераций и сравнение результатов сохраняются в проекте.
8. Учётные записи, проекты, постоянное хранение RoomCase, ImageAsset и результатов.
9. RU/EN: один переключатель языка, EN fallback, без пустых/сломанных строк.
10. Автоматические проверки качества до показа результата (артефакты, нарушение геометрии, несоответствие запросу).
11. Billing, подходящий для выбранного рынка запуска; оплата управляет лимитами.
12. Auth, закрытое хранение, retention/deletion, consent, rate limiting, аудит и обработка инцидентов — достаточные для фотографий реальных клиентов.
13. Эксплуатация: structured logging, учёт стоимости, контроль состояния, восстановление, управляемое развёртывание.

Вне C1 (Lean Delivery Decision §5; не возвращать в первый запуск): whole-home reasoning; межсессионный multi-view и полная память проекта; 2.5D/3D и видео; полный B2B-процесс; маркетплейс и корзина; полный расчёт количеств/бюджета; расширенная эргономика и зонирование; полный Color & Material Intelligence; активное Controlled Learning; AR и прочие proposed/future.

## 3. Текущая точка (проверено по коду Cowork-копии, snapshot 2026-08-07)

Реально работает:

- Next.js 14 (`spaceai`): загрузка фото → sharp-сжатие → Vercel Blob → Fal.ai queue `openai/gpt-image-2/edit` (redesign/replace/erase); маски для partial/clear; `/api/poll` с allowlist `queue.fal.run`; `/api/proxy` с domain allowlist.
- Prompt pipeline ACS-004 подключён в `/api/generate` (`mapToDomainDecisions → buildPromptDraft → applyRules → format`); mask invariant check; contract-тесты (vitest) для ACS-001/ACS-004/StructuredScene.
- Существуют как код, но не в продуктовом пути: StructuredScene types, boundary-validator, hybrid-validation, каркас evaluation-harness, fixtures; registries стилей, space-types, knowledge. Это ядро для сохранения и развития.

Только в документации: perception/VLM и PerceptionResult; identities и БД; дизайнерская логика уровня Track C; auth; accounts/projects; billing; consent; retention/deletion; RU/EN localization framework; история итераций; quality gate перед показом; production observability.

Разрывы, закрываемые первыми (факты кода):

- Vercel Blob: `put(..., access: 'public')` — фото и маски доступны по публичным URL; TTL и удаления нет; результаты остаются на URL провайдера.
- Rate limiting fail-open: при отсутствии Upstash-конфига или ошибке Redis запрос пропускается; есть dev bypass.
- CI отсутствует; нет scripts `typecheck`/lint; staging/rollback не настроены.
- Логи через `console.*` без политики redaction; в логи `/api/poll` попадают сырые тексты ошибок провайдера.
- Auth, consent, аудит отсутствуют полностью.

## 4. Последовательность M0–M4

| Этап | Рабочий результат | Основные задачи | Проверяемое доказательство завершения | Owner gate |
|---|---|---|---|---|
| M0 (~2 нед) | Существующий продукт безопасен; инженерный фундамент | M0.0 — немедленная проверка и ограничение production exposure (первое действие); далее пакеты раздела 5: CI, закрытый Blob, retention/deletion, fail-closed rate limit, structured logging + redaction, secrets, staging, recovery, mocks/fixtures, схемы-ядро | M0.0 запускается первым; при обнаружении публичного exposure fail-closed containment подтверждается до любых production-facing операций и внешних передач; безопасные работы M0.1–M0.9 на mocks/fixtures могут продолжаться параллельно; зелёный обязательный CI; тесты приватности/TTL/лимитов; staging deploy и восстановление продемонстрированы | Нет (безопасные работы §6.1) |
| M1 (~3 нед) | Управляемый perception; измеренный VLM spike | Схемы/валидаторы PerceptionResult; `ImageAsset → SceneCandidate → StructuredScene` на mocks; provider gate §6.3; сравнительный spike только на лицензированных/одобренных синтетических материалах; метрики качества и стоимости | Пайплайн проходит fixtures, включая insufficient-data; отчёт spike с метриками/стоимостью; журнал внешних обращений | Выбор VLM/provider; provider terms |
| M2 (~3 нед) | Работающий сквозной AI-дизайнер | input → perception → StructuredScene → дизайн-логика v1 → результат → объяснение → mask edit → сохранённая история; auth + DB + persistence identities | Демонстрация сквозного сценария на staging; автоматический e2e-тест; история воспроизводима | Providers auth/DB/storage |
| M3 (~4 нед) | Полный кандидат коммерческого C1 | Все 13 результатов §2; RU/EN; billing; consent/retention/deletion UI+backend; quality gate до показа; evaluation по порогам; cost limits; observability | DoD C1 (§10) закрыт; отчёт evaluation; тесты consent/retention; тестовая оплата проходит | Billing provider; разрешение реальных фото клиентов |
| M4 (~1–2 нед) | Проверка готовности и решение о выпуске | Release Readiness Review (3-й документ); закрытие блокирующих дефектов; репетиция production deploy + rollback | Review завершён; входные условия M4 (§10) выполнены | Go/no-go; принятие остаточных рисков |

Параллельно с этапами: схемы/validators/fixtures (§6) — с M0; дизайн-логика v1 на mocks и RU/EN каркас — с M1; интеграция billing — с M2 после решения Owner.

## 5. M0 — первый инженерный пакет (порядок выполнения)

| # | Пакет | Точный результат | Затрагивает | Зависимости | Проверка готовности |
|---|---|---|---|---|---|
| 0 | M0.0 — Immediate production exposure check and containment | **Immediate containment (первое действие):** проверить внешний анонимный доступ к production `/api/generate` и UI; при обнаружении exposure — закрыть или отключить production generation fail-closed; прекратить создание новых постоянных публичных asset URL; запретить внешние передачи до готовности требуемых controls; сохранить минимальное проверяемое доказательство containment без payload, secrets и PII. **Controlled reopening ограниченного внешнего пути (только после пакетов 2 и 5 и прочих применимых controls):** secure/private storage; короткоживущий подписанный доступ к одному asset либо server-to-server передача; structured logging и redaction из пакета 5; запрет реальных клиентских фотографий; необходимые provider/data условия. До выполнения этих controls разработка продолжается на mocks и лицензированных/одобренных synthetic fixtures | production deployment, `/api/generate`, `/api/proxy`, конфигурация Vercel Blob | — (immediate containment); 2, 5 (controlled reopening) | **Immediate containment complete:** состояние production exposure проверено; анонимный production generation закрыт fail-closed при обнаружении доступа; новые постоянные публичные asset URL не создаются; внешние передачи заблокированы до готовности controls; есть безопасное доказательство ограничения без payload/secrets/PII. **Controlled reopening:** возможно только после подтверждения пакетов 2 и 5 и прочих применимых controls |
| 1 | CI | Workflow: `vitest run`, `tsc --noEmit`, `next build` на каждый push/PR; secrets в CI не используются | новый CI workflow; `package.json` (script `typecheck`) | — | Красный CI блокирует merge; прогоны видны |
| 2 | Закрытое хранение | Blob без `access: 'public'`; выдача изображений только через авторизованный серверный путь; результат провайдера копируется в собственное хранилище | `/api/generate`, `/api/poll`, `/api/proxy`, `next.config.js` | 1 | Тест: прямой URL без авторизации не открывается |
| 3 | Retention/deletion | TTL-конфигурация; гарантированное удаление source/mask/result по сроку и по запросу; журнал удалений | серверные routes, конфигурация | 2 | Автотест удаления; проверка фактического отсутствия файла |
| 4 | Rate limiting fail-closed | При недоступном Redis или отсутствии конфигурации запрос отклоняется (429/503); bypass невозможен в production | `src/lib/rateLimit.ts` | 1 | Unit-тесты fail-closed; production-конфиг без bypass |
| 5 | Structured logging + redaction | Единый JSON-логгер с кодами событий; запрет secrets, сырых ошибок провайдера и PII в логах | все routes; новый `src/lib/log.ts` | 1 | Тест redaction; отсутствие `console.*` в routes |
| 6 | Secrets | Инвентарь env; server-only доступ; secret-scanning в CI; описанная ротация | `.env.example`, CI | 1 | Скан чист; ключи не попадают в клиентский бандл |
| 7 | Staging + recovery | Отдельное staging-окружение; управляемый deploy; проверенный rollback/restore | deployment-конфигурация | 1–6 | Демонстрация deploy → сбой → rollback |
| 8 | Mocks/fixtures | Mock ImageProvider и mock VLM; fixtures по §6 для полностью офлайн локальной разработки | `src/providers`, тесты | 1 | Тесты проходят без внешних вызовов |
| 9 | Схемы-ядро | Zod/JSON-схемы identities (`Operation/RoomCase/ImageAsset/PerceptionResult`) и C1-ядра wire-полей Contract 10 с валидаторами | новые `src/schemas` | 8 | Conformance-тесты на fixtures |

M0.0 запускается первым и блокирует только небезопасный production/external path до подтверждённого fail-closed containment; он не блокирует CI, schemas, validators, mocks, fixtures и другую локальную/offline работу M0.1–M0.9, которая продолжается параллельно. Интеграция внешних передач в полноценный structured log (пакет 5) завершается до повторного открытия ограниченного внешнего пути, но не требуется для самого immediate containment.

Запрещено в M0 до решений Owner: вызовы внешних VLM-провайдеров; выбор постоянного auth/DB/storage/billing providers; обработка реальных клиентских фото; расширение схем и функциональности за пределы потребностей C1; открытие работ других модулей (Module-Completion-First сохраняется как правило фокуса).

## 6. Исполняемые артефакты вместо новых документов

| Источник | Исполняемый артефакт C1 |
|---|---|
| Contract 1 — Master Vocabulary Rev19 | TS/JSON registry Residential-34 + aliases + EN/RU labels со stable IDs; функция нормализации; snapshot-тесты |
| Contract 2 — Relations Rev10 | Registry 3 relation types + 9 endpoint predicates; валидатор relation records; fixtures из Annex M |
| Contract 3 — Applicability Matrix Rev1 | Applicability guard (правило + исключения) с failure codes; unit-тесты |
| Contract 9 — Fixture Subtype Registry Rev1 | 18 fixture subtypes → генерируемые negative-path тесты (counts 16/29 и 12/18); enum reason/retryability |
| Contract 10 — Conformance Rev1 | Zod/JSON Schema для C1-обязательных полей; runtime-валидатор; conformance-тесты; identity-alignment полей |
| ETAP Rev16 | Thresholds-конфигурация (81 metric ID, классы Blocking/Diagnostic/Zero-tolerance/Non-blocking; Open-строки помечены, значения не выдумываются); evaluation harness; Wilson 95% агрегация; per-category отчёт |
| Lean Decision §6.1 | Справочники стилей/помещений/материалов/цветов/освещения; измерение стоимости; структурированный журнал внешних обращений |

Для C1 реализуется необходимое подмножество контрактов с сохранением stable IDs (не все ~531 поля Contract 10 и не полный корпус ETAP сразу); расширение — последующими этапами. Открытые вопросы ETAP (Q1–Q4 и Open-пороги) решаются Owner отдельно по §17A — harness обязан помечать их, а не подменять значениями.

## 7. Критический путь и реалистичный график

Базовая (single-stream) длительность последовательной цепочки M0 → M1 → M2 → M3 → M4: 2 + 3 + 3 + 4 + (1–2) = **13–14 недель**. От 2026-08-07 до конца октября 2026 — около **12 недель**. При принятом ниже допущении «один поток разработки» базовая оценка на 1–2 недели длиннее доступного окна: **октябрь 2026 — цель высокого риска, без временного резерва**, а не подтверждённый срок. При неизменной длительности этапов наиболее реалистичная точка — конец октября только при подтверждённом календарном перекрытии работ; иначе — начало ноября.

Настоящие последовательные зависимости: закрытое хранение (M0.2) → любые реальные материалы; provider gate + spike → выбор VLM → perception на реальном провайдере (M2); выбор auth/DB → persistence M2; billing → M3; evaluation → M4. Параллельно выполнимо: схемы/registries/fixtures, дизайн-логика на mocks, RU/EN каркас, UI истории — это единственное перекрытие, уже учтённое в оценке 13–14 недель.

Допущение о команде: Claude Code — основной исполнитель, Owner — решения и приёмка; один поток разработки с параллелизацией только внутри этапов (см. выше), без дополнительной инженерной мощности.

Для сокращения до ~12 недель и реального достижения октября требуется одно или сочетание: реальная параллельная инженерная мощность сверх принятого допущения; фактически измеренное (не предполагаемое) сокращение M1/M2 по итогам M0; быстрые Owner-решения по provider gates без задержек на границах §8; отсутствие повторного VLM spike. Scope C1, безопасность, privacy и acceptance thresholds ETAP при этом не сокращаются и не ослабляются ради даты.

Дополнительные факторы, способные сорвать октябрь: недостаток лицензированных/синтетических материалов для spike и evaluation; качество VLM ниже порогов (повторный spike/провайдер); юридический объём billing для рынка; переработка UI под identities. Срок подтверждается только milestone-доказательствами на границах этапов. Приоритет — ранний работающий vertical slice (M2), а не полнота документации.

## 8. Решения Project Owner (Lean Delivery Decision §12)

| Решение | Когда требуется | Какие доказательства подготавливаются | Что продолжается до решения |
|---|---|---|---|
| Выбор VLM/provider | Конец M1, после измеренного spike | Отчёт spike: качество, стоимость, доступность, privacy, эксплуатация | M0; mocks; схемы; дизайн-логика |
| Providers auth/DB/storage | Начало M2 | Сравнение вариантов и условий обработки данных | Абстракции persistence; локальная разработка |
| Provider privacy/retention/deletion/cost terms | До первого внешнего вызова соответствующего провайдера | Условия провайдера; граница раскрытия; журнал | Все работы без внешних вызовов |
| Billing provider | Начало M3 | Варианты под рынок запуска | Всё вне billing |
| Разрешение фотографий реальных клиентов | До публичного использования (M3/M4) | Проверенные consent/privacy/retention/deletion/security | Работа на licensed/synthetic материалах |
| Принятие остаточных рисков; M4 go/no-go | M4 | Release Readiness Review | Подготовка релиза |
| Scope последующих модулей | После C1 | — | — |

## 9. Риски и stop conditions

- Раскрытие фото или credentials → M0.0 закрывает немедленный production-риск первым действием; пакеты M0.2/M0.5/M0.6 обязательны до любых реальных материалов; при инциденте — остановка на затронутой границе (Lean §13).
- Неуправляемое хранение → retention/deletion (M0.3) обязательны до приёма фото клиентов; без них — stop.
- Превышение стоимости → лимиты запросов/бюджета и алерты включаются до платного трафика; при пробое — автоматическое ограничение.
- Недостаточное качество perception → пороги ETAP; провал Blocking-метрик блокирует выпуск C1; честный insufficient-data вместо выдумывания.
- Нарушение геометрии/границ → автоматическая проверка до показа; непрошедший результат пользователю не показывается.
- Ложные заявления о возможностях → проверка продуктовых текстов на M4; существенно ложное заявление — stop выпуска.
- Отсутствие восстановления → M0.7 обязателен до production-развёртывания.
- Реальные данные без разрешения → запрещено; немедленный stop (Hard Security Stop).
- Нарушение held-out integrity / cherry-picking → sealing до раскрытия провайдеру; нарушение аннулирует evaluation и требует повторной оценки.

## 10. Definition of Done

- DoD M0: M0.0 immediate containment завершён (production exposure проверен; при обнаружении — ограничен fail-closed без выбора постоянного provider; новые постоянные публичные asset URL не создаются); CI зелёный и обязательный; ни один клиентский файл не доступен по постоянному публичному URL; TTL/удаление доказаны тестом; rate limit fail-closed; логи structured без secrets/PII; staging и rollback продемонстрированы; тесты проходят офлайн на mocks.
- DoD M2 (vertical slice): на staging сценарий «фото → validated StructuredScene → дизайн-решение с объяснением → результат → mask edit → сохранённая история» проходит вживую и покрыт e2e-тестом; insufficient-data путь продемонстрирован на fixture.
- DoD C1/M3: все 13 результатов §2 демонстрируемы; evaluation-отчёт без провала Blocking-порогов; consent/retention/deletion работают и протестированы; тестовая оплата проходит; cost limits и алерты активны; блокирующих дефектов нет.
- Вход M4: DoD M3 закрыт; Release Readiness Review подготовлен; deploy и rollback отрепетированы; перечень остаточных рисков подготовлен для Owner.

## 11. Следующее действие

> После принятия Delivery Brief следующая работа — немедленный старт первого инженерного пакета M0 силами Claude Code. Новые промежуточные governance-документы не требуются.

Второй разрешённый документ — Data & Provider Governance Pack — создаётся только при фактическом старте provider/data gate (перед первым внешним вызовом в M1). Третий — Release Readiness Review — только перед M4.

Источники: Lean Delivery Decision (ПРИНЯТО 2026-08-07); Project Context v2.4; Living Strategic Roadmap v1.4; VistaRoom-AI-Full-Platform-Vision-Architecture-Rev5; VistaRoom-AI-Consolidated-Feature-Vision-Rev5; ETAP Rev16; MAP Rev19; Supporting Contracts 1–3, 9, 10 (C1-релевантные положения); фактический код Cowork-копии.
