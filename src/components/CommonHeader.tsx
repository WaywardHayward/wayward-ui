import { ReactNode } from "react";

interface CommonHeaderProps {
  /** Main title displayed in the header */
  title: string;
  /** Optional subtitle text */
  subtitle?: string;
  /** Optional action button configuration */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** User information for personalized greeting */
  user?: {
    displayName?: string;
    email?: string;
    avatarUrl?: string;
  };
  /** Show time-based greeting (Good morning/afternoon/evening) */
  showGreeting?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Optional leading content (logo, back button, etc.) */
  leading?: ReactNode;
  /** Header position: fixed at top or static */
  position?: "fixed" | "static";
}

/**
 * Common header component with optional user greeting and action button.
 * Provides a consistent header UI across pages with personalized touches.
 */
export function CommonHeader({
  title,
  subtitle,
  action,
  user,
  showGreeting = true,
  className = "",
  leading,
  position = "fixed",
}: CommonHeaderProps) {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const generateInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const positionClasses =
    position === "fixed"
      ? "fixed top-0 left-0 right-0 z-50"
      : "relative";

  return (
    <div
      className={`${positionClasses} bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 px-3 py-2 ${className}`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          {/* Leading content or User Avatar */}
          {leading || (user && (
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 ring-2 ring-cyan-500/20">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.displayName || user.email}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-semibold text-xs">
                  {user.displayName
                    ? generateInitials(user.displayName)
                    : user.email?.charAt(0).toUpperCase() || "U"}
                </span>
              )}
            </div>
          ))}

          {/* Title and Greeting */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <h1 className="text-sm sm:text-lg font-bold text-slate-800 dark:text-white truncate">
                {title}
              </h1>
              {user && showGreeting && (
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">
                  {getTimeOfDay()},{" "}
                  {user.displayName?.split(" ")[0] || user.email?.split("@")[0]}
                  !
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate hidden sm:block">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Action Button */}
        {action && (
          <button
            onClick={action.onClick}
            className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap flex-shrink-0 shadow-lg shadow-cyan-500/25"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}

export default CommonHeader;
