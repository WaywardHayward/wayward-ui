import { ReactNode } from "react";

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
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantClasses = {
    default:
      "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm",
    outlined:
      "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600",
    elevated:
      "bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700",
    interactive:
      "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-blue-500/30",
    // Enhanced glass with stronger blur and subtle border glow
    glass: [
      "bg-slate-900/60 backdrop-blur-xl",
      "border border-white/10",
      "shadow-lg shadow-black/20",
      "hover:bg-slate-900/70 hover:border-white/15",
      "transition-all duration-300",
    ].join(" "),
    // New gradient variant with premium depth
    gradient: [
      "bg-gradient-to-b from-slate-800/80 to-slate-900/95",
      "backdrop-blur-xl",
      "border border-slate-700/50",
      "shadow-surface-md",
      "hover:shadow-surface-lg hover:border-slate-600/50",
      "transition-all duration-300",
    ].join(" "),
    // Cockpit panel style - instrument-like appearance
    cockpit: [
      "bg-gradient-to-b from-slate-800/90 to-slate-900/95",
      "backdrop-blur-2xl",
      "border border-slate-700/60",
      "shadow-surface-lg",
      "relative",
    ].join(" "),
  };

  const glowClasses = {
    none: "",
    blue: "border-blue-500/20 shadow-glow-blue-sm hover:shadow-glow-blue",
    amber: "border-amber-500/20 shadow-glow-amber-sm hover:shadow-glow-amber",
  };

  // Inner highlight for cockpit variant
  const innerHighlight = variant === "cockpit" ? (
    <div 
      className="absolute inset-0 rounded-xl pointer-events-none"
      style={{
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
      }}
    />
  ) : null;

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={`
        rounded-xl relative
        ${variantClasses[variant]} 
        ${glow !== "none" ? glowClasses[glow] : ""}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      {innerHighlight}
      {header && (
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700/50">
          {header}
        </div>
      )}
      <div className={`${paddingClasses[padding]} relative z-10`}>{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700/50">
          {footer}
        </div>
      )}
    </Component>
  );
}
