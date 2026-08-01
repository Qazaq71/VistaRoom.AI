import { ArtifactManager } from "../../core/artifacts/artifact-manager.js";
import { AuditLog } from "../../core/audit/audit-log.js";
import { PolicyEngine } from "../../core/policy/policy-engine.js";
import { TokenBudgetConfig } from "../../core/configuration/types.js";
import { WorkspaceValidationResult } from "../../core/workspace/workspace-validator.js";
import { BaselineValidationResult } from "../../core/workspace/baseline-validator.js";
import { ContextManifest, ContextPackage } from "../../core/context/package-builder.js";
import { TaskSpecification } from "./task-specification.js";

export class OrchestratorFailure extends Error {
  constructor(
    public readonly code: string,
    message: string
  ) {
    super(message);
    this.name = "OrchestratorFailure";
  }
}

export interface RunContextInit {
  readonly runId: string;
  readonly runDir: string;
  readonly rawWorkspacePath: string;
  readonly oneLineTask: string;
  readonly mode: "efficient" | "assurance";
  readonly policy: PolicyEngine;
  readonly tokenBudget: TokenBudgetConfig;
  readonly artifacts: ArtifactManager;
  readonly audit: AuditLog;
}

/** Mutable bag of run state, filled in as each state handler completes. */
export class RunContext {
  readonly runId: string;
  readonly runDir: string;
  readonly rawWorkspacePath: string;
  readonly oneLineTask: string;
  readonly mode: "efficient" | "assurance";
  readonly policy: PolicyEngine;
  readonly tokenBudget: TokenBudgetConfig;
  readonly artifacts: ArtifactManager;
  readonly audit: AuditLog;

  workspacePath?: string;
  taskSpecification?: TaskSpecification;
  workspaceValidation?: WorkspaceValidationResult;
  baselineValidation?: BaselineValidationResult;
  contextPackage?: ContextPackage;
  contextManifest?: ContextManifest;
  draft?: string;

  constructor(init: RunContextInit) {
    this.runId = init.runId;
    this.runDir = init.runDir;
    this.rawWorkspacePath = init.rawWorkspacePath;
    this.oneLineTask = init.oneLineTask;
    this.mode = init.mode;
    this.policy = init.policy;
    this.tokenBudget = init.tokenBudget;
    this.artifacts = init.artifacts;
    this.audit = init.audit;
  }
}
