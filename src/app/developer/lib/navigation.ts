import type { DeveloperSection } from "../types/developer";

export const developerNavigation: DeveloperSection[] = [
  {
    title: "Dashboard",
    description: "Overview of all Developer Studio tools and modules.",
    href: "/developer",
    icon: "🏠",
    status: "ready",
  },
  {
    title: "Benchmark",
    description: "Compare generation quality across models and settings.",
    href: "/developer/benchmark",
    icon: "📊",
    status: "coming-soon",
  },
  {
    title: "Prompt Lab",
    description: "Design, test, and refine generation prompts.",
    href: "/developer/prompt-lab",
    icon: "🧪",
    status: "coming-soon",
  },
  {
    title: "Style Lab",
    description: "Build and preview interior design styles.",
    href: "/developer/style-lab",
    icon: "🎨",
    status: "coming-soon",
  },
  {
    title: "My Style Lab",
    description: "Experiment with user-defined custom styles.",
    href: "/developer/my-style-lab",
    icon: "🧬",
    status: "coming-soon",
  },
  {
    title: "Logs",
    description: "Inspect generation and system logs.",
    href: "/developer/logs",
    icon: "📜",
    status: "coming-soon",
  },
  {
    title: "Settings",
    description: "Configure Developer Studio preferences.",
    href: "/developer/settings",
    icon: "⚙️",
    status: "coming-soon",
  },
];
