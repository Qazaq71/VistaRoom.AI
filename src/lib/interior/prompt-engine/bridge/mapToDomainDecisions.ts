import type { RoomDetails } from "../../../prompts";
import {
  ROOM_NAMES,
  STYLE_DESCRIPTIONS,
  buildMyStylePart,
  hexToColorDescription,
} from "../../../prompts";
import type { DomainDecision } from "../acs004-prompt-builder-rules/acs004-prompt-builder-rules.types";

/**
 * ED-003 bridge: converts production RoomDetails/room/style inputs into
 * DomainDecision[] for the Gate 1 ACS-004 pipeline (buildPromptDraft →
 * applyRules → format). Not wired into route.ts — see ADR-005 Integration
 * final TZ. Element order follows the ED-003 mapping table and is fixed
 * regardless of which optional fields are present.
 */
export function mapToDomainDecisions(
  details: Partial<RoomDetails>,
  room: string,
  style: string
): DomainDecision[] {
  const decisions: DomainDecision[] = [];

  decisions.push({
    element: "room",
    value: ROOM_NAMES[room] || "interior",
    sourceRule: null,
  });

  const isMyStyle = style === "my_style";
  decisions.push({
    element: "style",
    value: isMyStyle ? buildMyStylePart(details) : STYLE_DESCRIPTIONS[style] || style + " style",
    sourceRule: null,
  });

  if (details.furniture?.length) {
    decisions.push({ element: "furniture", value: details.furniture.join(", "), sourceRule: null });
  }

  if (details.lighting?.length) {
    decisions.push({ element: "lighting", value: details.lighting.join(", "), sourceRule: null });
  }

  if (details.appliances?.length) {
    decisions.push({ element: "appliances", value: details.appliances.join(", "), sourceRule: null });
  }

  if (details.wallFinish?.length) {
    decisions.push({ element: "wallFinish", value: details.wallFinish.join(", "), sourceRule: null });
  }

  if (details.tilezone?.length) {
    decisions.push({ element: "tilezone", value: details.tilezone.join(", "), sourceRule: null });
  }

  if (details.wallColorHex) {
    decisions.push({ element: "wallColor", value: hexToColorDescription(details.wallColorHex), sourceRule: null });
  }

  if (details.floorColorHex) {
    decisions.push({ element: "floorColor", value: hexToColorDescription(details.floorColorHex), sourceRule: null });
  }

  if (details.tileColorHex) {
    decisions.push({ element: "tileColor", value: hexToColorDescription(details.tileColorHex), sourceRule: null });
  }

  if (details.extraNotes) {
    decisions.push({ element: "extraNotes", value: details.extraNotes, sourceRule: null });
  }

  return decisions;
}
