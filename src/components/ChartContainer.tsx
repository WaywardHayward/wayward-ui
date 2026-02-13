import React from "react";

interface ChartContainerProps {
  /** Title displayed at the top of the chart container */
  title: string;
  /** Chart content to display */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Variant styling */
  variant?: "default" | "glass" | "gradient";
}

/**
 * Container component for charts with consistent styling.
 * Provides a styled wrapper with title for chart visualizations.
 */
export function ChartContainer({
  title,
  children,
  className = "",
  subtitle,
  variant = "default",
}: ChartContainerProps) {
  const variantClasses = {
    default: "bg-white dark:bg-slate-800 shadow-sm",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-slate-700/50",
    gradient: "bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 shadow-lg",
  };

  return (
    <div
      className={`rounded-xl p-4 sm:p-6 ${variantClasses[variant]} ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {subtitle}
          </p>
        )}
      </div>
      <div className="h-64 sm:h-80">{children}</div>
    </div>
  );
}

export default ChartContainer;
