/**
 * Draft-side counterpart of `ConstraintContext` (`prompt-domain/contexts/ConstraintContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping — see `StyleSection.ts`.
 */
export type ConstraintSection = {
  preserveGeometry: boolean;
  preserveWindows: boolean;
  preserveDoors: boolean;
  preserveFloor: boolean;
  preserveCeiling: boolean;
  budgetLevel?: "economy" | "standard" | "premium";
};
