import React from "react";
interface SectionProps {
    children: React.ReactNode;
    variant?: "default" | "card" | "hero" | "sidebar";
    spacing?: "none" | "sm" | "md" | "lg" | "xl";
    className?: string;
}
/**
 * Section component for consistent content areas
 * Provides standard spacing and background variants
 */
export declare function Section({ children, variant, spacing, className, }: SectionProps): import("react/jsx-runtime").JSX.Element;
export {};
