import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "circle" | "square";
  className?: string;
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
};

const variantClasses = {
  circle: "rounded-full",
  square: "rounded-lg",
};

/**
 * Avatar component for user profile pictures with fallbacks
 * Handles missing images gracefully with initials
 */
export function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  variant = "circle",
  className = "",
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  // Generate initials from alt text if not provided
  const displayInitials =
    initials ||
    alt
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const showFallback = !src || imageError;

  return (
    <div
      className={`
      inline-flex items-center justify-center
      bg-gray-200 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      font-medium
      overflow-hidden
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `.trim()}
    >
      {!showFallback ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span>{displayInitials}</span>
      )}
    </div>
  );
}
