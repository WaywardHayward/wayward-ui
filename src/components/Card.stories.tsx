import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'cockpit',
      values: [
        { name: 'cockpit', value: '#0a0f1a' },
        { name: 'gradient', value: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Card Title</h3>
        <p className="text-slate-400">This is some card content.</p>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Glass Card</h3>
        <p className="text-slate-300">
          Premium frosted glass effect with backdrop blur.
        </p>
      </div>
    ),
  },
};

export const GlassWithGlow: Story = {
  args: {
    variant: 'glass',
    glow: 'blue',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Glowing Glass</h3>
        <p className="text-slate-300">
          Glass effect with subtle blue glow accent.
        </p>
      </div>
    ),
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Gradient Card</h3>
        <p className="text-slate-300">
          Premium gradient background with depth.
        </p>
      </div>
    ),
  },
};

export const GradientWithAmberGlow: Story = {
  args: {
    variant: 'gradient',
    glow: 'amber',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Aviation Accent</h3>
        <p className="text-slate-300">
          Gradient card with amber glow - cockpit style.
        </p>
      </div>
    ),
  },
};

export const Cockpit: Story = {
  args: {
    variant: 'cockpit',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Cockpit Panel</h3>
        <p className="text-slate-300">
          Instrument-style panel with inner highlights and depth.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-sm">Active</span>
          <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-400 text-sm">Warning</span>
        </div>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-white">Interactive Card</h3>
        <p className="text-slate-400">Click me for an action.</p>
      </div>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    variant: 'gradient',
    glow: 'blue',
    header: <h3 className="text-lg font-bold text-white">Flight Details</h3>,
    footer: (
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
          View Flight
        </button>
      </div>
    ),
    children: (
      <div className="space-y-2">
        <p className="text-slate-300">Departure: Edinburgh (EDI)</p>
        <p className="text-slate-300">Arrival: London Heathrow (LHR)</p>
        <p className="text-slate-400 text-sm">Duration: 1h 15m</p>
      </div>
    ),
  },
};
