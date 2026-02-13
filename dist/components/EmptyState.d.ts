import { ReactNode } from "react";
export interface EmptyStateProps {
    icon: ReactNode;
    title: string;
    description?: string;
    actions?: ReactNode;
    className?: string;
}
/**
 * Empty state component for when there's no content to display.
 * Used in lists, feeds, search results, etc.
 */
export declare function EmptyState({ icon, title, description, actions, className, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
