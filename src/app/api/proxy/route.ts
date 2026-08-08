import { NextRequest, NextResponse } from 'next/server'
import { isContainmentActive, containmentResponse } from '@/lib/containment'
import { readPrivateAsset, verifyResultCapability } from '@/lib/privateAssets'

// M0.2 authorized private-result delivery (Lean Delivery Decision §6.1;
// C1 Delivery Brief §5 package 2). This route no longer proxies arbitrary
// remote URLs — it serves exactly one private results/ Blob object per
// request, gated by a short-lived Bearer capability token. There is no
// ?url= parameter, no domain allowlist, and no public/CORS-open response.

function unauthorized(): NextResponse {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

function notFound(): NextResponse {
  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}

export async function GET(req: NextRequest) {
  if (isContainmentActive()) return containmentResponse()

  const authHeader = req.headers.get('authorization') ?? ''
  const match = /^Bearer\s+(.+)$/.exec(authHeader)
  if (!match) return unauthorized()

  const verification = verifyResultCapability(match[1])
  if (!verification.ok) return unauthorized()

  let result
  try {
    result = await readPrivateAsset(verification.pathname)
  } catch {
    return new NextResponse(null, { status: 500 })
  }

  if (!result || result.statusCode !== 200) return notFound()

  return new NextResponse(result.stream, {
    status: 200,
    headers: {
      'Content-Type': result.blob.contentType,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'private, no-store',
    },
  })
}
