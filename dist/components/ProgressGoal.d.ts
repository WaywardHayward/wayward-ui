export interface ProgressGoalData {
    title: string;
    progress: number;
    target: string;
}
export interface ProgressGoalProps {
    goal: ProgressGoalData;
    /** Visual variant */
    variant?: 'default' | 'glass' | 'cockpit';
    /** Color theme for the progress bar */
    color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'cyan';
    /** Show glow effect when approaching completion */
    showGlow?: boolean;
    /** Additional CSS classes */
    className?: string;
}
/**
 * ProgressGoal - A progress indicator for goals and achievements
 *
 * Displays a goal title, progress bar, and completion percentage.
 * Supports glass morphism and cockpit styling variants.
 */
export declare function ProgressGoal({ goal, variant, color, showGlow, className }: ProgressGoalProps): import("react/jsx-runtime").JSX.Element;
