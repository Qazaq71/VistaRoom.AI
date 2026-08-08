import { NextRequest, NextResponse } from 'next/server'
import { isAllowedFalUrl, isAllowedFalResultUrl, falStatusUrl, falResultUrl } from '@/config/image'
import { isContainmentActive, containmentResponse } from '@/lib/containment'
import { uploadPrivateAsset, createResultCapability, parseGroupId, groupTombstoneExists } from '@/lib/privateAssets'
import { verifyAssetLifecycleCapability } from '@/lib/assetLifecycle'
import { purgeTombstonedGroupAssets } from '@/lib/assetGroupDeletion'
import { recordDeletionJournalEntry, recordPendingCleanupJournalEntry } from '@/lib/deletionJournal'
import { getAssetRetentionMs } from '@/lib/retentionConfig'

export const dynamic    = 'force-dynamic'
export const maxDuration = 55

type FalStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'

interface FalStatusResponse {
  status:        FalStatus
  request_id?:   string
  response_url?: string
}

interface FalResultResponse {
  images?: { url: string }[]
}

// M0.2: how long the client has to redeem the /api/proxy capability for one
// generated result before it expires (Lean Delivery Decision §6.1 "закрытое
// хранение"; C1 Delivery Brief §5 package 2). Not a substitute for account
// auth (M2) or retention/deletion (M0.3).
const RESULT_CAPABILITY_TTL_MS = 15 * 60 * 1000
const RESULT_DOWNLOAD_TIMEOUT_MS = 20_000
const RESULT_MAX_BYTES = 20 * 1024 * 1024
const GENERIC_RESULT_FAILURE = 'Generation failed'

// M0.2 correction (FINDING-2): reads the result body incrementally and stops
// as soon as the running total exceeds maxBytes, instead of buffering the
// whole response via arrayBuffer() first. Content-Length (checked by the
// caller) is only an early fast-fail — it is absent/forgeable, so this is
// the actual memory bound. Returns null on any failure (oversized, stream
// error, missing body) so the caller can collapse every case into the same
// generic, fail-closed response.
async function readLimitedBody(response: Response, maxBytes: number): Promise<Buffer | null> {
  const body = response.body
  if (!body) return null

  const reader = body.getReader()
  const chunks: Uint8Array[] = []
  let total = 0

  while (true) {
    let result: ReadableStreamReadResult<Uint8Array>
    try {
      result = await reader.read()
    } catch {
      await reader.cancel().catch(() => {})
      return null
    }
    if (result.done) break

    total += result.value.byteLength
    if (total > maxBytes) {
      await reader.cancel().catch(() => {})
      return null
    }
    chunks.push(result.value)
  }

  return Buffer.concat(chunks, total)
}

function unauthorized(): NextResponse {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

// M0.3 F-1/F-2: fail-closed gate checked before any provider/Blob write this
// request might perform. A group is closed for new writes once it is either
// tombstoned (F-1 — a deletion/retention-sweep already committed to removing
// it) or past the *current* retention configuration's deadline (F-2 — a
// defense-in-depth re-check independent of the lifecycle token's own exp,
// in case retention config changed after the token was issued). Any error
// while checking (bad/missing config, Blob read failure) collapses to
// "closed" — an unknown lifecycle state must never be treated as open.
async function isGroupClosedForWrites(groupId: string): Promise<boolean> {
  try {
    const parsed = parseGroupId(groupId)
    if (!parsed) return true
    const retentionMs = getAssetRetentionMs()
    if (Date.now() >= parsed.createdAtMs + retentionMs) return true
    return await groupTombstoneExists(groupId)
  } catch {
    return true
  }
}

async function isGroupTombstoned(groupId: string): Promise<boolean> {
  try {
    return await groupTombstoneExists(groupId)
  } catch {
    return true
  }
}

export async function GET(req: NextRequest) {
  if (isContainmentActive()) return containmentResponse()

  // M0.3: the asset lifecycle Bearer token is required before any provider
  // fetch or Blob call — it is what authorizes this poll to store its result
  // under a specific, already-verified asset group.
  const authHeader = req.headers.get('authorization') ?? ''
  const match = /^Bearer\s+(.+)$/.exec(authHeader)
  if (!match) return unauthorized()

  const lifecycleVerification = verifyAssetLifecycleCapability(match[1])
  if (!lifecycleVerification.ok) return unauthorized()
  const groupId = lifecycleVerification.groupId

  // M0.3 F-1/F-2 checkpoint 1: before any provider fetch or Blob call. Stops
  // a token whose group was deleted/expired after issuance from ever
  // starting provider/download work.
  if (await isGroupClosedForWrites(groupId)) return unauthorized()

  const t0 = Date.now()
  try {
    const id        = req.nextUrl.searchParams.get('id')
    const statusUrl = req.nextUrl.searchParams.get('statusUrl')

    if (!id) return NextResponse.json({ error: 'Missing prediction ID' }, { status: 400 })

    let pollUrl: string
    if (statusUrl) {
      const decoded = decodeURIComponent(statusUrl)
      if (!isAllowedFalUrl(decoded)) {
        return NextResponse.json({ error: 'Invalid statusUrl' }, { status: 400 })
      }
      pollUrl = decoded
    } else {
      pollUrl = falStatusUrl(id)
    }

    // Step 1: lightweight status check — should complete in < 1s
    const statusRes = await fetch(pollUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
      signal: AbortSignal.timeout(10_000),
    })

    if (!statusRes.ok) {
      const errText = await statusRes.text()
      console.error(`[/api/poll] status error ${statusRes.status} id=${id}:`, errText)
      return NextResponse.json({ error: 'Не удалось проверить статус генерации. Попробуйте позже.' }, { status: 500 })
    }

    const statusData: FalStatusResponse = await statusRes.json()
    console.log(`[/api/poll] status=${statusData.status} id=${id} (${Date.now() - t0}ms)`)

    if (statusData.status === 'IN_QUEUE' || statusData.status === 'IN_PROGRESS') {
      return NextResponse.json({ id, status: 'processing', outputUrl: null })
    }

    if (statusData.status === 'FAILED') {
      console.error(`[/api/poll] generation failed id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'Generation failed' })
    }

    // Step 2: COMPLETED — fetch result metadata to get the image URL
    // No image download, no Blob upload — return Fal.ai URL directly
    const responseUrl =
      statusData.response_url ??
      falResultUrl(id)

    const resultRes = await fetch(responseUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
      signal: AbortSignal.timeout(10_000),
    })

    if (!resultRes.ok) {
      const errText = await resultRes.text()
      console.error(`[/api/poll] result error ${resultRes.status} id=${id}:`, errText)
      return NextResponse.json({ error: 'Не удалось получить результат генерации. Попробуйте позже.' }, { status: 500 })
    }

    const resultData: FalResultResponse = await resultRes.json()
    const outputUrl = resultData.images?.[0]?.url ?? null

    if (!outputUrl) {
      console.error(`[/api/poll] no image in response id=${id}:`, JSON.stringify(resultData))
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'No image in response' })
    }

    // M0.2: the provider result URL is never returned to the client. It is
    // validated, downloaded server-side, copied into our own private Blob
    // store, and replaced with a short-lived result capability token.
    if (!isAllowedFalResultUrl(outputUrl)) {
      console.error(`[/api/poll] result host not allowed id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    let imageRes: Response
    try {
      // M0.2 correction (FINDING-1): redirect: 'manual' — isAllowedFalResultUrl
      // above only validated outputUrl's own host; following a redirect would
      // silently move the actual download to an unvalidated host. No redirect,
      // to any host including the same one, is followed for M0.2.
      imageRes = await fetch(outputUrl, {
        redirect: 'manual',
        signal: AbortSignal.timeout(RESULT_DOWNLOAD_TIMEOUT_MS),
      })
    } catch (err: unknown) {
      console.error(`[/api/poll] result download error id=${id}:`, err instanceof Error ? err.message : String(err))
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    if (imageRes.status >= 300 && imageRes.status < 400) {
      console.error(`[/api/poll] result download redirected id=${id} status=${imageRes.status}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    if (!imageRes.ok) {
      console.error(`[/api/poll] result download status ${imageRes.status} id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    const resultContentType = imageRes.headers.get('content-type') ?? ''
    if (!resultContentType.startsWith('image/')) {
      console.error(`[/api/poll] result content-type rejected id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    // Early fast-fail only — Content-Length can be absent or understated, so
    // it must not be relied on as the actual memory bound (see FINDING-2).
    const declaredLength = Number(imageRes.headers.get('content-length') ?? '0')
    if (Number.isFinite(declaredLength) && declaredLength > RESULT_MAX_BYTES) {
      console.error(`[/api/poll] result too large (declared) id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    const imageBuffer = await readLimitedBody(imageRes, RESULT_MAX_BYTES)
    if (!imageBuffer) {
      console.error(`[/api/poll] result too large, unreadable, or missing body id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    // M0.3 F-1/F-2 checkpoint 2: immediately before writing the result — the
    // race window between checkpoint 1 and here is exactly where a
    // concurrent DELETE/retention sweep could otherwise be resurrected.
    if (await isGroupClosedForWrites(groupId)) return unauthorized()

    let resultPathname: string
    try {
      const uploaded = await uploadPrivateAsset('results', groupId, imageBuffer, resultContentType)
      resultPathname = uploaded.pathname
    } catch {
      console.error(`[/api/poll] private result storage failed id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    // M0.3 F-1 checkpoint 3: immediately after the write, before issuing any
    // capability. If a tombstone landed during the upload itself (the last
    // race window this route can close), the leaked result — or the whole
    // group — is purged, and its actual outcome (F-4 correction) decides
    // what gets recorded: a verified-absent purge is journaled as a
    // confirmed corrective deletion; anything less certain (verifiedAbsent:
    // false, or the purge throwing) is journaled as pending cleanup instead
    // — never as confirmed absence. Either way the durable tombstone itself
    // (not this journal entry) is what makes the next retention sweep retry
    // the purge, and this route denies the client identically regardless of
    // which branch ran — it never reveals whether the purge succeeded.
    if (await isGroupTombstoned(groupId)) {
      console.error(`[/api/poll] group tombstoned during upload id=${id}`)

      let verifiedAbsent = false
      let deletedCount = 0
      try {
        const purgeResult = await purgeTombstonedGroupAssets(groupId)
        verifiedAbsent = purgeResult.verifiedAbsent
        deletedCount = purgeResult.deletedCount
      } catch {
        verifiedAbsent = false
      }

      try {
        if (verifiedAbsent) {
          await recordDeletionJournalEntry({
            reason: 'post-deletion-race-cleanup',
            groupIdentifier: groupId,
            deletedCount,
          })
        } else {
          await recordPendingCleanupJournalEntry({ groupIdentifier: groupId })
        }
      } catch {
        // Journal-write failure must never weaken the denial below, and must
        // never be allowed to surface to the client.
      }

      return unauthorized()
    }

    let resultToken: string
    try {
      resultToken = createResultCapability(resultPathname, RESULT_CAPABILITY_TTL_MS)
    } catch {
      console.error(`[/api/poll] result capability creation failed id=${id}`)
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: GENERIC_RESULT_FAILURE })
    }

    console.log(`[/api/poll] succeeded id=${id} (${Date.now() - t0}ms)`)
    return NextResponse.json({ id, status: 'succeeded', resultToken, error: null })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/poll] exception:', message)
    return NextResponse.json({ error: 'Ошибка проверки статуса генерации.' }, { status: 500 })
  }
}
