import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { uploadPrivateAsset, createProviderGetUrl, submit } = vi.hoisted(() => ({
  uploadPrivateAsset: vi.fn(),
  createProviderGetUrl: vi.fn(),
  submit: vi.fn(),
}))

vi.mock('@/lib/privateAssets', () => ({ uploadPrivateAsset, createProviderGetUrl }))
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

describe('POST /api/generate — M0.2 private source/mask storage', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    uploadPrivateAsset.mockReset()
    createProviderGetUrl.mockReset()
    submit.mockReset()
  })

  it('uploads the source image as a private asset and gives Fal only a presigned URL', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')

    uploadPrivateAsset.mockResolvedValue({ pathname: 'sources/abc.jpg' })
    createProviderGetUrl.mockResolvedValue('https://blob.example/presigned-source')
    submit.mockResolvedValue({
      requestId: 'req-1', statusUrl: 'https://queue.fal.run/x/status', responseUrl: 'https://queue.fal.run/x',
      provider: 'fal', raw: {},
    })

    const res = await POST(generateRequest(false))
    expect(res.status).toBe(200)

    expect(uploadPrivateAsset).toHaveBeenCalledWith('sources', expect.any(Buffer), 'image/jpeg')
    expect(createProviderGetUrl).toHaveBeenCalledWith('sources/abc.jpg', expect.any(Number))

    const editRequest = submit.mock.calls[0][0]
    expect(editRequest.image).toBe('https://blob.example/presigned-source')
  })

  it('uploads the mask as a private asset and passes only its presigned URL to the provider', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')

    uploadPrivateAsset.mockImplementation(async (prefix: string) => ({ pathname: `${prefix}/id.${prefix === 'masks' ? 'png' : 'jpg'}` }))
    createProviderGetUrl.mockImplementation(async (pathname: string) => `https://blob.example/presigned/${pathname}`)
    submit.mockResolvedValue({
      requestId: 'req-1', statusUrl: 'https://queue.fal.run/x/status', responseUrl: 'https://queue.fal.run/x',
      provider: 'fal', raw: {},
    })

    const res = await POST(generateRequest(true))
    expect(res.status).toBe(200)

    expect(uploadPrivateAsset).toHaveBeenCalledWith('sources', expect.any(Buffer), 'image/jpeg')
    expect(uploadPrivateAsset).toHaveBeenCalledWith('masks', expect.any(Buffer), 'image/png')

    const editRequest = submit.mock.calls[0][0]
    expect(editRequest.mask).toBe('https://blob.example/presigned/masks/id.png')
    expect(editRequest.image).not.toContain('masks/')
  })

  it('never falls back to a public URL when private storage fails', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')

    uploadPrivateAsset.mockRejectedValue(new Error('Failed to store asset.'))

    const res = await POST(generateRequest(false))

    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body.error).not.toMatch(/public|blob\.vercel-storage/i)
    expect(submit).not.toHaveBeenCalled()
  })

  it('never returns a raw private pathname or provider URL to the client', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')

    uploadPrivateAsset.mockResolvedValue({ pathname: 'sources/secret-id.jpg' })
    createProviderGetUrl.mockResolvedValue('https://blob.example/presigned-source?sig=abc')
    submit.mockResolvedValue({
      requestId: 'req-1', statusUrl: 'https://queue.fal.run/x/status', responseUrl: 'https://queue.fal.run/x',
      provider: 'fal', raw: {},
    })

    const res = await POST(generateRequest(false))
    const body = await res.json()
    const serialized = JSON.stringify(body)

    expect(serialized).not.toContain('sources/secret-id.jpg')
    expect(serialized).not.toContain('presigned-source')
  })
})
