import { Loader } from './Loader';
import { LoaderProps } from './types';

/** Small inline loader */
export const SmallLoader = (props: Omit<LoaderProps, 'size'>) => (
  <Loader {...props} size="sm" />
);
