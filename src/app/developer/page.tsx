import SectionHeader from "./components/SectionHeader";
import DashboardCard from "./components/DashboardCard";
import { developerNavigation } from "./lib/navigation";
import { DEVELOPER_STUDIO_DESCRIPTION } from "./constants/developer";

export default function DeveloperDashboardPage() {
  const sections = developerNavigation.filter(
    (item) => item.href !== "/developer"
  );

  return (
    <>
      <SectionHeader
        title="Dashboard"
        description={DEVELOPER_STUDIO_DESCRIPTION}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <DashboardCard key={section.href} {...section} />
        ))}
      </div>
    </>
  );
}
