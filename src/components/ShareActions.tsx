import { ShareButton, ShareButtonProps } from './ShareButton';

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
        await navigator.share({ title, text, url });
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
