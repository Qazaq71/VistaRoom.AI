/**
 * Hand-authored synthetic fixture: a relation category ("Proximity") outside
 * the closed StructuredScene v0 relation category list. Targets the
 * unsupported_relation_category rule. Pure data.
 */

export const invalidUnsupportedRelationCategory: unknown = {
  schemaVersion: "structured-scene.v0",
  roomId: "room-boundary-004",
  sceneId: "scene-boundary-004",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "bedroom",
      },
      spatialExtent: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativeSize: "small" },
      },
    },
  ],
  relations: [
    {
      id: "rel-proximity",
      category: "Proximity",
      fromNodeId: "node-room",
      toNodeId: "node-room",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
  ],
};
