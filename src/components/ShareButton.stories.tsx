import type { Meta, StoryObj } from '@storybook/react';
import { ShareButton, ShareActions } from './ShareButton';

const meta: Meta<typeof ShareButton> = {
  title: 'Components/ShareButton',
  component: ShareButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'cockpit', 'minimal'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShareButton>;

export const Default: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
  },
};

export const IconOnly: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
    showLabel: false,
  },
};

export const CustomLabel: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
    label: 'Share this',
  },
};

export const GlassVariant: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
    variant: 'glass',
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const CockpitVariant: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
    variant: 'cockpit',
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export const MinimalVariant: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
    variant: 'minimal',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ShareButton size="sm" onShare={() => {}} />
      <ShareButton size="md" onShare={() => {}} />
      <ShareButton size="lg" onShare={() => {}} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
        <ShareButton variant="default" onShare={() => {}} />
        <ShareButton variant="minimal" onShare={() => {}} />
      </div>
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
        <ShareButton variant="glass" onShare={() => {}} />
      </div>
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg">
        <ShareButton variant="cockpit" onShare={() => {}} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    onShare: () => {},
    disabled: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    onShare: () => alert('Share clicked!'),
    icon: <span className="text-lg">📤</span>,
  },
};

export const ShareActionsDemo: StoryObj<typeof ShareActions> = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        ShareActions integrates with the Web Share API and falls back to clipboard.
      </p>
      <ShareActions
        url="https://example.com/share"
        title="Check this out!"
        text="I found something interesting"
        onSuccess={() => alert('Shared successfully!')}
        onFallback={() => alert('URL copied to clipboard!')}
      />
    </div>
  ),
};

export const InActionBar: Story = {
  render: () => (
    <div className="flex items-center justify-around p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg max-w-md">
      <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="text-xs">Like</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-xs">Comment</span>
      </button>
      <ShareButton 
        variant="minimal" 
        showLabel={true}
        label="Share"
        onShare={() => alert('Share!')} 
        className="flex-col"
      />
    </div>
  ),
};
