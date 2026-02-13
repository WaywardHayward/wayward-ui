import { FullScreenLoader, LoaderProps } from './Loader';

export interface LoadingScreenProps extends Omit<LoaderProps, 'fullScreen'> {
  /** Brand or app name to display */
  brandName?: string;
}

/**
 * LoadingScreen - A full-screen loading state for app initialization
 * 
 * Uses the FullScreenLoader internally with sensible defaults.
 * Perfect for initial app loads, route transitions, or authentication states.
 */
export function LoadingScreen({ 
  brandName = 'Loading',
  variant = 'default',
  size = 'lg',
  showDots = true,
  ...props 
}: LoadingScreenProps) {
  return (
    <FullScreenLoader
      message={brandName}
      variant={variant}
      size={size}
      showDots={showDots}
      {...props}
    />
  );
}
