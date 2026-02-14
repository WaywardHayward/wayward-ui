import { Achievement } from '../types/Achievement';
export interface AchievementsPanelProps {
    /** List of achievements to display */
    achievements: Achievement[];
    /** Panel title */
    title?: string;
    /** Show the view all button */
    showViewAll?: boolean;
    /** Callback when view all is clicked */
    onViewAll?: () => void;
    /** Additional class names */
    className?: string;
}
export declare function AchievementsPanel({ achievements, title, showViewAll, onViewAll, className, }: AchievementsPanelProps): import("react/jsx-runtime").JSX.Element;
