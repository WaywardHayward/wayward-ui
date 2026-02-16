"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface HoverCardProps {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export interface HoverCardItemProps {
  title: string;
  description: string;
  link?: string;
  icon?: React.ReactNode;
  idx: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

/**
 * Animated hover card grid
 * Cards light up with a beautiful border effect on hover
 */
export function HoverCard({ items, className }: HoverCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <HoverCardItem
          key={idx}
          idx={idx}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          {...item}
        />
      ))}
    </div>
  );
}

function HoverCardItem({
  title,
  description,
  link,
  icon,
  idx,
  hoveredIndex,
  setHoveredIndex,
}: HoverCardItemProps) {
  return (
    <div
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {hoveredIndex === idx && (
        <motion.span
          className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
          layoutId="hoverBackground"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15, delay: 0.2 },
          }}
        />
      )}
      <Card link={link}>
        <CardIcon>{icon}</CardIcon>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </div>
  );
}

function Card({
  className,
  children,
  link,
}: {
  className?: string;
  children: React.ReactNode;
  link?: string;
}) {
  const Wrapper = link ? "a" : "div";
  const props = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...props}
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </Wrapper>
  );
}

function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
}

function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}

function CardIcon({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return (
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl">
      {children}
    </div>
  );
}
