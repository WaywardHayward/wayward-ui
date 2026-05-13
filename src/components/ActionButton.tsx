import React, { CSSProperties } from "react";

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
  /** Active color variant. 'warm' uses the Track D accent token; named colors keep legacy behaviour. */
  activeColor?: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'warm';
  /** Additional class names */
  className?: string;
}

const TOKEN_ACCENT_WARM = "var(--accent-warm, #E89B5A)";
const TOKEN_TEXT_META = "var(--text-meta, rgba(148,163,184,1))";

const namedActiveStyles = {
  red: 'text-red-500 hover:text-red-600',
  blue: 'text-blue-500 hover:text-blue-600',
  green: 'text-green-500 hover:text-green-600',
  yellow: 'text-yellow-500 hover:text-yellow-600',
  purple: 'text-purple-500 hover:text-purple-600',
};

function activeStyle(activeColor: NonNullable<ActionButtonProps['activeColor']>): CSSProperties | undefined {
  return activeColor === 'warm' ? { color: TOKEN_ACCENT_WARM } : undefined;
}

function activeClass(activeColor: NonNullable<ActionButtonProps['activeColor']>): string {
  return activeColor === 'warm' ? '' : namedActiveStyles[activeColor];
}

export function ActionButton({
  icon,
  label,
  count,
  active = false,
  onClick,
  activeColor = 'red',
  className = "",
}: ActionButtonProps) {
  const inactiveStyle: CSSProperties = { color: TOKEN_TEXT_META };

  return (
    <button
      style={active ? activeStyle(activeColor) : inactiveStyle}
      className={`flex flex-col items-center space-y-1 flex-1 py-2 transition-colors ${
        active ? activeClass(activeColor) : "hover:opacity-90"
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
