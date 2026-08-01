import { describe, expect, it } from "vitest";
import { authorDraft } from "../src/core/connectors/mock-document-author.js";
import { buildTaskSpecification } from "../src/workflows/architecture/task-specification.js";
import { ContextPackage } from "../src/core/context/package-builder.js";

const task = buildTaskSpecification("task-1", "Create a short architecture note for feature X", "efficient", [
  "architecture",
  "feature"
]);

const contextPackage: ContextPackage = {
  taskId: "task-1",
  mode: "efficient",
  tokenBudget: 2000,
  tokensUsed: 42,
  sections: [
    { sourcePath: "docs/overview.md", sectionRef: "feature-x-summary", content: "Feature X summary content.", trustLevel: "high" }
  ],
  excludedSources: []
};

describe("mock document author connector", () => {
  it("is a pure deterministic function of its inputs", () => {
    const first = authorDraft(task, contextPackage);
    const second = authorDraft(task, contextPackage);
    expect(first).toBe(second);
  });

  it("references every selected source and section", () => {
    const draft = authorDraft(task, contextPackage);
    expect(draft).toContain("docs/overview.md");
    expect(draft).toContain("feature-x-summary");
  });

  it("never fabricates content when no context sections are available", () => {
    const empty: ContextPackage = { ...contextPackage, sections: [] };
    const draft = authorDraft(task, empty);
    expect(draft).toContain("Insufficient context to author content without inventing facts");
  });
});
