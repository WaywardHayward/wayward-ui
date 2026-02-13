import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
export interface NavItemProps<T extends ElementType = "a"> {
    /** The component to render as (default: "a", can be Link from react-router-dom, Next.js Link, etc.) */
    as?: T;
    /** The destination path for the navigation item */
    href: string;
    /** The display label for the navigation item */
    label: string;
    /** Icon element to display alongside the label */
    icon: ReactNode;
    /** Whether this navigation item is currently active */
    isActive?: boolean;
    /** Optional click handler (for additional actions when clicked) */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Display variant */
    variant?: "desktop" | "mobile" | "bottom-nav";
}
export declare function NavItem<T extends ElementType = "a">({ as, href, label, icon, isActive, onClick, className, variant, ...rest }: NavItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavItemProps<T>>): import("react/jsx-runtime").JSX.Element;
