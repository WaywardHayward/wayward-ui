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
