import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12",
};

/**
 * Container component for consistent page layouts
 * Replaces repeated container patterns throughout the app
 */
export function Container({
  children,
  size = "md",
  padding = "md",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
      mx-auto
      ${sizeClasses[size]}
      ${paddingClasses[padding]}
      ${className}
    `.trim()}
    >
      {children}
    </div>
  );
}
