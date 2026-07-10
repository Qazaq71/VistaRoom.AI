/**
 * Step 5 — Boundary Validator diagnostic types (Gate 2 C8, Implementation
 * Package v1.0 §20, Step 5 Scope). Pure types only. A `BoundaryValidationResult`
 * never carries repaired/normalized/enriched scene data — only an
 * accept/reject verdict and, when rejected, structured diagnostics.
 */

/** Closed set of machine-readable rule identifiers this validator can report. */
export const BOUNDARY_VIOLATION_CODES = [
  "not_an_object",
  "unsupported_field_expansion",
  "missing_schema_version",
  "unsupported_schema_version",
  "missing_identity",
  "invalid_nodes_collection",
  "invalid_relations_collection",
  "unsupported_node_category",
  "unsupported_relation_category",
  "missing_confidence",
  "missing_provenance",
  "invented_certainty",
  "missing_blocking_type",
] as const;

export type BoundaryViolationCode = (typeof BOUNDARY_VIOLATION_CODES)[number];

/** A single structural rejection reason, always machine- and human-readable. */
export interface BoundaryViolation {
  readonly code: BoundaryViolationCode;
  readonly message: string;
  /** Dot/bracket path to the offending location, e.g. "nodes[0].spaceTypeId.confidence". */
  readonly path: string;
}

/**
 * Result of `validateStructuredSceneBoundary`. Discriminated on `valid` so
 * callers cannot access `violations` on an accepted result or vice versa.
 */
export type BoundaryValidationResult =
  | { readonly valid: true }
  | { readonly valid: false; readonly violations: readonly BoundaryViolation[] };
