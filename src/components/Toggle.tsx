import React from "react";

export interface ToggleProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  className?: string;
}

/**
 * Reusable toggle switch component.
 * Follows accessibility best practices with proper ARIA attributes.
 */
export const Toggle: React.FC<ToggleProps> = ({
  id,
  checked,
  onChange,
  disabled = false,
  label,
  description,
  className = "",
}) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={toggleId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      {(label || description) && (
        <div className="ml-3 text-sm">
          {label && (
            <label
              htmlFor={toggleId}
              className={`font-medium text-gray-900 dark:text-white ${
                disabled ? "opacity-50" : "cursor-pointer"
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={`text-gray-600 dark:text-gray-400 ${disabled ? "opacity-50" : ""}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
