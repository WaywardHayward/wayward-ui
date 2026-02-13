import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, DateTimePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    defaultValue: '2024-06-15',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '2024-06-15',
  },
};

export const DateTime: StoryObj<typeof DateTimePicker> = {
  render: (args) => <DateTimePicker {...args} />,
  args: {
    defaultValue: '2024-06-15T14:30',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div>
        <label className="block text-sm font-medium mb-1">Default</label>
        <DatePicker />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">With Value</label>
        <DatePicker defaultValue="2024-06-15" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Error</label>
        <DatePicker variant="error" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Disabled</label>
        <DatePicker disabled defaultValue="2024-06-15" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">DateTime</label>
        <DateTimePicker defaultValue="2024-06-15T14:30" />
      </div>
    </div>
  ),
};
