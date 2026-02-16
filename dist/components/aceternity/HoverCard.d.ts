export interface HoverCardProps {
    items: {
        title: string;
        description: string;
        link?: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}
export interface HoverCardItemProps {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    idx: number;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
}
/**
 * Animated hover card grid
 * Cards light up with a beautiful border effect on hover
 */
export declare function HoverCard({ items, className }: HoverCardProps): import("react/jsx-runtime").JSX.Element;
