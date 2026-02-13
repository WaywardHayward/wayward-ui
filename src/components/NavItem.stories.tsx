import type { Meta, StoryObj } from "@storybook/react";
import { NavItem } from "./NavItem";

const meta: Meta<typeof NavItem> = {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["desktop", "mobile", "bottom-nav"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

const HomeIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const Desktop: Story = {
  args: {
    href: "/home",
    label: "Home",
    icon: <HomeIcon />,
    variant: "desktop",
    isActive: false,
  },
};

export const DesktopActive: Story = {
  args: {
    href: "/home",
    label: "Home",
    icon: <HomeIcon />,
    variant: "desktop",
    isActive: true,
  },
};

export const Mobile: Story = {
  args: {
    href: "/settings",
    label: "Settings",
    icon: <SettingsIcon />,
    variant: "mobile",
    isActive: false,
  },
};

export const MobileActive: Story = {
  args: {
    href: "/settings",
    label: "Settings",
    icon: <SettingsIcon />,
    variant: "mobile",
    isActive: true,
  },
};

export const BottomNav: Story = {
  args: {
    href: "/home",
    label: "Home",
    icon: <HomeIcon />,
    variant: "bottom-nav",
    isActive: false,
  },
};

export const BottomNavActive: Story = {
  args: {
    href: "/home",
    label: "Home",
    icon: <HomeIcon />,
    variant: "bottom-nav",
    isActive: true,
  },
};

export const NavigationGroup: Story = {
  render: () => (
    <nav className="flex flex-col gap-1 w-48 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
      <NavItem href="/home" label="Home" icon={<HomeIcon />} isActive variant="desktop" />
      <NavItem href="/settings" label="Settings" icon={<SettingsIcon />} variant="desktop" />
    </nav>
  ),
};
