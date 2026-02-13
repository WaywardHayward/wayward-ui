import React, { ReactNode } from "react";

export interface BannerProps {
  variant?: "info" | "success" | "warning" | "error" | "gradient";
  icon?: ReactNode;
  message: ReactNode;
  actions?: ReactNode;
  onDismiss?: () => void;
  position?: "top" | "bottom" | "inline";
  className?: string;
  /** Enable gradient styling for extra pop */
  glow?: boolean;
}

const variantStyles = {
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-500/30",
  success: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-b border-emerald-500/30",
  warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-b border-amber-400/30",
  error: "bg-gradient-to-r from-red-600 to-red-700 text-white border-b border-red-500/30",
  gradient: "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-b border-purple-400/30",
};

const glowStyles = {
  info: "shadow-glow-blue",
  success: "shadow-lg shadow-emerald-500/20",
  warning: "shadow-glow-amber",
  error: "shadow-lg shadow-red-500/20",
  gradient: "shadow-lg shadow-purple-500/30",
};

const positionStyles = {
  top: "fixed top-0 left-0 right-0",
  bottom: "fixed bottom-0 left-0 right-0",
  inline: "relative",
};

/**
 * Dismissible banner component for notifications and updates.
 * Features gradient backgrounds and optional glow effects.
 * 
 * @example
 * <Banner
 *   variant="success"
 *   message="Your changes have been saved!"
 *   onDismiss={() => setShowBanner(false)}
 * />
 * 
 * @example
 * // Gradient banner with actions
 * <Banner
 *   variant="gradient"
 *   glow
 *   message="New features available!"
 *   actions={<Button size="sm">Learn More</Button>}
 * />
 */
export const Banner: React.FC<BannerProps> = ({
  variant = "info",
  icon,
  message,
  actions,
  onDismiss,
  position = "inline",
  className = "",
  glow = false,
}) => {
  return (
    <div
      className={`
        ${positionStyles[position]} 
        ${variantStyles[variant]} 
        ${glow ? glowStyles[variant] : ""} 
        px-4 py-3 z-50 backdrop-blur-sm
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto gap-3">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {icon && (
            <div className="flex-shrink-0 text-white/90">{icon}</div>
          )}
          <div className="flex-1 min-w-0 font-medium">{message}</div>
        </div>

        {(actions || onDismiss) && (
          <div className="flex items-center space-x-2 flex-shrink-0">
            {actions}
            {onDismiss && (
              <button
                onClick={onDismiss}
                className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 p-1.5 rounded-md"
                aria-label="Dismiss"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
