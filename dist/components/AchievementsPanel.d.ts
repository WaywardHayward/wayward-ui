export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    progress: number;
    total: number;
    completed?: boolean;
    rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}
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
