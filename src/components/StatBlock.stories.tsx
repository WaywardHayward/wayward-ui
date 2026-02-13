import type { Meta, StoryObj } from "@storybook/react";
import { StatBlock } from "./StatBlock";

const meta: Meta<typeof StatBlock> = {
  title: "Components/StatBlock",
  component: StatBlock,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "glass", "gradient", "outline"],
    },
    iconColor: {
      control: "select",
      options: ["cyan", "purple", "emerald", "amber", "rose"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatBlock>;

const PlaneIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ClockIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const Default: Story = {
  args: {
    label: "Total Flights",
    value: "127",
    icon: <PlaneIcon />,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Average Speed",
    value: "425 kts",
  },
};

export const Small: Story = {
  args: {
    label: "Hours Today",
    value: "3.5",
    icon: <ClockIcon />,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Total Distance",
    value: "45,230 nm",
    icon: <ChartIcon />,
    size: "lg",
  },
};

export const GlassVariant: Story = {
  args: {
    label: "Active Sessions",
    value: "12",
    icon: <PlaneIcon />,
    variant: "glass",
    iconColor: "purple",
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export const GradientVariant: Story = {
  args: {
    label: "Completion Rate",
    value: "98.5%",
    icon: <ChartIcon />,
    variant: "gradient",
    iconColor: "emerald",
  },
};

export const OutlineVariant: Story = {
  args: {
    label: "Pending",
    value: "5",
    icon: <ClockIcon />,
    variant: "outline",
    iconColor: "amber",
  },
};

export const StatsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatBlock label="Flights" value="127" icon={<PlaneIcon />} iconColor="cyan" />
      <StatBlock label="Hours" value="342.5" icon={<ClockIcon />} iconColor="purple" />
      <StatBlock label="Distance" value="45.2k nm" icon={<ChartIcon />} iconColor="emerald" />
      <StatBlock label="Rating" value="4.9" icon={<PlaneIcon />} iconColor="amber" />
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <StatBlock label="Cyan" value="100" icon={<PlaneIcon />} iconColor="cyan" />
      <StatBlock label="Purple" value="200" icon={<PlaneIcon />} iconColor="purple" />
      <StatBlock label="Emerald" value="300" icon={<PlaneIcon />} iconColor="emerald" />
      <StatBlock label="Amber" value="400" icon={<PlaneIcon />} iconColor="amber" />
      <StatBlock label="Rose" value="500" icon={<PlaneIcon />} iconColor="rose" />
    </div>
  ),
};
