/**
 * Prompt Integration — the explicit Adapter/Mapping boundary between
 * Spatial Intelligence (`design-domain/**`, `space-type/**`,
 * `knowledge/spaces/**`) and Prompt Engine, anticipated by ADR-004
 * ("Prompt Integration (DS-7.4) must introduce the `RoomContext →
 * SpaceType` connection as an explicit Adapter/Mapping component") and
 * built here (DS-7.4).
 *
 * Only types. No business logic, no runtime intelligence.
 * See ./README.md for the full architectural rationale.
 */

import type { SpaceTypeId } from "../space-type";
import type { DesignDomainId } from "../design-domain";
import type { KnowledgeFeature } from "../knowledge/spaces";

/**
 * Reserved future extension point for `SpatialPromptContext` — the same
 * role `SpaceTypeMetadata`/`DesignDomainMetadata` already play for their
 * own models (ADR-000 Principle 22, "Metadata" step). Nothing populates
 * this field on DS-7.4; it exists so future spatial-influence categories
 * (see ./README.md §10, "Spatial Influence") can be added without a
 * top-level contract change.
 */
export type SpatialPromptMetadata = Readonly<Record<string, unknown>>;

/**
 * A composed, read-only reference bundle describing "what does Spatial
 * Intelligence already know about this space?", assembled by
 * `SpatialPromptAdapter` (./adapter.ts) from `SpaceType`
 * (`space-type/**`) and Spatial Knowledge (`knowledge/spaces/**`).
 *
 * This is **not** a replacement of `PromptContext`
 * (`prompt-domain/types.ts`), **not** an inheritance of it, and **not** a
 * duplication of its fields — it is a new, independent composition model
 * that a future Prompt Engine stage may compose alongside `PromptContext`
 * (see ./README.md §5, "Composition"). It carries only references
 * (a `SpaceTypeId`, a `DesignDomainId`, and a `KnowledgeFeature`
 * reference) — no generated prompt strings, no `positivePrompt`/
 * `negativePrompt` fragments, nothing formatted.
 *
 * All fields `readonly`. No methods.
 */
export type SpatialPromptContext = {
  readonly spaceTypeId: SpaceTypeId;
  readonly designDomainId: DesignDomainId;
  readonly spatialKnowledge?: KnowledgeFeature;
  readonly futureMetadata?: SpatialPromptMetadata;
};
