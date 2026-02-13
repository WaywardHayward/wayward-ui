import type { Meta, StoryObj } from "@storybook/react";
import { ActionCard } from "./ActionCard";

const meta: Meta<typeof ActionCard> = {
  title: "Components/ActionCard",
  component: ActionCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    buttonVariant: {
      control: "select",
      options: ["primary", "secondary", "gradient"],
    },
    glowColor: {
      control: "select",
      options: ["blue", "purple", "amber", "cyan"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionCard>;

const PlaneIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <PlaneIcon />,
    iconBg: "bg-blue-600",
    title: "Log a Flight",
    description: "Record your latest adventure in the skies",
    buttonText: "Start Logging",
    onClick: () => console.log("Clicked"),
  },
};

export const WithGlow: Story = {
  args: {
    icon: <PlaneIcon />,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    title: "Log a Flight",
    description: "Record your latest adventure in the skies",
    buttonText: "Start Logging",
    onClick: () => console.log("Clicked"),
    glow: true,
    glowColor: "blue",
  },
};

export const GradientButton: Story = {
  args: {
    icon: <UploadIcon />,
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    title: "Import Data",
    description: "Sync your flight data from external sources",
    buttonText: "Import Now",
    buttonVariant: "gradient",
    onClick: () => console.log("Clicked"),
    glow: true,
    glowColor: "purple",
  },
};

export const Glass: Story = {
  args: {
    icon: <ChartIcon />,
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    title: "View Analytics",
    description: "Detailed insights into your flying patterns",
    buttonText: "Open Dashboard",
    onClick: () => console.log("Clicked"),
    glass: true,
    glow: true,
    glowColor: "cyan",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <ActionCard
        icon={<PlaneIcon />}
        iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
        title="Log Flight"
        description="Quick manual entry"
        buttonText="Start"
        onClick={() => {}}
        glow
        glowColor="blue"
      />
      <ActionCard
        icon={<UploadIcon />}
        iconBg="bg-gradient-to-br from-amber-500 to-orange-500"
        title="Import"
        description="From external sources"
        buttonText="Upload"
        onClick={() => {}}
        glow
        glowColor="amber"
      />
      <ActionCard
        icon={<ChartIcon />}
        iconBg="bg-gradient-to-br from-purple-500 to-pink-500"
        title="Analytics"
        description="View your stats"
        buttonText="View"
        buttonVariant="gradient"
        onClick={() => {}}
        glow
        glowColor="purple"
      />
    </div>
  ),
};
