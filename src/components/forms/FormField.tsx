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
export function FormField({
  children,
  label,
  error,
  hint,
  required = false,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {children}

      {hint && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{hint}</p>
      )}

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

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
export function FormSection({
  children,
  title,
  description,
  className = "",
}: FormSectionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">{children}</div>
    </div>
  );
}
