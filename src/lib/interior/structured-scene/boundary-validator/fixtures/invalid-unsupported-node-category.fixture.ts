/**
 * Hand-authored synthetic fixture: a node category ("Furniture") outside the
 * closed StructuredScene v0 node category list. Targets the
 * unsupported_node_category rule. Pure data.
 */

export const invalidUnsupportedNodeCategory: unknown = {
  schemaVersion: "structured-scene.v0",
  roomId: "room-boundary-003",
  sceneId: "scene-boundary-003",
  sequence: 1,
  nodes: [
    {
      id: "node-mystery",
      category: "Furniture",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "unknown object",
      },
    },
  ],
  relations: [],
};
