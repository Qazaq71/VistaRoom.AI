import {
  listPrivateAssets,
  deletePrivateAssets,
  writeGroupTombstone,
  groupTombstoneExists,
  type ListedPrivateAsset,
  type PrivateAssetPrefix,
  type TombstoneReason,
} from './privateAssets'

// M0.3 shared group-deletion primitive (C1 Delivery Brief §5 package 3),
// used by both request-triggered deletion (/api/assets) and the retention
// sweep for expired grouped assets. Tombstone-first (F-1 correction): the
// group is durably closed to new writes, and that closure is read back and
// confirmed, before any bytes are deleted — this is what stops a concurrent
// /api/poll from resurrecting a group that a deletion in flight already
// committed to removing. Deletes only the three exact group prefixes, fully
// paginated, then re-lists to verify absence — the same idempotent shape
// either caller needs.

const GROUP_PREFIXES: PrivateAssetPrefix[] = ['sources', 'masks', 'results']

async function listAllUnderPrefix(prefix: string): Promise<ListedPrivateAsset[]> {
  const all: ListedPrivateAsset[] = []
  let cursor: string | undefined
  do {
    const page = await listPrivateAssets(prefix, cursor)
    all.push(...page.blobs)
    cursor = page.hasMore ? page.cursor : undefined
  } while (cursor)
  return all
}

export interface GroupDeletionResult {
  deletedCount: number
  verifiedAbsent: boolean
}

async function purgeGroupAssets(groupId: string): Promise<GroupDeletionResult> {
  const prefixPaths = GROUP_PREFIXES.map(p => `${p}/${groupId}/`)

  const toDelete: string[] = []
  for (const prefixPath of prefixPaths) {
    const blobs = await listAllUnderPrefix(prefixPath)
    toDelete.push(...blobs.map(b => b.pathname))
  }

  if (toDelete.length > 0) {
    await deletePrivateAssets(toDelete)
  }

  let remaining = 0
  for (const prefixPath of prefixPaths) {
    const blobs = await listAllUnderPrefix(prefixPath)
    remaining += blobs.length
  }

  return { deletedCount: toDelete.length, verifiedAbsent: remaining === 0 }
}

/**
 * Tombstones groupId, confirms the tombstone is readable back, then deletes
 * every object under sources/<groupId>/, masks/<groupId>/ and
 * results/<groupId>/ (fully paginated) and re-lists all three prefixes to
 * confirm nothing remains. If the tombstone cannot be written or confirmed,
 * this reports failure (verifiedAbsent: false, deletedCount: 0) without
 * deleting anything — callers must not journal a successful deletion in that
 * case. Safe to call repeatedly — a group with nothing left to delete still
 * re-verifies and reports verifiedAbsent: true.
 */
export async function deleteAssetGroup(groupId: string, reason: TombstoneReason): Promise<GroupDeletionResult> {
  try {
    await writeGroupTombstone(groupId, reason)
    const confirmed = await groupTombstoneExists(groupId)
    if (!confirmed) return { deletedCount: 0, verifiedAbsent: false }
  } catch {
    return { deletedCount: 0, verifiedAbsent: false }
  }

  return purgeGroupAssets(groupId)
}

/**
 * Used only by /api/poll's post-upload tombstone race check (F-1): the
 * tombstone has already been confirmed present by the caller, so this only
 * purges whatever leaked in during the race and verifies absence — it never
 * writes a second tombstone and never journals anything itself. The
 * tombstone's own request/sweep path owns the deletion-journal entry.
 */
export async function purgeTombstonedGroupAssets(groupId: string): Promise<GroupDeletionResult> {
  return purgeGroupAssets(groupId)
}
