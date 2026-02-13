import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NotificationBell, Notification } from './NotificationBell';

const meta: Meta<typeof NotificationBell> = {
  title: 'Components/NotificationBell',
  component: NotificationBell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationBell>;

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New message',
    message: 'You have a new message from John',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 min ago
    priority: 'high',
    isRead: false,
    icon: '💬',
  },
  {
    id: '2',
    title: 'Task completed',
    message: 'Your export has finished processing',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    priority: 'medium',
    isRead: false,
    icon: '✅',
  },
  {
    id: '3',
    title: 'Welcome!',
    message: 'Thanks for joining our platform',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    priority: 'low',
    isRead: true,
    icon: '👋',
  },
];

// Interactive wrapper
const InteractiveNotificationBell = ({ initialNotifications = mockNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
  };
  
  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, isRead: true }))
    );
  };
  
  const handleDismiss = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  return (
    <NotificationBell
      notifications={notifications}
      unreadCount={unreadCount}
      onMarkAsRead={handleMarkAsRead}
      onMarkAllAsRead={handleMarkAllAsRead}
      onDismiss={handleDismiss}
      onViewAll={() => alert('View all clicked!')}
    />
  );
};

export const Default: Story = {
  render: () => <InteractiveNotificationBell />,
};

export const NoNotifications: Story = {
  args: {
    notifications: [],
    unreadCount: 0,
    onMarkAsRead: () => {},
    onMarkAllAsRead: () => {},
    onDismiss: () => {},
  },
};

export const AllRead: Story = {
  render: () => (
    <InteractiveNotificationBell
      initialNotifications={mockNotifications.map(n => ({ ...n, isRead: true }))}
    />
  ),
};

export const ManyUnread: Story = {
  render: () => (
    <InteractiveNotificationBell
      initialNotifications={[
        ...mockNotifications,
        {
          id: '4',
          title: 'Update available',
          message: 'A new version is ready to install',
          timestamp: new Date().toISOString(),
          priority: 'high',
          isRead: false,
          icon: '🔄',
        },
        {
          id: '5',
          title: 'Reminder',
          message: 'Meeting in 15 minutes',
          timestamp: new Date().toISOString(),
          priority: 'high',
          isRead: false,
          icon: '⏰',
        },
      ]}
    />
  ),
};

export const InNavbar: Story = {
  render: () => (
    <nav className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow min-w-[400px]">
      <span className="font-medium">My App</span>
      <div className="flex-1" />
      <InteractiveNotificationBell />
      <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full" />
    </nav>
  ),
};
