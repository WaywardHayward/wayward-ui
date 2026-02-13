import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MobileBottomNav, MobileNavItem } from './MobileBottomNav';

const meta: Meta<typeof MobileBottomNav> = {
  title: 'Navigation/MobileBottomNav',
  component: MobileBottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'cockpit'],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 pb-20">
        <div className="p-4">
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">Page Content</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Scroll down to see the fixed bottom navigation.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileBottomNav>;

const defaultItems: MobileNavItem[] = [
  { id: 'home', label: 'Home', iconName: 'home' },
  { id: 'search', label: 'Search', iconName: 'search' },
  { id: 'add', label: 'Add', iconName: 'add' },
  { id: 'notifications', label: 'Alerts', iconName: 'notifications', badge: 3 },
  { id: 'profile', label: 'Profile', iconName: 'profile' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    activeId: 'home',
    onNavigate: (id) => console.log('Navigate to:', id),
  },
};

export const Interactive: Story = {
  render: function InteractiveNav() {
    const [activeId, setActiveId] = useState('home');
    return (
      <MobileBottomNav
        items={defaultItems}
        activeId={activeId}
        onNavigate={setActiveId}
      />
    );
  },
};

export const GlassVariant: Story = {
  args: {
    items: defaultItems,
    activeId: 'search',
    variant: 'glass',
    onNavigate: (id) => console.log('Navigate to:', id),
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 pb-20">
        <div className="p-4">
          <h1 className="text-xl font-bold text-white">Glass Effect</h1>
          <p className="text-white/80 mt-2">
            The glass variant blurs the background content.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const CockpitVariant: Story = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', iconName: 'home' },
      { id: 'maps', label: 'Maps', iconName: 'search' },
      { id: 'record', label: 'Record', iconName: 'add' },
      { id: 'hangar', label: 'Hangar', iconName: 'star' },
      { id: 'you', label: 'You', iconName: 'profile' },
    ],
    activeId: 'dashboard',
    variant: 'cockpit',
    onNavigate: (id) => console.log('Navigate to:', id),
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-20">
        <div className="p-4">
          <h1 className="text-xl font-bold text-cyan-100">Cockpit Style</h1>
          <p className="text-cyan-300/70 mt-2">
            Aviation-inspired dark theme with cyan accents.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const WithBadges: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home', iconName: 'home' },
      { id: 'notifications', label: 'Alerts', iconName: 'notifications', badge: 12 },
      { id: 'messages', label: 'Messages', iconName: 'heart', badge: 5 },
      { id: 'profile', label: 'Profile', iconName: 'profile' },
    ],
    activeId: 'home',
    onNavigate: (id) => console.log('Navigate to:', id),
  },
};

export const CustomIcons: Story = {
  args: {
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <span className="text-lg">🏠</span>,
      },
      {
        id: 'favorites',
        label: 'Favorites',
        icon: <span className="text-lg">⭐</span>,
      },
      {
        id: 'cart',
        label: 'Cart',
        icon: <span className="text-lg">🛒</span>,
        badge: 2,
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: <span className="text-lg">👤</span>,
      },
    ],
    activeId: 'home',
    onNavigate: (id) => console.log('Navigate to:', id),
  },
};
