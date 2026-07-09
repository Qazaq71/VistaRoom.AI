import type { InteriorMode } from '@/types/image'
import type { MaskInvariantResult } from './acs001-mask-invariant.types'

/**
 * Mask invariant check (ADR-006 Mode Contract + ADR-009 Decision 1/3/5,
 * Implementation Package v1.0 sections 2-4). Pure function, no side
 * effects. Not yet wired into any production path — see this module's
 * README.md.
 */
export function checkMaskInvariant(mode: InteriorMode, hasMask: boolean): MaskInvariantResult {
  if (mode === 'partial' && !hasMask) {
    return { valid: false, mode, hasMask, reason: 'PARTIAL_EDIT requires a mask' }
  }

  if (mode === 'clear' && !hasMask) {
    return { valid: false, mode, hasMask, reason: 'CLEAR/erase production path requires a mask' }
  }

  if (mode === 'style' && hasMask) {
    return { valid: false, mode, hasMask, reason: 'FULL_GENERATION forbids a mask' }
  }

  return { valid: true }
}
