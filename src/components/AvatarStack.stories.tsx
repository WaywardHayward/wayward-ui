import type { Meta, StoryObj } from "@storybook/react";
import { AvatarStack } from "./AvatarStack";

const meta: Meta<typeof AvatarStack> = {
  title: "Components/AvatarStack",
  component: AvatarStack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarStack>;

const sampleUsers = [
  { id: "1", name: "Alice Johnson", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: "2", name: "Bob Smith", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: "3", name: "Charlie Brown", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: "4", name: "Diana Ross" },
  { id: "5", name: "Edward Norton", avatar: "https://i.pravatar.cc/100?img=5" },
];

export const Default: Story = {
  args: {
    users: sampleUsers.slice(0, 3),
    maxVisible: 3,
  },
};

export const WithOverflow: Story = {
  args: {
    users: sampleUsers,
    maxVisible: 3,
  },
};

export const Small: Story = {
  args: {
    users: sampleUsers,
    maxVisible: 3,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    users: sampleUsers,
    maxVisible: 4,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    users: sampleUsers,
    maxVisible: 4,
    size: "lg",
  },
};

export const WithoutAvatars: Story = {
  args: {
    users: [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
      { id: "3", name: "Charlie" },
      { id: "4", name: "Diana" },
    ],
    maxVisible: 3,
    size: "md",
  },
};

export const SingleUser: Story = {
  args: {
    users: [{ id: "1", name: "Alice", avatar: "https://i.pravatar.cc/100?img=1" }],
  },
};
