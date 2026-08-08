import { NextRequest } from 'next/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const {
  uploadPrivateAsset,
  createResultCapability,
  verifyAssetLifecycleCapability,
  groupTombstoneExists,
  purgeTombstonedGroupAssets,
  recordDeletionJournalEntry,
  recordPendingCleanupJournalEntry,
} = vi.hoisted(() => ({
  uploadPrivateAsset: vi.fn(),
  createResultCapability: vi.fn(),
  verifyAssetLifecycleCapability: vi.fn(),
  groupTombstoneExists: vi.fn(),
  purgeTombstonedGroupAssets: vi.fn(),
  recordDeletionJournalEntry: vi.fn(),
  recordPendingCleanupJournalEntry: vi.fn(),
}))
// parseGroupId is real (pure, no Blob calls) so the F-2 retention-deadline
// re-check in the route runs for real against VALID_GROUP_ID's embedded
// creation time below.
vi.mock('@/lib/privateAssets', async () => {
  const actual = await vi.importActual<typeof import('@/lib/privateAssets')>('@/lib/privateAssets')
  return { ...actual, uploadPrivateAsset, createResultCapability, groupTombstoneExists }
})
vi.mock('@/lib/assetLifecycle', () => ({ verifyAssetLifecycleCapability }))
vi.mock('@/lib/assetGroupDeletion', () => ({ purgeTombstonedGroupAssets }))
vi.mock('@/lib/deletionJournal', () => ({ recordDeletionJournalEntry, recordPendingCleanupJournalEntry }))

import { GET } from './route'

// A freshly-timestamped group id (not the ancient shared 1970 fixture used
// elsewhere) so the real F-2 retention-deadline check below has something
// meaningful to compare "now" against.
function freshGroupId(now = Date.now()): string {
  return `g1-${now.toString(16).padStart(12, '0')}-11111111-1111-4111-8111-111111111111`
}
const VALID_GROUP_ID = freshGroupId()

// M0.3: every /api/poll request now requires a verified lifecycle Bearer
// token before any provider fetch or Blob call. These M0.2 result-handling
// tests aren't testing that gate itself (see route.test.ts / a dedicated
// M0.3 test file) — they stub a passing verification, an open (non-
// tombstoned) group and ample retention headroom, so the pre-existing M0.2
// behaviors below (redirect/streaming/private-result handling) keep
// exercising the same code paths they always did. The F-1/F-2 gates
// themselves are covered in the dedicated describe block further down.
function pollRequest(id = 'req-1'): NextRequest {
  return new NextRequest(`http://localhost/api/poll?id=${id}`, {
    headers: { Authorization: 'Bearer valid-lifecycle-token' },
  })
}

function jsonResponse(body: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'content-type': 'application/json' },
    ...init,
  })
}

function imageResponse(body: string, options: { status?: number; contentType?: string; contentLength?: string } = {}): Response {
  const headers: Record<string, string> = { 'content-type': options.contentType ?? 'image/jpeg' }
  if (options.contentLength !== undefined) headers['content-length'] = options.contentLength
  return new Response(body, { status: options.status ?? 200, headers })
}

// A fake Response whose body is a hand-controlled stream so tests can assert
// exactly how many chunks were read and that the stream was cancelled — a
// real Response/ReadableStream doesn't expose that without re-implementing
// the same reader logic under test. Only the surface route.ts actually reads
// (status, ok, headers.get, body.getReader) is implemented.
function streamedResponse(
  chunkSizes: number[],
  options: { contentType?: string; contentLength?: string } = {},
): { response: Response; read: ReturnType<typeof vi.fn>; cancel: ReturnType<typeof vi.fn> } {
  let index = 0
  const read = vi.fn(async () => {
    if (index >= chunkSizes.length) return { done: true, value: undefined }
    const value = new Uint8Array(chunkSizes[index])
    index += 1
    return { done: false, value }
  })
  const cancel = vi.fn(async () => {})

  const headers = new Headers({ 'content-type': options.contentType ?? 'image/jpeg' })
  if (options.contentLength !== undefined) headers.set('content-length', options.contentLength)

  const response = {
    ok: true,
    status: 200,
    headers,
    body: { getReader: () => ({ read, cancel }) },
  } as unknown as Response

  return { response, read, cancel }
}

const activeEnv = () => {
  vi.stubEnv('VERCEL_ENV', '')
  vi.stubEnv('NODE_ENV', 'test')
  // F-2: ample headroom before VALID_GROUP_ID's retention deadline for every
  // test in this file that isn't specifically exercising expiry.
  vi.stubEnv('ASSET_RETENTION_HOURS', '24')
}

describe('GET /api/poll — M0.2 result handling', () => {
  beforeEach(() => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: VALID_GROUP_ID })
    groupTombstoneExists.mockResolvedValue(false)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 0, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)
    recordPendingCleanupJournalEntry.mockResolvedValue(undefined)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    uploadPrivateAsset.mockReset()
    createResultCapability.mockReset()
    verifyAssetLifecycleCapability.mockReset()
    groupTombstoneExists.mockReset()
    purgeTombstonedGroupAssets.mockReset()
    recordDeletionJournalEntry.mockReset()
    recordPendingCleanupJournalEntry.mockReset()
  })

  it('does not create a Blob result while the generation is still processing', async () => {
    activeEnv()
    const fetchMock = vi.fn().mockResolvedValueOnce(jsonResponse({ status: 'IN_QUEUE' }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('processing')
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
  })

  it('on COMPLETED: validates host, downloads server-side, stores privately and returns only a capability token', async () => {
    activeEnv()
    const resultBody = 'fake-jpeg-bytes'
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(imageResponse(resultBody, { contentLength: String(resultBody.length) }))
    vi.stubGlobal('fetch', fetchMock)

    uploadPrivateAsset.mockResolvedValue({ pathname: 'results/generated-id.jpg' })
    createResultCapability.mockReturnValue('capability-token-abc')

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('succeeded')
    expect(body.resultToken).toBe('capability-token-abc')
    expect(body.outputUrl).toBeUndefined()

    expect(uploadPrivateAsset).toHaveBeenCalledWith('results', VALID_GROUP_ID, expect.any(Buffer), 'image/jpeg')
    expect(createResultCapability).toHaveBeenCalledWith('results/generated-id.jpg', expect.any(Number))

    const serialized = JSON.stringify(body)
    expect(serialized).not.toContain('fal.media')
    expect(serialized).not.toContain('generated-id.jpg')
  })

  it('blocks a provider result URL on a non-allowlisted host', async () => {
    activeEnv()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://evil.example.com/steal.jpg' }] }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(fetchMock).toHaveBeenCalledTimes(2) // never fetched the disallowed host
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('blocks a non-image content type', async () => {
    activeEnv()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(new Response('<html>not an image</html>', { status: 200, headers: { 'content-type': 'text/html' } }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('blocks an oversized result via the declared Content-Length', async () => {
    activeEnv()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(imageResponse('short-body', { contentLength: String(50 * 1024 * 1024) }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('FINDING-1 regression: never follows a redirect from the download, and never fetches the redirect target', async () => {
    activeEnv()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(new Response(null, {
        status: 302,
        headers: { location: 'https://evil.example.com/steal.jpg' },
      }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    // status check + result metadata + the one (blocked) download attempt —
    // no fourth call following Location to the redirect target.
    expect(fetchMock).toHaveBeenCalledTimes(3)

    const downloadCall = fetchMock.mock.calls[2]
    expect(downloadCall[0]).toBe('https://fal.media/files/result.jpg')
    expect(downloadCall[1]).toMatchObject({ redirect: 'manual' })

    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
    expect(JSON.stringify(body)).not.toContain('evil.example.com')
  })

  it('FINDING-2 regression: with no Content-Length, stops reading and cancels the stream as soon as the running total exceeds the limit', async () => {
    activeEnv()
    // Production RESULT_MAX_BYTES is 20MB; these chunks cross it on the 2nd read.
    const { response, read, cancel } = streamedResponse([
      15 * 1024 * 1024, // under the limit alone
      10 * 1024 * 1024, // running total (25MB) crosses the limit here
      5 * 1024 * 1024,  // must never be requested/read
    ]) // no content-length header at all

    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(response)
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    // Stopped after the second chunk (the one that crossed the limit) —
    // the third, oversized-if-summed chunk was never read.
    expect(read).toHaveBeenCalledTimes(2)
    expect(cancel).toHaveBeenCalledTimes(1)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
  })

  it('FINDING-2 regression: with an understated (false) Content-Length, still stops reading and cancels once the real bytes exceed the limit', async () => {
    activeEnv()
    const { response, read, cancel } = streamedResponse(
      [15 * 1024 * 1024, 10 * 1024 * 1024, 5 * 1024 * 1024],
      { contentLength: '100' }, // deliberately false — far below the real stream size
    )

    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(response)
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(read).toHaveBeenCalledTimes(2)
    expect(cancel).toHaveBeenCalledTimes(1)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
  })

  it('blocks the download on a non-OK upstream status', async () => {
    activeEnv()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(new Response('gone', { status: 404 }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('blocks on a download fetch failure/timeout', async () => {
    activeEnv()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockRejectedValueOnce(new Error('timeout'))
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('has no public fallback when private Blob upload fails', async () => {
    activeEnv()
    const resultBody = 'fake-jpeg-bytes'
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(imageResponse(resultBody, { contentLength: String(resultBody.length) }))
    vi.stubGlobal('fetch', fetchMock)

    uploadPrivateAsset.mockRejectedValue(new Error('Failed to store asset.'))

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(body.status).toBe('failed')
    expect(body.outputUrl).toBeNull()
    expect(JSON.stringify(body)).not.toMatch(/fal\.media|public/i)
    expect(createResultCapability).not.toHaveBeenCalled()
  })
})

// M0.3 F-1/F-2 correction: deterministic, fully local/mocked race-condition
// coverage for the three tombstone/retention checkpoints in route.ts —
// before any provider/Blob work, immediately before the result upload, and
// immediately after it. No real network, Vercel, Fal or Blob call, and no
// timer waiting — every "race" is expressed as a sequenced mock return.
describe('GET /api/poll — M0.3 F-1/F-2 tombstone and retention race protection', () => {
  function completedFetchSequence(): ReturnType<typeof vi.fn> {
    const resultBody = 'fake-jpeg-bytes'
    return vi.fn()
      .mockResolvedValueOnce(jsonResponse({ status: 'COMPLETED', response_url: 'https://queue.fal.run/x' }))
      .mockResolvedValueOnce(jsonResponse({ images: [{ url: 'https://fal.media/files/result.jpg' }] }))
      .mockResolvedValueOnce(imageResponse(resultBody, { contentLength: String(resultBody.length) }))
  }

  beforeEach(() => {
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: VALID_GROUP_ID })
    uploadPrivateAsset.mockResolvedValue({ pathname: 'results/whatever.jpg' })
    createResultCapability.mockReturnValue('capability-token-abc')
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)
    recordPendingCleanupJournalEntry.mockResolvedValue(undefined)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    uploadPrivateAsset.mockReset()
    createResultCapability.mockReset()
    verifyAssetLifecycleCapability.mockReset()
    groupTombstoneExists.mockReset()
    purgeTombstonedGroupAssets.mockReset()
    recordDeletionJournalEntry.mockReset()
    recordPendingCleanupJournalEntry.mockReset()
  })

  it('1. an old poll token used after DELETE (already tombstoned): no provider fetch, no upload, no success', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValue(true)
    const fetchMock = completedFetchSequence()
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(fetchMock).not.toHaveBeenCalled()
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
  })

  it('1b. the same tombstone gate blocks a token regardless of whether DELETE or the retention sweep wrote it — the route only ever checks presence', async () => {
    // deleteAssetGroup (used by both /api/assets DELETE and the retention
    // sweep) writes to the exact same tombstone this route reads back via
    // groupTombstoneExists — see assetGroupDeletion.test.ts for the write
    // side. From the route's point of view there is nothing to distinguish.
    activeEnv()
    groupTombstoneExists.mockResolvedValue(true)
    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('2. deletion lands after the initial check but before upload: the pre-upload re-check catches it, upload never runs', async () => {
    activeEnv()
    // checkpoint 1 (before provider work): open. checkpoint 2 (pre-upload,
    // after the provider download but before the private write): tombstoned.
    groupTombstoneExists.mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    const fetchMock = completedFetchSequence()
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    // The provider download itself isn't gated (it fetches nothing private),
    // but the private write it feeds into never runs.
    expect(fetchMock).toHaveBeenCalledTimes(3)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
  })

  it('3. tombstone appears between the last pre-upload check and upload completion: post-upload check purges the result and denies success', async () => {
    activeEnv()
    // checkpoint 1: open. checkpoint 2 (pre-upload): still open. checkpoint 3 (post-upload): tombstoned.
    groupTombstoneExists.mockResolvedValueOnce(false).mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(uploadPrivateAsset).toHaveBeenCalledTimes(1) // the leaked write did happen…
    expect(purgeTombstonedGroupAssets).toHaveBeenCalledWith(VALID_GROUP_ID) // …but was purged and verified absent…
    expect(createResultCapability).not.toHaveBeenCalled() // …no capability was ever issued…
    expect(res.status).toBe(401) // …and no success was ever returned.
    expect(JSON.stringify(body)).not.toContain('capability-token-abc')
  })

  // M0.3 F-4 correction: the four required outcomes of the post-upload
  // purge — production code must actually read verifiedAbsent (not just
  // call purge and assume success), and must record durable, privacy-safe
  // evidence distinguishing a confirmed corrective deletion from a merely
  // pending one.
  it('F-4.1: purge returns verifiedAbsent: true — no capability, 401, and a confirmed corrective journal (not merely "purge was called")', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValueOnce(false).mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })

    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(createResultCapability).not.toHaveBeenCalled()
    expect(recordPendingCleanupJournalEntry).not.toHaveBeenCalled()
    // The confirmed entry proves the *value* of verifiedAbsent was read, not
    // just that purgeTombstonedGroupAssets happened to be called.
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith({
      reason: 'post-deletion-race-cleanup',
      groupIdentifier: VALID_GROUP_ID,
      deletedCount: 1,
    })
  })

  it('F-4.2: purge returns verifiedAbsent: false — no capability, 401, a pending event (never a confirmed absence)', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValueOnce(false).mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 0, verifiedAbsent: false })

    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(createResultCapability).not.toHaveBeenCalled()
    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
    expect(recordPendingCleanupJournalEntry).toHaveBeenCalledWith({ groupIdentifier: VALID_GROUP_ID })
  })

  it('3b / F-4.3: purge throws — no capability, 401, a pending event, and the exception never reaches the client', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValueOnce(false).mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    purgeTombstonedGroupAssets.mockRejectedValue(new Error('blob outage'))
    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(res.status).toBe(401)
    expect(createResultCapability).not.toHaveBeenCalled()
    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
    expect(recordPendingCleanupJournalEntry).toHaveBeenCalledWith({ groupIdentifier: VALID_GROUP_ID })
    expect(JSON.stringify(body)).not.toMatch(/blob outage/i)
  })

  it('F-4.4: the pending journal write itself throws — denial is not weakened or masked, still 401, no capability', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValueOnce(false).mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 0, verifiedAbsent: false })
    recordPendingCleanupJournalEntry.mockRejectedValue(new Error('journal outage'))
    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(res.status).toBe(401)
    expect(createResultCapability).not.toHaveBeenCalled()
    expect(JSON.stringify(body)).not.toMatch(/journal outage/i)
  })

  it('5. a tombstone-check failure at checkpoint 1 fails closed: no upload, no capability, no success', async () => {
    activeEnv()
    groupTombstoneExists.mockRejectedValue(new Error('blob outage'))
    const fetchMock = completedFetchSequence()
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(fetchMock).not.toHaveBeenCalled()
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    expect(createResultCapability).not.toHaveBeenCalled()
  })

  it('5b. a tombstone-check failure at the pre-upload re-check also fails closed', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValueOnce(false).mockRejectedValueOnce(new Error('blob outage'))
    const fetchMock = completedFetchSequence()
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('F-2: does not upload a result for a group already past the current retention deadline', async () => {
    activeEnv() // ASSET_RETENTION_HOURS=24
    const expiredGroupId = freshGroupId(Date.now() - 48 * 60 * 60 * 1000) // 48h old, only 24h retention
    verifyAssetLifecycleCapability.mockReturnValue({ ok: true, groupId: expiredGroupId })
    const fetchMock = completedFetchSequence()
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(fetchMock).not.toHaveBeenCalled()
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
    // The retention check alone was decisive — it never needed to ask about
    // a tombstone for an already-expired group.
    expect(groupTombstoneExists).not.toHaveBeenCalled()
  })

  it('F-2: fails closed (denies the write) when the retention configuration is missing/invalid', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    // ASSET_RETENTION_HOURS intentionally left unset — unlike activeEnv().
    const fetchMock = completedFetchSequence()
    vi.stubGlobal('fetch', fetchMock)

    const res = await GET(pollRequest())

    expect(res.status).toBe(401)
    expect(fetchMock).not.toHaveBeenCalled()
    expect(uploadPrivateAsset).not.toHaveBeenCalled()
  })

  it('a fully open, in-retention, non-tombstoned group still succeeds normally', async () => {
    activeEnv()
    groupTombstoneExists.mockResolvedValue(false)
    vi.stubGlobal('fetch', completedFetchSequence())

    const res = await GET(pollRequest())
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.status).toBe('succeeded')
    expect(body.resultToken).toBe('capability-token-abc')
  })
})
