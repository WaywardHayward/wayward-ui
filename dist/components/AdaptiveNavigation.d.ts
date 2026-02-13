import React from 'react';
export interface NavItem {
    /** Display name */
    name: string;
    /** URL/path for the link */
    href: string;
    /** Icon identifier */
    icon?: 'community' | 'maps' | 'flight' | 'hangar' | 'social' | 'home' | 'about' | 'settings';
    /** Whether this item is currently active */
    isActive?: boolean;
}
export interface AdaptiveNavigationProps {
    /** Navigation items to display */
    items: NavItem[];
    /** Currently active path (for highlighting) */
    currentPath?: string;
    /** Whether user is authenticated */
    isAuthenticated?: boolean;
    /** Whether auth state is loading */
    isLoading?: boolean;
    /** Logo/brand element or text */
    brand?: React.ReactNode;
    /** Brand text (used if brand prop not provided) */
    brandText?: string;
    /** Right side content (user menu, etc.) */
    rightContent?: React.ReactNode;
    /** Called when a nav item is clicked */
    onNavigate?: (href: string) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Adaptive navigation bar that shows different content based on authentication state.
 * Pure UI component - routing logic should be handled by parent.
 */
export declare function AdaptiveNavigation({ items, currentPath, isAuthenticated: _isAuthenticated, isLoading, brand, brandText, rightContent, onNavigate, className, }: AdaptiveNavigationProps): import("react/jsx-runtime").JSX.Element;
