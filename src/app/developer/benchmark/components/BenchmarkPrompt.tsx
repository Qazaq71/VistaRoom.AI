import type { BenchmarkSession } from "../types/benchmark";

type BenchmarkPromptProps = {
  session: BenchmarkSession | null;
};

export default function BenchmarkPrompt({ session }: BenchmarkPromptProps) {
  if (!session) {
    return (
      <p className="rounded-md border border-dashed border-neutral-300 p-4 text-sm text-neutral-400">
        No generation yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 text-sm">
      <div>
        <p className="font-medium text-neutral-700">Prompt</p>
        <p className="mt-1 whitespace-pre-wrap text-neutral-600">
          {session.prompt ?? "—"}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 text-neutral-600">
        <span>
          <span className="font-medium text-neutral-700">Model:</span> {session.model ?? "—"}
        </span>
        <span>
          <span className="font-medium text-neutral-700">Status:</span> {session.status}
        </span>
        <span>
          <span className="font-medium text-neutral-700">Time:</span>{" "}
          {session.generationTimeMs ? `${session.generationTimeMs} ms` : "—"}
        </span>
      </div>

      {session.error && (
        <p className="rounded-md bg-red-50 p-3 text-red-600">{session.error}</p>
      )}
    </div>
  );
}
