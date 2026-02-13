import { SelectHTMLAttributes } from "react";
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    options: SelectOption[];
    placeholder?: string;
}
/**
 * Select component with consistent styling and variants
 */
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
