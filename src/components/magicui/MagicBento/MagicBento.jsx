"use client";

import { useRef } from "react";
import { DATA } from "@/data/resume"; // adjust path if needed
import {
  BentoCard,
  BentoCardGrid,
} from "@/components/magicui/bento"; // assuming MagicBento installed here

export default function MagicBento() {
  const gridRef = useRef(null);

  // Combine work + education into a single array
  const cardData = [
    ...DATA.work.map((job) => ({
      name: job.company,
      description: job.description,
      href: job.href,
      cta: job.title,
      logo: job.logoUrl,
      metadata: `${job.start} - ${job.end} · ${job.location}`,
    })),
    ...DATA.education.map((edu) => ({
      name: edu.school,
      description: edu.degree,
      href: edu.href,
      cta: "View",
      logo: edu.logoUrl,
      metadata: `${edu.start} - ${edu.end}`,
    })),
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Experience & Education</h2>

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => (
          <BentoCard
            key={index}
            name={card.name}
            description={card.description}
            href={card.href}
            cta={card.cta}
            logo={card.logo}
            metadata={card.metadata}
            index={index}
          />
        ))}
      </BentoCardGrid>
    </section>
  );
}
