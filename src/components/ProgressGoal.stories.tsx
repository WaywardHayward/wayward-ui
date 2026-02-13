import type { Meta, StoryObj } from '@storybook/react';
import { ProgressGoal } from './ProgressGoal';

const meta: Meta<typeof ProgressGoal> = {
  title: 'Components/ProgressGoal',
  component: ProgressGoal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'cockpit'],
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'amber', 'red', 'purple', 'cyan'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressGoal>;

export const Default: Story = {
  args: {
    goal: {
      title: 'Complete Training',
      progress: 65,
      target: '100 hours',
    },
  },
};

export const AlmostComplete: Story = {
  args: {
    goal: {
      title: 'Flight Hours',
      progress: 92,
      target: '250 hours',
    },
    color: 'green',
    showGlow: true,
  },
};

export const Complete: Story = {
  args: {
    goal: {
      title: 'Certification Goals',
      progress: 100,
      target: 'All requirements',
    },
    color: 'green',
  },
};

export const GlassVariant: Story = {
  args: {
    goal: {
      title: 'Night Flying Hours',
      progress: 45,
      target: '10 hours',
    },
    variant: 'glass',
    color: 'purple',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const CockpitVariant: Story = {
  args: {
    goal: {
      title: 'Cross-Country Distance',
      progress: 78,
      target: '500 nm',
    },
    variant: 'cockpit',
    color: 'cyan',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {(['blue', 'green', 'amber', 'red', 'purple', 'cyan'] as const).map((color) => (
        <ProgressGoal
          key={color}
          goal={{
            title: `${color.charAt(0).toUpperCase() + color.slice(1)} Goal`,
            progress: 75,
            target: '100 units',
          }}
          color={color}
        />
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg">
      <ProgressGoal
        goal={{ title: 'Default Variant', progress: 60, target: '100%' }}
        variant="default"
      />
      <ProgressGoal
        goal={{ title: 'Glass Variant', progress: 75, target: '100%' }}
        variant="glass"
        color="purple"
      />
      <ProgressGoal
        goal={{ title: 'Cockpit Variant', progress: 85, target: '100%' }}
        variant="cockpit"
        color="cyan"
      />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MultipleGoals: Story = {
  render: () => (
    <div className="space-y-3 max-w-md p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg">
      <h3 className="text-white font-semibold mb-4">Training Progress</h3>
      <ProgressGoal
        goal={{ title: 'Solo Flight Hours', progress: 100, target: '10 hours' }}
        variant="cockpit"
        color="green"
      />
      <ProgressGoal
        goal={{ title: 'Cross-Country', progress: 85, target: '50 nm' }}
        variant="cockpit"
        color="cyan"
      />
      <ProgressGoal
        goal={{ title: 'Night Training', progress: 40, target: '3 hours' }}
        variant="cockpit"
        color="amber"
      />
      <ProgressGoal
        goal={{ title: 'Instrument Approaches', progress: 15, target: '6 approaches' }}
        variant="cockpit"
        color="red"
      />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
