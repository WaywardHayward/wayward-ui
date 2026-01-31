import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "elevated" | "interactive" | "glass";
  header?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  padding = "md",
  variant = "default",
  header,
  footer,
  onClick,
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantClasses = {
    default:
      "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm",
    outlined:
      "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600",
    elevated:
      "bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700",
    interactive:
      "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
    glass:
      "bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all",
  };

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={`rounded-xl ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {header && (
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          {header}
        </div>
      )}
      <div className={paddingClasses[padding]}>{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700">
          {footer}
        </div>
      )}
    </Component>
  );
}
