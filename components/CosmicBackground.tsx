"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Multi-layer cosmic background with parallax stars, nebula, and atmospheric fog
 * Creates infinite deep-space environment with cinematic depth
 */
export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for different depth layers
  const deepSpaceY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const midSpaceY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Extended for scroll
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate star layers with different depths
    const generateStars = (count: number, maxSize: number, opacity: number) => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize + 0.5,
        opacity: Math.random() * opacity + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    const deepStars = generateStars(200, 1, 0.4);
    const midStars = generateStars(150, 1.5, 0.6);
    const foregroundStars = generateStars(100, 2, 0.8);

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      const drawStars = (stars: typeof deepStars, yOffset: number) => {
        stars.forEach((star) => {
          const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
          const currentOpacity = star.opacity + twinkle * 0.2;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y + yOffset, star.size, 0, Math.PI * 2);
          ctx.fill();

          // Add subtle glow for larger stars
          if (star.size > 1.5) {
            ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity * 0.3})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y + yOffset, star.size * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      };

      drawStars(deepStars, 0);
      drawStars(midStars, 0);
      drawStars(foregroundStars, 0);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000308] via-[#000814] to-[#000308]" />
      
      {/* Animated canvas starfield */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Nebula clouds - multiple layers */}
      <motion.div
        style={{ y: deepSpaceY }}
        className="absolute left-[-20%] top-[10%] h-[800px] w-[800px] rounded-full bg-gradient-radial from-blue-900/10 via-indigo-900/5 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: midSpaceY }}
        className="absolute right-[-15%] top-[40%] h-[600px] w-[600px] rounded-full bg-gradient-radial from-cyan-900/8 via-blue-950/4 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: foregroundY }}
        className="absolute left-[10%] top-[70%] h-[500px] w-[500px] rounded-full bg-gradient-radial from-indigo-900/12 via-violet-950/6 to-transparent blur-3xl"
      />

      {/* Distant galaxy glow */}
      <div className="absolute right-[20%] top-[20%] h-[300px] w-[300px] rounded-full bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-2xl" />
      
      {/* Atmospheric fog overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
