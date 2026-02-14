import { Achievement } from '../types/Achievement';

export interface AchievementsPanelProps {
  /** List of achievements to display */
  achievements: Achievement[];
  /** Panel title */
  title?: string;
  /** Show the view all button */
  showViewAll?: boolean;
  /** Callback when view all is clicked */
  onViewAll?: () => void;
  /** Additional class names */
  className?: string;
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "legendary":
      return "from-yellow-400 to-orange-500";
    case "epic":
      return "from-purple-400 to-pink-500";
    case "rare":
      return "from-blue-400 to-cyan-500";
    default:
      return "from-gray-400 to-gray-600";
  }
};

const getRarityBorder = (rarity: string) => {
  switch (rarity) {
    case "legendary":
      return "border-yellow-300";
    case "epic":
      return "border-purple-300";
    case "rare":
      return "border-blue-300";
    default:
      return "border-gray-300";
  }
};

export function AchievementsPanel({
  achievements,
  title = "🏆 Achievements",
  showViewAll = true,
  onViewAll,
  className = "",
}: AchievementsPanelProps) {
  const completedCount = achievements.filter(
    (a) => a.completed || a.progress >= a.total
  ).length;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {completedCount} / {achievements.length}
        </span>
      </div>

      <div className="grid gap-3">
        {achievements.map((achievement) => {
          const rarity = achievement.rarity || 'common';
          const isCompleted =
            achievement.completed || achievement.progress >= achievement.total;

          return (
            <div
              key={achievement.id}
              className={`relative p-4 rounded-lg border transition-all hover:shadow-md ${
                isCompleted
                  ? `bg-gradient-to-r ${getRarityColor(rarity)} text-white ${getRarityBorder(rarity)}`
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              }`}
            >
              {/* Completion glow effect */}
              {isCompleted && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-lg" />
              )}

              <div className="relative">
                <div className="flex items-start space-x-3">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                      isCompleted
                        ? "bg-white/20"
                        : "bg-slate-100 dark:bg-slate-700"
                    }`}
                  >
                    {achievement.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4
                          className={`font-medium ${
                            isCompleted
                              ? "text-white"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {achievement.title}
                        </h4>
                        <p
                          className={`text-sm mt-1 ${
                            isCompleted
                              ? "text-white/90"
                              : "text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {achievement.description}
                        </p>
                      </div>

                      {/* Rarity badge */}
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded capitalize ${
                          isCompleted
                            ? "bg-white/20 text-white"
                            : rarity === "legendary"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : rarity === "epic"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            : rarity === "rare"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                        }`}
                      >
                        {rarity}
                      </span>
                    </div>

                    {/* Progress bar */}
                    {!isCompleted && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-600 dark:text-slate-400">
                            Progress:{" "}
                            {Math.round((achievement.progress / achievement.total) * 100)}%
                          </span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {achievement.progress} / {achievement.total}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{
                              width: `${Math.min(100, (achievement.progress / achievement.total) * 100)}%`
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Completion status */}
                    {isCompleted && (
                      <p className="text-xs text-white/80 mt-2">✅ Completed</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View all button */}
      {showViewAll && (
        <button
          onClick={onViewAll}
          className="w-full p-3 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors"
        >
          🏆 View All Achievements & Leaderboards
        </button>
      )}
    </div>
  );
}
