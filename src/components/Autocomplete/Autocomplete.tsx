import React, { useEffect, useRef, useState } from "react";
import { AutocompleteOption } from './types';
import { AutocompleteSelectedValue } from './AutocompleteSelectedValue';
import { AutocompleteDropdown } from './AutocompleteDropdown';
import { AutocompleteInput } from './AutocompleteInput';

export interface AutocompleteProps {
  /** Label text above the input */
  label: string;
  /** Placeholder text */
  placeholder?: string;
  /** Currently selected option */
  value?: AutocompleteOption;
  /** Async search function - called when user types */
  onSearch: (term: string) => Promise<AutocompleteOption[]>;
  /** Called when user selects an option */
  onSelect: (option: AutocompleteOption) => void;
  /** Called when selection is cleared */
  onClear?: () => void;
  /** Error message to display */
  error?: string;
  /** Disable the input */
  disabled?: boolean;
  /** Minimum characters before search triggers */
  minSearchLength?: number;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Additional CSS classes */
  className?: string;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  placeholder = "Type to search...",
  value,
  onSearch,
  onSelect,
  onClear,
  error,
  disabled = false,
  minSearchLength = 2,
  debounceMs = 300,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<AutocompleteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null!);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleSearch = async (term: string) => {
    if (term.length < minSearchLength) {
      setOptions([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const results = await onSearch(term);
      setOptions(results);
    } catch (err) {
      console.error("Search error:", err);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = (term: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => handleSearch(term), debounceMs);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setSelectedIndex(-1);

    if (term.length >= minSearchLength) {
      setLoading(true);
      debouncedSearch(term);
    } else {
      setOptions([]);
      setLoading(false);
    }
  };

  const handleOptionSelect = (option: AutocompleteOption) => {
    onSelect(option);
    setSearchTerm("");
    setIsOpen(false);
    setOptions([]);
    setSelectedIndex(-1);
  };

  const handleClear = () => {
    setSearchTerm("");
    setIsOpen(false);
    setOptions([]);
    setSelectedIndex(-1);
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || options.length === 0) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
        if (searchTerm.length >= minSearchLength) handleSearch(searchTerm);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) handleOptionSelect(options[selectedIndex]);
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const showDropdown = isOpen && options.length > 0;
  const showNoResults = isOpen && !loading && searchTerm.length >= minSearchLength && options.length === 0;

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        {value && !isOpen ? (
          <AutocompleteSelectedValue
            value={value}
            disabled={disabled}
            onClear={handleClear}
            onOpen={() => setIsOpen(true)}
          />
        ) : (
          <AutocompleteInput
            ref={inputRef}
            searchTerm={searchTerm}
            placeholder={placeholder}
            disabled={disabled}
            error={error}
            loading={loading}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
          />
        )}

        {showDropdown && (
          <AutocompleteDropdown
            options={options}
            selectedIndex={selectedIndex}
            onSelect={handleOptionSelect}
            listRef={listRef}
          />
        )}

        {showNoResults && (
          <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-3">
            <div className="text-sm text-gray-500 dark:text-gray-400">No results found</div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
