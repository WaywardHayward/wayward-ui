import React from "react";

export interface OptionsMenuItem {
  label: string;
  onClick: () => void;
  variant?: "default" | "danger";
}

export interface OptionsMenuProps {
  items: OptionsMenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const OptionsMenu: React.FC<OptionsMenuProps> = ({
  items,
  isOpen,
  onToggle,
  className = "",
}) => (
  <div className={`relative ${className}`}>
    <button
      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
      aria-label="Options"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    </button>
    {isOpen && (
      <div className="absolute right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 w-36 z-10">
        {items.map((item, index) => (
          <button
            key={index}
            className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 ${
              item.variant === "danger"
                ? "text-red-600"
                : "text-slate-700 dark:text-slate-200"
            }`}
            onClick={() => {
              item.onClick();
              onToggle();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  </div>
);
