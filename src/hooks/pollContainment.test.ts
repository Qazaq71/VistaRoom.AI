import { describe, expect, it } from 'vitest'
import { CONTAINMENT_ERROR_CODE } from '@/lib/containmentCode'
import { CONTAINMENT_FALLBACK_MESSAGE, classifyPollContainment } from './pollContainment'

describe('classifyPollContainment (client-side /api/poll response classifier)', () => {
  it('recognizes 503 + M0_CONTAINMENT_ACTIVE as terminal containment and surfaces the server error message', () => {
    const result = classifyPollContainment(503, {
      error: 'Генерация временно недоступна. Сервис на техническом обслуживании, попробуйте позже.',
      code: CONTAINMENT_ERROR_CODE,
    })

    expect(result.isContainment).toBe(true)
    expect(result.message).toBe(
      'Генерация временно недоступна. Сервис на техническом обслуживании, попробуйте позже.',
    )
  })

  it('falls back to a safe message when error is missing', () => {
    const result = classifyPollContainment(503, { code: CONTAINMENT_ERROR_CODE })
    expect(result.isContainment).toBe(true)
    expect(result.message).toBe(CONTAINMENT_FALLBACK_MESSAGE)
  })

  it('falls back to a safe message when error is present but empty/whitespace/non-string', () => {
    expect(classifyPollContainment(503, { code: CONTAINMENT_ERROR_CODE, error: '' }).message).toBe(
      CONTAINMENT_FALLBACK_MESSAGE,
    )
    expect(classifyPollContainment(503, { code: CONTAINMENT_ERROR_CODE, error: '   ' }).message).toBe(
      CONTAINMENT_FALLBACK_MESSAGE,
    )
    expect(classifyPollContainment(503, { code: CONTAINMENT_ERROR_CODE, error: 42 }).message).toBe(
      CONTAINMENT_FALLBACK_MESSAGE,
    )
  })

  it('does not classify an ordinary transient non-OK response as containment', () => {
    expect(classifyPollContainment(500, { error: 'Не удалось проверить статус генерации.' })).toEqual({
      isContainment: false,
      message: '',
    })
    expect(classifyPollContainment(502, {})).toEqual({ isContainment: false, message: '' })
  })

  it('does not classify a 503 without the M0_CONTAINMENT_ACTIVE code as containment', () => {
    expect(classifyPollContainment(503, { error: 'Service unavailable', code: 'SOME_OTHER_CODE' })).toEqual({
      isContainment: false,
      message: '',
    })
    expect(classifyPollContainment(503, {})).toEqual({ isContainment: false, message: '' })
  })

  it('handles a missing/unparseable body safely (no throw, not classified as containment)', () => {
    expect(classifyPollContainment(503, null)).toEqual({ isContainment: false, message: '' })
    expect(classifyPollContainment(503, undefined)).toEqual({ isContainment: false, message: '' })
    expect(classifyPollContainment(503, 'plain text body')).toEqual({ isContainment: false, message: '' })
  })
})
