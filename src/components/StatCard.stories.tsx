import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cockpit',
      values: [
        { name: 'cockpit', value: '#0a0f1a' },
        { name: 'gradient', value: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'amber', 'green', 'red', 'white'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const PlaneIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ClockIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const RouteIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

export const Default: Story = {
  args: {
    value: '3.4',
    unit: 'h',
    label: 'Flight Duration',
    color: 'blue',
  },
};

export const WithIcon: Story = {
  args: {
    value: '14',
    label: 'Total Flights',
    color: 'blue',
    icon: PlaneIcon,
  },
};

export const WithTrendUp: Story = {
  args: {
    value: '2,847',
    unit: 'nm',
    label: 'Distance Flown',
    color: 'amber',
    icon: RouteIcon,
    trend: {
      direction: 'up',
      value: '+12%',
    },
  },
};

export const WithTrendDown: Story = {
  args: {
    value: '0.8',
    unit: 'h',
    label: 'Avg Flight Time',
    color: 'red',
    trend: {
      direction: 'down',
      value: '-15%',
    },
  },
};

export const SmallSize: Story = {
  args: {
    value: '42',
    label: 'Airports',
    color: 'green',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    value: '847',
    label: 'Flight Hours',
    color: 'amber',
    size: 'lg',
    icon: ClockIcon,
  },
};

export const AmberColor: Story = {
  args: {
    value: '32',
    unit: '°',
    label: 'Temperature',
    color: 'amber',
  },
};

export const GreenColor: Story = {
  args: {
    value: '98',
    unit: '%',
    label: 'Fuel Efficiency',
    color: 'green',
    trend: {
      direction: 'up',
      value: '+3%',
    },
  },
};

export const WhiteColor: Story = {
  args: {
    value: 'FL350',
    label: 'Altitude',
    color: 'white',
  },
};

export const Interactive: Story = {
  args: {
    value: '6',
    label: 'Active Routes',
    color: 'blue',
    onClick: () => alert('View routes'),
  },
};

// Dashboard showcase
export const Dashboard: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{ width: '500px' }}>
      <StatCard
        value="3.4"
        unit="h"
        label="Duration"
        color="blue"
        icon={ClockIcon}
      />
      <StatCard
        value="14"
        label="Flights"
        color="amber"
        icon={PlaneIcon}
        trend={{ direction: 'up', value: '+2' }}
      />
      <StatCard
        value="2,847"
        unit="nm"
        label="Distance"
        color="green"
        icon={RouteIcon}
      />
      <StatCard
        value="FL350"
        label="Max Altitude"
        color="white"
      />
    </div>
  ),
};

// Cockpit instrument panel
export const CockpitPanel: StoryObj = {
  render: () => (
    <div className="p-6 rounded-xl bg-gradient-to-b from-slate-800/80 to-slate-900/95 border border-slate-700/50" style={{ width: '600px' }}>
      <h2 className="text-lg font-bold text-white mb-4">Flight Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <StatCard value="847" unit="h" label="Total Hours" color="amber" size="sm" />
        <StatCard value="142" label="Flights" color="blue" size="sm" trend={{ direction: 'up', value: '+8' }} />
        <StatCard value="23" label="Airports" color="green" size="sm" />
      </div>
    </div>
  ),
};
