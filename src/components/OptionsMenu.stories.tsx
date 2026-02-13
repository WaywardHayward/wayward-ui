import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { OptionsMenu } from "./OptionsMenu";

const meta: Meta<typeof OptionsMenu> = {
  title: "Components/OptionsMenu",
  component: OptionsMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof OptionsMenu>;

const OptionsMenuWithState = (props: Partial<React.ComponentProps<typeof OptionsMenu>>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OptionsMenu
      items={[
        { label: "Edit", onClick: () => console.log("Edit clicked") },
        { label: "Duplicate", onClick: () => console.log("Duplicate clicked") },
        { label: "Delete", onClick: () => console.log("Delete clicked"), variant: "danger" },
      ]}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      {...props}
    />
  );
};

export const Default: Story = {
  render: () => <OptionsMenuWithState />,
};

export const WithManyItems: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <OptionsMenu
        items={[
          { label: "View details", onClick: () => {} },
          { label: "Edit", onClick: () => {} },
          { label: "Copy link", onClick: () => {} },
          { label: "Move to folder", onClick: () => {} },
          { label: "Archive", onClick: () => {} },
          { label: "Delete", onClick: () => {}, variant: "danger" },
        ]}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    );
  },
};
