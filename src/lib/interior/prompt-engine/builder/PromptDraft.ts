import type { StyleSection } from "./sections/StyleSection";
import type { RoomSection } from "./sections/RoomSection";
import type { MaterialSection } from "./sections/MaterialSection";
import type { FurnitureSection } from "./sections/FurnitureSection";
import type { LightingSection } from "./sections/LightingSection";
import type { DecorSection } from "./sections/DecorSection";
import type { ConstraintSection } from "./sections/ConstraintSection";
import type { NegativeSection } from "./sections/NegativeSection";
import type { MetadataSection } from "./sections/MetadataSection";

/**
 * Intermediate representation of a future prompt — the AST `PromptDraftBuilder`
 * produces from a `PromptContext` (DS-6.5). Not a string, not a string
 * array: an object of independent, strictly-typed sections, one per
 * concern, mirroring `PromptContext`'s own sub-contexts. This is the type
 * Rule Engine (DS-6.3+ rules, once retargeted) and Formatter (DS-6.6) will
 * read and transform next — no `positivePrompt`/`negativePrompt` string
 * exists anywhere on this type. See `README.md` "Prompt compilation flow".
 */
export type PromptDraft = {
  style: StyleSection;
  room: RoomSection;
  materials: MaterialSection;
  furniture: FurnitureSection;
  lighting: LightingSection;
  decor: DecorSection;
  constraints: ConstraintSection;
  negative: NegativeSection;
  metadata: MetadataSection;
};
