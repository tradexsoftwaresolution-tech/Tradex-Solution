"use client";

import { useEffect, useState } from "react";
import { usePerformanceMode } from "@/lib/usePerformanceMode";

const INTRO_DURATION_MS = 4800;

export default function TradexIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const { shouldUseStaticEffects } = usePerformanceMode();

  useEffect(() => {
    if (shouldUseStaticEffects) {
      return;
    }

    // Check if intro has already been shown in this session
    const hasShownIntro = sessionStorage.getItem("tradex-intro-shown");
    
    if (!hasShownIntro) {
      // Show intro only on first visit
      setIsVisible(true);
      sessionStorage.setItem("tradex-intro-shown", "true");
      
      const timer = window.setTimeout(() => setIsVisible(false), INTRO_DURATION_MS);
      return () => window.clearTimeout(timer);
    }
  }, [shouldUseStaticEffects]);

  if (!isVisible || shouldUseStaticEffects) {
    return null;
  }

  const leadingLetters = ["T", "R", "A", "D"];

  return (
    <section
      aria-label="Tradex opening scene"
      className="tradex-intro fixed inset-0 z-50 grid place-items-center overflow-hidden"
    >
      <div className="tradex-intro__background" />

      <div className="tradex-intro__word" aria-label="TRADEX">
        {leadingLetters.map((letter, index) => (
          <span
            className="tradex-intro__letter"
            key={`${letter}-${index}`}
            style={{ "--letter-index": index } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
        <span className="tradex-intro__e-mark" aria-hidden="true">
          <span className="tradex-intro__swoop">
            <span className="tradex-intro__swoop-bar tradex-intro__swoop-bar--top" />
            <span className="tradex-intro__swoop-bar tradex-intro__swoop-bar--middle" />
            <span className="tradex-intro__swoop-bar tradex-intro__swoop-bar--bottom" />
          </span>
        </span>
        <span
          className="tradex-intro__letter"
          style={{ "--letter-index": 5 } as React.CSSProperties}
        >
          X
        </span>
      </div>
    </section>
  );
}
