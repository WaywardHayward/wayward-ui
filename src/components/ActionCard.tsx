import React from "react";

export interface ActionCardProps {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary" | "gradient";
  onClick: () => void;
  className?: string;
  /** Enable glass-morphism style */
  glass?: boolean;
  /** Add glow effect on hover */
  glow?: boolean;
  /** Glow color */
  glowColor?: "blue" | "purple" | "amber" | "cyan";
}

const buttonVariants = {
  primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-lg",
  secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500",
  gradient: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md hover:shadow-lg",
};

const glowColors = {
  blue: "hover:shadow-glow-blue hover:border-blue-500/30",
  purple: "hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30",
  amber: "hover:shadow-glow-amber hover:border-amber-500/30",
  cyan: "hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30",
};

/**
 * Action card for prominent calls-to-action.
 * Features icon, description, and action button with optional glow effects.
 * 
 * @example
 * <ActionCard
 *   icon={<PlaneIcon />}
 *   iconBg="bg-blue-600"
 *   title="Log a Flight"
 *   description="Record your latest adventure"
 *   buttonText="Start Logging"
 *   onClick={() => navigate('/new-flight')}
 *   glow
 *   glowColor="blue"
 * />
 */
export const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  iconBg = "bg-blue-600",
  title,
  description,
  buttonText,
  buttonVariant = "primary",
  onClick,
  className = "",
  glass = false,
  glow = false,
  glowColor = "blue",
}) => {
  const baseClasses = glass
    ? "bg-slate-800/60 backdrop-blur-xl border-slate-700/50"
    : "bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700/60";

  const glowClasses = glow ? glowColors[glowColor] : "";

  return (
    <div
      className={`
        ${baseClasses}
        rounded-xl p-6 
        border
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-slate-600
        ${glowClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      {/* Icon */}
      <div 
        className={`
          w-14 h-14 ${iconBg} 
          rounded-xl flex items-center justify-center 
          mx-auto mb-4
          shadow-lg
          transition-transform duration-300
          group-hover:scale-110
        `}
      >
        <span className="text-white text-xl">{icon}</span>
      </div>
      
      {/* Title */}
      <h4 className="text-white font-semibold text-lg mb-2 text-center">
        {title}
      </h4>
      
      {/* Description */}
      <p className="text-slate-400 text-sm mb-5 text-center leading-relaxed">
        {description}
      </p>
      
      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`
          w-full px-4 py-2.5 
          ${buttonVariants[buttonVariant]}
          rounded-lg 
          transition-all duration-200
          text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
        `}
      >
        {buttonText}
      </button>
    </div>
  );
};
