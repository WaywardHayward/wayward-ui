"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
}

/**
 * Moving gradient border animation
 * Creates an animated border that flows around the element
 */
export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        "relative p-[1px] overflow-hidden rounded-lg bg-transparent",
        containerClassName
      )}
    >
      <motion.div
        className={cn(
          "absolute inset-0",
          "bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)]",
          borderClassName
        )}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          borderRadius: "inherit",
        }}
      />
      <div
        className={cn(
          "relative bg-slate-950 rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}
