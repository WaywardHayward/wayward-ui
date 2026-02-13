import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a sample text that demonstrates the TextArea component with some content.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'This field has an error',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled',
  },
};

export const NoResize: Story = {
  args: {
    resize: 'none',
    placeholder: 'This textarea cannot be resized',
  },
};

export const LargeRows: Story = {
  args: {
    rows: 8,
    placeholder: 'Large textarea with 8 rows',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Default</label>
        <TextArea placeholder="Default textarea" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Error</label>
        <TextArea variant="error" placeholder="Error state" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Disabled</label>
        <TextArea disabled defaultValue="Disabled textarea" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">No Resize</label>
        <TextArea resize="none" placeholder="Cannot resize" />
      </div>
    </div>
  ),
};
