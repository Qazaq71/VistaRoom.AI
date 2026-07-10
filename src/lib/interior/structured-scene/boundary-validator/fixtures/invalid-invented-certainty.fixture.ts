/**
 * Hand-authored synthetic fixture: a known_* confidence state claimed without
 * a consistent, present value (self-contradictory Observed<T>). Targets the
 * invented_certainty rule. Pure data.
 */

export const invalidInventedCertainty: unknown = {
  schemaVersion: "structured-scene.v0",
  roomId: "room-boundary-010",
  sceneId: "scene-boundary-010",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        // value intentionally omitted despite claiming known_with_confidence
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
