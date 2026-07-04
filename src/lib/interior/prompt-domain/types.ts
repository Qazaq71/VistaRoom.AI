import type { BaseDomainContext } from "./contexts/BaseDomainContext";
import type { RoomContext } from "./contexts/RoomContext";
import type { StyleContext } from "./contexts/StyleContext";
import type { MaterialContext } from "./contexts/MaterialContext";
import type { FurnitureContext } from "./contexts/FurnitureContext";
import type { LightingContext } from "./contexts/LightingContext";
import type { DecorContext } from "./contexts/DecorContext";
import type { ConstraintContext } from "./contexts/ConstraintContext";
import type { NegativePromptContext } from "./contexts/NegativePromptContext";
import type { MetadataContext } from "./contexts/MetadataContext";
import { MY_STYLE_ID } from "../constants";

/**
 * Whether the prompt is being assembled from a catalog style (Style
 * Registry) or from a user-defined custom style (`MY_STYLE_ID` mode).
 */
export type PromptGenerationMode = "preset" | typeof MY_STYLE_ID;

/**
 * Desired richness/fidelity of the assembled prompt itself — a Prompt
 * Domain concept, distinct from `ImageQuality` (src/types/image.ts), which
 * is a provider-facing generation setting owned by the Generation Engine.
 */
export type PromptQualityLevel = "draft" | "standard" | "high";

/**
 * Metadata attached to a `PromptContext` as a whole. Reuses `MetadataContext`
 * (provider/model/version bookkeeping) and adds the domain-wide quality
 * intent.
 */
export type PromptMetadata = MetadataContext & {
  qualityLevel?: PromptQualityLevel;
};

/**
 * The central domain model of VisataRoom AI's AI Core: a complete,
 * provider-agnostic description of "what should be generated", assembled
 * from one sub-context per concern. Pure data — no methods, no formatting,
 * no prompt-string logic. See ./README.md.
 */
export type PromptContext = BaseDomainContext & {
  room: RoomContext;
  style: StyleContext;
  materials: MaterialContext;
  furniture: FurnitureContext;
  lighting: LightingContext;
  decor: DecorContext;
  constraints: ConstraintContext;
  negativePrompt: NegativePromptContext;
  metadata: PromptMetadata;
};
