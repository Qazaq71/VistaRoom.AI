import path from "node:path";
import { describe, expect, it } from "vitest";
import { PACKAGE_ROOT } from "../src/package-root.js";
import { loadStateRegistry } from "../src/core/configuration/config-loader.js";
import { StateMachine } from "../src/core/state-machine/state-machine.js";
import { IllegalTransitionError, UnknownStateError } from "../src/core/state-machine/contract.js";

const CONFIG_PATH = path.join(PACKAGE_ROOT, "config", "architecture-workflow.json");

describe("StateMachine", () => {
  it("loads the full canonical registry without a hard-coded count", () => {
    const registry = loadStateRegistry(CONFIG_PATH);
    const machine = new StateMachine(registry);
    // The count is derived from the config, not asserted against a magic number here beyond
    // confirming the registry actually contains more than the MVP's own 7 implemented states.
    expect(machine.stateCount).toBeGreaterThan(7);
    expect(registry.states.has("CREATED")).toBe(true);
    expect(registry.states.has("COMPLETED")).toBe(true);
  });

  it("accepts a declared legal transition", () => {
    const machine = new StateMachine(loadStateRegistry(CONFIG_PATH));
    expect(() => machine.assertLegalTransition("CREATED", "TASK_SPECIFICATION")).not.toThrow();
  });

  it("rejects an illegal transition", () => {
    const machine = new StateMachine(loadStateRegistry(CONFIG_PATH));
    expect(() => machine.assertLegalTransition("CREATED", "ENGINEERING_REVIEW")).toThrow(IllegalTransitionError);
  });

  it("rejects a transition into an unknown state", () => {
    const machine = new StateMachine(loadStateRegistry(CONFIG_PATH));
    expect(() => machine.assertLegalTransition("CREATED", "NOT_A_REAL_STATE")).toThrow(UnknownStateError);
  });

  it("rejects looking up an unknown state directly", () => {
    const machine = new StateMachine(loadStateRegistry(CONFIG_PATH));
    expect(() => machine.getDefinition("NOT_A_REAL_STATE")).toThrow(UnknownStateError);
  });
});
