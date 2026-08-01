import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { validateWorkspace } from "../src/core/workspace/workspace-validator.js";
import { validateBaseline } from "../src/core/workspace/baseline-validator.js";

describe("validateWorkspace", () => {
  let dir: string;

  beforeEach(() => {
    dir = mkdtempSync(path.join(tmpdir(), "orch-workspace-"));
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it("accepts a plain directory with no secrets", () => {
    const result = validateWorkspace(dir);
    expect(result.valid).toBe(true);
    expect(result.secretsPresent).toBe(false);
  });

  it("rejects a non-existent path", () => {
    const result = validateWorkspace(path.join(dir, "does-not-exist"));
    expect(result.valid).toBe(false);
    expect(result.exists).toBe(false);
  });

  it("rejects a workspace exposing a top-level .env.local file", () => {
    writeFileSync(path.join(dir, ".env.local"), "SECRET=1");
    const result = validateWorkspace(dir);
    expect(result.valid).toBe(false);
    expect(result.secretsPresent).toBe(true);
    expect(result.offendingFiles).toContain(".env.local");
  });
});

describe("validateBaseline", () => {
  let dir: string;

  beforeEach(() => {
    dir = mkdtempSync(path.join(tmpdir(), "orch-baseline-"));
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it("reports UNKNOWN/UNAVAILABLE for a non-Git directory, never guessing", () => {
    const result = validateBaseline(dir);
    expect(result.isGitRepo).toBe(false);
    expect(result.branch).toBe("UNKNOWN");
    expect(result.baseCommit).toBe("UNAVAILABLE");
  });

  it("reads real branch and commit for an actual Git repository, read-only", () => {
    execFileSync("git", ["init", "--initial-branch=main", dir], { cwd: dir });
    execFileSync("git", ["config", "user.email", "test@example.com"], { cwd: dir });
    execFileSync("git", ["config", "user.name", "Test"], { cwd: dir });
    mkdirSync(path.join(dir, "docs"), { recursive: true });
    writeFileSync(path.join(dir, "docs", "a.md"), "# A\n");
    execFileSync("git", ["add", "."], { cwd: dir });
    execFileSync("git", ["commit", "-m", "initial"], { cwd: dir });

    const result = validateBaseline(dir);
    expect(result.isGitRepo).toBe(true);
    expect(result.branch).toBe("main");
    expect(result.baseCommit).toMatch(/^[0-9a-f]{40}$/);
  });
});
