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
export declare function AutocompleteSelectedValue({ value, disabled, onClear, onOpen, }: AutocompleteSelectedValueProps): import("react/jsx-runtime").JSX.Element;
export {};
