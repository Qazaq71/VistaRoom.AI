/**
 * Step 6 fixture: a fully-known StructuredSceneV0 exercising every
 * currently-supported query's happy path (Q1, Q2, Q3, Q6, Q7, Q8, Q9) with
 * no unknown_not_inferable branches. Hand-authored synthetic data only.
 */

import type { StructuredSceneV0 } from "../../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";

export const supportedCompleteScene: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-eh-001",
  sceneId: "scene-eh-001",
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
        value: { qualitativePosition: "in front of north wall" },
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
        provenance: "inferred_assumption",
        value: ["illumination"],
      },
      illuminationRelevance: {
        confidence: "known_with_confidence",
        provenance: "visually_observed",
        value: true,
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
        value: { qualitativePosition: "center of room, facing window" },
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
  ],
  relations: [
    {
      id: "rel-bookshelf-blocks-window-light",
      category: "Blocking",
      fromNodeId: "node-bookshelf",
      toNodeId: "node-window",
      blockingType: "light",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-sofa-blocks-traffic",
      category: "Blocking",
      fromNodeId: "node-sofa",
      toNodeId: "node-lamp",
      blockingType: "traffic",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-lamp-blocks-clearance",
      category: "Blocking",
      fromNodeId: "node-lamp",
      toNodeId: "node-sofa",
      blockingType: "clearance",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-sofa-adjacent-window",
      category: "Adjacency",
      fromNodeId: "node-sofa",
      toNodeId: "node-window",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
    {
      id: "rel-sofa-contained-room",
      category: "Containment",
      fromNodeId: "node-room",
      toNodeId: "node-sofa",
      confidence: "known_with_confidence",
      provenance: "visually_observed",
    },
  ],
};
