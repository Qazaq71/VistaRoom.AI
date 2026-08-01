import { ContextPackage } from "../context/package-builder.js";
import { TaskSpecification } from "../../workflows/architecture/task-specification.js";

/**
 * Deterministic, offline mock of the Document Author role (main document §9). No network,
 * no API keys, no randomness — the same TaskSpecification + ContextPackage always produce
 * byte-identical output, which is what the integration test relies on.
 */
export function authorDraft(task: TaskSpecification, contextPackage: ContextPackage): string {
  const lines: string[] = [];
  lines.push(`# Draft: ${task.oneLineTask}`);
  lines.push("");
  lines.push("## Task Specification");
  lines.push(`- Task ID: ${task.taskId}`);
  lines.push(`- Mode: ${task.mode}`);
  lines.push(`- Risk classification: ${task.riskClassification}`);
  lines.push("");
  lines.push("## Approach");
  if (contextPackage.sections.length === 0) {
    lines.push("No context sections met the retrieval threshold; this draft is scope-only and requires a context_request before further authoring.");
  } else {
    lines.push(`Synthesized from ${contextPackage.sections.length} selected context section(s), within a ${contextPackage.tokenBudget}-token budget (${contextPackage.tokensUsed} used):`);
    lines.push("");
    for (const section of contextPackage.sections) {
      lines.push(`- \`${section.sourcePath}\` § ${section.sectionRef} (trust: ${section.trustLevel})`);
    }
  }
  lines.push("");
  lines.push("## Draft Content");
  if (contextPackage.sections.length === 0) {
    lines.push("_Insufficient context to author content without inventing facts._");
  } else {
    for (const section of contextPackage.sections) {
      const excerpt = section.content.split(/\r?\n/)[0]?.trim() ?? "";
      lines.push(`### ${section.sectionRef}`);
      lines.push(excerpt.length > 0 ? excerpt : "_(section has no leading text)_");
      lines.push("");
    }
  }
  lines.push("## Sources Used");
  if (contextPackage.sections.length === 0) {
    lines.push("None.");
  } else {
    for (const section of contextPackage.sections) {
      lines.push(`- ${section.sourcePath}#${section.sectionRef}`);
    }
  }
  lines.push("");
  lines.push("## Open Questions");
  lines.push("None recorded by this deterministic mock author.");
  lines.push("");
  return lines.join("\n");
}
