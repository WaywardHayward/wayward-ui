import { ReactNode } from "react";
interface FormFieldProps {
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
interface FormSectionProps {
    children: ReactNode;
    title?: string;
    description?: string;
    className?: string;
}
/**
 * Form section component
 * Groups related form fields with optional title and description
 */
export declare function FormSection({ children, title, description, className, }: FormSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
