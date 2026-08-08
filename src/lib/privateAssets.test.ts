import { createHmac } from 'node:crypto'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { put, get, del, list, issueSignedToken, presignUrl } = vi.hoisted(() => ({
  put: vi.fn(),
  get: vi.fn(),
  del: vi.fn(),
  list: vi.fn(),
  issueSignedToken: vi.fn(),
  presignUrl: vi.fn(),
}))
vi.mock('@vercel/blob', () => ({ put, get, del, list, issueSignedToken, presignUrl }))

import {
  uploadPrivateAsset,
  createProviderGetUrl,
  readPrivateAsset,
  createResultCapability,
  verifyResultCapability,
  createAssetLifecycleGroup,
  parseGroupId,
  parseGroupedPathname,
  listPrivateAssets,
  deletePrivateAssets,
  writeDeletionJournalEntry,
  writeGroupTombstone,
  groupTombstoneExists,
  assetAccessSecret,
  PrivateAssetError,
} from './privateAssets'

const VALID_SECRET = 'a'.repeat(32)
const GROUP_ID_RE = /^g1-[0-9a-f]{12}-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const TEST_STORE_ID = 'store_test_private_fixture'
const TEST_OIDC_TOKEN = 'test-oidc-token-fixture'

function makeGroupId(createdAtMs = Date.now()): string {
  return `g1-${createdAtMs.toString(16).padStart(12, '0')}-11111111-1111-4111-8111-111111111111`
}

// Every function in this module resolves private-store auth before issuing
// any Blob command, so a default valid store+OIDC pair is stubbed for every
// test; individual tests override or clear these to exercise the fallback
// and fail-closed paths.
beforeEach(() => {
  vi.stubEnv('PRIVATE_ASSETS_STORE_ID', TEST_STORE_ID)
  vi.stubEnv('VERCEL_OIDC_TOKEN', TEST_OIDC_TOKEN)
})

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('createAssetLifecycleGroup / parseGroupId', () => {
  it('creates a strictly formatted, server-generated group id', () => {
    const { groupId, createdAtMs } = createAssetLifecycleGroup()
    expect(groupId).toMatch(GROUP_ID_RE)
    expect(Number.isInteger(createdAtMs)).toBe(true)
  })

  it('round-trips the verifiable creation time through parseGroupId', () => {
    const { groupId, createdAtMs } = createAssetLifecycleGroup()
    expect(parseGroupId(groupId)).toEqual({ createdAtMs })
  })

  it('produces a different group id on each call', () => {
    const a = createAssetLifecycleGroup()
    const b = createAssetLifecycleGroup()
    expect(a.groupId).not.toBe(b.groupId)
  })

  it('rejects malformed group ids', () => {
    expect(parseGroupId('')).toBeNull()
    expect(parseGroupId('not-a-group-id')).toBeNull()
    expect(parseGroupId('g1-zzzzzzzzzzzz-11111111-1111-4111-8111-111111111111')).toBeNull()
    expect(parseGroupId('g1-000000000000-not-a-uuid')).toBeNull()
    expect(parseGroupId('../../etc/passwd')).toBeNull()
  })
})

describe('parseGroupedPathname', () => {
  it('parses a well-formed grouped pathname', () => {
    const groupId = makeGroupId(1_700_000_000_000)
    const result = parseGroupedPathname(`sources/${groupId}/abc.jpg`, 'sources')
    expect(result).toEqual({ groupId, createdAtMs: 1_700_000_000_000 })
  })

  it('returns null for a legacy pre-M0.3 ungrouped pathname', () => {
    expect(parseGroupedPathname('sources/abc-uuid.jpg', 'sources')).toBeNull()
  })

  it('returns null for the wrong prefix', () => {
    const groupId = makeGroupId()
    expect(parseGroupedPathname(`masks/${groupId}/abc.jpg`, 'sources')).toBeNull()
  })

  it('returns null for an unexpected extra path depth instead of guessing a group', () => {
    const groupId = makeGroupId()
    expect(parseGroupedPathname(`sources/${groupId}/nested/abc.jpg`, 'sources')).toBeNull()
  })
})

describe('uploadPrivateAsset', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    put.mockReset()
  })

  it('uploads with access: private under the given prefix/group, never public', async () => {
    put.mockResolvedValue({ pathname: 'sources/whatever.jpg', url: 'https://example/should-not-be-used' })
    const { groupId } = createAssetLifecycleGroup()

    await uploadPrivateAsset('sources', groupId, Buffer.from('img'), 'image/jpeg')

    expect(put).toHaveBeenCalledTimes(1)
    const [pathname, , options] = put.mock.calls[0]
    expect(pathname).toMatch(new RegExp(`^sources/${groupId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/[0-9a-f-]{36}\\.jpg$`))
    expect(options.access).toBe('private')
  })

  it('uses masks/ prefix and png extension for masks', async () => {
    put.mockResolvedValue({ pathname: 'masks/x.png' })
    const { groupId } = createAssetLifecycleGroup()
    await uploadPrivateAsset('masks', groupId, Buffer.from('m'), 'image/png')
    const [pathname] = put.mock.calls[0]
    expect(pathname).toMatch(/^masks\/g1-[0-9a-f-]+\/[0-9a-f-]{36}\.png$/)
  })

  it('uses results/ prefix for results', async () => {
    put.mockResolvedValue({ pathname: 'results/x.jpg' })
    const { groupId } = createAssetLifecycleGroup()
    await uploadPrivateAsset('results', groupId, Buffer.from('r'), 'image/jpeg')
    const [pathname] = put.mock.calls[0]
    expect(pathname).toMatch(/^results\/g1-[0-9a-f-]+\/[0-9a-f-]{36}\.jpg$/)
  })

  it('rejects an invalid group id before ever calling Blob put()', async () => {
    await expect(uploadPrivateAsset('sources', 'not-a-real-group', Buffer.from('img'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('rejects a caller-supplied full pathname masquerading as a group id', async () => {
    await expect(uploadPrivateAsset('sources', 'sources/other-group/evil.jpg', Buffer.from('img'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('never falls back to public access when the Blob call fails', async () => {
    put.mockRejectedValue(new Error('blob outage'))
    const { groupId } = createAssetLifecycleGroup()

    await expect(uploadPrivateAsset('sources', groupId, Buffer.from('img'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)

    // The only put() attempt must have been the private one — no retry with
    // access: 'public'.
    expect(put).toHaveBeenCalledTimes(1)
    expect(put.mock.calls[0][2].access).toBe('private')
  })

  it('sanitizes the underlying Blob error rather than leaking it', async () => {
    put.mockRejectedValue(new Error('token=super-secret-detail'))
    const { groupId } = createAssetLifecycleGroup()
    await expect(uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg'))
      .rejects.toThrow('Failed to store asset.')
  })
})

describe('listPrivateAssets', () => {
  afterEach(() => list.mockReset())

  it('lists with a prefix and forwards pagination fields', async () => {
    list.mockResolvedValue({
      blobs: [{ pathname: 'sources/g1-x/a.jpg', uploadedAt: new Date(1000), url: 'u', downloadUrl: 'd', size: 1, etag: 'e' }],
      cursor: 'next-cursor',
      hasMore: true,
    })

    const page = await listPrivateAssets('sources/', undefined, 100)

    expect(list).toHaveBeenCalledWith({
      storeId: TEST_STORE_ID,
      oidcToken: TEST_OIDC_TOKEN,
      prefix: 'sources/',
      cursor: undefined,
      limit: 100,
      mode: 'expanded',
    })
    expect(page).toEqual({
      blobs: [{ pathname: 'sources/g1-x/a.jpg', uploadedAt: new Date(1000) }],
      cursor: 'next-cursor',
      hasMore: true,
    })
  })

  it('sanitizes underlying errors', async () => {
    list.mockRejectedValue(new Error('leaky detail'))
    await expect(listPrivateAssets('sources/')).rejects.toThrow('Failed to list stored assets.')
  })
})

describe('deletePrivateAssets', () => {
  afterEach(() => del.mockReset())

  it('deletes an array of exact pathnames', async () => {
    del.mockResolvedValue(undefined)
    await deletePrivateAssets(['sources/g1-x/a.jpg', 'masks/g1-x/b.png'])
    expect(del).toHaveBeenCalledWith(
      ['sources/g1-x/a.jpg', 'masks/g1-x/b.png'],
      { storeId: TEST_STORE_ID, oidcToken: TEST_OIDC_TOKEN },
    )
  })

  it('is a no-op for an empty array (never calls del())', async () => {
    await deletePrivateAssets([])
    expect(del).not.toHaveBeenCalled()
  })

  it('sanitizes underlying errors', async () => {
    del.mockRejectedValue(new Error('leaky detail'))
    await expect(deletePrivateAssets(['sources/g1-x/a.jpg'])).rejects.toThrow('Failed to delete stored assets.')
  })
})

describe('writeDeletionJournalEntry', () => {
  afterEach(() => put.mockReset())

  it('writes under deletion-journal/ with access: private and a unique pathname', async () => {
    put.mockResolvedValue({ pathname: 'deletion-journal/whatever.json' })
    await writeDeletionJournalEntry(Buffer.from('{}'))

    expect(put).toHaveBeenCalledTimes(1)
    const [pathname, , options] = put.mock.calls[0]
    expect(pathname).toMatch(/^deletion-journal\/[0-9a-f-]{36}\.json$/)
    expect(options.access).toBe('private')
    expect(options.contentType).toBe('application/json')
  })

  it('sanitizes underlying errors', async () => {
    put.mockRejectedValue(new Error('leaky detail'))
    await expect(writeDeletionJournalEntry(Buffer.from('{}'))).rejects.toThrow('Failed to record deletion journal entry.')
  })
})

describe('writeGroupTombstone / groupTombstoneExists', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    put.mockReset()
    get.mockReset()
  })

  it('writes a tombstone under tombstones/ with access: private, keyed only by an HMAC-derived reference', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    put.mockResolvedValue({ pathname: 'tombstones/whatever.json' })
    const { groupId } = createAssetLifecycleGroup()

    await writeGroupTombstone(groupId, 'request')

    expect(put).toHaveBeenCalledTimes(1)
    const [pathname, body, options] = put.mock.calls[0]
    expect(pathname).toMatch(/^tombstones\/[A-Za-z0-9_-]+\.json$/)
    expect(pathname).not.toContain(groupId)
    expect(options.access).toBe('private')
    expect(options.allowOverwrite).toBe(true)

    const payload = JSON.parse((body as Buffer).toString('utf8'))
    expect(payload.reason).toBe('request')
    expect(typeof payload.closedAt).toBe('number')
    expect(JSON.stringify(payload)).not.toContain(groupId)
  })

  it('derives the same tombstone pathname for the same group id (deterministic)', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    put.mockResolvedValue({ pathname: 'tombstones/x.json' })
    const { groupId } = createAssetLifecycleGroup()

    await writeGroupTombstone(groupId, 'request')
    await writeGroupTombstone(groupId, 'retention')

    const [pathnameA] = put.mock.calls[0]
    const [pathnameB] = put.mock.calls[1]
    expect(pathnameA).toBe(pathnameB)
  })

  it('derives different tombstone pathnames for different group ids', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    put.mockResolvedValue({ pathname: 'tombstones/x.json' })
    const a = createAssetLifecycleGroup()
    const b = createAssetLifecycleGroup()

    await writeGroupTombstone(a.groupId, 'request')
    await writeGroupTombstone(b.groupId, 'request')

    const [pathnameA] = put.mock.calls[0]
    const [pathnameB] = put.mock.calls[1]
    expect(pathnameA).not.toBe(pathnameB)
  })

  it('rejects an invalid group id before ever calling Blob put()', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    await expect(writeGroupTombstone('not-a-real-group', 'request')).rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('fails closed on write when the secret is missing', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    const { groupId } = createAssetLifecycleGroup()
    await expect(writeGroupTombstone(groupId, 'request')).rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('sanitizes underlying write errors', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    put.mockRejectedValue(new Error('token=super-secret-detail'))
    const { groupId } = createAssetLifecycleGroup()
    await expect(writeGroupTombstone(groupId, 'request')).rejects.toThrow('Failed to close asset lifecycle group.')
  })

  it('reports false for a group with no tombstone', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    get.mockResolvedValue(null)
    const { groupId } = createAssetLifecycleGroup()
    await expect(groupTombstoneExists(groupId)).resolves.toBe(false)
  })

  it('reports true once a tombstone has been written, checking the same derived pathname', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    get.mockResolvedValue({ pathname: 'tombstones/x.json' } as never)
    const { groupId } = createAssetLifecycleGroup()

    await expect(groupTombstoneExists(groupId)).resolves.toBe(true)
    // F-4 cache hardening: tombstone reads must bypass CDN cache — a stale
    // cached "not found" is exactly the resurrection window F-1 closes.
    expect(get).toHaveBeenCalledWith(expect.stringMatching(/^tombstones\//), {
      storeId: TEST_STORE_ID,
      oidcToken: TEST_OIDC_TOKEN,
      access: 'private',
      useCache: false,
    })
  })

  it('rejects an invalid group id before ever calling Blob get()', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    await expect(groupTombstoneExists('not-a-real-group')).rejects.toBeInstanceOf(PrivateAssetError)
    expect(get).not.toHaveBeenCalled()
  })

  it('fails closed (throws) when checking and the secret is missing', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    const { groupId } = createAssetLifecycleGroup()
    await expect(groupTombstoneExists(groupId)).rejects.toBeInstanceOf(PrivateAssetError)
  })

  it('fails closed (throws, does not report false) when the underlying read errors', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    get.mockRejectedValue(new Error('blob outage'))
    const { groupId } = createAssetLifecycleGroup()
    await expect(groupTombstoneExists(groupId)).rejects.toBeInstanceOf(PrivateAssetError)
  })
})

describe('assetAccessSecret', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('returns the configured secret when valid', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    expect(assetAccessSecret()).toBe(VALID_SECRET)
  })

  it('fails closed when missing', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    expect(() => assetAccessSecret()).toThrow(PrivateAssetError)
  })

  it('fails closed when too short', () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', 'short')
    expect(() => assetAccessSecret()).toThrow(PrivateAssetError)
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
    expect(get).toHaveBeenCalledWith('results/a.jpg', {
      storeId: TEST_STORE_ID,
      oidcToken: TEST_OIDC_TOKEN,
      access: 'private',
    })
  })

  it('sanitizes underlying errors', async () => {
    get.mockRejectedValue(new Error('leaky detail'))
    await expect(readPrivateAsset('results/a.jpg')).rejects.toThrow('Failed to read stored asset.')
  })
})

describe('private store auth', () => {
  afterEach(() => {
    put.mockReset()
    get.mockReset()
    list.mockReset()
    del.mockReset()
    issueSignedToken.mockReset()
    presignUrl.mockReset()
  })

  it('gives put() (uploadPrivateAsset) explicit storeId + oidcToken, and no token, under OIDC', async () => {
    put.mockResolvedValue({ pathname: 'sources/x.jpg' })
    const { groupId } = createAssetLifecycleGroup()

    await uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg')

    const options = put.mock.calls[0][2]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.oidcToken).toBe(TEST_OIDC_TOKEN)
    expect(options.token).toBeUndefined()
  })

  it('gives list() (listPrivateAssets) explicit storeId + oidcToken, and no token, under OIDC', async () => {
    list.mockResolvedValue({ blobs: [], cursor: undefined, hasMore: false })

    await listPrivateAssets('sources/')

    const options = list.mock.calls[0][0]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.oidcToken).toBe(TEST_OIDC_TOKEN)
    expect(options.token).toBeUndefined()
  })

  it('gives del() (deletePrivateAssets) explicit storeId + oidcToken, and no token, under OIDC', async () => {
    del.mockResolvedValue(undefined)

    await deletePrivateAssets(['sources/g1-x/a.jpg'])

    const options = del.mock.calls[0][1]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.oidcToken).toBe(TEST_OIDC_TOKEN)
    expect(options.token).toBeUndefined()
  })

  it('gives get() (readPrivateAsset) explicit storeId + oidcToken, and no token, under OIDC', async () => {
    get.mockResolvedValue(null)

    await readPrivateAsset('results/a.jpg')

    const options = get.mock.calls[0][1]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.oidcToken).toBe(TEST_OIDC_TOKEN)
    expect(options.token).toBeUndefined()
  })

  it('gives issueSignedToken() (createProviderGetUrl) explicit storeId + oidcToken, and no token, under OIDC', async () => {
    issueSignedToken.mockResolvedValue({
      delegationToken: 'd', clientSigningToken: 'c', validUntil: Date.now() + 60_000,
    })
    presignUrl.mockResolvedValue({ presignedUrl: 'https://blob.example/signed' })

    await createProviderGetUrl('sources/a.jpg', 60_000)

    const options = issueSignedToken.mock.calls[0][0]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.oidcToken).toBe(TEST_OIDC_TOKEN)
    expect(options.token).toBeUndefined()
  })

  it('never forwards storeId/oidcToken/token to presignUrl — it only takes the already-issued signed token', async () => {
    issueSignedToken.mockResolvedValue({
      delegationToken: 'd', clientSigningToken: 'c', validUntil: Date.now() + 60_000,
    })
    presignUrl.mockResolvedValue({ presignedUrl: 'https://blob.example/signed' })

    await createProviderGetUrl('sources/a.jpg', 60_000)

    const presignOptions = presignUrl.mock.calls[0][1]
    expect(presignOptions).not.toHaveProperty('storeId')
    expect(presignOptions).not.toHaveProperty('oidcToken')
    expect(presignOptions).not.toHaveProperty('token')
    // GET-only, single-pathname, private — unchanged by the store-binding correction.
    expect(presignOptions.operation).toBe('get')
    expect(presignOptions.pathname).toBe('sources/a.jpg')
    expect(presignOptions.access).toBe('private')
  })

  it('falls back to PRIVATE_ASSETS_READ_WRITE_TOKEN (not oidcToken) when no OIDC token is available', async () => {
    vi.stubEnv('VERCEL_OIDC_TOKEN', '')
    vi.stubEnv('PRIVATE_ASSETS_READ_WRITE_TOKEN', 'fixture-fallback-token')
    put.mockResolvedValue({ pathname: 'sources/x.jpg' })
    const { groupId } = createAssetLifecycleGroup()

    await uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg')

    const options = put.mock.calls[0][2]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.token).toBe('fixture-fallback-token')
    expect(options.oidcToken).toBeUndefined()
  })

  it('prefers OIDC over PRIVATE_ASSETS_READ_WRITE_TOKEN when both are present', async () => {
    vi.stubEnv('PRIVATE_ASSETS_READ_WRITE_TOKEN', 'fixture-fallback-token')
    put.mockResolvedValue({ pathname: 'sources/x.jpg' })
    const { groupId } = createAssetLifecycleGroup()

    await uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg')

    const options = put.mock.calls[0][2]
    expect(options.oidcToken).toBe(TEST_OIDC_TOKEN)
    expect(options.token).toBeUndefined()
  })

  it('fails closed before any Blob call when PRIVATE_ASSETS_STORE_ID is missing', async () => {
    vi.stubEnv('PRIVATE_ASSETS_STORE_ID', '')
    const { groupId } = createAssetLifecycleGroup()

    await expect(uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('fails closed before any Blob call when PRIVATE_ASSETS_STORE_ID is whitespace-only', async () => {
    vi.stubEnv('PRIVATE_ASSETS_STORE_ID', '   ')
    const { groupId } = createAssetLifecycleGroup()

    await expect(uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('fails closed before any Blob call when the store id is set but neither OIDC nor a private fallback token is available', async () => {
    vi.stubEnv('VERCEL_OIDC_TOKEN', '')
    vi.stubEnv('PRIVATE_ASSETS_READ_WRITE_TOKEN', '')
    const { groupId } = createAssetLifecycleGroup()

    await expect(uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('never authenticates via the old generic BLOB_STORE_ID / BLOB_READ_WRITE_TOKEN — even when only those are set', async () => {
    vi.stubEnv('PRIVATE_ASSETS_STORE_ID', '')
    vi.stubEnv('VERCEL_OIDC_TOKEN', '')
    vi.stubEnv('BLOB_STORE_ID', 'old-public-store')
    vi.stubEnv('BLOB_READ_WRITE_TOKEN', 'old-public-token')
    const { groupId } = createAssetLifecycleGroup()

    await expect(uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg'))
      .rejects.toBeInstanceOf(PrivateAssetError)
    expect(put).not.toHaveBeenCalled()
  })

  it('ignores the old generic BLOB_STORE_ID / BLOB_READ_WRITE_TOKEN even when the private store is correctly configured', async () => {
    vi.stubEnv('BLOB_STORE_ID', 'old-public-store')
    vi.stubEnv('BLOB_READ_WRITE_TOKEN', 'old-public-token')
    put.mockResolvedValue({ pathname: 'sources/x.jpg' })
    const { groupId } = createAssetLifecycleGroup()

    await uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg')

    const options = put.mock.calls[0][2]
    expect(options.storeId).toBe(TEST_STORE_ID)
    expect(options.storeId).not.toBe('old-public-store')
    expect(options.token).not.toBe('old-public-token')
    expect(JSON.stringify(options)).not.toContain('old-public-store')
    expect(JSON.stringify(options)).not.toContain('old-public-token')
  })

  it('never touches access: public regardless of which auth path is used', async () => {
    put.mockResolvedValue({ pathname: 'sources/x.jpg' })
    const { groupId } = createAssetLifecycleGroup()

    await uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg')

    expect(put.mock.calls[0][2].access).toBe('private')
  })

  it('sanitized fail-closed error does not leak the store id or any token', async () => {
    vi.stubEnv('PRIVATE_ASSETS_STORE_ID', '')
    vi.stubEnv('BLOB_STORE_ID', 'old-public-store')
    vi.stubEnv('BLOB_READ_WRITE_TOKEN', 'old-public-token')
    const { groupId } = createAssetLifecycleGroup()

    const error = await uploadPrivateAsset('sources', groupId, Buffer.from('x'), 'image/jpeg').catch(e => e)
    expect(error).toBeInstanceOf(PrivateAssetError)
    expect(error.message).toBe('Private asset storage is not configured.')
    expect(error.message).not.toContain(TEST_STORE_ID)
    expect(error.message).not.toContain(TEST_OIDC_TOKEN)
    expect(error.message).not.toContain('old-public-store')
    expect(error.message).not.toContain('old-public-token')
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
    const sigBytes = Buffer.from(sig, 'base64url')
    const tamperedBytes = Buffer.from(sigBytes)
    tamperedBytes[0] ^= 0x01
    const flipped = tamperedBytes.toString('base64url')
    expect(flipped).not.toBe(sig)
    expect(Buffer.compare(tamperedBytes, sigBytes)).not.toBe(0)
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
