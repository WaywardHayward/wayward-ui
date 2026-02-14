import { AutocompleteOption } from './types';

interface AutocompleteDropdownProps {
  options: AutocompleteOption[];
  selectedIndex: number;
  onSelect: (option: AutocompleteOption) => void;
  listRef: React.RefObject<HTMLUListElement>;
}

/**
 * Dropdown list for Autocomplete options
 */
export function AutocompleteDropdown({
  options,
  selectedIndex,
  onSelect,
  listRef,
}: AutocompleteDropdownProps) {
  return (
    <ul
      ref={listRef}
      className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto"
    >
      {options.map((option, index) => (
        <li
          key={option.id}
          onClick={() => onSelect(option)}
          className={`px-3 py-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
            index === selectedIndex ? "bg-blue-100 dark:bg-blue-900/40" : ""
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
  );
}
