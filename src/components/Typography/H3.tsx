import { TypographyProps, colorClasses } from "./types";

/**
 * H3 heading component - Subsection headings
 */
export function H3({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight ${colorClasses[color]} ${className}`}>
      {children}
    </h3>
  );
}
