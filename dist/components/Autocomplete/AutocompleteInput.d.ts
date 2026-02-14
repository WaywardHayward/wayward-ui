import React from 'react';
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
export declare const AutocompleteInput: React.ForwardRefExoticComponent<AutocompleteInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
