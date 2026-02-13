import type { Meta, StoryObj } from '@storybook/react';
import { AchievementsPanel, Achievement } from './AchievementsPanel';

const meta: Meta<typeof AchievementsPanel> = {
  title: 'Data Display/AchievementsPanel',
  component: AchievementsPanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Achievement display panel with progress tracking and rarity badges.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onViewAll: { action: 'view all clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof AchievementsPanel>;

const sampleAchievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'First Flight',
    description: 'Complete your first logged flight',
    icon: '✈️',
    progress: 1,
    total: 1,
    completed: true,
    rarity: 'common',
  },
  {
    id: 'ach-2',
    title: 'Sky Navigator',
    description: 'Log 10 flights with different destinations',
    icon: '🧭',
    progress: 7,
    total: 10,
    rarity: 'rare',
  },
  {
    id: 'ach-3',
    title: 'Globe Trotter',
    description: 'Visit 5 different countries',
    icon: '🌍',
    progress: 5,
    total: 5,
    completed: true,
    rarity: 'epic',
  },
  {
    id: 'ach-4',
    title: 'Mile High Club',
    description: 'Accumulate 10,000 miles flown',
    icon: '🏔️',
    progress: 4500,
    total: 10000,
    rarity: 'rare',
  },
  {
    id: 'ach-5',
    title: 'Legendary Aviator',
    description: 'Log 100 flights in a single year',
    icon: '👑',
    progress: 100,
    total: 100,
    completed: true,
    rarity: 'legendary',
  },
];

export const Default: Story = {
  args: {
    achievements: sampleAchievements,
  },
};

export const NoProgress: Story = {
  args: {
    achievements: [
      {
        id: 'ach-1',
        title: 'Getting Started',
        description: 'Complete the onboarding tutorial',
        icon: '📚',
        progress: 0,
        total: 1,
        rarity: 'common',
      },
      {
        id: 'ach-2',
        title: 'Early Bird',
        description: 'Log a flight before 6am',
        icon: '🌅',
        progress: 0,
        total: 1,
        rarity: 'rare',
      },
    ],
  },
};

export const AllComplete: Story = {
  args: {
    achievements: sampleAchievements.map(a => ({ ...a, completed: true, progress: a.total })),
    title: '🎉 All Achievements Unlocked!',
  },
};

export const NoViewAllButton: Story = {
  args: {
    achievements: sampleAchievements.slice(0, 3),
    showViewAll: false,
  },
};
