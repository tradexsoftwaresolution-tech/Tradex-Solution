"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicHeroProps {
  children: ReactNode;
  className?: string;
}

/**
 * Massive cinematic hero section with atmospheric depth
 * Typography emerges through fog with monumental scale
 */
export function CinematicHero({ children, className = "" }: CinematicHeroProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Celestial object behind hero - massive glowing sphere */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Core glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl" />
        
        {/* Outer atmosphere */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gradient-radial from-indigo-500/10 via-blue-500/5 to-transparent blur-2xl"
        />
      </motion.div>

      {/* Volumetric light rays */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.03)_45deg,transparent_90deg,transparent_180deg,rgba(34,211,238,0.03)_225deg,transparent_270deg)] blur-2xl" />
        </motion.div>
      </div>

      {/* Atmospheric fog layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-[20%] h-[400px] w-[600px] rounded-full bg-gradient-radial from-blue-900/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-[40%] h-[500px] w-[700px] rounded-full bg-gradient-radial from-indigo-900/10 to-transparent blur-3xl"
        />
      </div>

      {/* Content with cinematic reveal */}
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 40,
          filter: "blur(30px)",
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Lens glow effect */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-white/5 to-transparent blur-3xl"
      />
    </div>
  );
}

/**
 * Monumental typography with atmospheric glow
 */
export function MonumentalText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h1
      initial={{ 
        opacity: 0, 
        y: 30,
        filter: "blur(20px)",
        scale: 0.95
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        scale: 1
      }}
      transition={{
        duration: 1.6,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative ${className}`}
    >
      {/* Text glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 bg-clip-text blur-2xl">
        {children}
      </span>
      
      {/* Actual text */}
      <span className="relative">{children}</span>
    </motion.h1>
  );
}
