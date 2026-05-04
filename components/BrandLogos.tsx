"use client";

import { motion } from "framer-motion";

/**
 * Brand logos component for Sinajet and Optitex
 * Displays partner brand logos with links to their websites
 */
export function BrandLogos() {
  const brands = [
    {
      name: "Optitex",
      url: "https://optitex.com/",
      description: "Fashion Design Software | 2D/3D CAD CAM",
      logo: (
        <svg
          viewBox="0 0 200 60"
          className="h-8 w-auto transition-all duration-300 group-hover:scale-105"
          fill="currentColor"
        >
          <text
            x="10"
            y="40"
            fontFamily="Arial, sans-serif"
            fontSize="32"
            fontWeight="700"
            letterSpacing="-1"
          >
            OPTITEX
          </text>
        </svg>
      ),
    },
    {
      name: "Sinajet",
      url: "https://www.sinajet.net/",
      description: "Digital Cutter Manufacturer",
      logo: (
        <svg
          viewBox="0 0 200 60"
          className="h-8 w-auto transition-all duration-300 group-hover:scale-105"
          fill="currentColor"
        >
          <text
            x="10"
            y="40"
            fontFamily="Arial, sans-serif"
            fontSize="32"
            fontWeight="700"
            letterSpacing="-1"
          >
            SINAJET
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-6">
      <span className="hidden text-xs uppercase tracking-[0.3em] text-zinc-500 lg:block">
        Partners
      </span>
      <div className="flex items-center gap-4">
        {brands.map((brand) => (
          <motion.a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            title={brand.description}
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-zinc-400 backdrop-blur transition-all duration-300 group-hover:border-[#ed1c24]/30 group-hover:bg-white/[0.06] group-hover:text-white group-hover:shadow-glow-sm">
              {brand.logo}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

/**
 * Compact brand logos for mobile/smaller displays
 */
export function BrandLogosCompact() {
  const brands = [
    {
      name: "Optitex",
      url: "https://optitex.com/",
      initial: "O",
    },
    {
      name: "Sinajet",
      url: "https://www.sinajet.net/",
      initial: "S",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {brands.map((brand) => (
        <a
          key={brand.name}
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          title={brand.name}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs font-semibold text-zinc-400 backdrop-blur transition-all duration-300 group-hover:border-[#ed1c24]/30 group-hover:bg-white/[0.06] group-hover:text-white">
            {brand.initial}
          </div>
        </a>
      ))}
    </div>
  );
}
