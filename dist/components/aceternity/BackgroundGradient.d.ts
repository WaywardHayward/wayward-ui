export interface BackgroundGradientProps {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}
/**
 * Animated gradient background for cards
 * Creates a beautiful pulsing gradient effect around content
 */
export declare function BackgroundGradient({ children, className, containerClassName, animate, }: BackgroundGradientProps): import("react/jsx-runtime").JSX.Element;
