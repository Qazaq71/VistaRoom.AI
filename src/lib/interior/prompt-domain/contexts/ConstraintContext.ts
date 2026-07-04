import type { BaseDomainContext } from "./BaseDomainContext";

export type ConstraintContext = BaseDomainContext & {
  preserveGeometry: boolean;
  preserveWindows: boolean;
  preserveDoors: boolean;
  preserveFloor: boolean;
  preserveCeiling: boolean;
  budgetLevel?: "economy" | "standard" | "premium";
};
