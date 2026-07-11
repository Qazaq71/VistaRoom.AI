/**
 * Step 6 fixture: mixes `unknown_not_inferable` relations with usable
 * ones, so query gating can be exercised without collapsing every query
 * into `insufficient_scene_data`. Also includes a node whose only direct
 * relation is unknown, to exercise the pure-insufficient Q3 path, and a
 * StructuralElement with an unknown typeLabel to exercise the Q6
 * "unknown window label not matched" rule.
 */

import type { StructuredSceneV0 } from "../../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";

export const unknownConfidenceScene: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-eh-004",
  sceneId: "scene-eh-004",
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
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativeSize: "medium" },
      },
    },
    {
      id: "node-window",
      category: "StructuralElement",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "window",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "north wall" },
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: true,
      },
    },
    {
      id: "node-door",
      category: "StructuralElement",
      typeLabel: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      approximatePlacement: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: false,
      },
    },
    {
      id: "node-bookshelf",
      category: "Object",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "bookshelf",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "near north wall" },
      },
      affordances: {
        confidence: "known_with_confidence",
        provenance: "inferred_assumption",
        value: ["storage"],
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: false,
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
        value: { qualitativePosition: "center of room" },
      },
      affordances: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: ["seating"],
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: false,
      },
    },
    {
      id: "node-lamp",
      category: "Object",
      typeLabel: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: "floor lamp",
      },
      approximatePlacement: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: { qualitativePosition: "east corner" },
      },
      affordances: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: ["illumination"],
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: true,
      },
    },
    {
      id: "node-mystery",
      category: "Object",
      typeLabel: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      approximatePlacement: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      affordances: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
      illuminationRelevance: {
        confidence: "unknown_not_inferable",
        provenance: "unknown_not_inferable",
      },
    },
  ],
  relations: [
    {
      id: "rel-unknown-light",
      category: "Blocking",
      fromNodeId: "node-bookshelf",
      toNodeId: "node-window",
      blockingType: "light",
      confidence: "unknown_not_inferable",
      provenance: "unknown_not_inferable",
    },
    {
      id: "rel-known-light",
      category: "Blocking",
      fromNodeId: "node-sofa",
      toNodeId: "node-window",
      blockingType: "light",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-door-light-unknown-label",
      category: "Blocking",
      fromNodeId: "node-lamp",
      toNodeId: "node-door",
      blockingType: "light",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-bookshelf-adjacent-sofa",
      category: "Adjacency",
      fromNodeId: "node-bookshelf",
      toNodeId: "node-sofa",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-traffic-unknown",
      category: "Blocking",
      fromNodeId: "node-lamp",
      toNodeId: "node-sofa",
      blockingType: "traffic",
      confidence: "unknown_not_inferable",
      provenance: "unknown_not_inferable",
    },
    {
      id: "rel-clearance-known",
      category: "Blocking",
      fromNodeId: "node-lamp",
      toNodeId: "node-sofa",
      blockingType: "clearance",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-mystery-unknown",
      category: "Adjacency",
      fromNodeId: "node-mystery",
      toNodeId: "node-room",
      confidence: "unknown_not_inferable",
      provenance: "unknown_not_inferable",
    },
  ],
};
