import React, { forwardRef } from 'react';

interface AutocompleteInputProps {
  searchTerm: string;
  placeholder: string;
  disabled: boolean;
  error?: string;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onFocus: () => void;
}

/**
 * Search input field for Autocomplete
 */
export const AutocompleteInput = forwardRef<HTMLInputElement, AutocompleteInputProps>(({
  searchTerm,
  placeholder,
  disabled,
  error,
  loading,
  onChange,
  onKeyDown,
  onFocus,
}, ref) => {
  const borderClass = error
    ? "border-red-300 dark:border-red-700"
    : "border-gray-300 dark:border-gray-600";

  const bgClass = disabled
    ? "bg-gray-100 dark:bg-gray-800"
    : "bg-white dark:bg-gray-900";

  return (
    <div className="relative">
      <input
        ref={ref}
        type="text"
        value={searchTerm}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 ${borderClass} ${bgClass} text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`}
      />
      {loading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 dark:border-blue-400" />
        </div>
      )}
    </div>
  );
});

AutocompleteInput.displayName = 'AutocompleteInput';
