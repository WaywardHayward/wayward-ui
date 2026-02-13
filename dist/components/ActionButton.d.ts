import React from "react";
export interface ActionButtonProps {
    /** Icon element to display */
    icon: React.ReactNode;
    /** Accessible label for the button */
    label: string;
    /** Count to display below the icon */
    count?: number | string;
    /** Whether the button is in active/selected state */
    active?: boolean;
    /** Click handler */
    onClick: () => void;
    /** Active color variant */
    activeColor?: 'red' | 'blue' | 'green' | 'yellow' | 'purple';
    /** Additional class names */
    className?: string;
}
export declare function ActionButton({ icon, label, count, active, onClick, activeColor, className, }: ActionButtonProps): import("react/jsx-runtime").JSX.Element;
