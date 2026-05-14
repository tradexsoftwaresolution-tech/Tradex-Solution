"use client";

import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import EnergyOrb from "../components/EnergyOrb";
import FabricMesh from "../components/FabricMesh";
import TradexIntro from "../components/TradexIntro";

export default function Home() {
  const router = useRouter();
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const handlePanelPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
  };

  const handlePanelPointerUp = (
    event: React.PointerEvent<HTMLElement>,
    href: string,
  ) => {
    if (!pointerStartRef.current) {
      return;
    }

    const deltaX = Math.abs(event.clientX - pointerStartRef.current.x);
    const deltaY = Math.abs(event.clientY - pointerStartRef.current.y);
    pointerStartRef.current = null;

    if (deltaX > 8 || deltaY > 8) {
      return;
    }

    router.push(href);
  };

  const handlePanelKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    href: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(href);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <TradexIntro />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(237,28,36,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(127,29,29,0.12),_transparent_26%),linear-gradient(135deg,_#030303_0%,_#09090b_55%,_#040404_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-grid bg-[size:72px_72px] opacity-[0.06]" />

      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div
          role="link"
          tabIndex={0}
          aria-label="Open Tradex Solution"
          onPointerDownCapture={handlePanelPointerDown}
          onPointerUpCapture={(event) => handlePanelPointerUp(event, "/tradex-solution")}
          onKeyDown={(event) => handlePanelKeyDown(event, "/tradex-solution")}
          className="group relative isolate flex min-h-[50vh] cursor-pointer items-end overflow-hidden border-b border-white/10 px-6 py-10 transition duration-500 ease-out hover:z-20 hover:scale-[1.012] hover:bg-[#ed1c24]/10 hover:shadow-[0_0_70px_rgba(237,28,36,0.24)] focus-visible:z-20 focus-visible:scale-[1.012] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-red-400 lg:min-h-screen lg:border-b-0 lg:border-r lg:px-10 lg:py-12"
        >
          <FabricMesh />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_left,_rgba(237,28,36,0.2),_transparent_35%)] opacity-70 transition duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(237,28,36,0.16),transparent_40%,rgba(0,0,0,0.5))]" />
          <Link href="/tradex-solution" className="relative z-10 block w-full max-w-[40rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-400/85">
              Tradex Solution
            </p>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[0.94] tracking-tight text-white sm:text-5xl lg:min-h-[5.1em] lg:text-6xl">
              Digital apparel systems and production-focused technology.
            </h1>
            <p className="mt-5 max-w-[36rem] text-base leading-8 text-zinc-300 sm:text-lg">
              As the exclusive partner of Sinajet and Optitex, enter the full Tradex Solution experience for design workflows, cutting systems, and
              implementation-led business transformation.
            </p>
          </Link>
        </div>

        <div
          role="link"
          tabIndex={0}
          aria-label="Open Tradex Innovation"
          onPointerDownCapture={handlePanelPointerDown}
          onPointerUpCapture={(event) => handlePanelPointerUp(event, "/tradex-innovation")}
          onKeyDown={(event) => handlePanelKeyDown(event, "/tradex-innovation")}
          className="group relative isolate flex min-h-[50vh] cursor-pointer items-end overflow-hidden px-6 py-10 transition duration-500 ease-out hover:z-20 hover:scale-[1.012] hover:bg-sky-500/10 hover:shadow-[0_0_70px_rgba(56,189,248,0.22)] focus-visible:z-20 focus-visible:scale-[1.012] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-sky-300 lg:min-h-screen lg:px-10 lg:py-12"
        >
          <EnergyOrb />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.26),_transparent_35%),radial-gradient(circle_at_34%_38%,_rgba(37,99,235,0.16),_transparent_32%)] opacity-75 transition duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(225deg,rgba(14,165,233,0.2),transparent_38%,rgba(0,0,0,0.48))]" />
          <Link href="/tradex-innovation" className="relative z-10 block w-full max-w-[40rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300/90">
              Tradex Innovation
            </p>
            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[0.94] tracking-tight text-white sm:text-5xl lg:min-h-[5.1em] lg:text-6xl">
              A gateway for building intelligent digital systems and solutions.
            </h2>
            <p className="mt-5 max-w-[36rem] text-base leading-8 text-zinc-300 sm:text-lg">
              A focused space for building and launching solutions that improve real-world
              operations through modern technology and system-driven thinking.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
