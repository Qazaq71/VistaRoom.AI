import { DEVELOPER_STUDIO_NAME } from "../constants/developer";
import { developerConfig } from "../config/developer.config";

export default function DeveloperTopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-6">
      <span className="text-sm font-semibold tracking-tight">
        {DEVELOPER_STUDIO_NAME}
      </span>
      <span className="text-xs text-neutral-400">Version {developerConfig.version}</span>
    </header>
  );
}
