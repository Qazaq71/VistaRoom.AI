import type { FeatureType } from "./core/FeatureTypes";
import type {
  MaterialFeature,
  FurnitureFeature,
  LightingFeature,
  DecorFeature,
  ColorFeature,
  CompositionFeature,
  ConstraintFeature,
  RenderingFeature,
  ArchitectureFeature,
  SpaceFeature,
  MoodFeature,
  QualityFeature,
} from "./core/Feature";

/**
 * Every knowledge domain the Knowledge Base is split into. Mirrors the
 * sub-directories of `./` (`styles`, `materials`, `furniture`, ...). Used
 * only as a tag on `KnowledgeReference` and (via the `<Domain>Knowledge`
 * aliases below) on each domain's own knowledge type — nothing here reads
 * it to make decisions.
 *
 * DS-6.4.2: defined as `FeatureType | "style"` rather than its own
 * parallel literal list — `FeatureType` (`./core/FeatureTypes.ts`) is now
 * the single canonical source for domain naming, so the two can never
 * drift apart again. `"style"` is the one category `FeatureType`
 * deliberately excludes: a `KnowledgeFeature` can never itself be a
 * whole style, but a `KnowledgeReference` can point at one (e.g. inside
 * `StyleKnowledge.references`). See `./core/README.md` §3.
 */
export type KnowledgeCategory = FeatureType | "style";

/**
 * Universal pointer from one knowledge entry to another, used so
 * `StyleKnowledge` (and, later, other domains) can *reference* knowledge
 * that lives in a different domain module instead of duplicating it
 * in-line. Resolving a reference to its full entry is the job of a future
 * consumer (e.g. Prompt Builder) — the Knowledge Base itself never
 * resolves it.
 *
 * Deliberately **not** replaced by `KnowledgeFeature` (`./core/Feature.ts`,
 * DS-6.4.1/DS-6.4.2), even though both describe "a pointer into a
 * domain" — this is the same intentional split as a foreign key with a
 * denormalized label vs. the full row it points at. A `KnowledgeReference`
 * must stay lightweight and valid even while the domain it points into is
 * still an empty scaffold (see `./README.md` §6) — a `StyleKnowledge`
 * should never be blocked on a `KnowledgeFeature` existing yet. See
 * `./core/README.md` §8 "Дедупликация" and §7 "Migration Strategy" for
 * the planned direction.
 *
 * `category` (this type) vs `domain` (`KnowledgeFeature.domain`,
 * `./core/Feature.ts`) name the same underlying axis — which domain does
 * this belong to — but intentionally differ: `category: KnowledgeCategory`
 * is wider (includes `"style"`, since a reference can point at a style),
 * `domain: FeatureType` is narrower (a Feature is never a style).
 */
export type KnowledgeReference = {
  readonly id: string;
  readonly name: string;
  readonly category: KnowledgeCategory;
  /** How much *this reference* matters to whatever holds it — distinct from `KnowledgeFeature.weight` and `KnowledgeRelation.weight` (`./core/README.md` §8). */
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
 * Deliberately does **not** extend `KnowledgeEntity` (`./core/Entity.ts`)
 * yet, despite the similar `id`/`description` shape — doing so now would
 * be performing the Migration Strategy (`./core/README.md` §7) instead of
 * only declaring it. This is a documented, intentional gap, not an
 * oversight.
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
 * DS-6.4.2: `<Domain>Knowledge` used to be twelve independent types with
 * a shape nearly identical to the matching `<Domain>Feature`
 * (`./core/Feature.ts`) — the exact duplication flagged by the DS-6.4.1
 * review. Each is now a thin alias over its `core/Feature.ts`
 * counterpart instead of a second, parallel definition. Every
 * `<domain>/registry.ts` (e.g. `materials/registry.ts`) keeps compiling
 * unchanged: it only ever referenced the type by name, never its shape
 * directly. See `./core/README.md` §8 "Дедупликация".
 */
export type MaterialKnowledge = MaterialFeature;
export type FurnitureKnowledge = FurnitureFeature;
export type LightingKnowledge = LightingFeature;
export type DecorKnowledge = DecorFeature;
export type ColorKnowledge = ColorFeature;
export type CompositionKnowledge = CompositionFeature;
export type ConstraintKnowledge = ConstraintFeature;
export type RenderingKnowledge = RenderingFeature;
export type ArchitectureKnowledge = ArchitectureFeature;
export type SpaceKnowledge = SpaceFeature;
export type MoodKnowledge = MoodFeature;
export type QualityKnowledge = QualityFeature;
