import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Container } from '../Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <div>Test content</div>
      </Container>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default size classes', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>
    );

    const containerEl = container.firstChild as HTMLElement;
    expect(containerEl).toHaveClass('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
  });

  it('applies different size variants', () => {
    const { container: smallContainer } = render(
      <Container size="sm">
        <div>Small</div>
      </Container>
    );

    const { container: mediumContainer } = render(
      <Container size="md">
        <div>Medium</div>
      </Container>
    );

    const { container: largeContainer } = render(
      <Container size="lg">
        <div>Large</div>
      </Container>
    );

    expect(smallContainer.firstChild).toHaveClass('max-w-sm');
    expect(mediumContainer.firstChild).toHaveClass('max-w-4xl');
    expect(largeContainer.firstChild).toHaveClass('max-w-6xl');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Content</div>
      </Container>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with correct HTML tag', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>
    );

    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
