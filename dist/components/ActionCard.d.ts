import React from "react";
export interface ActionCardProps {
    icon: React.ReactNode;
    iconBg?: string;
    title: string;
    description: string;
    buttonText: string;
    buttonVariant?: "primary" | "secondary" | "gradient";
    onClick: () => void;
    className?: string;
    /** Enable glass-morphism style */
    glass?: boolean;
    /** Add glow effect on hover */
    glow?: boolean;
    /** Glow color */
    glowColor?: "blue" | "purple" | "amber" | "cyan";
}
/**
 * Action card for prominent calls-to-action.
 * Features icon, description, and action button with optional glow effects.
 *
 * @example
 * <ActionCard
 *   icon={<PlaneIcon />}
 *   iconBg="bg-blue-600"
 *   title="Log a Flight"
 *   description="Record your latest adventure"
 *   buttonText="Start Logging"
 *   onClick={() => navigate('/new-flight')}
 *   glow
 *   glowColor="blue"
 * />
 */
export declare const ActionCard: React.FC<ActionCardProps>;
