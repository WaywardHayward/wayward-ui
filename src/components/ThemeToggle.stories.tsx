import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeToggle, ThemePreference } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

// Interactive wrapper
const InteractiveThemeToggle = () => {
  const [preference, setPreference] = useState<ThemePreference>('system');
  const [resolved, setResolved] = useState<'light' | 'dark'>('light');
  
  const handleChange = (newPref: ThemePreference) => {
    setPreference(newPref);
    // In real app, this would come from system preference detection
    if (newPref === 'light') setResolved('light');
    else if (newPref === 'dark') setResolved('dark');
    // system would detect from matchMedia
  };
  
  return (
    <div className="flex flex-col items-center gap-4">
      <ThemeToggle
        themePreference={preference}
        resolvedTheme={resolved}
        onThemeChange={handleChange}
      />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Preference: {preference} | Resolved: {resolved}
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => <InteractiveThemeToggle />,
};

export const LightMode: Story = {
  args: {
    themePreference: 'light',
    resolvedTheme: 'light',
    onThemeChange: () => {},
  },
};

export const DarkMode: Story = {
  args: {
    themePreference: 'dark',
    resolvedTheme: 'dark',
    onThemeChange: () => {},
  },
};

export const SystemMode: Story = {
  args: {
    themePreference: 'system',
    resolvedTheme: 'dark',
    onThemeChange: () => {},
  },
};

export const InNavbar: Story = {
  render: () => {
    const [pref, setPref] = useState<ThemePreference>('light');
    return (
      <nav className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
        <span className="font-medium">My App</span>
        <div className="flex-1" />
        <ThemeToggle
          themePreference={pref}
          resolvedTheme={pref === 'dark' ? 'dark' : 'light'}
          onThemeChange={setPref}
        />
      </nav>
    );
  },
};
