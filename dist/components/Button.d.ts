import React from "react";
interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "danger" | "success" | "glow" | "glow-amber";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
    className?: string;
    /** Use gradient background for primary-style buttons */
    gradient?: boolean;
}
/**
 * Unified Button component with aviation cockpit styling
 * Includes gradient and glow variants for premium CTAs
 */
export declare function Button({ children, variant, size, type, onClick, disabled, loading, icon, iconPosition, fullWidth, className, gradient, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
