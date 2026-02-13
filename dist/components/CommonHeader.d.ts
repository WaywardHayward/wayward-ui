import { ReactNode } from "react";
interface CommonHeaderProps {
    /** Main title displayed in the header */
    title: string;
    /** Optional subtitle text */
    subtitle?: string;
    /** Optional action button configuration */
    action?: {
        label: string;
        onClick: () => void;
    };
    /** User information for personalized greeting */
    user?: {
        displayName?: string;
        email?: string;
        avatarUrl?: string;
    };
    /** Show time-based greeting (Good morning/afternoon/evening) */
    showGreeting?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Optional leading content (logo, back button, etc.) */
    leading?: ReactNode;
    /** Header position: fixed at top or static */
    position?: "fixed" | "static";
}
/**
 * Common header component with optional user greeting and action button.
 * Provides a consistent header UI across pages with personalized touches.
 */
export declare function CommonHeader({ title, subtitle, action, user, showGreeting, className, leading, position, }: CommonHeaderProps): import("react/jsx-runtime").JSX.Element;
export default CommonHeader;
