import { Tab } from "../types/Tab";
export interface TabNavigationProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    className?: string;
    variant?: "default" | "mobile";
}
/**
 * Reusable tab navigation component
 * Supports badges, icons, and different variants for desktop/mobile
 */
export declare function TabNavigation({ tabs, activeTab, onTabChange, className, variant, }: TabNavigationProps): import("react/jsx-runtime").JSX.Element;
