import { describe, expect, it, vi } from 'vitest'
import { CONTAINMENT_ERROR_CODE } from '@/lib/containmentCode'
import { buildBearerAuthHeader, classifyProxyFailure, createObjectUrlManager } from './resultDelivery'

describe('buildBearerAuthHeader', () => {
  it('sends the capability as a Bearer Authorization header', () => {
    expect(buildBearerAuthHeader('tok123')).toEqual({ Authorization: 'Bearer tok123' })
  })
})

describe('classifyProxyFailure', () => {
  it('recognizes the M0.0 containment shape and stays terminal (no retry hint)', () => {
    const result = classifyProxyFailure(503, { code: CONTAINMENT_ERROR_CODE, error: 'Maintenance' })
    expect(result.message).toBe('Maintenance')
  })

  it('falls back to the generic containment message when the body has no error text', () => {
    const result = classifyProxyFailure(503, { code: CONTAINMENT_ERROR_CODE })
    expect(result.message).toMatch(/Генерация временно недоступна/)
  })

  it('does not treat an unrelated 503 as containment', () => {
    const result = classifyProxyFailure(503, { error: 'unrelated outage' })
    expect(result.message).not.toMatch(/Генерация временно недоступна/)
  })

  it('maps 401 to an unauthorized/expired message', () => {
    expect(classifyProxyFailure(401, null).message).toMatch(/истёк/)
  })

  it('maps 403 to the same unauthorized/expired message as 401', () => {
    expect(classifyProxyFailure(403, null)).toEqual(classifyProxyFailure(401, null))
  })

  it('maps 404 to a not-found message', () => {
    expect(classifyProxyFailure(404, null).message).toMatch(/больше не доступен/)
  })

  it('maps any other status to a generic failure message', () => {
    expect(classifyProxyFailure(500, null).message).toMatch(/Не удалось получить результат/)
  })
})

describe('createObjectUrlManager', () => {
  it('does not revoke anything before a URL has been set', () => {
    const revoke = vi.fn()
    const manager = createObjectUrlManager(revoke)
    manager.clear()
    expect(revoke).not.toHaveBeenCalled()
  })

  it('revokes the previous object URL when a new one is set', () => {
    const revoke = vi.fn()
    const manager = createObjectUrlManager(revoke)
    manager.set('blob:one')
    manager.set('blob:two')
    expect(revoke).toHaveBeenCalledExactlyOnceWith('blob:one')
  })

  it('revokes the current object URL on clear() and does not double-revoke', () => {
    const revoke = vi.fn()
    const manager = createObjectUrlManager(revoke)
    manager.set('blob:one')
    manager.clear()
    manager.clear()
    expect(revoke).toHaveBeenCalledExactlyOnceWith('blob:one')
  })
})
