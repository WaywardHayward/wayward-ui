import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  className?: string;
  color?: "default" | "muted" | "primary" | "success" | "warning" | "error";
}

export const colorClasses = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400",
};
