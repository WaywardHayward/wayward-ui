import { ReactNode } from "react";

export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

/**
 * Empty state component for when there's no content to display.
 * Used in lists, feeds, search results, etc.
 */
export function EmptyState({
  icon,
  title,
  description,
  actions,
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 px-4 ${className}`}>
      {/* Icon in circle */}
      <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
        <span className="text-slate-400 [&>svg]:w-8 [&>svg]:h-8">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
          {description}
        </p>
      )}

      {/* Action buttons */}
      {actions && <div className="flex gap-3 justify-center">{actions}</div>}
    </div>
  );
}
