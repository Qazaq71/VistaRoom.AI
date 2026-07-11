/**
 * Step 6 fixtures: runtime inputs that must be rejected by the Step 5
 * Boundary Validator before any Q1-Q11 evaluator runs.
 */

export const boundaryRejectedMissingSchemaVersion: unknown = {
  roomId: "room-eh-invalid-001",
  sceneId: "scene-eh-invalid-001",
  sequence: 1,
  nodes: [],
  relations: [],
};

export const boundaryRejectedArbitraryUnknown: unknown = {
  hello: "world",
  nested: { value: 42 },
};

export const boundaryRejectedPrimitive: unknown = "not a scene";
