export interface MovingBorderProps {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderClassName?: string;
    as?: React.ElementType;
}
/**
 * Moving gradient border animation
 * Creates an animated border that flows around the element
 */
export declare function MovingBorder({ children, duration, className, containerClassName, borderClassName, as: Component, }: MovingBorderProps): import("react/jsx-runtime").JSX.Element;
