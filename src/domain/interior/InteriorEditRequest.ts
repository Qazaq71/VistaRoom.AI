import type { InteriorOperation, InteriorMode, ImageQuality, ImageResolution } from '@/types/image'

// VisataRoom AI's single internal representation of "what the user wants done
// to their room photo". Provider-agnostic: no Fal (or any other vendor) field
// names, payload shapes, or transport details belong here — only domain intent.
export interface InteriorEditRequest {
  operation: InteriorOperation
  mode: InteriorMode
  prompt: string
  image: string
  mask?: string
  references?: string[]
  quality?: ImageQuality
  resolution?: ImageResolution
  guidanceScale?: number
  aspectRatio?: string
  metadata?: Record<string, unknown>
}
