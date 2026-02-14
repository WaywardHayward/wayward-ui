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
