#!/usr/bin/env node
import { runArchitectureWorkflow } from "./workflows/architecture/run.js";

interface ParsedArgs {
  readonly command: string | undefined;
  readonly workflow: string | undefined;
  readonly options: Readonly<Record<string, string>>;
}

function parseArgs(argv: readonly string[]): ParsedArgs {
  const [command, workflow, ...rest] = argv;
  const options: Record<string, string> = {};
  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i];
    if (token?.startsWith("--")) {
      const key = token.slice(2);
      const value = rest[i + 1];
      if (value === undefined || value.startsWith("--")) {
        throw new Error(`Missing value for --${key}`);
      }
      options[key] = value;
      i += 1;
    }
  }
  return { command, workflow, options };
}

function printUsage(): void {
  console.error("Usage: orchestrator run architecture --task <text> --workspace <path> --mode dry-run");
}

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  let parsed: ParsedArgs;
  try {
    parsed = parseArgs(argv);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    printUsage();
    process.exitCode = 1;
    return;
  }

  if (parsed.command !== "run" || parsed.workflow !== "architecture") {
    printUsage();
    process.exitCode = 1;
    return;
  }

  const task = parsed.options.task;
  const workspace = parsed.options.workspace;
  const mode = parsed.options.mode ?? "dry-run";

  if (!task || !workspace) {
    console.error("Missing required --task or --workspace");
    printUsage();
    process.exitCode = 1;
    return;
  }

  if (mode !== "dry-run") {
    console.error(`Unsupported mode '${mode}': only 'dry-run' is implemented in this MVP slice.`);
    process.exitCode = 1;
    return;
  }

  try {
    const result = await runArchitectureWorkflow({ task, workspacePath: workspace });
    console.log(
      JSON.stringify(
        { status: "OK", runId: result.runId, finalState: result.finalState, runDir: result.runDir },
        null,
        2
      )
    );
    process.exitCode = 0;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(JSON.stringify({ status: "ERROR", error: message }, null, 2));
    process.exitCode = 1;
  }
}

void main();
