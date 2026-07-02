import type { ImageProviderName, ImageQuality, ImageResolution } from '@/types/image'

// Fal.ai model endpoints. Overridable via env so the underlying model can be
// swapped later without touching provider code.
export const REDESIGN_MODEL_URL =
  process.env.FAL_REDESIGN_MODEL_URL || 'https://queue.fal.run/fal-ai/flux-pro/kontext'
export const REPLACE_MODEL_URL =
  process.env.FAL_REPLACE_MODEL_URL || 'https://queue.fal.run/fal-ai/flux-pro/v1/fill'
export const ERASE_MODEL_URL =
  process.env.FAL_ERASE_MODEL_URL || 'https://queue.fal.run/fal-ai/flux-pro/v1/erase'

export const FAL_REQUEST_TIMEOUT_HEADER = '300'
export const FAL_SAFETY_TOLERANCE = '2'
export const FAL_OUTPUT_FORMAT = 'jpeg'
export const FAL_NUM_IMAGES = 1
export const FAL_DEFAULT_GUIDANCE_SCALE = 7
export const FAL_ERASE_DILATE_PIXELS = 10

// Provider-agnostic engine config, not wired into the generation logic yet.
// Prepares the config layer for a future GPT Image 2 (or other) provider swap.
export const IMAGE_ENGINE_CONFIG = {
  provider: (process.env.DEFAULT_IMAGE_PROVIDER || 'fal') as ImageProviderName,
  // There's no single "the" model — redesign/replace/erase each hit a
  // separate Fal endpoint (see *_MODEL_URL above). Defaults to the redesign one.
  model: process.env.DEFAULT_IMAGE_MODEL || REDESIGN_MODEL_URL,
  quality: (process.env.DEFAULT_IMAGE_QUALITY || 'medium') as ImageQuality,
  finalQuality: (process.env.FINAL_IMAGE_QUALITY || 'high') as ImageQuality,
  resolution: (process.env.DEFAULT_IMAGE_RESOLUTION || '1024x1024') as ImageResolution,
  timeoutMs: Number(process.env.IMAGE_GENERATION_TIMEOUT_MS || 180000),
}

export const FAL_ALLOWED_STATUS_HOST = 'queue.fal.run'

// Fallback status/result URLs used by /api/poll when the client doesn't pass
// a statusUrl (kept here alongside the other queue.fal.run references).
export function falStatusUrl(id: string): string {
  return `https://queue.fal.run/fal-ai/flux-pro/kontext/requests/${id}/status`
}

export function falResultUrl(id: string): string {
  return `https://queue.fal.run/fal-ai/flux-pro/requests/${id}`
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
