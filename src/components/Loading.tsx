import { Spinner } from "./Spinner";

export interface LoadingProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Loading component with spinner and optional message
 */
export function Loading({
  message = "Loading...",
  size = "md",
  className = "",
}: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-2 ${className}`}
    >
      <Spinner size={size} />
      {message && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
      )}
    </div>
  );
}
