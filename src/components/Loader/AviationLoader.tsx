import { Loader } from './Loader';
import { LoaderProps } from './types';

/** Aviation-themed loader (dark with sky-blue accents) */
export const AviationLoader = (props: Omit<LoaderProps, 'variant'>) => (
  <Loader {...props} variant="aviation" />
);
