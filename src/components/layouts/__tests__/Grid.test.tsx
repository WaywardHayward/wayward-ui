import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Grid } from '../Grid';

describe('Grid', () => {
  it('renders children correctly', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies default grid classes', () => {
    const { container } = render(
      <Grid>
        <div>Content</div>
      </Grid>
    );

    const gridEl = container.firstChild as HTMLElement;
    expect(gridEl).toHaveClass('grid', 'grid-cols-1', 'gap-6');
  });

  it('applies custom columns configuration', () => {
    const { container } = render(
      <Grid cols={3}>
        <div>Content</div>
      </Grid>
    );

    const gridEl = container.firstChild as HTMLElement;
    expect(gridEl).toHaveClass('grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');
  });

  it('applies different gap sizes', () => {
    const { container: gapSm } = render(
      <Grid gap="sm">
        <div>Content</div>
      </Grid>
    );

    const { container: gapLg } = render(
      <Grid gap="lg">
        <div>Content</div>
      </Grid>
    );

    expect(gapSm.firstChild).toHaveClass('gap-4');
    expect(gapLg.firstChild).toHaveClass('gap-8');
  });

  it('applies non-responsive grid when responsive=false', () => {
    const { container } = render(
      <Grid cols={4} responsive={false}>
        <div>Content</div>
      </Grid>
    );

    const gridEl = container.firstChild as HTMLElement;
    expect(gridEl).toHaveClass('grid-cols-4');
    expect(gridEl).not.toHaveClass('sm:grid-cols-2');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Grid className="custom-grid">
        <div>Content</div>
      </Grid>
    );

    expect(container.firstChild).toHaveClass('custom-grid');
  });
});
