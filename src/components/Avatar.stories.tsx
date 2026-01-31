import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'AS',
    alt: 'Alex Smith',
  },
};

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    size: 'sm',
    alt: 'Small Avatar',
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'lg',
    alt: 'Large Avatar',
  },
};

export const Fallback: Story = {
  args: {
    initials: 'JD',
    size: 'md',
    alt: 'John Doe',
  },
};
