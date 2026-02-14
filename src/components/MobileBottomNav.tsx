import { ReactNode } from 'react';
import { MobileNavItem } from '../types/MobileNavItem';

export interface MobileBottomNavProps {
  /** Navigation items to display */
  items: MobileNavItem[];
  /** Currently active item ID */
  activeId?: string;
  /** Callback when a nav item is clicked */
  onNavigate: (id: string) => void;
  /** Visual variant */
  variant?: 'default' | 'glass' | 'cockpit';
  /** Additional CSS classes */
  className?: string;
}

const builtInIcons: Record<string, (isActive: boolean) => ReactNode> = {
  home: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m0 0V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10m3 0a1 1 0 0 0 1-1V10m0 0 2-2m-2 2 2-2" />
    </svg>
  ),
  search: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  add: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  notifications: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  profile: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  settings: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  menu: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  star: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  heart: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  bookmark: (isActive) => (
    <svg className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-75'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  ),
};

/**
 * MobileBottomNav - A mobile-friendly bottom navigation bar
 * 
 * Router-agnostic: pass your own onNavigate handler.
 * Supports built-in icons or custom ReactNode icons.
 */
export function MobileBottomNav({ 
  items, 
  activeId, 
  onNavigate,
  variant = 'default',
  className = '' 
}: MobileBottomNavProps) {
  const variantClasses = {
    default: 'bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700',
    glass: 'backdrop-blur-md bg-white/80 dark:bg-slate-800/80 border-t border-white/20 dark:border-slate-700/50',
    cockpit: 'backdrop-blur-md bg-gradient-to-t from-slate-900/95 to-slate-800/90 border-t border-cyan-500/30 shadow-lg shadow-cyan-500/5',
  };

  const activeClasses = {
    default: 'text-blue-600 dark:text-blue-400',
    glass: 'text-blue-600 dark:text-blue-400',
    cockpit: 'text-cyan-400',
  };

  const inactiveClasses = {
    default: 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
    glass: 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
    cockpit: 'text-slate-400 hover:text-cyan-300',
  };

  return (
    <nav className={`fixed bottom-0 left-0 right-0 px-4 py-2 z-50 safe-area-bottom ${variantClasses[variant]} ${className}`}>
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const icon = item.icon || (item.iconName && builtInIcons[item.iconName]?.(isActive));

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                flex flex-col items-center gap-1 py-1 px-3 relative
                transition-colors
                ${isActive ? activeClasses[variant] : inactiveClasses[variant]}
              `.trim()}
            >
              {icon && (
                <span className="relative">
                  {icon}
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold bg-red-500 text-white rounded-full flex items-center justify-center">
                      {item.badge > 9 ? '9+' : item.badge}
                    </span>
                  )}
                </span>
              )}
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
