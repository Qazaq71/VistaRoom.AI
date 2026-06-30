import { NextRequest, NextResponse } from 'next/server'

export const dynamic    = 'force-dynamic'
export const maxDuration = 25

type FalStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'

interface FalStatusResponse {
  status:        FalStatus
  request_id?:   string
  response_url?: string
}

interface FalResultResponse {
  images?: { url: string }[]
}

export async function GET(req: NextRequest) {
  const t0 = Date.now()
  try {
    const id        = req.nextUrl.searchParams.get('id')
    const statusUrl = req.nextUrl.searchParams.get('statusUrl')

    if (!id) return NextResponse.json({ error: 'Missing prediction ID' }, { status: 400 })

    const pollUrl = statusUrl
      ? decodeURIComponent(statusUrl)
      : `https://queue.fal.run/fal-ai/flux-pro/requests/${id}/status`

    // Step 1: lightweight status check — should complete in < 1s
    const statusRes = await fetch(pollUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
      signal: AbortSignal.timeout(10_000),
    })

    if (!statusRes.ok) {
      const errText = await statusRes.text()
      console.error(`[/api/poll] status error ${statusRes.status} id=${id}:`, errText)
      return NextResponse.json({ error: 'Status check failed: ' + errText }, { status: 500 })
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
      `https://queue.fal.run/fal-ai/flux-pro/requests/${id}`

    const resultRes = await fetch(responseUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
      signal: AbortSignal.timeout(10_000),
    })

    if (!resultRes.ok) {
      const errText = await resultRes.text()
      console.error(`[/api/poll] result error ${resultRes.status} id=${id}:`, errText)
      return NextResponse.json({ error: 'Result fetch failed: ' + errText }, { status: 500 })
    }

    const resultData: FalResultResponse = await resultRes.json()
    const outputUrl = resultData.images?.[0]?.url ?? null

    if (!outputUrl) {
      console.error(`[/api/poll] no image in response id=${id}:`, JSON.stringify(resultData))
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'No image in response' })
    }

    console.log(`[/api/poll] succeeded id=${id} (${Date.now() - t0}ms)`)
    return NextResponse.json({ id, status: 'succeeded', outputUrl, error: null })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/poll] exception:', message)
    return NextResponse.json({ error: 'Poll error: ' + message }, { status: 500 })
  }
}
