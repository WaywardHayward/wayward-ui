import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cockpit',
      values: [
        { name: 'cockpit', value: '#0a0f1a' },
        { name: 'gradient', value: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'success', 'glow', 'glow-amber'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    gradient: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const PrimaryGradient: Story = {
  args: {
    variant: 'primary',
    gradient: true,
    children: 'Gradient Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const DangerGradient: Story = {
  args: {
    variant: 'danger',
    gradient: true,
    children: 'Delete Flight',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Glow: Story = {
  args: {
    variant: 'glow',
    children: 'Glow CTA',
  },
  parameters: {
    docs: {
      description: {
        story: 'Glow variant for call-to-action buttons with hover glow effect.',
      },
    },
  },
};

export const GlowGradient: Story = {
  args: {
    variant: 'glow',
    gradient: true,
    children: 'Premium CTA',
  },
};

export const GlowAmber: Story = {
  args: {
    variant: 'glow-amber',
    children: 'Aviation Action',
  },
  parameters: {
    docs: {
      description: {
        story: 'Amber glow variant matching aviation cockpit accent colors.',
      },
    },
  },
};

export const GlowAmberGradient: Story = {
  args: {
    variant: 'glow-amber',
    gradient: true,
    children: 'Take Off',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'glow',
    gradient: true,
    children: 'Large Glow Button',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    variant: 'glow',
    gradient: true,
    children: 'Start Flight',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    variant: 'primary',
    children: 'Processing...',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'glow',
    gradient: true,
    children: 'Full Width CTA',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// Showcase all variants together
export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="primary" gradient>Primary Gradient</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="glow">Glow</Button>
        <Button variant="glow" gradient>Glow Gradient</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="glow-amber">Amber Glow</Button>
        <Button variant="glow-amber" gradient>Amber Gradient</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>
    </div>
  ),
};
