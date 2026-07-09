# ACS-001 Mask Invariant

Чистая функция `checkMaskInvariant(mode, hasMask)`, проверяющая симметричный
mask invariant из ADR-006 Mode Contract (`mode=style`+маска и
`mode=partial`/`clear` без маски — невалидные вызовы) и ADR-009 Decision 1
(production dispatch mode/operation). Возвращает union-тип результата
(`MaskInvariantValid | MaskInvariantViolation`) вместо исключения — по
ADR-009 Decision 3.

Проверка для `mode='clear'` — это production-level enforcement
Implementation Package v1.0 (не даёт `clear` без маски молча уйти в
`redesign`-fallback), а не расширение ADR-006 mode enum: erase-путь
по-прежнему остаётся вне Mode Contract ADR-006, согласно ADR-009
Decision 5.

Not yet wired into route.ts — see Step 3.
