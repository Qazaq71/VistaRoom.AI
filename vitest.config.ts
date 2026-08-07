import path from 'node:path'
import { defineConfig } from 'vitest/config'

// Resolves the '@/*' tsconfig path alias for vitest, which does not read
// tsconfig.json paths on its own. Needed to import route handlers
// (src/app/api/**/route.ts) directly in tests; no other test behavior changed.
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
