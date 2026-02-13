import { InputHTMLAttributes } from "react";
interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    variant?: "default" | "error";
}
/**
 * DatePicker component with consistent styling
 * Uses native HTML5 date input for better browser support
 */
export declare const DatePicker: import("react").ForwardRefExoticComponent<DatePickerProps & import("react").RefAttributes<HTMLInputElement>>;
interface DateTimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    variant?: "default" | "error";
}
/**
 * DateTimePicker component for date and time selection
 */
export declare const DateTimePicker: import("react").ForwardRefExoticComponent<DateTimePickerProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
