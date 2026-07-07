import { describe, expect, it } from "vitest";

import { mapToDomainDecisions } from "./mapToDomainDecisions";
import { ROOM_NAMES, STYLE_DESCRIPTIONS, buildMyStylePart, hexToColorDescription } from "../../../prompts";
import type { RoomDetails } from "../../../prompts";

const FULL_DETAILS: RoomDetails = {
  wallColorHex: "0d47a1",
  wallFinish: ["matte paint", "wood panels"],
  floorMaterial: "oak",
  floorColorHex: "8b4513",
  tilezone: ["backsplash", "shower wall"],
  tileColorHex: "ffffff",
  furniture: ["sofa", "coffee table"],
  lighting: ["pendant lamp", "floor lamp"],
  appliances: ["fridge", "oven"],
  extraNotes: "keep the window unobstructed",
};

describe("mapToDomainDecisions (ED-003 bridge)", () => {
  it("maps a full RoomDetails set into the corresponding DomainDecision[]", () => {
    const decisions = mapToDomainDecisions(FULL_DETAILS, "kitchen", "minimalist");

    expect(decisions).toEqual([
      { element: "room", value: ROOM_NAMES.kitchen, sourceRule: null },
      { element: "style", value: STYLE_DESCRIPTIONS.minimalist, sourceRule: null },
      { element: "furniture", value: "sofa, coffee table", sourceRule: null },
      { element: "lighting", value: "pendant lamp, floor lamp", sourceRule: null },
      { element: "appliances", value: "fridge, oven", sourceRule: null },
      { element: "wallFinish", value: "matte paint, wood panels", sourceRule: null },
      { element: "tilezone", value: "backsplash, shower wall", sourceRule: null },
      { element: "wallColor", value: hexToColorDescription("0d47a1"), sourceRule: null },
      { element: "floorColor", value: hexToColorDescription("8b4513"), sourceRule: null },
      { element: "tileColor", value: hexToColorDescription("ffffff"), sourceRule: null },
      { element: "extraNotes", value: "keep the window unobstructed", sourceRule: null },
    ]);
  });

  it("does not create an element for empty or undefined optional fields", () => {
    const decisions = mapToDomainDecisions({}, "office", "scandinavian");

    expect(decisions).toEqual([
      { element: "room", value: ROOM_NAMES.office, sourceRule: null },
      { element: "style", value: STYLE_DESCRIPTIONS.scandinavian, sourceRule: null },
    ]);
  });

  it("treats explicit empty strings/arrays the same as absent fields", () => {
    const decisions = mapToDomainDecisions(
      {
        furniture: [],
        lighting: [],
        appliances: [],
        wallFinish: [],
        tilezone: [],
        wallColorHex: "",
        floorColorHex: "",
        tileColorHex: "",
        extraNotes: "",
      },
      "office",
      "scandinavian"
    );

    expect(decisions).toEqual([
      { element: "room", value: ROOM_NAMES.office, sourceRule: null },
      { element: "style", value: STYLE_DESCRIPTIONS.scandinavian, sourceRule: null },
    ]);
  });

  it("collapses each array field into a single DomainDecision, not one per item", () => {
    const decisions = mapToDomainDecisions(
      { furniture: ["sofa", "chair", "table"] },
      "living",
      "luxury"
    );

    const furnitureDecisions = decisions.filter((d) => d.element === "furniture");
    expect(furnitureDecisions).toHaveLength(1);
    expect(furnitureDecisions[0].value).toBe("sofa, chair, table");
  });

  it("always sets sourceRule to null", () => {
    const decisions = mapToDomainDecisions(FULL_DETAILS, "bedroom", "japandi");

    expect(decisions.length).toBeGreaterThan(0);
    for (const decision of decisions) {
      expect(decision.sourceRule).toBeNull();
    }
  });

  it("falls back gracefully for an unknown roomKey, matching prompts.ts fallback", () => {
    const decisions = mapToDomainDecisions({}, "not_a_real_room", "minimalist");

    expect(() => mapToDomainDecisions({}, "not_a_real_room", "minimalist")).not.toThrow();
    expect(decisions[0]).toEqual({ element: "room", value: "interior", sourceRule: null });
  });

  it("falls back gracefully for an unknown styleKey, matching prompts.ts fallback", () => {
    const decisions = mapToDomainDecisions({}, "office", "not_a_real_style");

    expect(() => mapToDomainDecisions({}, "office", "not_a_real_style")).not.toThrow();
    expect(decisions[1]).toEqual({
      element: "style",
      value: "not_a_real_style style",
      sourceRule: null,
    });
  });

  it("builds the style element via buildMyStylePart() for my_style, using hex color fields", () => {
    const details: Partial<RoomDetails> = { wallColorHex: "0d47a1", floorColorHex: "8b4513" };
    const decisions = mapToDomainDecisions(details, "living", "my_style");

    expect(decisions[1]).toEqual({
      element: "style",
      value: buildMyStylePart(details),
      sourceRule: null,
    });
  });

  it("produces elements in a fixed, deterministic order regardless of which fields are present", () => {
    const decisionsA = mapToDomainDecisions(FULL_DETAILS, "kitchen", "minimalist");
    const decisionsB = mapToDomainDecisions(FULL_DETAILS, "kitchen", "minimalist");
    expect(decisionsA.map((d) => d.element)).toEqual(decisionsB.map((d) => d.element));

    const partialOrder = mapToDomainDecisions(
      { extraNotes: "note", furniture: ["sofa"] },
      "office",
      "minimalist"
    ).map((d) => d.element);
    expect(partialOrder).toEqual(["room", "style", "furniture", "extraNotes"]);
  });

  it("never emits negative/mode/operation/aspectRatio/guidanceScale/structuredScene/projectDesignContext elements", () => {
    const decisions = mapToDomainDecisions(FULL_DETAILS, "kitchen", "minimalist");
    const excluded = [
      "negative",
      "mode",
      "operation",
      "aspectRatio",
      "guidanceScale",
      "structuredScene",
      "projectDesignContext",
    ];

    for (const element of decisions.map((d) => d.element)) {
      expect(excluded).not.toContain(element);
    }
  });
});
