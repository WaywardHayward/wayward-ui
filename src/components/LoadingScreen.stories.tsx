import type { Meta, StoryObj } from '@storybook/react';
import { LoadingScreen } from './LoadingScreen';

const meta: Meta<typeof LoadingScreen> = {
  title: 'Feedback/LoadingScreen',
  component: LoadingScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'aviation', 'minimal', 'pulse'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
  args: {
    brandName: 'Loading',
  },
};

export const BrandedLoading: Story = {
  args: {
    brandName: 'ELECTRA',
    variant: 'aviation',
  },
};

export const MinimalVariant: Story = {
  args: {
    brandName: 'Please wait',
    variant: 'minimal',
    size: 'md',
  },
};

export const NoDots: Story = {
  args: {
    brandName: 'Initializing',
    showDots: false,
  },
};

export const SmallSize: Story = {
  args: {
    brandName: 'Loading',
    size: 'sm',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 h-screen">
      <div className="border-r border-b border-slate-300 dark:border-slate-700 relative">
        <LoadingScreen brandName="Default" variant="default" size="sm" />
      </div>
      <div className="border-b border-slate-300 dark:border-slate-700 relative">
        <LoadingScreen brandName="Aviation" variant="aviation" size="sm" />
      </div>
      <div className="border-r border-slate-300 dark:border-slate-700 relative">
        <LoadingScreen brandName="Minimal" variant="minimal" size="sm" />
      </div>
      <div className="relative">
        <LoadingScreen brandName="Pulse" variant="pulse" size="sm" />
      </div>
    </div>
  ),
};
