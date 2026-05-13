import { ReactNode, CSSProperties } from "react";

export interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "active";
  className?: string;
  disabled?: boolean;
}

const TOKEN_ACCENT_WARM = "var(--accent-warm, #2563eb)";
const TOKEN_TEXT_META = "var(--text-meta, rgba(148,163,184,1))"; // slate-400 fallback

const sizeClasses = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6",
};

type IconButtonVariant = NonNullable<IconButtonProps["variant"]>;

function getVariantStyle(variant: IconButtonVariant): CSSProperties {
  return variant === "active"
    ? { color: TOKEN_ACCENT_WARM }
    : { color: TOKEN_TEXT_META };
}

export function IconButton({
  icon,
  onClick,
  label,
  size = "md",
  variant = "default",
  className = "",
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={getVariantStyle(variant)}
      className={`transition-colors rounded-lg hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
    >
      {icon}
    </button>
  );
}
