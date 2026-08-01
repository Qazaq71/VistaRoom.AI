export interface PolicyConfig {
  readonly forbiddenPathSegments: readonly string[];
  readonly forbiddenGitOperations: readonly string[];
  readonly disallowShellExecutionFromConfig: boolean;
}

export interface TokenBudgetConfig {
  readonly charsPerToken: number;
  readonly modes: Readonly<Record<string, { contextSelectionBudget: number }>>;
  readonly defaultMode: string;
}
