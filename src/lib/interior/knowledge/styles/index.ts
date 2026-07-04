import type { StyleKnowledge } from "../types";
import { MINIMALIST_KNOWLEDGE } from "./minimalist";
import { SCANDINAVIAN_KNOWLEDGE } from "./scandinavian";
import { JAPANDI_KNOWLEDGE } from "./japandi";
import { LUXURY_KNOWLEDGE } from "./luxury";
import { ARTDECO_KNOWLEDGE } from "./artdeco";
import { BIOPHILIC_KNOWLEDGE } from "./biophilic";
import { MEDITERRANEAN_KNOWLEDGE } from "./mediterranean";
import { LOFT_KNOWLEDGE } from "./loft";
import { CYBERPUNK_KNOWLEDGE } from "./cyberpunk";
import { ORGANIC_MODERN_KNOWLEDGE } from "./organicModern";
import { CONTEMPORARY_KNOWLEDGE } from "./contemporary";
import { MID_CENTURY_KNOWLEDGE } from "./midCentury";
import { BOHO_KNOWLEDGE } from "./boho";
import { COASTAL_KNOWLEDGE } from "./coastal";
import { NEOCLASSICAL_KNOWLEDGE } from "./neoclassical";
import { WABI_SABI_KNOWLEDGE } from "./wabiSabi";
import { MODERN_FARMHOUSE_KNOWLEDGE } from "./modernFarmhouse";
import { MAXIMALISM_KNOWLEDGE } from "./maximalism";
import { INDUSTRIAL_KNOWLEDGE } from "./industrial";
import { JAPANESE_ZEN_KNOWLEDGE } from "./japaneseZen";

export {
  MINIMALIST_KNOWLEDGE,
  SCANDINAVIAN_KNOWLEDGE,
  JAPANDI_KNOWLEDGE,
  LUXURY_KNOWLEDGE,
  ARTDECO_KNOWLEDGE,
  BIOPHILIC_KNOWLEDGE,
  MEDITERRANEAN_KNOWLEDGE,
  LOFT_KNOWLEDGE,
  CYBERPUNK_KNOWLEDGE,
  ORGANIC_MODERN_KNOWLEDGE,
  CONTEMPORARY_KNOWLEDGE,
  MID_CENTURY_KNOWLEDGE,
  BOHO_KNOWLEDGE,
  COASTAL_KNOWLEDGE,
  NEOCLASSICAL_KNOWLEDGE,
  WABI_SABI_KNOWLEDGE,
  MODERN_FARMHOUSE_KNOWLEDGE,
  MAXIMALISM_KNOWLEDGE,
  INDUSTRIAL_KNOWLEDGE,
  JAPANESE_ZEN_KNOWLEDGE,
};

/**
 * Every `StyleKnowledge` entry, in the same order as
 * `INTERIOR_STYLE_REGISTRY` (`styles/registry.ts`, DS-4). `my_style` is
 * intentionally absent — see `../README.md` §5. The only consumer of this
 * array is `../registry/KnowledgeRegistry.ts`.
 */
export const ALL_STYLE_KNOWLEDGE: readonly StyleKnowledge[] = [
  MINIMALIST_KNOWLEDGE,
  SCANDINAVIAN_KNOWLEDGE,
  JAPANDI_KNOWLEDGE,
  ORGANIC_MODERN_KNOWLEDGE,
  CONTEMPORARY_KNOWLEDGE,
  MID_CENTURY_KNOWLEDGE,
  BOHO_KNOWLEDGE,
  COASTAL_KNOWLEDGE,
  LUXURY_KNOWLEDGE,
  ARTDECO_KNOWLEDGE,
  NEOCLASSICAL_KNOWLEDGE,
  BIOPHILIC_KNOWLEDGE,
  MEDITERRANEAN_KNOWLEDGE,
  WABI_SABI_KNOWLEDGE,
  MODERN_FARMHOUSE_KNOWLEDGE,
  LOFT_KNOWLEDGE,
  CYBERPUNK_KNOWLEDGE,
  MAXIMALISM_KNOWLEDGE,
  INDUSTRIAL_KNOWLEDGE,
  JAPANESE_ZEN_KNOWLEDGE,
];
