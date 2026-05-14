"use client";

import { useEffect, useState } from "react";

type PerformanceMode = {
  shouldReduceMotion: boolean;
  shouldUseStaticEffects: boolean;
};

export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>({
    shouldReduceMotion: false,
    shouldUseStaticEffects: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const staticEffectsQuery = window.matchMedia("(max-width: 1023px), (pointer: coarse)");

    const updateMode = () => {
      const shouldReduceMotion = reducedMotionQuery.matches;

      setMode({
        shouldReduceMotion,
        shouldUseStaticEffects: shouldReduceMotion || staticEffectsQuery.matches,
      });
    };

    updateMode();

    reducedMotionQuery.addEventListener("change", updateMode);
    staticEffectsQuery.addEventListener("change", updateMode);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateMode);
      staticEffectsQuery.removeEventListener("change", updateMode);
    };
  }, []);

  return mode;
}
