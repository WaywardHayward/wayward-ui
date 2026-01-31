import React from "react";

interface SectionProps {
  children: React.ReactNode;
  variant?: "default" | "card" | "hero" | "sidebar";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const variantClasses = {
  default: "bg-white dark:bg-gray-800",
  card: "bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700",
  hero: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
  sidebar:
    "bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700",
};

const spacingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
};

/**
 * Section component for consistent content areas
 * Provides standard spacing and background variants
 */
export function Section({
  children,
  variant = "default",
  spacing = "md",
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
      ${variantClasses[variant]}
      ${spacingClasses[spacing]}
      ${className}
    `.trim()}
    >
      {children}
    </section>
  );
}
