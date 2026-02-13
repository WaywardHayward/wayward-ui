import type { Meta, StoryObj } from '@storybook/react';
import { Loader, FullScreenLoader, AviationLoader, MinimalLoader, SmallLoader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Feedback/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    message: 'Loading...',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    message: 'Loading...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    message: 'Loading your data...',
  },
};

export const NoMessage: Story = {
  args: {
    message: undefined,
  },
};

export const NoDots: Story = {
  args: {
    message: 'Loading...',
    showDots: false,
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    message: 'Please wait...',
  },
};

export const Aviation: Story = {
  args: {
    variant: 'aviation',
    message: 'Preparing flight data...',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AviationLarge: Story = {
  args: {
    variant: 'aviation',
    size: 'lg',
    message: 'Initializing systems...',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InCard: Story = {
  render: () => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 min-w-[300px]">
      <h3 className="text-lg font-medium mb-4 text-center text-slate-900 dark:text-white">
        Loading Content
      </h3>
      <Loader message="Fetching data..." size="sm" />
    </div>
  ),
};

export const SmallInline: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <SmallLoader message="" showDots={false} className="p-0" />
      <span className="text-slate-600 dark:text-slate-400">Processing...</span>
    </div>
  ),
};

// Note: FullScreen story would cover the entire viewport
export const FullScreenPreview: Story = {
  render: () => (
    <div className="relative w-64 h-48 border border-slate-300 dark:border-slate-600 rounded overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-slate-900 flex items-center justify-center">
        <Loader message="Loading app..." size="sm" />
      </div>
    </div>
  ),
};
