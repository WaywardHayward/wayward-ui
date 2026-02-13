import React, { ReactNode } from "react";
export interface SettingCardProps {
    title: string;
    description?: string;
    accentColor?: "blue" | "green" | "purple" | "orange" | "red" | "cyan" | "pink" | "amber";
    children: ReactNode;
    className?: string;
    /** Enable glass-morphism style */
    glass?: boolean;
    /** Add subtle glow effect */
    glow?: boolean;
}
/**
 * Consistent setting card component with left accent border.
 * Features dark mode friendly styling with optional glass effect.
 *
 * @example
 * <SettingCard
 *   title="Display Settings"
 *   description="Customize how your data is displayed"
 *   accentColor="cyan"
 * >
 *   <Toggle label="Dark Mode" />
 * </SettingCard>
 */
export declare const SettingCard: React.FC<SettingCardProps>;
