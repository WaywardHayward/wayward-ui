import type { Meta, StoryObj } from "@storybook/react";
import { InfoOverlay } from "./InfoOverlay";

const meta: Meta<typeof InfoOverlay> = {
  title: "Components/InfoOverlay",
  component: InfoOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;
type Story = StoryObj<typeof InfoOverlay>;

const MockMap = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative w-80 h-60 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-xl overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40M20%200v40%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')]" />
    {children}
  </div>
);

export const FlightMap: Story = {
  render: () => (
    <MockMap>
      <InfoOverlay
        topLeft="EDI"
        topRight="LIVE"
        topRightVariant="primary"
        bottomLeft="GPS Track (127 pts)"
        bottomLeftVariant="success"
        bottomRight="G-ABCD"
        bottomRightVariant="glass"
      />
    </MockMap>
  ),
};

export const MinimalOverlay: Story = {
  render: () => (
    <MockMap>
      <InfoOverlay
        topRight="PREVIEW"
        topRightVariant="warning"
      />
    </MockMap>
  ),
};

export const AllCorners: Story = {
  render: () => (
    <MockMap>
      <InfoOverlay
        topLeft="Top Left"
        topLeftVariant="default"
        topRight="Top Right"
        topRightVariant="primary"
        bottomLeft="Bottom Left"
        bottomLeftVariant="success"
        bottomRight="Bottom Right"
        bottomRightVariant="danger"
      />
    </MockMap>
  ),
};

export const GlassStyle: Story = {
  render: () => (
    <MockMap>
      <InfoOverlay
        topLeft="DEPARTURE"
        topLeftVariant="glass"
        topRight="ARRIVAL"
        topRightVariant="glass"
        bottomLeft="Alt: 32,000 ft"
        bottomLeftVariant="glass"
        bottomRight="Spd: 450 kts"
        bottomRightVariant="glass"
      />
    </MockMap>
  ),
};

export const NonInteractive: Story = {
  render: () => (
    <MockMap>
      <InfoOverlay
        topRight="LOCKED"
        topRightVariant="warning"
        bottomLeft="Tap to unlock"
        bottomLeftVariant="default"
        interactive={false}
      />
    </MockMap>
  ),
};
