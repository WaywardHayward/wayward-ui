import { Notification } from './types';
interface NotificationItemProps {
    notification: Notification;
    onMarkAsRead: (id: string) => void;
    onDismiss: (id: string) => void;
}
/**
 * Single notification item in the NotificationBell dropdown
 */
export declare function NotificationItem({ notification, onMarkAsRead, onDismiss, }: NotificationItemProps): import("react/jsx-runtime").JSX.Element;
export {};
