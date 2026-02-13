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

const variantClasses = {
  desktop: {
    base: "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
    active:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    inactive:
      "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700",
  },
  mobile: {
    base: "flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all",
    active:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    inactive:
      "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400",
  },
  "bottom-nav": {
    base: "flex flex-col items-center gap-1 py-1 transition-colors",
    active: "text-blue-600",
    inactive:
      "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300",
  },
};

const iconClasses = {
  desktop: "w-4 h-4",
  mobile: "w-5 h-5",
  "bottom-nav": "w-5 h-5",
};

const labelClasses = {
  desktop: "",
  mobile: "",
  "bottom-nav": "text-xs",
};

export function NavItem<T extends ElementType = "a">({
  as,
  href,
  label,
  icon,
  isActive = false,
  onClick,
  className = "",
  variant = "desktop",
  ...rest
}: NavItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavItemProps<T>>) {
  const Component = as || "a";
  const classes = variantClasses[variant];
  const baseClass = `${classes.base} ${isActive ? classes.active : classes.inactive} ${className}`;

  const content = (
    <>
      <span className={iconClasses[variant]}>{icon}</span>
      <span className={labelClasses[variant]}>{label}</span>
    </>
  );

  // Build props for the component
  const componentProps: Record<string, unknown> = {
    className: baseClass,
    onClick,
    ...rest,
  };

  // Handle href prop - "a" uses href, router Links might use "to" or "href"
  if (Component === "a") {
    componentProps.href = href;
  } else {
    // For router Links, pass both href and to for compatibility
    componentProps.href = href;
    componentProps.to = href;
  }

  return <Component {...componentProps}>{content}</Component>;
}
