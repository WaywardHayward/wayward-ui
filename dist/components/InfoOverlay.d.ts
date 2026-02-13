import React from "react";
import { InfoBadgeProps } from "./InfoBadge";
export interface InfoOverlayProps {
    /** Top-left badge content */
    topLeft?: React.ReactNode;
    /** Top-right badge content */
    topRight?: React.ReactNode;
    /** Bottom-left badge content */
    bottomLeft?: React.ReactNode;
    /** Bottom-right badge content */
    bottomRight?: React.ReactNode;
    /** Variant for top-left badge */
    topLeftVariant?: InfoBadgeProps["variant"];
    /** Variant for top-right badge */
    topRightVariant?: InfoBadgeProps["variant"];
    /** Variant for bottom-left badge */
    bottomLeftVariant?: InfoBadgeProps["variant"];
    /** Variant for bottom-right badge */
    bottomRightVariant?: InfoBadgeProps["variant"];
    /** When false, adds a non-interactive overlay */
    interactive?: boolean;
    className?: string;
}
/**
 * Information overlay for maps, images, and media.
 * Displays up to 4 corner badges with customizable variants.
 *
 * @example
 * // Flight map overlay
 * <div className="relative">
 *   <MapComponent />
 *   <InfoOverlay
 *     topLeft="EDINBURGH"
 *     topRight="LIVE"
 *     topRightVariant="primary"
 *     bottomLeft="GPS Track (42 pts)"
 *     bottomLeftVariant="success"
 *   />
 * </div>
 *
 * @example
 * // Non-interactive preview
 * <InfoOverlay interactive={false} topRight="PREVIEW" />
 */
export declare const InfoOverlay: React.FC<InfoOverlayProps>;
