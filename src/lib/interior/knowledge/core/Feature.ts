import type { KnowledgeEntity } from "./Entity";
import type { FeatureType } from "./FeatureTypes";

/**
 * A `KnowledgeEntity` specialized to exactly one knowledge domain
 * (`domain`). This is the future building block styles (and, later,
 * other design categories) are meant to be assembled from instead of
 * hand-written `KnowledgeReference`/`StyleKnowledge` fields — see
 * `../README.md` "Knowledge Core" and `./README.md` "Migration Strategy".
 * On DS-6.4.2 it is not produced or consumed anywhere: `styles/*.ts`,
 * `KnowledgeRegistry`, and every `<domain>/registry.ts` still work
 * exactly as before (the `<Domain>Knowledge` type aliases in
 * `../types.ts` now *point at* the matching `<Domain>Feature` below, but
 * nothing constructs a value of either shape yet).
 *
 * `type` is always `"feature"` (see `KnowledgeEntityKind`,
 * `./Entity.ts`) — it says "this is a Feature", not "which domain". The
 * domain is `domain: FeatureType`, a separate axis.
 *
 * Pure data — no methods, no validation, no default values.
 */
export type KnowledgeFeature = KnowledgeEntity & {
  readonly type: "feature";
  readonly domain: FeatureType;
  /**
   * This Feature's own intrinsic prominence/importance (e.g. "how
   * defining is oak wood to woodworking in general"). Distinct from
   * `KnowledgeReference.weight` (`../types.ts`, "how much *this style*
   * leans on this reference") and `KnowledgeRelation.weight`
   * (`./Relation.ts`, "how strong is *this specific edge*") — three
   * different axes that happen to share a field name and a `number`
   * type.
   */
  readonly weight?: number;
  readonly aliases?: readonly string[];
  /**
   * Ids of other `KnowledgeFeature` entries this one relates to — a flat,
   * cheap, denormalized list meant for fast lookup (e.g. by a future
   * Prompt Builder that just needs "what else pairs with this material"
   * without walking a graph). For richer, typed relations (requires /
   * conflicts / enhances / ..., with weights, across any two entities —
   * not just Feature-to-Feature) use `KnowledgeRelation` /
   * `KnowledgeGraph` (`./Relation.ts`, `./KnowledgeGraph.ts`) instead.
   * Both mechanisms are intentionally kept — see `./README.md`
   * "Relation mechanisms".
   */
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
