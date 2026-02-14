import { TypographyProps, colorClasses } from "./types";

/**
 * H1 heading component - Hero text
 */
export function H1({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${colorClasses[color]} ${className}`}
    >
      {children}
    </h1>
  );
}
