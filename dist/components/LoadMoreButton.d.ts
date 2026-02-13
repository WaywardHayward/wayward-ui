import { ReactNode } from "react";
export interface LoadMoreButtonProps {
    onClick: () => void;
    loading?: boolean;
    children?: ReactNode;
    className?: string;
    /** Button variant */
    variant?: "default" | "ghost" | "gradient";
}
/**
 * Consistent load more button for paginated lists.
 * Features cockpit-style dark mode friendly design.
 *
 * @example
 * <LoadMoreButton
 *   onClick={loadMore}
 *   loading={isLoading}
 * >
 *   Load More Flights
 * </LoadMoreButton>
 */
export declare function LoadMoreButton({ onClick, loading, children, className, variant, }: LoadMoreButtonProps): import("react/jsx-runtime").JSX.Element;
