/**
 * Domains that apply to virtually any physical design discipline, not
 * just interiors — a yacht, an aircraft cabin, a landscape, or an
 * exhibition booth all have material, color, lighting, composition,
 * constraints, spatial layout, mood, quality, and rendering concerns.
 *
 * This is deliberately singular naming (`"material"`, not `"materials"`)
 * — DS-6.4.2 unifies every domain literal across the Knowledge Base to
 * this one form. See `../README.md` "Knowledge Core" and
 * `./README.md` §1.
 */
export type UniversalFeatureType =
  | "material"
  | "color"
  | "lighting"
  | "composition"
  | "constraint"
  | "space"
  | "mood"
  | "quality"
  | "rendering";

/**
 * Domains that originated from — and are named after — interior design
 * specifically. Kept as their own named union (rather than folded into
 * `UniversalFeatureType`) so a future vertical (landscape, yacht,
 * aircraft, fashion, ...) can tell at a glance which parts of
 * `FeatureType` are safe to reuse as-is and which are interior-specific
 * vocabulary it may want to replace with its own.
 */
export type InteriorFeatureType = "furniture" | "decor" | "architecture";

/**
 * Every domain a `KnowledgeFeature` (`./Feature.ts`) can belong to —
 * composed additively from `UniversalFeatureType` and
 * `InteriorFeatureType`. This is the strict-typing backbone for
 * `KnowledgeFeature.domain`, for each domain-specific alias
 * (`MaterialFeature`, `LightingFeature`, ...), and — since DS-6.4.2 —
 * for `KnowledgeCategory` (`../types.ts`), which is defined as
 * `FeatureType | "style"`.
 *
 * The intended extension pattern for a future non-interior vertical is
 * to add its own named union (e.g. `LandscapeFeatureType = "planting" |
 * "terrain" | "hardscape"`) and widen this alias to
 * `UniversalFeatureType | InteriorFeatureType | LandscapeFeatureType`.
 * `FeatureType` itself never needs to be renamed or duplicated
 * (no `FeatureType2`) — see `./README.md` §5/§8 for the full scalability
 * review this pattern is based on.
 */
export type FeatureType = UniversalFeatureType | InteriorFeatureType;
