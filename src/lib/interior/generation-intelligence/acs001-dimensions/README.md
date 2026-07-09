# ACS-001 Dimensions

Чистая функция `deriveDimensionsFromAspectRatio(aspectRatio)`, производящая
`Dimensions` из существующего `aspectRatio: string` (например, из
`nearestAspectRatio()` в route.ts). Контракт — ADR-006 Public Contract,
требующий поле `size: Dimensions` в вызове `generate()`, и ADR-009
Decision 4, которое явно не определяет конкретное представление типа
`Dimensions`, оставляя это Implementation Package.

Not yet wired into route.ts or provider payload — this is a
boundary-preparation artifact only; ADR-009 Decision 4 does not define a
payload schema for Dimensions, so no integration point exists yet.
