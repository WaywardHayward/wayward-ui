import { Loader } from './Loader';
import { LoaderProps } from './types';

/** Fullscreen loading overlay */
export const FullScreenLoader = (props: Omit<LoaderProps, 'fullscreen'>) => (
  <Loader {...props} fullscreen={true} />
);
