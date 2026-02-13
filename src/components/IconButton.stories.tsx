import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Primitives/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Sample icons for stories
const HeartIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <HeartIcon />,
    label: "Like",
    onClick: () => console.log("Clicked!"),
  },
};

export const Small: Story = {
  args: {
    icon: <HeartIcon />,
    label: "Like",
    size: "sm",
    onClick: () => console.log("Clicked!"),
  },
};

export const Large: Story = {
  args: {
    icon: <SettingsIcon />,
    label: "Settings",
    size: "lg",
    onClick: () => console.log("Clicked!"),
  },
};

export const Active: Story = {
  args: {
    icon: <HeartIcon />,
    label: "Like",
    variant: "active",
    onClick: () => console.log("Clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    icon: <HeartIcon />,
    label: "Like",
    disabled: true,
    onClick: () => console.log("Clicked!"),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={<HeartIcon />} label="Small" size="sm" />
      <IconButton icon={<HeartIcon />} label="Medium" size="md" />
      <IconButton icon={<HeartIcon />} label="Large" size="lg" />
    </div>
  ),
};
