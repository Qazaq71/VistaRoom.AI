// Neutral M0.0 containment wire constant. No server-only imports (unlike
// src/lib/containment.ts, which imports next/server's NextResponse) — safe
// to import from client bundles such as src/hooks/pollContainment.ts as well
// as server routes.
export const CONTAINMENT_ERROR_CODE = 'M0_CONTAINMENT_ACTIVE'
