import { createHmac } from 'node:crypto'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { put, get, issueSignedToken, presignUrl } = vi.hoisted(() => ({
  put: vi.fn(),
  get: vi.fn(),
  issueSignedToken: vi.fn(),
  presignUrl: vi.fn(),
}))
vi.mock('@vercel/blob', () => ({ put, get, issueSignedToken, presignUrl }))

import {
  uploadPrivateAsset,
  createProviderGetUrl,
  readPrivateAsset,
  createResultCapability,
  verifyResultCapability,
  PrivateAssetError,
} from './privateAssets'

const VALID_SECRET = 'a'.repeat(32)

describe('uploadPrivateAsset', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    put.mockReset()
  })

  it('uploads with access: private under the given prefix, never public', async () => {
    put.mockResolvedValue({ pathname: 'sources/whatever.jpg', url: 'https://example/should-not-be-used' })

    await uploadPrivateAsset('sources', Buffer.from('img'), 'image/jpeg')

    expect(put).toHaveBeenCalledTimes(1)
    const [pathname, , options] = put.mock.calls[0]
    expect(pathname).toMatch(/^sources\/[0-9a-f-]{36}\.jpg$/)
    expect(options.access).toBe('private')
  })

  it('uses masks/ prefix and png extension for masks', async () => {
    put.mockResolvedValue({ pathname: 'masks/x.png' })
    await uploadPrivateAsset('masks', Buffer.from('m'), 'image/png')
    const [pathname] = put.mock.calls[0]
    expect(pathname).toMatch(/^masks\/[0-9a-f-]{36}\.png$/)
  })

  it('uses results/ prefix for results', async () => {
    put.mockResolvedValue({ pathname: 'results/x.jpg' })
    await uploadPrivateAsset('results', Buffer.from('r'), 'image/jpeg')
    const [pathname] = put.mock.calls[0]
    expect(pathname).toMatch(/^results\/[0-9a-f-]{36}\.jpg$/)
  })

  it('never falls back to public access when the Blob call fails', async () => {
    put.mockRejectedValue(new Error('blob outage'))

    await expect(uploadPrivateAsset('sources', Buffer.from('img'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)

    // The only put() attempt must have been the private one — no retry with
    // access: 'public'.
    expect(put).toHaveBeenCalledTimes(1)
    expect(put.mock.calls[0][2].access).toBe('private')
  })

  it('sanitizes the underlying Blob error rather than leaking it', async () => {
    put.mockRejectedValue(new Error('token=super-secret-detail'))
    await expect(uploadPrivateAsset('sources', Buffer.from('x'), 'image/jpeg'))
      .rejects.toThrow('Failed to store asset.')
  })
})

describe('createProviderGetUrl', () => {
  afterEach(() => {
    issueSignedToken.mockReset()
    presignUrl.mockReset()
  })

  it('issues a scoped, GET-only, private, short-lived presigned URL', async () => {
    issueSignedToken.mockResolvedValue({
      delegationToken: 'd', clientSigningToken: 'c', validUntil: Date.now() + 60_000,
    })
    presignUrl.mockResolvedValue({ presignedUrl: 'https://blob.example/signed' })

    const url = await createProviderGetUrl('sources/abc.jpg', 60_000)

    expect(url).toBe('https://blob.example/signed')
    expect(issueSignedToken).toHaveBeenCalledWith(
      expect.objectContaining({ pathname: 'sources/abc.jpg', operations: ['get'] }),
    )
    const presignOptions = presignUrl.mock.calls[0][1]
    expect(presignOptions.operation).toBe('get')
    expect(presignOptions.pathname).toBe('sources/abc.jpg')
    expect(presignOptions.access).toBe('private')
  })

  it('does not use a wildcard pathname', async () => {
    issueSignedToken.mockResolvedValue({ delegationToken: 'd', clientSigningToken: 'c', validUntil: 1 })
    presignUrl.mockResolvedValue({ presignedUrl: 'https://blob.example/signed' })

    await createProviderGetUrl('masks/one-asset.png', 60_000)

    expect(issueSignedToken.mock.calls[0][0].pathname).not.toBe('*')
    expect(presignUrl.mock.calls[0][1].pathname).not.toBe('*')
  })

  it('wraps failures and never returns a raw/public fallback URL', async () => {
    issueSignedToken.mockRejectedValue(new Error('control-plane error'))
    await expect(createProviderGetUrl('sources/a.jpg', 60_000)).rejects.toBeInstanceOf(PrivateAssetError)
  })
})

describe('readPrivateAsset', () => {
  afterEach(() => get.mockReset())

  it('reads with access: private', async () => {
    get.mockResolvedValue(null)
    await readPrivateAsset('results/a.jpg')
    expect(get).toHaveBeenCalledWith('results/a.jpg', { access: 'private' })
  })

  it('sanitizes underlying errors', async () => {
    get.mockRejectedValue(new Error('leaky detail'))
    await expect(readPrivateAsset('results/a.jpg')).rejects.toThrow('Failed to read stored asset.')
  })
})

describe('result capability tokens', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('round-trips a valid token', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    const result = verifyResultCapability(token)
    expect(result).toEqual({ ok: true, pathname: 'results/abc.jpg' })
  })

  it('does not embed the secret in the token', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    expect(token).not.toContain(VALID_SECRET)
    const [payloadB64] = token.split('.')
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'))
    expect(JSON.stringify(payload)).not.toContain(VALID_SECRET)
  })

  it('rejects a pathname outside results/ at creation time', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    expect(() => createResultCapability('sources/abc.jpg', 60_000)).toThrow(PrivateAssetError)
  })

  it('fails closed when the secret is missing', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    expect(() => createResultCapability('results/abc.jpg', 60_000)).toThrow(PrivateAssetError)
  })

  it('fails closed verification when the secret is missing', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    expect(verifyResultCapability(token)).toEqual({ ok: false })
  })

  it('fails closed when the secret is weak (too short)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', 'short-secret')
    expect(() => createResultCapability('results/abc.jpg', 60_000)).toThrow(PrivateAssetError)
    const anotherToken = Buffer.from(JSON.stringify({ v: 1, p: 'results/x.jpg', exp: Date.now() + 60_000 }), 'utf8').toString('base64url') + '.sig'
    expect(verifyResultCapability(anotherToken)).toEqual({ ok: false })
  })

  it('rejects a modified payload (pathname substitution)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    const [, sig] = token.split('.')
    const tamperedPayload = Buffer.from(
      JSON.stringify({ v: 1, p: 'results/other.jpg', exp: Date.now() + 60_000 }),
      'utf8',
    ).toString('base64url')
    expect(verifyResultCapability(`${tamperedPayload}.${sig}`)).toEqual({ ok: false })
  })

  it('rejects a modified signature', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    const [payloadB64, sig] = token.split('.')
    const flipped = sig.slice(0, -1) + (sig.at(-1) === 'A' ? 'B' : 'A')
    expect(verifyResultCapability(`${payloadB64}.${flipped}`)).toEqual({ ok: false })
  })

  it('rejects an expired token without a flaky wall-clock dependency', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 1_000)
    // Inject a far-future "now" instead of waiting on the real clock.
    const farFuture = Date.now() + 10 * 60 * 1000
    expect(verifyResultCapability(token, farFuture)).toEqual({ ok: false })
  })

  it('accepts a token exactly at issuance time (not yet expired)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    expect(verifyResultCapability(token, Date.now()).ok).toBe(true)
  })

  it('rejects malformed tokens (no separator, extra separators, empty)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    expect(verifyResultCapability('')).toEqual({ ok: false })
    expect(verifyResultCapability('no-dot-here')).toEqual({ ok: false })
    expect(verifyResultCapability('a.b.c')).toEqual({ ok: false })
    expect(verifyResultCapability('.')).toEqual({ ok: false })
  })

  it('rejects a well-formed but wrong-prefix pathname even with a valid signature', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    // Build a token the same way createResultCapability does, but bypass its
    // own results/-prefix guard to prove verify() double-checks independently.
    const payload = { v: 1, p: 'sources/not-a-result.jpg', exp: Date.now() + 60_000 }
    const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
    const sig = createHmac('sha256', VALID_SECRET).update(payloadB64).digest('base64url')
    expect(verifyResultCapability(`${payloadB64}.${sig}`)).toEqual({ ok: false })
  })

  it('rejects an unknown version', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const payload = { v: 99, p: 'results/x.jpg', exp: Date.now() + 60_000 }
    const payloadB64 = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
    const sig = createHmac('sha256', VALID_SECRET).update(payloadB64).digest('base64url')
    expect(verifyResultCapability(`${payloadB64}.${sig}`)).toEqual({ ok: false })
  })

  it('uses a constant-time-safe comparison path (does not throw on length mismatch)', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    const token = createResultCapability('results/abc.jpg', 60_000)
    const [payloadB64] = token.split('.')
    expect(() => verifyResultCapability(`${payloadB64}.short`)).not.toThrow()
    expect(verifyResultCapability(`${payloadB64}.short`)).toEqual({ ok: false })
  })
})
