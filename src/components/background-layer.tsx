"use client";

import { useTheme } from "next-themes";
import Particles from "@/components/magicui/Particles/Particles";

export function BackgroundLayer() {
  const { theme } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Particles
        className="h-full w-full"
        particleCount={300}        // number of particles
        particleSpread={15}        // how spread out they are
        speed={0.5}                // particle motion speed
        particleColors={
          theme === "dark" ? ["#ffffff"] : ["#000000"]
        }                          // 👈 switch based on theme
        alphaParticles={true}      // softer star-like effect
        particleBaseSize={50}      // smaller, more star-like
        sizeRandomness={1.5}       // slight variance in size
      />
    </div>
  );
}
