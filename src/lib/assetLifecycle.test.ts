import { afterEach, describe, expect, it, vi } from 'vitest'
import { createHmac } from 'node:crypto'
import { createAssetLifecycleGroup, createResultCapability, verifyResultCapability, PrivateAssetError } from './privateAssets'
import { createAssetLifecycleCapability, verifyAssetLifecycleCapability } from './assetLifecycle'

const VALID_SECRET = 'a'.repeat(32)

function futureDeadline(ms = 60 * 60 * 1000): number {
  return Date.now() + ms
}

describe('lifecycle capability tokens', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('round-trips a valid token', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline())
    expect(verifyAssetLifecycleCapability(token)).toEqual({ ok: true, groupId })
  })

  it('does not embed the secret in the token', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline())
    expect(token).not.toContain(VALID_SECRET)
  })

  it('rejects creation for an invalid group id', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    expect(() => createAssetLifecycleCapability('not-a-group', futureDeadline())).toThrow(PrivateAssetError)
  })

  it('fails closed on creation when the secret is missing', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    const { groupId } = createAssetLifecycleGroup()
    expect(() => createAssetLifecycleCapability(groupId, futureDeadline())).toThrow(PrivateAssetError)
  })

  it('fails closed on creation when the secret is too short (weak)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', 'short-secret')
    const { groupId } = createAssetLifecycleGroup()
    expect(() => createAssetLifecycleCapability(groupId, futureDeadline())).toThrow(PrivateAssetError)
  })

  it('fails closed verification when the secret is missing', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline())
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    expect(verifyAssetLifecycleCapability(token)).toEqual({ ok: false })
  })

  // F-2 correction: the issuer sets exp to exactly the group's retention
  // deadline. There is no caller-supplied TTL to cap against anymore — a
  // token issued for a group with hours (or more) of retention left must
  // stay valid the whole way, not just for a fixed 30-minute window.
  it('issues a token that expires exactly at the retention deadline, not a fixed short window', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const deadline = Date.now() + 6 * 60 * 60 * 1000 // 6 hours out
    const token = createAssetLifecycleCapability(groupId, deadline)

    expect(verifyAssetLifecycleCapability(token, deadline - 1).ok).toBe(true)
    expect(verifyAssetLifecycleCapability(token, deadline + 1)).toEqual({ ok: false })
  })

  it('remains valid well past 30 minutes when the retention deadline has not yet been reached', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const deadline = Date.now() + 6 * 60 * 60 * 1000 // 6 hours out
    const token = createAssetLifecycleCapability(groupId, deadline)

    const past30Minutes = Date.now() + 45 * 60 * 1000
    expect(verifyAssetLifecycleCapability(token, past30Minutes)).toEqual({ ok: true, groupId })
  })

  it('is rejected at/after the retention deadline', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const deadline = Date.now() + 5_000
    const token = createAssetLifecycleCapability(groupId, deadline)

    expect(verifyAssetLifecycleCapability(token, deadline - 1).ok).toBe(true)
    expect(verifyAssetLifecycleCapability(token, deadline)).toEqual({ ok: false })
    expect(verifyAssetLifecycleCapability(token, deadline + 1)).toEqual({ ok: false })
  })

  it('rejects issuance when the retention deadline has already passed', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    expect(() => createAssetLifecycleCapability(groupId, Date.now() - 1000)).toThrow(PrivateAssetError)
  })

  it('rejects a malformed token', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    expect(verifyAssetLifecycleCapability('')).toEqual({ ok: false })
    expect(verifyAssetLifecycleCapability('no-dot-here')).toEqual({ ok: false })
    expect(verifyAssetLifecycleCapability('a.b.c')).toEqual({ ok: false })
  })

  it('rejects a truncated token', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline())
    const truncated = token.slice(0, Math.floor(token.length / 2))
    expect(verifyAssetLifecycleCapability(truncated)).toEqual({ ok: false })
  })

  it('rejects a forged token (tampered payload)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline())
    const [, sig] = token.split('.')
    const { groupId: otherGroupId } = createAssetLifecycleGroup()
    const forgedPayload = Buffer.from(
      JSON.stringify({ v: 1, t: 'asset-lifecycle-v1', g: otherGroupId, iat: Date.now(), exp: futureDeadline() }),
      'utf8',
    ).toString('base64url')
    expect(verifyAssetLifecycleCapability(`${forgedPayload}.${sig}`)).toEqual({ ok: false })
  })

  it('rejects an expired token without a flaky wall-clock dependency', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline(1_000))
    const farFuture = Date.now() + 10 * 60 * 1000
    expect(verifyAssetLifecycleCapability(token, farFuture)).toEqual({ ok: false })
  })

  it('rejects a wrong-purpose token even with a valid signature', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const DOMAIN_TAG = 'vistaroom.m0.3.lifecycle-capability'
    const payload = { v: 1, t: 'wrong-purpose', g: groupId, iat: Date.now(), exp: futureDeadline() }
    const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
    const sig = createHmac('sha256', VALID_SECRET).update(`${DOMAIN_TAG}:${payloadB64}`).digest('base64url')
    expect(verifyAssetLifecycleCapability(`${payloadB64}.${sig}`)).toEqual({ ok: false })
  })

  it('rejects a token whose group id fails format validation', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const DOMAIN_TAG = 'vistaroom.m0.3.lifecycle-capability'
    const payload = { v: 1, t: 'asset-lifecycle-v1', g: 'not-a-valid-group-id', iat: Date.now(), exp: futureDeadline() }
    const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
    const sig = createHmac('sha256', VALID_SECRET).update(`${DOMAIN_TAG}:${payloadB64}`).digest('base64url')
    expect(verifyAssetLifecycleCapability(`${payloadB64}.${sig}`)).toEqual({ ok: false })
  })

  it('uses a constant-time-safe comparison path (does not throw on length mismatch)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const token = createAssetLifecycleCapability(groupId, futureDeadline())
    const [payloadB64] = token.split('.')
    expect(() => verifyAssetLifecycleCapability(`${payloadB64}.short`)).not.toThrow()
    expect(verifyAssetLifecycleCapability(`${payloadB64}.short`)).toEqual({ ok: false })
  })

  it('a lifecycle token is not accepted by the M0.2 result capability verifier', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const { groupId } = createAssetLifecycleGroup()
    const lifecycleToken = createAssetLifecycleCapability(groupId, futureDeadline())
    expect(verifyResultCapability(lifecycleToken)).toEqual({ ok: false })
  })

  it('a result capability is not accepted by the lifecycle verifier', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const resultToken = createResultCapability('results/abc.jpg', 60_000)
    expect(verifyAssetLifecycleCapability(resultToken)).toEqual({ ok: false })
  })
})
