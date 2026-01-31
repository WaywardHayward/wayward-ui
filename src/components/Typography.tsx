import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  color?: "default" | "muted" | "primary" | "success" | "warning" | "error";
}

const colorClasses = {
  default: "text-gray-900 dark:text-gray-100",
  muted: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400",
};

/**
 * H1 heading component
 */
export function H1({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h1
      className={`text-3xl font-bold tracking-tight ${colorClasses[color]} ${className}`}
    >
      {children}
    </h1>
  );
}

/**
 * H2 heading component
 */
export function H2({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h2
      className={`text-2xl font-semibold tracking-tight ${colorClasses[color]} ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * H3 heading component
 */
export function H3({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h3 className={`text-xl font-semibold ${colorClasses[color]} ${className}`}>
      {children}
    </h3>
  );
}

/**
 * H4 heading component
 */
export function H4({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <h4 className={`text-lg font-medium ${colorClasses[color]} ${className}`}>
      {children}
    </h4>
  );
}

/**
 * Body text component
 */
export function Text({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-sm ${colorClasses[color]} ${className}`}>{children}</p>
  );
}

/**
 * Small text component
 */
export function Small({
  children,
  color = "muted",
  className = "",
}: TypographyProps) {
  return (
    <small className={`text-xs ${colorClasses[color]} ${className}`}>
      {children}
    </small>
  );
}

/**
 * Lead text component (larger body text)
 */
export function Lead({
  children,
  color = "default",
  className = "",
}: TypographyProps) {
  return (
    <p
      className={`text-lg text-muted-foreground ${colorClasses[color]} ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Muted text component
 */
export function Muted({
  children,
  className = "",
}: Omit<TypographyProps, "color">) {
  return (
    <p
      className={`text-sm text-muted-foreground ${colorClasses.muted} ${className}`}
    >
      {children}
    </p>
  );
}
