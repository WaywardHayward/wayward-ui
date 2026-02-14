import { ReactNode } from "react";
import { DefaultErrorIcon } from "./DefaultErrorIcon";

export interface ErrorStateProps {
  title?: string;
  message: string;
  icon?: ReactNode;
  onRetry?: () => void;
  retryText?: string;
  className?: string;
}

/**
 * Error state with retry functionality.
 * Used when data loading fails.
 */
export function ErrorState({
  title = "Something went wrong",
  message,
  icon,
  onRetry,
  retryText = "Try Again",
  className = "",
}: ErrorStateProps) {
  return (
    <div className={`text-center py-12 px-4 ${className}`}>
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
        <span className="text-red-500 dark:text-red-400">
          {icon || <DefaultErrorIcon />}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium text-red-600 dark:text-red-400 mb-2">
        {title}
      </h3>

      {/* Message */}
      <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
        {message}
      </p>

      {/* Retry button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          {retryText}
        </button>
      )}
    </div>
  );
}
