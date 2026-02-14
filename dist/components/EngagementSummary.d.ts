import { ReactionUser } from '../types/ReactionUser';
export interface EngagementSummaryProps {
    /** Total number of reactions/kudos */
    totalReactions: number;
    /** Total number of comments */
    totalComments: number;
    /** Whether the current user has reacted */
    userReacted?: boolean;
    /** Users who reacted (for avatar stack) */
    reactionUsers?: ReactionUser[];
    /** Reaction label (e.g., "kudos", "likes", "reactions") */
    reactionLabel?: string;
    /** Comment label (e.g., "comment", "reply") */
    commentLabel?: string;
    /** Additional class names */
    className?: string;
}
export declare function EngagementSummary({ totalReactions, totalComments, userReacted, reactionUsers, reactionLabel, commentLabel, className, }: EngagementSummaryProps): import("react/jsx-runtime").JSX.Element | null;
