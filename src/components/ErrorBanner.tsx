import React from "react";

export interface ErrorBannerProps {
  /** Error message to display */
  error?: string | null;
  /** Error variant */
  variant?: 'error' | 'warning' | 'info';
  /** Dismissible banner */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Additional class names */
  className?: string;
  /** Children to render instead of error string */
  children?: React.ReactNode;
}

const variantStyles = {
  error: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    text: 'text-red-700 dark:text-red-300',
    icon: '❌',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    text: 'text-yellow-700 dark:text-yellow-300',
    icon: '⚠️',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'ℹ️',
  },
};

export function ErrorBanner({
  error,
  variant = 'error',
  dismissible = false,
  onDismiss,
  className = "",
  children,
}: ErrorBannerProps) {
  if (!error && !children) return null;

  const styles = variantStyles[variant];

  return (
    <div
      className={`${styles.bg} border ${styles.border} ${styles.text} px-4 py-3 rounded flex items-start gap-3 ${className}`}
      role="alert"
    >
      <span className="flex-shrink-0">{styles.icon}</span>
      <div className="flex-1">
        {children || error}
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
}
