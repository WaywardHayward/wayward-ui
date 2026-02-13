export interface ProgressGoalData {
  title: string;
  progress: number;
  target: string;
}

export interface ProgressGoalProps {
  goal: ProgressGoalData;
  /** Visual variant */
  variant?: 'default' | 'glass' | 'cockpit';
  /** Color theme for the progress bar */
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'cyan';
  /** Show glow effect when approaching completion */
  showGlow?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
  purple: 'bg-purple-500',
  cyan: 'bg-cyan-500',
};

const glowClasses = {
  blue: 'shadow-blue-500/50',
  green: 'shadow-green-500/50',
  amber: 'shadow-amber-500/50',
  red: 'shadow-red-500/50',
  purple: 'shadow-purple-500/50',
  cyan: 'shadow-cyan-500/50',
};

/**
 * ProgressGoal - A progress indicator for goals and achievements
 * 
 * Displays a goal title, progress bar, and completion percentage.
 * Supports glass morphism and cockpit styling variants.
 */
export function ProgressGoal({ 
  goal, 
  variant = 'default',
  color = 'blue',
  showGlow = true,
  className = '' 
}: ProgressGoalProps) {
  // Map progress to predefined Tailwind width classes
  const getProgressClass = (progress: number) => {
    if (progress >= 100) return 'w-full';
    if (progress >= 90) return 'w-[90%]';
    if (progress >= 80) return 'w-4/5';
    if (progress >= 75) return 'w-3/4';
    if (progress >= 66) return 'w-2/3';
    if (progress >= 50) return 'w-1/2';
    if (progress >= 33) return 'w-1/3';
    if (progress >= 25) return 'w-1/4';
    if (progress >= 20) return 'w-1/5';
    if (progress >= 10) return 'w-[10%]';
    if (progress > 0) return 'w-[5%]';
    return 'w-0';
  };

  const variantClasses = {
    default: 'border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800',
    glass: 'backdrop-blur-sm bg-white/10 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/50',
    cockpit: 'backdrop-blur-md bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10',
  };

  const textClasses = {
    default: 'text-slate-800 dark:text-white',
    glass: 'text-slate-800 dark:text-white',
    cockpit: 'text-cyan-100',
  };

  const subtextClasses = {
    default: 'text-slate-600 dark:text-slate-400',
    glass: 'text-slate-600 dark:text-slate-300',
    cockpit: 'text-cyan-300/70',
  };

  const trackClasses = {
    default: 'bg-slate-200 dark:bg-slate-700',
    glass: 'bg-white/20 dark:bg-slate-700/50',
    cockpit: 'bg-slate-700/50 border border-cyan-500/20',
  };

  const shouldGlow = showGlow && goal.progress >= 75;

  return (
    <div className={`rounded-lg p-4 ${variantClasses[variant]} ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className={`font-medium ${textClasses[variant]}`}>
          {goal.title}
        </h4>
        <span className={`text-sm ${subtextClasses[variant]}`}>
          Target: {goal.target}
        </span>
      </div>
      <div className={`w-full rounded-full h-2 overflow-hidden ${trackClasses[variant]}`}>
        <div
          className={`
            h-2 rounded-full transition-all duration-500
            ${colorClasses[color]}
            ${shouldGlow ? `shadow-lg ${glowClasses[color]}` : ''}
            ${getProgressClass(goal.progress)}
          `.trim()}
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <p className={`text-sm ${subtextClasses[variant]}`}>
          {goal.progress}% complete
        </p>
        {goal.progress >= 100 && (
          <span className="text-green-500 text-sm font-medium flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Complete
          </span>
        )}
      </div>
    </div>
  );
}
