# Historical Documentation Gaps

## Status

Informational record. Not an Engineering Decision, not an ADR. Does not 
require Proposed/Accepted lifecycle.

## Purpose

Настоящий документ фиксирует установленные факты о пробелах в исторической 
документации проекта, обнаруженные в ходе governance-проверок. Он не 
принимает инженерных или архитектурных решений и не заменяет отсутствующие 
документы — он лишь честно фиксирует их отсутствие для сохранения 
traceability.

---

## ED-003 (mapToDomainDecisions bridge component)

**Установленные факты (source review, 2026-07-08):**

- ED-003 цитируется как "Accepted" в `docs/implementation/ADR-005-Integration-TZ-final-for-Claude-Code.md` 
  и `docs/implementation/ADR-005-Integration-Implementation-Package-v1.0.md` — 
  как задание на реализацию `mapToDomainDecisions()` и как источник "owner 
  decision".
- Физический документ ED-003 (файл со Status/Purpose/Problem/Findings/
  Non-goals/Consequences) отсутствует в репозитории.
- Source review подтвердил: полный текст ED-003 не найден нигде в истории 
  git (`git log --all --full-history --diff-filter=A -- "*ED-003*"` — 0 
  результатов; `git log --all -p` не содержит блока с содержанием решения).
- Единственное упоминание "ED-003" вне цитирующих ссылок — иллюстративный 
  пример нумерации в `docs/engineering-decisions/README.md` (не описание 
  содержания).
- Реконструкция ED-003 сознательно не выполняется — попытка воссоздать 
  текст задним числом являлась бы домысливанием, а не восстановлением, и 
  прямо противоречила бы принципу "no silent assumptions" проекта.
- Существующие ссылки на "ED-003 (Accepted)" в документах ADR-005 Integration 
  сохраняются как есть — они фиксируют исторический факт принятия решения на 
  момент интеграции, а не гарантируют доступность его полного текста.

## Non-goals

- Не восстанавливает и не реконструирует ED-003.
- Не создаёт нового Engineering Decision взамен ED-003.
- Не изменяет существующие ссылки на ED-003 в документах ADR-005 Integration.
- Не переоткрывает ADR-005 Integration или его Implementation Package.
