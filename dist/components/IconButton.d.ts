import { ReactNode } from "react";
export interface IconButtonProps {
    icon: ReactNode;
    onClick?: () => void;
    label: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "active";
    className?: string;
    disabled?: boolean;
}
export declare function IconButton({ icon, onClick, label, size, variant, className, disabled, }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
