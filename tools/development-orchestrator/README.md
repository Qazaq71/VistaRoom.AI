# VistaRoom Development Orchestrator — MVP Vertical Slice

Isolated, standalone, fully removable prototype of the Architecture Workflow described in
[`docs/architecture/development-orchestrator/`](../../docs/architecture/development-orchestrator/)
on the main VistaRoom AI repository. This package is **not** part of the VistaRoom AI product
runtime, is not a required workspace member, and can be deleted at any time with zero impact on
the product build, tests, or start scripts.

## What this slice does

Runs the first vertical slice from `MVP-Implementation-Handoff.md` §4 end-to-end:

```
one-line task
  → Task Specification
  → Safe Workspace Validation
  → Baseline Validation (read-only)
  → Context Selection (catalog + keyword retrieval + token budget)
  → Context Package / Context Manifest
  → deterministic Mock Document Author
  → Draft Artifact
  → ENGINEERING_REVIEW (clean stop)
```

It implements handlers for 7 of the states in the canonical Architecture Workflow State Registry
(main document §23); the full registry (all states and their declared transitions) is loaded from
`config/architecture-workflow.yaml` so the state machine can validate transitions and reject
illegal ones even for states this MVP does not yet execute. Reaching a state with no registered
handler returns `STATE_HANDLER_NOT_IMPLEMENTED` rather than silently doing nothing.

## Not implemented in this slice (by design)

- Real Git mutation, Change Bundle application, or any promotion-pipeline state
  (`CHANGE_BUNDLE_GENERATION` onward) — this MVP never writes to Git.
- Real Claude / OpenAI / Grok provider adapters — `AUTHORING` uses a deterministic, offline mock
  Document Author connector only.
- A production secret manager, database, UI, or queue/worker infrastructure.
- Development / Testing / Release Workflows — Architecture Workflow only.

## Install

```bash
cd tools/development-orchestrator
npm ci
```

## Test

```bash
npm test          # vitest — unit + integration tests
npm run typecheck # tsc --noEmit, strict mode
npm run build     # compiles src/ -> dist/
```

## CLI demo

```bash
npm run orchestrator -- run architecture \
  --task "Create a short architecture note for feature X" \
  --workspace ./fixtures/safe-workspace \
  --mode dry-run
```

Exits `0` and prints the run ID, final state (`ENGINEERING_REVIEW`), and run directory on success.
Every run's artifacts and audit log are written under `.runs/<run-id>/` inside this package
(git-ignored) — never outside this package, and never inside the safe workspace itself.

## Removability

This package has its own `package.json`, lockfile, `tsconfig.json`, and test suite. It is not
registered as a workspace member of the root `package.json`, and no root script, config, or
product source file references it. Deleting `tools/development-orchestrator/` entirely has no
effect on the VistaRoom AI product build, start script, or test suite.
