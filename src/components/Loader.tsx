export interface LoaderProps {
  /** Loading message to display */
  message?: string;
  /** Size variant of the loader */
  size?: 'sm' | 'md' | 'lg';
  /** Theme variant */
  variant?: 'default' | 'aviation' | 'minimal';
  /** Whether to show as fullscreen overlay */
  fullscreen?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show the loading dots animation */
  showDots?: boolean;
}

/**
 * A versatile loading indicator with multiple size and style variants.
 * Can be shown inline or as a fullscreen overlay.
 */
export function Loader({
  message = 'Loading...',
  size = 'md',
  variant = 'default',
  fullscreen = false,
  className = '',
  showDots = true,
}: LoaderProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          spinner: 'w-6 h-6 border-2',
          container: 'space-y-2',
          text: 'text-sm',
        };
      case 'lg':
        return {
          spinner: 'w-12 h-12 border-4',
          container: 'space-y-6',
          text: 'text-lg',
        };
      default: // md
        return {
          spinner: 'w-8 h-8 border-3',
          container: 'space-y-4',
          text: 'text-base',
        };
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'aviation':
        return {
          spinner: 'border-slate-600 border-t-sky-500',
          text: 'text-slate-200',
          background:
            'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
        };
      case 'minimal':
        return {
          spinner: 'border-gray-200 border-t-gray-600 dark:border-gray-700 dark:border-t-gray-300',
          text: 'text-gray-600 dark:text-gray-400',
          background: 'bg-white dark:bg-slate-900',
        };
      default:
        return {
          spinner: 'border-gray-200 border-t-blue-500 dark:border-gray-700 dark:border-t-blue-400',
          text: 'text-gray-700 dark:text-gray-300',
          background: 'bg-white dark:bg-slate-900',
        };
    }
  };

  const sizeClasses = getSizeClasses();
  const variantClasses = getVariantClasses();

  const spinnerElement =
    variant === 'aviation' ? (
      <div className="relative">
        <div
          className={`${sizeClasses.spinner} ${variantClasses.spinner} rounded-full animate-spin mx-auto shadow-lg bg-gradient-to-br from-slate-800 to-slate-700`}
        ></div>
        <div
          className={`absolute inset-0 ${
            size === 'lg'
              ? 'w-16 h-16'
              : size === 'sm'
              ? 'w-8 h-8'
              : 'w-12 h-12'
          } mx-auto border border-slate-700/50 rounded-full animate-pulse`}
        ></div>
      </div>
    ) : (
      <div
        className={`${sizeClasses.spinner} ${variantClasses.spinner} rounded-full animate-spin mx-auto`}
      ></div>
    );

  const dotsElement = showDots && (
    <div className="flex items-center justify-center space-x-2 mt-2">
      <div
        className={`w-1 h-1 ${
          variant === 'aviation' ? 'bg-slate-400' : 'bg-gray-400 dark:bg-gray-500'
        } rounded-full opacity-60`}
      ></div>
      <div
        className={`w-1 h-1 ${
          variant === 'aviation' ? 'bg-slate-400' : 'bg-gray-400 dark:bg-gray-500'
        } rounded-full animate-pulse delay-200`}
      ></div>
      <div
        className={`w-1 h-1 ${
          variant === 'aviation' ? 'bg-slate-400' : 'bg-gray-400 dark:bg-gray-500'
        } rounded-full animate-pulse delay-400`}
      ></div>
    </div>
  );

  const content = (
    <div className={`text-center ${sizeClasses.container}`}>
      {spinnerElement}
      {message && (
        <p
          className={`${sizeClasses.text} ${variantClasses.text} font-light tracking-wide m-0`}
        >
          {message}
        </p>
      )}
      {dotsElement}
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${variantClasses.background} ${className}`}
      >
        {content}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      {content}
    </div>
  );
}

/** Fullscreen loading overlay */
export const FullScreenLoader = (props: Omit<LoaderProps, 'fullscreen'>) => (
  <Loader {...props} fullscreen={true} />
);

/** Aviation-themed loader (dark with sky-blue accents) */
export const AviationLoader = (props: Omit<LoaderProps, 'variant'>) => (
  <Loader {...props} variant="aviation" />
);

/** Minimal gray-scale loader */
export const MinimalLoader = (props: Omit<LoaderProps, 'variant'>) => (
  <Loader {...props} variant="minimal" />
);

/** Small inline loader */
export const SmallLoader = (props: Omit<LoaderProps, 'size'>) => (
  <Loader {...props} size="sm" />
);
