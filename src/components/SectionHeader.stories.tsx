import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";

const meta: Meta<typeof SectionHeader> = {
  title: "Components/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: "Recent Activity",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Team Members",
    subtitle: "Manage your team and their permissions",
  },
};

export const WithAction: Story = {
  args: {
    title: "Projects",
    subtitle: "Your active projects",
    action: <Button size="sm">New Project</Button>,
  },
};

export const Small: Story = {
  args: {
    title: "Details",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    title: "Dashboard",
    subtitle: "Welcome back!",
    size: "lg",
  },
};
