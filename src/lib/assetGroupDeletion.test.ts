import { afterEach, describe, expect, it, vi } from 'vitest'

const { listPrivateAssets, deletePrivateAssets, writeGroupTombstone, groupTombstoneExists } = vi.hoisted(() => ({
  listPrivateAssets: vi.fn(),
  deletePrivateAssets: vi.fn(),
  writeGroupTombstone: vi.fn(),
  groupTombstoneExists: vi.fn(),
}))
vi.mock('./privateAssets', () => ({ listPrivateAssets, deletePrivateAssets, writeGroupTombstone, groupTombstoneExists }))

import { deleteAssetGroup, purgeTombstonedGroupAssets } from './assetGroupDeletion'

const GROUP_ID = 'g1-0000018f2c3a-11111111-1111-4111-8111-111111111111'

function emptyPage() {
  return { blobs: [], hasMore: false }
}

function resetMocks(): void {
  listPrivateAssets.mockReset()
  deletePrivateAssets.mockReset()
  writeGroupTombstone.mockReset()
  groupTombstoneExists.mockReset()
}

// Default "tombstone succeeds" setup shared by tests that aren't specifically
// about the tombstone step itself.
function stubTombstoneSucceeds(): void {
  writeGroupTombstone.mockResolvedValue(undefined)
  groupTombstoneExists.mockResolvedValue(true)
}

describe('deleteAssetGroup', () => {
  afterEach(resetMocks)

  it('writes the tombstone before listing or deleting anything', async () => {
    const order: string[] = []
    writeGroupTombstone.mockImplementation(async () => { order.push('tombstone') })
    groupTombstoneExists.mockImplementation(async () => { order.push('confirm'); return true })
    listPrivateAssets.mockImplementation(async () => { order.push('list'); return emptyPage() })
    deletePrivateAssets.mockResolvedValue(undefined)

    await deleteAssetGroup(GROUP_ID, 'request')

    expect(order[0]).toBe('tombstone')
    expect(order[1]).toBe('confirm')
    expect(order.slice(2)).toEqual(expect.arrayContaining(['list']))
  })

  it('passes the reason through to the tombstone', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets.mockResolvedValue(emptyPage())

    await deleteAssetGroup(GROUP_ID, 'failed-generation-cleanup')

    expect(writeGroupTombstone).toHaveBeenCalledWith(GROUP_ID, 'failed-generation-cleanup')
  })

  it('does not list or delete anything, and reports failure, when the tombstone write throws', async () => {
    writeGroupTombstone.mockRejectedValue(new Error('blob outage'))

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(result).toEqual({ deletedCount: 0, verifiedAbsent: false })
    expect(groupTombstoneExists).not.toHaveBeenCalled()
    expect(listPrivateAssets).not.toHaveBeenCalled()
    expect(deletePrivateAssets).not.toHaveBeenCalled()
  })

  it('does not list or delete anything, and reports failure, when the tombstone cannot be confirmed', async () => {
    writeGroupTombstone.mockResolvedValue(undefined)
    groupTombstoneExists.mockResolvedValue(false)

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(result).toEqual({ deletedCount: 0, verifiedAbsent: false })
    expect(listPrivateAssets).not.toHaveBeenCalled()
    expect(deletePrivateAssets).not.toHaveBeenCalled()
  })

  it('does not list or delete anything, and reports failure, when confirming the tombstone throws', async () => {
    writeGroupTombstone.mockResolvedValue(undefined)
    groupTombstoneExists.mockRejectedValue(new Error('blob outage'))

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(result).toEqual({ deletedCount: 0, verifiedAbsent: false })
    expect(listPrivateAssets).not.toHaveBeenCalled()
  })

  it('only queries the three exact group prefixes', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets.mockResolvedValue(emptyPage())
    deletePrivateAssets.mockResolvedValue(undefined)

    await deleteAssetGroup(GROUP_ID, 'request')

    const queriedPrefixes = listPrivateAssets.mock.calls.map(c => c[0])
    expect(queriedPrefixes).toEqual(
      expect.arrayContaining([`sources/${GROUP_ID}/`, `masks/${GROUP_ID}/`, `results/${GROUP_ID}/`]),
    )
    // Never a different group's prefix, and never the bare unscoped prefix.
    for (const p of queriedPrefixes) {
      expect(p).toContain(GROUP_ID)
    }
  })

  it('deletes every pathname found across all three prefixes', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets
      .mockResolvedValueOnce({ blobs: [{ pathname: `sources/${GROUP_ID}/a.jpg`, uploadedAt: new Date() }], hasMore: false })
      .mockResolvedValueOnce({ blobs: [{ pathname: `masks/${GROUP_ID}/b.png`, uploadedAt: new Date() }], hasMore: false })
      .mockResolvedValueOnce({ blobs: [{ pathname: `results/${GROUP_ID}/c.jpg`, uploadedAt: new Date() }], hasMore: false })
      // re-verification pass: all gone
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
    deletePrivateAssets.mockResolvedValue(undefined)

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(deletePrivateAssets).toHaveBeenCalledWith([
      `sources/${GROUP_ID}/a.jpg`,
      `masks/${GROUP_ID}/b.png`,
      `results/${GROUP_ID}/c.jpg`,
    ])
    expect(result).toEqual({ deletedCount: 3, verifiedAbsent: true })
  })

  it('fully paginates each prefix before deleting', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets
      .mockResolvedValueOnce({ blobs: [{ pathname: `sources/${GROUP_ID}/a.jpg`, uploadedAt: new Date() }], cursor: 'c1', hasMore: true })
      .mockResolvedValueOnce({ blobs: [{ pathname: `sources/${GROUP_ID}/b.jpg`, uploadedAt: new Date() }], hasMore: false })
      .mockResolvedValueOnce(emptyPage()) // masks
      .mockResolvedValueOnce(emptyPage()) // results
      // re-verification
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
    deletePrivateAssets.mockResolvedValue(undefined)

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(deletePrivateAssets).toHaveBeenCalledWith([`sources/${GROUP_ID}/a.jpg`, `sources/${GROUP_ID}/b.jpg`])
    expect(result.deletedCount).toBe(2)
    expect(result.verifiedAbsent).toBe(true)
  })

  it('is idempotent: a repeat call on an already-empty group deletes nothing and still verifies absence', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets.mockResolvedValue(emptyPage())

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(deletePrivateAssets).not.toHaveBeenCalled()
    expect(result).toEqual({ deletedCount: 0, verifiedAbsent: true })
  })

  it('reports verifiedAbsent: false when something is still found after deletion', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets
      .mockResolvedValueOnce({ blobs: [{ pathname: `sources/${GROUP_ID}/a.jpg`, uploadedAt: new Date() }], hasMore: false })
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
      // re-verification finds a straggler still present
      .mockResolvedValueOnce({ blobs: [{ pathname: `sources/${GROUP_ID}/a.jpg`, uploadedAt: new Date() }], hasMore: false })
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
    deletePrivateAssets.mockResolvedValue(undefined)

    const result = await deleteAssetGroup(GROUP_ID, 'request')

    expect(result.verifiedAbsent).toBe(false)
  })

  it('does not touch a different group\'s assets', async () => {
    stubTombstoneSucceeds()
    listPrivateAssets.mockResolvedValue(emptyPage())
    await deleteAssetGroup(GROUP_ID, 'request')
    const otherGroupId = 'g1-0000018f2c3b-22222222-2222-4222-8222-222222222222'
    for (const call of listPrivateAssets.mock.calls) {
      expect(call[0]).not.toContain(otherGroupId)
    }
  })
})

describe('purgeTombstonedGroupAssets', () => {
  afterEach(resetMocks)

  it('deletes and re-verifies the group\'s assets without writing or checking a tombstone', async () => {
    listPrivateAssets
      .mockResolvedValueOnce({ blobs: [{ pathname: `results/${GROUP_ID}/leaked.jpg`, uploadedAt: new Date() }], hasMore: false })
      .mockResolvedValueOnce(emptyPage()) // masks
      .mockResolvedValueOnce(emptyPage()) // sources — order-independent, see prefix assertion below
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
      .mockResolvedValueOnce(emptyPage())
    deletePrivateAssets.mockResolvedValue(undefined)

    const result = await purgeTombstonedGroupAssets(GROUP_ID)

    expect(writeGroupTombstone).not.toHaveBeenCalled()
    expect(groupTombstoneExists).not.toHaveBeenCalled()
    expect(result.verifiedAbsent).toBe(true)
    expect(result.deletedCount).toBe(1)
  })

  it('is safe to call on an already-empty group', async () => {
    listPrivateAssets.mockResolvedValue(emptyPage())
    const result = await purgeTombstonedGroupAssets(GROUP_ID)
    expect(deletePrivateAssets).not.toHaveBeenCalled()
    expect(result).toEqual({ deletedCount: 0, verifiedAbsent: true })
  })
})
