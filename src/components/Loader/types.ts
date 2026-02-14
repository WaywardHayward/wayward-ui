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

export const sizeClasses = {
  sm: {
    spinner: 'w-6 h-6 border-2',
    container: 'space-y-2',
    text: 'text-sm',
  },
  md: {
    spinner: 'w-8 h-8 border-3',
    container: 'space-y-4',
    text: 'text-base',
  },
  lg: {
    spinner: 'w-12 h-12 border-4',
    container: 'space-y-6',
    text: 'text-lg',
  },
};

export const variantClasses = {
  default: {
    spinner: 'border-gray-200 border-t-blue-500 dark:border-gray-700 dark:border-t-blue-400',
    text: 'text-gray-700 dark:text-gray-300',
    background: 'bg-white dark:bg-slate-900',
  },
  aviation: {
    spinner: 'border-slate-600 border-t-sky-500',
    text: 'text-slate-200',
    background: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
  },
  minimal: {
    spinner: 'border-gray-200 border-t-gray-600 dark:border-gray-700 dark:border-t-gray-300',
    text: 'text-gray-600 dark:text-gray-400',
    background: 'bg-white dark:bg-slate-900',
  },
};
