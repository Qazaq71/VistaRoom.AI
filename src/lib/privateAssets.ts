import { randomUUID, createHmac, timingSafeEqual } from 'node:crypto'
import { put, get, issueSignedToken, presignUrl } from '@vercel/blob'
import type { GetBlobResult } from '@vercel/blob'

// M0.2 closed storage (Lean Delivery Decision §6.1, C1 Delivery Brief §5
// package 2). The only module allowed to call @vercel/blob's put()/get() or
// know the ASSET_ACCESS_SECRET result-capability format. Never imported from
// client code. All uploads use access: 'private' — there is no public
// fallback path in this file.

export type PrivateAssetPrefix = 'sources' | 'masks' | 'results'

const RESULT_CAPABILITY_VERSION = 1
const MIN_SECRET_LENGTH = 32
const RESULT_PATHNAME_PREFIX = 'results/'

// Thrown for every failure in this module. The message is always a generic,
// sanitized string — callers must not attach pathnames, tokens, blob URLs or
// upstream error detail to what reaches the client.
export class PrivateAssetError extends Error {}

function assetAccessSecret(): string {
  const secret = process.env.ASSET_ACCESS_SECRET
  if (!secret || secret.length < MIN_SECRET_LENGTH) {
    throw new PrivateAssetError('Asset access is not configured.')
  }
  return secret
}

function extensionForContentType(contentType: string): string {
  const subtype = contentType.split('/')[1]?.split(';')[0]?.trim().toLowerCase()
  if (subtype && /^[a-z0-9]+$/.test(subtype)) {
    return subtype === 'jpeg' ? 'jpg' : subtype
  }
  return 'jpg'
}

/**
 * Uploads bytes to a private Blob path under the given prefix. Never accepts
 * or falls back to access: 'public'.
 */
export async function uploadPrivateAsset(
  prefix: PrivateAssetPrefix,
  body: Buffer,
  contentType: string,
): Promise<{ pathname: string }> {
  const pathname = `${prefix}/${randomUUID()}.${extensionForContentType(contentType)}`
  try {
    const result = await put(pathname, body, {
      access: 'private',
      contentType,
      addRandomSuffix: false,
    })
    return { pathname: result.pathname }
  } catch {
    throw new PrivateAssetError('Failed to store asset.')
  }
}

/**
 * Issues a short-lived, GET-only, single-pathname presigned URL so an
 * external provider (Fal.ai) can fetch one private source/mask asset without
 * ever seeing the raw private Blob URL or a Bearer capability.
 */
export async function createProviderGetUrl(pathname: string, ttlMs: number): Promise<string> {
  try {
    const validUntil = Date.now() + ttlMs
    const signed = await issueSignedToken({ pathname, operations: ['get'], validUntil })
    const { presignedUrl } = await presignUrl(signed, {
      operation: 'get',
      pathname,
      validUntil,
      access: 'private',
    })
    return presignedUrl
  } catch {
    throw new PrivateAssetError('Failed to create provider access URL.')
  }
}

/**
 * Reads a private Blob object server-side (used only by the authorized
 * /api/proxy delivery route). Returns null when the asset does not exist.
 */
export async function readPrivateAsset(pathname: string): Promise<GetBlobResult | null> {
  try {
    return await get(pathname, { access: 'private' })
  } catch {
    throw new PrivateAssetError('Failed to read stored asset.')
  }
}

interface CapabilityPayload {
  v: number
  p: string
  exp: number
}

function sign(payloadB64: string, secret: string): string {
  return createHmac('sha256', secret).update(payloadB64).digest('base64url')
}

/**
 * Issues a short-lived HMAC-SHA-256 capability token scoped to exactly one
 * results/ pathname. This is the M0.2 interim authorization boundary — not
 * account auth, and not a substitute for it (see C1 Delivery Brief §6.1/§7).
 */
export function createResultCapability(pathname: string, ttlMs: number): string {
  if (!pathname.startsWith(RESULT_PATHNAME_PREFIX)) {
    throw new PrivateAssetError('Invalid asset pathname.')
  }
  const secret = assetAccessSecret()
  const payload: CapabilityPayload = {
    v: RESULT_CAPABILITY_VERSION,
    p: pathname,
    exp: Date.now() + ttlMs,
  }
  const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  return `${payloadB64}.${sign(payloadB64, secret)}`
}

export type CapabilityVerification =
  | { ok: true; pathname: string }
  | { ok: false }

const INVALID: CapabilityVerification = { ok: false }

/**
 * Verifies a result capability token: signature (constant-time), version,
 * results/ pathname prefix and expiry. Never throws and never distinguishes
 * *why* a token was rejected to the caller — every failure (missing/weak
 * secret, malformed token, bad signature, wrong prefix, expiry) collapses to
 * the same `{ ok: false }`.
 */
export function verifyResultCapability(token: string, now: number = Date.now()): CapabilityVerification {
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

    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8')) as CapabilityPayload
    if (payload.v !== RESULT_CAPABILITY_VERSION) return INVALID
    if (typeof payload.p !== 'string' || !payload.p.startsWith(RESULT_PATHNAME_PREFIX)) return INVALID
    if (typeof payload.exp !== 'number' || !Number.isFinite(payload.exp) || now >= payload.exp) return INVALID

    return { ok: true, pathname: payload.p }
  } catch {
    return INVALID
  }
}
