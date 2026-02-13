import React from "react";
interface FlexProps {
    children: React.ReactNode;
    direction?: "row" | "col" | "row-reverse" | "col-reverse";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    wrap?: boolean;
    gap?: "none" | "sm" | "md" | "lg";
    className?: string;
}
/**
 * Flex component for flexible layouts
 * Provides consistent flexbox utilities with sensible defaults
 */
export declare function Flex({ children, direction, justify, align, wrap, gap, className, }: FlexProps): import("react/jsx-runtime").JSX.Element;
export {};
