import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url')
    if (!url || !url.startsWith('https://')) {
      return new NextResponse('Invalid URL', { status: 400 })
    }
    // Allow ModelsLab CDN and Vercel Blob
    const allowed = [
      'stablediffusionapi.com',
      'modelslab.com',
      'pub-3626123a908346a7a8be8d9295f44e26.r2.dev',
      'public.blob.vercel-storage.com',
    ]
    const host = new URL(url).hostname
    if (!allowed.some(d => host.endsWith(d))) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    const res  = await fetch(url)
    const blob = await res.arrayBuffer()

    return new NextResponse(blob, {
      headers: {
        'Content-Type': res.headers.get('content-type') ?? 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch {
    return new NextResponse('Proxy error', { status: 500 })
  }
}
