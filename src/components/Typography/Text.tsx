import { TypographyProps, colorClasses } from "./types";

/**
 * Body text component
 */
export function Text({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-base leading-relaxed ${colorClasses[color]} ${className}`}>{children}</p>
  );
}
