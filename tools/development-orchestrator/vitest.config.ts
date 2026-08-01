import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const packageRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: packageRoot,
  // This package is pure Node/TS with no CSS. Vite otherwise walks up parent directories
  // looking for a postcss config and, inside this worktree, finds the VistaRoom AI product's
  // own postcss.config.js (which needs a devDependency this isolated package never installs).
  // An inline empty PostCSS config keeps this package's tests fully independent of the
  // product's config, matching the removability requirement.
  css: {
    postcss: {
      plugins: []
    }
  },
  test: {
    // Package-only suffix (not .test.ts/.spec.ts) so these files are never picked up by
    // the root repository's default Vitest include glob — this package stays fully
    // isolated from the product's root test run without requiring any root-level exclusion.
    // Also kept under a __tests__/ directory: the root product's `next build` type-checker
    // ignores diagnostics from files under __tests__/__mocks__ or named *.test.*/*.spec.*
    // (node_modules/next/dist/lib/typescript/runTypeCheck.js), so this directory name is
    // load-bearing for keeping this package's own TS diagnostics from breaking the root build.
    include: ["__tests__/**/*.orchestrator.ts"],
    environment: "node",
    passWithNoTests: false
  }
});
