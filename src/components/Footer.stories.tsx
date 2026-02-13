import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    brandName: "Wayward UI",
    tagline: "Component Library",
  },
};

export const WithLinks: Story = {
  args: {
    brandName: "Wayward UI",
    tagline: "Component Library",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const WithClickHandlers: Story = {
  args: {
    brandName: "Cockpit App",
    tagline: "Flight Management",
    links: [
      { label: "Settings", onClick: () => console.log("Settings clicked") },
      { label: "Help", onClick: () => console.log("Help clicked") },
    ],
  },
};

export const CustomIcon: Story = {
  args: {
    brandName: "Cosmic UI",
    tagline: "Space-age components",
    brandIcon: (
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.477V16h2a1 1 0 110 2H8a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
      </svg>
    ),
    links: [
      { label: "Documentation", href: "/docs" },
    ],
  },
};

export const GlassVariant: Story = {
  args: {
    brandName: "Glass Footer",
    tagline: "Transparent elegance",
    variant: "glass",
    links: [
      { label: "About", href: "/about" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px] bg-gradient-to-br from-cyan-500 to-purple-600 flex items-end">
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const MinimalVariant: Story = {
  args: {
    brandName: "Minimal",
    variant: "minimal",
  },
};

export const CustomCopyright: Story = {
  args: {
    brandName: "Legacy App",
    copyright: "© 2020-2024 All rights reserved",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};
