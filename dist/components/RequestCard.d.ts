export interface RequestCardAction {
    label: string;
    onClick: () => void;
    variant: "approve" | "reject" | "cancel";
    disabled?: boolean;
}
export interface RequestCardProps {
    /** Unique identifier */
    id: string;
    /** User's display name */
    userName: string;
    /** User's email */
    userEmail: string;
    /** Optional message from the user */
    message?: string;
    /** When the request was made */
    requestedAt: Date;
    /** When the request was responded to */
    respondedAt?: Date;
    /** When the request expires */
    expiresAt?: Date;
    /** Current status */
    status: "pending" | "approved" | "rejected" | "expired";
    /** Action buttons to display */
    actions?: RequestCardAction[];
    /** Whether an action is being processed */
    processing?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Card variant */
    variant?: "default" | "glass";
}
/**
 * Request card component for displaying action requests.
 * Useful for follow requests, access requests, invitations, etc.
 */
export declare function RequestCard({ userName, userEmail, message, requestedAt, respondedAt, expiresAt, status, actions, processing, className, variant, }: RequestCardProps): import("react/jsx-runtime").JSX.Element;
export default RequestCard;
