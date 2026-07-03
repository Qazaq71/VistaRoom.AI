import { OpenAIImageProvider } from './OpenAIImageProvider'
import type { ImageProvider } from './ImageProvider'

// Single point where the concrete ImageProvider is instantiated. GPT Image 2
// Edit (via Fal.ai) is the only generation engine.
export function createImageProvider(): ImageProvider {
  return new OpenAIImageProvider()
}
