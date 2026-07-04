/**
 * Every knowledge domain the Knowledge Base is split into. Mirrors the
 * sub-directories of `./` (`styles`, `materials`, `furniture`, ...). Used
 * only as a tag on `KnowledgeReference` and on each domain's own knowledge
 * type — nothing here reads it to make decisions.
 */
export type KnowledgeCategory =
  | "style"
  | "materials"
  | "furniture"
  | "lighting"
  | "decor"
  | "colors"
  | "composition"
  | "constraints"
  | "rendering"
  | "architecture"
  | "space"
  | "mood"
  | "quality";

/**
 * Universal pointer from one knowledge entry to another, used so
 * `StyleKnowledge` (and, later, other domains) can *reference* knowledge
 * that lives in a different domain module instead of duplicating it
 * in-line. Resolving a reference to its full entry is the job of a future
 * consumer (e.g. Prompt Builder) — the Knowledge Base itself never
 * resolves it.
 */
export type KnowledgeReference = {
  readonly id: string;
  readonly name: string;
  readonly category: KnowledgeCategory;
  readonly weight?: number;
  readonly notes?: string;
};

/**
 * One `KnowledgeReference[]` per domain a style can draw on. Every array
 * may be empty — a style is not required to reference every domain.
 */
export type StyleKnowledgeRefs = {
  readonly materials: readonly KnowledgeReference[];
  readonly furniture: readonly KnowledgeReference[];
  readonly lighting: readonly KnowledgeReference[];
  readonly decor: readonly KnowledgeReference[];
  readonly colors: readonly KnowledgeReference[];
  readonly composition: readonly KnowledgeReference[];
  readonly constraints: readonly KnowledgeReference[];
  readonly rendering: readonly KnowledgeReference[];
  readonly architecture: readonly KnowledgeReference[];
  readonly space: readonly KnowledgeReference[];
  readonly mood: readonly KnowledgeReference[];
  readonly quality: readonly KnowledgeReference[];
};

/**
 * Short, hand-written text fragments a future Prompt Domain/Prompt Engine
 * consumer could assemble into a prompt. Plain data — the Knowledge Base
 * does not concatenate, order, or format these itself (that stays the
 * Formatter's job, `prompt-engine/formatter`, once this module is ever
 * wired in).
 */
export type StylePromptFragments = {
  readonly style: string;
  readonly materials: string;
  readonly lighting: string;
  readonly furniture: string;
  readonly decor: string;
  readonly negative: string;
};

/**
 * The meaning behind one catalog style: why it exists, what it's trying to
 * achieve, and which other knowledge domains it draws on. Deliberately
 * does **not** duplicate `InteriorStyle` (`src/lib/interior/styles/types`)
 * — `styleId` is the only link back to the Style Registry catalog entry.
 * See `./README.md` for the Style Registry vs. Knowledge Base split.
 *
 * All fields `readonly` — a `StyleKnowledge` value is never mutated after
 * creation, matching the immutable-data convention already used by
 * `PromptContext` (`prompt-domain`) and `PromptRuleMetadata`
 * (`prompt-engine`).
 */
export type StyleKnowledge = {
  readonly id: string;
  /** Must match an `InteriorStyle.id` in `src/lib/interior/styles/registry`. */
  readonly styleId: string;
  readonly displayName: string;

  readonly description: string;

  readonly designGoals: readonly string[];
  readonly corePrinciples: readonly string[];

  readonly knowledgeRefs: StyleKnowledgeRefs;

  readonly promptFragments: StylePromptFragments;

  readonly negativeCharacteristics: readonly string[];
  readonly qualityNotes: readonly string[];
  /** Flat, uncategorized "see also" pointers beyond `knowledgeRefs`. */
  readonly references: readonly KnowledgeReference[];
};

/**
 * TODO: Future expansion domain (see `materials/README.md`). Intentionally
 * minimal — no finish/texture/sourcing data modeled yet.
 */
export type MaterialKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "materials";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `furniture/README.md`). */
export type FurnitureKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "furniture";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `lighting/README.md`). */
export type LightingKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "lighting";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `decor/README.md`). */
export type DecorKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "decor";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `colors/README.md`). */
export type ColorKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "colors";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `composition/README.md`). */
export type CompositionKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "composition";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `constraints/README.md`). */
export type ConstraintKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "constraints";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `rendering/README.md`). */
export type RenderingKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "rendering";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `architecture/README.md`). */
export type ArchitectureKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "architecture";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `space/README.md`). */
export type SpaceKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "space";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `mood/README.md`). */
export type MoodKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "mood";
  readonly description?: string;
  readonly notes?: string;
};

/** TODO: Future expansion domain (see `quality/README.md`). */
export type QualityKnowledge = {
  readonly id: string;
  readonly name: string;
  readonly category: "quality";
  readonly description?: string;
  readonly notes?: string;
};
