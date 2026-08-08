import { NextRequest, NextResponse } from 'next/server'
import { verifyAssetLifecycleCapability } from '@/lib/assetLifecycle'
import { deleteAssetGroup } from '@/lib/assetGroupDeletion'
import { recordDeletionJournalEntry } from '@/lib/deletionJournal'

// M0.3 request-triggered deletion (C1 Delivery Brief §5 package 3). This is
// itself a protective, privacy-preserving operation, so unlike /api/generate,
// /api/poll and /api/proxy it is NOT gated by M0.0 containment — blocking
// deletion during containment would be a privacy regression, not a safety
// improvement.
//
// The lifecycle Bearer capability is verified before any Blob list/del/get/
// put or journal call. The verified token is the only source of the group
// id to act on — pathname/prefix/group id are never accepted from the query
// string or body, so this route can only ever delete the one group its
// caller was authorized for.

const JSON_HEADERS = { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' }

function unauthorized(): NextResponse {
  return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: JSON_HEADERS })
}

function serverFailure(): NextResponse {
  return new NextResponse(JSON.stringify({ error: 'Deletion failed. Please try again.' }), {
    status: 500,
    headers: JSON_HEADERS,
  })
}

export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get('authorization') ?? ''
  const match = /^Bearer\s+(.+)$/.exec(authHeader)
  if (!match) return unauthorized()

  const verification = verifyAssetLifecycleCapability(match[1])
  if (!verification.ok) return unauthorized()

  try {
    const result = await deleteAssetGroup(verification.groupId, 'request')
    if (!result.verifiedAbsent) return serverFailure()

    await recordDeletionJournalEntry({
      reason: 'request',
      groupIdentifier: verification.groupId,
      deletedCount: result.deletedCount,
    })

    return new NextResponse(JSON.stringify({ deleted: true }), { status: 200, headers: JSON_HEADERS })
  } catch {
    return serverFailure()
  }
}
