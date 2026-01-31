import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, Text, Lead, Muted, Small } from './Typography';

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </div>
  ),
};

export const BodyText: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Lead>
        This is a lead paragraph. It's larger and more prominent than regular body text.
      </Lead>
      <Text>
        This is regular body text. It's used for most content and is easy to read.
      </Text>
      <Muted>
        This is muted text. It's used for less important information or metadata.
      </Muted>
      <Small>
        This is small text. It's used for fine print or captions.
      </Small>
    </div>
  ),
};

export const AllTogether: StoryObj = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <H1>Welcome to Wayward UI</H1>
      <Lead>
        A modern, accessible component library built with React and Tailwind CSS.
      </Lead>
      <H2>Getting Started</H2>
      <Text>
        Install the package and start building beautiful interfaces with our
        pre-built components.
      </Text>
      <H3>Features</H3>
      <Text>
        Fully responsive, accessible, and customizable components that work
        seamlessly together.
      </Text>
      <Muted>Last updated: January 2026</Muted>
    </div>
  ),
};
