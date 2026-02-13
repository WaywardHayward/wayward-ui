import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Card: Story = {
  args: {
    variant: "card",
    count: 2,
  },
};

export const List: Story = {
  args: {
    variant: "list",
    count: 5,
  },
};

export const Profile: Story = {
  args: {
    variant: "profile",
    count: 1,
  },
};

export const SingleCard: Story = {
  args: {
    variant: "card",
    count: 1,
  },
};
