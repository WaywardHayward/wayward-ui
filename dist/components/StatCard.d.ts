import React from "react";
interface StatCardProps {
    /** The main numeric or text value */
    value: string | number;
    /** Label describing the stat */
    label: string;
    /** Optional icon displayed above the value */
    icon?: React.ReactNode;
    /** Color scheme for the gradient */
    color?: "blue" | "amber" | "green" | "red" | "white";
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Trend indicator - show a change direction */
    trend?: {
        direction: "up" | "down" | "neutral";
        value: string;
    };
    /** Optional unit suffix (e.g., "h", "km", "%") */
    unit?: string;
    /** Additional className */
    className?: string;
    /** Click handler for interactive stat cards */
    onClick?: () => void;
}
/**
 * StatCard - Premium metric display component
 *
 * Features:
 * - Large gradient numbers with cockpit aesthetic
 * - Optional trend indicators
 * - Multiple color schemes
 * - Responsive sizes
 *
 * Usage:
 * ```tsx
 * <StatCard value="3.4" unit="h" label="Flight Duration" color="blue" />
 * <StatCard value={14} label="Total Flights" trend={{ direction: "up", value: "+2" }} />
 * ```
 */
export declare function StatCard({ value, label, icon, color, size, trend, unit, className, onClick, }: StatCardProps): import("react/jsx-runtime").JSX.Element;
export {};
