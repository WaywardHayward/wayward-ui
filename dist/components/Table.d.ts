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
export declare function Table({ children, className, variant: _variant }: TableProps): import("react/jsx-runtime").JSX.Element;
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
export declare function TableHeader({ children, className, variant, }: TableHeaderProps): import("react/jsx-runtime").JSX.Element;
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
export declare function TableBody({ children, className, variant, }: TableBodyProps): import("react/jsx-runtime").JSX.Element;
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
export declare function TableRow({ children, className, variant, hoverable, onClick, }: TableRowProps): import("react/jsx-runtime").JSX.Element;
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
export declare function TableCell({ children, className, variant, noWrap, align, }: TableCellProps): import("react/jsx-runtime").JSX.Element;
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
export declare function TableHeaderCell({ children, className, variant, align, }: TableHeaderCellProps): import("react/jsx-runtime").JSX.Element;
