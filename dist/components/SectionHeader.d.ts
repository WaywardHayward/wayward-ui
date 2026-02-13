import { ReactNode } from "react";
export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    action?: ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
}
/**
 * Section header with optional subtitle and action button.
 * Used throughout apps for consistent page/section headers.
 */
export declare function SectionHeader({ title, subtitle, action, size, className, }: SectionHeaderProps): import("react/jsx-runtime").JSX.Element;
