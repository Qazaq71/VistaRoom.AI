/**
 * StructuredScene v0 — ADR-013-compatible contract types (Gate 2 C8,
 * Implementation Package v1.0, Step 1). Pure types + closed-category
 * constants only. No functions, no runtime behavior, no I/O.
 *
 * Traces to: ADR-013 (StructuredScene / Scene Graph Schema v0), ADR-014
 * (Perception Boundary — confidence/provenance model), Gate 2 C8
 * Implementation Package v1.0 §8–10 (schema-version convention, confidence
 * and provenance model, partial-scene handling).
 *
 * Node/relation/attribute categories are closed per ADR-013 §4.2–4.4: no
 * category beyond what is listed here is permitted without a new
 * Engineering Decision. Exact field shapes (spatial extent, placement) are
 * engineering detail deferred to this Implementation Package, kept
 * deliberately approximate/qualitative per ADR-013 §4.1 ("no premature
 * geometry precision").
 */

import type { SpaceTypeId } from "../space-type";

/** Engineering-convention schema-version literal (Implementation Package §8). */
export const STRUCTURED_SCENE_SCHEMA_VERSION = "structured-scene.v0" as const;

export type StructuredSceneSchemaVersion = typeof STRUCTURED_SCENE_SCHEMA_VERSION;

/** Closed node category list (ADR-013 §4.2). No category beyond this list is valid. */
export const STRUCTURED_SCENE_NODE_CATEGORIES = [
  "Room",
  "StructuralElement",
  "Object",
  "FreeSpaceRegion",
] as const;

export type StructuredSceneNodeCategory =
  (typeof STRUCTURED_SCENE_NODE_CATEGORIES)[number];

/** Closed relation category list (ADR-013 §4.3). No category beyond this list is valid. */
export const STRUCTURED_SCENE_RELATION_CATEGORIES = [
  "Adjacency",
  "Containment",
  "Blocking",
] as const;

export type StructuredSceneRelationCategory =
  (typeof STRUCTURED_SCENE_RELATION_CATEGORIES)[number];

/** Confidence states (ADR-013 §4.5). */
export const CONFIDENCE_STATES = [
  "known_with_confidence",
  "known_with_uncertainty",
  "unknown_not_inferable",
] as const;

export type ConfidenceState = (typeof CONFIDENCE_STATES)[number];

/** Provenance states (ADR-014 §4.6). */
export const PROVENANCE_STATES = [
  "visually_observed",
  "user_provided_hint",
  "inferred_assumption",
  "unknown_not_inferable",
] as const;

export type ProvenanceState = (typeof PROVENANCE_STATES)[number];

/**
 * A single piece of scene information that may be known or
 * unknown/not-inferable. The two branches are structurally distinct so that
 * "unknown / not inferable" can never be confused with a present-but-empty
 * value (ADR-013 §4.5: the two must be distinguishable).
 */
export type Observed<T> =
  | {
      readonly confidence: "known_with_confidence" | "known_with_uncertainty";
      readonly provenance: Exclude<ProvenanceState, "unknown_not_inferable">;
      readonly value: T;
    }
  | {
      readonly confidence: "unknown_not_inferable";
      readonly provenance: "unknown_not_inferable";
    };

/** Stable identity (ADR-013 §4.4 Identity attribute), used for nodes and relations. */
export type NodeId = string;
export type RelationId = string;

/** Approximate, qualitative spatial extent (Room, FreeSpaceRegion) — ADR-013 §4.4. */
export interface SpatialExtent {
  readonly qualitativeSize: string;
}

/** Approximate, coarse placement (StructuralElement, Object, FreeSpaceRegion) — ADR-013 §4.4. */
export interface ApproximatePlacement {
  readonly qualitativePosition: string;
}

interface StructuredSceneNodeBase {
  readonly id: NodeId;
  readonly category: StructuredSceneNodeCategory;
}

/**
 * Room node (scene root). Carries a reference to `SpaceTypeId` per the
 * ADR-013 §4.2 / ADR-004 invariant: this is a reference only — it does not
 * perform or duplicate SpaceType classification logic.
 */
export interface RoomNode extends StructuredSceneNodeBase {
  readonly category: "Room";
  readonly spaceTypeId: Observed<SpaceTypeId>;
  readonly spatialExtent: Observed<SpatialExtent>;
}

export interface StructuralElementNode extends StructuredSceneNodeBase {
  readonly category: "StructuralElement";
  /** Open-vocabulary type/category label, e.g. "wall", "door", "window". */
  readonly typeLabel: Observed<string>;
  readonly approximatePlacement: Observed<ApproximatePlacement>;
  readonly illuminationRelevance: Observed<boolean>;
}

export interface ObjectNode extends StructuredSceneNodeBase {
  readonly category: "Object";
  /** Open-vocabulary type/category label, e.g. "sofa", "table lamp". */
  readonly typeLabel: Observed<string>;
  readonly approximatePlacement: Observed<ApproximatePlacement>;
  /** Open-vocabulary affordance tags, e.g. "seating", "storage". */
  readonly affordances: Observed<readonly string[]>;
  readonly illuminationRelevance: Observed<boolean>;
}

export interface FreeSpaceRegionNode extends StructuredSceneNodeBase {
  readonly category: "FreeSpaceRegion";
  readonly spatialExtent: Observed<SpatialExtent>;
  readonly approximatePlacement: Observed<ApproximatePlacement>;
}

export type StructuredSceneNode =
  | RoomNode
  | StructuralElementNode
  | ObjectNode
  | FreeSpaceRegionNode;

interface StructuredSceneRelationBase {
  readonly id: RelationId;
  readonly category: StructuredSceneRelationCategory;
  readonly fromNodeId: NodeId;
  readonly toNodeId: NodeId;
  readonly confidence: ConfidenceState;
  readonly provenance: ProvenanceState;
}

export interface AdjacencyRelation extends StructuredSceneRelationBase {
  readonly category: "Adjacency";
}

export interface ContainmentRelation extends StructuredSceneRelationBase {
  readonly category: "Containment";
}

/** Parameterized by an open-vocabulary blocking-type (ADR-013 §4.3), e.g. "traffic", "light". */
export interface BlockingRelation extends StructuredSceneRelationBase {
  readonly category: "Blocking";
  readonly blockingType: string;
}

export type StructuredSceneRelation =
  | AdjacencyRelation
  | ContainmentRelation
  | BlockingRelation;

/**
 * Versioning/continuity primitives (ADR-013 §4.6): `roomId` gives continuity
 * of identity across versions of the same room; `sequence` orders one
 * instance relative to a prior instance of the same room. `sceneId` is the
 * stable identity of this particular instance.
 */
export interface StructuredSceneVersion {
  readonly roomId: string;
  readonly sceneId: string;
  readonly sequence: number;
}

/**
 * StructuredScene v0 root contract. `schemaVersion` is required on every
 * instance (Implementation Package §8) — its absence or an unsupported
 * value is a boundary-validation failure (not enforced here; Step 1 defines
 * the type contract only).
 */
export interface StructuredSceneV0 extends StructuredSceneVersion {
  readonly schemaVersion: StructuredSceneSchemaVersion;
  readonly nodes: readonly StructuredSceneNode[];
  readonly relations: readonly StructuredSceneRelation[];
}
