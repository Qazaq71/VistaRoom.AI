import {
  listPrivateAssets,
  deletePrivateAssets,
  parseGroupedPathname,
  groupTombstoneExists,
  type PrivateAssetPrefix,
} from './privateAssets'
import { deleteAssetGroup, purgeTombstonedGroupAssets } from './assetGroupDeletion'
import { recordDeletionJournalEntry } from './deletionJournal'
import { getAssetRetentionMs } from './retentionConfig'

// M0.3 server-only retention cleanup core (C1 Delivery Brief §5 package 3),
// invoked only by the CRON_SECRET-protected /api/internal/retention route.
// Scans exactly sources/, masks/ and results/ — never deletion-journal/ or
// tombstones/ — determines expiry per object (grouped assets by their group
// id's verifiable creation time; legacy pre-M0.3 ungrouped assets by the
// SDK's own uploadedAt) against the current ASSET_RETENTION_HOURS, deletes
// expired assets, re-verifies absence, and journals each confirmed deletion.
//
// M0.3 F-4 correction: every grouped asset found is also checked for a
// tombstone (once per unique group id per sweep, not once per object) and,
// if tombstoned, purged immediately regardless of age — this is what makes
// a result that leaked past /api/poll's post-upload race window (found
// tombstoned, but purge unconfirmed at that moment) actually disappear on
// the very next sweep instead of waiting out the ordinary retention window.

const SCAN_PREFIXES: PrivateAssetPrefix[] = ['sources', 'masks', 'results']

export interface RetentionSweepResult {
  ok: boolean
}

async function pathnameExists(pathname: string): Promise<boolean> {
  const page = await listPrivateAssets(pathname, undefined, 1)
  return page.blobs.some(b => b.pathname === pathname)
}

export async function runRetentionSweep(now: number = Date.now()): Promise<RetentionSweepResult> {
  let retentionMs: number
  try {
    retentionMs = getAssetRetentionMs()
  } catch {
    return { ok: false }
  }

  const allGroupIds = new Set<string>()
  const ageExpiredGroupIds = new Set<string>()
  const legacyExpiredPathnames: string[] = []

  try {
    for (const prefix of SCAN_PREFIXES) {
      let cursor: string | undefined
      do {
        const page = await listPrivateAssets(`${prefix}/`, cursor)
        for (const blob of page.blobs) {
          const grouped = parseGroupedPathname(blob.pathname, prefix)
          if (grouped) {
            allGroupIds.add(grouped.groupId)
            const deadline = grouped.createdAtMs + retentionMs
            if (now >= deadline) ageExpiredGroupIds.add(grouped.groupId)
          } else {
            const deadline = blob.uploadedAt.getTime() + retentionMs
            if (now >= deadline) legacyExpiredPathnames.push(blob.pathname)
          }
        }
        cursor = page.hasMore ? page.cursor : undefined
      } while (cursor)
    }
  } catch {
    return { ok: false }
  }

  let allOk = true

  // allGroupIds is deduplicated across every sources/masks/results object
  // scanned above, so each group's tombstone is checked at most once here —
  // regardless of how many of its objects were found.
  for (const groupId of Array.from(allGroupIds)) {
    let tombstoned: boolean
    try {
      tombstoned = await groupTombstoneExists(groupId)
    } catch {
      allOk = false
      continue
    }

    if (tombstoned) {
      // Cleanup-eligible immediately — a tombstone means a DELETE or an
      // earlier sweep already committed to removing this group, so any
      // object still present is a leak that must not wait out the ordinary
      // age-based retention window.
      try {
        const result = await purgeTombstonedGroupAssets(groupId)
        if (!result.verifiedAbsent) {
          allOk = false
          continue
        }
        // Corrective evidence, distinct from — and never overwriting — the
        // tombstone's own original reason.
        await recordDeletionJournalEntry({
          reason: 'post-deletion-race-cleanup',
          groupIdentifier: groupId,
          deletedCount: result.deletedCount,
        })
      } catch {
        allOk = false
      }
      continue
    }

    if (!ageExpiredGroupIds.has(groupId)) continue

    try {
      const result = await deleteAssetGroup(groupId, 'retention')
      if (!result.verifiedAbsent) {
        allOk = false
        continue
      }
      await recordDeletionJournalEntry({
        reason: 'retention',
        groupIdentifier: groupId,
        deletedCount: result.deletedCount,
      })
    } catch {
      allOk = false
    }
  }

  for (const pathname of legacyExpiredPathnames) {
    try {
      await deletePrivateAssets([pathname])
      const stillPresent = await pathnameExists(pathname)
      if (stillPresent) {
        allOk = false
        continue
      }
      await recordDeletionJournalEntry({
        reason: 'retention',
        groupIdentifier: pathname,
        deletedCount: 1,
      })
    } catch {
      allOk = false
    }
  }

  return { ok: allOk }
}
