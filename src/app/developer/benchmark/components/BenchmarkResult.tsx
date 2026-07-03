"use client";

import { useState } from "react";
import type { BenchmarkSession } from "../types/benchmark";

function ResultImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-48 w-full items-center justify-center rounded-md border border-dashed border-neutral-300 text-xs text-neutral-400">
        No image
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className="h-48 w-full rounded-md object-cover"
      onError={() => setFailed(true)}
    />
  );
}

type BenchmarkResultProps = {
  session: BenchmarkSession | null;
};

export default function BenchmarkResult({ session }: BenchmarkResultProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-medium text-neutral-700">Original</p>
        <ResultImage src={session?.originalImageSrc ?? ""} alt="Original" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-neutral-700">Generated</p>
        <ResultImage src={session?.generatedImageSrc ?? ""} alt="Generated" />
      </div>
    </div>
  );
}
