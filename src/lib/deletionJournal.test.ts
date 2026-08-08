import { afterEach, describe, expect, it, vi } from 'vitest'

const { writeDeletionJournalEntry } = vi.hoisted(() => ({
  writeDeletionJournalEntry: vi.fn(),
}))
vi.mock('./privateAssets', async () => {
  const actual = await vi.importActual<typeof import('./privateAssets')>('./privateAssets')
  return { ...actual, writeDeletionJournalEntry }
})

import { recordDeletionJournalEntry, recordPendingCleanupJournalEntry } from './deletionJournal'
import { PrivateAssetError } from './privateAssets'

const VALID_SECRET = 'a'.repeat(32)
const GROUP_ID = 'g1-0000018f2c3a-11111111-1111-4111-8111-111111111111'
const SECRET_PATHNAME = 'results/g1-0000018f2c3a-11111111-1111-4111-8111-111111111111/super-secret-file.jpg'

describe('recordDeletionJournalEntry', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    writeDeletionJournalEntry.mockReset()
  })

  it('writes an entry with only the minimal allowed fields', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 3 })

    expect(writeDeletionJournalEntry).toHaveBeenCalledTimes(1)
    const body = writeDeletionJournalEntry.mock.calls[0][0] as Buffer
    const entry = JSON.parse(body.toString('utf8'))

    expect(Object.keys(entry).sort()).toEqual(
      ['deletedCount', 'eventId', 'groupRef', 'reason', 'schemaVersion', 'timestamp', 'verification'].sort(),
    )
    expect(entry.schemaVersion).toBe(1)
    expect(typeof entry.eventId).toBe('string')
    expect(entry.reason).toBe('request')
    expect(typeof entry.timestamp).toBe('string')
    expect(entry.deletedCount).toBe(3)
    expect(entry.verification).toBe('absent')
    expect(typeof entry.groupRef).toBe('string')
  })

  it('never writes the raw group id anywhere in the entry', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'retention', groupIdentifier: GROUP_ID, deletedCount: 1 })

    const body = writeDeletionJournalEntry.mock.calls[0][0] as Buffer
    expect(body.toString('utf8')).not.toContain(GROUP_ID)
  })

  it('never writes a raw pathname when a legacy pathname is used as the identifier', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({
      reason: 'failed-generation-cleanup',
      groupIdentifier: SECRET_PATHNAME,
      deletedCount: 1,
    })

    const body = writeDeletionJournalEntry.mock.calls[0][0] as Buffer
    const serialized = body.toString('utf8')
    expect(serialized).not.toContain(SECRET_PATHNAME)
    expect(serialized).not.toContain('super-secret-file')
  })

  it('never writes the secret itself', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 })

    const body = writeDeletionJournalEntry.mock.calls[0][0] as Buffer
    expect(body.toString('utf8')).not.toContain(VALID_SECRET)
  })

  it('derives a stable, deterministic groupRef for the same identifier', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 })
    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 })

    const entry1 = JSON.parse((writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8'))
    const entry2 = JSON.parse((writeDeletionJournalEntry.mock.calls[1][0] as Buffer).toString('utf8'))
    expect(entry1.groupRef).toBe(entry2.groupRef)
    // But the two journal events themselves are still distinct records.
    expect(entry1.eventId).not.toBe(entry2.eventId)
  })

  it('produces different groupRefs for different identifiers', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 })
    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: 'g1-0000018f2c3b-22222222-2222-4222-8222-222222222222', deletedCount: 1 })

    const entry1 = JSON.parse((writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8'))
    const entry2 = JSON.parse((writeDeletionJournalEntry.mock.calls[1][0] as Buffer).toString('utf8'))
    expect(entry1.groupRef).not.toBe(entry2.groupRef)
  })

  it('fails (does not silently succeed) when the secret is missing, since groupRef cannot be derived', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    await expect(
      recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 }),
    ).rejects.toBeInstanceOf(PrivateAssetError)
    expect(writeDeletionJournalEntry).not.toHaveBeenCalled()
  })

  it('propagates a write failure so the caller cannot report full success', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockRejectedValue(new Error('blob outage'))

    await expect(
      recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 }),
    ).rejects.toBeInstanceOf(PrivateAssetError)
  })

  it('accepts the F-4 corrective reason post-deletion-race-cleanup and still marks verification: absent', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'post-deletion-race-cleanup', groupIdentifier: GROUP_ID, deletedCount: 1 })

    const entry = JSON.parse((writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8'))
    expect(entry.reason).toBe('post-deletion-race-cleanup')
    expect(entry.verification).toBe('absent')
  })
})

describe('recordPendingCleanupJournalEntry (F-4)', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    writeDeletionJournalEntry.mockReset()
  })

  it('writes an entry with only the minimal allowed fields, verification: pending, and the fixed pending reason', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID })

    expect(writeDeletionJournalEntry).toHaveBeenCalledTimes(1)
    const entry = JSON.parse((writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8'))

    expect(Object.keys(entry).sort()).toEqual(
      ['eventId', 'groupRef', 'reason', 'schemaVersion', 'timestamp', 'verification'].sort(),
    )
    expect(entry.schemaVersion).toBe(1)
    expect(typeof entry.eventId).toBe('string')
    expect(entry.reason).toBe('post-deletion-race-cleanup-pending')
    expect(typeof entry.timestamp).toBe('string')
    expect(entry.verification).toBe('pending')
    expect(typeof entry.groupRef).toBe('string')
  })

  it('can never be mistaken for a confirmed deletion: verification is pending, not absent', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID })

    const entry = JSON.parse((writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8'))
    expect(entry.verification).not.toBe('absent')
    expect(entry.reason).not.toBe('retention')
    expect(entry.reason).not.toBe('post-deletion-race-cleanup')
  })

  it('never writes the raw group id', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID })

    const body = writeDeletionJournalEntry.mock.calls[0][0] as Buffer
    expect(body.toString('utf8')).not.toContain(GROUP_ID)
  })

  it('never writes a raw pathname when a legacy pathname is used as the identifier', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordPendingCleanupJournalEntry({ groupIdentifier: SECRET_PATHNAME })

    const serialized = (writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8')
    expect(serialized).not.toContain(SECRET_PATHNAME)
    expect(serialized).not.toContain('super-secret-file')
  })

  it('never writes the secret itself', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID })

    const body = writeDeletionJournalEntry.mock.calls[0][0] as Buffer
    expect(body.toString('utf8')).not.toContain(VALID_SECRET)
  })

  it('derives the same opaque groupRef scheme as recordDeletionJournalEntry for the same identifier', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockResolvedValue(undefined)

    await recordDeletionJournalEntry({ reason: 'request', groupIdentifier: GROUP_ID, deletedCount: 1 })
    await recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID })

    const confirmedEntry = JSON.parse((writeDeletionJournalEntry.mock.calls[0][0] as Buffer).toString('utf8'))
    const pendingEntry = JSON.parse((writeDeletionJournalEntry.mock.calls[1][0] as Buffer).toString('utf8'))
    expect(pendingEntry.groupRef).toBe(confirmedEntry.groupRef)
  })

  it('fails (does not silently succeed) when the secret is missing, since groupRef cannot be derived', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', '')
    await expect(
      recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID }),
    ).rejects.toBeInstanceOf(PrivateAssetError)
    expect(writeDeletionJournalEntry).not.toHaveBeenCalled()
  })

  it('propagates a write failure', async () => {
    vi.stubEnv('ASSET_ACCESS_SECRET', VALID_SECRET)
    writeDeletionJournalEntry.mockRejectedValue(new Error('blob outage'))

    await expect(
      recordPendingCleanupJournalEntry({ groupIdentifier: GROUP_ID }),
    ).rejects.toBeInstanceOf(PrivateAssetError)
  })
})
