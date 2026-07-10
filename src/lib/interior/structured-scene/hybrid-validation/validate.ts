/**
 * TEMPORARY / BOUNDED / REPLACEABLE — Step 2 heuristic validation layer
 * (Gate 2 C8, Implementation Package v1.0 §5, §7 "Heuristic Validation
 * Sub-component"). Converts an untrusted `VlmSceneCandidate` (see
 * ./candidate-types.ts) into an ADR-013-compatible `StructuredSceneV0`, or a
 * structured rejection. Pure data transformation: no I/O, no network calls,
 * no provider/model/vendor dependency, no LLM/VLM calls of any kind.
 *
 * This mechanism is not a permanent perception architecture. It exists only
 * to bound and validate whatever a future real VLM-style interpretation
 * step might produce, and it is expected to be replaced (ADR-014).
 */

import { getSpaceType } from "../../space-type";
import type { SpaceTypeId } from "../../space-type";
import {
  CONFIDENCE_STATES,
  PROVENANCE_STATES,
  STRUCTURED_SCENE_NODE_CATEGORIES,
  STRUCTURED_SCENE_RELATION_CATEGORIES,
  STRUCTURED_SCENE_SCHEMA_VERSION,
} from "../types";
import type {
  ApproximatePlacement,
  ConfidenceState,
  NodeId,
  Observed,
  ProvenanceState,
  SpatialExtent,
  StructuredSceneNode,
  StructuredSceneNodeCategory,
  StructuredSceneRelation,
  StructuredSceneRelationCategory,
  StructuredSceneV0,
} from "../types";
import type {
  CandidateNode,
  CandidateObserved,
  CandidateRelation,
  VlmSceneCandidate,
} from "./candidate-types";

/** Marks this module as temporary/bounded/replaceable; checked by contract tests. */
export const HEURISTIC_VALIDATION_STATUS = "temporary_bounded_replaceable" as const;

/** A reason a whole candidate, or a single node/relation candidate, was excluded. */
export interface ValidationReason {
  readonly code: string;
  readonly message: string;
  readonly candidateId?: string;
}

/**
 * Structured result of heuristic validation: either a successfully
 * normalized `StructuredSceneV0` (with any per-item exclusions reported, not
 * silently dropped), or a structured rejection of the whole candidate with
 * clear reasons.
 */
export type HeuristicValidationResult =
  | {
      readonly status: "success";
      readonly scene: StructuredSceneV0;
      readonly excludedNodes: readonly ValidationReason[];
      readonly excludedRelations: readonly ValidationReason[];
    }
  | {
      readonly status: "rejected";
      readonly reasons: readonly ValidationReason[];
    };

function isConfidenceState(value: unknown): value is ConfidenceState {
  return typeof value === "string" && (CONFIDENCE_STATES as readonly string[]).includes(value);
}

function isProvenanceState(value: unknown): value is ProvenanceState {
  return typeof value === "string" && (PROVENANCE_STATES as readonly string[]).includes(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isStringArray(value: unknown): value is readonly string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isSpatialExtent(value: unknown): value is SpatialExtent {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as { qualitativeSize?: unknown }).qualitativeSize === "string"
  );
}

function isApproximatePlacement(value: unknown): value is ApproximatePlacement {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as { qualitativePosition?: unknown }).qualitativePosition === "string"
  );
}

/** Membership check only — does not duplicate SpaceType classification logic (ADR-004). */
function isSpaceTypeId(value: unknown): value is SpaceTypeId {
  return typeof value === "string" && getSpaceType(value as SpaceTypeId) !== undefined;
}

/**
 * Normalizes a single untrusted candidate attribute into a strict
 * `Observed<T>`. Any missing piece (confidence, provenance, value) or any
 * value that fails `isValid` collapses to `unknown_not_inferable` — this
 * function never invents certainty and never fabricates a value that was
 * not actually present in the candidate.
 */
function normalizeObserved<T>(
  candidate: CandidateObserved<T> | undefined,
  isValid: (value: unknown) => value is T,
): Observed<T> {
  const UNKNOWN: Observed<T> = {
    confidence: "unknown_not_inferable",
    provenance: "unknown_not_inferable",
  };

  if (!candidate || typeof candidate !== "object") {
    return UNKNOWN;
  }

  if (candidate.confidence === "unknown_not_inferable") {
    return UNKNOWN;
  }

  const confidenceIsKnown =
    candidate.confidence === "known_with_confidence" ||
    candidate.confidence === "known_with_uncertainty";
  const provenanceIsKnown =
    candidate.provenance === "visually_observed" ||
    candidate.provenance === "user_provided_hint" ||
    candidate.provenance === "inferred_assumption";

  if (confidenceIsKnown && provenanceIsKnown && candidate.value !== undefined && isValid(candidate.value)) {
    return {
      confidence: candidate.confidence,
      provenance: candidate.provenance,
      value: candidate.value,
    };
  }

  return UNKNOWN;
}

function normalizeCandidateNode(
  candidate: CandidateNode,
): { readonly node: StructuredSceneNode } | { readonly excluded: ValidationReason } {
  if (!isNonEmptyString(candidate.id)) {
    return { excluded: { code: "missing_node_id", message: "node candidate is missing a string id" } };
  }
  const id: NodeId = candidate.id;

  if (
    typeof candidate.category !== "string" ||
    !(STRUCTURED_SCENE_NODE_CATEGORIES as readonly string[]).includes(candidate.category)
  ) {
    return {
      excluded: {
        code: "unsupported_node_category",
        message: `node category "${String(candidate.category)}" is not in the closed StructuredScene v0 node category list`,
        candidateId: id,
      },
    };
  }
  const category = candidate.category as StructuredSceneNodeCategory;

  switch (category) {
    case "Room":
      return {
        node: {
          id,
          category,
          spaceTypeId: normalizeObserved(candidate.spaceTypeId as CandidateObserved<SpaceTypeId>, isSpaceTypeId),
          spatialExtent: normalizeObserved(candidate.spatialExtent as CandidateObserved<SpatialExtent>, isSpatialExtent),
        },
      };
    case "StructuralElement":
      return {
        node: {
          id,
          category,
          typeLabel: normalizeObserved(candidate.typeLabel as CandidateObserved<string>, isNonEmptyString),
          approximatePlacement: normalizeObserved(
            candidate.approximatePlacement as CandidateObserved<ApproximatePlacement>,
            isApproximatePlacement,
          ),
          illuminationRelevance: normalizeObserved(
            candidate.illuminationRelevance as CandidateObserved<boolean>,
            isBoolean,
          ),
        },
      };
    case "Object":
      return {
        node: {
          id,
          category,
          typeLabel: normalizeObserved(candidate.typeLabel as CandidateObserved<string>, isNonEmptyString),
          approximatePlacement: normalizeObserved(
            candidate.approximatePlacement as CandidateObserved<ApproximatePlacement>,
            isApproximatePlacement,
          ),
          affordances: normalizeObserved(
            candidate.affordances as CandidateObserved<readonly string[]>,
            isStringArray,
          ),
          illuminationRelevance: normalizeObserved(
            candidate.illuminationRelevance as CandidateObserved<boolean>,
            isBoolean,
          ),
        },
      };
    case "FreeSpaceRegion":
      return {
        node: {
          id,
          category,
          spatialExtent: normalizeObserved(candidate.spatialExtent as CandidateObserved<SpatialExtent>, isSpatialExtent),
          approximatePlacement: normalizeObserved(
            candidate.approximatePlacement as CandidateObserved<ApproximatePlacement>,
            isApproximatePlacement,
          ),
        },
      };
  }
}

function normalizeCandidateRelation(
  candidate: CandidateRelation,
  acceptedNodeIds: ReadonlySet<NodeId>,
): { readonly relation: StructuredSceneRelation } | { readonly excluded: ValidationReason } {
  if (!isNonEmptyString(candidate.id)) {
    return { excluded: { code: "missing_relation_id", message: "relation candidate is missing a string id" } };
  }
  const id = candidate.id;

  if (
    typeof candidate.category !== "string" ||
    !(STRUCTURED_SCENE_RELATION_CATEGORIES as readonly string[]).includes(candidate.category)
  ) {
    return {
      excluded: {
        code: "unsupported_relation_category",
        message: `relation category "${String(candidate.category)}" is not in the closed StructuredScene v0 relation category list`,
        candidateId: id,
      },
    };
  }
  const category = candidate.category as StructuredSceneRelationCategory;

  if (!isNonEmptyString(candidate.fromNodeId) || !isNonEmptyString(candidate.toNodeId)) {
    return {
      excluded: {
        code: "missing_node_reference",
        message: "relation candidate is missing fromNodeId/toNodeId",
        candidateId: id,
      },
    };
  }
  if (!acceptedNodeIds.has(candidate.fromNodeId) || !acceptedNodeIds.has(candidate.toNodeId)) {
    return {
      excluded: {
        code: "dangling_node_reference",
        message: "relation candidate references a node that was not accepted into the StructuredScene",
        candidateId: id,
      },
    };
  }

  const confidence: ConfidenceState = isConfidenceState(candidate.confidence)
    ? candidate.confidence
    : "unknown_not_inferable";
  const provenance: ProvenanceState = isProvenanceState(candidate.provenance)
    ? candidate.provenance
    : "unknown_not_inferable";

  if (category === "Blocking") {
    if (!isNonEmptyString(candidate.blockingType)) {
      return {
        excluded: {
          code: "missing_blocking_type",
          message: "Blocking relation candidate is missing a blockingType",
          candidateId: id,
        },
      };
    }
    return {
      relation: {
        id,
        category,
        fromNodeId: candidate.fromNodeId,
        toNodeId: candidate.toNodeId,
        confidence,
        provenance,
        blockingType: candidate.blockingType,
      },
    };
  }

  return {
    relation: {
      id,
      category,
      fromNodeId: candidate.fromNodeId,
      toNodeId: candidate.toNodeId,
      confidence,
      provenance,
    },
  };
}

/**
 * Validates and normalizes an untrusted `VlmSceneCandidate` into an
 * ADR-013-compatible `StructuredSceneV0`, or a structured rejection.
 *
 * Node/relation candidates with an unsupported category, a missing id, or a
 * dangling reference are excluded individually (reported, never silently
 * dropped) rather than failing the whole candidate — a partial
 * StructuredScene is a first-class valid outcome (ADR-013). Missing
 * top-level identity (roomId/sceneId/sequence) fails the whole candidate,
 * since `StructuredSceneV0` has no "unknown" representation for its own
 * identity fields.
 */
export function validateAndNormalizeCandidateScene(
  candidate: VlmSceneCandidate,
): HeuristicValidationResult {
  if (typeof candidate !== "object" || candidate === null) {
    return {
      status: "rejected",
      reasons: [{ code: "invalid_candidate", message: "candidate must be a non-null object" }],
    };
  }

  const reasons: ValidationReason[] = [];
  if (!isNonEmptyString(candidate.roomId)) {
    reasons.push({ code: "missing_room_id", message: "candidate is missing a string roomId" });
  }
  if (!isNonEmptyString(candidate.sceneId)) {
    reasons.push({ code: "missing_scene_id", message: "candidate is missing a string sceneId" });
  }
  if (typeof candidate.sequence !== "number" || !Number.isFinite(candidate.sequence)) {
    reasons.push({ code: "missing_sequence", message: "candidate is missing a numeric sequence" });
  }
  if (reasons.length > 0) {
    return { status: "rejected", reasons };
  }

  const excludedNodes: ValidationReason[] = [];
  const acceptedNodes: StructuredSceneNode[] = [];
  for (const candidateNode of candidate.nodes ?? []) {
    const result = normalizeCandidateNode(candidateNode);
    if ("node" in result) {
      acceptedNodes.push(result.node);
    } else {
      excludedNodes.push(result.excluded);
    }
  }

  const acceptedNodeIds = new Set(acceptedNodes.map((node) => node.id));
  const excludedRelations: ValidationReason[] = [];
  const acceptedRelations: StructuredSceneRelation[] = [];
  for (const candidateRelation of candidate.relations ?? []) {
    const result = normalizeCandidateRelation(candidateRelation, acceptedNodeIds);
    if ("relation" in result) {
      acceptedRelations.push(result.relation);
    } else {
      excludedRelations.push(result.excluded);
    }
  }

  return {
    status: "success",
    scene: {
      schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
      roomId: candidate.roomId as string,
      sceneId: candidate.sceneId as string,
      sequence: candidate.sequence as number,
      nodes: acceptedNodes,
      relations: acceptedRelations,
    },
    excludedNodes,
    excludedRelations,
  };
}
