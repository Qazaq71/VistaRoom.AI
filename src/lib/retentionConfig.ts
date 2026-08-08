// M0.3 retention TTL configuration (C1 Delivery Brief §5 package 3; §6 of the
// M0.3 build instructions). ASSET_RETENTION_HOURS is a mandatory, Owner-set,
// server-only value — this module invents no production default and no
// fallback. Any missing, zero, negative, fractional, non-numeric, or
// overflowing value fails closed. Callers must check this before the first
// Blob upload or Fal.ai call of a request.

export class RetentionConfigError extends Error {}

// Strict positive-integer literal: no leading zero, no sign, no decimal
// point, no exponent, no whitespace inside the digits (only trimmed around).
const POSITIVE_INTEGER_PATTERN = /^[1-9][0-9]*$/

export function getAssetRetentionHours(): number {
  const raw = process.env.ASSET_RETENTION_HOURS
  if (typeof raw !== 'string') {
    throw new RetentionConfigError('Asset retention is not configured.')
  }

  const trimmed = raw.trim()
  if (!POSITIVE_INTEGER_PATTERN.test(trimmed)) {
    throw new RetentionConfigError('Asset retention is not configured.')
  }

  const hours = Number(trimmed)
  if (!Number.isSafeInteger(hours) || hours <= 0) {
    throw new RetentionConfigError('Asset retention is not configured.')
  }

  return hours
}

export function getAssetRetentionMs(): number {
  const hours = getAssetRetentionHours()
  const ms = hours * 60 * 60 * 1000
  if (!Number.isSafeInteger(ms)) {
    throw new RetentionConfigError('Asset retention is not configured.')
  }
  return ms
}
