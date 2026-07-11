/**
 * Step 6 fixture: a StructuredSceneV0 exercising `known_with_uncertainty`
 * on both node attributes and relations. All relations here are usable
 * (uncertain, not unknown), so answered results should disclose the
 * uncertainty via embedded evidence rather than exclude it.
 */

import type { StructuredSceneV0 } from "../../types";
import { STRUCTURED_SCENE_SCHEMA_VERSION } from "../../types";

export const uncertainConfidenceScene: StructuredSceneV0 = {
  schemaVersion: STRUCTURED_SCENE_SCHEMA_VERSION,
  roomId: "room-eh-003",
  sceneId: "scene-eh-003",
  sequence: 1,
  nodes: [
    {
      id: "node-room",
      category: "Room",
      spaceTypeId: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: "dining_room",
      },
      spatialExtent: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativeSize: "large" },
      },
    },
    {
      id: "node-window",
      category: "StructuralElement",
      typeLabel: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: "window",
      },
      approximatePlacement: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativePosition: "south wall" },
      },
      illuminationRelevance: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: true,
      },
    },
    {
      id: "node-bookshelf",
      category: "Object",
      typeLabel: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: "bookshelf",
      },
      approximatePlacement: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: { qualitativePosition: "near south wall" },
      },
      affordances: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
        value: ["storage", "illumination"],
      },
      illuminationRelevance: {
        confidence: "known_with_uncertainty",
        provenance: "inferred_assumption",
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
  ],
  relations: [
    {
      id: "rel-bookshelf-blocks-window-light",
      category: "Blocking",
      fromNodeId: "node-bookshelf",
      toNodeId: "node-window",
      blockingType: "light",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
    {
      id: "rel-lamp-blocks-sofa-traffic",
      category: "Blocking",
      fromNodeId: "node-lamp",
      toNodeId: "node-sofa",
      blockingType: "traffic",
      confidence: "known_with_uncertainty",
      provenance: "inferred_assumption",
    },
  ],
};
