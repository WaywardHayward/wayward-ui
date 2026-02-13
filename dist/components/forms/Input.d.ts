import { InputHTMLAttributes } from "react";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
/**
 * Input component with consistent styling and variants
 */
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
