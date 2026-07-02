export type InteriorOperation = 'redesign' | 'replace' | 'erase'

export type InteriorMode = 'style' | 'partial' | 'clear'

// Named `ImageProviderName` (not `ImageProvider`) to avoid colliding with the
// `ImageProvider` interface in providers/image/ImageProvider.ts — both would
// otherwise be unimportable together under the same identifier.
export type ImageProviderName = 'fal'

// GPTImageProvider always submits 'medium' for now — 'low'/'high' are reserved
// for a future quality-tier feature.
export type ImageQuality = 'low' | 'medium' | 'high'

// Not used by the Fal provider yet — reserved for providers that accept an
// explicit output resolution instead of an aspect ratio.
export type ImageResolution = '1024x1024' | '1024x768' | '768x1024' | '1920x1080'
