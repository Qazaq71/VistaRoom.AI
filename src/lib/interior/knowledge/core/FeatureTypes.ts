/**
 * Every domain a `KnowledgeFeature` (`./Feature.ts`) can belong to. This is
 * the strict-typing backbone for `KnowledgeFeature.domain` and for each
 * domain-specific alias (`MaterialFeature`, `LightingFeature`, ...).
 *
 * Deliberately domain-generic naming (`"material"`, not `"materials"`) so
 * this union can describe features of any future design category — not
 * only interiors. See `../README.md` "Knowledge Core" for how this
 * compares to `KnowledgeCategory` (`../types.ts`).
 */
export type FeatureType =
  | "material"
  | "lighting"
  | "furniture"
  | "decor"
  | "color"
  | "architecture"
  | "composition"
  | "constraint"
  | "space"
  | "mood"
  | "quality"
  | "rendering";
