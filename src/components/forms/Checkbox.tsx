import { forwardRef, InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  variant?: "default" | "error";
}

const variantClasses = {
  default:
    "text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500",
  error: "text-red-600 border-red-300 dark:border-red-600 focus:ring-red-500",
};

/**
 * Checkbox component with consistent styling and optional label
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      variant = "default",
      className = "",
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId =
      id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const checkboxClasses = `
    h-4 w-4 rounded border
    bg-white dark:bg-gray-800
    focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50
    ${variantClasses[variant]}
    ${className}
  `
      .replace(/\s+/g, " ")
      .trim();

    if (label || description) {
      return (
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={checkboxClasses}
              disabled={disabled}
              {...props}
            />
          </div>

          {(label || description) && (
            <div className="ml-3 text-sm">
              {label && (
                <label
                  htmlFor={checkboxId}
                  className={`
                  font-medium text-gray-700 dark:text-gray-300
                  ${
                    disabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }
                `}
                >
                  {label}
                </label>
              )}
              {description && (
                <p className="text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type="checkbox"
        id={checkboxId}
        className={checkboxClasses}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
