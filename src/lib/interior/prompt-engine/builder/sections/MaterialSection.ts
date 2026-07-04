import type { MaterialReference } from "../../../prompt-domain";

/**
 * Draft-side counterpart of `MaterialContext` (`prompt-domain/contexts/MaterialContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping — see `StyleSection.ts`.
 */
export type MaterialSection = {
  materials: MaterialReference[];
  floorMaterial?: MaterialReference;
  wallMaterial?: MaterialReference;
  ceilingMaterial?: MaterialReference;
};
