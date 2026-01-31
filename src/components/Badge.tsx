import React from "react";

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

const variantClasses = {
  default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  warning:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  achievement:
    "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

/**
 * Badge component for status indicators and achievements
 * Used for flight badges, achievement indicators, status labels
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
