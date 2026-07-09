import type { Dimensions } from './acs001-dimensions.types'

/**
 * Dimensions boundary helper (ADR-006 Public Contract `size: Dimensions` +
 * ADR-009 Decision 4, Implementation Package v1.0 Step 4B). Pure function,
 * no side effects. Not yet wired into any production path — see this
 * module's README.md.
 */
export function deriveDimensionsFromAspectRatio(aspectRatio: string): Dimensions {
  return { aspectRatio }
}
