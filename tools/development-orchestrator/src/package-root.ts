import { fileURLToPath } from "node:url";
import path from "node:path";

// This file always lives directly under either src/ or dist/, both of which are
// direct children of the package root — so one level up is the package root
// whether running via tsx (src) or the compiled build (dist).
const here = path.dirname(fileURLToPath(import.meta.url));
export const PACKAGE_ROOT = path.resolve(here, "..");
