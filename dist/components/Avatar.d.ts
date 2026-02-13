interface AvatarProps {
    src?: string;
    alt?: string;
    initials?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "circle" | "square";
    className?: string;
}
/**
 * Avatar component for user profile pictures with fallbacks
 * Handles missing images gracefully with initials
 */
export declare function Avatar({ src, alt, initials, size, variant, className, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export {};
