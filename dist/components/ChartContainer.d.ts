import React from "react";
interface ChartContainerProps {
    /** Title displayed at the top of the chart container */
    title: string;
    /** Chart content to display */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Optional subtitle or description */
    subtitle?: string;
    /** Variant styling */
    variant?: "default" | "glass" | "gradient";
}
/**
 * Container component for charts with consistent styling.
 * Provides a styled wrapper with title for chart visualizations.
 */
export declare function ChartContainer({ title, children, className, subtitle, variant, }: ChartContainerProps): import("react/jsx-runtime").JSX.Element;
export default ChartContainer;
