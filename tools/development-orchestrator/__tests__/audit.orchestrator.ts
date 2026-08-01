import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { AuditLog, redactValue } from "../src/core/audit/audit-log.js";

describe("AuditLog", () => {
  let dir: string;

  beforeEach(() => {
    dir = mkdtempSync(path.join(tmpdir(), "orch-audit-"));
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it("appends newline-delimited JSON events", () => {
    const log = new AuditLog(path.join(dir, "audit.jsonl"), "run-1");
    log.append({ event_type: "STATE_ENTER", state: "CREATED" });
    log.append({ event_type: "STATE_EXIT", state: "CREATED" });

    const lines = readFileSync(path.join(dir, "audit.jsonl"), "utf8").trim().split("\n");
    expect(lines).toHaveLength(2);
    const first = JSON.parse(lines[0] as string);
    expect(first.run_id).toBe("run-1");
    expect(first.event_type).toBe("STATE_ENTER");
    expect(typeof first.timestamp).toBe("string");
  });

  it("redacts a secret-shaped string before it reaches the log file", () => {
    const log = new AuditLog(path.join(dir, "audit.jsonl"), "run-1");
    log.append({ event_type: "RUN_FAILED", detail: { error: "leaked key sk-FAKE1234567890ABCDEF" } });

    const content = readFileSync(path.join(dir, "audit.jsonl"), "utf8");
    expect(content).not.toContain("sk-FAKE1234567890ABCDEF");
    expect(content).toContain("[REDACTED]");
  });

  it("redactValue deep-redacts nested structures", () => {
    const redacted = redactValue({ nested: { token: "AKIAABCDEFGHIJKLMNOP" }, list: ["sk-FAKE0000000000"] });
    expect(JSON.stringify(redacted)).not.toContain("AKIAABCDEFGHIJKLMNOP");
    expect(JSON.stringify(redacted)).not.toContain("sk-FAKE0000000000");
  });
});
