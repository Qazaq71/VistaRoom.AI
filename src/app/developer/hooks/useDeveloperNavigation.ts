"use client";

import { usePathname } from "next/navigation";
import { developerNavigation } from "../lib/navigation";
import { DEVELOPER_ROOT_PATH } from "../constants/developer";

export function useDeveloperNavigation() {
  const activePath = usePathname();

  const isActive = (href: string): boolean => {
    if (href === DEVELOPER_ROOT_PATH) {
      return activePath === DEVELOPER_ROOT_PATH;
    }
    return activePath === href || activePath?.startsWith(`${href}/`) === true;
  };

  return {
    navigationItems: developerNavigation,
    activePath,
    isActive,
  };
}
