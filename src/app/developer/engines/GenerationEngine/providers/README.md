# Providers

Every file in this folder implements the `GenerationProvider` interface
defined in [`../GenerationProvider.ts`](../GenerationProvider.ts):

```ts
interface GenerationProvider {
  provider: GenerationProviderType;
  generate(request: GenerationRequest): Promise<GenerationResponse>;
}
```

## Rules for a provider

- Implement `GenerationProvider` — no exceptions, no partial implementations.
- Know nothing about `Benchmark`, React, or any specific page/UI component.
- Take a `GenerationRequest` in and return a `GenerationResponse` out —
  no other side effects should be observable to callers.
- Be registered in [`../ProviderFactory.ts`](../ProviderFactory.ts) under its
  `GenerationProviderType`.

## Current providers

- `MockGenerationProvider` — simulates a generation call, makes no API calls.

## Future providers

- `OpenAIProvider`
- `FluxProvider`
- `GeminiProvider`
- `LocalProvider`
- `ComfyUIProvider`

These are not implemented yet. `ProviderFactory` throws a clear error for
any provider type that has no implementation, rather than silently
falling back to mock.
