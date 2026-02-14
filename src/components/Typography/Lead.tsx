import { TypographyProps, colorClasses } from "./types";

/**
 * Lead text component (larger body text)
 */
export function Lead({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <p
      className={`text-xl md:text-2xl leading-relaxed font-light ${colorClasses[color]} ${className}`}
    >
      {children}
    </p>
  );
}
