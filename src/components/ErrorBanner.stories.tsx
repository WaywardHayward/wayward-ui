import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBanner } from './ErrorBanner';

const meta: Meta<typeof ErrorBanner> = {
  title: 'Feedback/ErrorBanner',
  component: ErrorBanner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Alert banner for displaying errors, warnings, and info messages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onDismiss: { action: 'dismissed' },
    variant: {
      control: 'select',
      options: ['error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBanner>;

export const Default: Story = {
  args: {
    error: 'Something went wrong. Please try again later.',
  },
};

export const Error: Story = {
  args: {
    error: 'Failed to save your changes. Please check your connection and try again.',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    error: 'Your session will expire in 5 minutes. Save your work to avoid losing changes.',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    error: 'A new version is available. Refresh the page to get the latest features.',
    variant: 'info',
  },
};

export const Dismissible: Story = {
  args: {
    error: 'This banner can be dismissed by clicking the X button.',
    dismissible: true,
  },
};

export const WithChildren: Story = {
  args: {
    variant: 'error',
    children: (
      <div>
        <strong>Multiple errors occurred:</strong>
        <ul className="list-disc list-inside mt-1">
          <li>Email is required</li>
          <li>Password must be at least 8 characters</li>
          <li>Please accept the terms and conditions</li>
        </ul>
      </div>
    ),
  },
};

export const NoError: Story = {
  args: {
    error: undefined,
  },
};
