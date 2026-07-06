import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import path from "node:path";

import { format } from "../formatter";
import type {
  FormatterPromptDraft,
  FormatterResult,
  DecisionRecord,
} from "../formatter.types";

const REPO_ROOT = path.resolve(__dirname, "../../../../../..");

const TRACK1_PATHS = [
  "src/lib/interior/prompt-engine/types.ts",
  "src/lib/interior/prompt-engine/builder/PromptDraft.ts",
  "src/lib/interior/prompt-engine/builder/PromptDraftBuilder.ts",
  "src/lib/interior/prompt-engine/builder/PromptBuilder.ts",
  "src/lib/interior/prompt-engine/builder/PromptBuilderFactory.ts",
];

describe("ADR-005 Formatter contract (Gate 1)", () => {
  it("returns promptString:string and decisionTrace:DecisionRecord[]", () => {
    const draft: FormatterPromptDraft = {
      elements: [
        { element: "style", value: "scandinavian", sourceRule: "rule-style-01" },
        { element: "lighting", value: "warm ambient" },
      ],
    };

    const result: FormatterResult = format(draft, "provider-x");

    expect(typeof result.promptString).toBe("string");
    expect(Array.isArray(result.decisionTrace)).toBe(true);
  });

  it("produces DecisionRecords with exactly element, value, sourceRule", () => {
    const draft: FormatterPromptDraft = {
      elements: [
        { element: "style", value: "scandinavian", sourceRule: "rule-style-01" },
      ],
    };

    const { decisionTrace } = format(draft, "provider-x");

    expect(decisionTrace).toHaveLength(1);
    const record: DecisionRecord = decisionTrace[0];
    expect(Object.keys(record).sort()).toEqual(["element", "sourceRule", "value"]);
  });

  it("preserves an input-provided sourceRule as-is", () => {
    const draft: FormatterPromptDraft = {
      elements: [
        { element: "material", value: "oak veneer", sourceRule: "rule-material-07" },
      ],
    };

    const { decisionTrace } = format(draft, "provider-x");

    expect(decisionTrace[0].sourceRule).toBe("rule-material-07");
  });

  it("normalizes a missing sourceRule to null", () => {
    const draft: FormatterPromptDraft = {
      elements: [{ element: "layout", value: "open-plan" }],
    };

    const { decisionTrace } = format(draft, "provider-x");

    expect(decisionTrace[0].sourceRule).toBeNull();
  });

  it("normalizes an undefined sourceRule to null", () => {
    const draft: FormatterPromptDraft = {
      elements: [
        { element: "layout", value: "open-plan", sourceRule: undefined },
      ],
    };

    const { decisionTrace } = format(draft, "provider-x");

    expect(decisionTrace[0].sourceRule).toBeNull();
  });

  it("only considers the contract verified when sourceRule:null passes", () => {
    const draft: FormatterPromptDraft = {
      elements: [{ element: "color", value: "sage green", sourceRule: null }],
    };

    const { decisionTrace } = format(draft, "provider-x");

    expect(decisionTrace[0]).toEqual({
      element: "color",
      value: "sage green",
      sourceRule: null,
    });
  });

  it("never fabricates a sourceRule when none was supplied", () => {
    const draft: FormatterPromptDraft = {
      elements: [
        { element: "texture", value: "matte" },
        { element: "finish", value: "brushed brass", sourceRule: "rule-finish-02" },
      ],
    };

    const { decisionTrace } = format(draft, "provider-x");

    const fabricated = decisionTrace.some(
      (record) => record.sourceRule !== null && !["rule-finish-02"].includes(record.sourceRule)
    );
    expect(fabricated).toBe(false);
    expect(decisionTrace[0].sourceRule).not.toBe(undefined);
    expect(decisionTrace[0].sourceRule).toBeNull();
  });

  it("does not include colorTranslationStrategy anywhere in the result", () => {
    const draft: FormatterPromptDraft = {
      elements: [
        { element: "color", value: "sage green", sourceRule: "rule-color-03" },
      ],
    };

    const result = format(draft, "provider-x");

    expect(result).not.toHaveProperty("colorTranslationStrategy");
    for (const record of result.decisionTrace) {
      expect(record).not.toHaveProperty("colorTranslationStrategy");
    }
    expect(JSON.stringify(result)).not.toContain("colorTranslationStrategy");
  });

  it("does not modify Track-1 files (types.ts, builder/PromptDraft.ts, etc.)", () => {
    let diffOutput = "";
    try {
      diffOutput = execFileSync(
        "git",
        ["diff", "--name-only", "HEAD", "--", ...TRACK1_PATHS],
        { cwd: REPO_ROOT, encoding: "utf-8" }
      );
    } catch {
      // If git is unavailable in the test environment, skip this
      // repository-state check rather than fail the contract test.
      return;
    }

    expect(diffOutput.trim()).toBe("");
  });
});
