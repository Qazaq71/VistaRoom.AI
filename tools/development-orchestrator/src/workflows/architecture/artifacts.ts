/** Artifact type identifiers produced by this MVP slice (Artifact contract, MVP-Implementation-Handoff.md §2). */
export const ARTIFACT_TYPES = {
  RUN_RECORD: "RunRecord",
  TASK_SPECIFICATION: "TaskSpecification",
  WORKSPACE_VALIDATION_RECORD: "WorkspaceValidationRecord",
  BASELINE_RECORD: "BaselineRecord",
  CONTEXT_PACKAGE: "ContextPackage",
  CONTEXT_MANIFEST: "ContextManifest",
  DRAFT: "Draft"
} as const;
