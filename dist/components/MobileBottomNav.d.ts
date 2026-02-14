import { MobileNavItem } from '../types/MobileNavItem';
export interface MobileBottomNavProps {
    /** Navigation items to display */
    items: MobileNavItem[];
    /** Currently active item ID */
    activeId?: string;
    /** Callback when a nav item is clicked */
    onNavigate: (id: string) => void;
    /** Visual variant */
    variant?: 'default' | 'glass' | 'cockpit';
    /** Additional CSS classes */
    className?: string;
}
/**
 * MobileBottomNav - A mobile-friendly bottom navigation bar
 *
 * Router-agnostic: pass your own onNavigate handler.
 * Supports built-in icons or custom ReactNode icons.
 */
export declare function MobileBottomNav({ items, activeId, onNavigate, variant, className }: MobileBottomNavProps): import("react/jsx-runtime").JSX.Element;
