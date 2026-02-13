import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>
);

const meta: Meta<typeof ActionButton> = {
  title: 'Actions/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Social action button with icon, optional count, and active state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    activeColor: {
      control: 'select',
      options: ['red', 'blue', 'green', 'yellow', 'purple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    icon: <HeartIcon />,
    label: 'Like',
    count: 42,
  },
};

export const Active: Story = {
  args: {
    icon: <HeartIcon />,
    label: 'Like',
    count: 43,
    active: true,
    activeColor: 'red',
  },
};

export const NoCount: Story = {
  args: {
    icon: <ShareIcon />,
    label: 'Share',
  },
};

export const ActionBar: Story = {
  render: () => (
    <div className="flex items-center justify-around w-full max-w-md p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
      <ActionButton icon={<HeartIcon />} label="Like" count={42} active onClick={() => {}} activeColor="red" />
      <ActionButton icon={<CommentIcon />} label="Comment" count={8} onClick={() => {}} />
      <ActionButton icon={<ShareIcon />} label="Share" onClick={() => {}} />
      <ActionButton icon={<BookmarkIcon />} label="Bookmark" active onClick={() => {}} activeColor="yellow" />
    </div>
  ),
};

export const BlueActive: Story = {
  args: {
    icon: <CommentIcon />,
    label: 'Comment',
    count: 12,
    active: true,
    activeColor: 'blue',
  },
};

export const GreenActive: Story = {
  args: {
    icon: <ShareIcon />,
    label: 'Shared',
    active: true,
    activeColor: 'green',
  },
};
