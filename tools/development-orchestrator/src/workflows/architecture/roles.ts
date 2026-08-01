/** Role names used by this MVP slice's handlers (main document §9, scoped to what is actually implemented). */
export const ROLES = {
  WORKFLOW_ENGINE: "WorkflowEngine",
  CLAUDE_COWORK_MOCK: "ClaudeCowork(mock)"
} as const;

export type RoleName = (typeof ROLES)[keyof typeof ROLES];
