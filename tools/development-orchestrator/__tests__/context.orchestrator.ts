import path from "node:path";
import { describe, expect, it } from "vitest";
import { PACKAGE_ROOT } from "../src/package-root.js";
import { buildCatalog } from "../src/core/context/catalog.js";
import { extractKeywords, retrieveSections } from "../src/core/context/retriever.js";
import { buildContextManifest, buildContextPackage } from "../src/core/context/package-builder.js";
import { estimateTokens } from "../src/core/context/token-budget.js";

const DOCS_DIR = path.join(PACKAGE_ROOT, "fixtures", "safe-workspace", "docs");
const CHARS_PER_TOKEN = 4;

describe("token budget", () => {
  it("approximates tokens deterministically from character count", () => {
    expect(estimateTokens("abcd", 4)).toBe(1);
    expect(estimateTokens("abcde", 4)).toBe(2);
  });
});

describe("Context Catalog", () => {
  it("builds one catalog entry per fixture document, with sections and trust levels", () => {
    const catalog = buildCatalog(DOCS_DIR, CHARS_PER_TOKEN);
    expect(catalog.length).toBeGreaterThanOrEqual(3);
    expect(catalog.length).toBeLessThanOrEqual(5);
    const overview = catalog.find((source) => source.sourcePath.endsWith("overview.md"));
    expect(overview).toBeDefined();
    expect(overview?.trustLevel).toBe("high");
    expect(overview?.sections.length).toBeGreaterThan(0);
  });
});

describe("Section Retriever", () => {
  it("extracts non-trivial keywords from a one-line task, dropping stop words", () => {
    const keywords = extractKeywords("Create a short architecture note for feature X");
    expect(keywords).toContain("architecture");
    expect(keywords).toContain("feature");
    expect(keywords).not.toContain("for");
    expect(keywords).not.toContain("a");
  });

  it("selects relevant sections and excludes irrelevant ones by keyword score", () => {
    const catalog = buildCatalog(DOCS_DIR, CHARS_PER_TOKEN);
    const keywords = extractKeywords("Create a short architecture note for feature X");
    const result = retrieveSections(catalog, keywords, 5000);

    expect(result.selected.length).toBeGreaterThan(0);
    expect(result.selected.every((section) => section.score > 0)).toBe(true);

    const billingExcluded = result.excluded.find((item) => item.sourcePath.includes("unrelated-billing-notes"));
    expect(billingExcluded).toBeDefined();
    expect(billingExcluded?.reason).toBe("no_keyword_match");
  });

  it("respects the token budget, excluding sections that would exceed it", () => {
    const catalog = buildCatalog(DOCS_DIR, CHARS_PER_TOKEN);
    const keywords = extractKeywords("Create a short architecture note for feature X");
    const tinyBudget = retrieveSections(catalog, keywords, 1);

    expect(tinyBudget.tokensUsed).toBeLessThanOrEqual(1);
    const overBudget = tinyBudget.excluded.some((item) => item.reason === "token_budget_exceeded");
    expect(overBudget).toBe(true);
  });

  it("is deterministic across repeated calls with the same inputs", () => {
    const catalog = buildCatalog(DOCS_DIR, CHARS_PER_TOKEN);
    const keywords = extractKeywords("Create a short architecture note for feature X");
    const first = retrieveSections(catalog, keywords, 5000);
    const second = retrieveSections(catalog, keywords, 5000);
    expect(first.selected.map((s) => s.sectionRef)).toEqual(second.selected.map((s) => s.sectionRef));
  });
});

describe("Context Package / Manifest builders", () => {
  it("builds a package whose sections mirror the selected retrieval results", () => {
    const catalog = buildCatalog(DOCS_DIR, CHARS_PER_TOKEN);
    const keywords = extractKeywords("Create a short architecture note for feature X");
    const retrieval = retrieveSections(catalog, keywords, 5000);
    const contextPackage = buildContextPackage("task-1", "efficient", 5000, retrieval);

    expect(contextPackage.sections).toHaveLength(retrieval.selected.length);
    expect(contextPackage.tokensUsed).toBe(retrieval.tokensUsed);
  });

  it("builds a manifest recording provenance for both included and excluded sections", () => {
    const catalog = buildCatalog(DOCS_DIR, CHARS_PER_TOKEN);
    const keywords = extractKeywords("Create a short architecture note for feature X");
    const retrieval = retrieveSections(catalog, keywords, 5000);
    const manifest = buildContextManifest("task-1", "efficient", 5000, retrieval);

    expect(manifest.provenance.length).toBe(retrieval.selected.length + retrieval.excluded.length);
    expect(manifest.provenance.some((entry) => entry.sourceUseMode === "included")).toBe(true);
    expect(manifest.provenance.some((entry) => entry.sourceUseMode === "excluded")).toBe(true);
  });
});
