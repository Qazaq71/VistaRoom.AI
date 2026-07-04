/**
 * The most basic unit of the Knowledge Base: anything that can be
 * identified, named, and described, regardless of domain. `KnowledgeFeature`
 * (`./Feature.ts`) is the only thing that extends it on DS-6.4.1 — no
 * other file, existing or planned, reads or produces a bare
 * `KnowledgeEntity` yet. See `./README.md`.
 *
 * Pure data — no methods, no validation, no default values.
 */
export type KnowledgeEntity = {
  readonly id: string;
  readonly type: string;
  readonly name: string;
  readonly description?: string;
  readonly tags?: readonly string[];
  readonly metadata?: Readonly<Record<string, unknown>>;
};
