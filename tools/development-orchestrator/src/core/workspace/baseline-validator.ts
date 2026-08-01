import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

export interface BaselineValidationResult {
  readonly isGitRepo: boolean;
  readonly branch: string;
  readonly baseCommit: string;
}

/**
 * Read-only. Never mutates the workspace and never invokes a Git subcommand capable of
 * mutation — only `git rev-parse` (branch/HEAD reads). If the workspace has no `.git`,
 * or reads fail for any reason, records the honest "UNKNOWN"/"UNAVAILABLE" per
 * MVP-Implementation-Handoff.md §3 — provenance is never guessed.
 */
export function validateBaseline(workspacePath: string): BaselineValidationResult {
  const gitDir = path.join(workspacePath, ".git");
  if (!existsSync(gitDir)) {
    return { isGitRepo: false, branch: "UNKNOWN", baseCommit: "UNAVAILABLE" };
  }

  try {
    const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: workspacePath,
      encoding: "utf8"
    }).trim();
    const baseCommit = execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: workspacePath,
      encoding: "utf8"
    }).trim();
    return { isGitRepo: true, branch: branch || "UNKNOWN", baseCommit: baseCommit || "UNAVAILABLE" };
  } catch {
    return { isGitRepo: true, branch: "UNKNOWN", baseCommit: "UNAVAILABLE" };
  }
}
