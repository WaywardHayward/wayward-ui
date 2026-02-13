import './index.css';

// Layout components
export { Container } from './components/layouts/Container';
export { Flex } from './components/layouts/Flex';
export { Grid } from './components/layouts/Grid';
export { Section } from './components/layouts/Section';

// UI components
export { Avatar } from './components/Avatar';
export { AvatarStack } from './components/AvatarStack';
export type { AvatarStackProps, AvatarStackUser } from './components/AvatarStack';
export { Badge } from './components/Badge';
export { Button } from './components/Button';
export { Card } from './components/Card';
export { IconButton } from './components/IconButton';
export type { IconButtonProps } from './components/IconButton';
export { Skeleton } from './components/Skeleton';
export type { SkeletonProps } from './components/Skeleton';
export { StatCard } from './components/StatCard';
export { Loading, Spinner } from './components/Spinner';
export { TabNavigation } from './components/TabNavigation';
export type { Tab, TabNavigationProps } from './components/TabNavigation';
export { Toggle } from './components/Toggle';
export type { ToggleProps } from './components/Toggle';

// Typography
export { H1, H2, H3, H4, Lead, Muted, Small, Text } from './components/Typography';

// Forms
export * from './components/forms';

// State components
export { EmptyState } from './components/EmptyState';
export type { EmptyStateProps } from './components/EmptyState';
export { ErrorState } from './components/ErrorState';
export type { ErrorStateProps } from './components/ErrorState';

// Navigation & menus
export { NavItem } from './components/NavItem';
export type { NavItemProps } from './components/NavItem';
export { OptionsMenu } from './components/OptionsMenu';
export type { OptionsMenuProps, OptionsMenuItem } from './components/OptionsMenu';
export { SectionHeader } from './components/SectionHeader';
export type { SectionHeaderProps } from './components/SectionHeader';

// Feedback & notifications
export { Banner } from './components/Banner';
export type { BannerProps } from './components/Banner';
export { InfoBadge } from './components/InfoBadge';
export type { InfoBadgeProps } from './components/InfoBadge';
export { InfoOverlay } from './components/InfoOverlay';
export type { InfoOverlayProps } from './components/InfoOverlay';

// Cards & actions
export { ActionCard } from './components/ActionCard';
export type { ActionCardProps } from './components/ActionCard';
export { SettingCard } from './components/SettingCard';
export type { SettingCardProps } from './components/SettingCard';
export { LoadMoreButton } from './components/LoadMoreButton';
export type { LoadMoreButtonProps } from './components/LoadMoreButton';

// Autocomplete
export { Autocomplete } from './components/Autocomplete';
export type { AutocompleteProps, AutocompleteOption } from './components/Autocomplete';

// Theme toggle
export { ThemeToggle } from './components/ThemeToggle';
export type { ThemeToggleProps, ThemePreference } from './components/ThemeToggle';

// Notifications
export { NotificationBell } from './components/NotificationBell';
export type { NotificationBellProps, Notification } from './components/NotificationBell';

// Loader
export { Loader, FullScreenLoader, AviationLoader, MinimalLoader, SmallLoader } from './components/Loader';
export type { LoaderProps } from './components/Loader';

// Adaptive Navigation
export { AdaptiveNavigation } from './components/AdaptiveNavigation';
export type { AdaptiveNavigationProps, NavItem as AdaptiveNavItem } from './components/AdaptiveNavigation';
