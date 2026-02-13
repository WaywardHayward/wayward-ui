import { useState, useEffect } from "react";

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

export function CookieConsent({
  storageKey = "cookie-consent",
  privacyUrl = "/privacy",
  message = "We use cookies to improve your experience and for analytics purposes.",
  learnMoreText = "Learn More",
  acceptText = "Accept Cookies",
  onAccept,
  onLearnMore,
  className = "",
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem(storageKey);
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleAccept = () => {
    localStorage.setItem(storageKey, "accepted");
    setIsVisible(false);
    onAccept?.();
  };

  const handleLearnMore = () => {
    localStorage.setItem(storageKey, "learn-more");
    setIsVisible(false);
    onLearnMore?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg z-50 ${className}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {message}{" "}
              <a 
                href={privacyUrl}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
                onClick={handleLearnMore}
              >
                Learn more about our privacy practices
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={privacyUrl}
              onClick={handleLearnMore}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-center"
            >
              {learnMoreText}
            </a>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              {acceptText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
