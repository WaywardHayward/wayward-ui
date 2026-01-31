import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <option value="">Choose an option...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div>
      <label className="block text-sm font-medium mb-2">Country</label>
      <Select>
        <option value="">Select a country...</option>
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <option value="">Disabled select</option>
      <option value="1">Option 1</option>
    </Select>
  ),
};
