# GenerationEngine

## Purpose

`GenerationEngine` is the single entry point for all AI image-generation
providers used inside Developer Studio. Consumers (currently `Benchmark`)
never talk to a specific AI model or vendor SDK directly — they only talk
to `GenerationEngine`.

This makes it possible to add new providers (OpenAI, FLUX, Gemini, local
models, ComfyUI, ...) without ever touching `Benchmark`, `Prompt Lab`,
`Style Lab`, or any other consumer.

## Architecture

```
Benchmark UI
  -> BenchmarkService
    -> GenerationEngine
      -> ProviderFactory
        -> GenerationProvider (interface)
          -> MockGenerationProvider
          -> OpenAIProvider    (future)
          -> FluxProvider      (future)
          -> GeminiProvider    (future)
          -> LocalProvider     (future)
          -> ComfyUIProvider   (future)
```

Each layer only knows about the layer directly below it:

- `Benchmark` knows about `GenerationEngine` only.
- `GenerationEngine` knows about `ProviderFactory` only.
- `ProviderFactory` knows how to build a `GenerationProvider` for a given
  `GenerationProviderType`.
- Each provider implements the `GenerationProvider` interface and knows
  nothing about `Benchmark`, React, or any other consumer.

### GenerationEngine

- Reads the active provider type from `developerConfig.generation.provider`.
- Creates the provider via `createGenerationProvider()`.
- Exposes a single method: `generate(request: GenerationRequest): Promise<GenerationResponse>`.
- Pure TypeScript — no React, no UI, no page-specific logic.

### ProviderFactory

- Exposes `createGenerationProvider(providerType: GenerationProviderType): GenerationProvider`.
- On DS-3, only `"mock"` is implemented.
- Any other provider type throws `Provider "<type>" is not implemented yet.`
  instead of silently falling back to mock, so misconfiguration is caught
  immediately.

### GenerationProvider interface

- Contract every provider must implement: a `provider` field and a
  `generate(request)` method returning a `GenerationResponse`.
- Implemented as a plain TypeScript interface, not an abstract class.

### MockGenerationProvider

- Simulates a generation call with a random 700-1200ms delay.
- Always returns `status: "success"`, `provider: "mock"`, `model: "mock"`,
  and echoes back `request.originalImageSrc` as the generated image.
- The mock prompt explicitly includes `categoryId`, `imageId`, and `styleId`
  so it's obvious in the UI that no real AI model was called.
- Makes no network or API calls.

## Future providers

The following providers are planned but **not implemented** as of DS-3:

- `OpenAIProvider`
- `FluxProvider`
- `GeminiProvider`
- `LocalProvider`
- `ComfyUIProvider`

Adding one of these requires only:

1. Creating a class in `providers/` that implements `GenerationProvider`.
2. Registering it in `ProviderFactory.ts`.

No changes to `Benchmark`, `GenerationEngine`, or any UI component are
required.
