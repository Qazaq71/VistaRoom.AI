export type InteriorOperation = 'redesign' | 'replace' | 'erase'

export type InteriorMode = 'style' | 'partial' | 'clear'

// Named `ImageProviderName` (not `ImageProvider`) to avoid colliding with the
// `ImageProvider` interface in providers/image/ImageProvider.ts — both would
// otherwise be unimportable together under the same identifier.
export type ImageProviderName = 'fal'

// Not used by the Fal provider yet — reserved for providers (e.g. GPT Image)
// that support a quality/cost tradeoff parameter.
export type ImageQuality = 'low' | 'medium' | 'high'

// Not used by the Fal provider yet — reserved for providers that accept an
// explicit output resolution instead of an aspect ratio.
export type ImageResolution = '1024x1024' | '1024x768' | '768x1024' | '1920x1080'

// Unified request accepted by ImageProvider.submit(), provider-agnostic.
// Operation-specific extras (e.g. Fal's aspectRatio/guidanceScale) travel in `metadata`
// so this shape doesn't need to change when a new provider needs different extras.
export interface ImageProviderSubmitRequest {
  operation: InteriorOperation
  mode: InteriorMode
  imageUrl: string
  prompt: string
  maskUrl?: string
  quality?: ImageQuality
  resolution?: ImageResolution
  metadata?: Record<string, unknown>
}

// Unified result every provider must return, regardless of the underlying API shape.
export interface ImageProviderSubmitResult {
  requestId: string
  statusUrl?: string
  responseUrl?: string
  raw?: unknown
}

// Aliases kept so any pre-existing references to the old names keep compiling.
export type ImageProviderRequest = ImageProviderSubmitRequest
export type ImageProviderResult = ImageProviderSubmitResult

// Shape of Fal.ai's queue submit response.
export interface FalSubmitResult {
  request_id: string
  response_url: string
  status_url: string
  cancel_url: string
}

// Shape of Fal.ai's queue status response.
export interface FalStatusResult {
  status: 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'
  request_id?: string
  response_url?: string
}
