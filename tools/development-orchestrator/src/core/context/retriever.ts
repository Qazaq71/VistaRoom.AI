import { CatalogSource } from "./catalog.js";

export interface RetrievedSection {
  readonly sourcePath: string;
  readonly sectionRef: string;
  readonly heading: string;
  readonly content: string;
  readonly trustLevel: "high" | "medium" | "low";
  readonly documentSha256: string;
  readonly score: number;
  readonly estimatedTokens: number;
}

export interface ExcludedSection {
  readonly sourcePath: string;
  readonly sectionRef: string;
  readonly reason: "no_keyword_match" | "token_budget_exceeded";
}

export interface RetrievalResult {
  readonly selected: readonly RetrievedSection[];
  readonly excluded: readonly ExcludedSection[];
  readonly tokensUsed: number;
}

const STOP_WORDS = new Set([
  "a", "an", "the", "for", "and", "or", "of", "to", "in", "on", "with", "short", "note", "create"
]);

export function extractKeywords(taskText: string): string[] {
  const words = taskText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
  return Array.from(new Set(words));
}

function scoreSection(heading: string, content: string, keywords: readonly string[]): number {
  const haystack = `${heading} ${content}`.toLowerCase();
  let score = 0;
  for (const keyword of keywords) {
    const occurrences = haystack.split(keyword).length - 1;
    score += occurrences;
  }
  return score;
}

/**
 * Section-level retrieval by deterministic keyword scoring — no embeddings, no vector DB.
 * Ties break by (sourcePath, sectionRef) for reproducibility.
 */
export function retrieveSections(
  catalog: readonly CatalogSource[],
  keywords: readonly string[],
  tokenBudget: number
): RetrievalResult {
  const scored = catalog.flatMap((source) =>
    source.sections.map((section) => ({
      sourcePath: source.sourcePath,
      sectionRef: section.sectionRef,
      heading: section.heading,
      content: section.content,
      trustLevel: source.trustLevel,
      documentSha256: source.documentSha256,
      estimatedTokens: section.estimatedTokens,
      score: scoreSection(section.heading, section.content, keywords)
    }))
  );

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.sourcePath !== b.sourcePath) return a.sourcePath.localeCompare(b.sourcePath);
    return a.sectionRef.localeCompare(b.sectionRef);
  });

  const selected: RetrievedSection[] = [];
  const excluded: ExcludedSection[] = [];
  let tokensUsed = 0;

  for (const candidate of scored) {
    if (candidate.score <= 0) {
      excluded.push({ sourcePath: candidate.sourcePath, sectionRef: candidate.sectionRef, reason: "no_keyword_match" });
      continue;
    }
    if (tokensUsed + candidate.estimatedTokens > tokenBudget) {
      excluded.push({ sourcePath: candidate.sourcePath, sectionRef: candidate.sectionRef, reason: "token_budget_exceeded" });
      continue;
    }
    selected.push(candidate);
    tokensUsed += candidate.estimatedTokens;
  }

  return { selected, excluded, tokensUsed };
}
