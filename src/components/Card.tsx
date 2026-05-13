import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "elevated" | "interactive" | "glass" | "gradient" | "cockpit";
  header?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  /** Add a subtle glow effect - 'blue' | 'amber' | 'none' */
  glow?: "blue" | "amber" | "none";
}

/**
 * Track D tokens with legacy fallbacks. Consumers without the CSS vars
 * get the original slate-900/60 glass look via var() defaults.
 */
const TOKEN_SURFACE_TILE = "var(--surface-tile, rgba(15,23,42,0.6))"; // slate-900/60 fallback
const TOKEN_GLASS_BG = "var(--glass-bg, rgba(15,23,42,0.6))";
const TOKEN_GLASS_BORDER = "var(--glass-border, rgba(255,255,255,0.10))";
const TOKEN_GLASS_BORDER_STRONG = "var(--glass-border-strong, rgba(255,255,255,0.15))";

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const glowClasses = {
  none: "",
  blue: "border-blue-500/20 shadow-glow-blue-sm hover:shadow-glow-blue",
  amber: "border-amber-500/20 shadow-glow-amber-sm hover:shadow-glow-amber",
};

type CardVariant = NonNullable<CardProps["variant"]>;

const variantClasses: Record<CardVariant, string> = {
  default: "border shadow-surface-sm",
  outlined: "border-2",
  elevated: "shadow-surface-lg border",
  interactive: "border shadow-surface-sm hover:shadow-surface-md transition-all cursor-pointer",
  glass: [
    "backdrop-blur-xl",
    "border",
    "shadow-lg shadow-black/20",
    "transition-all duration-300",
  ].join(" "),
  gradient: [
    "backdrop-blur-xl",
    "border",
    "shadow-surface-md",
    "hover:shadow-surface-lg",
    "transition-all duration-300",
  ].join(" "),
  cockpit: [
    "backdrop-blur-2xl",
    "border",
    "shadow-surface-lg",
    "relative",
  ].join(" "),
};

function getVariantStyle(variant: CardVariant): CSSProperties {
  switch (variant) {
    case "default":
    case "outlined":
    case "elevated":
    case "interactive":
      return {
        backgroundColor: TOKEN_GLASS_BG,
        borderColor: TOKEN_GLASS_BORDER,
      };
    case "glass":
      return {
        backgroundColor: TOKEN_SURFACE_TILE,
        borderColor: TOKEN_GLASS_BORDER,
      };
    case "gradient":
      return {
        backgroundImage: `linear-gradient(to bottom, ${TOKEN_SURFACE_TILE}, ${TOKEN_GLASS_BG})`,
        borderColor: TOKEN_GLASS_BORDER_STRONG,
      };
    case "cockpit":
      return {
        backgroundImage: `linear-gradient(to bottom, ${TOKEN_SURFACE_TILE}, ${TOKEN_GLASS_BG})`,
        borderColor: TOKEN_GLASS_BORDER_STRONG,
      };
    default:
      return {};
  }
}

function CockpitInnerHighlight() {
  return (
    <div
      className="absolute inset-0 rounded-xl pointer-events-none"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
      }}
    />
  );
}

export function Card({
  children,
  className = "",
  padding = "md",
  variant = "default",
  header,
  footer,
  onClick,
  glow = "none",
}: CardProps) {
  const Component = onClick ? "button" : "div";
  const variantStyle = getVariantStyle(variant);

  return (
    <Component
      style={variantStyle}
      className={`
        rounded-xl relative
        ${variantClasses[variant]}
        ${glow !== "none" ? glowClasses[glow] : ""}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      {variant === "cockpit" && <CockpitInnerHighlight />}
      {header && (
        <div className="px-6 py-4 border-b" style={{ borderColor: TOKEN_GLASS_BORDER }}>
          {header}
        </div>
      )}
      <div className={`${paddingClasses[padding]} relative z-10`}>{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t" style={{ borderColor: TOKEN_GLASS_BORDER }}>
          {footer}
        </div>
      )}
    </Component>
  );
}
