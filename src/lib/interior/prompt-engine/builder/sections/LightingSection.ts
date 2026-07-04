import type { LightingReference } from "../../../prompt-domain";

/**
 * Draft-side counterpart of `LightingContext` (`prompt-domain/contexts/LightingContext.ts`).
 * Same fields, no `BaseDomainContext` bookkeeping — see `StyleSection.ts`.
 */
export type LightingSection = {
  lighting: LightingReference[];
  lightingType?: string;
  temperature?: "warm" | "neutral" | "cool" | number;
  naturalLight?: boolean;
  accentLighting?: boolean;
};
