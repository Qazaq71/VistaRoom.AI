import { LRUCache } from 'lru-cache'

// Хранит счётчик запросов по IP, TTL = до конца суток
const cache = new LRUCache<string, number>({
  max: 10_000,
  ttl: 1000 * 60 * 60 * 24, // 24 часа
})

const DAILY_LIMIT = parseInt(process.env.DAILY_LIMIT ?? '3', 10)

export function getRateLimit(ip: string): {
  ok: boolean
  remaining: number
  limit: number
} {
  const current = cache.get(ip) ?? 0

  if (current >= DAILY_LIMIT) {
    return { ok: false, remaining: 0, limit: DAILY_LIMIT }
  }

  cache.set(ip, current + 1)
  return { ok: true, remaining: DAILY_LIMIT - current - 1, limit: DAILY_LIMIT }
}
