import type { BenchmarkGenerationStatus } from "../types/benchmark";

type BenchmarkToolbarProps = {
  status: BenchmarkGenerationStatus;
  canGenerate: boolean;
  onGenerate: () => void;
  onClear: () => void;
};

export default function BenchmarkToolbar({
  status,
  canGenerate,
  onGenerate,
  onClear,
}: BenchmarkToolbarProps) {
  const isGenerating = status === "generating";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onGenerate}
        disabled={!canGenerate || isGenerating}
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:bg-neutral-300"
      >
        {isGenerating ? "Generating..." : "Generate"}
      </button>

      <button
        type="button"
        onClick={onClear}
        className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-400"
      >
        Clear
      </button>

      <button
        type="button"
        disabled
        className="rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-400 disabled:cursor-not-allowed"
      >
        Regenerate
      </button>
    </div>
  );
}
