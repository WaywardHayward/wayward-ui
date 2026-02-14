import { TableRowProps } from "./types";

const hoverClasses = {
  default: "hover:bg-slate-50 dark:hover:bg-slate-700",
  glass: "hover:bg-white/5 transition-colors duration-200",
  minimal: "hover:bg-slate-50 dark:hover:bg-slate-800",
};

/**
 * Table row (tr) with hover states
 */
export function TableRow({
  children,
  className = "",
  variant = "default",
  hoverable = true,
  onClick,
}: TableRowProps) {
  const hoverClass = hoverable ? hoverClasses[variant] : "";

  return (
    <tr
      className={`${hoverClass} ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}
