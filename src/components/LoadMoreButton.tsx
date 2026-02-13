import { ReactNode } from "react";

export interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  /** Button variant */
  variant?: "default" | "ghost" | "gradient";
}

const variantClasses = {
  default: [
    "bg-slate-800 hover:bg-slate-700",
    "border border-slate-700 hover:border-slate-600",
    "text-slate-300 hover:text-white",
    "shadow-md hover:shadow-lg",
  ].join(" "),
  ghost: [
    "bg-transparent hover:bg-slate-800/50",
    "border border-slate-700/50 hover:border-slate-600",
    "text-slate-400 hover:text-white",
  ].join(" "),
  gradient: [
    "bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600",
    "border border-slate-600/50 hover:border-slate-500/50",
    "text-white",
    "shadow-md hover:shadow-lg",
  ].join(" "),
};

/**
 * Consistent load more button for paginated lists.
 * Features cockpit-style dark mode friendly design.
 * 
 * @example
 * <LoadMoreButton
 *   onClick={loadMore}
 *   loading={isLoading}
 * >
 *   Load More Flights
 * </LoadMoreButton>
 */
export function LoadMoreButton({
  onClick,
  loading = false,
  children = "Load More",
  className = "",
  variant = "default",
}: LoadMoreButtonProps) {
  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={onClick}
        disabled={loading}
        className={`
          px-6 py-3 
          rounded-xl
          transition-all duration-200 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
          font-medium
          ${variantClasses[variant]}
        `.trim().replace(/\s+/g, ' ')}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4" 
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    </div>
  );
}
