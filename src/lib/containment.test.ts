import { afterEach, describe, expect, it, vi } from 'vitest'
import { CONTAINMENT_ERROR_CODE, containmentResponse, isContainmentActive } from './containment'

describe('isContainmentActive (M0.0 production kill switch)', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('blocks when deployed on Vercel with VERCEL_ENV=production', () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'production')
    expect(isContainmentActive()).toBe(true)
  })

  it('blocks when deployed on Vercel with VERCEL_ENV=preview', () => {
    vi.stubEnv('VERCEL_ENV', 'preview')
    vi.stubEnv('NODE_ENV', 'production')
    expect(isContainmentActive()).toBe(true)
  })

  it('blocks a Vercel deployment even if NODE_ENV misleadingly says development or test', () => {
    vi.stubEnv('VERCEL_ENV', 'production')
    vi.stubEnv('NODE_ENV', 'development')
    expect(isContainmentActive()).toBe(true)

    vi.stubEnv('NODE_ENV', 'test')
    expect(isContainmentActive()).toBe(true)
  })

  it('blocks a production-like local runtime (next build/start, no VERCEL_ENV)', () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'production')
    expect(isContainmentActive()).toBe(true)
  })

  it('blocks when NODE_ENV is missing or an unrecognized value (ambiguous config fails closed)', () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', '')
    expect(isContainmentActive()).toBe(true)

    vi.stubEnv('NODE_ENV', 'staging')
    expect(isContainmentActive()).toBe(true)
  })

  it('allows local development runtime (no VERCEL_ENV, NODE_ENV=development)', () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'development')
    expect(isContainmentActive()).toBe(false)
  })

  it('allows offline test runtime (no VERCEL_ENV, NODE_ENV=test)', () => {
    vi.stubEnv('VERCEL_ENV', '')
    vi.stubEnv('NODE_ENV', 'test')
    expect(isContainmentActive()).toBe(false)
  })
})

describe('containmentResponse', () => {
  it('returns a stable 503 with the machine-readable code and no internal detail', async () => {
    const res = containmentResponse()
    expect(res.status).toBe(503)

    const body = await res.json()
    expect(body.code).toBe(CONTAINMENT_ERROR_CODE)
    expect(typeof body.error).toBe('string')
    expect(body.error.length).toBeGreaterThan(0)
    expect(JSON.stringify(body)).not.toMatch(/stack|Authorization|FAL_API_KEY|token/i)
  })
})
