"use client";

import Link from "next/link";
import { useDeveloperNavigation } from "../hooks/useDeveloperNavigation";
import { isComingSoon } from "../utils/developer";

export default function DeveloperSidebar() {
  const { navigationItems, isActive } = useDeveloperNavigation();

  return (
    <aside className="w-64 shrink-0 border-r border-neutral-200 bg-white p-4">
      <nav className="flex flex-col gap-1">
        {navigationItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                active
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </span>
              {isComingSoon(item.status) && !active && (
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-400">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
