import { ReactNode } from "react";
export interface ErrorStateProps {
    title?: string;
    message: string;
    icon?: ReactNode;
    onRetry?: () => void;
    retryText?: string;
    className?: string;
}
/**
 * Error state with retry functionality.
 * Used when data loading fails.
 */
export declare function ErrorState({ title, message, icon, onRetry, retryText, className, }: ErrorStateProps): import("react/jsx-runtime").JSX.Element;
