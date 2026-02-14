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
export declare function AutocompleteDropdown({ options, selectedIndex, onSelect, listRef, }: AutocompleteDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
