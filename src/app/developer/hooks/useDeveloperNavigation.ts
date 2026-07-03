"use client";

import { usePathname } from "next/navigation";
import { developerNavigation } from "../lib/navigation";

export function useDeveloperNavigation() {
  const activePath = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/developer") {
      return activePath === "/developer";
    }
    return activePath === href || activePath?.startsWith(`${href}/`) === true;
  };

  return {
    navigationItems: developerNavigation,
    activePath,
    isActive,
  };
}
