import React from "react";

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "none" | "sm" | "md" | "lg";
  responsive?: boolean;
  className?: string;
}

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const responsiveColsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12",
};

const gapClasses = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

/**
 * Grid component for responsive layouts
 * Handles common grid patterns with responsive breakpoints
 */
export function Grid({
  children,
  cols = 1,
  gap = "md",
  responsive = true,
  className = "",
}: GridProps) {
  const gridCols = responsive ? responsiveColsClasses[cols] : colsClasses[cols];

  return (
    <div
      className={`
      grid
      ${gridCols}
      ${gapClasses[gap]}
      ${className}
    `.trim()}
    >
      {children}
    </div>
  );
}
