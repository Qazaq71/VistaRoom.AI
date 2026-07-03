import Link from "next/link";
import type { DeveloperSectionStatus } from "../types/developer";
import { isComingSoon } from "../utils/developer";

type DashboardCardProps = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  status?: DeveloperSectionStatus;
};

export default function DashboardCard({
  title,
  description,
  href,
  icon,
  status,
}: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-400 hover:shadow-sm"
    >
      <div className="flex items-start justify-between">
        <span className="text-2xl">{icon ?? "🔧"}</span>
        {isComingSoon(status) && (
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500">
            Soon
          </span>
        )}
      </div>
      <div>
        <h3 className="text-base font-medium text-neutral-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        )}
      </div>
    </Link>
  );
}
