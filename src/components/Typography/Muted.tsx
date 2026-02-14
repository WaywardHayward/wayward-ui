import { TypographyProps, colorClasses } from "./types";

/**
 * Muted text component
 */
export function Muted({
  children,
  className = "",
}: Omit<TypographyProps, "color">) {
  return (
    <p
      className={`text-sm leading-normal ${colorClasses.muted} ${className}`}
    >
      {children}
    </p>
  );
}
