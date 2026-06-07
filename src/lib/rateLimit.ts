import { LRUCache } from 'lru-cache'

const cache = new LRUCache<string, number>({
  max: 10_000,
  ttl: 1000 * 60 * 60 * 24,
})

const DAILY_LIMIT = parseInt(process.env.DAILY_LIMIT ?? '3', 10)
const DEV_BYPASS = process.env.BYPASS_RATE_LIMIT === 'true'
const DEV_IPS = new Set(
  (process.env.DEV_IPS ?? '127.0.0.1,::1,::ffff:127.0.0.1')
    .split(',').map(s => s.trim()).filter(Boolean)
)

export function getRateLimit(ip: string): { ok: boolean; remaining: number; limit: number } {
  if (DEV_BYPASS || DEV_IPS.has(ip)) {
    return { ok: true, remaining: 999, limit: 999 }
  }
  const current = cache.get(ip) ?? 0
  if (current >= DAILY_LIMIT) {
    return { ok: false, remaining: 0, limit: DAILY_LIMIT }
  }
  cache.set(ip, current + 1)
  return { ok: true, remaining: DAILY_LIMIT - current - 1, limit: DAILY_LIMIT }
}
