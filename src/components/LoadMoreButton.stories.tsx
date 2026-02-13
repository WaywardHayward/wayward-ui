import type { Meta, StoryObj } from "@storybook/react";
import { LoadMoreButton } from "./LoadMoreButton";

const meta: Meta<typeof LoadMoreButton> = {
  title: "Components/LoadMoreButton",
  component: LoadMoreButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "gradient"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadMoreButton>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Load more clicked"),
    children: "Load More",
  },
};

export const Loading: Story = {
  args: {
    onClick: () => console.log("Load more clicked"),
    loading: true,
    children: "Load More",
  },
};

export const Ghost: Story = {
  args: {
    onClick: () => console.log("Load more clicked"),
    variant: "ghost",
    children: "Show More Results",
  },
};

export const Gradient: Story = {
  args: {
    onClick: () => console.log("Load more clicked"),
    variant: "gradient",
    children: "Load More Flights",
  },
};

export const CustomText: Story = {
  args: {
    onClick: () => console.log("Load more clicked"),
    children: "View 20 More Items",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <LoadMoreButton onClick={() => {}} variant="default">Default Variant</LoadMoreButton>
      <LoadMoreButton onClick={() => {}} variant="ghost">Ghost Variant</LoadMoreButton>
      <LoadMoreButton onClick={() => {}} variant="gradient">Gradient Variant</LoadMoreButton>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="bg-slate-800 rounded-xl p-4 text-slate-300">
        <div className="text-sm">Item 1</div>
      </div>
      <div className="bg-slate-800 rounded-xl p-4 text-slate-300">
        <div className="text-sm">Item 2</div>
      </div>
      <div className="bg-slate-800 rounded-xl p-4 text-slate-300">
        <div className="text-sm">Item 3</div>
      </div>
      <LoadMoreButton onClick={() => {}}>
        Load 10 More Items
      </LoadMoreButton>
    </div>
  ),
};
