import React from "react";
export interface ErrorBannerProps {
    /** Error message to display */
    error?: string | null;
    /** Error variant */
    variant?: 'error' | 'warning' | 'info';
    /** Dismissible banner */
    dismissible?: boolean;
    /** Callback when dismissed */
    onDismiss?: () => void;
    /** Additional class names */
    className?: string;
    /** Children to render instead of error string */
    children?: React.ReactNode;
}
export declare function ErrorBanner({ error, variant, dismissible, onDismiss, className, children, }: ErrorBannerProps): import("react/jsx-runtime").JSX.Element | null;
