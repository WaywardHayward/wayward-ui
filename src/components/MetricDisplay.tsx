import { ReactNode } from "react";

interface MetricDisplayProps {
  /** Label for the metric */
  label: string;
  /** Value to display */
  value: string | number;
  /** Optional icon */
  icon?: ReactNode;
  /** Layout direction */
  direction?: "vertical" | "horizontal";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
  /** Value color variant */
  valueColor?: "default" | "success" | "warning" | "error" | "accent";
  /** Optional unit suffix */
  unit?: string;
}

const sizeClasses = {
  sm: {
    label: "text-xs",
    value: "text-base font-semibold",
    icon: "text-sm",
  },
  md: {
    label: "text-xs",
    value: "text-lg font-bold",
    icon: "text-base",
  },
  lg: {
    label: "text-sm",
    value: "text-2xl font-bold",
    icon: "text-lg",
  },
};

const valueColorClasses = {
  default: "text-slate-800 dark:text-white",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  error: "text-red-600 dark:text-red-400",
  accent: "text-cyan-600 dark:text-cyan-400",
};

/**
 * Display a single metric with label and value.
 * Useful for dashboards, stats, and data displays.
 */
export function MetricDisplay({
  label,
  value,
  icon,
  direction = "vertical",
  size = "md",
  className = "",
  valueColor = "default",
  unit,
}: MetricDisplayProps) {
  const sizes = sizeClasses[size];

  if (direction === "horizontal") {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        <div className="flex items-center gap-2">
          {icon && <span className={`text-slate-400 ${sizes.icon}`}>{icon}</span>}
          <span className={`text-slate-500 dark:text-slate-400 ${sizes.label}`}>
            {label}
          </span>
        </div>
        <span className={`${valueColorClasses[valueColor]} ${sizes.value}`}>
          {value}
          {unit && <span className="text-slate-400 dark:text-slate-500 ml-1 font-normal text-sm">{unit}</span>}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className={`text-slate-500 dark:text-slate-400 uppercase tracking-wide ${sizes.label}`}>
        {label}
      </p>
      <div className="flex items-center gap-2">
        {icon && <span className={`text-slate-400 ${sizes.icon}`}>{icon}</span>}
        <p className={`${valueColorClasses[valueColor]} ${sizes.value}`}>
          {value}
          {unit && <span className="text-slate-400 dark:text-slate-500 ml-1 font-normal text-sm">{unit}</span>}
        </p>
      </div>
    </div>
  );
}

export default MetricDisplay;
