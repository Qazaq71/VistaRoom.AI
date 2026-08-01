import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { PACKAGE_ROOT } from "../src/package-root.js";
import { loadPolicyConfig, loadStateRegistry, loadTokenBudgetConfig } from "../src/core/configuration/config-loader.js";

const WORKFLOW_CONFIG_PATH = path.join(PACKAGE_ROOT, "config", "architecture-workflow.json");
const POLICY_CONFIG_PATH = path.join(PACKAGE_ROOT, "config", "allowed-paths.json");
const TOKEN_BUDGET_CONFIG_PATH = path.join(PACKAGE_ROOT, "config", "token-budgets.json");

describe("config-loader", () => {
  let dir: string;

  beforeEach(() => {
    dir = mkdtempSync(path.join(tmpdir(), "orch-config-"));
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it("loads the canonical state registry from the checked-in JSON config", () => {
    const registry = loadStateRegistry(WORKFLOW_CONFIG_PATH);
    expect(registry.states.has("CREATED")).toBe(true);
    expect(registry.mvpStopState).toBe("ENGINEERING_REVIEW");
  });

  it("loads the canonical policy config from the checked-in JSON config", () => {
    const policyConfig = loadPolicyConfig(POLICY_CONFIG_PATH);
    expect(policyConfig.forbiddenPathSegments).toContain(".git");
    expect(policyConfig.forbiddenGitOperations).toContain("push");
  });

  it("loads the canonical token budget config from the checked-in JSON config", () => {
    const tokenBudgetConfig = loadTokenBudgetConfig(TOKEN_BUDGET_CONFIG_PATH);
    expect(tokenBudgetConfig.defaultMode).toBe("efficient");
    expect(tokenBudgetConfig.modes.efficient?.contextSelectionBudget).toBe(2000);
  });

  it("throws CONFIG_NOT_FOUND for a missing config file", () => {
    const missingPath = path.join(dir, "does-not-exist.json");
    expect(() => loadStateRegistry(missingPath)).toThrow(/CONFIG_NOT_FOUND/);
  });

  it("throws CONFIG_INVALID for malformed JSON", () => {
    const malformedPath = path.join(dir, "malformed.json");
    writeFileSync(malformedPath, "{ not valid json", "utf8");
    expect(() => loadStateRegistry(malformedPath)).toThrow(/CONFIG_INVALID/);
  });

  it("throws CONFIG_INVALID when the state registry declares no states", () => {
    const emptyStatesPath = path.join(dir, "empty-states.json");
    writeFileSync(emptyStatesPath, JSON.stringify({ states: [], mvp_stop_state: "CREATED" }), "utf8");
    expect(() => loadStateRegistry(emptyStatesPath)).toThrow(/CONFIG_INVALID/);
  });

  it("throws CONFIG_INVALID when mvp_stop_state is not a declared state", () => {
    const badStopStatePath = path.join(dir, "bad-stop-state.json");
    writeFileSync(
      badStopStatePath,
      JSON.stringify({
        states: [{ id: "CREATED", category: "normal", implemented: true, transitions: [] }],
        mvp_stop_state: "NOT_A_REAL_STATE"
      }),
      "utf8"
    );
    expect(() => loadStateRegistry(badStopStatePath)).toThrow(/CONFIG_INVALID/);
  });

  it("throws CONFIG_INVALID for a duplicate state id", () => {
    const duplicateStatePath = path.join(dir, "duplicate-state.json");
    writeFileSync(
      duplicateStatePath,
      JSON.stringify({
        states: [
          { id: "CREATED", category: "normal", implemented: true, transitions: [] },
          { id: "CREATED", category: "normal", implemented: true, transitions: [] }
        ],
        mvp_stop_state: "CREATED"
      }),
      "utf8"
    );
    expect(() => loadStateRegistry(duplicateStatePath)).toThrow(/CONFIG_INVALID/);
  });

  it("applies defaults for an omitted policy config file", () => {
    const minimalPolicyPath = path.join(dir, "minimal-policy.json");
    writeFileSync(minimalPolicyPath, JSON.stringify({}), "utf8");
    const policyConfig = loadPolicyConfig(minimalPolicyPath);
    expect(policyConfig.forbiddenPathSegments).toEqual([]);
    expect(policyConfig.forbiddenGitOperations).toEqual([]);
    expect(policyConfig.disallowShellExecutionFromConfig).toBe(true);
  });
});
