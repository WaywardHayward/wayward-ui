export interface TextRevealProps {
    text: string;
    className?: string;
    revealClassName?: string;
}
/**
 * Text that reveals on scroll
 * Creates a beautiful blur-to-clear effect as user scrolls
 */
export declare function TextReveal({ text, className, revealClassName }: TextRevealProps): import("react/jsx-runtime").JSX.Element;
