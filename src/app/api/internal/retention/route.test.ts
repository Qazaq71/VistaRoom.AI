import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

const { runRetentionSweep } = vi.hoisted(() => ({
  runRetentionSweep: vi.fn(),
}))
vi.mock('@/lib/retentionCleanup', () => ({ runRetentionSweep }))

import { GET } from './route'

const VALID_CRON_SECRET = 'c'.repeat(32)

function retentionRequest(headers: Record<string, string> = {}): NextRequest {
  return new NextRequest('http://localhost/api/internal/retention', { headers })
}

describe('GET /api/internal/retention — M0.3 scheduled cleanup', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    runRetentionSweep.mockReset()
  })

  it('rejects when CRON_SECRET is not configured, before calling the sweep', async () => {
    vi.stubEnv('CRON_SECRET', '')
    const res = await GET(retentionRequest({ Authorization: `Bearer ${VALID_CRON_SECRET}` }))
    expect(res.status).toBe(401)
    expect(runRetentionSweep).not.toHaveBeenCalled()
  })

  it('rejects when CRON_SECRET is configured but too short (weak)', async () => {
    vi.stubEnv('CRON_SECRET', 'short-secret')
    const res = await GET(retentionRequest({ Authorization: 'Bearer short-secret' }))
    expect(res.status).toBe(401)
    expect(runRetentionSweep).not.toHaveBeenCalled()
  })

  it('rejects a missing Authorization header', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    const res = await GET(retentionRequest())
    expect(res.status).toBe(401)
    expect(runRetentionSweep).not.toHaveBeenCalled()
  })

  it('rejects a wrong secret', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    const res = await GET(retentionRequest({ Authorization: `Bearer ${'d'.repeat(32)}` }))
    expect(res.status).toBe(401)
    expect(runRetentionSweep).not.toHaveBeenCalled()
  })

  it('rejects a non-Bearer Authorization scheme', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    const res = await GET(retentionRequest({ Authorization: `Basic ${VALID_CRON_SECRET}` }))
    expect(res.status).toBe(401)
    expect(runRetentionSweep).not.toHaveBeenCalled()
  })

  it('accepts the correct secret and runs the sweep', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    runRetentionSweep.mockResolvedValue({ ok: true })

    const res = await GET(retentionRequest({ Authorization: `Bearer ${VALID_CRON_SECRET}` }))

    expect(res.status).toBe(200)
    expect(runRetentionSweep).toHaveBeenCalledTimes(1)
  })

  it('returns a generic failure (not success) when the sweep reports partial failure', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    runRetentionSweep.mockResolvedValue({ ok: false })

    const res = await GET(retentionRequest({ Authorization: `Bearer ${VALID_CRON_SECRET}` }))

    expect(res.status).toBe(500)
  })

  it('returns a generic failure when the sweep throws, without leaking detail', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    runRetentionSweep.mockRejectedValue(new Error('token=super-secret raw pathname leak'))

    const res = await GET(retentionRequest({ Authorization: `Bearer ${VALID_CRON_SECRET}` }))
    const body = await res.json()

    expect(res.status).toBe(500)
    expect(JSON.stringify(body)).not.toMatch(/super-secret|pathname/i)
  })

  it('sets Cache-Control: private, no-store and no wildcard CORS on every response', async () => {
    vi.stubEnv('CRON_SECRET', '')
    const res = await GET(retentionRequest())
    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    expect(res.headers.get('Access-Control-Allow-Origin')).toBeNull()
  })

  it('uses a constant-time-safe comparison path (does not throw on length mismatch)', async () => {
    vi.stubEnv('CRON_SECRET', VALID_CRON_SECRET)
    const res = await GET(retentionRequest({ Authorization: 'Bearer short' }))
    expect(res.status).toBe(401)
  })
})
