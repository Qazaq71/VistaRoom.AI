import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { readPrivateAsset, verifyResultCapability } = vi.hoisted(() => ({
  readPrivateAsset: vi.fn(),
  verifyResultCapability: vi.fn(),
}))
vi.mock('@/lib/privateAssets', () => ({ readPrivateAsset, verifyResultCapability }))

import { GET } from './route'

function proxyRequest(headers: Record<string, string> = {}): NextRequest {
  return new NextRequest('http://localhost/api/proxy', { headers })
}

const activeEnv = () => {
  vi.stubEnv('VERCEL_ENV', '')
  vi.stubEnv('NODE_ENV', 'test')
}

function streamOf(bytes: Uint8Array): ReadableStream<Uint8Array> {
  return new ReadableStream({
    start(controller) {
      controller.enqueue(bytes)
      controller.close()
    },
  })
}

describe('GET /api/proxy — M0.2 authorized private delivery', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    readPrivateAsset.mockReset()
    verifyResultCapability.mockReset()
  })

  it('rejects a missing Authorization header without calling Blob get()', async () => {
    activeEnv()
    const res = await GET(proxyRequest())
    expect(res.status).toBe(401)
    expect(verifyResultCapability).not.toHaveBeenCalled()
    expect(readPrivateAsset).not.toHaveBeenCalled()
  })

  it('rejects a malformed Authorization scheme (not Bearer)', async () => {
    activeEnv()
    const res = await GET(proxyRequest({ Authorization: 'Basic dXNlcjpwYXNz' }))
    expect(res.status).toBe(401)
    expect(verifyResultCapability).not.toHaveBeenCalled()
    expect(readPrivateAsset).not.toHaveBeenCalled()
  })

  it('the old ?url= query parameter no longer has any effect', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: false })
    const req = new NextRequest('http://localhost/api/proxy?url=' + encodeURIComponent('https://fal.media/x.jpg'))
    const res = await GET(req)
    expect(res.status).toBe(401)
    expect(readPrivateAsset).not.toHaveBeenCalled()
  })

  it('rejects an invalid/forged token before ever calling Blob get()', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: false })

    const res = await GET(proxyRequest({ Authorization: 'Bearer forged.token' }))

    expect(res.status).toBe(401)
    expect(readPrivateAsset).not.toHaveBeenCalled()
  })

  it('does not reveal why signature verification failed', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: false })
    const res = await GET(proxyRequest({ Authorization: 'Bearer expired.token' }))
    const body = await res.json()
    expect(JSON.stringify(body)).not.toMatch(/expired|signature|pathname|secret/i)
  })

  it('a valid capability calls private get() and streams the asset back', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: true, pathname: 'results/abc.jpg' })
    const bytes = new Uint8Array([9, 9, 9])
    readPrivateAsset.mockResolvedValue({
      statusCode: 200,
      stream: streamOf(bytes),
      headers: new Headers(),
      blob: { contentType: 'image/jpeg', size: bytes.byteLength, url: 'ignored', downloadUrl: 'ignored', pathname: 'results/abc.jpg', contentDisposition: '', cacheControl: '', uploadedAt: new Date(), etag: '' },
    })

    const res = await GET(proxyRequest({ Authorization: 'Bearer valid.token' }))

    expect(readPrivateAsset).toHaveBeenCalledWith('results/abc.jpg')
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('image/jpeg')
    const buf = await res.arrayBuffer()
    expect(new Uint8Array(buf)).toEqual(bytes)
  })

  it('only allows the results/ pathname the token carries (never a client-supplied one)', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: true, pathname: 'results/only-this-one.jpg' })
    readPrivateAsset.mockResolvedValue(null)

    await GET(proxyRequest({ Authorization: 'Bearer valid.token' }))

    expect(readPrivateAsset).toHaveBeenCalledWith('results/only-this-one.jpg')
    expect(readPrivateAsset).toHaveBeenCalledTimes(1)
  })

  it('returns 404 without revealing the internal pathname when the asset is missing', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: true, pathname: 'results/gone.jpg' })
    readPrivateAsset.mockResolvedValue(null)

    const res = await GET(proxyRequest({ Authorization: 'Bearer valid.token' }))
    const body = await res.json()

    expect(res.status).toBe(404)
    expect(JSON.stringify(body)).not.toContain('gone.jpg')
  })

  it('sets private/no-store, nosniff, and no wildcard CORS header', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: true, pathname: 'results/abc.jpg' })
    readPrivateAsset.mockResolvedValue({
      statusCode: 200,
      stream: streamOf(new Uint8Array([1])),
      headers: new Headers(),
      blob: { contentType: 'image/png', size: 1, url: 'ignored', downloadUrl: 'ignored', pathname: 'results/abc.jpg', contentDisposition: '', cacheControl: '', uploadedAt: new Date(), etag: '' },
    })

    const res = await GET(proxyRequest({ Authorization: 'Bearer valid.token' }))

    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    expect(res.headers.get('X-Content-Type-Options')).toBe('nosniff')
    expect(res.headers.get('Access-Control-Allow-Origin')).toBeNull()
    expect(res.headers.get('Cache-Control')).not.toMatch(/public|immutable/)
  })

  it('never reflects the pathname, token, or a Blob URL in the response body', async () => {
    activeEnv()
    verifyResultCapability.mockReturnValue({ ok: true, pathname: 'results/super-secret-id.jpg' })
    readPrivateAsset.mockResolvedValue({
      statusCode: 200,
      stream: streamOf(new Uint8Array([1])),
      headers: new Headers(),
      blob: { contentType: 'image/jpeg', size: 1, url: 'https://blob.example/should-not-leak', downloadUrl: 'ignored', pathname: 'results/super-secret-id.jpg', contentDisposition: '', cacheControl: '', uploadedAt: new Date(), etag: '' },
    })

    const res = await GET(proxyRequest({ Authorization: 'Bearer valid.token.value' }))
    const headerDump = JSON.stringify(Array.from(res.headers.entries()))

    expect(headerDump).not.toContain('super-secret-id.jpg')
    expect(headerDump).not.toContain('valid.token.value')
    expect(headerDump).not.toContain('blob.example')
  })
})
