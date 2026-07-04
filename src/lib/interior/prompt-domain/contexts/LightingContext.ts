import type { BaseDomainContext } from "./BaseDomainContext";
import type { LightingReference } from "../references/LightingReference";

export type LightingContext = BaseDomainContext & {
  lighting: LightingReference[];
  lightingType?: string;
  temperature?: "warm" | "neutral" | "cool" | number;
  naturalLight?: boolean;
  accentLighting?: boolean;
};
