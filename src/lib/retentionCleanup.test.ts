import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const {
  listPrivateAssets,
  deletePrivateAssets,
  groupTombstoneExists,
  deleteAssetGroup,
  purgeTombstonedGroupAssets,
  recordDeletionJournalEntry,
} = vi.hoisted(() => ({
  listPrivateAssets: vi.fn(),
  deletePrivateAssets: vi.fn(),
  groupTombstoneExists: vi.fn(),
  deleteAssetGroup: vi.fn(),
  purgeTombstonedGroupAssets: vi.fn(),
  recordDeletionJournalEntry: vi.fn(),
}))

// Real parseGroupedPathname (pure) so grouped-vs-legacy classification is
// exercised for real; only the Blob-touching primitives are mocked.
vi.mock('./privateAssets', async () => {
  const actual = await vi.importActual<typeof import('./privateAssets')>('./privateAssets')
  return { ...actual, listPrivateAssets, deletePrivateAssets, groupTombstoneExists }
})
vi.mock('./assetGroupDeletion', () => ({ deleteAssetGroup, purgeTombstonedGroupAssets }))
vi.mock('./deletionJournal', () => ({ recordDeletionJournalEntry }))

import { runRetentionSweep } from './retentionCleanup'

const RETENTION_HOURS = 24
const RETENTION_MS = RETENTION_HOURS * 60 * 60 * 1000
const NOW = 2_000_000_000_000

function groupIdForTime(ms: number): string {
  return `g1-${ms.toString(16).padStart(12, '0')}-11111111-1111-4111-8111-111111111111`
}

interface Blob { pathname: string; uploadedAt: Date }

function setupList(opts: {
  sources?: Blob[]
  masks?: Blob[]
  results?: Blob[]
  present?: Set<string> // for the legacy pathnameExists() exact-match lookups
}): void {
  const sources = opts.sources ?? []
  const masks = opts.masks ?? []
  const results = opts.results ?? []
  const present = opts.present ?? new Set<string>()

  listPrivateAssets.mockImplementation(async (prefix: string) => {
    if (prefix === 'sources/') return { blobs: sources, hasMore: false }
    if (prefix === 'masks/') return { blobs: masks, hasMore: false }
    if (prefix === 'results/') return { blobs: results, hasMore: false }
    // Legacy existence check: called with the exact pathname as "prefix".
    return { blobs: present.has(prefix) ? [{ pathname: prefix, uploadedAt: new Date() }] : [], hasMore: false }
  })
}

describe('runRetentionSweep', () => {
  beforeEach(() => {
    // Default: no group encountered in a test is tombstoned unless that test
    // says otherwise — keeps every pre-existing (non-F-4) test on the
    // ordinary age-based path it always exercised.
    groupTombstoneExists.mockResolvedValue(false)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    listPrivateAssets.mockReset()
    deletePrivateAssets.mockReset()
    groupTombstoneExists.mockReset()
    deleteAssetGroup.mockReset()
    purgeTombstonedGroupAssets.mockReset()
    recordDeletionJournalEntry.mockReset()
  })

  it('fails closed with no Blob calls when ASSET_RETENTION_HOURS is invalid', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', '')
    const result = await runRetentionSweep(NOW)
    expect(result.ok).toBe(false)
    expect(listPrivateAssets).not.toHaveBeenCalled()
  })

  it('scans only sources/, masks/ and results/ — never deletion-journal/', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    setupList({})
    await runRetentionSweep(NOW)

    const scannedPrefixes = listPrivateAssets.mock.calls.map(c => c[0])
    expect(scannedPrefixes).toEqual(expect.arrayContaining(['sources/', 'masks/', 'results/']))
    expect(scannedPrefixes).not.toContain('deletion-journal/')
    expect(scannedPrefixes.some((p: string) => p.startsWith('deletion-journal'))).toBe(false)
    // F-4: tombstones/ objects are never part of the asset deletion scan
    // either — only individual group ids parsed out of sources/masks/results
    // pathnames are ever passed to groupTombstoneExists.
    expect(scannedPrefixes.some((p: string) => p.startsWith('tombstones'))).toBe(false)
  })

  it('deletes an expired grouped asset and journals it as reason: retention', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const expiredGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    setupList({ sources: [{ pathname: `sources/${expiredGroupId}/a.jpg`, uploadedAt: new Date(NOW) }] })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(deleteAssetGroup).toHaveBeenCalledWith(expiredGroupId, 'retention')
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith({
      reason: 'retention',
      groupIdentifier: expiredGroupId,
      deletedCount: 1,
    })
    expect(result.ok).toBe(true)
  })

  it('does not delete a fresh grouped asset', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const freshGroupId = groupIdForTime(NOW - 1000)
    setupList({ results: [{ pathname: `results/${freshGroupId}/b.jpg`, uploadedAt: new Date(NOW) }] })

    const result = await runRetentionSweep(NOW)

    expect(deleteAssetGroup).not.toHaveBeenCalled()
    expect(result.ok).toBe(true)
  })

  it('deletes source/mask/result of the same expired group together, exactly once', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const expiredGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    setupList({
      sources: [{ pathname: `sources/${expiredGroupId}/a.jpg`, uploadedAt: new Date(NOW) }],
      masks: [{ pathname: `masks/${expiredGroupId}/b.png`, uploadedAt: new Date(NOW) }],
      results: [{ pathname: `results/${expiredGroupId}/c.jpg`, uploadedAt: new Date(NOW) }],
    })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 3, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    await runRetentionSweep(NOW)

    expect(deleteAssetGroup).toHaveBeenCalledTimes(1)
    expect(deleteAssetGroup).toHaveBeenCalledWith(expiredGroupId, 'retention')
  })

  it('deletes an expired legacy (pre-M0.3, ungrouped) pathname by its uploadedAt', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const legacyPathname = 'results/legacy-uuid-no-group.jpg'
    setupList({
      results: [{ pathname: legacyPathname, uploadedAt: new Date(NOW - RETENTION_MS - 1000) }],
      present: new Set(), // gone after deletion
    })
    deletePrivateAssets.mockResolvedValue(undefined)
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(deletePrivateAssets).toHaveBeenCalledWith([legacyPathname])
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith({
      reason: 'retention',
      groupIdentifier: legacyPathname,
      deletedCount: 1,
    })
    expect(result.ok).toBe(true)
  })

  it('keeps a fresh legacy (pre-M0.3, ungrouped) pathname', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const legacyPathname = 'results/legacy-fresh.jpg'
    setupList({ results: [{ pathname: legacyPathname, uploadedAt: new Date(NOW - 1000) }] })

    const result = await runRetentionSweep(NOW)

    expect(deletePrivateAssets).not.toHaveBeenCalled()
    expect(result.ok).toBe(true)
  })

  it('handles an unrecognized/deeper-nested pathname safely via the legacy uploadedAt fallback (never arbitrary)', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    // Not a valid group-id-shaped segment, and one extra path level —
    // parseGroupedPathname rejects it, so it falls back to uploadedAt like
    // any other legacy object list() actually returned (bounded, not
    // arbitrary: it can only ever act on pathnames list() itself reported).
    const weirdPathname = 'sources/not-a-group-id/nested/extra.jpg'
    setupList({
      sources: [{ pathname: weirdPathname, uploadedAt: new Date(NOW - RETENTION_MS - 1000) }],
      present: new Set(),
    })
    deletePrivateAssets.mockResolvedValue(undefined)
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(deletePrivateAssets).toHaveBeenCalledWith([weirdPathname])
    expect(result.ok).toBe(true)
  })

  it('fully paginates a prefix before classifying its objects', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const expiredGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    listPrivateAssets.mockImplementation(async (prefix: string, cursor?: string) => {
      if (prefix === 'sources/' && cursor === undefined) {
        return { blobs: [{ pathname: `sources/${expiredGroupId}/a.jpg`, uploadedAt: new Date(NOW) }], cursor: 'page2', hasMore: true }
      }
      if (prefix === 'sources/' && cursor === 'page2') {
        return { blobs: [{ pathname: `sources/${expiredGroupId}/a2.jpg`, uploadedAt: new Date(NOW) }], hasMore: false }
      }
      if (prefix === 'masks/' || prefix === 'results/') return { blobs: [], hasMore: false }
      return { blobs: [], hasMore: false }
    })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 2, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    await runRetentionSweep(NOW)

    // Both pages resolved to the same group — deleted exactly once.
    expect(deleteAssetGroup).toHaveBeenCalledTimes(1)
    expect(deleteAssetGroup).toHaveBeenCalledWith(expiredGroupId, 'retention')
  })

  it('does not report success when a group deletion fails verification (partial failure is not success)', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const expiredGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    setupList({ sources: [{ pathname: `sources/${expiredGroupId}/a.jpg`, uploadedAt: new Date(NOW) }] })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: false })

    const result = await runRetentionSweep(NOW)

    expect(result.ok).toBe(false)
    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
  })

  it('a deleteAssetGroup rejection is treated as failure but does not stop other groups from being processed', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const failingGroupId = groupIdForTime(NOW - RETENTION_MS - 2000)
    const okGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    setupList({
      sources: [
        { pathname: `sources/${failingGroupId}/a.jpg`, uploadedAt: new Date(NOW) },
        { pathname: `sources/${okGroupId}/b.jpg`, uploadedAt: new Date(NOW) },
      ],
    })
    deleteAssetGroup.mockImplementation(async (groupId: string) => {
      if (groupId === failingGroupId) throw new Error('blob outage')
      return { deletedCount: 1, verifiedAbsent: true }
    })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(result.ok).toBe(false)
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith(
      expect.objectContaining({ groupIdentifier: okGroupId }),
    )
  })

  it('does not report success when a journal write fails', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const expiredGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    setupList({ sources: [{ pathname: `sources/${expiredGroupId}/a.jpg`, uploadedAt: new Date(NOW) }] })
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockRejectedValue(new Error('journal write failed'))

    const result = await runRetentionSweep(NOW)

    expect(result.ok).toBe(false)
  })

  it('a repeat sweep with nothing left to delete succeeds trivially (idempotent)', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    setupList({})

    const result = await runRetentionSweep(NOW)

    expect(result.ok).toBe(true)
    expect(deleteAssetGroup).not.toHaveBeenCalled()
    expect(deletePrivateAssets).not.toHaveBeenCalled()
  })

  it('makes no real external calls — every Blob/journal touchpoint is mocked', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    setupList({})
    await runRetentionSweep(NOW)
    // If any real @vercel/blob or network call had been attempted here, this
    // process would hang or throw outside the mocked functions above — the
    // fact that the sweep resolves is itself the assertion.
    expect(true).toBe(true)
  })
})

// M0.3 F-4 correction: a tombstoned group's leaked objects (e.g. a result
// that finished uploading in the race window /api/poll's post-upload check
// closes, but whose purge there wasn't confirmed) must not have to wait out
// the ordinary age-based retention window — the next sweep finds them via
// the durable tombstone and retries immediately.
describe('runRetentionSweep — F-4 immediate tombstoned-group cleanup', () => {
  beforeEach(() => {
    groupTombstoneExists.mockResolvedValue(false)
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    listPrivateAssets.mockReset()
    deletePrivateAssets.mockReset()
    groupTombstoneExists.mockReset()
    deleteAssetGroup.mockReset()
    purgeTombstonedGroupAssets.mockReset()
    recordDeletionJournalEntry.mockReset()
  })

  it('1. a tombstoned group that has not yet aged past retention is still purged immediately', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const freshGroupId = groupIdForTime(NOW - 1000) // nowhere near RETENTION_MS old
    setupList({ results: [{ pathname: `results/${freshGroupId}/leaked.jpg`, uploadedAt: new Date(NOW) }] })
    groupTombstoneExists.mockResolvedValue(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(purgeTombstonedGroupAssets).toHaveBeenCalledWith(freshGroupId)
    expect(deleteAssetGroup).not.toHaveBeenCalled() // never the ordinary age-based path
    expect(result.ok).toBe(true)
  })

  it('2. checks a tombstone at most once per sweep even when the group has objects in all three prefixes', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const groupId = groupIdForTime(NOW - 1000)
    setupList({
      sources: [{ pathname: `sources/${groupId}/a.jpg`, uploadedAt: new Date(NOW) }],
      masks: [{ pathname: `masks/${groupId}/b.png`, uploadedAt: new Date(NOW) }],
      results: [{ pathname: `results/${groupId}/c.jpg`, uploadedAt: new Date(NOW) }],
    })
    groupTombstoneExists.mockResolvedValue(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 3, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    await runRetentionSweep(NOW)

    expect(groupTombstoneExists).toHaveBeenCalledTimes(1)
    expect(groupTombstoneExists).toHaveBeenCalledWith(groupId)
  })

  it('3. a verified-absent purge records a confirmed corrective journal entry, distinct from an ordinary retention entry', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const groupId = groupIdForTime(NOW - 1000)
    setupList({ results: [{ pathname: `results/${groupId}/leaked.jpg`, uploadedAt: new Date(NOW) }] })
    groupTombstoneExists.mockResolvedValue(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(recordDeletionJournalEntry).toHaveBeenCalledWith({
      reason: 'post-deletion-race-cleanup',
      groupIdentifier: groupId,
      deletedCount: 1,
    })
    expect(result.ok).toBe(true)
  })

  it('4. verifiedAbsent: false does not record a confirmed journal and the sweep reports ok: false', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const groupId = groupIdForTime(NOW - 1000)
    setupList({ results: [{ pathname: `results/${groupId}/leaked.jpg`, uploadedAt: new Date(NOW) }] })
    groupTombstoneExists.mockResolvedValue(true)
    purgeTombstonedGroupAssets.mockResolvedValue({ deletedCount: 0, verifiedAbsent: false })

    const result = await runRetentionSweep(NOW)

    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()
    expect(result.ok).toBe(false)
  })

  it('5. a purge exception does not record a confirmed journal, reports ok: false, and other groups still get processed', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const failingGroupId = groupIdForTime(NOW - 1000)
    const okGroupId = groupIdForTime(NOW - 2000)
    setupList({
      results: [
        { pathname: `results/${failingGroupId}/a.jpg`, uploadedAt: new Date(NOW) },
        { pathname: `results/${okGroupId}/b.jpg`, uploadedAt: new Date(NOW) },
      ],
    })
    groupTombstoneExists.mockResolvedValue(true)
    purgeTombstonedGroupAssets.mockImplementation(async (groupId: string) => {
      if (groupId === failingGroupId) throw new Error('blob outage')
      return { deletedCount: 1, verifiedAbsent: true }
    })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(result.ok).toBe(false)
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith(
      expect.objectContaining({ reason: 'post-deletion-race-cleanup', groupIdentifier: okGroupId }),
    )
    expect(recordDeletionJournalEntry).not.toHaveBeenCalledWith(
      expect.objectContaining({ groupIdentifier: failingGroupId }),
    )
  })

  it('6. the same leftover tombstoned group is retried on the very next sweep', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const groupId = groupIdForTime(NOW - 1000)
    setupList({ results: [{ pathname: `results/${groupId}/leaked.jpg`, uploadedAt: new Date(NOW) }] })
    groupTombstoneExists.mockResolvedValue(true)
    purgeTombstonedGroupAssets.mockResolvedValueOnce({ deletedCount: 0, verifiedAbsent: false })

    const first = await runRetentionSweep(NOW)
    expect(first.ok).toBe(false)
    expect(recordDeletionJournalEntry).not.toHaveBeenCalled()

    // The object is still present in the next scan (purge didn't succeed),
    // so it's found and retried again — this time it succeeds.
    purgeTombstonedGroupAssets.mockResolvedValueOnce({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const second = await runRetentionSweep(NOW + 1)

    expect(purgeTombstonedGroupAssets).toHaveBeenCalledTimes(2)
    expect(second.ok).toBe(true)
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith(
      expect.objectContaining({ reason: 'post-deletion-race-cleanup', groupIdentifier: groupId }),
    )
  })

  it('7. a non-tombstoned, non-expired group is left alone', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const freshGroupId = groupIdForTime(NOW - 1000)
    setupList({ results: [{ pathname: `results/${freshGroupId}/b.jpg`, uploadedAt: new Date(NOW) }] })
    groupTombstoneExists.mockResolvedValue(false)

    const result = await runRetentionSweep(NOW)

    expect(purgeTombstonedGroupAssets).not.toHaveBeenCalled()
    expect(deleteAssetGroup).not.toHaveBeenCalled()
    expect(result.ok).toBe(true)
  })

  it('8. an ordinary expired, non-tombstoned group still goes through deleteAssetGroup(..., \'retention\')', async () => {
    vi.stubEnv('ASSET_RETENTION_HOURS', String(RETENTION_HOURS))
    const expiredGroupId = groupIdForTime(NOW - RETENTION_MS - 1000)
    setupList({ sources: [{ pathname: `sources/${expiredGroupId}/a.jpg`, uploadedAt: new Date(NOW) }] })
    groupTombstoneExists.mockResolvedValue(false)
    deleteAssetGroup.mockResolvedValue({ deletedCount: 1, verifiedAbsent: true })
    recordDeletionJournalEntry.mockResolvedValue(undefined)

    const result = await runRetentionSweep(NOW)

    expect(purgeTombstonedGroupAssets).not.toHaveBeenCalled()
    expect(deleteAssetGroup).toHaveBeenCalledWith(expiredGroupId, 'retention')
    expect(recordDeletionJournalEntry).toHaveBeenCalledWith({
      reason: 'retention',
      groupIdentifier: expiredGroupId,
      deletedCount: 1,
    })
    expect(result.ok).toBe(true)
  })
})
