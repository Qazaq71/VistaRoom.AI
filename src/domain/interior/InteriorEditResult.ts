import type { ImageProviderName } from '@/types/image'

// VisataRoom AI's single internal representation of what a provider handed
// back after accepting a generation request. Provider-agnostic result shape.
export interface InteriorEditResult {
  requestId: string
  statusUrl?: string
  responseUrl?: string
  provider: ImageProviderName
  raw?: unknown
}
