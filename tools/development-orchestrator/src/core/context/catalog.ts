import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { estimateTokens } from "./token-budget.js";

export interface CatalogSection {
  readonly sectionRef: string;
  readonly heading: string;
  readonly content: string;
  readonly estimatedTokens: number;
}

export interface CatalogSource {
  readonly sourcePath: string;
  readonly title: string;
  readonly trustLevel: "high" | "medium" | "low";
  readonly tags: readonly string[];
  readonly dependencies: readonly string[];
  readonly documentSha256: string;
  readonly sections: readonly CatalogSection[];
}

interface FrontMatter {
  trustLevel: "high" | "medium" | "low";
  tags: string[];
  dependencies: string[];
}

const FRONT_MATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parseFrontMatter(raw: string): { frontMatter: FrontMatter; body: string } {
  const defaults: FrontMatter = { trustLevel: "medium", tags: [], dependencies: [] };
  const match = FRONT_MATTER_PATTERN.exec(raw);
  if (!match) {
    return { frontMatter: defaults, body: raw };
  }
  const block = match[1] ?? "";
  const frontMatter: FrontMatter = { ...defaults };
  for (const line of block.split(/\r?\n/)) {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) continue;
    const value = rest.join(":").trim();
    if (key.trim() === "trust_level" && (value === "high" || value === "medium" || value === "low")) {
      frontMatter.trustLevel = value;
    } else if (key.trim() === "tags") {
      frontMatter.tags = parseInlineArray(value);
    } else if (key.trim() === "dependencies") {
      frontMatter.dependencies = parseInlineArray(value);
    }
  }
  return { frontMatter, body: raw.slice(match[0].length) };
}

function parseInlineArray(value: string): string[] {
  const trimmed = value.trim().replace(/^\[/, "").replace(/\]$/, "");
  if (trimmed.length === 0) return [];
  return trimmed.split(",").map((item) => item.trim()).filter((item) => item.length > 0);
}

function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function splitSections(body: string): CatalogSection[] {
  const lines = body.split(/\r?\n/);
  const sections: CatalogSection[] = [];
  let currentHeading = "Introduction";
  let currentLines: string[] = [];

  const flush = () => {
    const content = currentLines.join("\n").trim();
    if (content.length > 0) {
      sections.push({
        sectionRef: slugify(currentHeading),
        heading: currentHeading,
        content,
        estimatedTokens: 0
      });
    }
    currentLines = [];
  };

  for (const line of lines) {
    const headingMatch = /^##\s+(.*)$/.exec(line);
    if (headingMatch) {
      flush();
      currentHeading = (headingMatch[1] ?? "").trim();
    } else if (!/^#\s+/.test(line)) {
      currentLines.push(line);
    }
  }
  flush();
  return sections;
}

function extractTitle(body: string, fallback: string): string {
  const titleMatch = /^#\s+(.*)$/m.exec(body);
  return titleMatch?.[1]?.trim() || fallback;
}

/** Builds the Context Catalog from every `.md` file directly inside `docsDir`. No embeddings, no vector DB. */
export function buildCatalog(docsDir: string, charsPerToken: number): CatalogSource[] {
  const catalog: CatalogSource[] = [];
  const entries = readdirSync(docsDir).filter((name) => name.endsWith(".md")).sort();
  for (const fileName of entries) {
    const fullPath = path.join(docsDir, fileName);
    const raw = readFileSync(fullPath, "utf8");
    const { frontMatter, body } = parseFrontMatter(raw);
    const sections = splitSections(body).map((section) => ({
      ...section,
      estimatedTokens: estimateTokens(section.content, charsPerToken)
    }));
    catalog.push({
      sourcePath: path.relative(path.dirname(docsDir), fullPath).split(path.sep).join("/"),
      title: extractTitle(body, fileName),
      trustLevel: frontMatter.trustLevel,
      tags: frontMatter.tags,
      dependencies: frontMatter.dependencies,
      documentSha256: createHash("sha256").update(raw).digest("hex"),
      sections
    });
  }
  return catalog;
}
