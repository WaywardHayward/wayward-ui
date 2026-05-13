import { ReactNode, CSSProperties } from 'react';

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

const TOKEN_TEXT_SECONDARY = "var(--text-secondary, rgba(226,232,240,0.9))";
const TOKEN_TEXT_META = "var(--text-meta, rgba(148,163,184,1))";
const TOKEN_ACCENT_WARM = "var(--accent-warm, #2563eb)";

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

type ShareVariant = NonNullable<ShareButtonProps['variant']>;

const variantClasses: Record<ShareVariant, string> = {
  default: 'hover:bg-white/5',
  glass: 'backdrop-blur-sm hover:bg-white/10',
  cockpit: 'border border-transparent hover:border-white/20 hover:bg-white/5',
  minimal: '',
};

function getVariantStyle(variant: ShareVariant): CSSProperties {
  switch (variant) {
    case 'default':
    case 'glass':
      return { color: TOKEN_TEXT_SECONDARY };
    case 'cockpit':
      return { color: TOKEN_ACCENT_WARM };
    case 'minimal':
      return { color: TOKEN_TEXT_META };
    default:
      return {};
  }
}

function DefaultIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
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
}

/**
 * ShareButton - A versatile share action button
 *
 * Can be used as icon-only or with label.
 * Supports Track D theme tokens with backwards-compatible fallbacks.
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
  return (
    <button
      onClick={onShare}
      disabled={disabled}
      style={getVariantStyle(variant)}
      className={`
        inline-flex items-center justify-center
        rounded-lg transition-all
        disabled:opacity-50 disabled:cursor-not-allowed
        ${buttonSizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {icon || <DefaultIcon className={sizeClasses[size]} />}
      {showLabel && <span>{label}</span>}
    </button>
  );
}
