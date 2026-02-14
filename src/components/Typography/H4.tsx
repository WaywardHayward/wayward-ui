import { TypographyProps, colorClasses } from "./types";

/**
 * H4 heading component - Card/component titles
 */
export function H4({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h4 className={`text-xl md:text-2xl font-semibold ${colorClasses[color]} ${className}`}>
      {children}
    </h4>
  );
}
