import { existsSync, realpathSync } from "node:fs";
import path from "node:path";
import { PolicyConfig } from "../configuration/types.js";

export class PathEscapeError extends Error {
  constructor(label: string, candidate: string, root: string) {
    super(`PATH_ESCAPE_DENIED: ${label} '${candidate}' resolves outside allowed root '${root}'`);
    this.name = "PathEscapeError";
  }
}

export class ForbiddenPathSegmentError extends Error {
  constructor(label: string, segment: string) {
    super(`FORBIDDEN_PATH_SEGMENT: ${label} contains forbidden segment '${segment}'`);
    this.name = "ForbiddenPathSegmentError";
  }
}

export class ForbiddenGitOperationError extends Error {
  constructor(operation: string) {
    super(`FORBIDDEN_GIT_OPERATION_DENIED: '${operation}' is a mutating Git operation and is never permitted from this package`);
    this.name = "ForbiddenGitOperationError";
  }
}

/**
 * Resolves a path to its canonical (symlink-free) real form even when the
 * final path segment does not exist yet (e.g. a file about to be written).
 * Walks up to the nearest existing ancestor, realpath()'s that ancestor
 * (collapsing any symlink/reparse point in the existing chain), then
 * rejoins the non-existent tail. This is what lets escape checks catch a
 * symlink planted inside an otherwise-allowed root.
 */
function resolveCanonical(candidate: string): string {
  let current = path.resolve(candidate);
  const tail: string[] = [];
  while (!existsSync(current)) {
    const parent = path.dirname(current);
    if (parent === current) {
      // Nothing on this path exists; resolve() already normalized it.
      return path.resolve(candidate);
    }
    tail.unshift(path.basename(current));
    current = parent;
  }
  const real = realpathSync.native(current);
  return tail.length > 0 ? path.join(real, ...tail) : real;
}

export class PolicyEngine {
  constructor(private readonly config: PolicyConfig) {}

  /** Canonicalizes and verifies `candidate` is inside `root` (which must exist). */
  assertWithinRoot(candidate: string, root: string, label: string): string {
    const resolvedRoot = realpathSync.native(path.resolve(root));
    const resolvedCandidate = resolveCanonical(candidate);
    const relative = path.relative(resolvedRoot, resolvedCandidate);
    const escapes = relative.startsWith("..") || path.isAbsolute(relative);
    if (escapes) {
      throw new PathEscapeError(label, candidate, resolvedRoot);
    }
    this.assertNoForbiddenSegment(resolvedCandidate, label);
    return resolvedCandidate;
  }

  assertNoForbiddenSegment(candidate: string, label: string): void {
    const segments = candidate.split(path.sep);
    for (const forbidden of this.config.forbiddenPathSegments) {
      if (segments.includes(forbidden)) {
        throw new ForbiddenPathSegmentError(label, forbidden);
      }
    }
  }

  assertGitOperationAllowed(operation: string): void {
    if (this.config.forbiddenGitOperations.includes(operation)) {
      throw new ForbiddenGitOperationError(operation);
    }
  }
}
