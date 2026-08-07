import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { put, submit } = vi.hoisted(() => ({
  put: vi.fn(() => {
    throw new Error('Blob put() must not be called while M0.0 containment is active')
  }),
  submit: vi.fn(() => {
    throw new Error('ImageProvider.submit() must not be called while M0.0 containment is active')
  }),
}))
vi.mock('@vercel/blob', () => ({ put }))
vi.mock('@/providers/image/createImageProvider', () => ({
  createImageProvider: () => ({ submit }),
}))

import { CONTAINMENT_ERROR_CODE } from '@/lib/containment'
import { POST } from './route'

function containedRequest(): NextRequest {
  return new NextRequest('http://localhost/api/generate', { method: 'POST' })
}

describe('POST /api/generate — M0.0 containment', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    put.mockClear()
    submit.mockClear()
  })

  it('returns 503 M0_CONTAINMENT_ACTIVE in a production-like runtime, without reading the request body, calling Blob, or calling the image provider', async () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'production')
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)

    const req = containedRequest()
    const formDataSpy = vi.spyOn(req, 'formData')

    const res = await POST(req)

    expect(res.status).toBe(503)
    const body = await res.json()
    expect(body.code).toBe(CONTAINMENT_ERROR_CODE)

    expect(formDataSpy).not.toHaveBeenCalled()
    expect(put).not.toHaveBeenCalled()
    expect(submit).not.toHaveBeenCalled()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('stays fail-closed when config is ambiguous (VERCEL_ENV unset, NODE_ENV unrecognized)', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'staging')

    const res = await POST(containedRequest())

    expect(res.status).toBe(503)
    expect((await res.json()).code).toBe(CONTAINMENT_ERROR_CODE)
    expect(put).not.toHaveBeenCalled()
    expect(submit).not.toHaveBeenCalled()
  })

  it('client-supplied header/query/cookie cannot bypass containment', async () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'production')

    const req = new NextRequest(
      'http://localhost/api/generate?containment=off&bypass=true&debug=1',
      {
        method: 'POST',
        headers: {
          'x-bypass-containment': 'true',
          'x-debug-mode': 'true',
          cookie: 'containment=disabled; owner=true',
        },
      },
    )

    const res = await POST(req)

    expect(res.status).toBe(503)
    expect((await res.json()).code).toBe(CONTAINMENT_ERROR_CODE)
    expect(put).not.toHaveBeenCalled()
    expect(submit).not.toHaveBeenCalled()
  })

  it('BYPASS_RATE_LIMIT does not disable containment in production', async () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('BYPASS_RATE_LIMIT', 'true')

    const res = await POST(containedRequest())

    expect(res.status).toBe(503)
    expect((await res.json()).code).toBe(CONTAINMENT_ERROR_CODE)
    expect(put).not.toHaveBeenCalled()
    expect(submit).not.toHaveBeenCalled()
  })
})
