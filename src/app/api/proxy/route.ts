import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_DOMAINS = [
  'fal.media',
  'cdn.fal.ai',
  'storage.googleapis.com',
  'public.blob.vercel-storage.com',
  'stablediffusionapi.com',
  'modelslab.com',
  'pub-3626123a908346a7a8be8d9295f44e26.r2.dev',
]

export async function GET(req: NextRequest) {
  try {
    const rawUrl = req.nextUrl.searchParams.get('url')
    if (!rawUrl) return new NextResponse('Missing url parameter', { status: 400 })

    let parsed: URL
    try {
      parsed = new URL(rawUrl)
    } catch {
      return new NextResponse('Invalid URL', { status: 400 })
    }

    if (parsed.protocol !== 'https:') return new NextResponse('Only HTTPS allowed', { status: 400 })

    const host      = parsed.hostname
    const isAllowed = ALLOWED_DOMAINS.some(d => host === d || host.endsWith('.' + d))
    if (!isAllowed) {
      console.warn('[/api/proxy] Blocked domain:', host)
      return new NextResponse('Forbidden', { status: 403 })
    }

    const res  = await fetch(rawUrl, { headers: { 'User-Agent': 'Mozilla/5.0 VistaRoom-AI/1.0' } })
    if (!res.ok) return new NextResponse(`Upstream error: ${res.status}`, { status: 502 })

    const blob        = await res.arrayBuffer()
    const contentType = res.headers.get('content-type') ?? 'image/jpeg'

    return new NextResponse(blob, {
      headers: {
        'Content-Type':  contentType,
        'Cache-Control': 'public, max-age=86400, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/proxy]', message)
    return new NextResponse('Proxy error: ' + message, { status: 500 })
  }
}
