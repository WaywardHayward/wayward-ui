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
export function Footer({
  brandName = "Wayward UI",
  tagline,
  brandIcon,
  links = [],
  copyright,
  className = "",
  variant = "default",
}: FooterProps) {
  const variantClasses = {
    default: "bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-white/20 dark:border-slate-700/50",
    minimal: "bg-transparent border-t border-slate-200 dark:border-slate-700",
  };

  const defaultIcon = (
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  );

  const handleLinkClick = (link: FooterLink, e: React.MouseEvent) => {
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
    }
  };

  return (
    <footer className={`mt-8 ${variantClasses[variant]} ${className}`}>
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
              {brandIcon || defaultIcon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-800 dark:text-white">
                {brandName}
              </h3>
              {tagline && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {tagline}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              {links.map((link, index) => (
                <span key={index} className="flex items-center gap-4">
                  <a
                    href={link.href || "#"}
                    onClick={(e) => handleLinkClick(link, e)}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                  {index < links.length - 1 && (
                    <span className="text-slate-400 dark:text-slate-500">|</span>
                  )}
                </span>
              ))}
              {links.length > 0 && (
                <span className="text-slate-400 dark:text-slate-500">|</span>
              )}
              <span className="text-slate-500 dark:text-slate-400">
                {copyright || `© ${new Date().getFullYear()} ${brandName}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
