export interface LoadingProps {
    message?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}
/**
 * Loading component with spinner and optional message
 */
export declare function Loading({ message, size, className, }: LoadingProps): import("react/jsx-runtime").JSX.Element;
