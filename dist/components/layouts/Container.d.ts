import React from "react";
interface ContainerProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    padding?: "none" | "sm" | "md" | "lg";
    className?: string;
}
/**
 * Container component for consistent page layouts
 * Replaces repeated container patterns throughout the app
 */
export declare function Container({ children, size, padding, className, }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
