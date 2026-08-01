import { mkdtempSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  ForbiddenGitOperationError,
  ForbiddenPathSegmentError,
  PathEscapeError,
  PolicyEngine
} from "../src/core/policy/policy-engine.js";

const policy = new PolicyEngine({
  forbiddenPathSegments: [".git", ".env", "node_modules"],
  forbiddenGitOperations: ["commit", "push", "merge"],
  disallowShellExecutionFromConfig: true
});

describe("PolicyEngine", () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(path.join(tmpdir(), "orch-policy-"));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it("allows a path inside the allowed root", () => {
    const target = path.join(root, "artifact.json");
    expect(() => policy.assertWithinRoot(target, root, "artifact")).not.toThrow();
  });

  it("denies a traversal attempt out of the allowed root", () => {
    const target = path.join(root, "..", "escaped.json");
    expect(() => policy.assertWithinRoot(target, root, "artifact")).toThrow(PathEscapeError);
  });

  it("denies an absolute output path outside the allowed root", () => {
    const outside = mkdtempSync(path.join(tmpdir(), "orch-outside-"));
    try {
      expect(() => policy.assertWithinRoot(outside, root, "artifact")).toThrow(PathEscapeError);
    } finally {
      rmSync(outside, { recursive: true, force: true });
    }
  });

  it("denies a path containing a forbidden segment even if nominally inside root", () => {
    const target = path.join(root, "node_modules", "x.json");
    expect(() => policy.assertWithinRoot(target, root, "artifact")).toThrow(ForbiddenPathSegmentError);
  });

  it("denies a symlink that escapes the allowed root, when the platform permits creating one", () => {
    const outside = mkdtempSync(path.join(tmpdir(), "orch-outside-"));
    const linkPath = path.join(root, "escape-link");
    try {
      symlinkSync(outside, linkPath, "dir");
    } catch (error) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code === "EPERM" || code === "EACCES") {
        // Symlink creation requires elevated privileges on this platform (common on Windows
        // without Developer Mode). The escape-prevention logic itself is still exercised by
        // the traversal/absolute-path tests above; skip this specific case rather than fail.
        rmSync(outside, { recursive: true, force: true });
        return;
      }
      throw error;
    }
    const target = path.join(linkPath, "artifact.json");
    expect(() => policy.assertWithinRoot(target, root, "artifact")).toThrow(PathEscapeError);
    rmSync(outside, { recursive: true, force: true });
  });

  it("denies a forbidden Git mutation operation", () => {
    expect(() => policy.assertGitOperationAllowed("push")).toThrow(ForbiddenGitOperationError);
    expect(() => policy.assertGitOperationAllowed("commit")).toThrow(ForbiddenGitOperationError);
  });

  it("allows a Git operation not on the forbidden list", () => {
    expect(() => policy.assertGitOperationAllowed("rev-parse")).not.toThrow();
  });
});
