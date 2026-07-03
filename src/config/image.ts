import type { ImageQuality } from '@/types/image'

// GPT Image 2 Edit is the only generation engine, reached exclusively through
// Fal.ai's queue API. Overridable via env so the exact model path can move
// without touching provider code (e.g. a future GPT Image 3/4 edit endpoint).
export const OPENAI_IMAGE_MODEL_URL =
  process.env.FAL_OPENAI_IMAGE_MODEL_URL || 'https://queue.fal.run/openai/gpt-image-2/edit'

export const OPENAI_IMAGE_DEFAULT_QUALITY: ImageQuality = 'medium'

export const FAL_REQUEST_TIMEOUT_HEADER = '300'
export const FAL_OUTPUT_FORMAT = 'jpeg'
export const FAL_NUM_IMAGES = 1

export const FAL_ALLOWED_STATUS_HOST = 'queue.fal.run'

// Fallback status/result URLs used by /api/poll when the client doesn't pass
// a statusUrl.
export function falStatusUrl(id: string): string {
  return `${OPENAI_IMAGE_MODEL_URL}/requests/${id}/status`
}

export function falResultUrl(id: string): string {
  return `${OPENAI_IMAGE_MODEL_URL}/requests/${id}`
}

// Guards against sending the Fal Authorization header to an arbitrary,
// client-supplied host (statusUrl is echoed back to the client by /api/generate).
export function isAllowedFalUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && parsed.hostname === FAL_ALLOWED_STATUS_HOST
  } catch {
    return false
  }
}
