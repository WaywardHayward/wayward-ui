import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

const variantClasses = {
  default:
    "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500",
  error:
    "border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500",
};

/**
 * Input component with consistent styling and variants
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      variant = "default",
      startIcon,
      endIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
    block w-full rounded-md border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
  `
      .replace(/\s+/g, " ")
      .trim();

    if (startIcon || endIcon) {
      return (
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="h-5 w-5 text-gray-400">{startIcon}</div>
            </div>
          )}

          <input
            ref={ref}
            className={`
            ${baseClasses}
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${startIcon ? "pl-10" : ""}
            ${endIcon ? "pr-10" : ""}
            ${className}
          `
              .replace(/\s+/g, " ")
              .trim()}
            disabled={disabled}
            {...props}
          />

          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className="h-5 w-5 text-gray-400">{endIcon}</div>
            </div>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={`
        ${baseClasses}
        ${sizeClasses[size]}
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

Input.displayName = "Input";
