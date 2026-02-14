import { Tab } from "../types/Tab";

export interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  variant?: "default" | "mobile";
}

/**
 * Reusable tab navigation component
 * Supports badges, icons, and different variants for desktop/mobile
 */
export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  variant = "default",
}: TabNavigationProps) {
  const isMobile = variant === "mobile";

  return (
    <div
      className={`border-b border-gray-200 dark:border-gray-700 ${className}`}
    >
      <nav
        className={isMobile ? "flex" : "flex space-x-8"}
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`
              ${
                isMobile
                  ? "flex-1 py-4 px-3"
                  : "py-2 px-1"
              }
              border-b-2 font-medium text-sm transition-colors bg-transparent
              ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
              }
            `}
            onClick={() => onTabChange(tab.id)}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon && <span className="shrink-0">{tab.icon}</span>}
              <span className={isMobile ? "hidden sm:inline" : ""}>
                {tab.label}
              </span>
              {tab.badge !== undefined && (
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    activeTab === tab.id
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}
