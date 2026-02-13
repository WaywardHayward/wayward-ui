export interface ReactionUser {
  name: string;
  avatar?: string;
}

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

export function EngagementSummary({
  totalReactions,
  totalComments,
  userReacted = false,
  reactionUsers = [],
  reactionLabel = "kudos",
  commentLabel = "comment",
  className = "",
}: EngagementSummaryProps) {
  if (totalReactions === 0 && totalComments === 0) {
    return null;
  }

  const getEngagementText = () => {
    const parts: string[] = [];

    if (totalReactions > 0) {
      if (userReacted) {
        if (totalReactions === 1) {
          parts.push(`You gave ${reactionLabel}`);
        } else {
          parts.push(
            `You and ${totalReactions - 1} ${
              totalReactions === 2 ? "other" : "others"
            } gave ${reactionLabel}`
          );
        }
      } else {
        parts.push(
          `${totalReactions} ${
            totalReactions === 1 ? "person" : "people"
          } gave ${reactionLabel}`
        );
      }
    }

    if (totalComments > 0) {
      const label = totalComments === 1 ? commentLabel : `${commentLabel}s`;
      parts.push(`${totalComments} ${label}`);
    }

    return parts.join(" • ");
  };

  return (
    <div className={`px-6 py-3 flex items-center space-x-3 ${className}`}>
      {/* Profile pictures of people who reacted - Strava style */}
      {reactionUsers.length > 0 && (
        <div className="flex -space-x-1">
          {reactionUsers.slice(0, 3).map((user, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          ))}
          {reactionUsers.length > 3 && (
            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                +{reactionUsers.length - 3}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Engagement text */}
      <p className="text-sm text-slate-600 dark:text-slate-400 flex-1">
        {getEngagementText()}
      </p>
    </div>
  );
}
