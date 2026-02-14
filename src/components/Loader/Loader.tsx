import { LoaderProps, sizeClasses, variantClasses } from './types';

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
  const sizeCfg = sizeClasses[size];
  const variantCfg = variantClasses[variant];

  const spinnerElement = variant === 'aviation' ? (
    <div className="relative">
      <div
        className={`${sizeCfg.spinner} ${variantCfg.spinner} rounded-full animate-spin mx-auto shadow-lg bg-gradient-to-br from-slate-800 to-slate-700`}
      />
      <div
        className={`absolute inset-0 ${
          size === 'lg' ? 'w-16 h-16' : size === 'sm' ? 'w-8 h-8' : 'w-12 h-12'
        } mx-auto border border-slate-700/50 rounded-full animate-pulse`}
      />
    </div>
  ) : (
    <div
      className={`${sizeCfg.spinner} ${variantCfg.spinner} rounded-full animate-spin mx-auto`}
    />
  );

  const dotColor = variant === 'aviation' ? 'bg-slate-400' : 'bg-gray-400 dark:bg-gray-500';

  const dotsElement = showDots && (
    <div className="flex items-center justify-center space-x-2 mt-2">
      <div className={`w-1 h-1 ${dotColor} rounded-full opacity-60`} />
      <div className={`w-1 h-1 ${dotColor} rounded-full animate-pulse delay-200`} />
      <div className={`w-1 h-1 ${dotColor} rounded-full animate-pulse delay-400`} />
    </div>
  );

  const content = (
    <div className={`text-center ${sizeCfg.container}`}>
      {spinnerElement}
      {message && (
        <p className={`${sizeCfg.text} ${variantCfg.text} font-light tracking-wide m-0`}>
          {message}
        </p>
      )}
      {dotsElement}
    </div>
  );

  if (fullscreen) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${variantCfg.background} ${className}`}>
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
