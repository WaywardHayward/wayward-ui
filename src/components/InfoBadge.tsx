import React, { ReactNode } from "react";

export interface InfoBadgeProps {
  children: ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "none";
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "glass";
  className?: string;
}

const positionStyles = {
  "top-left": "absolute top-2 left-2 z-20",
  "top-right": "absolute top-2 right-2 z-20",
  "bottom-left": "absolute bottom-2 left-2 z-20",
  "bottom-right": "absolute bottom-2 right-2 z-20",
  "none": "",
};

const variantStyles = {
  default: "bg-slate-900/80 backdrop-blur-sm text-white border border-white/10",
  primary: "bg-blue-600/90 backdrop-blur-sm text-white border border-blue-400/30 shadow-glow-blue-sm",
  success: "bg-emerald-600/90 backdrop-blur-sm text-white border border-emerald-400/30",
  warning: "bg-amber-600/90 backdrop-blur-sm text-white border border-amber-400/30",
  danger: "bg-red-600/90 backdrop-blur-sm text-white border border-red-400/30",
  glass: "bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-lg",
};

/**
 * A compact info badge for overlays and labels.
 * Displays with semi-transparent cockpit-style background.
 * 
 * @example
 * // Positioned badge on a map
 * <div className="relative">
 *   <img src="map.png" />
 *   <InfoBadge position="top-left" variant="primary">GPS Active</InfoBadge>
 * </div>
 * 
 * @example
 * // Inline badge
 * <InfoBadge position="none" variant="success">Online</InfoBadge>
 */
export const InfoBadge: React.FC<InfoBadgeProps> = ({
  children,
  position = "top-left",
  variant = "default",
  className = "",
}) => {
  return (
    <div className={`${positionStyles[position]} ${className}`}>
      <div
        className={`${variantStyles[variant]} px-2.5 py-1 rounded-md text-xs font-medium shadow-lg transition-all duration-200`}
      >
        {children}
      </div>
    </div>
  );
};
