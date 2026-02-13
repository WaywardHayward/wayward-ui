import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AdaptiveNavigation, NavItem } from './AdaptiveNavigation';

const meta: Meta<typeof AdaptiveNavigation> = {
  title: 'Navigation/AdaptiveNavigation',
  component: AdaptiveNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdaptiveNavigation>;

const authenticatedItems: NavItem[] = [
  { name: 'Community', href: '/', icon: 'community' },
  { name: 'Maps', href: '/maps', icon: 'maps' },
  { name: 'Record', href: '/record', icon: 'flight' },
  { name: 'Hangar', href: '/hangar', icon: 'hangar' },
  { name: 'Social', href: '/social', icon: 'social' },
];

const publicItems: NavItem[] = [
  { name: 'Home', href: '/', icon: 'home' },
  { name: 'About', href: '/about', icon: 'about' },
];

// Interactive wrapper
const InteractiveNav = ({ authenticated = true }) => {
  const [currentPath, setCurrentPath] = useState('/');
  const items = authenticated ? authenticatedItems : publicItems;
  
  return (
    <AdaptiveNavigation
      items={items}
      currentPath={currentPath}
      isAuthenticated={authenticated}
      brandText="ELECTRA"
      onNavigate={setCurrentPath}
      rightContent={
        authenticated ? (
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full" />
            <button className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Sign Out
            </button>
          </div>
        ) : (
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign In
          </button>
        )
      }
    />
  );
};

export const Authenticated: Story = {
  render: () => <InteractiveNav authenticated />,
};

export const Public: Story = {
  render: () => <InteractiveNav authenticated={false} />,
};

export const Loading: Story = {
  args: {
    items: authenticatedItems,
    isLoading: true,
    brandText: 'ELECTRA',
  },
};

export const CustomBrand: Story = {
  render: () => (
    <AdaptiveNavigation
      items={publicItems}
      currentPath="/"
      brand={
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wayward
          </span>
        </div>
      }
      rightContent={
        <button className="text-sm bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Get Started
        </button>
      }
    />
  ),
};

export const WithNotifications: Story = {
  render: () => (
    <AdaptiveNavigation
      items={authenticatedItems}
      currentPath="/"
      isAuthenticated
      brandText="ELECTRA"
      rightContent={
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full" />
        </div>
      }
    />
  ),
};

export const MinimalItems: Story = {
  args: {
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: 'home' },
      { name: 'Settings', href: '/settings', icon: 'settings' },
    ],
    currentPath: '/dashboard',
    brandText: 'Admin',
    rightContent: (
      <button className="text-sm text-slate-600 hover:text-slate-900">
        Logout
      </button>
    ),
  },
};
