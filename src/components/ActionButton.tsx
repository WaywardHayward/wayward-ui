import React from "react";

export interface ActionButtonProps {
  /** Icon element to display */
  icon: React.ReactNode;
  /** Accessible label for the button */
  label: string;
  /** Count to display below the icon */
  count?: number | string;
  /** Whether the button is in active/selected state */
  active?: boolean;
  /** Click handler */
  onClick: () => void;
  /** Active color variant */
  activeColor?: 'red' | 'blue' | 'green' | 'yellow' | 'purple';
  /** Additional class names */
  className?: string;
}

const activeColorStyles = {
  red: 'text-red-500 hover:text-red-600',
  blue: 'text-blue-500 hover:text-blue-600',
  green: 'text-green-500 hover:text-green-600',
  yellow: 'text-yellow-500 hover:text-yellow-600',
  purple: 'text-purple-500 hover:text-purple-600',
};

export function ActionButton({
  icon,
  label,
  count,
  active = false,
  onClick,
  activeColor = 'red',
  className = "",
}: ActionButtonProps) {
  return (
    <button
      className={`flex flex-col items-center space-y-1 flex-1 py-2 transition-colors ${
        active
          ? activeColorStyles[activeColor]
          : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
      } ${className}`}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {icon}
      {count !== undefined && (
        <span className="text-xs font-medium">{count}</span>
      )}
    </button>
  );
}
