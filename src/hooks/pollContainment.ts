import { CONTAINMENT_ERROR_CODE } from '@/lib/containmentCode'

// Client-safe: imports only the neutral wire constant, never
// src/lib/containment.ts (which pulls in server-only next/server).

export const CONTAINMENT_FALLBACK_MESSAGE = 'Генерация временно недоступна. Попробуйте позже.'

export interface PollContainmentResult {
  isContainment: boolean
  message: string
}

const NOT_CONTAINMENT: PollContainmentResult = { isContainment: false, message: '' }

// Pure classifier for a non-OK /api/poll response. Recognizes the M0.0
// terminal containment response (503 + code M0_CONTAINMENT_ACTIVE) so the
// polling loop can stop immediately instead of retrying it as a transient
// error. Any other non-OK shape (including any other 503) falls through to
// the caller's existing retry behavior.
export function classifyPollContainment(status: number, body: unknown): PollContainmentResult {
  if (status !== 503) return NOT_CONTAINMENT
  if (typeof body !== 'object' || body === null) return NOT_CONTAINMENT

  const record = body as Record<string, unknown>
  if (record.code !== CONTAINMENT_ERROR_CODE) return NOT_CONTAINMENT

  const rawError = record.error
  const message =
    typeof rawError === 'string' && rawError.trim().length > 0
      ? rawError
      : CONTAINMENT_FALLBACK_MESSAGE

  return { isContainment: true, message }
}
