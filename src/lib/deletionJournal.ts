import { randomUUID, createHmac } from 'node:crypto'
import { assetAccessSecret, writeDeletionJournalEntry, PrivateAssetError } from './privateAssets'

// M0.3 deletion journal (C1 Delivery Brief §5 package 3). Each confirmed
// deletion event becomes its own immutable private record — never an
// overwritten shared file. Entries deliberately carry no raw group id, no
// pathname, no Blob/provider URL, no token, no secret, no image data and no
// PII: only the minimal fields needed as deletion evidence. The group/asset
// identifier is replaced by an HMAC-derived opaque reference (domain-
// separated from the M0.2 result capability and the M0.3 lifecycle
// capability) so the journal itself cannot be used to reconstruct which
// asset group was deleted.

export type DeletionReason =
  | 'request'
  | 'retention'
  | 'failed-generation-cleanup'
  // M0.3 F-4 correction: a tombstoned group's leaked assets were found
  // (during /api/poll's post-upload race check or a retention sweep) and
  // confirmed absent after a corrective purge. Distinct from the tombstone's
  // own original reason (request/retention/failed-generation-cleanup),
  // which this never overwrites — it is a second, additional record.
  | 'post-deletion-race-cleanup'

// M0.3 F-4 correction: the one reason value recordPendingCleanupJournalEntry
// is allowed to write — kept out of DeletionReason (recordDeletionJournalEntry's
// input type) so a pending, unconfirmed cleanup can never be constructed
// through the confirmed-deletion call path.
export type PendingCleanupReason = 'post-deletion-race-cleanup-pending'
const PENDING_CLEANUP_REASON: PendingCleanupReason = 'post-deletion-race-cleanup-pending'

const JOURNAL_SCHEMA_VERSION = 1
const GROUP_REF_DOMAIN_TAG = 'vistaroom.m0.3.deletion-journal.group-ref'

function deriveOpaqueGroupReference(identifier: string): string {
  const secret = assetAccessSecret()
  return createHmac('sha256', secret).update(`${GROUP_REF_DOMAIN_TAG}:${identifier}`).digest('base64url')
}

export interface DeletionJournalEntryInput {
  reason: DeletionReason
  // The asset group id (or, for a legacy ungrouped asset, its pathname) —
  // used only to derive the opaque groupRef below. Never written raw.
  groupIdentifier: string
  deletedCount: number
}

/**
 * Records one deletion event. Only called after the caller has independently
 * verified the assets are gone (verification: 'absent' below is a statement
 * of fact at write time, not a live check performed here). If this throws,
 * the caller must not report the overall deletion as a full success.
 */
export async function recordDeletionJournalEntry(input: DeletionJournalEntryInput): Promise<void> {
  const groupRef = deriveOpaqueGroupReference(input.groupIdentifier)

  const entry = {
    schemaVersion: JOURNAL_SCHEMA_VERSION,
    eventId: randomUUID(),
    reason: input.reason,
    timestamp: new Date().toISOString(),
    groupRef,
    deletedCount: input.deletedCount,
    verification: 'absent' as const,
  }

  const body = Buffer.from(JSON.stringify(entry), 'utf8')
  try {
    await writeDeletionJournalEntry(body)
  } catch (err) {
    if (err instanceof PrivateAssetError) throw err
    throw new PrivateAssetError('Failed to record deletion journal entry.')
  }
}

export interface PendingCleanupJournalEntryInput {
  // Same as DeletionJournalEntryInput.groupIdentifier — used only to derive
  // the opaque groupRef below. Never written raw.
  groupIdentifier: string
}

/**
 * Records that a tombstoned group's cleanup could not yet be confirmed
 * complete — a corrective purge either reported verifiedAbsent: false or
 * threw. Deliberately a separate function (and a reason value outside
 * DeletionReason) from recordDeletionJournalEntry, so a pending, unconfirmed
 * cleanup can never be constructed through — or mistaken for — the
 * confirmed-absence call path: verification is always 'pending' here, never
 * 'absent'. The durable group tombstone (not this entry) is what makes the
 * next retention sweep retry the cleanup; this entry is observability
 * evidence only.
 */
export async function recordPendingCleanupJournalEntry(input: PendingCleanupJournalEntryInput): Promise<void> {
  const groupRef = deriveOpaqueGroupReference(input.groupIdentifier)

  const entry = {
    schemaVersion: JOURNAL_SCHEMA_VERSION,
    eventId: randomUUID(),
    reason: PENDING_CLEANUP_REASON,
    timestamp: new Date().toISOString(),
    groupRef,
    verification: 'pending' as const,
  }

  const body = Buffer.from(JSON.stringify(entry), 'utf8')
  try {
    await writeDeletionJournalEntry(body)
  } catch (err) {
    if (err instanceof PrivateAssetError) throw err
    throw new PrivateAssetError('Failed to record pending cleanup journal entry.')
  }
}
