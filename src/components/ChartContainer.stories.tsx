import type { Meta, StoryObj } from "@storybook/react";
import { ChartContainer } from "./ChartContainer";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/ChartContainer",
  component: ChartContainer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "gradient"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const PlaceholderChart = () => (
  <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
    <div className="text-slate-400 dark:text-slate-500 text-sm">
      Chart visualization goes here
    </div>
  </div>
);

export const Default: Story = {
  args: {
    title: "Flight Hours",
    children: <PlaceholderChart />,
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Flight Hours",
    subtitle: "Total hours logged over the past 12 months",
    children: <PlaceholderChart />,
  },
};

export const Glass: Story = {
  args: {
    title: "Altitude Profile",
    subtitle: "Cockpit glass effect",
    variant: "glass",
    children: <PlaceholderChart />,
  },
  parameters: {
    backgrounds: {
      default: "gradient",
      values: [
        { name: "gradient", value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
      ],
    },
  },
};

export const Gradient: Story = {
  args: {
    title: "Speed Analysis",
    subtitle: "Gradient background variant",
    variant: "gradient",
    children: <PlaceholderChart />,
  },
};

export const CustomStyling: Story = {
  args: {
    title: "Custom Styled Chart",
    className: "border-2 border-cyan-500/30",
    variant: "glass",
    children: <PlaceholderChart />,
  },
};
