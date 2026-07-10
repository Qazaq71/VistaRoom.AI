/**
 * Hand-authored synthetic fixture: schemaVersion present but not matching
 * the Step 1 schema version constant. Targets the unsupported_schema_version
 * rule. Pure data.
 */

export const invalidWrongSchemaVersion: unknown = {
  schemaVersion: "structured-scene.v1",
  roomId: "room-boundary-006",
  sceneId: "scene-boundary-006",
  sequence: 1,
  nodes: [],
  relations: [],
};
