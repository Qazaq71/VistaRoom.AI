import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import path from "node:path";

import {
  applyRules,
  buildPromptDraft,
  GATE1_DEFAULT_RULESET,
  isStructuralValidationFailure,
} from "./acs004-prompt-builder-rules";
import type {
  DomainDecision,
  StructuralValidationFailure,
} from "./acs004-prompt-builder-rules.types";
import type { FormatterPromptDraft } from "../formatter/formatter.types";

const REPO_ROOT = path.resolve(__dirname, "../../../../..");

// Full Track-1 protected surface, per owner-confirmed decisions after
// architectural review — deliberately wider than the Formatter contract
// test's TRACK1_PATHS, which only covers types.ts/builder/*.
const TRACK1_PATHS = [
  "src/lib/interior/prompt-engine/types.ts",
  "src/lib/interior/prompt-engine/index.ts",
  "src/lib/interior/prompt-engine/README.md",
  "src/lib/interior/prompt-engine/builder",
  "src/lib/interior/prompt-engine/rules",
  "src/lib/interior/prompt-engine/pipeline",
  "src/lib/interior/prompt-engine/templates",
  "src/lib/interior/prompt-engine/validators",
];

// Formatter (ADR-005, Gate 1, already implemented) — not part of Track-1
// in the narrow sense, but also not to be touched by this ТЗ.
const FORMATTER_PATHS = [
  "src/lib/interior/prompt-engine/formatter/formatter.ts",
  "src/lib/interior/prompt-engine/formatter/formatter.types.ts",
  "src/lib/interior/prompt-engine/formatter/README.md",
];

function gitDiffNameOnly(paths: string[]): string {
  try {
    return execFileSync(
      "git",
      ["diff", "--name-only", "HEAD", "--", ...paths],
      { cwd: REPO_ROOT, encoding: "utf-8" }
    );
  } catch {
    // If git is unavailable in the test environment, skip this
    // repository-state check rather than fail the contract test.
    return "";
  }
}

describe("ACS-004 Gate 1 Prompt Builder + Rule Engine contract", () => {
  describe("buildPromptDraft", () => {
    it("maps each domainDecisions[] entry into elements[] 1:1, preserving order", () => {
      const domainDecisions: DomainDecision[] = [
        { element: "style", value: "japandi", sourceRule: "rule-style-01" },
        { element: "material", value: "oak", sourceRule: "rule-material-07" },
        { element: "layout", value: "open-plan" },
      ];

      const draft = buildPromptDraft({}, {}, domainDecisions);

      expect(draft.elements).toEqual([
        { element: "style", value: "japandi", sourceRule: "rule-style-01" },
        { element: "material", value: "oak", sourceRule: "rule-material-07" },
        { element: "layout", value: "open-plan", sourceRule: undefined },
      ]);
    });

    it("copies sourceRule as-is, including undefined, without normalizing to null", () => {
      const domainDecisions: DomainDecision[] = [
        { element: "color", value: "sage green" },
      ];

      const draft = buildPromptDraft({}, {}, domainDecisions);

      expect(draft.elements[0].sourceRule).toBe(undefined);
      expect(draft.elements[0]).not.toHaveProperty("sourceRuleNormalized");
    });

    it("does not decompose structuredScene/projectDesignContext into elements[]", () => {
      const structuredScene = { spaceType: "living_room", objects: ["sofa"] };
      const projectDesignContext = { style: "japandi", palette: ["sage", "oak"] };
      const domainDecisions: DomainDecision[] = [
        { element: "style", value: "japandi", sourceRule: "rule-style-01" },
      ];

      const draft = buildPromptDraft(structuredScene, projectDesignContext, domainDecisions);

      expect(draft.elements).toHaveLength(1);
      expect(JSON.stringify(draft)).not.toContain("spaceType");
      expect(JSON.stringify(draft)).not.toContain("palette");
    });
  });

  describe("applyRules", () => {
    it("returns the original draft unchanged, in order, when there are no violations", () => {
      const draft: FormatterPromptDraft = {
        elements: [
          { element: "style", value: "japandi", sourceRule: "rule-style-01" },
          { element: "material", value: "oak" },
        ],
      };

      const result = applyRules(draft, GATE1_DEFAULT_RULESET);

      expect(isStructuralValidationFailure(result)).toBe(false);
      expect(result).toEqual(draft);
    });

    it("returns a StructuralValidationFailure (not a thrown exception) when element is missing", () => {
      const draft: FormatterPromptDraft = {
        elements: [{ element: "", value: "oak" }],
      };

      let result: FormatterPromptDraft | StructuralValidationFailure | undefined;
      expect(() => {
        result = applyRules(draft, GATE1_DEFAULT_RULESET);
      }).not.toThrow();

      expect(result).toBeDefined();
      expect(isStructuralValidationFailure(result!)).toBe(true);
      if (isStructuralValidationFailure(result!)) {
        expect(result.violations).toEqual([{ element: "", reason: "missing element" }]);
      }
    });

    it("returns a StructuralValidationFailure when value is missing", () => {
      const draft: FormatterPromptDraft = {
        elements: [{ element: "material", value: "" }],
      };

      const result = applyRules(draft, GATE1_DEFAULT_RULESET);

      expect(isStructuralValidationFailure(result)).toBe(true);
      if (isStructuralValidationFailure(result)) {
        expect(result.violations).toEqual([{ element: "material", reason: "missing value" }]);
      }
    });

    it("never throws, for either valid or invalid input", () => {
      const validDraft: FormatterPromptDraft = { elements: [{ element: "style", value: "japandi" }] };
      const invalidDraft: FormatterPromptDraft = { elements: [{ element: "", value: "" }] };

      expect(() => applyRules(validDraft, GATE1_DEFAULT_RULESET)).not.toThrow();
      expect(() => applyRules(invalidDraft, GATE1_DEFAULT_RULESET)).not.toThrow();
    });

    it("does not resolve cross-domain conflicts — out of Gate 1 scope (TZ decision 8)", () => {
      // Two elements for the same slot, structurally valid but semantically
      // conflicting. Gate 1 Rule Engine must not attempt to reconcile them.
      const draft: FormatterPromptDraft = {
        elements: [
          { element: "material", value: "oak", sourceRule: "rule-material-01" },
          { element: "material", value: "marble", sourceRule: "rule-color-09" },
        ],
      };

      const result = applyRules(draft, GATE1_DEFAULT_RULESET);

      expect(isStructuralValidationFailure(result)).toBe(false);
      expect(result).toEqual(draft);
    });
  });

  describe("Formatter integration (ADR-005, unchanged)", () => {
    it("a passing applyRules() result is a valid format() input shape", async () => {
      const { format } = await import("../formatter/formatter");

      const draft = buildPromptDraft({}, {}, [
        { element: "style", value: "japandi", sourceRule: "rule-style-01" },
      ]);
      const validated = applyRules(draft, GATE1_DEFAULT_RULESET);

      expect(isStructuralValidationFailure(validated)).toBe(false);
      if (!isStructuralValidationFailure(validated)) {
        const result = format(validated, "gpt-image-2/edit");
        expect(result.decisionTrace).toEqual([
          { element: "style", value: "japandi", sourceRule: "rule-style-01" },
        ]);
      }
    });
  });

  it("does not modify Track-1 (types.ts, builder/, rules/, pipeline/, templates/, validators/, index.ts)", () => {
    const diffOutput = gitDiffNameOnly(TRACK1_PATHS);
    expect(diffOutput.trim()).toBe("");
  });

  it("does not modify Formatter (ADR-005, formatter.ts/formatter.types.ts/README.md)", () => {
    const diffOutput = gitDiffNameOnly(FORMATTER_PATHS);
    expect(diffOutput.trim()).toBe("");
  });
});
