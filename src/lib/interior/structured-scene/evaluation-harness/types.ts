/**
 * Step 6 — Evaluation Harness types (Gate 2 C8, Implementation Package
 * v1.0, Step 6 Scope Decision). Pure types only. No functions, no runtime
 * behavior, no I/O.
 *
 * Traces to: ADR-012 (Canonical Query Suite Q1-Q11, Grounding Requirement,
 * normative evaluation dimensions), ADR-013 (StructuredScene v0 schema),
 * ADR-014 (confidence/provenance model), Final Gate 2 Scope Decision §9
 * (staged Q1-Q11 closure), Implementation Package v1.0 §12-13.
 */

import type { BoundaryViolation } from "../boundary-validator";
import type { SpaceTypeId } from "../../space-type";
import type { StructuredSceneRelationCategory } from "../types";

/** Canonical Query Suite identifiers (ADR-012 §4.2), stable Q1..Q11 order. */
export const QUERY_IDS = [
  "Q1",
  "Q2",
  "Q3",
  "Q4",
  "Q5",
  "Q6",
  "Q7",
  "Q8",
  "Q9",
  "Q10",
  "Q11",
] as const;

export type QueryId = (typeof QUERY_IDS)[number];

/** Public entry point input (Step 6 Scope Decision §5). */
export interface EvaluationHarnessInput {
  readonly scene: unknown;
  readonly queryParameters?: {
    readonly Q3?: {
      readonly nodeId?: string;
    };
  };
}

export type CapabilityStatus = "supported" | "deferred" | "unsupported";

/** Applies only to `supported` queries — never mixed with capability status. */
export type ExecutionOutcome = "answered" | "insufficient_scene_data";

/**
 * Confidence snapshot embedded directly on each evidence unit inside an
 * `answered` query result, so a caller never needs to re-read the source
 * scene to learn how sure the answer is (Step 6 Scope Decision §12).
 */
export interface EvidenceConfidence {
  readonly confidence: "known_with_confidence" | "known_with_uncertainty";
  readonly provenance: "visually_observed" | "user_provided_hint" | "inferred_assumption";
}

/**
 * `complete_for_known_scene_data` means the answer is exhaustive relative to
 * usable known evidence in the accepted `StructuredSceneV0`, with no
 * detected unknown branch capable of hiding additional results for this
 * query. It does NOT assert the scene is objectively complete or matches
 * the source photo (Step 6 Scope Decision §13).
 */
export type AnswerCompleteness = "complete_for_known_scene_data" | "partial_due_to_unknown_scene_data";

/** Closed set of node attribute names a grounding reference may cite. */
export const NODE_ATTRIBUTE_NAMES = [
  "spaceTypeId",
  "spatialExtent",
  "typeLabel",
  "approximatePlacement",
  "affordances",
  "illuminationRelevance",
] as const;

export type NodeAttributeName = (typeof NODE_ATTRIBUTE_NAMES)[number];

/** Closed set of relation attribute names a grounding reference may cite. */
export const RELATION_ATTRIBUTE_NAMES = ["blockingType"] as const;

export type RelationAttributeName = (typeof RELATION_ATTRIBUTE_NAMES)[number];

/** Typed grounding reference (Step 6 Scope Decision §14). */
export type GroundingReference =
  | { readonly kind: "node"; readonly nodeId: string }
  | { readonly kind: "node_attribute"; readonly nodeId: string; readonly attribute: NodeAttributeName }
  | { readonly kind: "relation"; readonly relationId: string }
  | { readonly kind: "relation_attribute"; readonly relationId: string; readonly attribute: RelationAttributeName };

/** Internal evaluator return shape, before being wrapped with `queryId`/`capabilityStatus`. */
export interface QueryAnsweredOutcome<TAnswer> {
  readonly outcome: "answered";
  readonly answer: TAnswer;
  readonly grounding: readonly GroundingReference[];
  readonly completeness: AnswerCompleteness;
}

export interface QueryInsufficientOutcome {
  readonly outcome: "insufficient_scene_data";
  readonly reason: string;
  readonly reasonCode: string;
}

export type QueryEvaluationOutcome<TAnswer> = QueryAnsweredOutcome<TAnswer> | QueryInsufficientOutcome;

export interface SupportedAnsweredResult<TId extends QueryId, TAnswer> {
  readonly queryId: TId;
  readonly capabilityStatus: "supported";
  readonly executionOutcome: "answered";
  readonly answer: TAnswer;
  readonly grounding: readonly GroundingReference[];
  readonly completeness: AnswerCompleteness;
}

export interface SupportedInsufficientResult<TId extends QueryId> {
  readonly queryId: TId;
  readonly capabilityStatus: "supported";
  readonly executionOutcome: "insufficient_scene_data";
  readonly reason: string;
  readonly reasonCode: string;
}

export type SupportedQueryResult<TId extends QueryId, TAnswer> =
  | SupportedAnsweredResult<TId, TAnswer>
  | SupportedInsufficientResult<TId>;

/** Closed set of reason codes used by deferred (Q4, Q5, Q10, Q11) queries. */
export const DEFERRED_REASON_CODES = [
  "traffic_path_analysis_out_of_scope",
  "free_space_ordering_not_defined",
  "design_judgment_out_of_scope",
  "versioning_readiness_demonstrated",
] as const;

export type DeferredReasonCode = (typeof DEFERRED_REASON_CODES)[number];

export interface DeferredQueryResult<TId extends QueryId> {
  readonly queryId: TId;
  readonly capabilityStatus: "deferred";
  readonly reason: string;
  readonly reasonCode: DeferredReasonCode;
}

/** Shape reserved for a future unsupported query; the current registry has none. */
export interface UnsupportedQueryResult<TId extends QueryId> {
  readonly queryId: TId;
  readonly capabilityStatus: "unsupported";
  readonly reason: string;
  readonly reasonCode: string;
}

// ---------------------------------------------------------------------------
// Q1 — Room identity and approximate extent
// ---------------------------------------------------------------------------

export type Q1Identity =
  | { readonly known: true; readonly spaceTypeId: SpaceTypeId; readonly evidence: EvidenceConfidence }
  | { readonly known: false };

export type Q1Extent =
  | { readonly known: true; readonly qualitativeSize: string; readonly evidence: EvidenceConfidence }
  | { readonly known: false };

export interface Q1Answer {
  readonly identity: Q1Identity;
  readonly extent: Q1Extent;
}

export type Q1Result = SupportedQueryResult<"Q1", Q1Answer>;

// ---------------------------------------------------------------------------
// Q2 — Inventory
// ---------------------------------------------------------------------------

export type Q2TypeLabel =
  | { readonly known: true; readonly value: string; readonly evidence: EvidenceConfidence }
  | { readonly known: false };

export interface Q2InventoryItem {
  readonly nodeId: string;
  readonly category: "Object" | "StructuralElement";
  readonly typeLabel: Q2TypeLabel;
}

export interface Q2Answer {
  readonly items: readonly Q2InventoryItem[];
}

export type Q2Result = SupportedQueryResult<"Q2", Q2Answer>;

// ---------------------------------------------------------------------------
// Q3 — Direct relations for an explicit nodeId
// ---------------------------------------------------------------------------

export interface Q3RelationItem {
  readonly relationId: string;
  readonly category: StructuredSceneRelationCategory;
  readonly direction: "from" | "to";
  readonly otherNodeId: string;
  readonly blockingType: string | null;
  readonly evidence: EvidenceConfidence;
}

export interface Q3Answer {
  readonly nodeId: string;
  readonly relations: readonly Q3RelationItem[];
}

export type Q3Result = SupportedQueryResult<"Q3", Q3Answer>;

// ---------------------------------------------------------------------------
// Q6 — Natural-light blocking
// ---------------------------------------------------------------------------

export interface Q6BlockerItem {
  readonly relationId: string;
  readonly windowNodeId: string;
  readonly relationEvidence: EvidenceConfidence;
  readonly windowTypeLabelEvidence: EvidenceConfidence;
}

export interface Q6Answer {
  readonly blockers: readonly Q6BlockerItem[];
}

export type Q6Result = SupportedQueryResult<"Q6", Q6Answer>;

// ---------------------------------------------------------------------------
// Q7 — Lighting affordances
// ---------------------------------------------------------------------------

export interface Q7ObjectItem {
  readonly nodeId: string;
  readonly matchedVia: "affordances" | "illuminationRelevance";
  readonly evidence: EvidenceConfidence;
}

export interface Q7Answer {
  readonly objects: readonly Q7ObjectItem[];
}

export type Q7Result = SupportedQueryResult<"Q7", Q7Answer>;

// ---------------------------------------------------------------------------
// Q8 — Object affordances (grouped)
// ---------------------------------------------------------------------------

export interface Q8AffordanceEvidence {
  readonly nodeId: string;
  readonly evidence: EvidenceConfidence;
}

export interface Q8AffordanceGroup {
  readonly affordance: string;
  readonly items: readonly Q8AffordanceEvidence[];
}

export interface Q8Answer {
  readonly groups: readonly Q8AffordanceGroup[];
}

export type Q8Result = SupportedQueryResult<"Q8", Q8Answer>;

// ---------------------------------------------------------------------------
// Q9 — Explicit traffic/clearance conflicts
// ---------------------------------------------------------------------------

export interface Q9ConflictItem {
  readonly relationId: string;
  readonly blockingType: "traffic" | "clearance";
  readonly fromNodeId: string;
  readonly toNodeId: string;
  readonly evidence: EvidenceConfidence;
}

export interface Q9Answer {
  readonly conflicts: readonly Q9ConflictItem[];
}

export type Q9Result = SupportedQueryResult<"Q9", Q9Answer>;

// ---------------------------------------------------------------------------
// Deferred queries (Q4, Q5, Q10, Q11)
// ---------------------------------------------------------------------------

export type Q4Result = DeferredQueryResult<"Q4">;
export type Q5Result = DeferredQueryResult<"Q5">;
export type Q10Result = DeferredQueryResult<"Q10">;
export type Q11Result = DeferredQueryResult<"Q11">;

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export type QueryRegistryEntry =
  | { readonly queryId: QueryId; readonly capabilityStatus: "supported" }
  | {
      readonly queryId: QueryId;
      readonly capabilityStatus: "deferred";
      readonly reason: string;
      readonly reasonCode: DeferredReasonCode;
    };

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

export type EvaluationQueryResult =
  | Q1Result
  | Q2Result
  | Q3Result
  | Q4Result
  | Q5Result
  | Q6Result
  | Q7Result
  | Q8Result
  | Q9Result
  | Q10Result
  | Q11Result;

/**
 * ADR-012 §4.4 requires PerceptionFidelity to remain a diagnostic-only
 * signal, never a numeric score, threshold, or proxy for query success.
 */
export interface PerceptionFidelity {
  readonly status: "not_measured";
  readonly role: "diagnostic_only";
  readonly reason: string;
}

export interface StagedSubsetReport {
  readonly supported: readonly QueryId[];
  readonly deferred: readonly QueryId[];
  readonly unsupported: readonly QueryId[];
  readonly unsupportedExplanation: string;
}

export interface EvaluationReport {
  readonly queries: readonly EvaluationQueryResult[];
  readonly perceptionFidelity: PerceptionFidelity;
  /** ADR-012 §4.4 dimensions this Step 6 harness does not compute (see §20 disclosure). */
  readonly unmeasuredEvaluationDimensions: readonly string[];
  readonly stagedSubset: StagedSubsetReport;
}

/**
 * Discriminated on `accepted` so a rejected result can never carry a
 * `report`, and an accepted result always carries a full `EvaluationReport`
 * (Step 6 Scope Decision §8).
 */
export type EvaluationHarnessResult =
  | { readonly accepted: false; readonly boundaryDiagnostics: readonly BoundaryViolation[]; readonly report: null }
  | { readonly accepted: true; readonly boundaryDiagnostics: readonly []; readonly report: EvaluationReport };
