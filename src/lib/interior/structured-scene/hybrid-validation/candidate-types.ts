/**
 * TEMPORARY / BOUNDED / REPLACEABLE — Step 2 (Gate 2 C8, Implementation
 * Package v1.0 §5–7, "VLM Interpretation Sub-component"). This is the
 * internal placeholder shape for whatever a future VLM-style scene
 * interpretation step might emit. It does not match any real vendor/model
 * output format, carries no provider/model/vendor dependency, and is
 * expected to be replaced entirely once a real mechanism is selected
 * (ADR-014). Every field is optional and untrusted — the heuristic
 * validation layer (./validate.ts) treats none of it as ground truth.
 */

/** Marks this module as temporary/bounded/replaceable; checked by contract tests. */
export const VLM_CANDIDATE_SHAPE_STATUS = "temporary_bounded_replaceable" as const;

/** A single untrusted, not-yet-validated observed-value candidate. */
export interface CandidateObserved<T = unknown> {
  readonly value?: T;
  readonly confidence?: unknown;
  readonly provenance?: unknown;
}

/** Untrusted candidate for a StructuredScene v0 node. Shape is intentionally loose. */
export interface CandidateNode {
  readonly id?: unknown;
  readonly category?: unknown;
  readonly spaceTypeId?: CandidateObserved;
  readonly spatialExtent?: CandidateObserved;
  readonly typeLabel?: CandidateObserved;
  readonly approximatePlacement?: CandidateObserved;
  readonly affordances?: CandidateObserved;
  readonly illuminationRelevance?: CandidateObserved;
}

/** Untrusted candidate for a StructuredScene v0 relation. Shape is intentionally loose. */
export interface CandidateRelation {
  readonly id?: unknown;
  readonly category?: unknown;
  readonly fromNodeId?: unknown;
  readonly toNodeId?: unknown;
  readonly confidence?: unknown;
  readonly provenance?: unknown;
  readonly blockingType?: unknown;
}

/**
 * Root untrusted candidate object, as if produced by a future VLM-style
 * scene interpretation step. Passed into `validateAndNormalizeCandidateScene`
 * (./validate.ts), which is the only place this shape is trusted at all.
 */
export interface VlmSceneCandidate {
  readonly roomId?: unknown;
  readonly sceneId?: unknown;
  readonly sequence?: unknown;
  readonly nodes?: readonly CandidateNode[];
  readonly relations?: readonly CandidateRelation[];
}
