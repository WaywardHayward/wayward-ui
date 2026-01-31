import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-gray-600">This is some card content.</p>
      </div>
    ),
  },
};

export const WithMultipleElements: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-xl font-bold mb-3">Featured Card</h2>
        <p className="text-gray-600 mb-4">
          Cards are flexible containers that can hold any content.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Action
        </button>
      </div>
    ),
  },
};

export const GlassMorphism: Story = {
  args: {
    variant: 'glass',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Glass Card</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Beautiful frosted glass effect with backdrop blur.
        </p>
      </div>
    ),
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
};
