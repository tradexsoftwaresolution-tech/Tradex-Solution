"use client";

import DeferredSplineScene from "@/components/DeferredSplineScene";

const INNOVATION_SPLINE_SCENE =
  "https://prod.spline.design/tnSE26WO3MFqruRF/scene.splinecode";

export default function EnergyOrb() {
  return (
    <DeferredSplineScene
      sceneUrl={INNOVATION_SPLINE_SCENE}
      ambientClassName="bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.22),_transparent_28%),radial-gradient(circle_at_30%_68%,_rgba(37,99,235,0.16),_transparent_22%),linear-gradient(180deg,_rgba(10,10,10,0.2)_0%,_rgba(5,5,5,0.72)_100%)]"
      glowClassName="bg-sky-500/20"
    />
  );
}
