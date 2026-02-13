import type { Meta, StoryObj } from "@storybook/react";
import { SettingCard } from "./SettingCard";
import { Toggle } from "./Toggle";

const meta: Meta<typeof SettingCard> = {
  title: "Components/SettingCard",
  component: SettingCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    accentColor: {
      control: "select",
      options: ["blue", "green", "purple", "orange", "red", "cyan", "pink", "amber"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SettingCard>;

export const Default: Story = {
  args: {
    title: "Display Settings",
    description: "Customize how your data is displayed",
    children: (
      <div className="space-y-4">
        <Toggle label="Dark Mode" defaultChecked />
        <Toggle label="Show Notifications" />
        <Toggle label="Compact View" />
      </div>
    ),
  },
};

export const WithGlass: Story = {
  args: {
    title: "Privacy Settings",
    description: "Control who can see your flights",
    accentColor: "purple",
    glass: true,
    children: (
      <div className="space-y-4">
        <Toggle label="Public Profile" />
        <Toggle label="Share Flight Stats" defaultChecked />
        <Toggle label="Allow Mentions" defaultChecked />
      </div>
    ),
  },
};

export const WithGlow: Story = {
  args: {
    title: "Premium Features",
    description: "Enhanced tracking options",
    accentColor: "cyan",
    glow: true,
    children: (
      <div className="space-y-4">
        <Toggle label="Real-time Sync" defaultChecked />
        <Toggle label="Advanced Analytics" defaultChecked />
        <Toggle label="Priority Support" />
      </div>
    ),
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      {(["blue", "green", "purple", "orange", "red", "cyan", "pink", "amber"] as const).map((color) => (
        <SettingCard key={color} title={`${color.charAt(0).toUpperCase() + color.slice(1)} Accent`} accentColor={color}>
          <Toggle label="Sample Toggle" />
        </SettingCard>
      ))}
    </div>
  ),
};

export const FullExample: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <SettingCard
        title="Notification Preferences"
        description="Choose what alerts you receive"
        accentColor="blue"
      >
        <Toggle label="Email Notifications" defaultChecked />
        <Toggle label="Push Notifications" defaultChecked />
        <Toggle label="SMS Alerts" />
      </SettingCard>
      
      <SettingCard
        title="Data & Storage"
        description="Manage your data usage"
        accentColor="green"
        glass
      >
        <Toggle label="Auto-sync" defaultChecked />
        <Toggle label="Offline Mode" />
        <Toggle label="High Quality Maps" defaultChecked />
      </SettingCard>
    </div>
  ),
};
