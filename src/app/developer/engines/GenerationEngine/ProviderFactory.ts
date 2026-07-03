import type { GenerationProvider } from "./GenerationProvider";
import type { GenerationProviderType } from "./types";
import { MockGenerationProvider } from "./providers/MockGenerationProvider";

export function createGenerationProvider(providerType: GenerationProviderType): GenerationProvider {
  switch (providerType) {
    case "mock":
      return new MockGenerationProvider();
    case "openai":
    case "flux":
    case "gemini":
    case "local":
    case "comfyui":
      throw new Error(`Provider "${providerType}" is not implemented yet.`);
    default: {
      const exhaustiveCheck: never = providerType;
      throw new Error(`Unknown provider "${exhaustiveCheck}".`);
    }
  }
}
