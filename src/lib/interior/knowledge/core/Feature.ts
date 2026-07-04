import type { KnowledgeEntity } from "./Entity";
import type { FeatureType } from "./FeatureTypes";

/**
 * A `KnowledgeEntity` specialized to exactly one knowledge domain
 * (`domain`). This is the future building block styles (and, later,
 * other design categories) are meant to be assembled from instead of
 * hand-written `KnowledgeReference`/`StyleKnowledge` fields — see
 * `../README.md` "Knowledge Core". On DS-6.4.1 it is not produced or
 * consumed anywhere: `styles/*.ts`, `KnowledgeRegistry`, and every
 * `<domain>/registry.ts` still work exactly as in DS-6.4.
 *
 * Pure data — no methods, no validation, no default values.
 */
export type KnowledgeFeature = KnowledgeEntity & {
  readonly domain: FeatureType;
  readonly weight?: number;
  readonly aliases?: readonly string[];
  /** Ids of other `KnowledgeFeature` entries this one relates to. */
  readonly relatedFeatures?: readonly string[];
  readonly notes?: string;
};

/**
 * One `KnowledgeFeature` alias per `FeatureType`, discriminated by
 * `domain`. Pure type narrowing — no additional fields, no
 * implementation, nothing constructs these yet.
 */
export type MaterialFeature = KnowledgeFeature & { readonly domain: "material" };
export type LightingFeature = KnowledgeFeature & { readonly domain: "lighting" };
export type FurnitureFeature = KnowledgeFeature & { readonly domain: "furniture" };
export type DecorFeature = KnowledgeFeature & { readonly domain: "decor" };
export type ColorFeature = KnowledgeFeature & { readonly domain: "color" };
export type ArchitectureFeature = KnowledgeFeature & { readonly domain: "architecture" };
export type CompositionFeature = KnowledgeFeature & { readonly domain: "composition" };
export type ConstraintFeature = KnowledgeFeature & { readonly domain: "constraint" };
export type SpaceFeature = KnowledgeFeature & { readonly domain: "space" };
export type MoodFeature = KnowledgeFeature & { readonly domain: "mood" };
export type QualityFeature = KnowledgeFeature & { readonly domain: "quality" };
export type RenderingFeature = KnowledgeFeature & { readonly domain: "rendering" };
