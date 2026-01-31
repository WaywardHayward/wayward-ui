import { forwardRef, InputHTMLAttributes } from "react";

interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: "default" | "error";
}

const variantClasses = {
  default:
    "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error:
    "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500",
};

/**
 * DatePicker component with consistent styling
 * Uses native HTML5 date input for better browser support
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ variant = "default", className = "", disabled, ...props }, ref) => {
    const baseClasses = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `
      .replace(/\s+/g, " ")
      .trim();

    return (
      <input
        ref={ref}
        type="date"
        className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${className}
      `
          .replace(/\s+/g, " ")
          .trim()}
        disabled={disabled}
        {...props}
      />
    );
  }
);

DatePicker.displayName = "DatePicker";

interface DateTimePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: "default" | "error";
}

/**
 * DateTimePicker component for date and time selection
 */
export const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  ({ variant = "default", className = "", disabled, ...props }, ref) => {
    const baseClasses = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `
      .replace(/\s+/g, " ")
      .trim();

    return (
      <input
        ref={ref}
        type="datetime-local"
        className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${className}
      `
          .replace(/\s+/g, " ")
          .trim()}
        disabled={disabled}
        {...props}
      />
    );
  }
);

DateTimePicker.displayName = "DateTimePicker";
