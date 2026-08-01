import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ArtifactManager } from "../src/core/artifacts/artifact-manager.js";
import { PolicyEngine, PathEscapeError } from "../src/core/policy/policy-engine.js";

const policy = new PolicyEngine({
  forbiddenPathSegments: [".git"],
  forbiddenGitOperations: [],
  disallowShellExecutionFromConfig: true
});

describe("ArtifactManager", () => {
  let runDir: string;

  beforeEach(() => {
    runDir = mkdtempSync(path.join(tmpdir(), "orch-artifacts-"));
  });

  afterEach(() => {
    rmSync(runDir, { recursive: true, force: true });
  });

  it("writes a JSON artifact inside the run directory and records its metadata", () => {
    const manager = new ArtifactManager(runDir, "run-1", policy);
    const record = manager.writeJson("run.json", "RunRecord", "CREATED", "WorkflowEngine", { ok: true });

    expect(existsSync(path.join(runDir, "run.json"))).toBe(true);
    expect(record).toMatchObject({
      run_id: "run-1",
      artifact_type: "RunRecord",
      producing_state: "CREATED",
      producing_role: "WorkflowEngine",
      revision: 1,
      path: "run.json"
    });
    const parsed = JSON.parse(readFileSync(path.join(runDir, "run.json"), "utf8"));
    expect(parsed).toEqual({ ok: true });
  });

  it("writes a text artifact and increments revision on repeated writes to the same file", () => {
    const manager = new ArtifactManager(runDir, "run-1", policy);
    manager.writeText("draft.md", "Draft", "AUTHORING", "ClaudeCowork(mock)", "first");
    const second = manager.writeText("draft.md", "Draft", "AUTHORING", "ClaudeCowork(mock)", "second");

    expect(second.revision).toBe(2);
    expect(readFileSync(path.join(runDir, "draft.md"), "utf8")).toBe("second");
  });

  it("refuses to write an artifact whose path escapes the run directory", () => {
    const manager = new ArtifactManager(runDir, "run-1", policy);
    expect(() => manager.writeText("../escape.md", "Draft", "AUTHORING", "ClaudeCowork(mock)", "x")).toThrow(
      PathEscapeError
    );
  });

  it("lists every artifact written so far", () => {
    const manager = new ArtifactManager(runDir, "run-1", policy);
    manager.writeJson("a.json", "A", "CREATED", "WorkflowEngine", {});
    manager.writeJson("b.json", "B", "CREATED", "WorkflowEngine", {});
    expect(manager.list()).toHaveLength(2);
  });
});
