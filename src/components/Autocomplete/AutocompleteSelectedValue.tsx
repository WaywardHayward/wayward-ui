import { AutocompleteOption } from './types';

interface AutocompleteSelectedValueProps {
  value: AutocompleteOption;
  disabled: boolean;
  onClear: () => void;
  onOpen: () => void;
}

/**
 * Displays the currently selected value in the Autocomplete
 */
export function AutocompleteSelectedValue({
  value,
  disabled,
  onClear,
  onOpen,
}: AutocompleteSelectedValueProps) {
  return (
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
          onClick={onClear}
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1"
          disabled={disabled}
          title="Clear selection"
          aria-label="Clear selection"
        >
          ×
        </button>
        <button
          type="button"
          onClick={onOpen}
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1"
          disabled={disabled}
          title="Open dropdown"
          aria-label="Open dropdown"
        >
          ▼
        </button>
      </div>
    </div>
  );
}
