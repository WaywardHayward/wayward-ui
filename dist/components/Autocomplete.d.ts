import React from "react";
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
export declare const Autocomplete: React.FC<AutocompleteProps>;
