/**
 * Hand-authored synthetic fixture: an Observed<T> attribute missing its
 * confidence field entirely. Targets the missing_confidence rule. Pure data.
 */

export const invalidMissingConfidence: unknown = {
  schemaVersion: "structured-scene.v0",
  roomId: "room-boundary-008",
  sceneId: "scene-boundary-008",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
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
  relations: [],
};
