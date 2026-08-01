import { RetrievalResult } from "./retriever.js";

export interface ContextPackageSection {
  readonly sourcePath: string;
  readonly sectionRef: string;
  readonly content: string;
  readonly trustLevel: "high" | "medium" | "low";
}

export interface ContextManifestEntry {
  readonly sourcePath: string;
  readonly sectionRef: string;
  readonly trustLevel: "high" | "medium" | "low";
  readonly score: number;
  readonly documentSha256: string;
  readonly sourceUseMode: "included" | "excluded";
  readonly reason?: string;
}

export interface ContextPackage {
  readonly taskId: string;
  readonly mode: "efficient" | "assurance";
  readonly sections: readonly ContextPackageSection[];
  readonly tokenBudget: number;
  readonly tokensUsed: number;
  readonly excludedSources: readonly { sourcePath: string; sectionRef: string; reason: string }[];
}

export interface ContextManifest {
  readonly taskId: string;
  readonly mode: "efficient" | "assurance";
  readonly tokenBudget: number;
  readonly tokensUsed: number;
  readonly provenance: readonly ContextManifestEntry[];
}

export function buildContextPackage(
  taskId: string,
  mode: "efficient" | "assurance",
  tokenBudget: number,
  retrieval: RetrievalResult
): ContextPackage {
  return {
    taskId,
    mode,
    tokenBudget,
    tokensUsed: retrieval.tokensUsed,
    sections: retrieval.selected.map((section) => ({
      sourcePath: section.sourcePath,
      sectionRef: section.sectionRef,
      content: section.content,
      trustLevel: section.trustLevel
    })),
    excludedSources: retrieval.excluded.map((item) => ({ ...item }))
  };
}

export function buildContextManifest(
  taskId: string,
  mode: "efficient" | "assurance",
  tokenBudget: number,
  retrieval: RetrievalResult
): ContextManifest {
  const provenance: ContextManifestEntry[] = [
    ...retrieval.selected.map((section) => ({
      sourcePath: section.sourcePath,
      sectionRef: section.sectionRef,
      trustLevel: section.trustLevel,
      score: section.score,
      documentSha256: section.documentSha256,
      sourceUseMode: "included" as const
    })),
    ...retrieval.excluded.map((item) => ({
      sourcePath: item.sourcePath,
      sectionRef: item.sectionRef,
      trustLevel: "low" as const,
      score: 0,
      documentSha256: "UNAVAILABLE",
      sourceUseMode: "excluded" as const,
      reason: item.reason
    }))
  ];
  return {
    taskId,
    mode,
    tokenBudget,
    tokensUsed: retrieval.tokensUsed,
    provenance
  };
}
