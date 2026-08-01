import { appendFileSync } from "node:fs";

export interface AuditEvent {
  readonly timestamp: string;
  readonly run_id: string;
  readonly event_type: string;
  readonly state?: string;
  readonly detail?: Record<string, unknown>;
}

const SECRET_PATTERNS: readonly RegExp[] = [
  /sk-[A-Za-z0-9_-]{10,}/g,
  /AKIA[0-9A-Z]{16}/g,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g,
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
];

function redactString(value: string): string {
  let redacted = value;
  for (const pattern of SECRET_PATTERNS) {
    redacted = redacted.replace(pattern, "[REDACTED]");
  }
  return redacted;
}

/** Deep-redacts any secret-shaped string found anywhere in a JSON-serializable value. */
export function redactValue<T>(value: T): T {
  if (typeof value === "string") {
    return redactString(value) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => redactValue(item)) as unknown as T;
  }
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = redactValue(val);
    }
    return result as unknown as T;
  }
  return value;
}

export class AuditLog {
  constructor(
    private readonly filePath: string,
    private readonly runId: string
  ) {}

  append(event: Omit<AuditEvent, "timestamp" | "run_id">): AuditEvent {
    const record: AuditEvent = redactValue({
      timestamp: new Date().toISOString(),
      run_id: this.runId,
      ...event
    });
    appendFileSync(this.filePath, `${JSON.stringify(record)}\n`, "utf8");
    return record;
  }
}
