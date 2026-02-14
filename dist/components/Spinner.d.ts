export interface SpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "primary" | "secondary" | "white";
    className?: string;
}
/**
 * Spinner component for loading states
 * Consistent loading indicators across the app
 */
export declare function Spinner({ size, variant, className, }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
