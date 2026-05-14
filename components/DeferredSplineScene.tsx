"use client";

import { useEffect, useRef, useState } from "react";
import { usePerformanceMode } from "@/lib/usePerformanceMode";

const SPLINE_VIEWER_SCRIPT =
  "https://unpkg.com/@splinetool/viewer@1.12.90/build/spline-viewer.js";

let splineViewerScriptPromise: Promise<void> | null = null;
type IdleCapableWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions,
    ) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

function loadSplineViewerScript() {
  if (splineViewerScriptPromise) {
    return splineViewerScriptPromise;
  }

  splineViewerScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${SPLINE_VIEWER_SCRIPT}"]`,
    );

    if (existingScript) {
      if (customElements.get("spline-viewer")) {
        resolve();
        return;
      }

      customElements.whenDefined("spline-viewer").then(() => resolve()).catch(reject);
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = SPLINE_VIEWER_SCRIPT;
    script.onload = () => {
      customElements.whenDefined("spline-viewer").then(() => resolve()).catch(reject);
    };
    script.onerror = () => {
      splineViewerScriptPromise = null;
      reject(new Error("Failed to load the Spline viewer script."));
    };

    document.head.appendChild(script);
  });

  return splineViewerScriptPromise;
}

type DeferredSplineSceneProps = {
  sceneUrl: string;
  ambientClassName: string;
  glowClassName: string;
};

export default function DeferredSplineScene({
  sceneUrl,
  ambientClassName,
  glowClassName,
}: DeferredSplineSceneProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { shouldUseStaticEffects } = usePerformanceMode();

  useEffect(() => {
    setIsReady(false);
  }, [sceneUrl, shouldUseStaticEffects]);

  useEffect(() => {
    if (shouldUseStaticEffects || !stageRef.current) {
      return;
    }

    let cancelled = false;
    let timeoutId: number | null = null;
    let idleId: number | null = null;
    const idleWindow = window as IdleCapableWindow;

    const scheduleLoad = () => {
      const load = () => {
        if (!cancelled) {
          setShouldLoad(true);
        }
      };

      if (typeof idleWindow.requestIdleCallback === "function") {
        idleId = idleWindow.requestIdleCallback(load, { timeout: 1200 });
        return;
      }

      timeoutId = window.setTimeout(load, 250);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          scheduleLoad();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(stageRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();

      if (idleId !== null && typeof idleWindow.cancelIdleCallback === "function") {
        idleWindow.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [shouldUseStaticEffects]);

  useEffect(() => {
    if (!shouldLoad || shouldUseStaticEffects) {
      return;
    }

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    let viewer: HTMLElement | null = null;

    const mountViewer = async () => {
      await loadSplineViewerScript();

      if (cancelled || !mountRef.current || viewer) {
        return;
      }

      const { width, height } = mountRef.current.getBoundingClientRect();
      if (width === 0 || height === 0) {
        return;
      }

      viewer = document.createElement("spline-viewer");
      viewer.setAttribute("url", sceneUrl);
      viewer.style.display = "block";
      viewer.style.width = "100%";
      viewer.style.height = "100%";

      mountRef.current.innerHTML = "";
      mountRef.current.appendChild(viewer);
      setIsReady(true);
    };

    const tryMountViewer = () => {
      void mountViewer();
    };

    if (mountRef.current) {
      resizeObserver = new ResizeObserver(() => {
        tryMountViewer();
      });
      resizeObserver.observe(mountRef.current);
    }

    tryMountViewer();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();

      if (viewer?.parentNode) {
        viewer.parentNode.removeChild(viewer);
      }

      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, [sceneUrl, shouldLoad, shouldUseStaticEffects]);

  return (
    <div ref={stageRef} className="pointer-events-none absolute inset-0 z-0">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${isReady ? "opacity-0" : "opacity-100"} ${ambientClassName}`}
      >
        <div className={`absolute inset-x-[-8%] top-[-12%] h-56 rounded-full blur-3xl ${glowClassName}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_32%,rgba(0,0,0,0.55))]" />
        <div className="absolute inset-x-[20%] bottom-[-12%] h-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div
        ref={mountRef}
        className={`absolute inset-0 transition-opacity duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
