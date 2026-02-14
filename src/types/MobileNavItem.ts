import { ReactNode } from 'react';

export interface MobileNavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display label */
  label: string;
  /** Icon to display (ReactNode for flexibility) */
  icon?: ReactNode;
  /** Icon name for built-in icons */
  iconName?: 'home' | 'search' | 'add' | 'notifications' | 'profile' | 'settings' | 'menu' | 'star' | 'heart' | 'bookmark';
  /** Badge count (optional) */
  badge?: number;
}
