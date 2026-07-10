/**
 * Hand-authored synthetic fixture: an Observed<T> attribute missing its
 * provenance field entirely. Targets the missing_provenance rule. Pure data.
 */

export const invalidMissingProvenance: unknown = {
  schemaVersion: "structured-scene.v0",
  roomId: "room-boundary-009",
  sceneId: "scene-boundary-009",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        value: "bedroom",
      },
      spatialExtent: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativeSize: "small" },
      },
    },
  ],
  relations: [],
};
