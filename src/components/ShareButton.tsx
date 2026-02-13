import { ReactNode } from 'react';

export interface ShareButtonProps {
  /** Callback when share is triggered */
  onShare: () => void;
  /** Visual variant */
  variant?: 'default' | 'glass' | 'cockpit' | 'minimal';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show label text */
  showLabel?: boolean;
  /** Custom label text */
  label?: string;
  /** Custom icon (overrides default) */
  icon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const buttonSizeClasses = {
  sm: 'py-1.5 px-2 text-xs gap-1',
  md: 'py-2 px-3 text-sm gap-1.5',
  lg: 'py-2.5 px-4 text-base gap-2',
};

/**
 * ShareButton - A versatile share action button
 * 
 * Can be used as icon-only or with label.
 * Supports multiple visual styles including cockpit theme.
 */
export function ShareButton({ 
  onShare, 
  variant = 'default',
  size = 'md',
  showLabel = true,
  label = 'Share',
  icon,
  className = '',
  disabled = false,
}: ShareButtonProps) {
  const variantClasses = {
    default: `
      text-slate-600 dark:text-slate-400 
      hover:text-slate-800 dark:hover:text-slate-200 
      hover:bg-slate-100 dark:hover:bg-slate-700
    `,
    glass: `
      text-slate-700 dark:text-slate-200
      hover:bg-white/20 dark:hover:bg-slate-700/50
      backdrop-blur-sm
    `,
    cockpit: `
      text-cyan-400 
      hover:text-cyan-300 
      hover:bg-cyan-500/10
      border border-transparent hover:border-cyan-500/30
    `,
    minimal: `
      text-slate-500 dark:text-slate-400
      hover:text-blue-600 dark:hover:text-blue-400
    `,
  };

  const defaultIcon = (
    <svg
      className={sizeClasses[size]}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
      />
    </svg>
  );

  return (
    <button
      onClick={onShare}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-lg transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${buttonSizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {icon || defaultIcon}
      {showLabel && <span>{label}</span>}
    </button>
  );
}

export interface ShareActionsProps {
  /** URL to share */
  url?: string;
  /** Title for share */
  title?: string;
  /** Text/description for share */
  text?: string;
  /** Callback on successful share */
  onSuccess?: () => void;
  /** Callback on share error or fallback */
  onFallback?: () => void;
  /** ShareButton props */
  buttonProps?: Omit<ShareButtonProps, 'onShare'>;
}

/**
 * ShareActions - ShareButton with Web Share API integration
 * 
 * Automatically uses the Web Share API when available,
 * falls back to clipboard copy or custom handler.
 */
export function ShareActions({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = '',
  text = '',
  onSuccess,
  onFallback,
  buttonProps = {},
}: ShareActionsProps) {
  const handleShare = async () => {
    // Try Web Share API first
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        onSuccess?.();
        return;
      } catch (err) {
        // User cancelled or error
        if ((err as Error).name !== 'AbortError') {
          console.error('Share failed:', err);
        }
      }
    }

    // Fallback: copy to clipboard
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        onFallback?.();
        return;
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    }

    // Last resort fallback
    onFallback?.();
  };

  return <ShareButton {...buttonProps} onShare={handleShare} />;
}
