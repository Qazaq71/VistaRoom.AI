import { IMAGE_ENGINE_CONFIG } from '@/config/image'
import { FalImageProvider } from './FalImageProvider'
import type { ImageProvider } from './ImageProvider'

// Single point where a concrete ImageProvider is instantiated. Adding a new
// provider later means adding one more branch here — nothing else changes.
export function createImageProvider(): ImageProvider {
  if (IMAGE_ENGINE_CONFIG.provider === 'fal') {
    return new FalImageProvider()
  }

  throw new Error(`Unsupported image provider: ${IMAGE_ENGINE_CONFIG.provider}`)
}
