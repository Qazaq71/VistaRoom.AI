import { classifyPollContainment } from './pollContainment'

// Client-safe M0.2 helpers for useImageGeneration.ts: building the Bearer
// capability header for /api/proxy, classifying a failed /api/proxy response
// into a user-facing message, and managing the lifecycle of the browser
// object URL created from the private result blob. Kept separate from the
// hook itself so this logic is testable without a DOM/React environment.

export function buildBearerAuthHeader(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}` }
}

export interface ProxyFailure {
  message: string
}

const RESULT_UNAUTHORIZED = 'Доступ к результату истёк. Попробуйте сгенерировать заново.'
const RESULT_NOT_FOUND = 'Результат больше не доступен. Попробуйте сгенерировать заново.'
const RESULT_GENERIC_FAILURE = 'Не удалось получить результат генерации. Попробуйте позже.'

// Reuses the /api/poll containment classifier since /api/proxy returns the
// same M0.0 503 + code shape when containment is active.
export function classifyProxyFailure(status: number, body: unknown): ProxyFailure {
  const containment = classifyPollContainment(status, body)
  if (containment.isContainment) return { message: containment.message }

  if (status === 401 || status === 403) return { message: RESULT_UNAUTHORIZED }
  if (status === 404) return { message: RESULT_NOT_FOUND }
  return { message: RESULT_GENERIC_FAILURE }
}

export interface ObjectUrlManager {
  set(url: string): void
  clear(): void
}

// Ensures at most one live object URL exists at a time so results/mask
// canvases never leak browser memory across generations.
export function createObjectUrlManager(
  revoke: (url: string) => void = url => URL.revokeObjectURL(url),
): ObjectUrlManager {
  let current: string | null = null
  return {
    set(url: string): void {
      if (current) revoke(current)
      current = url
    },
    clear(): void {
      if (current) {
        revoke(current)
        current = null
      }
    },
  }
}
