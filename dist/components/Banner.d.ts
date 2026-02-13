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
export declare const Banner: React.FC<BannerProps>;
