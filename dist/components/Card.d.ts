import { ReactNode } from "react";
interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: "none" | "sm" | "md" | "lg";
    variant?: "default" | "outlined" | "elevated" | "interactive" | "glass" | "gradient" | "cockpit";
    header?: ReactNode;
    footer?: ReactNode;
    onClick?: () => void;
    /** Add a subtle glow effect - 'blue' | 'amber' | 'none' */
    glow?: "blue" | "amber" | "none";
}
export declare function Card({ children, className, padding, variant, header, footer, onClick, glow, }: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
