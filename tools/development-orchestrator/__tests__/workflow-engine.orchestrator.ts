import path from "node:path";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { PACKAGE_ROOT } from "../src/package-root.js";
import { loadStateRegistry } from "../src/core/configuration/config-loader.js";
import { StateMachine } from "../src/core/state-machine/state-machine.js";
import { WorkflowEngine } from "../src/core/workflow-engine/engine.js";
import { AuditLog } from "../src/core/audit/audit-log.js";
import { StateHandlerNotImplementedError } from "../src/core/state-machine/contract.js";

const CONFIG_PATH = path.join(PACKAGE_ROOT, "config", "architecture-workflow.json");

describe("WorkflowEngine", () => {
  it("throws STATE_HANDLER_NOT_IMPLEMENTED for a registered-but-unimplemented state", async () => {
    const tmpDir = mkdtempSync(path.join(tmpdir(), "orch-engine-"));
    try {
      const registry = loadStateRegistry(CONFIG_PATH);
      const machine = new StateMachine(registry);
      const audit = new AuditLog(path.join(tmpDir, "audit.jsonl"), "test-run");
      const engine = new WorkflowEngine<Record<string, never>>(machine, audit);
      // No handlers registered at all — REVIEW_CONSOLIDATION is a real state, but this MVP
      // implements no handler for it, and it is not the MVP stop state.
      await expect(engine.run("REVIEW_CONSOLIDATION", {})).rejects.toThrow(StateHandlerNotImplementedError);
    } finally {
      rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it("stops cleanly at the configured MVP stop state even with no stop handler registered", async () => {
    const tmpDir = mkdtempSync(path.join(tmpdir(), "orch-engine-"));
    try {
      const registry = loadStateRegistry(CONFIG_PATH);
      const machine = new StateMachine(registry);
      const audit = new AuditLog(path.join(tmpDir, "audit.jsonl"), "test-run");
      const engine = new WorkflowEngine<Record<string, never>>(machine, audit);
      const result = await engine.run("ENGINEERING_REVIEW", {});
      expect(result.finalState).toBe("ENGINEERING_REVIEW");
    } finally {
      rmSync(tmpDir, { recursive: true, force: true });
    }
  });
});
