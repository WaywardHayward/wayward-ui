import { ReactNode } from "react";
export interface FormFieldProps {
    children: ReactNode;
    label?: string;
    error?: string;
    hint?: string;
    required?: boolean;
    className?: string;
}
/**
 * Form field wrapper component
 * Provides consistent layout for form inputs with labels, hints, and errors
 */
export declare function FormField({ children, label, error, hint, required, className, }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
