# VistaRoom AI — Living Strategic Roadmap v1.4 Decision Record

**Status:** Accepted
**Decision Type:** Strategic Roadmap Revision
**Decision Scope:** Living Strategic Roadmap v1.3 → v1.4
**Project Owner:** Nurlan
**Decision Date:** 2026-07-13
**Repository Status:** File creation and review authorized separately on 2026-07-13; staging, commit and push not authorized.
**Prepared by:** Claude (Chief Software Architect / Strategic Specification Partner)

---

## 1. Purpose

Зафиксировать основания, содержание и governance-условия предлагаемого перехода Living Strategic Roadmap с версии v1.3 на версию v1.4. Настоящий документ не заменяет и не переопределяет сам текст Roadmap v1.4 — он фиксирует решение о его принятии как отдельный governance-артефакт, в соответствии с выбранной Project Owner процедурой **Variant A**. Настоящий документ запрашивает Owner Decision **только по себе самому** — формальное принятие Roadmap v1.4 остаётся предметом отдельного, последующего Owner Decision (см. §18).

---

## 2. Current Baseline

- Living Strategic Roadmap — действующая версия **v1.3**, `docs/roadmap/Living-Strategic-Roadmap-v1.3.md`.
- Project Context — действующая версия **v2.2** (Active, Current Baseline), не версионирована в v2.3 после закрытия Gate 1 — зафиксированный non-blocking documentation synchronization drift.
- Gate 1 (Phase C — Integration Foundation) — **Closed** (Gate1-Closure-Review.md, Owner Decision 2026-07-09).
- Gate 2 (Phase D — Scene Intelligence, C8) — **Closed within the accepted representation-first boundary** (Final Gate 2 Scope Decision, Gate 2 C8 Implementation Package v1.0, Gate2-C8-Step6-Scope-Decision.md).
- Architecture Freeze (ADR-000–006) — не пересматривается настоящим решением.

---

## 3. Decision Trigger

```text
Завершение Gate 2 удовлетворяет условию 1 Living Roadmap Governance
(завершён Integration Gate) и одновременно создаёт объективные
основания для стратегического пересмотра, соответствующие
условию 6 (есть объективные основания изменить стратегию).

Остальные governance-условия — 2 (выбран профиль KPI), 3 (собраны
фактические данные) и 4 (выполнен Decision Review) — должны быть
подтверждены отдельно до формального принятия Roadmap v1.4. Условие 5
(создан Decision Record) выполняется настоящим документом при условии
его собственного Owner Acceptance.
```


---

## 4. Problem Statement

Living Strategic Roadmap v1.3:
- не отражает закрытие Gate 1 и Gate 2;
- может создавать ложное впечатление, что путь «фото → StructuredScene» уже operational, тогда как реализована только representation-часть;
- не содержит Project & Asset Foundation ни на одном уровне;
- не фиксирует долгосрочную амбицию категорийного лидерства и модель устойчивого конкурентного преимущества;
- не связывает инженерные фазы с продуктовой моделью зрелости и целевой моделью AI Interior Designer;
- не разделяет Identity/Persistence и Billing по разным стратегическим триггерам.

---

## 5. Primary-Source and Evidence Baseline

Проверены и использованы в разной степени полноты: Living Strategic Roadmap v1.3 (полностью, по пересекающимся фрагментам); Project Context v2.1 и v2.2 (полностью); Gate1-Closure-Review.md (полностью); Gate1-Prompt-Builder-Rule-Engine-Governance-Review.md (полностью); ACS-004 (значительная часть); Final Gate 2 Scope Decision (почти полностью); Gate 2 C8 Implementation Package v1.0 (частично); Gate2-C8-Step6-Scope-Decision.md (значительная часть); ADR-011 (частично); ADR-012 (в основном, без дословных Q10–Q11); ADR-013, ADR-014 (частично); ADR_INDEX.md (частично — таблица только по ADR-000–006); C8 Architecture Assessment и Gate2-Candidate-Assessment (частично).

---

## 6. Source Qualification and Limitations

```text
Gate2-C8-Closure-Review.md was unavailable through Project Knowledge
for fresh direct primary-source reading during this review cycle.
```

Дополнительно: ADR-011 получен не полностью; ADR-012 не получен полностью дословно (Q10–Q11 не прочитаны построчно); ADR-013 и ADR-014 были доступны частично; полный PCS-003 отдельно не читался; ADR_INDEX был доступен частично. Ни один вывод настоящего Decision Record не опирается на детали, доступные только в этих неполностью прочитанных документах.

---

## 7. Options Considered

**Alternative 1 — Keep Roadmap v1.3 unchanged.** Не отражает закрытие Gate 1/Gate 2, рискует создать ложное впечатление готового photo-perception, не отражает Project & Asset Foundation, не фиксирует стратегию лидерства и зрелостную модель. **Отклонено.**

**Alternative 2 — Minimal technical patch to v1.3.** Решает только статусы Gate 1/Gate 2 и representation-first оговорку; не раскрывает AI Interior Designer, не связывает инженерные треки с продуктовой стратегией, не вводит maturity ladder. **Отклонено как недостаточное.**

**Alternative 3 — Full Roadmap v1.4 revision.** Сохраняет Level 0–4 иерархию; добавляет Strategic Ambition, Sustainable Competitive Advantage, AI Interior Designer Capability Model, Product Maturity Ladder, Category Leadership Criteria; уточняет Current Strategic State; вводит Parallel Engineering Tracks A–H; сохраняет governance и non-authorization boundaries. **Рекомендуемый вариант.**

**Alternative 4 — Full immediate whole-home / Project Mode strategy.** Преждевременная сложность при отсутствии доказанного single-room intelligence и perception foundation; противоречит ранее установленному Owner-направлению против whole-home scope на данном этапе. **Отклонено.**

---

## 8. Decision Recommendation

Рекомендуется принять **Alternative 3 — Full Roadmap v1.4 revision**, заменяющую v1.3 после отдельного формального Owner Acceptance (Variant A, шаги 3–4).

---

## 9. Strategic Content of the Decision

**A. Product ambition.** VistaRoom AI развивается как full AI Interior Designer и потенциальный category-leading interior design platform; лидерство — долгосрочная цель, не текущий статус.

**B. Sustainable advantage.** Строится вокруг User Understanding, Spatial Understanding, Designer Reasoning, Planning and Ergonomics, Controlled Editing, Consistency, Project Memory, Implementation Support — не вокруг конкретной генеративной модели.

**C. Product lifecycle.** Центр продукта — управляемый design lifecycle (Understand User → Understand Space → Identify Constraints → Create Design Brief → Create Concepts → Plan Space → Make and Explain Decisions → Generate Visualization → Evaluate → Edit → Maintain Consistency → Recommend Products and Materials → Estimate Budget → Prepare Implementation), а не изолированный `generateImage()`.

**D. Maturity model.** Семиступенчатая продуктовая лестница (AI Visualizer → Spatially Aware Generator → Explainable AI Designer → AI Space Planner → Consistent Project Designer → Implementation Assistant → Professional Design Platform), не привязанная 1:1 к Engineering Gates.

**E. Post–Gate 2 strategy.** Восемь частично параллельных треков (Spatial Perception, Project & Asset Foundation, Designer Intelligence, Editing and Continuity, MultiView and Project Memory, Professional Workflow, Implementation and Commerce, Platform Operations) — ни один не авторизован к реализации.

---

## 10. Compatibility Assessment

| Документ | Статус |
|---|---|
| Living Strategic Roadmap v1.3 | Compatible with qualification — v1.4 расширяет и уточняет, не отменяет Guiding Principles и Decision Governance v1.3 |
| Project Context v2.2 | Compatible with qualification — Gate 1/2 статусы v1.4 совместимы по существу; сама v2.2 остаётся неверсионированной (known drift, вне scope этого решения) |
| Gate1-Closure-Review.md | Compatible — прочитан полностью, лежит в основе Gate 1 Closed statement |
| Accepted PCS baseline | Requires future review — полный PCS-001…010 отдельно не читался; PCS-003 formulation в v1.4 явно ослаблена до «expected, subject to review» |
| Accepted ACS baseline | Compatible with qualification — ACS-004 проверен значительно; ACS-001–003, 005–010 не открывались отдельно |
| ACS-004 Prompt Intelligence | Compatible — терминология v1.4 дословно совпадает с ACS-004 |
| ADR-010 | Not affected — граница Room Analyzer/SpaceType не изменяется этим решением |
| ADR-011 | Compatible with qualification — прочитан частично; ничто в v1.4 не противоречит прочитанному |
| ADR-012 | Compatible with qualification — Q1–Q9 проверены, Q10–Q11 не прочитаны дословно; v1.4 не ссылается на конкретные Q-номера |
| ADR-013 | Compatible with qualification — прочитан частично |
| ADR-014 | Compatible with qualification — формулировка v1.4 про perception boundary соответствует прочитанным §4.1–4.2 |
| Final Gate 2 Scope Decision | Compatible — прочитан почти полностью, representation-first формулировка v1.4 согласована с §6–9 |
| Gate 2 C8 Implementation Package | Compatible with qualification — прочитан частично (§1–6, 16–20) |
| Gate 2 Step 6 Scope Decision | Compatible — прочитан значительно |
| Whole-home deferral | Compatible — v1.4 explicitly сохраняет запрет |
| Partial Edit / Clear / mask / inpainting boundaries | Not affected — v1.4 explicitly не переопределяет их |
| Developer Studio existing foundation | Compatible with qualification — состав «Existing foundation» указан по сведениям Owner, не верифицирован построчно в этом review |
| Decision Governance | Compatible with qualification — v1.4 явно не выбирает Variant A/B самостоятельно (решено отдельно) |
| Living Roadmap Governance | Compatible — v1.4 явно не заявляет себя автоматически удовлетворяющей шести условиям |

---

## 11. Product and Architecture Consequences

Принятие v1.4 меняет верхнеуровневую стратегическую карту, но не создаёт, не изменяет и не удаляет ни одного ADR, ACS, PCS или репозиторного файла. Ни один Track A–H не получает статус architecture-assessed или implementation-ready. PCS-003 не считается формально пересмотренным.

---

## 12. Risks and Mitigations

| Риск | Мера |
|---|---|
| Roadmap становится слишком широкой | Capability hierarchy, maturity ladder, отдельные Architecture Assessments, explicit non-authorization |
| Стратегические треки принимают за implementation plan | Каждый трек требует отдельного Owner Decision; конкретные технологии не выбираются; no automatic next-stage authorization |
| Преждевременная whole-home сложность | Lightweight Project & Asset Foundation; no automatic grouping; no cross-room consistency; no 3D; no mass editing |
| Зависимость от заменяемых AI-провайдеров | Provider Layer остаётся заменяемым; moat строится в proprietary intelligence-слоях |
| Ограничения источников | Квалифицированные compatibility-утверждения; последующее прямое получение недоступных документов; отсутствие unsupported low-level claims в Roadmap |
| Documentation drift | Будущая синхронизация Project Context; поддержка ADR_INDEX; Documentation Integrity Check |
| Приватность и персональные данные | Privacy, consent, data minimization, controlled memory — отдельный Architecture Assessment |

---

## 13. Deferred Scope

Prompt Reasoning / полный `refinePromptDraft` lifecycle; постоянный (production) perception-механизм (future architecture decision); Editing Intelligence; Versioning; MultiView; Project Memory; Professional Workflow; Implementation & Commerce; Platform Operations (все четыре подэтапа).

---

## 14. Explicit Non-Decisions

Настоящим решением **не выбирается и не разрешается**: конкретный VLM; конкретная segmentation model; конкретная генеративная модель; database; storage provider; auth provider; payment provider; Clerk; Stripe; VLM implementation; Project & Asset Foundation implementation; Designer Reasoning implementation; Editing Intelligence implementation; MultiView implementation; Project Memory implementation; whole-home generation; full Project Mode; automatic room grouping; cross-room consistency; 3D reconstruction; mass editing; marketplace integration; shopping cart; repository modification.

---

## 15. Governance Conditions

```text
1. Подготовлен настоящий Roadmap v1.4 Decision Record (данный документ).
2. Полный Owner review Decision Record — предстоит.
3. Принятие Decision Record отдельным Owner Decision — предстоит.
4. Формальное принятие Living Strategic Roadmap v1.4 — предстоит,
   ОТДЕЛЬНЫМ последующим Owner Decision после шага 3.
5. Отдельная авторизация repository persistence — предстоит.
6. Подготовка отдельного Claude Code prompt — только после шага 5.
```

---

## 16. Documentation Maintenance Consequences

Принятие v1.4 не влечёт автоматически: обновление Project Context; обновление ADR_INDEX.md; получение Gate2-C8-Closure-Review.md. Все три пункта остаются в Documentation Maintenance Backlog, вне scope этого решения.

---

## 17. Acceptance Criteria

```text
Настоящий Decision Record подготовлен для Owner review и, в пределах
доступных первичных источников и явно раскрытых ограничений (§6), не
содержит выявленных противоречий с предлагаемым текстом Roadmap v1.4.

Документ содержит все 18 разделов; не объявляет Roadmap Accepted;
не объявляет себя Accepted; не авторизует реализацию; не авторизует
repository persistence; не переопределяет Decision Governance; чётко
отделяет strategic direction от implementation authorization; честно
раскрывает source limitations; запрашивает Owner Decision только
по себе самому (см. §18), оставляя формальное принятие Roadmap v1.4
отдельному последующему решению.
```


---

## 18. Owner Decision

```text
Decision Record status:
Accepted.

Decision Record decision:
Accepted.

Owner interpretation acknowledgement:
Confirmed.

Note on scope of this Owner Decision:
This Owner Decision concerns ONLY the Decision Record above.
Formal acceptance of Living Strategic Roadmap v1.4 itself is a
SEPARATE, SUBSEQUENT Owner Decision, to be made after this Decision
Record is Accepted, per the strict Variant A sequence (§15).

Repository persistence:
NOT AUTHORIZED by this decision unless separately granted.

Next-stage architecture assessment:
NOT AUTHORIZED.

Next-stage implementation:
NOT AUTHORIZED.

Claude Code prompt:
NOT PREPARED at the time of this Decision Record acceptance.

Decision date:
2026-07-13

Owner comments:
The Living Strategic Roadmap v1.4 Decision Record is accepted.
This decision applies only to the Decision Record.
Formal acceptance of Living Strategic Roadmap v1.4 remains
a separate subsequent Owner Decision under Variant A.
```


---

---

## Post-Decision Governance Events

```text
The following events occurred after this Decision Record's own
acceptance. They do not retroactively alter the historical state
recorded in §§1–17 or the scope statement preserved in §18.
```

- Living Strategic Roadmap v1.4 was formally accepted by the Project Owner on 2026-07-13, superseding Living Strategic Roadmap v1.3 as the current strategic Roadmap baseline.
- Repository persistence was separately authorized by the Project Owner on 2026-07-13 for file creation and review of exactly two documents: this Decision Record and Living Strategic Roadmap v1.4.
- Staging, commit and push remain not authorized.
