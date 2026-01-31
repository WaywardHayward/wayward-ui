import { forwardRef, SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  options: SelectOption[];
  placeholder?: string;
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
 * Select component with consistent styling and variants
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = "md",
      variant = "default",
      options,
      placeholder,
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
    focus:outline-none focus:ring-1
    disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900
    disabled:text-gray-500 dark:disabled:text-gray-400
    appearance-none
    bg-no-repeat bg-right
    pr-10
  `
      .replace(/\s+/g, " ")
      .trim();

    return (
      <div className="relative">
        <select
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
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
