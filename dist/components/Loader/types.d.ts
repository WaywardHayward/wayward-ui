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
export declare const sizeClasses: {
    sm: {
        spinner: string;
        container: string;
        text: string;
    };
    md: {
        spinner: string;
        container: string;
        text: string;
    };
    lg: {
        spinner: string;
        container: string;
        text: string;
    };
};
export declare const variantClasses: {
    default: {
        spinner: string;
        text: string;
        background: string;
    };
    aviation: {
        spinner: string;
        text: string;
        background: string;
    };
    minimal: {
        spinner: string;
        text: string;
        background: string;
    };
};
