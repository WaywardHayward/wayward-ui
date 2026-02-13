import type { Meta, StoryObj } from '@storybook/react';
import { ActivityFeed, FeedItem } from './ActivityFeed';
import { Card } from './Card';

const meta: Meta<typeof ActivityFeed> = {
  title: 'Layout/ActivityFeed',
  component: ActivityFeed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Activity feed container with empty state and load more functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onEmptyAction: { action: 'empty action clicked' },
    onLoadMore: { action: 'load more clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ActivityFeed>;

const sampleItems: FeedItem[] = [
  {
    id: '1',
    content: (
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            ✈️
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">Flight logged: Edinburgh → London</p>
            <p className="text-sm text-slate-500">2 hours ago</p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    id: '2',
    content: (
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            🏆
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">Achievement unlocked: Sky Navigator</p>
            <p className="text-sm text-slate-500">Yesterday</p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    id: '3',
    content: (
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
            💬
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">John commented on your flight</p>
            <p className="text-sm text-slate-500">2 days ago</p>
          </div>
        </div>
      </Card>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    showLoadMore: true,
    loadMoreText: 'Load More Activity',
  },
};

export const Empty: Story = {
  args: {
    items: [],
    emptyTitle: 'No flights to show',
    emptyDescription: 'Share your first flight with the community',
    emptyActionText: 'Share Your Flight',
    emptyIcon: <span className="text-2xl">✈️</span>,
  },
};

export const WithHeader: Story = {
  args: {
    items: sampleItems.slice(0, 2),
    header: (
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
        <h2 className="text-xl font-bold">Your Week in the Sky</h2>
        <p className="text-blue-100">3 flights • 2,450 miles • 5h 30m airborne</p>
      </div>
    ),
  },
};

export const NoLoadMore: Story = {
  args: {
    items: sampleItems.slice(0, 1),
    showLoadMore: false,
  },
};
