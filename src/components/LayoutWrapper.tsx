"use client";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/Particles/Particles";
import Navbar from "@/components/navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen">
      <Particles
        className="absolute inset-0"
        particleCount={200}
        particleColors={[theme === "dark" ? "#ffffff" : "#000000"]}
      />
      <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
        {children}
        <Navbar />
      </div>
    </div>
  );
}