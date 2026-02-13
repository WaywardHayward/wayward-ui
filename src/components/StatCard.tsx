import React from "react";

interface StatCardProps {
  /** The main numeric or text value */
  value: string | number;
  /** Label describing the stat */
  label: string;
  /** Optional icon displayed above the value */
  icon?: React.ReactNode;
  /** Color scheme for the gradient */
  color?: "blue" | "amber" | "green" | "red" | "white";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Trend indicator - show a change direction */
  trend?: {
    direction: "up" | "down" | "neutral";
    value: string;
  };
  /** Optional unit suffix (e.g., "h", "km", "%") */
  unit?: string;
  /** Additional className */
  className?: string;
  /** Click handler for interactive stat cards */
  onClick?: () => void;
}

const colorClasses = {
  blue: "from-blue-400 via-blue-500 to-blue-600",
  amber: "from-amber-400 via-orange-500 to-amber-600",
  green: "from-emerald-400 via-green-500 to-emerald-600",
  red: "from-red-400 via-rose-500 to-red-600",
  white: "from-white via-slate-100 to-white",
};

const glowClasses = {
  blue: "shadow-glow-blue-sm",
  amber: "shadow-glow-amber-sm",
  green: "shadow-glow-green",
  red: "shadow-glow-red",
  white: "",
};

const iconColorClasses = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  green: "text-emerald-400",
  red: "text-red-400",
  white: "text-slate-300",
};

const sizeClasses = {
  sm: {
    value: "text-2xl",
    label: "text-xs",
    icon: "w-4 h-4",
    padding: "p-4",
    unit: "text-lg",
  },
  md: {
    value: "text-4xl",
    label: "text-sm",
    icon: "w-5 h-5",
    padding: "p-6",
    unit: "text-2xl",
  },
  lg: {
    value: "text-6xl",
    label: "text-base",
    icon: "w-6 h-6",
    padding: "p-8",
    unit: "text-3xl",
  },
};

const trendIcons = {
  up: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  ),
  down: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  neutral: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
    </svg>
  ),
};

/**
 * StatCard - Premium metric display component
 * 
 * Features:
 * - Large gradient numbers with cockpit aesthetic
 * - Optional trend indicators
 * - Multiple color schemes
 * - Responsive sizes
 * 
 * Usage:
 * ```tsx
 * <StatCard value="3.4" unit="h" label="Flight Duration" color="blue" />
 * <StatCard value={14} label="Total Flights" trend={{ direction: "up", value: "+2" }} />
 * ```
 */
export function StatCard({
  value,
  label,
  icon,
  color = "blue",
  size = "md",
  trend,
  unit,
  className = "",
  onClick,
}: StatCardProps) {
  const sizes = sizeClasses[size];
  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      className={`
        bg-gradient-to-b from-slate-800/80 to-slate-900/95
        backdrop-blur-xl
        border border-slate-700/50
        rounded-xl
        ${sizes.padding}
        ${onClick ? "cursor-pointer hover:border-slate-600/70 hover:shadow-surface-lg" : ""}
        transition-all duration-300
        ${glowClasses[color]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Icon */}
      {icon && (
        <div className={`${iconColorClasses[color]} ${sizes.icon} mb-3`}>
          {icon}
        </div>
      )}

      {/* Value with unit */}
      <div className="flex items-baseline gap-1">
        <span
          className={`
            ${sizes.value}
            font-bold
            tracking-tight
            bg-gradient-to-r ${colorClasses[color]}
            bg-clip-text text-transparent
          `.trim().replace(/\s+/g, ' ')}
        >
          {value}
        </span>
        {unit && (
          <span
            className={`
              ${sizes.unit}
              font-semibold
              text-slate-400
            `}
          >
            {unit}
          </span>
        )}
      </div>

      {/* Label and trend row */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-slate-400 uppercase tracking-wider font-medium ${sizes.label}">
          {label}
        </span>
        
        {trend && (
          <span
            className={`
              flex items-center gap-1
              text-sm font-medium
              ${trend.direction === "up" ? "text-emerald-400" : ""}
              ${trend.direction === "down" ? "text-red-400" : ""}
              ${trend.direction === "neutral" ? "text-slate-400" : ""}
            `}
          >
            {trendIcons[trend.direction]}
            {trend.value}
          </span>
        )}
      </div>
    </Component>
  );
}
