import { TableHeaderCellProps } from "./types";

const variantClasses = {
  default:
    "px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider",
  glass:
    "px-6 py-4 text-left text-xs font-semibold text-cyan-400 uppercase tracking-wider",
  minimal:
    "px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

/**
 * Table header cell (th) with uppercase, tracking-wider styling
 */
export function TableHeaderCell({
  children,
  className = "",
  variant = "default",
  align = "left",
}: TableHeaderCellProps) {
  // Replace the text-left in base class with actual alignment
  const baseClass = variantClasses[variant].replace("text-left", alignClasses[align]);

  return <th className={`${baseClass} ${className}`}>{children}</th>;
}
