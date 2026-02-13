export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: string;
    priority: 'low' | 'medium' | 'high';
    isRead: boolean;
    icon?: string;
}
export interface NotificationBellProps {
    /** List of notifications to display */
    notifications: Notification[];
    /** Number of unread notifications */
    unreadCount: number;
    /** Called when a notification is marked as read */
    onMarkAsRead: (id: string) => void;
    /** Called when all notifications are marked as read */
    onMarkAllAsRead: () => void;
    /** Called when a notification is dismissed */
    onDismiss: (id: string) => void;
    /** Called when "View all" is clicked */
    onViewAll?: () => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Notification bell with dropdown panel showing notifications.
 * Displays unread count badge when there are unread notifications.
 */
export declare function NotificationBell({ notifications, unreadCount, onMarkAsRead, onMarkAllAsRead, onDismiss, onViewAll, className, }: NotificationBellProps): import("react/jsx-runtime").JSX.Element;
