"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassMonolithProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "premium" | "hero";
  glowColor?: "blue" | "cyan" | "indigo";
}

/**
 * Futuristic glass monolith card with atmospheric lighting
 * Inspired by holographic interfaces in Blade Runner 2049
 */
export function GlassMonolith({ 
  children, 
  className = "", 
  variant = "default",
  glowColor = "blue" 
}: GlassMonolithProps) {
  
  const glowColors = {
    blue: "rgba(59, 130, 246, 0.15)",
    cyan: "rgba(34, 211, 238, 0.15)",
    indigo: "rgba(99, 102, 241, 0.15)",
  };

  const variants = {
    default: "p-8 rounded-[2rem]",
    premium: "p-10 rounded-[2.5rem]",
    hero: "p-12 rounded-[3rem]",
  };

  return (
    <div className={`group relative ${className}`}>
      <motion.div
        whileHover={{
          y: -8,
          rotateX: 2,
          rotateY: 2,
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`relative ${variants[variant]}`}
      >
        {/* Atmospheric glow behind card */}
        <div
          className="absolute inset-0 -z-10 rounded-[inherit] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{ backgroundColor: glowColors[glowColor] }}
        />

        {/* Glass surface with multiple layers */}
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-xl">
          {/* Subtle reflection gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Edge lighting */}
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_-1px_0_0_rgba(255,255,255,0.05)]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Holographic scan line effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <motion.div
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm"
          />
        </div>
      </motion.div>
    </div>
  );
}

interface FloatingPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Floating panel that appears to exist in 3D space
 * With depth shadows and atmospheric perspective
 */
export function FloatingPanel({ children, className = "", delay = 0 }: FloatingPanelProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 40,
        rotateX: 10,
        filter: "blur(10px)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -12,
        rotateX: 3,
        scale: 1.01,
      }}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Deep shadow for 3D depth */}
      <div className="absolute inset-0 -z-20 translate-y-8 rounded-[inherit] bg-black/40 blur-2xl" />
      
      {/* Atmospheric glow */}
      <div className="absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 blur-xl" />
      
      {/* Glass surface */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black/20 p-8 backdrop-blur-xl">
        {children}
      </div>
    </motion.div>
  );
}
