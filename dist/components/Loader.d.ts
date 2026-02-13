export interface LoaderProps {
    /** Loading message to display */
    message?: string;
    /** Size variant of the loader */
    size?: 'sm' | 'md' | 'lg';
    /** Theme variant */
    variant?: 'default' | 'aviation' | 'minimal';
    /** Whether to show as fullscreen overlay */
    fullscreen?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Whether to show the loading dots animation */
    showDots?: boolean;
}
/**
 * A versatile loading indicator with multiple size and style variants.
 * Can be shown inline or as a fullscreen overlay.
 */
export declare function Loader({ message, size, variant, fullscreen, className, showDots, }: LoaderProps): import("react/jsx-runtime").JSX.Element;
/** Fullscreen loading overlay */
export declare const FullScreenLoader: (props: Omit<LoaderProps, "fullscreen">) => import("react/jsx-runtime").JSX.Element;
/** Aviation-themed loader (dark with sky-blue accents) */
export declare const AviationLoader: (props: Omit<LoaderProps, "variant">) => import("react/jsx-runtime").JSX.Element;
/** Minimal gray-scale loader */
export declare const MinimalLoader: (props: Omit<LoaderProps, "variant">) => import("react/jsx-runtime").JSX.Element;
/** Small inline loader */
export declare const SmallLoader: (props: Omit<LoaderProps, "size">) => import("react/jsx-runtime").JSX.Element;
