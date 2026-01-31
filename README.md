# Wayward UI

Shared React + Tailwind component library for WaywardHayward projects.

## Installation

```bash
npm install @waywardhayward/ui
# or
pnpm add @waywardhayward/ui
```

## Usage

```tsx
import { Button, Card, H1, Container } from '@waywardhayward/ui';
import '@waywardhayward/ui/styles';

function App() {
  return (
    <Container>
      <Card>
        <H1>Welcome</H1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </Container>
  );
}
```

## Components

### Layout
- `Container` - Responsive container with max-width
- `Flex` - Flexbox layout
- `Grid` - CSS Grid layout
- `Section` - Semantic section wrapper

### UI
- `Button` - Primary, secondary, ghost variants
- `Card` - Container with shadow and padding
- `Avatar` - User avatar with fallback initials
- `Badge` - Status badges
- `Spinner` / `Loading` - Loading indicators

### Typography
- `H1`, `H2`, `H3`, `H4` - Headings
- `Text` - Body text
- `Lead` - Lead paragraph
- `Muted` - Muted text
- `Small` - Small text

### Forms
- `Input` - Text input
- `TextArea` - Multi-line text
- `Select` - Dropdown
- `Checkbox` - Checkbox input
- `Label` - Form label
- `FormField` - Input with label and error

## Development

```bash
# Install dependencies
pnpm install

# Build library
pnpm build

# Development mode
pnpm dev
```

## Projects Using Wayward UI

- [Electra](https://github.com/WaywardHayward/Electra) - Flight tracking
- [MiniFig.AI](https://github.com/WaywardHayward/minifig.ai) - LEGO minifigure generator
- [House Match](https://github.com/WaywardHayward/house-match) - Property recommendation engine

## License

MIT © WaywardHayward
