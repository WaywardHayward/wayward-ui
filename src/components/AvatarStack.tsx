import React from "react";
import { AvatarStackUser } from '../types/AvatarStackUser';

export interface AvatarStackProps {
  users: AvatarStackUser[];
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

const textSizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export const AvatarStack: React.FC<AvatarStackProps> = ({
  users,
  maxVisible = 3,
  size = "sm",
  className = "",
}) => {
  if (users.length === 0) return null;

  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;

  return (
    <div className={`flex -space-x-1 ${className}`}>
      {visibleUsers.map((user) => (
        <div
          key={user.id}
          className={`${sizeClasses[size]} rounded-full border-2 border-white dark:border-slate-800 overflow-hidden`}
          title={user.name}
        >
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full bg-blue-500 flex items-center justify-center ${textSizeClasses[size]} text-white font-medium`}>
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={`${sizeClasses[size]} rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center`}
        >
          <span className={`${textSizeClasses[size]} font-medium text-slate-600 dark:text-slate-300`}>
            +{remainingCount}
          </span>
        </div>
      )}
    </div>
  );
};
