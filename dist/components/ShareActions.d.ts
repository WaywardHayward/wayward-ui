import { ShareButtonProps } from './ShareButton';
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
export declare function ShareActions({ url, title, text, onSuccess, onFallback, buttonProps, }: ShareActionsProps): import("react/jsx-runtime").JSX.Element;
