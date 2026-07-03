import type { ReactNode } from "react";
import DeveloperSidebar from "./DeveloperSidebar";
import DeveloperTopBar from "./DeveloperTopBar";

type DeveloperLayoutProps = {
  children: ReactNode;
};

export default function DeveloperLayout({ children }: DeveloperLayoutProps) {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      <DeveloperSidebar />
      <div className="flex flex-1 flex-col">
        <DeveloperTopBar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
