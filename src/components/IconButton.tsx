import { ReactNode } from "react";

export interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "active";
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: "p-1.5 [&>svg]:w-4 [&>svg]:h-4",
  md: "p-2 [&>svg]:w-5 [&>svg]:h-5",
  lg: "p-3 [&>svg]:w-6 [&>svg]:h-6",
};

const variantClasses = {
  default: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
  active: "text-blue-600 dark:text-blue-400",
};

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
      className={`transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon}
    </button>
  );
}
