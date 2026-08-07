import { NextResponse } from 'next/server'
import { CONTAINMENT_ERROR_CODE } from './containmentCode'

// M0.0 immediate production exposure containment (Lean Delivery Decision §7,
// C1 Delivery Brief §5 package 0). Explicit, provider-neutral kill switch for
// the external generation path (/api/generate, /api/poll, /api/proxy).
//
// There is no configuration value that re-enables generation in production —
// reopening requires a future code change after M0.2 (private storage) and
// M0.5 (structured logging) land. Any Vercel deployment (production or
// preview) is always blocked; outside Vercel, only NODE_ENV 'development' or
// 'test' are treated as safe. Every other or ambiguous runtime signal fails
// closed. This reads only server-side runtime env vars, never request data,
// so no client-supplied header/query/cookie/body can influence it.
//
// This module imports next/server (server-only) and must never be imported
// from client code — the wire code alone is available client-side from the
// neutral ./containmentCode module (see src/hooks/pollContainment.ts).

export { CONTAINMENT_ERROR_CODE }

function isDeployedOnVercel(): boolean {
  return typeof process.env.VERCEL_ENV === 'string' && process.env.VERCEL_ENV.length > 0
}

export function isContainmentActive(): boolean {
  if (isDeployedOnVercel()) return true

  const nodeEnv = process.env.NODE_ENV
  return nodeEnv !== 'development' && nodeEnv !== 'test'
}

export function containmentResponse(): NextResponse {
  return NextResponse.json(
    {
      error: 'Генерация временно недоступна. Сервис на техническом обслуживании, попробуйте позже.',
      code: CONTAINMENT_ERROR_CODE,
    },
    { status: 503 },
  )
}
