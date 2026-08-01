import { writeFileSync } from "node:fs";
import path from "node:path";
import { PolicyEngine } from "../policy/policy-engine.js";
import { WorkflowState } from "../state-machine/contract.js";

export interface ArtifactMetadata {
  readonly run_id: string;
  readonly artifact_type: string;
  readonly producing_state: WorkflowState;
  readonly producing_role: string;
  readonly created_at: string;
  readonly revision: number;
}

export interface ArtifactRecord extends ArtifactMetadata {
  readonly path: string;
}

/**
 * Writes run artifacts, always inside the run directory (policy-enforced), and keeps
 * an in-memory ledger of every artifact's metadata for run.json's `artifacts` list.
 */
export class ArtifactManager {
  private readonly records: ArtifactRecord[] = [];
  private readonly revisions = new Map<string, number>();

  constructor(
    private readonly runDir: string,
    private readonly runId: string,
    private readonly policy: PolicyEngine
  ) {}

  writeJson(
    fileName: string,
    artifactType: string,
    producingState: WorkflowState,
    producingRole: string,
    data: unknown
  ): ArtifactRecord {
    return this.write(fileName, artifactType, producingState, producingRole, `${JSON.stringify(data, null, 2)}\n`);
  }

  writeText(
    fileName: string,
    artifactType: string,
    producingState: WorkflowState,
    producingRole: string,
    content: string
  ): ArtifactRecord {
    return this.write(fileName, artifactType, producingState, producingRole, content);
  }

  private write(
    fileName: string,
    artifactType: string,
    producingState: WorkflowState,
    producingRole: string,
    content: string
  ): ArtifactRecord {
    const targetPath = path.join(this.runDir, fileName);
    const resolvedPath = this.policy.assertWithinRoot(targetPath, this.runDir, `artifact '${fileName}'`);
    writeFileSync(resolvedPath, content, "utf8");

    const revision = (this.revisions.get(fileName) ?? 0) + 1;
    this.revisions.set(fileName, revision);

    const record: ArtifactRecord = {
      run_id: this.runId,
      artifact_type: artifactType,
      producing_state: producingState,
      producing_role: producingRole,
      created_at: new Date().toISOString(),
      revision,
      path: fileName
    };
    this.records.push(record);
    return record;
  }

  list(): readonly ArtifactRecord[] {
    return this.records;
  }
}
