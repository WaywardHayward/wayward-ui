import React from "react";
interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "danger" | "info" | "achievement";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    className?: string;
}
/**
 * Badge component for status indicators and achievements.
 * - default + info use Track D tokens (with sensible fallbacks).
 * - success/warning/danger keep their semantic palettes (meaning, not decoration).
 */
export declare function Badge({ children, variant, size, icon, className, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
