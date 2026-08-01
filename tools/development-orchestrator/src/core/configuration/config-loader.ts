import { readFileSync } from "node:fs";
import { StateCategory, StateDefinition, StateRegistry } from "../state-machine/contract.js";
import { PolicyConfig, TokenBudgetConfig } from "./types.js";

function readJsonConfig(filePath: string): unknown {
  let text: string;
  try {
    text = readFileSync(filePath, "utf8");
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`CONFIG_NOT_FOUND: '${filePath}' could not be read: ${detail}`);
  }
  try {
    return JSON.parse(text);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`CONFIG_INVALID: '${filePath}' is not valid JSON: ${detail}`);
  }
}

interface RawStateEntry {
  id: string;
  category: StateCategory;
  implemented: boolean;
  transitions?: string[];
}

interface RawWorkflowConfig {
  states: RawStateEntry[];
  mvp_stop_state: string;
}

export function loadStateRegistry(filePath: string): StateRegistry {
  const raw = readJsonConfig(filePath) as RawWorkflowConfig;
  if (!Array.isArray(raw.states) || raw.states.length === 0) {
    throw new Error(`CONFIG_INVALID: '${filePath}' declares no states`);
  }
  const states = new Map<string, StateDefinition>();
  for (const entry of raw.states) {
    if (states.has(entry.id)) {
      throw new Error(`CONFIG_INVALID: duplicate state id '${entry.id}' in '${filePath}'`);
    }
    states.set(entry.id, {
      id: entry.id,
      category: entry.category,
      implemented: Boolean(entry.implemented),
      transitions: entry.transitions ?? []
    });
  }
  if (!raw.mvp_stop_state || !states.has(raw.mvp_stop_state)) {
    throw new Error(`CONFIG_INVALID: mvp_stop_state '${String(raw.mvp_stop_state)}' is not a declared state`);
  }
  return { states, mvpStopState: raw.mvp_stop_state };
}

interface RawPolicyConfig {
  forbidden_path_segments?: string[];
  forbidden_git_operations?: string[];
  disallow_shell_execution_from_config?: boolean;
}

export function loadPolicyConfig(filePath: string): PolicyConfig {
  const raw = readJsonConfig(filePath) as RawPolicyConfig;
  return {
    forbiddenPathSegments: raw.forbidden_path_segments ?? [],
    forbiddenGitOperations: raw.forbidden_git_operations ?? [],
    disallowShellExecutionFromConfig: raw.disallow_shell_execution_from_config ?? true
  };
}

interface RawTokenBudgetConfig {
  chars_per_token: number;
  modes: Record<string, { context_selection_budget: number }>;
  default_mode: string;
}

export function loadTokenBudgetConfig(filePath: string): TokenBudgetConfig {
  const raw = readJsonConfig(filePath) as RawTokenBudgetConfig;
  const modes: Record<string, { contextSelectionBudget: number }> = {};
  for (const [mode, value] of Object.entries(raw.modes)) {
    modes[mode] = { contextSelectionBudget: value.context_selection_budget };
  }
  return {
    charsPerToken: raw.chars_per_token,
    modes,
    defaultMode: raw.default_mode
  };
}
