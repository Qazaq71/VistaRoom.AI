import { createHmac, timingSafeEqual } from 'node:crypto'
import { assetAccessSecret, parseGroupId, PrivateAssetError } from './privateAssets'

// M0.3 asset lifecycle capability (C1 Delivery Brief §5 package 3). A second,
// separate HMAC-SHA-256 capability from the M0.2 result capability
// (privateAssets.createResultCapability/verifyResultCapability) — it does not
// replace it. This token authorizes exactly two things: linking a poll/result
// to one asset lifecycle group, and requesting deletion of that group. It
// never grants arbitrary list/delete/read of other objects.
//
// Domain separation from the result capability: the HMAC input is prefixed
// with a distinct domain tag before the payload, so a signature valid for one
// token type is never valid input for the other's verifier, even though both
// are signed with the same server-only ASSET_ACCESS_SECRET.

const LIFECYCLE_CAPABILITY_VERSION = 1
const LIFECYCLE_PURPOSE = 'asset-lifecycle-v1'
const DOMAIN_TAG = 'vistaroom.m0.3.lifecycle-capability'

interface LifecycleCapabilityPayload {
  v: number
  t: string
  g: string
  iat: number
  exp: number
}

function sign(payloadB64: string, secret: string): string {
  return createHmac('sha256', secret).update(`${DOMAIN_TAG}:${payloadB64}`).digest('base64url')
}

/**
 * Issues a lifecycle capability for groupId, expiring exactly at the group's
 * own retention deadline (F-2 correction) — the issuer decides the lifetime,
 * not the caller; there is no independent, shorter TTL a caller can request.
 * A client can therefore always request deletion up until the moment its
 * files are actually eligible for the retention sweep, however long that is.
 */
export function createAssetLifecycleCapability(
  groupId: string,
  retentionDeadlineMs: number,
): string {
  if (!parseGroupId(groupId)) {
    throw new PrivateAssetError('Invalid asset lifecycle group.')
  }
  const secret = assetAccessSecret()
  const now = Date.now()
  if (!Number.isFinite(retentionDeadlineMs) || retentionDeadlineMs <= now) {
    throw new PrivateAssetError('Asset lifecycle window has already expired.')
  }

  const payload: LifecycleCapabilityPayload = {
    v: LIFECYCLE_CAPABILITY_VERSION,
    t: LIFECYCLE_PURPOSE,
    g: groupId,
    iat: now,
    exp: retentionDeadlineMs,
  }
  const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  return `${payloadB64}.${sign(payloadB64, secret)}`
}

export type LifecycleCapabilityVerification = { ok: true; groupId: string } | { ok: false }

const INVALID: LifecycleCapabilityVerification = { ok: false }

/**
 * Verifies a lifecycle capability token: signature (constant-time, under the
 * lifecycle domain tag), version, purpose, group id format and expiry. Never
 * throws and never distinguishes *why* a token was rejected — every failure
 * (missing/weak secret, malformed token, bad signature, wrong purpose,
 * invalid group, expiry) collapses to the same `{ ok: false }`.
 */
export function verifyAssetLifecycleCapability(
  token: string,
  now: number = Date.now(),
): LifecycleCapabilityVerification {
  try {
    const secret = assetAccessSecret()

    const parts = token.split('.')
    if (parts.length !== 2) return INVALID
    const [payloadB64, sig] = parts
    if (!payloadB64 || !sig) return INVALID

    const expectedSig = sign(payloadB64, secret)
    const sigBuf = Buffer.from(sig, 'base64url')
    const expectedBuf = Buffer.from(expectedSig, 'base64url')
    if (sigBuf.length !== expectedBuf.length) return INVALID
    if (!timingSafeEqual(sigBuf, expectedBuf)) return INVALID

    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8')) as LifecycleCapabilityPayload
    if (payload.v !== LIFECYCLE_CAPABILITY_VERSION) return INVALID
    if (payload.t !== LIFECYCLE_PURPOSE) return INVALID
    if (typeof payload.g !== 'string' || !parseGroupId(payload.g)) return INVALID
    if (typeof payload.iat !== 'number' || !Number.isFinite(payload.iat)) return INVALID
    if (typeof payload.exp !== 'number' || !Number.isFinite(payload.exp) || now >= payload.exp) return INVALID

    return { ok: true, groupId: payload.g }
  } catch {
    return INVALID
  }
}
