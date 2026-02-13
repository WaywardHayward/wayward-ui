import { ReactNode } from "react";
interface FooterLink {
    label: string;
    href?: string;
    onClick?: () => void;
}
interface FooterProps {
    /** Brand/logo name */
    brandName?: string;
    /** Brand tagline */
    tagline?: string;
    /** Custom brand icon (ReactNode) */
    brandIcon?: ReactNode;
    /** Navigation links */
    links?: FooterLink[];
    /** Copyright text override (defaults to brandName + year) */
    copyright?: string;
    /** Additional CSS classes */
    className?: string;
    /** Variant styling */
    variant?: "default" | "glass" | "minimal";
}
/**
 * Footer component with brand info and navigation links.
 * Provides a consistent footer UI with cockpit-style accents.
 */
export declare function Footer({ brandName, tagline, brandIcon, links, copyright, className, variant, }: FooterProps): import("react/jsx-runtime").JSX.Element;
export default Footer;
