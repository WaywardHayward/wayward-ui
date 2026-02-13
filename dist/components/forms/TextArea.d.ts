import { TextareaHTMLAttributes } from "react";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: "default" | "error";
    resize?: "none" | "vertical" | "horizontal" | "both";
}
/**
 * TextArea component with consistent styling and variants
 */
export declare const TextArea: import("react").ForwardRefExoticComponent<TextAreaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
