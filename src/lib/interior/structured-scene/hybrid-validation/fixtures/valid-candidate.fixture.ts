/**
 * Hand-authored synthetic VLM-style candidate: fully valid, exercises every
 * closed node/relation category and a mix of confidence/provenance states.
 * Pure data — no real user photo, no external sourcing.
 */

import type { VlmSceneCandidate } from "../candidate-types";

export const validSceneCandidate: VlmSceneCandidate = {
  roomId: "room-candidate-001",
  sceneId: "scene-candidate-001",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_confidence",
        provenance: "user_provided_hint",
        value: "living_room",
      },
      spatialExtent: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativeSize: "medium" },
      },
    },
    {
      id: "node-sofa",
      category: "Object",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "sofa",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "against south wall" },
      },
      affordances: {
        confidence: "known_with_confidence",
        provenance: "inferred_assumption",
        value: ["seating"],
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: false,
      },
    },
    {
      id: "node-free-space",
      category: "FreeSpaceRegion",
      spatialExtent: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativeSize: "small" },
      },
      approximatePlacement: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativePosition: "center of room" },
      },
    },
  ],
  relations: [
    {
      id: "rel-sofa-in-room",
      category: "Containment",
      fromNodeId: "node-room",
      toNodeId: "node-sofa",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
    {
      id: "rel-sofa-blocks-traffic",
      category: "Blocking",
      fromNodeId: "node-sofa",
      toNodeId: "node-free-space",
      blockingType: "traffic",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
  ],
};
