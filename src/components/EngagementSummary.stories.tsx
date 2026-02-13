import type { Meta, StoryObj } from '@storybook/react';
import { EngagementSummary } from './EngagementSummary';

const meta: Meta<typeof EngagementSummary> = {
  title: 'Data Display/EngagementSummary',
  component: EngagementSummary,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Social engagement summary showing reactions and comments, Strava-style.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-md bg-white dark:bg-slate-800 rounded-lg shadow">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EngagementSummary>;

const sampleUsers = [
  { name: 'Alice', avatar: 'https://i.pravatar.cc/100?u=alice' },
  { name: 'Bob', avatar: 'https://i.pravatar.cc/100?u=bob' },
  { name: 'Charlie', avatar: 'https://i.pravatar.cc/100?u=charlie' },
  { name: 'Diana' },
  { name: 'Eve' },
];

export const Default: Story = {
  args: {
    totalReactions: 15,
    totalComments: 3,
    reactionUsers: sampleUsers,
  },
};

export const UserReacted: Story = {
  args: {
    totalReactions: 8,
    totalComments: 2,
    userReacted: true,
    reactionUsers: sampleUsers.slice(0, 3),
  },
};

export const OnlyUserReacted: Story = {
  args: {
    totalReactions: 1,
    totalComments: 0,
    userReacted: true,
    reactionUsers: [{ name: 'You' }],
  },
};

export const OnlyReactions: Story = {
  args: {
    totalReactions: 42,
    totalComments: 0,
    reactionUsers: sampleUsers,
  },
};

export const OnlyComments: Story = {
  args: {
    totalReactions: 0,
    totalComments: 7,
  },
};

export const SingleComment: Story = {
  args: {
    totalReactions: 3,
    totalComments: 1,
    reactionUsers: sampleUsers.slice(0, 2),
  },
};

export const CustomLabels: Story = {
  args: {
    totalReactions: 12,
    totalComments: 4,
    reactionLabel: 'likes',
    commentLabel: 'reply',
    reactionUsers: sampleUsers.slice(0, 3),
  },
};

export const NoAvatars: Story = {
  args: {
    totalReactions: 5,
    totalComments: 2,
    reactionUsers: [
      { name: 'Alex' },
      { name: 'Sam' },
      { name: 'Jordan' },
    ],
  },
};

export const Empty: Story = {
  args: {
    totalReactions: 0,
    totalComments: 0,
  },
};
