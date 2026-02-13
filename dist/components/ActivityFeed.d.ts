import React from 'react';
export interface FeedItem {
    id: string;
    content: React.ReactNode;
}
export interface ActivityFeedProps {
    /** Feed items to display */
    items?: FeedItem[];
    /** Empty state icon (emoji or React node) */
    emptyIcon?: React.ReactNode;
    /** Empty state title */
    emptyTitle?: string;
    /** Empty state description */
    emptyDescription?: string;
    /** Empty state action text */
    emptyActionText?: string;
    /** Callback when empty action is clicked */
    onEmptyAction?: () => void;
    /** Show load more button */
    showLoadMore?: boolean;
    /** Load more button text */
    loadMoreText?: string;
    /** Callback when load more is clicked */
    onLoadMore?: () => void;
    /** Header content */
    header?: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Render function for items */
    renderItem?: (item: FeedItem) => React.ReactNode;
}
export declare function ActivityFeed({ items, emptyIcon, emptyTitle, emptyDescription, emptyActionText, onEmptyAction, showLoadMore, loadMoreText, onLoadMore, header, className, renderItem, }: ActivityFeedProps): import("react/jsx-runtime").JSX.Element;
