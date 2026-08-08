import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { uploadPrivateAsset, createResultCapability } = vi.hoisted(() => ({
  uploadPrivateAsset: vi.fn(),
  createResultCapability: vi.fn(),
}))
vi.mock('@/lib/privateAssets', () => ({ uploadPrivateAsset, createResultCapability }))

import { GET } from './route'

function pollRequest(id = 'req-1'): NextRequest {
  return new NextRequest(`http://localhost/api/poll?id=${id}`)
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
}

describe('GET /api/poll — M0.2 result handling', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    uploadPrivateAsset.mockReset()
    createResultCapability.mockReset()
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

    expect(uploadPrivateAsset).toHaveBeenCalledWith('results', expect.any(Buffer), 'image/jpeg')
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
