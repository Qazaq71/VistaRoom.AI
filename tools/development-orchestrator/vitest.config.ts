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
    include: ["test/**/*.test.ts"],
    environment: "node",
    passWithNoTests: false
  }
});
