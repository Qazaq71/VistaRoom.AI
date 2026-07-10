import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { validateStructuredSceneBoundary } from "../validate";
import {
  boundaryValidComplete,
  boundaryValidPartial,
  invalidInventedCertainty,
  invalidMissingConfidence,
  invalidMissingIdentity,
  invalidMissingProvenance,
  invalidMissingSchemaVersion,
  invalidNotAnObjectArray,
  invalidNotAnObjectNull,
  invalidNotAnObjectPrimitive,
  invalidUnsupportedFieldExpansion,
  invalidUnsupportedNodeCategory,
  invalidUnsupportedRelationCategory,
  invalidWrongSchemaVersion,
} from "../fixtures";

function codesOf(result: ReturnType<typeof validateStructuredSceneBoundary>): readonly string[] {
  if (result.valid) return [];
  return result.violations.map((violation) => violation.code);
}

describe("Step 5 — Boundary Validator (Gate 2 C8)", () => {
  it("valid complete scene is accepted", () => {
    const result = validateStructuredSceneBoundary(boundaryValidComplete);
    expect(result.valid).toBe(true);
  });

  it("valid partial scene is accepted", () => {
    const result = validateStructuredSceneBoundary(boundaryValidPartial);
    expect(result.valid).toBe(true);
  });

  it("invalid (unsupported) schema version is rejected", () => {
    const result = validateStructuredSceneBoundary(invalidWrongSchemaVersion);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("unsupported_schema_version");
  });

  it("missing schema version is rejected", () => {
    const result = validateStructuredSceneBoundary(invalidMissingSchemaVersion);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("missing_schema_version");
  });

  it("unsupported node category is rejected", () => {
    const result = validateStructuredSceneBoundary(invalidUnsupportedNodeCategory);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("unsupported_node_category");
  });

  it("unsupported relation category is rejected", () => {
    const result = validateStructuredSceneBoundary(invalidUnsupportedRelationCategory);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("unsupported_relation_category");
  });

  it("missing required identity is rejected", () => {
    const result = validateStructuredSceneBoundary(invalidMissingIdentity);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("missing_identity");
  });

  it("missing confidence is rejected where required", () => {
    const result = validateStructuredSceneBoundary(invalidMissingConfidence);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("missing_confidence");
  });

  it("missing provenance is rejected where required", () => {
    const result = validateStructuredSceneBoundary(invalidMissingProvenance);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("missing_provenance");
  });

  it("structurally unsupported certainty state (invented certainty) is rejected", () => {
    const result = validateStructuredSceneBoundary(invalidInventedCertainty);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("invented_certainty");
  });

  it("unsupported field/category expansion is rejected because the Step 1 contract has no extension/metadata fields", () => {
    const result = validateStructuredSceneBoundary(invalidUnsupportedFieldExpansion);
    expect(result.valid).toBe(false);
    expect(codesOf(result)).toContain("unsupported_field_expansion");
  });

  it("a fully valid scene never triggers unsupported_field_expansion (expansion is rejected only when actually unsupported)", () => {
    const result = validateStructuredSceneBoundary(boundaryValidComplete);
    expect(result.valid).toBe(true);
    expect(codesOf(result)).not.toContain("unsupported_field_expansion");
  });

  it("unknown_not_inferable is accepted as a valid terminal state, not an error", () => {
    const result = validateStructuredSceneBoundary(boundaryValidPartial);
    expect(result.valid).toBe(true);
  });

  describe("arbitrary unknown inputs never throw and always return a BoundaryValidationResult", () => {
    const arbitraryInputs: ReadonlyArray<[string, unknown]> = [
      ["string primitive", invalidNotAnObjectPrimitive],
      ["null", invalidNotAnObjectNull],
      ["undefined", undefined],
      ["array", invalidNotAnObjectArray],
      ["empty object", {}],
      ["number", 42],
      ["boolean", true],
    ];

    for (const [label, input] of arbitraryInputs) {
      it(`does not throw for ${label}`, () => {
        expect(() => validateStructuredSceneBoundary(input)).not.toThrow();
        const result = validateStructuredSceneBoundary(input);
        expect(typeof result.valid).toBe("boolean");
        if (!result.valid) {
          expect(Array.isArray(result.violations)).toBe(true);
        }
      });
    }

    it('rejects non-object input with a "not_an_object" violation', () => {
      const result = validateStructuredSceneBoundary(invalidNotAnObjectPrimitive);
      expect(result.valid).toBe(false);
      expect(codesOf(result)).toContain("not_an_object");
    });
  });

  it("immutability: input is not mutated by validation", () => {
    const input = JSON.parse(JSON.stringify(boundaryValidComplete));
    const snapshot = JSON.parse(JSON.stringify(input));
    validateStructuredSceneBoundary(input);
    expect(input).toEqual(snapshot);
  });

  it("determinism: repeated calls with the same fixture return identical results", () => {
    const first = validateStructuredSceneBoundary(invalidUnsupportedNodeCategory);
    const second = validateStructuredSceneBoundary(invalidUnsupportedNodeCategory);
    expect(first).toEqual(second);

    const firstValid = validateStructuredSceneBoundary(boundaryValidComplete);
    const secondValid = validateStructuredSceneBoundary(boundaryValidComplete);
    expect(firstValid).toEqual(secondValid);
  });

  it("each violation has a machine-readable code and a human-readable message", () => {
    const result = validateStructuredSceneBoundary(invalidMissingSchemaVersion);
    expect(result.valid).toBe(false);
    if (result.valid) throw new Error("expected rejection");
    for (const violation of result.violations) {
      expect(typeof violation.code).toBe("string");
      expect(violation.code.length).toBeGreaterThan(0);
      expect(typeof violation.message).toBe("string");
      expect(violation.message.length).toBeGreaterThan(0);
      expect(typeof violation.path).toBe("string");
    }
  });

  it("a rejected result never carries repaired/normalized/enriched scene data", () => {
    const result = validateStructuredSceneBoundary(invalidMissingSchemaVersion);
    expect(result.valid).toBe(false);
    expect(Object.keys(result)).toEqual(["valid", "violations"]);
  });

  it("boundary-validator does not import from hybrid-validation and does not use normalizeObserved", () => {
    const filesToCheck = ["../validate.ts", "../types.ts", "../index.ts"];
    for (const relativeFile of filesToCheck) {
      const absolutePath = path.resolve(__dirname, relativeFile);
      const contents = readFileSync(absolutePath, "utf-8");
      expect(contents.includes("hybrid-validation")).toBe(false);
      expect(contents.includes("normalizeObserved")).toBe(false);
    }
  });
});
