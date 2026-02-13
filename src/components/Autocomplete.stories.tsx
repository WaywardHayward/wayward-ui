import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Autocomplete, AutocompleteOption } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Forms/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

// Mock data for search
const mockUsers: AutocompleteOption[] = [
  { id: '1', label: 'John Doe', subtitle: 'john@example.com' },
  { id: '2', label: 'Jane Smith', subtitle: 'jane@example.com' },
  { id: '3', label: 'Bob Johnson', subtitle: 'bob@example.com' },
  { id: '4', label: 'Alice Williams', subtitle: 'alice@example.com' },
  { id: '5', label: 'Charlie Brown', subtitle: 'charlie@example.com' },
];

const mockSearch = async (term: string): Promise<AutocompleteOption[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockUsers.filter(
    user => 
      user.label.toLowerCase().includes(term.toLowerCase()) ||
      user.subtitle?.toLowerCase().includes(term.toLowerCase())
  );
};

// Interactive wrapper component
const InteractiveAutocomplete = () => {
  const [selected, setSelected] = useState<AutocompleteOption | undefined>();
  
  return (
    <Autocomplete
      label="Search Users"
      placeholder="Type to search users..."
      value={selected}
      onSearch={mockSearch}
      onSelect={setSelected}
      onClear={() => setSelected(undefined)}
    />
  );
};

export const Default: Story = {
  render: () => <InteractiveAutocomplete />,
};

export const WithPreselectedValue: Story = {
  args: {
    label: 'Assigned User',
    value: { id: '1', label: 'John Doe', subtitle: 'john@example.com' },
    onSearch: mockSearch,
    onSelect: () => {},
    onClear: () => {},
  },
};

export const WithError: Story = {
  args: {
    label: 'Search Users',
    placeholder: 'Type to search...',
    error: 'Please select a user',
    onSearch: mockSearch,
    onSelect: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Search Users',
    placeholder: 'Search is disabled',
    disabled: true,
    onSearch: mockSearch,
    onSelect: () => {},
  },
};

export const CustomMinLength: Story = {
  args: {
    label: 'Search (3+ characters)',
    placeholder: 'Enter at least 3 characters...',
    minSearchLength: 3,
    onSearch: mockSearch,
    onSelect: () => {},
  },
};

export const NoSubtitles: Story = {
  args: {
    label: 'Search Countries',
    placeholder: 'Type to search countries...',
    onSearch: async (term) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      const countries = [
        { id: '1', label: 'United States' },
        { id: '2', label: 'United Kingdom' },
        { id: '3', label: 'Canada' },
        { id: '4', label: 'Australia' },
        { id: '5', label: 'Germany' },
      ];
      return countries.filter(c => 
        c.label.toLowerCase().includes(term.toLowerCase())
      );
    },
    onSelect: () => {},
  },
};
