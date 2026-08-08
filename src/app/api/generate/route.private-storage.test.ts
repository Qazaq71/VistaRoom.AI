import { NextRequest } from 'next/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { uploadPrivateAsset, createProviderGetUrl, submit, deleteAssetGroup, recordDeletionJournalEntry } = vi.hoisted(() => ({
  uploadPrivateAsset: vi.fn(),
  createProviderGetUrl: vi.fn(),
  submit: vi.fn(),
  deleteAssetGroup: vi.fn(),
  recordDeletionJournalEntry: vi.fn(),
}))

// Real createAssetLifecycleGroup/parseGroupId/assetAccessSecret (pure, no
// Blob calls) so M0.3 group/capability logic runs for real. The asset-upload
// path is stubbed; group deletion (F-1 tombstone-first) and the deletion
// journal (F-3) are mocked at their own module boundaries — unit-tested for
// real in assetGroupDeletion.test.ts / deletionJournal.test.ts — so no test
// here ever makes a real @vercel/blob call.
vi.mock('@/lib/privateAssets', async () => {
  const actual = await vi.importActual<typeof import('@/lib/privateAssets')>('@/lib/privateAssets')
  return { ...actual, uploadPrivateAsset, createProviderGetUrl }
})
vi.mock('@/lib/assetGroupDeletion', () => ({ deleteAssetGroup }))
vi.mock('@/lib/deletionJournal', () => ({ recordDeletionJournalEntry }))
vi.mock('@/providers/image/createImageProvider', () => ({
  createImageProvider: () => ({ submit }),
}))

import { POST } from './route'

// A 2x2 red JPEG, small enough to skip the sharp() compression branch
// (< 200KB) so these tests exercise real image bytes without extra deps.
const TINY_JPEG_BASE64 =
  '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkI' +
  'CQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAACAAIBAREA/8QAFQABAQAAAAAA' +
  'AAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAA/AKgAB//Z'

function buildForm(includeMask: boolean): FormData {
  const form = new FormData()
  const bytes = Buffer.from(TINY_JPEG_BASE64, 'base64')
  form.append('image', new File([bytes], 'room.jpg', { type: 'image/jpeg' }))
  form.append('room', 'living')
  form.append('style', 'minimalist')
  form.append('mode', includeMask ? 'partial' : 'style')
  if (includeMask) {
    form.append('mask', new File([bytes], 'mask.png', { type: 'image/png' }))
  }
  return form
}

function generateRequest(includeMask: boolean): NextRequest {
  return new NextRequest('http://localhost/api/generate', { method: 'POST', body: buildForm(includeMask) })
}

const VALID_SECRET = 'a'.repeat(32)

function stubM03Env(): void {
  vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
  vi.stubEnv('ASSET_RETENTION_HOURS', '24') // test-only value, not a production TTL
}

describe('POST /api/generate — M0.2 private source/mask storage', () => {
  beforeEach(() => {
    // Default: best-effort cleanup on failure succeeds and verifies absence,
    // so pre-existing (non-F-3) tests below don't have to care about it.
    deleteAssetGroup.mockResolvedValue({ deletedCount: 0, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    uploadPrivateAsset.mockReset()
    createProviderGetUrl.mockReset()
    submit.mockReset()
    deleteAssetGroup.mockReset()
    recordDeletionJournalEntry.mockReset()
  })

  it('uploads the source image as a private asset and gives Fal only a presigned URL', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()

    uploadPrivateAsset.mockResolvedValue({ pathname: 'sources/g1-x/abc.jpg' })
    createProviderGetUrl.mockResolvedValue('https://blob.example/presigned-source')
    submit.mockResolvedValue({
      requestId: 'req-1', statusUrl: 'https://queue.fal.run/x/status', responseUrl: 'https://queue.fal.run/x',
      provider: 'fal', raw: {},
    })

    const res = await POST(generateRequest(false))
    expect(res.status).toBe(200)

    expect(uploadPrivateAsset).toHaveBeenCalledWith('sources', expect.any(String), expect.any(Buffer), 'image/jpeg')
    expect(createProviderGetUrl).toHaveBeenCalledWith('sources/g1-x/abc.jpg', expect.any(Number))

    const editRequest = submit.mock.calls[0][0]
    expect(editRequest.image).toBe('https://blob.example/presigned-source')

    const body = await res.json()
    expect(typeof body.assetLifecycleToken).toBe('string')
  })

  it('uploads the source and mask under the same lifecycle group', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()

    uploadPrivateAsset.mockImplementation(async (prefix: string) => ({ pathname: `${prefix}/id.${prefix === 'masks' ? 'png' : 'jpg'}` }))
    createProviderGetUrl.mockImplementation(async (pathname: string) => `https://blob.example/presigned/${pathname}`)
    submit.mockResolvedValue({
      requestId: 'req-1', statusUrl: 'https://queue.fal.run/x/status', responseUrl: 'https://queue.fal.run/x',
      provider: 'fal', raw: {},
    })

    const res = await POST(generateRequest(true))
    expect(res.status).toBe(200)

    expect(uploadPrivateAsset).toHaveBeenCalledWith('sources', expect.any(String), expect.any(Buffer), 'image/jpeg')
    expect(uploadPrivateAsset).toHaveBeenCalledWith('masks', expect.any(String), expect.any(Buffer), 'image/png')

    const sourceGroupId = uploadPrivateAsset.mock.calls.find(c => c[0] === 'sources')?.[1]
    const maskGroupId = uploadPrivateAsset.mock.calls.find(c => c[0] === 'masks')?.[1]
    expect(sourceGroupId).toBe(maskGroupId)

    const editRequest = submit.mock.calls[0][0]
    expect(editRequest.mask).toBe('https://blob.example/presigned/masks/id.png')
    expect(editRequest.image).not.toContain('masks/')
  })

  it('fails closed with no Blob/Fal call when ASSET_RETENTION_HOURS is missing', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    // ASSET_RETENTION_HOURS intentionally left unset.

    const res = await POST(generateRequest(false))

    expect(res.status).toBe(500)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(submit).not.toHaveBeenCalled()
  })

  it('fails closed with no Blob/Fal call when ASSET_ACCESS_SECRET is missing', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    vi.stubEnv('ASSET_RETENTION_HOURS', '24')
    // ASSET_ACCESS_SECRET intentionally left unset.

    const res = await POST(generateRequest(false))

    expect(res.status).toBe(500)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(submit).not.toHaveBeenCalled()
  })

  it('never falls back to a public URL when private storage fails', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()

    uploadPrivateAsset.mockRejectedValue(new Error('Failed to store asset.'))

    const res = await POST(generateRequest(false))

    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body.error).not.toMatch(/public|blob\.vercel-storage/i)
    expect(submit).not.toHaveBeenCalled()
  })

  it('never returns a raw private pathname, group id or provider URL to the client', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()

    uploadPrivateAsset.mockResolvedValue({ pathname: 'sources/g1-x/secret-id.jpg' })
    createProviderGetUrl.mockResolvedValue('https://blob.example/presigned-source?sig=abc')
    submit.mockResolvedValue({
      requestId: 'req-1', statusUrl: 'https://queue.fal.run/x/status', responseUrl: 'https://queue.fal.run/x',
      provider: 'fal', raw: {},
    })

    const res = await POST(generateRequest(false))
    const body = await res.json()
    const serialized = JSON.stringify(body)

    expect(serialized).not.toContain('sources/g1-x/secret-id.jpg')
    expect(serialized).not.toContain('presigned-source')
    const usedGroupId = uploadPrivateAsset.mock.calls[0][1] as string
    expect(serialized).not.toContain(usedGroupId)
  })
})

describe('POST /api/generate — M0.3 F-3 failed-generation cleanup journaling', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    uploadPrivateAsset.mockReset()
    createProviderGetUrl.mockReset()
    submit.mockReset()
    deleteAssetGroup.mockReset()
    recordDeletionJournalEntry.mockReset()
  })

  function triggerFailureAfterGroupCreated(): NextRequest {
    // uploadPrivateAsset (sources) is the first Blob call after the lifecycle
    // group is created — rejecting it deterministically reaches the outer
    // catch with groupId already set, without depending on any other branch.
    uploadPrivateAsset.mockRejectedValue(new Error('Failed to store asset.'))
    return generateRequest(false)
  }

  it('calls deleteAssetGroup with reason failed-generation-cleanup', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()
    deleteAssetGroup.mockResolvedValue({ deletedCount: 2, verifiedAbsent: true })

    await POST(triggerFailureAfterGroupCreated())

    expect(deleteAssetGroup).toHaveBeenCalledTimes(1)
    expect(deleteAssetGroup).toHaveBeenCalledWith(expect.any(String), 'failed-generation-cleanup')
  })

  it('records a deletion-journal entry when cleanup verifies absence', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()
    deleteAssetGroup.mockResolvedValue({ deletedCount: 2, verifiedAbsent: true })

    await POST(triggerFailureAfterGroupCreated())

    const [groupIdArg] = deleteAssetGroup.mock.calls[0]
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith({
      reason: 'failed-generation-cleanup',
      groupIdentifier: groupIdArg,
      deletedCount: 2,
    })
  })

  it('does not record a journal entry when cleanup cannot verify absence', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: false })

    const res = await POST(triggerFailureAfterGroupCreated())

    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
    expect(res.status).toBe(500)
    expect((await res.json()).error).toBe('Image generation failed. Please try again.')
  })

  it('does not record a journal entry, and still returns the original failure, when deleteAssetGroup throws', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()
    deleteAssetGroup.mockRejectedValue(new Error('blob outage'))

    const res = await POST(triggerFailureAfterGroupCreated())

    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body.error).toBe('Image generation failed. Please try again.')
    expect(JSON.stringify(body)).not.toMatch(/blob outage/i)
  })

  it('does not mask the original generation failure when the journal write itself throws', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    stubM03Env()
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockRejectedValue(new Error('journal outage'))

    const res = await POST(triggerFailureAfterGroupCreated())

    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body.error).toBe('Image generation failed. Please try again.')
    expect(JSON.stringify(body)).not.toMatch(/journal outage/i)
  })
})
