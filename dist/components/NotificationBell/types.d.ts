export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: string;
    priority: 'low' | 'medium' | 'high';
    isRead: boolean;
    icon?: string;
}
export declare const getPriorityColor: (priority: string) => string;
export declare const formatTime: (timestamp: string) => string;
