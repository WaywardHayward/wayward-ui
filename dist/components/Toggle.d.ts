import React from "react";
export interface ToggleProps {
    id?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    description?: string;
    className?: string;
}
/**
 * Reusable toggle switch component.
 * Follows accessibility best practices with proper ARIA attributes.
 */
export declare const Toggle: React.FC<ToggleProps>;
