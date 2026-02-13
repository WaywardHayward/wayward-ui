import type { Meta, StoryObj } from "@storybook/react";
import { MetricDisplay } from "./MetricDisplay";

const meta: Meta<typeof MetricDisplay> = {
  title: "Components/MetricDisplay",
  component: MetricDisplay,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    valueColor: {
      control: "select",
      options: ["default", "success", "warning", "error", "accent"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricDisplay>;

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const Default: Story = {
  args: {
    label: "Total Hours",
    value: "156.5",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Flight Time",
    value: "2h 45m",
    icon: <ClockIcon />,
  },
};

export const Horizontal: Story = {
  args: {
    label: "Distance",
    value: "245",
    unit: "nm",
    direction: "horizontal",
  },
};

export const Small: Story = {
  args: {
    label: "Fuel Used",
    value: "18.5",
    unit: "gal",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Total Flights",
    value: "127",
    size: "lg",
  },
};

export const Success: Story = {
  args: {
    label: "Status",
    value: "Online",
    valueColor: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Battery",
    value: "23%",
    valueColor: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Connection",
    value: "Failed",
    valueColor: "error",
  },
};

export const Accent: Story = {
  args: {
    label: "Speed",
    value: "425",
    unit: "kts",
    valueColor: "accent",
    icon: <ClockIcon />,
  },
};

export const MetricsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-xl">
      <MetricDisplay label="Altitude" value="35,000" unit="ft" valueColor="accent" />
      <MetricDisplay label="Speed" value="485" unit="kts" />
      <MetricDisplay label="Heading" value="275°" />
      <MetricDisplay label="ETA" value="2h 15m" valueColor="success" />
    </div>
  ),
};
