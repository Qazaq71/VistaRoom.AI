import type { GenerationProviderType } from "../engines/GenerationEngine/types";
import type { BenchmarkSource } from "../benchmark/types/benchmark";
import { DEVELOPER_STUDIO_NAME } from "../constants/developer";

export const developerConfig = {
  studioName: DEVELOPER_STUDIO_NAME,
  version: "1.0",
  debug: true,
  benchmark: {
    source: "mock" as BenchmarkSource,
    root: "",
    publicPath: "/benchmark",
  },
  generation: {
    provider: "mock" as GenerationProviderType,
  },
};
