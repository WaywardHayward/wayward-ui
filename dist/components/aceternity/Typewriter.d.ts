export interface TypewriterProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}
/**
 * Animated typewriter effect
 * Types out words one by one with a blinking cursor
 */
export declare function Typewriter({ words, className, cursorClassName }: TypewriterProps): import("react/jsx-runtime").JSX.Element;
