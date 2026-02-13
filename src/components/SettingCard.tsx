import React, { ReactNode } from "react";

export interface SettingCardProps {
  title: string;
  description?: string;
  accentColor?: "blue" | "green" | "purple" | "orange" | "red" | "cyan" | "pink" | "amber";
  children: ReactNode;
  className?: string;
  /** Enable glass-morphism style */
  glass?: boolean;
  /** Add subtle glow effect */
  glow?: boolean;
}

const accentColors = {
  blue: {
    border: "border-blue-500",
    glow: "shadow-blue-500/10",
  },
  green: {
    border: "border-emerald-500",
    glow: "shadow-emerald-500/10",
  },
  purple: {
    border: "border-purple-500",
    glow: "shadow-purple-500/10",
  },
  orange: {
    border: "border-orange-500",
    glow: "shadow-orange-500/10",
  },
  red: {
    border: "border-red-500",
    glow: "shadow-red-500/10",
  },
  cyan: {
    border: "border-cyan-500",
    glow: "shadow-cyan-500/10",
  },
  pink: {
    border: "border-pink-500",
    glow: "shadow-pink-500/10",
  },
  amber: {
    border: "border-amber-500",
    glow: "shadow-amber-500/10",
  },
};

/**
 * Consistent setting card component with left accent border.
 * Features dark mode friendly styling with optional glass effect.
 * 
 * @example
 * <SettingCard
 *   title="Display Settings"
 *   description="Customize how your data is displayed"
 *   accentColor="cyan"
 * >
 *   <Toggle label="Dark Mode" />
 * </SettingCard>
 */
export const SettingCard: React.FC<SettingCardProps> = ({
  title,
  description,
  accentColor = "blue",
  children,
  className = "",
  glass = false,
  glow = false,
}) => {
  const colors = accentColors[accentColor];
  
  const baseClasses = glass
    ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50"
    : "bg-slate-800 border-slate-700";

  return (
    <div
      className={`
        ${baseClasses}
        rounded-xl shadow-lg border
        ${glow ? `shadow-xl ${colors.glow}` : ""}
        p-4 sm:p-6 
        transition-all duration-300
        hover:border-slate-600
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <div className={`border-l-4 ${colors.border} pl-3 sm:pl-4 mb-4 sm:mb-6`}>
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};
