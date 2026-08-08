import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'
import { runRetentionSweep } from '@/lib/retentionCleanup'

// M0.3 scheduled deletion-by-age (C1 Delivery Brief §5 package 3). This is
// itself a protective operation, so unlike /api/generate, /api/poll and
// /api/proxy it is NOT gated by M0.0 containment. Production Cron
// registration (vercel.json, schedule, Hobby daily-window fit) is a separate
// Owner decision and is explicitly out of scope here — this route only
// implements the CRON_SECRET-authorized handler that a future Cron
// configuration would call.

const MIN_CRON_SECRET_LENGTH = 32
const JSON_HEADERS = { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' }

function unauthorized(): NextResponse {
  return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: JSON_HEADERS })
}

function serverFailure(): NextResponse {
  return new NextResponse(JSON.stringify({ error: 'Retention sweep failed.' }), {
    status: 500,
    headers: JSON_HEADERS,
  })
}

function isAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret || secret.length < MIN_CRON_SECRET_LENGTH) return false

  const authHeader = req.headers.get('authorization') ?? ''
  const match = /^Bearer\s+(.+)$/.exec(authHeader)
  if (!match) return false

  const provided = Buffer.from(match[1], 'utf8')
  const expected = Buffer.from(secret, 'utf8')
  if (provided.length !== expected.length) return false
  return timingSafeEqual(provided, expected)
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return unauthorized()

  try {
    const result = await runRetentionSweep()
    if (!result.ok) return serverFailure()
    return new NextResponse(JSON.stringify({ ok: true }), { status: 200, headers: JSON_HEADERS })
  } catch {
    return serverFailure()
  }
}
