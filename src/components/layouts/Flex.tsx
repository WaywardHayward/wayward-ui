import React from "react";

interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  wrap?: boolean;
  gap?: "none" | "sm" | "md" | "lg";
  className?: string;
}

const directionClasses = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const gapClasses = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

/**
 * Flex component for flexible layouts
 * Provides consistent flexbox utilities with sensible defaults
 */
export function Flex({
  children,
  direction = "row",
  justify = "start",
  align = "start",
  wrap = false,
  gap = "md",
  className = "",
}: FlexProps) {
  return (
    <div
      className={`
      flex
      ${directionClasses[direction]}
      ${justifyClasses[justify]}
      ${alignClasses[align]}
      ${wrap ? "flex-wrap" : ""}
      ${gapClasses[gap]}
      ${className}
    `.trim()}
    >
      {children}
    </div>
  );
}
