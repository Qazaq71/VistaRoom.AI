/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scoped to Developer Studio only — the public site does not use Tailwind.
  content: ['./src/app/developer/**/*.{ts,tsx}'],
  corePlugins: {
    // Preflight is a global reset; disabling it keeps this config from
    // touching the existing site's styles outside src/app/developer.
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
