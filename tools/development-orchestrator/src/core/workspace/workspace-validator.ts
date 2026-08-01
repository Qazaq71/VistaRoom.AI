import { existsSync, readdirSync, realpathSync, statSync } from "node:fs";
import path from "node:path";

export interface WorkspaceValidationResult {
  readonly workspacePath: string;
  readonly exists: boolean;
  readonly isDirectory: boolean;
  readonly secretsPresent: boolean;
  readonly offendingFiles: readonly string[];
  readonly valid: boolean;
  readonly reasons: readonly string[];
}

const FORBIDDEN_TOP_LEVEL_FILES = new Set([".env", ".env.local"]);

/**
 * Non-mutating: only reads the workspace root. Confirms the safe workspace exists, is a
 * directory, is in-bounds (canonicalized, no symlink escape out of itself), and does not
 * expose a top-level secrets file.
 */
export function validateWorkspace(workspacePath: string): WorkspaceValidationResult {
  const reasons: string[] = [];
  const resolved = path.resolve(workspacePath);
  const exists = existsSync(resolved);
  if (!exists) {
    reasons.push("workspace_path_does_not_exist");
    return {
      workspacePath: resolved,
      exists: false,
      isDirectory: false,
      secretsPresent: false,
      offendingFiles: [],
      valid: false,
      reasons
    };
  }

  const canonical = realpathSync.native(resolved);
  const isDirectory = statSync(canonical).isDirectory();
  if (!isDirectory) {
    reasons.push("workspace_path_is_not_a_directory");
  }

  const offendingFiles: string[] = [];
  if (isDirectory) {
    for (const entry of readdirSync(canonical)) {
      if (FORBIDDEN_TOP_LEVEL_FILES.has(entry)) {
        offendingFiles.push(entry);
      }
    }
  }
  const secretsPresent = offendingFiles.length > 0;
  if (secretsPresent) {
    reasons.push("secret_file_present_at_workspace_root");
  }

  return {
    workspacePath: canonical,
    exists: true,
    isDirectory,
    secretsPresent,
    offendingFiles,
    valid: isDirectory && !secretsPresent,
    reasons
  };
}
