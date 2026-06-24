import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const maxDuration = 10

export async function GET(req: NextRequest) {
  try {
    const id        = req.nextUrl.searchParams.get('id')
    const statusUrl = req.nextUrl.searchParams.get('statusUrl')

    if (!id) {
      return NextResponse.json({ error: 'Missing prediction ID' }, { status: 400 })
    }

    // Use statusUrl if provided, otherwise construct from request_id
    const pollUrl = statusUrl
      ? decodeURIComponent(statusUrl)
      : `https://queue.fal.run/fal-ai/flux-pro/requests/${id}/status`

    const statusRes = await fetch(pollUrl, {
      headers: { 'Authorization': `Key ${process.env.FAL_API_KEY}` },
    })

    if (!statusRes.ok) {
      const errText = await statusRes.text()
      console.error('[/api/poll] status fetch error', errText)
      return NextResponse.json({ error: 'Status check failed' }, { status: 500 })
    }

    const statusData = await statusRes.json() as {
      status: string   // 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'
      request_id?: string
      response_url?: string
    }

    console.log('[/api/poll] status:', JSON.stringify(statusData))

    // Still in queue or processing
    if (statusData.status === 'IN_QUEUE' || statusData.status === 'IN_PROGRESS') {
      return NextResponse.json({ id, status: 'processing', outputUrl: null })
    }

    // Failed
    if (statusData.status === 'FAILED') {
      return NextResponse.json({ id, status: 'failed', outputUrl: null, error: 'Generation failed' })
    }

    // Completed — fetch the actual result
    const responseUrl = statusData.response_url
      ?? `https://queue.fal.run/fal-ai/flux-pro/requests/${id}`

    const resultRes = await fetch(responseUrl, {
      headers: { 'Authorization': `Key ${process.env.FAL_API_KEY}` },
    })

    if (!resultRes.ok) {
      console.error('[/api/poll] result fetch error', await resultRes.text())
      return NextResponse.json({ error: 'Result fetch failed' }, { status: 500 })
    }

    const resultData = await resultRes.json() as {
      images?: { url: string }[]
    }

    console.log('[/api/poll] result:', JSON.stringify(resultData))

    const outputUrl = resultData.images?.[0]?.url ?? null

    return NextResponse.json({
      id,
      status:    outputUrl ? 'succeeded' : 'failed',
      outputUrl,
      error:     outputUrl ? null : 'No image in response',
    })

  } catch (err: unknown) {
    console.error('[/api/poll]', err)
    return NextResponse.json({ error: 'Poll error' }, { status: 500 })
  }
}
