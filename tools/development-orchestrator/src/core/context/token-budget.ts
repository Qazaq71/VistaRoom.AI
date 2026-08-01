/** Deterministic token-budget approximation — no tokenizer dependency (MVP-Implementation-Handoff.md §5). */
export function estimateTokens(text: string, charsPerToken: number): number {
  return Math.ceil(text.length / charsPerToken);
}
