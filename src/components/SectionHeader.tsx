import { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

/**
 * Section header with optional subtitle and action button.
 * Used throughout apps for consistent page/section headers.
 */
export function SectionHeader({
  title,
  subtitle,
  action,
  size = "md",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div>
        <h2 className={`font-semibold text-slate-800 dark:text-white ${sizeClasses[size]}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
