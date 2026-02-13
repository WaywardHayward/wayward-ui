import { ReactNode } from "react";
interface TypographyProps {
    children: ReactNode;
    className?: string;
    color?: "default" | "muted" | "primary" | "success" | "warning" | "error";
}
/**
 * H1 heading component - Hero text
 */
export declare function H1({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * H2 heading component - Section headings
 */
export declare function H2({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * H3 heading component - Subsection headings
 */
export declare function H3({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * H4 heading component - Card/component titles
 */
export declare function H4({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * Body text component
 */
export declare function Text({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * Small text component
 */
export declare function Small({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * Lead text component (larger body text)
 */
export declare function Lead({ children, color, className, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
/**
 * Muted text component
 */
export declare function Muted({ children, className, }: Omit<TypographyProps, "color">): import("react/jsx-runtime").JSX.Element;
export {};
