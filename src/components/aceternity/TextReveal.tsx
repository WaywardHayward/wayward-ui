"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export interface TextRevealProps {
  text: string;
  className?: string;
  revealClassName?: string;
}

/**
 * Text that reveals on scroll
 * Creates a beautiful blur-to-clear effect as user scrolls
 */
export function TextReveal({ text, className, revealClassName }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(targetRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.02,
            },
          },
          hidden: {},
        }}
        className={cn("flex flex-wrap", revealClassName)}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="mr-2 mb-1"
            variants={{
              hidden: {
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
              },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
