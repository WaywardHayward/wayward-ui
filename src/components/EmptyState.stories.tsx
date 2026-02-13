import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "./Button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

const DocumentIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const InboxIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <DocumentIcon />,
    title: "No documents yet",
    description: "Get started by creating your first document.",
  },
};

export const WithAction: Story = {
  args: {
    icon: <DocumentIcon />,
    title: "No projects",
    description: "Create a project to get started organizing your work.",
    actions: <Button>Create Project</Button>,
  },
};

export const WithMultipleActions: Story = {
  args: {
    icon: <InboxIcon />,
    title: "Inbox is empty",
    description: "All caught up! You have no new messages.",
    actions: (
      <>
        <Button variant="outline">View Archive</Button>
        <Button>Compose</Button>
      </>
    ),
  },
};

export const SearchNoResults: Story = {
  args: {
    icon: <SearchIcon />,
    title: "No results found",
    description: "Try adjusting your search terms or filters to find what you're looking for.",
  },
};

export const Minimal: Story = {
  args: {
    icon: <InboxIcon />,
    title: "Nothing here",
  },
};
