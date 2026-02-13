import React from "react";
export interface OptionsMenuItem {
    label: string;
    onClick: () => void;
    variant?: "default" | "danger";
}
export interface OptionsMenuProps {
    items: OptionsMenuItem[];
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}
export declare const OptionsMenu: React.FC<OptionsMenuProps>;
