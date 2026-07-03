import type { GenerationProviderType } from "../engines/GenerationEngine/types";

export const developerConfig = {
  studioName: "Developer Studio",
  version: "1.0",
  debug: true,
  benchmark: {
    provider: "mock" as "mock" | "public" | "local" | "blob" | "s3",
    root: "",
    publicPath: "/benchmark",
  },
  generation: {
    provider: "mock" as GenerationProviderType,
  },
};
