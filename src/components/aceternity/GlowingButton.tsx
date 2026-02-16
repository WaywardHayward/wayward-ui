"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Button with animated glowing border effect
 * Perfect for CTAs and primary actions
 */
export function GlowingButton({
  children,
  className,
  containerClassName,
  ...props
}: GlowingButtonProps) {
  return (
    <div className={cn("relative group", containerClassName)}>
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300 group-hover:duration-200"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <button
        className={cn(
          "relative px-7 py-4 bg-slate-950 rounded-lg leading-none flex items-center divide-x divide-slate-600",
          "text-slate-100 hover:text-white transition duration-200",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
