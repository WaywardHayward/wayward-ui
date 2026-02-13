import type { Meta, StoryObj } from "@storybook/react";
import { CommonHeader } from "./CommonHeader";

const meta: Meta<typeof CommonHeader> = {
  title: "Components/CommonHeader",
  component: CommonHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommonHeader>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    position: "static",
  },
};

export const WithUser: Story = {
  args: {
    title: "Dashboard",
    position: "static",
    user: {
      displayName: "Alex Hayward",
      email: "alex@example.com",
    },
  },
};

export const WithUserAvatar: Story = {
  args: {
    title: "Dashboard",
    position: "static",
    user: {
      displayName: "Alex Hayward",
      email: "alex@example.com",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
  },
};

export const WithAction: Story = {
  args: {
    title: "My Flights",
    subtitle: "Track and manage your flight history",
    position: "static",
    user: {
      displayName: "Captain Smith",
      email: "smith@airline.com",
    },
    action: {
      label: "New Flight",
      onClick: () => console.log("New flight clicked"),
    },
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Analytics",
    subtitle: "View your performance metrics and insights",
    position: "static",
    user: {
      displayName: "Jane Doe",
    },
  },
};

export const NoGreeting: Story = {
  args: {
    title: "Settings",
    position: "static",
    user: {
      displayName: "Admin User",
    },
    showGreeting: false,
  },
};

export const WithLeadingContent: Story = {
  args: {
    title: "Flight Details",
    position: "static",
    leading: (
      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
        <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    ),
    action: {
      label: "Edit",
      onClick: () => console.log("Edit clicked"),
    },
  },
};

export const Fixed: Story = {
  args: {
    title: "Fixed Header",
    subtitle: "This header is fixed to the top",
    position: "fixed",
    user: {
      displayName: "Test User",
    },
    action: {
      label: "Action",
      onClick: () => console.log("Action clicked"),
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
        <Story />
        <div className="pt-16 p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
                Content block {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  ],
};
