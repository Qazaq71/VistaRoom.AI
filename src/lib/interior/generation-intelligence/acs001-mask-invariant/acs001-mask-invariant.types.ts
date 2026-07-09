import type { InteriorMode } from '@/types/image'

/**
 * Explicit refusal instead of a guessed result — same union-return
 * principle already applied in ACS-004's StructuralValidationFailure and
 * ACS-002's ErrorNotFound. Not an exception (ADR-009 Decision 3).
 */
export type MaskInvariantResult = MaskInvariantValid | MaskInvariantViolation

export interface MaskInvariantValid {
  valid: true
}

export interface MaskInvariantViolation {
  valid: false
  mode: InteriorMode
  hasMask: boolean
  reason: string
}
