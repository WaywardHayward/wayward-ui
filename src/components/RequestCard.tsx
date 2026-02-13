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
export function RequestCard({
  userName,
  userEmail,
  message,
  requestedAt,
  respondedAt,
  expiresAt,
  status,
  actions = [],
  processing = false,
  className = "",
  variant = "default",
}: RequestCardProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = () => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    
    switch (status) {
      case "pending":
        return (
          <span className={`${baseClasses} bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200`}>
            Pending
          </span>
        );
      case "approved":
        return (
          <span className={`${baseClasses} bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200`}>
            Approved
          </span>
        );
      case "rejected":
        return (
          <span className={`${baseClasses} bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200`}>
            Rejected
          </span>
        );
      case "expired":
        return (
          <span className={`${baseClasses} bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300`}>
            Expired
          </span>
        );
    }
  };

  const getActionClasses = (actionVariant: string) => {
    const baseClasses = "flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed";
    
    switch (actionVariant) {
      case "approve":
        return `${baseClasses} bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25`;
      case "reject":
        return `${baseClasses} bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25`;
      case "cancel":
        return `${baseClasses} bg-slate-600 hover:bg-slate-700 text-white shadow-lg shadow-slate-500/25`;
      default:
        return `${baseClasses} bg-slate-600 hover:bg-slate-700 text-white`;
    }
  };

  const variantClasses = {
    default: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600",
    glass: "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg",
  };

  return (
    <div className={`rounded-xl p-4 ${variantClasses[variant]} ${className}`}>
      {/* Header: User info and status */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-slate-900 dark:text-white truncate">
            {userName}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
            {userEmail}
          </p>
        </div>
        {getStatusBadge()}
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Requested: {formatDate(requestedAt)}
        </div>
        
        {message && (
          <div className="text-sm text-slate-700 dark:text-slate-300 italic bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
            &ldquo;{message}&rdquo;
          </div>
        )}
        
        {respondedAt && (
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Responded: {formatDate(respondedAt)}
          </div>
        )}
        
        {expiresAt && status === "pending" && (
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Expires: {formatDate(expiresAt)}
          </div>
        )}
      </div>

      {/* Actions */}
      {actions.length > 0 && status === "pending" && (
        <div className={`flex ${actions.length === 1 ? "" : "gap-3"}`}>
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              disabled={action.disabled || processing}
              className={getActionClasses(action.variant)}
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                action.label
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default RequestCard;
