import { TypographyProps, colorClasses } from "./types";

/**
 * Small text component
 */
export function Small({
  children,
  color = "muted",
  className = "",
}: TypographyProps) {
  return (
    <small className={`text-sm leading-normal ${colorClasses[color]} ${className}`}>
      {children}
    </small>
  );
}
