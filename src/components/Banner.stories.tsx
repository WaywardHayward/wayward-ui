import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import { Button } from "./Button";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error", "gradient"],
    },
    position: {
      control: "select",
      options: ["top", "bottom", "inline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    variant: "info",
    message: "A new version is available. Please refresh to update.",
    position: "inline",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "Your changes have been saved successfully!",
    position: "inline",
    onDismiss: () => console.log("Dismissed"),
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Your session will expire in 5 minutes.",
    position: "inline",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    message: "Failed to sync data. Please check your connection.",
    position: "inline",
    onDismiss: () => console.log("Dismissed"),
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    message: "✨ New features available! Check out the latest updates.",
    position: "inline",
    glow: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: "info",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    message: "New update available for your aircraft data.",
    position: "inline",
  },
};

export const WithActions: Story = {
  args: {
    variant: "gradient",
    message: "🚀 Upgrade to Pro for unlimited flights!",
    position: "inline",
    glow: true,
    actions: (
      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
        Upgrade Now
      </Button>
    ),
  },
};

export const WithDismiss: Story = {
  args: {
    variant: "success",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    message: "Flight log synced successfully!",
    position: "inline",
    onDismiss: () => console.log("Dismissed"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <Banner variant="info" message="Info banner message" position="inline" />
      <Banner variant="success" message="Success banner message" position="inline" />
      <Banner variant="warning" message="Warning banner message" position="inline" />
      <Banner variant="error" message="Error banner message" position="inline" />
      <Banner variant="gradient" message="Gradient banner with glow" position="inline" glow />
    </div>
  ),
};
