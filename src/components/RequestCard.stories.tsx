import type { Meta, StoryObj } from "@storybook/react";
import { RequestCard } from "./RequestCard";

const meta: Meta<typeof RequestCard> = {
  title: "Components/RequestCard",
  component: RequestCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass"],
    },
    status: {
      control: "select",
      options: ["pending", "approved", "rejected", "expired"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RequestCard>;

export const Pending: Story = {
  args: {
    id: "1",
    userName: "John Smith",
    userEmail: "john.smith@example.com",
    message: "Hey! I'd love to follow your activities.",
    requestedAt: new Date("2024-08-20T10:30:00"),
    status: "pending",
    actions: [
      {
        label: "Approve",
        onClick: () => console.log("Approved"),
        variant: "approve",
      },
      {
        label: "Reject",
        onClick: () => console.log("Rejected"),
        variant: "reject",
      },
    ],
  },
};

export const Processing: Story = {
  args: {
    id: "2",
    userName: "Sarah Wilson",
    userEmail: "sarah.wilson@example.com",
    requestedAt: new Date("2024-08-19T14:20:00"),
    status: "pending",
    processing: true,
    actions: [
      {
        label: "Approve",
        onClick: () => console.log("Approved"),
        variant: "approve",
      },
      {
        label: "Reject",
        onClick: () => console.log("Rejected"),
        variant: "reject",
      },
    ],
  },
};

export const Approved: Story = {
  args: {
    id: "3",
    userName: "Mike Johnson",
    userEmail: "mike.johnson@example.com",
    message: "Looking forward to connecting!",
    requestedAt: new Date("2024-08-18T09:15:00"),
    respondedAt: new Date("2024-08-18T10:30:00"),
    status: "approved",
  },
};

export const Rejected: Story = {
  args: {
    id: "4",
    userName: "Emily Davis",
    userEmail: "emily.davis@example.com",
    requestedAt: new Date("2024-08-17T16:45:00"),
    respondedAt: new Date("2024-08-17T18:00:00"),
    status: "rejected",
  },
};

export const WithCancelAction: Story = {
  args: {
    id: "5",
    userName: "Alex Thompson",
    userEmail: "alex.thompson@example.com",
    message: "I'd like to connect with you!",
    requestedAt: new Date("2024-08-20T08:00:00"),
    expiresAt: new Date("2024-08-27T08:00:00"),
    status: "pending",
    actions: [
      {
        label: "Cancel Request",
        onClick: () => console.log("Cancelled"),
        variant: "cancel",
      },
    ],
  },
};

export const Expired: Story = {
  args: {
    id: "6",
    userName: "Chris Brown",
    userEmail: "chris.brown@example.com",
    requestedAt: new Date("2024-08-10T12:00:00"),
    expiresAt: new Date("2024-08-17T12:00:00"),
    status: "expired",
  },
};

export const GlassVariant: Story = {
  args: {
    id: "7",
    userName: "Glass User",
    userEmail: "glass@example.com",
    requestedAt: new Date(),
    status: "pending",
    variant: "glass",
    actions: [
      {
        label: "Approve",
        onClick: () => console.log("Approved"),
        variant: "approve",
      },
      {
        label: "Reject",
        onClick: () => console.log("Rejected"),
        variant: "reject",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export const RequestList: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <RequestCard
        id="1"
        userName="John Smith"
        userEmail="john@example.com"
        message="Would love to connect!"
        requestedAt={new Date()}
        status="pending"
        actions={[
          { label: "Approve", onClick: () => {}, variant: "approve" },
          { label: "Reject", onClick: () => {}, variant: "reject" },
        ]}
      />
      <RequestCard
        id="2"
        userName="Jane Doe"
        userEmail="jane@example.com"
        requestedAt={new Date(Date.now() - 86400000)}
        respondedAt={new Date()}
        status="approved"
      />
      <RequestCard
        id="3"
        userName="Bob Wilson"
        userEmail="bob@example.com"
        requestedAt={new Date(Date.now() - 172800000)}
        status="expired"
      />
    </div>
  ),
};
