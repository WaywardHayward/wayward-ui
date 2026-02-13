import React, { ReactNode } from "react";
export interface InfoBadgeProps {
    children: ReactNode;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "none";
    variant?: "default" | "primary" | "success" | "warning" | "danger" | "glass";
    className?: string;
}
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
export declare const InfoBadge: React.FC<InfoBadgeProps>;
