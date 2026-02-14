import { Loader } from './Loader';
import { LoaderProps } from './types';

/** Minimal gray-scale loader */
export const MinimalLoader = (props: Omit<LoaderProps, 'variant'>) => (
  <Loader {...props} variant="minimal" />
);
