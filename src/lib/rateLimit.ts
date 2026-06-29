import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Limits per plan (requests per 24-hour fixed window)
const PLAN_LIMITS: Record<string, number> = {
  free:   parseInt(process.env.DAILY_LIMIT        ?? '3',   10),
  profi:  parseInt(process.env.DAILY_LIMIT_PROFI  ?? '20',  10),
  agency: parseInt(process.env.DAILY_LIMIT_AGENCY ?? '100', 10),
}

const DEV_BYPASS = process.env.BYPASS_RATE_LIMIT === 'true'

const DEV_IPS = new Set(
  (process.env.DEV_IPS ?? '127.0.0.1,::1,::ffff:127.0.0.1')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean),
)

// One Ratelimit instance per plan, lazily created and cached across warm invocations.
const limiters = new Map<string, Ratelimit>()

function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  return Redis.fromEnv()
}

function getLimiter(plan: string): Ratelimit | null {
  if (limiters.has(plan)) return limiters.get(plan)!

  const redis = getRedis()
  if (!redis) return null

  const dailyLimit = PLAN_LIMITS[plan] ?? PLAN_LIMITS.free

  const limiter = new Ratelimit({
    redis,
    limiter: Ratelimit.fixedWindow(dailyLimit, '24 h'),
    // Separate key namespace per plan so future plan changes don't mix counters.
    prefix:  `vistaroom:rl:${plan}`,
  })

  limiters.set(plan, limiter)
  return limiter
}

export async function getRateLimit(
  ip: string,
  plan: 'free' | 'profi' | 'agency' = 'free',
): Promise<{ ok: boolean; remaining: number; limit: number }> {
  if (DEV_BYPASS || DEV_IPS.has(ip)) {
    return { ok: true, remaining: 999, limit: 999 }
  }

  const limiter = getLimiter(plan)

  if (!limiter) {
    // Upstash not configured — fail open so generation isn't broken during local dev
    // or if env vars are missing. Log once so it's visible in Vercel logs.
    console.warn('[rateLimit] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set — rate limiting disabled')
    return { ok: true, remaining: PLAN_LIMITS[plan] ?? PLAN_LIMITS.free, limit: PLAN_LIMITS[plan] ?? PLAN_LIMITS.free }
  }

  try {
    const { success, remaining, limit } = await limiter.limit(ip)
    return { ok: success, remaining, limit }
  } catch (err) {
    // Redis unavailable — fail open rather than blocking legitimate users
    console.error('[rateLimit] Redis error, skipping limit:', err instanceof Error ? err.message : err)
    return { ok: true, remaining: PLAN_LIMITS[plan] ?? PLAN_LIMITS.free, limit: PLAN_LIMITS[plan] ?? PLAN_LIMITS.free }
  }
}
