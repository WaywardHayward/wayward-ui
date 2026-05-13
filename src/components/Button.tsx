import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success" | "glow" | "glow-amber";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  /** Use gradient background for primary-style buttons */
  gradient?: boolean;
}

/**
 * Track D theme tokens with legacy fallbacks.
 * Consumers that define the CSS vars (--accent-warm, --surface-tile,
 * --glass-border, --text-primary) get the Track D palette. Consumers
 * that don't get the original blue/slate look via the var() fallback.
 */
const TOKEN_ACCENT_WARM = "var(--accent-warm, #2563eb)"; // primary CTA fill
const TOKEN_ACCENT_WARM_HOVER = "var(--accent-warm-hover, #3b82f6)";
const TOKEN_SURFACE_TILE = "var(--surface-tile, #1e293b)"; // secondary fill (slate-800)
const TOKEN_GLASS_BORDER = "var(--glass-border, rgba(255,255,255,0.1))";
const TOKEN_TEXT_SECONDARY = "var(--text-secondary, rgba(226,232,240,0.9))"; // slate-200ish

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: [
    "text-white font-medium",
    "shadow-md shadow-black/20",
    "hover:shadow-lg hover:shadow-black/30",
    "disabled:opacity-60 disabled:shadow-none",
  ].join(" "),
  secondary: [
    "font-medium",
    "border",
    "disabled:opacity-60",
  ].join(" "),
  ghost: [
    "hover:bg-white/5",
    "disabled:opacity-50 disabled:bg-transparent",
  ].join(" "),
  danger: [
    "bg-red-600 hover:bg-red-500 active:bg-red-700",
    "text-white font-medium",
    "shadow-md shadow-red-900/20",
    "hover:shadow-lg hover:shadow-red-900/30",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none",
  ].join(" "),
  success: [
    "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700",
    "text-white font-medium",
    "shadow-md shadow-emerald-900/20",
    "hover:shadow-lg hover:shadow-emerald-900/30",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none",
  ].join(" "),
  glow: [
    "text-white font-medium",
    "shadow-md",
    "hover:shadow-glow-blue",
    "disabled:opacity-60 disabled:shadow-none",
  ].join(" "),
  "glow-amber": [
    "bg-amber-600 hover:bg-amber-500 active:bg-amber-700",
    "text-white font-medium",
    "shadow-md",
    "hover:shadow-glow-amber",
    "disabled:bg-slate-600 disabled:text-slate-400 disabled:shadow-none",
  ].join(" "),
};

const sizeClasses = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

// Variants that pull their surface color from inline tokens (so consumers
// without the Track D CSS vars still get a sensible default via var() fallback).
type TokenisedVariant = "primary" | "secondary" | "ghost" | "glow";

function getTokenisedStyle(variant: ButtonProps["variant"], gradient: boolean): React.CSSProperties {
  switch (variant as TokenisedVariant) {
    case "primary":
    case "glow":
      return gradient
        ? { backgroundImage: `linear-gradient(to right, ${TOKEN_ACCENT_WARM}, ${TOKEN_ACCENT_WARM_HOVER})` }
        : { backgroundColor: TOKEN_ACCENT_WARM };
    case "secondary":
      return {
        backgroundColor: TOKEN_SURFACE_TILE,
        borderColor: TOKEN_GLASS_BORDER,
        color: TOKEN_TEXT_SECONDARY,
      };
    case "ghost":
      return { color: TOKEN_TEXT_SECONDARY };
    default:
      return {};
  }
}

/**
 * Unified Button component.
 * - Track D consumers: primary/secondary/ghost/glow use accent-warm / surface-tile tokens.
 * - Legacy consumers (no CSS vars defined): same components render with blue-600/slate-800 fallbacks.
 * Other variants (danger/success/glow-amber) are unchanged for backward compatibility.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  gradient = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const tokenStyle = getTokenisedStyle(variant, gradient);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={tokenStyle}
      className={`
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black
        disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!loading && icon && iconPosition === "left" && (
        <span className="mr-2 w-4 h-4 flex items-center justify-center">{icon}</span>
      )}

      {children}

      {!loading && icon && iconPosition === "right" && (
        <span className="ml-2 w-4 h-4 flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
}
