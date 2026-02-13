import type { Meta, StoryObj } from "@storybook/react";
import { InfoBadge } from "./InfoBadge";

const meta: Meta<typeof InfoBadge> = {
  title: "Components/InfoBadge",
  component: InfoBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right", "none"],
    },
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "glass"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoBadge>;

export const Default: Story = {
  args: {
    children: "Info Badge",
    position: "none",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "GPS Active",
    position: "none",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    children: "Connected",
    position: "none",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Low Battery",
    position: "none",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Offline",
    position: "none",
    variant: "danger",
  },
};

export const Glass: Story = {
  args: {
    children: "Glass Effect",
    position: "none",
    variant: "glass",
  },
};

export const PositionedOnOverlay: Story = {
  render: () => (
    <div className="relative w-64 h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg">
      <InfoBadge position="top-left" variant="default">EDINBURGH</InfoBadge>
      <InfoBadge position="top-right" variant="primary">LIVE</InfoBadge>
      <InfoBadge position="bottom-left" variant="success">12 pts</InfoBadge>
      <InfoBadge position="bottom-right" variant="glass">GPS</InfoBadge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <InfoBadge position="none" variant="default">Default</InfoBadge>
      <InfoBadge position="none" variant="primary">Primary</InfoBadge>
      <InfoBadge position="none" variant="success">Success</InfoBadge>
      <InfoBadge position="none" variant="warning">Warning</InfoBadge>
      <InfoBadge position="none" variant="danger">Danger</InfoBadge>
      <InfoBadge position="none" variant="glass">Glass</InfoBadge>
    </div>
  ),
};
