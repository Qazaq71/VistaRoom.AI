import { randomUUID, createHmac, timingSafeEqual } from 'node:crypto'
import { put, get, del, list, issueSignedToken, presignUrl } from '@vercel/blob'
import type { GetBlobResult } from '@vercel/blob'

// M0.2 closed storage (Lean Delivery Decision §6.1, C1 Delivery Brief §5
// package 2) and M0.3 retention/deletion (package 3). The only module
// allowed to call @vercel/blob's put()/get()/del()/list() or know the
// ASSET_ACCESS_SECRET result-capability format. Never imported from client
// code. All uploads use access: 'private' — there is no public fallback
// path in this file.

export type PrivateAssetPrefix = 'sources' | 'masks' | 'results'

const RESULT_CAPABILITY_VERSION = 1
const MIN_SECRET_LENGTH = 32
const RESULT_PATHNAME_PREFIX = 'results/'
const DELETION_JOURNAL_PREFIX = 'deletion-journal/'

// M0.3 group tombstone (F-1 correction): a durable, private marker that
// permanently closes an asset lifecycle group to new writes, independent of
// whether its files have been deleted yet. Lives under its own prefix — never
// swept by deleteAssetGroup's sources/masks/results prefixes, and never
// scanned by the retention sweep — so it survives the group it closes.
const TOMBSTONE_PREFIX = 'tombstones/'
const TOMBSTONE_SCHEMA_VERSION = 1
const TOMBSTONE_REF_DOMAIN_TAG = 'vistaroom.m0.3.tombstone.group-ref'

// M0.3 asset lifecycle group id: `g1-<12 hex digits of createdAt epoch ms>-<uuid v4>`.
// Server-generated only, single path segment, and self-describes a
// verifiable creation time without a separate stored field.
const GROUP_ID_PATTERN =
  /^g1-([0-9a-f]{12})-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i

// Thrown for every failure in this module. The message is always a generic,
// sanitized string — callers must not attach pathnames, tokens, blob URLs or
// upstream error detail to what reaches the client.
export class PrivateAssetError extends Error {}

export function assetAccessSecret(): string {
  const secret = process.env.ASSET_ACCESS_SECRET
  if (!secret || secret.length < MIN_SECRET_LENGTH) {
    throw new PrivateAssetError('Asset access is not configured.')
  }
  return secret
}

/**
 * Creates a new server-generated M0.3 asset lifecycle group id. The caller
 * never chooses or influences this value.
 */
export function createAssetLifecycleGroup(): { groupId: string; createdAtMs: number } {
  const createdAtMs = Date.now()
  const tsHex = createdAtMs.toString(16).padStart(12, '0')
  const groupId = `g1-${tsHex}-${randomUUID()}`
  return { groupId, createdAtMs }
}

/**
 * Validates a group id's strict format and extracts its verifiable creation
 * time. Returns null for anything malformed — never throws.
 */
export function parseGroupId(groupId: string): { createdAtMs: number } | null {
  const match = GROUP_ID_PATTERN.exec(groupId)
  if (!match) return null
  const createdAtMs = parseInt(match[1], 16)
  if (!Number.isSafeInteger(createdAtMs)) return null
  return { createdAtMs }
}

/**
 * Parses a `<prefix>/<groupId>/<file>` pathname produced by uploadPrivateAsset.
 * Returns null for anything that doesn't match this exact grouped shape —
 * including legacy pre-M0.3 pathnames with no group segment — so callers can
 * fall back safely instead of ever deriving a group id from untrusted input.
 */
export function parseGroupedPathname(
  pathname: string,
  prefix: PrivateAssetPrefix,
): { groupId: string; createdAtMs: number } | null {
  const expectedPrefix = `${prefix}/`
  if (!pathname.startsWith(expectedPrefix)) return null
  const rest = pathname.slice(expectedPrefix.length)
  const segments = rest.split('/')
  if (segments.length !== 2) return null
  const [groupId] = segments
  const parsed = parseGroupId(groupId)
  if (!parsed) return null
  return { groupId, createdAtMs: parsed.createdAtMs }
}

function extensionForContentType(contentType: string): string {
  const subtype = contentType.split('/')[1]?.split(';')[0]?.trim().toLowerCase()
  if (subtype && /^[a-z0-9]+$/.test(subtype)) {
    return subtype === 'jpeg' ? 'jpg' : subtype
  }
  return 'jpg'
}

/**
 * Uploads bytes to a private Blob path under the given prefix, grouped by a
 * server-created M0.3 asset lifecycle group id (see createAssetLifecycleGroup).
 * The caller supplies only the group id — never a full pathname — and this
 * function builds `<prefix>/<groupId>/<uuid>.<ext>` itself. A group id that
 * doesn't pass parseGroupId fails closed before any Blob call. Never accepts
 * or falls back to access: 'public'.
 */
export async function uploadPrivateAsset(
  prefix: PrivateAssetPrefix,
  groupId: string,
  body: Buffer,
  contentType: string,
): Promise<{ pathname: string }> {
  if (!parseGroupId(groupId)) {
    throw new PrivateAssetError('Invalid asset lifecycle group.')
  }
  const pathname = `${prefix}/${groupId}/${randomUUID()}.${extensionForContentType(contentType)}`
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

export interface ListedPrivateAsset {
  pathname: string
  uploadedAt: Date
}

export interface ListPrivateAssetsPage {
  blobs: ListedPrivateAsset[]
  cursor?: string
  hasMore: boolean
}

/**
 * Lists private Blob objects under a prefix, one page at a time. Used only
 * by the M0.3 retention sweep and request-deletion path — never exposed to
 * client-influenced input beyond a caller-chosen, verified prefix.
 */
export async function listPrivateAssets(
  prefix: string,
  cursor?: string,
  limit?: number,
): Promise<ListPrivateAssetsPage> {
  try {
    const result = await list({ prefix, cursor, limit, mode: 'expanded' })
    return {
      blobs: result.blobs.map(b => ({ pathname: b.pathname, uploadedAt: b.uploadedAt })),
      cursor: result.cursor,
      hasMore: result.hasMore,
    }
  } catch {
    throw new PrivateAssetError('Failed to list stored assets.')
  }
}

/**
 * Deletes one or more private Blob objects by exact pathname. Pathnames must
 * come only from listPrivateAssets — never from client-supplied input.
 */
export async function deletePrivateAssets(pathnames: string[]): Promise<void> {
  if (pathnames.length === 0) return
  try {
    await del(pathnames)
  } catch {
    throw new PrivateAssetError('Failed to delete stored assets.')
  }
}

/**
 * Writes one immutable private deletion-journal record under a random,
 * unique pathname (never overwritten). The journal prefix is intentionally
 * distinct from sources/masks/results and is never included in any asset
 * listing/delete path.
 */
export async function writeDeletionJournalEntry(body: Buffer): Promise<void> {
  const pathname = `${DELETION_JOURNAL_PREFIX}${randomUUID()}.json`
  try {
    await put(pathname, body, {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
    })
  } catch {
    throw new PrivateAssetError('Failed to record deletion journal entry.')
  }
}

export type TombstoneReason = 'request' | 'retention' | 'failed-generation-cleanup'

interface TombstonePayload {
  v: number
  ref: string
  closedAt: number
  reason: TombstoneReason
}

// The pathname is derived only from an HMAC of the group id — never the raw
// group id itself — so the tombstone's own storage location cannot be used
// to recover which group it closed.
function tombstoneRef(groupId: string): string {
  const secret = assetAccessSecret()
  return createHmac('sha256', secret).update(`${TOMBSTONE_REF_DOMAIN_TAG}:${groupId}`).digest('base64url')
}

function tombstonePathnameForRef(ref: string): string {
  return `${TOMBSTONE_PREFIX}${ref}.json`
}

/**
 * Durably closes an asset lifecycle group to any future write (M0.3 F-1
 * correction). Idempotent — writing the same group's tombstone twice (e.g. a
 * retried DELETE) overwrites the same deterministic pathname rather than
 * failing. Never deleted alongside the group's sources/masks/results, and
 * never touched by the retention sweep.
 */
export async function writeGroupTombstone(groupId: string, reason: TombstoneReason): Promise<void> {
  if (!parseGroupId(groupId)) {
    throw new PrivateAssetError('Invalid asset lifecycle group.')
  }
  const ref = tombstoneRef(groupId)
  const pathname = tombstonePathnameForRef(ref)
  const payload: TombstonePayload = {
    v: TOMBSTONE_SCHEMA_VERSION,
    ref,
    closedAt: Date.now(),
    reason,
  }
  const body = Buffer.from(JSON.stringify(payload), 'utf8')
  try {
    await put(pathname, body, {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
    })
  } catch {
    throw new PrivateAssetError('Failed to close asset lifecycle group.')
  }
}

/**
 * Checks whether a group has been tombstoned. Callers (deleteAssetGroup,
 * /api/poll) must treat a thrown error as fail-closed — an unknown lifecycle
 * state must never be treated as "open for writes".
 */
export async function groupTombstoneExists(groupId: string): Promise<boolean> {
  if (!parseGroupId(groupId)) {
    throw new PrivateAssetError('Invalid asset lifecycle group.')
  }
  const pathname = tombstonePathnameForRef(tombstoneRef(groupId))
  try {
    // useCache: false — a tombstone consistency check must see the current
    // state, not a CDN-cached response; a stale cached "not found" here
    // would be exactly the resurrection window F-1 exists to close.
    const result = await get(pathname, { access: 'private', useCache: false })
    return result !== null
  } catch {
    throw new PrivateAssetError('Failed to verify asset lifecycle status.')
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
