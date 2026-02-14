import React from "react";
import { OptionsMenuItem } from '../types/OptionsMenuItem';
export interface OptionsMenuProps {
    items: OptionsMenuItem[];
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}
export declare const OptionsMenu: React.FC<OptionsMenuProps>;
