# Architecture / Development Orchestrator

## Назначение

Архитектурный пакет для нового внутреннего инструмента — **VistaRoom
Development Orchestrator** — который должен в перспективе автоматизировать
полный инженерный жизненный цикл AI-команды (архитектура → аудит →
исправления → разработка → review → тестирование → релиз → контролируемое
включение в основной проект). На текущем этапе покрыт только Architecture
Workflow; сам оркестратор не реализован — это документация, а не код.

## Что здесь хранится

### Текущие артефакты ревизии (Revision 4)

- [VistaRoom-Development-Orchestrator-Architecture.md](VistaRoom-Development-Orchestrator-Architecture.md) —
  основной архитектурный документ, **Revision 4** (см. §16A, §31A–C, §33A,
  §47A и канонический §23 State Registry с явным normativity statement;
  новый §23A Pre-Promotion Immutability Check guard; переработанный §24
  Artifact Model; синхронизированные диаграммы Mermaid — все теперь
  соответствуют каноническому порядку из §23. В Revision 4 обновлены §1,
  §19, §23, §23A (новый), §24, §29, §33, §51, §52 и заключительная строка
  документа, в ответ на `ORCH-REREV-001`–`003`).
- [Change-Set-Manifest.md](Change-Set-Manifest.md) — манифест изменений для
  Claude Code (созданные файлы, review-ветка, требуемые проверки,
  декомпозированная risk-модель). **Revision 4**: ведущая metadata
  исправлена с ошибочной "Revision 2" на корректную Revision 4
  (`ORCH-REREV-003`), добавлен `Revision History` (YAML, ревизии 1–4),
  Purpose переписан как кумулятивный, file counts пересчитаны заново (14
  файлов всего), Promotion Restrictions дополнены Pre-Promotion
  Immutability Check.
- [External-Review-Context-Package.md](External-Review-Context-Package.md) —
  компактный пакет для внешних проверяющих (ChatGPT, Grok). **Revision 4**:
  добавлен раздел §0A "Revision 4 Editorial Correction" — три новых
  замечания (`ORCH-REREV-001`–`003`), что изменилось и что нет.
- [README.md](README.md) — этот файл. **Revision 4**: обновлены
  Revision/Version, добавлены ссылки на два новых текущих отчёта, historical
  и current артефакты явно разделены (см. ниже).
- [Revision-Report-Revision-3-to-4.md](Revision-Report-Revision-3-to-4.md) —
  **новое (Revision 4)**: отдельный отчёт о переходе Revision 3 → Revision 4
  (редакционный цикл по `ORCH-REREV-001`–`003`), не заменяет и не
  переписывает исторические `Revision-Report.md` и
  `Revision-Report-Revision-2-to-3.md`.
- [Finding-Disposition-Report-Revision-3-to-4.md](Finding-Disposition-Report-Revision-3-to-4.md) —
  **новое (Revision 4)**: диспозиция каждого замечания
  `ORCH-REREV-001`–`003` (все ACCEPTED), не заменяет и не переписывает
  исторический `Finding-Disposition-Report.md` (тот относится только к
  `ORCH-REV-001`–`008`).

### Артефакты, проверенные в Revision 4 без содержательных изменений

- [Context-Manifest.md](Context-Manifest.md) — реестр источников, использованных
  при подготовке пакета, включая таблицу Source Use Mode (Revision 2) и
  раздел Project Context Authority (Revision 3). Проверено в Revision 4 —
  содержания, связанного с `ORCH-REREV-001`–`003`, не найдено, изменений не
  потребовалось.
- [Source-Gap-Report.md](Source-Gap-Report.md) — зафиксированные пробелы и
  конфликты источников (включая отсутствие `.git` в safe copy — G1, открыт;
  и историческую неоднозначность Project Context — G2, разрешена в
  Revision 3 прямым решением владельца, `OWNER-CORRECTION-PC-2.4`).
  Проверено в Revision 4 — G1 по-прежнему открыт, G2 по-прежнему разрешён,
  изменений не потребовалось.
- [ADR-Proposal-List.md](ADR-Proposal-List.md) — список предлагаемых ADR,
  разбитый на категории A/B/C (Revision 2). Проверено в Revision 3 и снова
  в Revision 4 — порядок promotion-последовательности в тексте уже совпадал
  с каноническим §23, изменений не потребовалось (добавлена подтверждающая
  заметка).
- [MVP-Implementation-Handoff.md](MVP-Implementation-Handoff.md) — пакет
  передачи для будущей реализации (Claude Code / инженер), Revision 2.
  Проверено в Revision 3 и снова в Revision 4 — Forbidden Operations уже
  соответствуют каноническому порядку §23, изменений по существу не
  потребовалось (добавлена подтверждающая заметка).
- [Change-Bundle-Specification.md](Change-Bundle-Specification.md) —
  отдельная спецификация Change Bundle и протокола переноса изменений
  (ORCH-REV-001, Revision 2). Проверено в Revision 3 и снова в Revision 4 —
  import pipeline уже соответствует каноническому порядку §23, изменений не
  потребовалось (добавлена подтверждающая заметка).

### Исторические артефакты ревизий (сохранены без изменений)

- [Revision-Report.md](Revision-Report.md) — отчёт о переходе Revision 1 →
  Revision 2 (13 разделов). **Сохранён без изменений в Revision 3 и
  Revision 4** как исторический документ.
- [Finding-Disposition-Report.md](Finding-Disposition-Report.md) —
  диспозиция каждого замечания ORCH-REV-001–008 (Revision 2). **Сохранён без
  изменений в Revision 3 и Revision 4** — относится только к прежнему циклу
  Engineering Review.
- [Revision-Report-Revision-2-to-3.md](Revision-Report-Revision-2-to-3.md) —
  отдельный отчёт о переходе Revision 2 → Revision 3 (baseline-коррекция
  `OWNER-CORRECTION-PC-2.4`). **Сохранён без изменений в Revision 4.**

## Что запрещено хранить здесь

- Код оркестратора — этот этап документационный.
- Реальные секреты, ключи, токены.
- Изменения `docs/project/`, `docs/roadmap/` или существующих ADR — этот
  инструмент может только предлагать новые ADR, см.
  [ADR-Proposal-List.md](ADR-Proposal-List.md).

## Статус

**Revision 4** (2026-08-01), Version 0.4.0. Draft — Proposed; Ready for
Engineering Re-Review. Пакет прошёл один цикл независимого Engineering
Review (вердикт `CHANGES_REQUIRED`, замечания ORCH-REV-001–008) и был
пересмотрен в Revision 2 в ответ на все восемь — см.
[Revision-Report.md](Revision-Report.md) и
[Finding-Disposition-Report.md](Finding-Disposition-Report.md) (оба
сохранены как исторические документы, не изменены в Revision 3 или
Revision 4).

Revision 3 — узкая, точечная baseline-коррекция, отдельная от цикла
ORCH-REV-001–008: владелец проекта напрямую подтвердил, что **Project
Context v2.4 является финальной, утверждённой и канонической** версией
Project Context, а **Project Context v2.3 — заменённая и историческая**
версия (`OWNER-CORRECTION-PC-2.4`). См.
[Revision-Report-Revision-2-to-3.md](Revision-Report-Revision-2-to-3.md).

Revision 4 — короткий, узкий редакционный цикл в ответ на Engineering
Re-Review вердикт `CHANGES_REQUIRED` против Revision 3, с тремя новыми
замечаниями: `ORCH-REREV-001` (несогласованность порядка workflow между
каноническим State Registry, §23, и рядом диаграмм Mermaid — исправлено;
все диаграммы теперь соответствуют §23 в точности; добавлен обязательный
guard `PRE_PROMOTION_IMMUTABILITY_CHECK`, §23A), `ORCH-REREV-002`
(Artifact Model, §24, всё ещё описывал текущий документ как "Revision 2" —
исправлено на Revision 4, historical/current артефакты явно разделены),
`ORCH-REREV-003` (ведущая metadata `Change-Set-Manifest.md` всё ещё
указывала "Revision 2", хотя тело файла уже содержало контент Revision 3 —
исправлено на Revision 4 повсеместно). Эта ревизия **не** переоткрывает
`ORCH-REV-001`–`008` (Revision 2, закрыты) и **не** переоткрывает
`OWNER-CORRECTION-PC-2.4` (Revision 3, Project Context v2.4 остаётся
final/approved/canonical). См.
[Revision-Report-Revision-3-to-4.md](Revision-Report-Revision-3-to-4.md) и
[Finding-Disposition-Report-Revision-3-to-4.md](Finding-Disposition-Report-Revision-3-to-4.md).

Статус пакета **не** `APPROVED`/`ACCEPTED`/`FINAL` — не проверено Claude
Project, не утверждено владельцем как architecture package (хотя сам
Project Context v2.4 корректно описан как Final/Approved/Canonical — это
два разных статуса, они не смешиваются). Ветка/base commit: по-прежнему не
определены (в safe copy отсутствует `.git`) — см.
[Source-Gap-Report.md](Source-Gap-Report.md).

**Gap G2 resolved by Project Owner (Revision 3, unaffected by Revision 4):**
Project Context v2.4 is final, approved, and canonical.

Gap G1 остаётся открытым (не затронут ни Revision 3, ни Revision 4).

## Связанные разделы

[../audits/](../audits/), [../milestones/](../milestones/),
[../../implementation/](../../implementation/), [../../adr/](../../adr/),
[../../governance/](../../governance/)
