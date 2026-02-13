import type { Meta, StoryObj } from '@storybook/react';
import { CookieConsent } from './CookieConsent';

const meta: Meta<typeof CookieConsent> = {
  title: 'Feedback/CookieConsent',
  component: CookieConsent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'GDPR-compliant cookie consent banner that appears at the bottom of the screen.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onAccept: { action: 'accepted' },
    onLearnMore: { action: 'learn more clicked' },
  },
  decorators: [
    (Story) => {
      // Clear localStorage for story
      localStorage.removeItem('story-cookie-consent');
      return (
        <div className="min-h-[400px] bg-slate-50 dark:bg-slate-900 p-4">
          <p className="text-slate-600 dark:text-slate-400 text-center">
            Page content goes here. The cookie banner appears at the bottom.
          </p>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof CookieConsent>;

export const Default: Story = {
  args: {
    storageKey: 'story-cookie-consent',
    privacyUrl: '/privacy',
  },
};

export const CustomMessage: Story = {
  args: {
    storageKey: 'story-cookie-consent-custom',
    message: 'We use essential cookies and analytics to understand how you use our service.',
    acceptText: 'Got it!',
    learnMoreText: 'Privacy Policy',
    privacyUrl: '/privacy-policy',
  },
};

export const CockpitStyle: Story = {
  args: {
    storageKey: 'story-cookie-consent-cockpit',
    message: '🛫 This cockpit uses cookies to keep your flight preferences and analytics.',
    acceptText: 'Clear for Takeoff',
    learnMoreText: 'Flight Manual',
  },
};
