import { Notification, getPriorityColor, formatTime } from './types';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onDismiss: (id: string) => void;
}

/**
 * Single notification item in the NotificationBell dropdown
 */
export function NotificationItem({
  notification,
  onMarkAsRead,
  onDismiss,
}: NotificationItemProps) {
  const unreadClass = !notification.isRead
    ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500'
    : '';

  return (
    <div
      className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${unreadClass}`}
      onClick={() => onMarkAsRead(notification.id)}
    >
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm border ${getPriorityColor(notification.priority)}`}
        >
          {notification.icon || '📢'}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <p
              className={`text-sm font-medium text-slate-900 dark:text-white ${
                !notification.isRead ? 'font-semibold' : ''
              }`}
            >
              {notification.title}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDismiss(notification.id);
              }}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ml-2"
              title="Dismiss notification"
              aria-label="Dismiss notification"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {notification.message}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
            {formatTime(notification.timestamp)}
          </p>
        </div>
      </div>
    </div>
  );
}
