"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Cinematic section reveal with blur-to-focus transition
 * Simulates camera focus and depth of field like Interstellar
 */
export function CinematicSection({ children, className = "", delay = 0 }: CinematicSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60,
        filter: "blur(20px)",
        scale: 0.95
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        scale: 1
      } : { 
        opacity: 0, 
        y: 60,
        filter: "blur(20px)",
        scale: 0.95
      }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

/**
 * Creates subtle floating animation for elements in space
 * Simulates zero-gravity drift
 */
export function FloatingElement({ children, className = "", intensity = "medium" }: FloatingElementProps) {
  const intensityMap = {
    subtle: { y: 10, duration: 6 },
    medium: { y: 20, duration: 8 },
    strong: { y: 30, duration: 10 },
  };

  const { y, duration } = intensityMap[intensity];

  return (
    <motion.div
      animate={{
        y: [0, -y, 0],
        x: [0, y * 0.3, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CinematicStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * Stagger children with cinematic blur-to-focus transitions
 */
export function CinematicStagger({ children, className = "", staggerDelay = 0.15 }: CinematicStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger item with blur transition
 */
export function CinematicStaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 40,
          filter: "blur(10px)",
          scale: 0.96
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Cinematic camera drift effect - subtle constant movement
 */
export function CameraDrift({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        x: [0, 8, -8, 0],
        y: [0, -12, 12, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
