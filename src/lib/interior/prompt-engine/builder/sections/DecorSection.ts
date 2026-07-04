import type { DecorReference } from "../../../prompt-domain";

/**
 * Draft-side counterpart of `DecorContext` (`prompt-domain/contexts/DecorContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping — see `StyleSection.ts`.
 */
export type DecorSection = {
  decor: DecorReference[];
  plants?: boolean;
  artwork?: boolean;
  textiles?: boolean;
};
