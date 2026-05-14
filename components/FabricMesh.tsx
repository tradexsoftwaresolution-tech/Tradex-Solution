"use client";

import DeferredSplineScene from "@/components/DeferredSplineScene";

const TRADEX_SPLINE_SCENE =
  "https://prod.spline.design/r7lUWxLn1GMig4pQ/scene.splinecode";

export default function FabricMesh() {
  return (
    <DeferredSplineScene
      sceneUrl={TRADEX_SPLINE_SCENE}
      ambientClassName="bg-[radial-gradient(circle_at_top_left,_rgba(237,28,36,0.18),_transparent_28%),radial-gradient(circle_at_72%_35%,_rgba(255,255,255,0.07),_transparent_18%),linear-gradient(180deg,_rgba(12,12,12,0.16)_0%,_rgba(5,5,5,0.72)_100%)]"
      glowClassName="bg-[#ed1c24]/22"
    />
  );
}
