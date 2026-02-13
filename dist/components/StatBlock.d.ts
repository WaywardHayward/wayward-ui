import { ReactNode } from "react";
interface StatBlockProps {
    /** Label for the statistic */
    label: string;
    /** Value to display */
    value: string | number;
    /** Optional icon */
    icon?: ReactNode;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Additional CSS classes */
    className?: string;
    /** Card variant */
    variant?: "default" | "glass" | "gradient" | "outline";
    /** Icon color accent */
    iconColor?: "cyan" | "purple" | "emerald" | "amber" | "rose";
}
/**
 * Stats block for displaying metrics with optional icon.
 * Used in stats grids, dashboard cards, profile stats, etc.
 */
export declare function StatBlock({ label, value, icon, size, className, variant, iconColor, }: StatBlockProps): import("react/jsx-runtime").JSX.Element;
export default StatBlock;
