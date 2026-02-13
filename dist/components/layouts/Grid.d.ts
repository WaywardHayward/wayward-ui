import React from "react";
interface GridProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: "none" | "sm" | "md" | "lg";
    responsive?: boolean;
    className?: string;
}
/**
 * Grid component for responsive layouts
 * Handles common grid patterns with responsive breakpoints
 */
export declare function Grid({ children, cols, gap, responsive, className, }: GridProps): import("react/jsx-runtime").JSX.Element;
export {};
