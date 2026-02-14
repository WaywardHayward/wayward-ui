import { TableHeaderProps } from "./types";

const variantClasses = {
  default: "bg-slate-50 dark:bg-slate-700",
  glass: "bg-slate-800/50 border-b border-white/10",
  minimal: "",
};

/**
 * Table header (thead) with styled background
 */
export function TableHeader({
  children,
  className = "",
  variant = "default",
}: TableHeaderProps) {
  return (
    <thead className={`${variantClasses[variant]} ${className}`}>
      {children}
    </thead>
  );
}
