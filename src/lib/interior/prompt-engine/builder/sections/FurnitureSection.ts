import type { FurnitureReference } from "../../../prompt-domain";

/**
 * Draft-side counterpart of `FurnitureContext` (`prompt-domain/contexts/FurnitureContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping — see `StyleSection.ts`.
 */
export type FurnitureSection = {
  items: FurnitureReference[];
  layout?: string;
  replaceExisting?: boolean;
};
