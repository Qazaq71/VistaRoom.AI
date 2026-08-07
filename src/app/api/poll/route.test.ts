import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CONTAINMENT_ERROR_CODE } from '@/lib/containment'
import { GET } from './route'

describe('GET /api/poll — M0.0 containment', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('returns 503 M0_CONTAINMENT_ACTIVE in a production-like runtime without any outbound fetch', async () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'production')
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)

    const req = new NextRequest('http://localhost/api/poll?id=abc123')
    const res = await GET(req)

    expect(res.status).toBe(503)
    expect((await res.json()).code).toBe(CONTAINMENT_ERROR_CODE)
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('stays fail-closed on ambiguous config', async () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', '')
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)

    const res = await GET(new NextRequest('http://localhost/api/poll?id=abc123'))

    expect(res.status).toBe(503)
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('client-supplied statusUrl/header cannot bypass containment', async () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'production')
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)

    const req = new NextRequest(
      'http://localhost/api/poll?id=abc123&statusUrl=' +
        encodeURIComponent('https://queue.fal.run/x/requests/abc123/status'),
      { headers: { 'x-bypass-containment': 'true' } },
    )
    const res = await GET(req)

    expect(res.status).toBe(503)
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})
