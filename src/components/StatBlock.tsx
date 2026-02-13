import { ReactNode } from "react";

interface StatBlockProps {
  /** Label for the statistic */
  label: string;
  /** Value to display */
  value: string | number;
  /** Optional icon */
  icon?: ReactNode;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
  /** Card variant */
  variant?: "default" | "glass" | "gradient" | "outline";
  /** Icon color accent */
  iconColor?: "cyan" | "purple" | "emerald" | "amber" | "rose";
}

const sizeClasses = {
  sm: {
    label: "text-xs",
    value: "text-lg font-bold",
    icon: "w-8 h-8",
    iconInner: "[&>svg]:w-4 [&>svg]:h-4",
    padding: "p-4",
  },
  md: {
    label: "text-sm",
    value: "text-2xl font-bold",
    icon: "w-10 h-10",
    iconInner: "[&>svg]:w-5 [&>svg]:h-5",
    padding: "p-6",
  },
  lg: {
    label: "text-sm",
    value: "text-3xl font-bold",
    icon: "w-12 h-12",
    iconInner: "[&>svg]:w-6 [&>svg]:h-6",
    padding: "p-6",
  },
};

const iconColorClasses = {
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-600 dark:text-rose-400",
  },
};

const variantClasses = {
  default: "bg-white dark:bg-slate-800 shadow-sm",
  glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-white/20 dark:border-slate-700/50",
  gradient: "bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 shadow-lg",
  outline: "bg-transparent border-2 border-slate-200 dark:border-slate-700",
};

/**
 * Stats block for displaying metrics with optional icon.
 * Used in stats grids, dashboard cards, profile stats, etc.
 */
export function StatBlock({
  label,
  value,
  icon,
  size = "md",
  className = "",
  variant = "default",
  iconColor = "cyan",
}: StatBlockProps) {
  const sizes = sizeClasses[size];
  const colors = iconColorClasses[iconColor];

  return (
    <div className={`rounded-xl ${sizes.padding} ${variantClasses[variant]} ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-slate-500 dark:text-slate-400 font-medium ${sizes.label}`}>
            {label}
          </p>
          <p className={`text-slate-800 dark:text-white ${sizes.value}`}>
            {value}
          </p>
        </div>
        {icon && (
          <div className={`${sizes.icon} ${colors.bg} rounded-lg flex items-center justify-center`}>
            <span className={`${colors.text} ${sizes.iconInner}`}>{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatBlock;
