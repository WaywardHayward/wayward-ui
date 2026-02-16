export interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}
/**
 * Button with animated glowing border effect
 * Perfect for CTAs and primary actions
 */
export declare function GlowingButton({ children, className, containerClassName, ...props }: GlowingButtonProps): import("react/jsx-runtime").JSX.Element;
