import React from "react";

export interface SkeletonProps {
  variant?: "card" | "list" | "profile" | "custom";
  count?: number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "card",
  count = 3,
  className = "",
}) => {
  const renderCard = () => (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
        </div>
      </div>
      <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
      <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
    </div>
  );

  const renderList = () => (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 animate-pulse">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-4"></div>
        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
      </div>
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case "card":
        return renderCard();
      case "list":
        return renderList();
      case "profile":
        return renderProfile();
      default:
        return renderCard();
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderVariant()}</div>
      ))}
    </div>
  );
};
