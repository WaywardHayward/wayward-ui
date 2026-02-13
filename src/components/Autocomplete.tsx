import React, { useEffect, useRef, useState } from "react";

export interface AutocompleteOption {
  id: string;
  label: string;
  subtitle?: string;
}

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
  const listRef = useRef<HTMLUListElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Clear debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  // Handle search with debouncing
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
    } catch (error) {
      console.error("Search error:", error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search
  const debouncedSearch = (term: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      handleSearch(term);
    }, debounceMs);
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
    if (onClear) {
      onClear();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || options.length === 0) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true);
        if (searchTerm.length >= minSearchLength) {
          handleSearch(searchTerm);
        }
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
        if (selectedIndex >= 0) {
          handleOptionSelect(options[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        {/* Selected value display */}
        {value && !isOpen ? (
          <div className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 min-h-[42px]">
            <div className="flex-1">
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {value.label}
              </div>
              {value.subtitle && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {value.subtitle}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                disabled={disabled}
                title="Clear selection"
                aria-label="Clear selection"
              >
                ×
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                disabled={disabled}
                title="Open dropdown"
                aria-label="Open dropdown"
              >
                ▼
              </button>
            </div>
          </div>
        ) : (
          /* Search input */
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
              placeholder={placeholder}
              disabled={disabled}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${
                error
                  ? "border-red-300 dark:border-red-700"
                  : "border-gray-300 dark:border-gray-600"
              } ${
                disabled
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-900"
              } text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`}
            />
            {loading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 dark:border-blue-400"></div>
              </div>
            )}
          </div>
        )}

        {/* Dropdown options */}
        {isOpen && options.length > 0 && (
          <ul
            ref={listRef}
            className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option, index) => (
              <li
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className={`px-3 py-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                  index === selectedIndex
                    ? "bg-blue-100 dark:bg-blue-900/40"
                    : ""
                }`}
              >
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {option.label}
                </div>
                {option.subtitle && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {option.subtitle}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* No results message */}
        {isOpen &&
          !loading &&
          searchTerm.length >= minSearchLength &&
          options.length === 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg p-3">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                No results found
              </div>
            </div>
          )}
      </div>

      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
