import { TableCellProps } from "./types";

const textClasses = {
  default: "text-sm text-slate-800 dark:text-white",
  glass: "text-sm text-slate-200",
  minimal: "text-sm text-slate-800 dark:text-white",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

/**
 * Table cell (td) with consistent padding and text styling
 */
export function TableCell({
  children,
  className = "",
  variant = "default",
  noWrap = true,
  align = "left",
}: TableCellProps) {
  return (
    <td
      className={`px-6 py-4 ${noWrap ? "whitespace-nowrap" : ""} ${textClasses[variant]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </td>
  );
}
