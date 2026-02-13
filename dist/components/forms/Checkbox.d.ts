import { InputHTMLAttributes } from "react";
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    description?: string;
    variant?: "default" | "error";
}
/**
 * Checkbox component with consistent styling and optional label
 */
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
