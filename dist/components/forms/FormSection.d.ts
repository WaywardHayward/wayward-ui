import { ReactNode } from "react";
export interface FormSectionProps {
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
