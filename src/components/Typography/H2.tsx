import { TypographyProps, colorClasses } from "./types";

/**
 * H2 heading component - Section headings
 */
export function H2({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${colorClasses[color]} ${className}`}
    >
      {children}
    </h2>
  );
}
