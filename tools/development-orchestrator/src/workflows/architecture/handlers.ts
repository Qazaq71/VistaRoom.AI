import { existsSync } from "node:fs";
import path from "node:path";
import { StateHandler, StopHandler } from "../../core/workflow-engine/engine.js";
import { validateWorkspace } from "../../core/workspace/workspace-validator.js";
import { validateBaseline } from "../../core/workspace/baseline-validator.js";
import { buildCatalog } from "../../core/context/catalog.js";
import { extractKeywords, retrieveSections } from "../../core/context/retriever.js";
import { buildContextManifest, buildContextPackage } from "../../core/context/package-builder.js";
import { authorDraft } from "../../core/connectors/mock-document-author.js";
import { buildTaskSpecification, renderTaskSpecificationMarkdown } from "./task-specification.js";
import { ARTIFACT_TYPES } from "./artifacts.js";
import { ROLES } from "./roles.js";
import { MVP_STATES } from "./states.js";
import { OrchestratorFailure, RunContext } from "./run-context.js";

export const handleCreated: StateHandler<RunContext> = (ctx) => {
  ctx.artifacts.writeJson(
    "run.json",
    ARTIFACT_TYPES.RUN_RECORD,
    MVP_STATES.CREATED,
    ROLES.WORKFLOW_ENGINE,
    {
      run_id: ctx.runId,
      status: "IN_PROGRESS",
      one_line_task: ctx.oneLineTask,
      mode: ctx.mode,
      started_at: new Date().toISOString()
    }
  );
  return { next: MVP_STATES.TASK_SPECIFICATION, event: "run_created" };
};

export const handleTaskSpecification: StateHandler<RunContext> = (ctx) => {
  const keywords = extractKeywords(ctx.oneLineTask);
  const spec = buildTaskSpecification(ctx.runId, ctx.oneLineTask, ctx.mode, keywords);
  ctx.taskSpecification = spec;
  ctx.artifacts.writeJson(
    "task-specification.json",
    ARTIFACT_TYPES.TASK_SPECIFICATION,
    MVP_STATES.TASK_SPECIFICATION,
    ROLES.WORKFLOW_ENGINE,
    spec
  );
  ctx.artifacts.writeText(
    "task-specification.md",
    ARTIFACT_TYPES.TASK_SPECIFICATION,
    MVP_STATES.TASK_SPECIFICATION,
    ROLES.WORKFLOW_ENGINE,
    renderTaskSpecificationMarkdown(spec)
  );
  return { next: MVP_STATES.SAFE_WORKSPACE_VALIDATION, event: "task_specification_created" };
};

export const handleSafeWorkspaceValidation: StateHandler<RunContext> = (ctx) => {
  const result = validateWorkspace(ctx.rawWorkspacePath);
  ctx.workspaceValidation = result;
  ctx.artifacts.writeJson(
    "workspace-validation.json",
    ARTIFACT_TYPES.WORKSPACE_VALIDATION_RECORD,
    MVP_STATES.SAFE_WORKSPACE_VALIDATION,
    ROLES.WORKFLOW_ENGINE,
    result
  );
  if (!result.valid) {
    throw new OrchestratorFailure(
      "SAFE_WORKSPACE_VALIDATION_FAILED",
      `Safe workspace validation failed: ${result.reasons.join(", ") || "unknown reason"}`
    );
  }
  ctx.workspacePath = result.workspacePath;
  return { next: MVP_STATES.BASELINE_VALIDATION, event: "workspace_validated" };
};

export const handleBaselineValidation: StateHandler<RunContext> = (ctx) => {
  if (!ctx.workspacePath) {
    throw new OrchestratorFailure("INTERNAL_STATE_ERROR", "Workspace path not set before BASELINE_VALIDATION");
  }
  const result = validateBaseline(ctx.workspacePath);
  ctx.baselineValidation = result;
  ctx.artifacts.writeJson(
    "baseline-validation.json",
    ARTIFACT_TYPES.BASELINE_RECORD,
    MVP_STATES.BASELINE_VALIDATION,
    ROLES.WORKFLOW_ENGINE,
    result
  );
  return { next: MVP_STATES.CONTEXT_SELECTION, event: "baseline_recorded" };
};

export const handleContextSelection: StateHandler<RunContext> = (ctx) => {
  if (!ctx.workspacePath || !ctx.taskSpecification) {
    throw new OrchestratorFailure("INTERNAL_STATE_ERROR", "Prerequisites missing before CONTEXT_SELECTION");
  }
  const docsDir = path.join(ctx.workspacePath, "docs");
  const catalog = existsSync(docsDir) ? buildCatalog(docsDir, ctx.tokenBudget.charsPerToken) : [];
  const budget = ctx.tokenBudget.modes[ctx.mode]?.contextSelectionBudget ?? ctx.tokenBudget.modes[ctx.tokenBudget.defaultMode]?.contextSelectionBudget ?? 2000;

  const retrieval = retrieveSections(catalog, ctx.taskSpecification.keywords, budget);
  const contextPackage = buildContextPackage(ctx.taskSpecification.taskId, ctx.mode, budget, retrieval);
  const contextManifest = buildContextManifest(ctx.taskSpecification.taskId, ctx.mode, budget, retrieval);

  ctx.contextPackage = contextPackage;
  ctx.contextManifest = contextManifest;

  ctx.artifacts.writeJson(
    "context-package.json",
    ARTIFACT_TYPES.CONTEXT_PACKAGE,
    MVP_STATES.CONTEXT_SELECTION,
    ROLES.CLAUDE_COWORK_MOCK,
    contextPackage
  );
  ctx.artifacts.writeJson(
    "context-manifest.json",
    ARTIFACT_TYPES.CONTEXT_MANIFEST,
    MVP_STATES.CONTEXT_SELECTION,
    ROLES.CLAUDE_COWORK_MOCK,
    contextManifest
  );
  return { next: MVP_STATES.AUTHORING, event: "context_package_built" };
};

export const handleAuthoring: StateHandler<RunContext> = (ctx) => {
  if (!ctx.taskSpecification || !ctx.contextPackage) {
    throw new OrchestratorFailure("INTERNAL_STATE_ERROR", "Prerequisites missing before AUTHORING");
  }
  const draft = authorDraft(ctx.taskSpecification, ctx.contextPackage);
  ctx.draft = draft;
  ctx.artifacts.writeText("draft.md", ARTIFACT_TYPES.DRAFT, MVP_STATES.AUTHORING, ROLES.CLAUDE_COWORK_MOCK, draft);
  return { next: MVP_STATES.ENGINEERING_REVIEW, event: "draft_authored" };
};

export const handleEngineeringReviewStop: StopHandler<RunContext> = (ctx) => {
  ctx.artifacts.writeJson(
    "run.json",
    ARTIFACT_TYPES.RUN_RECORD,
    MVP_STATES.ENGINEERING_REVIEW,
    ROLES.WORKFLOW_ENGINE,
    {
      run_id: ctx.runId,
      status: "STOPPED_AT_ENGINEERING_REVIEW",
      one_line_task: ctx.oneLineTask,
      mode: ctx.mode,
      final_state: MVP_STATES.ENGINEERING_REVIEW,
      artifacts: ctx.artifacts.list(),
      stopped_at: new Date().toISOString()
    }
  );
};
