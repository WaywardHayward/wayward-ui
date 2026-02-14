import { ReactNode } from "react";
export interface TypographyProps {
    children: ReactNode;
    className?: string;
    color?: "default" | "muted" | "primary" | "success" | "warning" | "error";
}
export declare const colorClasses: {
    default: string;
    muted: string;
    primary: string;
    success: string;
    warning: string;
    error: string;
};
