import type { Meta, StoryObj } from "@storybook/react";
import { ErrorState } from "./ErrorState";

const meta: Meta<typeof ErrorState> = {
  title: "Components/ErrorState",
  component: ErrorState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {
    message: "We couldn't load the data. Please check your connection and try again.",
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: "Connection Failed",
    message: "Unable to connect to the server. Please check your internet connection.",
  },
};

export const WithRetry: Story = {
  args: {
    title: "Failed to Load",
    message: "Something went wrong while loading your data.",
    onRetry: () => console.log("Retry clicked"),
    retryText: "Reload",
  },
};

export const NetworkError: Story = {
  args: {
    title: "Network Error",
    message: "You appear to be offline. Please check your connection and try again.",
    onRetry: () => console.log("Retry clicked"),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
  },
};

export const PermissionError: Story = {
  args: {
    title: "Access Denied",
    message: "You don't have permission to view this content. Contact your administrator for access.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
};
