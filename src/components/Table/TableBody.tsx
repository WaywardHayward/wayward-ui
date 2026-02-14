import { TableBodyProps } from "./types";

const variantClasses = {
  default:
    "bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700",
  glass: "divide-y divide-white/5",
  minimal: "divide-y divide-slate-200 dark:divide-slate-700",
};

/**
 * Table body (tbody) with row dividers
 */
export function TableBody({
  children,
  className = "",
  variant = "default",
}: TableBodyProps) {
  return (
    <tbody className={`${variantClasses[variant]} ${className}`}>
      {children}
    </tbody>
  );
}
