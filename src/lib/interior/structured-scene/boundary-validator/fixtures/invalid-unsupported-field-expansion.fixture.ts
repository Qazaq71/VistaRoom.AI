/**
 * Hand-authored synthetic fixture: an extra field ("vendorConfidenceScore")
 * outside the closed StructuredSceneV0 root contract. Targets the
 * unsupported_field_expansion rule ("no silent expansion" — the Step 1
 * contract in ../../types.ts allows no extension/metadata fields). Pure
 * data.
 */

export const invalidUnsupportedFieldExpansion: unknown = {
  schemaVersion: "structured-scene.v0",
  roomId: "room-boundary-011",
  sceneId: "scene-boundary-011",
  sequence: 1,
  nodes: [],
  relations: [],
  vendorConfidenceScore: 0.97,
};
