import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { PACKAGE_ROOT } from "../src/package-root.js";
import { runArchitectureWorkflow } from "../src/workflows/architecture/run.js";

const WORKSPACE = path.join(PACKAGE_ROOT, "fixtures", "safe-workspace");
const RUNS_ROOT = path.join(PACKAGE_ROOT, ".runs");

const REQUIRED_ARTIFACTS = [
  "run.json",
  "task-specification.json",
  "task-specification.md",
  "workspace-validation.json",
  "baseline-validation.json",
  "context-package.json",
  "context-manifest.json",
  "draft.md",
  "audit.jsonl"
];

describe("Architecture Workflow integration", () => {
  const createdRunDirs: string[] = [];

  afterEach(() => {
    for (const dir of createdRunDirs.splice(0)) {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("runs one-line task through to ENGINEERING_REVIEW and writes every required artifact", async () => {
    const runsBefore = existsSync(RUNS_ROOT) ? new Set(readdirSync(RUNS_ROOT)) : new Set<string>();

    const result = await runArchitectureWorkflow({
      task: "Create a short architecture note for feature X",
      workspacePath: WORKSPACE
    });
    createdRunDirs.push(result.runDir);

    expect(result.finalState).toBe("ENGINEERING_REVIEW");

    for (const fileName of REQUIRED_ARTIFACTS) {
      expect(existsSync(path.join(result.runDir, fileName)), `missing artifact ${fileName}`).toBe(true);
    }

    const run = JSON.parse(readFileSync(path.join(result.runDir, "run.json"), "utf8"));
    expect(run.status).toBe("STOPPED_AT_ENGINEERING_REVIEW");
    expect(run.final_state).toBe("ENGINEERING_REVIEW");

    const contextPackage = JSON.parse(readFileSync(path.join(result.runDir, "context-package.json"), "utf8"));
    expect(contextPackage.sections.length).toBeGreaterThan(0);

    const draft = readFileSync(path.join(result.runDir, "draft.md"), "utf8");
    expect(draft).toContain("Create a short architecture note for feature X");

    const auditLines = readFileSync(path.join(result.runDir, "audit.jsonl"), "utf8").trim().split("\n");
    expect(auditLines.length).toBeGreaterThan(0);
    const eventTypes = auditLines.map((line) => JSON.parse(line).event_type);
    expect(eventTypes).toContain("STATE_ENTER");
    expect(eventTypes).toContain("RUN_STOPPED_AT_MVP_BOUNDARY");
    expect(eventTypes).not.toContain("STATE_HANDLER_NOT_IMPLEMENTED");

    // No run directory other than this run's own should have been created by this test.
    const runsAfter = new Set(readdirSync(RUNS_ROOT));
    for (const entry of runsAfter) {
      if (!runsBefore.has(entry)) {
        expect(entry).toBe(path.basename(result.runDir));
      }
    }

    // Nothing should have been written into the safe workspace itself (read-only run).
    const workspaceEntries = readdirSync(WORKSPACE);
    expect(workspaceEntries).toEqual(["docs"]);
  });

  it("fails cleanly with a non-zero-friendly error when the workspace is invalid", async () => {
    const runsBefore = existsSync(RUNS_ROOT) ? new Set(readdirSync(RUNS_ROOT)) : new Set<string>();

    await expect(
      runArchitectureWorkflow({
        task: "Create a short architecture note for feature X",
        workspacePath: path.join(PACKAGE_ROOT, "fixtures", "does-not-exist")
      })
    ).rejects.toThrow(/SAFE_WORKSPACE_VALIDATION_FAILED|workspace_path_does_not_exist/);

    const runsAfter = existsSync(RUNS_ROOT) ? readdirSync(RUNS_ROOT) : [];
    for (const entry of runsAfter) {
      if (!runsBefore.has(entry)) {
        createdRunDirs.push(path.join(RUNS_ROOT, entry));
      }
    }
  });
});
