/**
 * Step 5 — Boundary Validator (Gate 2 C8, Implementation Package v1.0 §20,
 * Step 5 Scope). An independent, read-only structural validator for
 * arbitrary runtime objects that may be `StructuredSceneV0` instances.
 *
 * This module does not build, repair, normalize, enrich, or mutate data —
 * it only checks structural conformance to the Step 1 contract
 * (../types.ts) and returns accept/reject diagnostics. It performs no
 * semantic truth validation (it never checks whether a scene matches a real
 * room) and has no dependency on the Step 2 candidate-normalization mechanism.
 *
 * TRACE: ADR-014 §4.7 Boundary Validation — checks structural/schema
 * conformance to ADR-013 and presence of required confidence/provenance;
 * does not replace ADR-012 evaluation of content accuracy or usefulness.
 */

import {
  CONFIDENCE_STATES,
  PROVENANCE_STATES,
  STRUCTURED_SCENE_NODE_CATEGORIES,
  STRUCTURED_SCENE_RELATION_CATEGORIES,
  STRUCTURED_SCENE_SCHEMA_VERSION,
} from "../types";
import type { BoundaryValidationResult, BoundaryViolation, BoundaryViolationCode } from "./types";

function violation(code: BoundaryViolationCode, message: string, path: string): BoundaryViolation {
  return { code, message, path };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}

/** Root keys permitted by the closed `StructuredSceneV0` contract (../types.ts). */
const ROOT_KEYS = ["schemaVersion", "roomId", "sceneId", "sequence", "nodes", "relations"] as const;

/** Keys permitted per closed node category, matching each node interface exactly. */
const NODE_CATEGORY_KEYS: Record<string, readonly string[]> = {
  Room: ["id", "category", "spaceTypeId", "spatialExtent"],
  StructuralElement: ["id", "category", "typeLabel", "approximatePlacement", "illuminationRelevance"],
  Object: ["id", "category", "typeLabel", "approximatePlacement", "affordances", "illuminationRelevance"],
  FreeSpaceRegion: ["id", "category", "spatialExtent", "approximatePlacement"],
};

/** Observed<T> attribute keys required per closed node category (excludes id/category). */
const NODE_OBSERVED_FIELDS: Record<string, readonly string[]> = {
  Room: ["spaceTypeId", "spatialExtent"],
  StructuralElement: ["typeLabel", "approximatePlacement", "illuminationRelevance"],
  Object: ["typeLabel", "approximatePlacement", "affordances", "illuminationRelevance"],
  FreeSpaceRegion: ["spatialExtent", "approximatePlacement"],
};

/** Keys permitted per closed relation category, matching each relation interface exactly. */
const RELATION_CATEGORY_KEYS: Record<string, readonly string[]> = {
  Adjacency: ["id", "category", "fromNodeId", "toNodeId", "confidence", "provenance"],
  Containment: ["id", "category", "fromNodeId", "toNodeId", "confidence", "provenance"],
  Blocking: ["id", "category", "fromNodeId", "toNodeId", "confidence", "provenance", "blockingType"],
};

function checkNoUnsupportedFields(
  value: Record<string, unknown>,
  allowedKeys: readonly string[],
  path: string,
  violations: BoundaryViolation[],
): void {
  for (const key of Object.keys(value)) {
    if (!allowedKeys.includes(key)) {
      violations.push(
        violation(
          "unsupported_field_expansion",
          `"${key}" is not part of the accepted StructuredScene v0 contract at ${path}`,
          `${path}.${key}`,
        ),
      );
    }
  }
}

function isSpatialExtentShape(value: unknown): boolean {
  return isPlainObject(value) && typeof value["qualitativeSize"] === "string";
}

function isApproximatePlacementShape(value: unknown): boolean {
  return isPlainObject(value) && typeof value["qualitativePosition"] === "string";
}

function isStringArrayShape(value: unknown): boolean {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

/** Validates a single `Observed<T>` attribute for structural conformance only (rules 5.5, 5.6, 5.9). */
function validateObservedField(
  value: unknown,
  path: string,
  violations: BoundaryViolation[],
  isValidKnownValue: (value: unknown) => boolean,
): void {
  if (!isPlainObject(value)) {
    violations.push(violation("invented_certainty", `${path} must be an Observed<T> object`, path));
    return;
  }

  checkNoUnsupportedFields(value, ["confidence", "provenance", "value"], path, violations);

  const confidence = value["confidence"];
  const provenance = value["provenance"];
  const hasValueKey = Object.prototype.hasOwnProperty.call(value, "value");

  const confidenceValid = typeof confidence === "string" && (CONFIDENCE_STATES as readonly string[]).includes(confidence);
  const provenanceValid = typeof provenance === "string" && (PROVENANCE_STATES as readonly string[]).includes(provenance);

  if (!confidenceValid) {
    violations.push(
      violation(
        "missing_confidence",
        `${path}.confidence is missing or is not a recognized confidence state`,
        `${path}.confidence`,
      ),
    );
  }
  if (!provenanceValid) {
    violations.push(
      violation(
        "missing_provenance",
        `${path}.provenance is missing or is not a recognized provenance state`,
        `${path}.provenance`,
      ),
    );
  }
  if (!confidenceValid || !provenanceValid) {
    return;
  }

  const isUnknownConfidence = confidence === "unknown_not_inferable";
  const isUnknownProvenance = provenance === "unknown_not_inferable";

  if (isUnknownConfidence !== isUnknownProvenance) {
    // The Observed<T> contract only permits confidence/provenance to disagree
    // on "unknown_not_inferable" together, never one without the other.
    violations.push(
      violation(
        "invented_certainty",
        `${path} has an inconsistent known/unknown pairing between confidence ("${String(
          confidence,
        )}") and provenance ("${String(provenance)}")`,
        path,
      ),
    );
    return;
  }

  if (isUnknownConfidence && isUnknownProvenance) {
    if (hasValueKey) {
      violations.push(
        violation(
          "invented_certainty",
          `${path} is unknown_not_inferable but still carries a "value" field`,
          `${path}.value`,
        ),
      );
    }
    return;
  }

  // Known branch: a value must be present and structurally valid for T.
  if (!hasValueKey || !isValidKnownValue(value["value"])) {
    violations.push(
      violation(
        "invented_certainty",
        `${path} claims a known confidence/provenance but its value is missing or structurally invalid`,
        `${path}.value`,
      ),
    );
  }
}

function validateNode(node: unknown, path: string, violations: BoundaryViolation[]): void {
  if (!isPlainObject(node)) {
    violations.push(violation("not_an_object", `${path} must be an object`, path));
    return;
  }

  if (!isNonEmptyString(node["id"])) {
    violations.push(violation("missing_identity", `${path}.id must be a non-empty string`, `${path}.id`));
  }

  const category = node["category"];
  if (typeof category !== "string" || !(STRUCTURED_SCENE_NODE_CATEGORIES as readonly string[]).includes(category)) {
    violations.push(
      violation(
        "unsupported_node_category",
        `${path}.category "${String(category)}" is not in the closed StructuredScene v0 node category list`,
        `${path}.category`,
      ),
    );
    return;
  }

  checkNoUnsupportedFields(node, NODE_CATEGORY_KEYS[category], path, violations);

  const observedFieldValidators: Record<string, (value: unknown) => boolean> = {
    spaceTypeId: isNonEmptyString,
    spatialExtent: isSpatialExtentShape,
    typeLabel: isNonEmptyString,
    approximatePlacement: isApproximatePlacementShape,
    affordances: isStringArrayShape,
    illuminationRelevance: (value) => typeof value === "boolean",
  };

  for (const field of NODE_OBSERVED_FIELDS[category]) {
    validateObservedField(node[field], `${path}.${field}`, violations, observedFieldValidators[field]);
  }
}

function validateRelation(relation: unknown, path: string, violations: BoundaryViolation[]): void {
  if (!isPlainObject(relation)) {
    violations.push(violation("not_an_object", `${path} must be an object`, path));
    return;
  }

  if (!isNonEmptyString(relation["id"])) {
    violations.push(violation("missing_identity", `${path}.id must be a non-empty string`, `${path}.id`));
  }

  const category = relation["category"];
  if (
    typeof category !== "string" ||
    !(STRUCTURED_SCENE_RELATION_CATEGORIES as readonly string[]).includes(category)
  ) {
    violations.push(
      violation(
        "unsupported_relation_category",
        `${path}.category "${String(category)}" is not in the closed StructuredScene v0 relation category list`,
        `${path}.category`,
      ),
    );
    return;
  }

  checkNoUnsupportedFields(relation, RELATION_CATEGORY_KEYS[category], path, violations);

  if (!isNonEmptyString(relation["fromNodeId"])) {
    violations.push(
      violation("missing_identity", `${path}.fromNodeId must be a non-empty string`, `${path}.fromNodeId`),
    );
  }
  if (!isNonEmptyString(relation["toNodeId"])) {
    violations.push(violation("missing_identity", `${path}.toNodeId must be a non-empty string`, `${path}.toNodeId`));
  }

  const confidence = relation["confidence"];
  if (typeof confidence !== "string" || !(CONFIDENCE_STATES as readonly string[]).includes(confidence)) {
    violations.push(
      violation(
        "missing_confidence",
        `${path}.confidence is missing or is not a recognized confidence state`,
        `${path}.confidence`,
      ),
    );
  }

  const provenance = relation["provenance"];
  if (typeof provenance !== "string" || !(PROVENANCE_STATES as readonly string[]).includes(provenance)) {
    violations.push(
      violation(
        "missing_provenance",
        `${path}.provenance is missing or is not a recognized provenance state`,
        `${path}.provenance`,
      ),
    );
  }

  if (category === "Blocking" && !isNonEmptyString(relation["blockingType"])) {
    violations.push(
      violation("missing_blocking_type", `${path}.blockingType must be a non-empty string`, `${path}.blockingType`),
    );
  }
}

/**
 * Validates that `scene` is structurally conformant to the `StructuredSceneV0`
 * contract (../types.ts). Pure and deterministic: no I/O, no mutation, no
 * repaired/normalized output — only an accept/reject verdict with structured
 * diagnostics on rejection.
 */
export function validateStructuredSceneBoundary(scene: unknown): BoundaryValidationResult {
  const violations: BoundaryViolation[] = [];

  if (!isPlainObject(scene)) {
    return {
      valid: false,
      violations: [violation("not_an_object", "scene must be a non-null, non-array object", "root")],
    };
  }

  checkNoUnsupportedFields(scene, ROOT_KEYS, "root", violations);

  const schemaVersion = scene["schemaVersion"];
  if (schemaVersion === undefined) {
    violations.push(violation("missing_schema_version", "root.schemaVersion is required", "root.schemaVersion"));
  } else if (schemaVersion !== STRUCTURED_SCENE_SCHEMA_VERSION) {
    violations.push(
      violation(
        "unsupported_schema_version",
        `root.schemaVersion "${String(schemaVersion)}" does not match "${STRUCTURED_SCENE_SCHEMA_VERSION}"`,
        "root.schemaVersion",
      ),
    );
  }

  if (!isNonEmptyString(scene["roomId"])) {
    violations.push(violation("missing_identity", "root.roomId must be a non-empty string", "root.roomId"));
  }
  if (!isNonEmptyString(scene["sceneId"])) {
    violations.push(violation("missing_identity", "root.sceneId must be a non-empty string", "root.sceneId"));
  }
  if (typeof scene["sequence"] !== "number" || !Number.isFinite(scene["sequence"])) {
    violations.push(violation("missing_identity", "root.sequence must be a finite number", "root.sequence"));
  }

  const nodes = scene["nodes"];
  if (!Array.isArray(nodes)) {
    violations.push(violation("invalid_nodes_collection", "root.nodes must be an array", "root.nodes"));
  } else {
    nodes.forEach((node, index) => validateNode(node, `nodes[${index}]`, violations));
  }

  const relations = scene["relations"];
  if (!Array.isArray(relations)) {
    violations.push(violation("invalid_relations_collection", "root.relations must be an array", "root.relations"));
  } else {
    relations.forEach((relation, index) => validateRelation(relation, `relations[${index}]`, violations));
  }

  if (violations.length > 0) {
    return { valid: false, violations };
  }
  return { valid: true };
}
