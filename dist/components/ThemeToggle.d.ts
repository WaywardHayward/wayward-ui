export type ThemePreference = 'light' | 'dark' | 'system';
export interface ThemeToggleProps {
    /** Current theme preference */
    themePreference: ThemePreference;
    /** Resolved theme (what's actually showing) */
    resolvedTheme: 'light' | 'dark';
    /** Callback when theme changes */
    onThemeChange: (theme: ThemePreference) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * A three-way theme toggle: light → dark → system → light
 *
 * Shows appropriate icon based on current state:
 * - Sun for light mode
 * - Moon for dark mode
 * - Monitor for system mode
 */
export declare function ThemeToggle({ themePreference, resolvedTheme, onThemeChange, className, }: ThemeToggleProps): import("react/jsx-runtime").JSX.Element;
