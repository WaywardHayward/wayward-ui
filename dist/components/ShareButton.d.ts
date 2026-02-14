import { ReactNode } from 'react';
export interface ShareButtonProps {
    /** Callback when share is triggered */
    onShare: () => void;
    /** Visual variant */
    variant?: 'default' | 'glass' | 'cockpit' | 'minimal';
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Show label text */
    showLabel?: boolean;
    /** Custom label text */
    label?: string;
    /** Custom icon (overrides default) */
    icon?: ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Disabled state */
    disabled?: boolean;
}
/**
 * ShareButton - A versatile share action button
 *
 * Can be used as icon-only or with label.
 * Supports multiple visual styles including cockpit theme.
 */
export declare function ShareButton({ onShare, variant, size, showLabel, label, icon, className, disabled, }: ShareButtonProps): import("react/jsx-runtime").JSX.Element;
