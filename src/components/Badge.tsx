import React, { CSSProperties } from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "achievement";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
}

const TOKEN_SURFACE_PILL = "var(--surface-pill, rgba(31,41,55,1))"; // gray-800 fallback
const TOKEN_TEXT_PRIMARY = "var(--text-primary, #ffffff)";
const TOKEN_ACCENT_INFO = "var(--accent-info, #3b82f6)";

const variantClasses = {
  default: "", // styled inline via tokens
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  warning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  info: "", // styled inline via tokens
  achievement:
    "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

type BadgeVariant = NonNullable<BadgeProps["variant"]>;

function getVariantStyle(variant: BadgeVariant): CSSProperties | undefined {
  if (variant === "default") {
    return { backgroundColor: TOKEN_SURFACE_PILL, color: TOKEN_TEXT_PRIMARY };
  }
  if (variant === "info") {
    return {
      backgroundColor: "rgba(46, 134, 200, 0.15)",
      color: TOKEN_ACCENT_INFO,
    };
  }
  return undefined;
}

/**
 * Badge component for status indicators and achievements.
 * - default + info use Track D tokens (with sensible fallbacks).
 * - success/warning/danger keep their semantic palettes (meaning, not decoration).
 */
export function Badge({
  children,
  variant = "default",
  size = "md",
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      style={getVariantStyle(variant)}
      className={`
      inline-flex items-center
      font-medium rounded-full
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `.trim()}
    >
      {icon && <span className="mr-1 w-3 h-3">{icon}</span>}
      {children}
    </span>
  );
}
