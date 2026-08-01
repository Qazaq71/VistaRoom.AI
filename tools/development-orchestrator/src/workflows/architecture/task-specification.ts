export interface TaskSpecification {
  readonly taskId: string;
  readonly oneLineTask: string;
  readonly mode: "efficient" | "assurance";
  readonly riskClassification: "standard";
  readonly keywords: readonly string[];
}

export function buildTaskSpecification(
  taskId: string,
  oneLineTask: string,
  mode: "efficient" | "assurance",
  keywords: readonly string[]
): TaskSpecification {
  return {
    taskId,
    oneLineTask,
    mode,
    riskClassification: "standard",
    keywords
  };
}

export function renderTaskSpecificationMarkdown(spec: TaskSpecification): string {
  return [
    `# Task Specification — ${spec.taskId}`,
    "",
    `- One-line task: ${spec.oneLineTask}`,
    `- Mode: ${spec.mode}`,
    `- Risk classification: ${spec.riskClassification}`,
    `- Keywords: ${spec.keywords.length > 0 ? spec.keywords.join(", ") : "(none extracted)"}`,
    ""
  ].join("\n");
}
