import React from "react";
interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "danger" | "info" | "achievement";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    className?: string;
}
/**
 * Badge component for status indicators and achievements
 * Used for flight badges, achievement indicators, status labels
 */
export declare function Badge({ children, variant, size, icon, className, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
