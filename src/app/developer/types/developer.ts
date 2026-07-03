export type NavigationItem = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
};

export type DeveloperSectionStatus = "ready" | "coming-soon";

export type DeveloperSection = NavigationItem & {
  status: DeveloperSectionStatus;
};
