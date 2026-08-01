/**
 * State IDs this MVP slice implements handlers for. These are references into the canonical
 * registry loaded from config/architecture-workflow.json at runtime — this file does not declare
 * the registry itself and does not assert a total state count (main document §23, ORCH-REV-006).
 */
export const MVP_STATES = {
  CREATED: "CREATED",
  TASK_SPECIFICATION: "TASK_SPECIFICATION",
  SAFE_WORKSPACE_VALIDATION: "SAFE_WORKSPACE_VALIDATION",
  BASELINE_VALIDATION: "BASELINE_VALIDATION",
  CONTEXT_SELECTION: "CONTEXT_SELECTION",
  AUTHORING: "AUTHORING",
  ENGINEERING_REVIEW: "ENGINEERING_REVIEW"
} as const;
