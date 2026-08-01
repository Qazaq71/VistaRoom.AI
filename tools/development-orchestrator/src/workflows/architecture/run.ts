import { mkdirSync } from "node:fs";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { PACKAGE_ROOT } from "../../package-root.js";
import { loadPolicyConfig, loadStateRegistry, loadTokenBudgetConfig } from "../../core/configuration/config-loader.js";
import { PolicyEngine } from "../../core/policy/policy-engine.js";
import { StateMachine } from "../../core/state-machine/state-machine.js";
import { WorkflowEngine } from "../../core/workflow-engine/engine.js";
import { AuditLog } from "../../core/audit/audit-log.js";
import { ArtifactManager } from "../../core/artifacts/artifact-manager.js";
import { RunContext } from "./run-context.js";
import { MVP_STATES } from "./states.js";
import {
  handleAuthoring,
  handleBaselineValidation,
  handleContextSelection,
  handleCreated,
  handleEngineeringReviewStop,
  handleSafeWorkspaceValidation,
  handleTaskSpecification
} from "./handlers.js";

export interface RunArchitectureWorkflowOptions {
  readonly task: string;
  readonly workspacePath: string;
  readonly mode?: "efficient" | "assurance";
}

export interface RunArchitectureWorkflowResult {
  readonly runId: string;
  readonly runDir: string;
  readonly finalState: string;
}

function generateRunId(): string {
  return `run-${Date.now()}-${randomBytes(3).toString("hex")}`;
}

export async function runArchitectureWorkflow(
  options: RunArchitectureWorkflowOptions
): Promise<RunArchitectureWorkflowResult> {
  const runId = generateRunId();
  const runsRoot = path.join(PACKAGE_ROOT, ".runs");
  const runDir = path.join(runsRoot, runId);
  mkdirSync(runDir, { recursive: true });

  const registry = loadStateRegistry(path.join(PACKAGE_ROOT, "config", "architecture-workflow.yaml"));
  const policyConfig = loadPolicyConfig(path.join(PACKAGE_ROOT, "config", "allowed-paths.yaml"));
  const tokenBudgetConfig = loadTokenBudgetConfig(path.join(PACKAGE_ROOT, "config", "token-budgets.yaml"));

  const policy = new PolicyEngine(policyConfig);
  const stateMachine = new StateMachine(registry);
  const audit = new AuditLog(path.join(runDir, "audit.jsonl"), runId);
  const artifacts = new ArtifactManager(runDir, runId, policy);

  const ctx = new RunContext({
    runId,
    runDir,
    rawWorkspacePath: options.workspacePath,
    oneLineTask: options.task,
    mode: options.mode ?? (tokenBudgetConfig.defaultMode as "efficient" | "assurance"),
    policy,
    tokenBudget: tokenBudgetConfig,
    artifacts,
    audit
  });

  const engine = new WorkflowEngine<RunContext>(stateMachine, audit);
  engine.register(MVP_STATES.CREATED, handleCreated);
  engine.register(MVP_STATES.TASK_SPECIFICATION, handleTaskSpecification);
  engine.register(MVP_STATES.SAFE_WORKSPACE_VALIDATION, handleSafeWorkspaceValidation);
  engine.register(MVP_STATES.BASELINE_VALIDATION, handleBaselineValidation);
  engine.register(MVP_STATES.CONTEXT_SELECTION, handleContextSelection);
  engine.register(MVP_STATES.AUTHORING, handleAuthoring);
  engine.registerStopHandler(handleEngineeringReviewStop);

  try {
    const result = await engine.run(MVP_STATES.CREATED, ctx);
    return { runId, runDir, finalState: result.finalState };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    audit.append({ event_type: "RUN_FAILED", detail: { error: message } });
    throw error;
  }
}
