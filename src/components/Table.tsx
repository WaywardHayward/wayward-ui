import { ReactNode } from "react";

export interface TableProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant
   * - "default": Light mode friendly, subtle borders
   * - "glass": Dark premium glass effect
   * - "minimal": No background, just structure
   */
  variant?: "default" | "glass" | "minimal";
}

/**
 * Table wrapper component with consistent styling
 * 
 * Usage:
 * ```tsx
 * <Table variant="glass">
 *   <TableHeader>
 *     <TableRow>
 *       <TableHeaderCell>Name</TableHeaderCell>
 *       <TableHeaderCell>Value</TableHeaderCell>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Item</TableCell>
 *       <TableCell>100</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export function Table({ children, className = "", variant: _variant = "default" }: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">{children}</table>
    </div>
  );
}

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
}

/**
 * Table header (thead) with styled background
 */
export function TableHeader({
  children,
  className = "",
  variant = "default",
}: TableHeaderProps) {
  const variantClasses = {
    default: "bg-slate-50 dark:bg-slate-700",
    glass: "bg-slate-800/50 border-b border-white/10",
    minimal: "",
  };

  return (
    <thead className={`${variantClasses[variant]} ${className}`}>
      {children}
    </thead>
  );
}

export interface TableBodyProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
}

/**
 * Table body (tbody) with row dividers
 */
export function TableBody({
  children,
  className = "",
  variant = "default",
}: TableBodyProps) {
  const variantClasses = {
    default:
      "bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700",
    glass: "divide-y divide-white/5",
    minimal: "divide-y divide-slate-200 dark:divide-slate-700",
  };

  return (
    <tbody className={`${variantClasses[variant]} ${className}`}>
      {children}
    </tbody>
  );
}

export interface TableRowProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
  /**
   * Enable hover effect
   */
  hoverable?: boolean;
  /**
   * Click handler for interactive rows
   */
  onClick?: () => void;
}

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
  const hoverClasses = {
    default: hoverable ? "hover:bg-slate-50 dark:hover:bg-slate-700" : "",
    glass: hoverable ? "hover:bg-white/5 transition-colors duration-200" : "",
    minimal: hoverable ? "hover:bg-slate-50 dark:hover:bg-slate-800" : "",
  };

  return (
    <tr
      className={`${hoverClasses[variant]} ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
  /**
   * Prevent text wrapping
   */
  noWrap?: boolean;
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
}

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

  return (
    <td
      className={`px-6 py-4 ${noWrap ? "whitespace-nowrap" : ""} ${textClasses[variant]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </td>
  );
}

export interface TableHeaderCellProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
}

/**
 * Table header cell (th) with uppercase, tracking-wider styling
 */
export function TableHeaderCell({
  children,
  className = "",
  variant = "default",
  align = "left",
}: TableHeaderCellProps) {
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

  // Replace the text-left in base class with actual alignment
  const baseClass = variantClasses[variant].replace("text-left", alignClasses[align]);

  return <th className={`${baseClass} ${className}`}>{children}</th>;
}
