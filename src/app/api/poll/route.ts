import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const maxDuration = 10

type FalStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'

interface FalStatusResponse {
  status: FalStatus
  request_id?: string
  response_url?: string
}

interface FalResultResponse {
  images?: { url: string }[]
}

export async function GET(req: NextRequest) {
  try {
    const id        = req.nextUrl.searchParams.get('id')
    const statusUrl = req.nextUrl.searchParams.get('statusUrl')

    if (!id) return NextResponse.json({ error: 'Missing prediction ID' }, { status: 400 })

    const pollUrl = statusUrl
      ? decodeURIComponent(statusUrl)
      : `https://queue.fal.run/fal-ai/flux-pro/requests/${id}/status`

    const statusRes = await fetch(pollUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
    })

    if (!statusRes.ok) {
      const errText = await statusRes.text()
      console.error('[/api/poll] status error', statusRes.status, errText)
      return NextResponse.json({ error: 'Status check failed: ' + errText }, { status: 500 })
    }

    const statusData: FalStatusResponse = await statusRes.json()
    console.log('[/api/poll] status:', statusData.status, 'id:', id)

    if (statusData.status === 'IN_QUEUE' || statusData.status === 'IN_PROGRESS') {
      return NextResponse.json({ id, status: 'processing', outputUrl: null })
    }

    if (statusData.status === 'FAILED') {
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'Generation failed' })
    }

    const responseUrl =
      statusData.response_url ??
      `https://queue.fal.run/fal-ai/flux-pro/requests/${id}`

    const resultRes = await fetch(responseUrl, {
      headers: { Authorization: `Key ${process.env.FAL_API_KEY}` },
    })

    if (!resultRes.ok) {
      const errText = await resultRes.text()
      console.error('[/api/poll] result error', resultRes.status, errText)
      return NextResponse.json({ error: 'Result fetch failed: ' + errText }, { status: 500 })
    }

    const resultData: FalResultResponse = await resultRes.json()
    const outputUrl = resultData.images?.[0]?.url ?? null

    return NextResponse.json({
      id,
      status:   outputUrl ? 'succeeded' : 'failed',
      outputUrl,
      error:    outputUrl ? null : 'No image in response',
    })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/poll]', message)
    return NextResponse.json({ error: 'Poll error: ' + message }, { status: 500 })
  }
}
