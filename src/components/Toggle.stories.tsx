import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Primitives/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Interactive wrapper component for stories
const ToggleWrapper = (props: Partial<React.ComponentProps<typeof Toggle>>) => {
  const [checked, setChecked] = useState(props.checked || false);
  return <Toggle {...props} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
  render: () => <ToggleWrapper />,
};

export const WithLabel: Story = {
  render: () => (
    <ToggleWrapper
      label="Enable notifications"
      description="Receive email notifications for new activity"
    />
  ),
};

export const Checked: Story = {
  render: () => (
    <ToggleWrapper
      checked={true}
      label="Auto-approve followers"
      description="Automatically approve new follow requests"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleWrapper
      disabled={true}
      label="Beta features"
      description="This setting is currently unavailable"
    />
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <ToggleWrapper
      checked={true}
      disabled={true}
      label="Terms accepted"
      description="You have agreed to the terms of service"
    />
  ),
};
