import type { ReactNode } from "react";
import { DEVELOPER_STUDIO_NAME } from "../constants/developer";
import DeveloperSidebar from "./DeveloperSidebar";

type DeveloperLayoutProps = {
  children: ReactNode;
};

export default function DeveloperLayout({ children }: DeveloperLayoutProps) {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      <DeveloperSidebar />
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center border-b border-neutral-200 bg-white px-6">
          <span className="text-sm font-semibold tracking-tight">
            {DEVELOPER_STUDIO_NAME}
          </span>
          {/* Reserved for a future TopBar (env switcher, user, quick actions) */}
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
