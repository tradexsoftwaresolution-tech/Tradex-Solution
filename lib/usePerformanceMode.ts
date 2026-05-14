"use client";

import { useEffect, useState } from "react";

type PerformanceMode = {
  shouldReduceMotion: boolean;
  shouldUseStaticEffects: boolean;
};

type DataSavingNavigator = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>({
    shouldReduceMotion: false,
    shouldUseStaticEffects: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedDataQuery = window.matchMedia("(prefers-reduced-data: reduce)");

    const updateMode = () => {
      const shouldReduceMotion = reducedMotionQuery.matches;
      const shouldReduceData =
        reducedDataQuery.matches || Boolean((navigator as DataSavingNavigator).connection?.saveData);

      setMode({
        shouldReduceMotion,
        shouldUseStaticEffects: shouldReduceMotion || shouldReduceData,
      });
    };

    updateMode();

    reducedMotionQuery.addEventListener("change", updateMode);
    reducedDataQuery.addEventListener("change", updateMode);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateMode);
      reducedDataQuery.removeEventListener("change", updateMode);
    };
  }, []);

  return mode;
}
