import { LoaderProps } from './Loader';
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
export declare function LoadingScreen({ brandName, variant, size, showDots, ...props }: LoadingScreenProps): import("react/jsx-runtime").JSX.Element;
