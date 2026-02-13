export interface CookieConsentProps {
    /** Storage key for consent state */
    storageKey?: string;
    /** Privacy policy URL */
    privacyUrl?: string;
    /** Custom message text */
    message?: string;
    /** Learn more link text */
    learnMoreText?: string;
    /** Accept button text */
    acceptText?: string;
    /** Callback when cookies are accepted */
    onAccept?: () => void;
    /** Callback when learn more is clicked */
    onLearnMore?: () => void;
    /** Additional class names */
    className?: string;
}
export declare function CookieConsent({ storageKey, privacyUrl, message, learnMoreText, acceptText, onAccept, onLearnMore, className, }: CookieConsentProps): import("react/jsx-runtime").JSX.Element | null;
