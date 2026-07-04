import { DESIGN_DOMAINS } from "./domains";
import type { DesignDomain, DesignDomainId, DesignDomainRegistry } from "./types";

/**
 * Single Source of Truth для всех Design Domains — по аналогии с
 * `INTERIOR_STYLE_REGISTRY` (src/lib/interior/styles/registry.ts).
 *
 * Никакой логики: обычный typed lookup над `DESIGN_DOMAINS`.
 */
export const DESIGN_DOMAIN_REGISTRY: DesignDomainRegistry = DESIGN_DOMAINS;

export function getDesignDomain(id: DesignDomainId): DesignDomain | undefined {
  return DESIGN_DOMAIN_REGISTRY.find((domain) => domain.id === id);
}

export function getAllDesignDomains(): DesignDomainRegistry {
  return DESIGN_DOMAIN_REGISTRY;
}
