import { ReactNode } from "react";
interface MetricDisplayProps {
    /** Label for the metric */
    label: string;
    /** Value to display */
    value: string | number;
    /** Optional icon */
    icon?: ReactNode;
    /** Layout direction */
    direction?: "vertical" | "horizontal";
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Additional CSS classes */
    className?: string;
    /** Value color variant */
    valueColor?: "default" | "success" | "warning" | "error" | "accent";
    /** Optional unit suffix */
    unit?: string;
}
/**
 * Display a single metric with label and value.
 * Useful for dashboards, stats, and data displays.
 */
export declare function MetricDisplay({ label, value, icon, direction, size, className, valueColor, unit, }: MetricDisplayProps): import("react/jsx-runtime").JSX.Element;
export default MetricDisplay;
