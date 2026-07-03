import type { DeveloperSectionStatus } from "../types/developer";

export function isComingSoon(status?: DeveloperSectionStatus): boolean {
  return status === "coming-soon";
}
