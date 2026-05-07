"use client";

import { motion } from "framer-motion";

/**
 * Atmospheric overlays for cinematic depth and mood
 * Includes vignette, scan lines, and volumetric fog
 */
export function AtmosphericOverlay() {
  return (
    <>
      {/* Cinematic vignette */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-gradient-radial from-transparent via-transparent to-black/60" />
      
      {/* Subtle scan lines for futuristic feel */}
      <div 
        className="pointer-events-none fixed inset-0 -z-30 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Animated volumetric fog */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed inset-0 -z-30 bg-gradient-to-b from-blue-950/10 via-transparent to-indigo-950/10"
      />

      {/* Depth fog - increases with scroll */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </>
  );
}

/**
 * Floating light fragments that drift across the screen
 */
export function LightFragments() {
  const fragments = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 15 + i * 2,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 -z-35 overflow-hidden">
      {fragments.map((fragment) => (
        <motion.div
          key={fragment.id}
          initial={{
            x: `${fragment.startX}vw`,
            y: `${fragment.startY}vh`,
            opacity: 0,
          }}
          animate={{
            x: [`${fragment.startX}vw`, `${(fragment.startX + 30) % 100}vw`],
            y: [`${fragment.startY}vh`, `${(fragment.startY - 40) % 100}vh`],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: fragment.duration,
            delay: fragment.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-8 rounded-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"
        />
      ))}
    </div>
  );
}

/**
 * Planetary object in background - partially visible
 */
export function DistantPlanet() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed -right-[400px] top-[20%] -z-40 h-[800px] w-[800px]"
    >
      {/* Planet surface */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-950/20 via-indigo-950/30 to-blue-900/20"
      />
      
      {/* Atmospheric glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-blue-500/5 to-blue-500/10 blur-3xl" />
      
      {/* Edge lighting */}
      <div className="absolute inset-0 rounded-full shadow-[inset_-40px_0_80px_rgba(59,130,246,0.1)]" />
    </motion.div>
  );
}
