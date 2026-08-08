import { afterEach, describe, expect, it, vi } from 'vitest'
import { getAssetRetentionHours, getAssetRetentionMs, RetentionConfigError } from './retentionConfig'

describe('getAssetRetentionHours', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('accepts a valid positive integer', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '24') // test-only value, not a production TTL
    expect(getAssetRetentionHours()).toBe(24)
  })

  it('fails closed when missing', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed when unset entirely', () => {
    delete process.env.ASSET_RETENTION_HOURS
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on zero', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '0')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on negative', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '-5')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on a fractional value', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '5.5')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on a non-numeric value', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', 'abc')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on NaN literal', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', 'NaN')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on Infinity literal', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', 'Infinity')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on scientific notation', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '1e10')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on an overflowing integer literal', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '99999999999999999999')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on whitespace-only value', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '   ')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('fails closed on a value with internal whitespace', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '2 4')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })

  it('tolerates only surrounding whitespace around an otherwise valid integer', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '  24  ')
    expect(getAssetRetentionHours()).toBe(24)
  })

  it('fails closed on a leading-zero literal', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '024')
    expect(() => getAssetRetentionHours()).toThrow(RetentionConfigError)
  })
})

describe('getAssetRetentionMs', () => {
  afterEach(() => vi.unstubAllEnvs())

  it('converts hours to milliseconds', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '1')
    expect(getAssetRetentionMs()).toBe(60 * 60 * 1000)
  })

  it('fails closed when the underlying hours value is invalid', () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', 'not-a-number')
    expect(() => getAssetRetentionMs()).toThrow(RetentionConfigError)
  })

  it('fails closed when converting to ms would overflow safe-integer range', () => {
    // A huge-but-technically-safe-integer hour count that overflows once
    // multiplied out to milliseconds.
    vi.stubEnv('ASSET_RETENTION_HOURS', String(Number.MAX_SAFE_INTEGER))
    expect(() => getAssetRetentionMs()).toThrow(RetentionConfigError)
  })
})
