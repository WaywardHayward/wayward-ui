import React from 'react';
import { Button } from './Button';
import { FeedItem } from '../types/FeedItem';

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

export function ActivityFeed({
  items = [],
  emptyIcon,
  emptyTitle = "No items to show",
  emptyDescription = "Be the first to add something to the feed",
  emptyActionText = "Add Item",
  onEmptyAction,
  showLoadMore = false,
  loadMoreText = "Load More",
  onLoadMore,
  header,
  className = "",
  renderItem,
}: ActivityFeedProps) {
  return (
    <div className={`max-w-4xl mx-auto p-4 lg:pt-16 pb-20 lg:pb-6 ${className}`}>
      {/* Header */}
      {header}

      {/* Feed Items */}
      <div className="space-y-6">
        {items.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
              {emptyIcon || (
                <svg
                  className="w-8 h-8 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              )}
            </div>
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">
              {emptyTitle}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              {emptyDescription}
            </p>
            {onEmptyAction && (
              <button 
                onClick={onEmptyAction}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {emptyActionText}
              </button>
            )}
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id}>
              {renderItem ? renderItem(item) : item.content}
            </div>
          ))
        )}
      </div>

      {/* Load More */}
      {items.length > 0 && showLoadMore && (
        <div className="mt-8 text-center">
          <Button variant="secondary" onClick={onLoadMore}>
            {loadMoreText}
          </Button>
        </div>
      )}
    </div>
  );
}
