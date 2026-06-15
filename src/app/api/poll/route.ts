import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const maxDuration = 10

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id')
    if (!id || !/^\d{1,20}$/.test(id)) {
      return NextResponse.json({ error: 'Invalid prediction ID' }, { status: 400 })
    }

    const mlRes = await fetch(
      `https://modelslab.com/api/v6/interior/fetch/${id}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: process.env.MODELSLAB_API_KEY }),
      }
    )

    const mlData = await mlRes.json() as {
      status: string
      output?: string[]
      message?: string
    }

    const outputUrl = mlData.output?.[0] ?? null
    const status = mlData.status === 'success'
      ? 'succeeded'
      : mlData.status === 'error'
        ? 'failed'
        : 'processing'

    return NextResponse.json({
      id,
      status,
      outputUrl,
      error: mlData.status === 'error' ? (mlData.message ?? 'Generation failed') : null,
    })
  } catch (err: unknown) {
    console.error('[/api/poll]', err)
    return NextResponse.json({ error: 'Poll error' }, { status: 500 })
  }
}
