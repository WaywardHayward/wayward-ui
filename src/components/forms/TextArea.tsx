import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "error";
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const variantClasses = {
  default:
    "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error:
    "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500",
};

const resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

/**
 * TextArea component with consistent styling and variants
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = "default",
      resize = "vertical",
      className = "",
      rows = 3,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
    block w-full rounded-md border px-3 py-2
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    text-sm
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `
      .replace(/\s+/g, " ")
      .trim();

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${resizeClasses[resize]}
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

TextArea.displayName = "TextArea";
