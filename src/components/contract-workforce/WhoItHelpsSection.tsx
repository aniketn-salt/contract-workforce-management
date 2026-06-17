"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ASSETS } from "@/lib/constants/assets";

const personas = [
  {
    image: ASSETS.whoHrTeams,
    title: "For HR Teams",
    description:
      "Manage worker records, contractor details, attendance visibility and compliance workflows with better structure and less manual follow-up.",
    showCta: false,
  },
  {
    image: ASSETS.whoPlantHr,
    title: "For Plant/Site HR",
    description:
      "Get clearer visibility into site-level deployment, worker access, attendance and contractor activity across shifts and locations.",
    showCta: false,
  },
  {
    image: ASSETS.whoOperations,
    title: "For Operations Teams",
    description:
      "Track workforce presence, skill deployment and contractor performance with better coordination on the ground.",
    showCta: false,
  },
  {
    image: ASSETS.whoItHrit,
    title: "IT & HRIT Teams",
    description:
      "Enterprise workforce platforms must integrate with existing systems and scale across multiple sites, locations, and contractors.",
    showCta: true,
  },
];

export function WhoItHelpsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -656 : 656;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="who-it-helps"
      aria-labelledby="who-helps-heading"
      className="bg-eilisys-dark-bg py-[var(--section-y)]"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col items-center gap-16 px-[var(--section-x)]">
        <SectionHeader
          badge="Who It Helps"
          badgeVariant="dark"
          theme="dark"
          headingId="who-helps-heading"
          title={
            <>
              <span className="text-[#79a7d7]">Better control across teams </span>
              <span className="text-eilisys-light-text">
                managing contract workforce
              </span>
            </>
          }
          description="From HR and compliance teams to finance and site operations, Ascent Contract Workforce Management system helps improve workforce visibility, reduce risk and strengthen day-to-day process control."
        />

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {personas.map((persona) => (
              <article
                key={persona.title}
                className="flex w-[min(624px,85vw)] shrink-0 snap-start gap-8 rounded-md border border-[rgba(221,213,221,0.3)] bg-[#152236] p-6"
              >
                <div className="relative h-[178px] w-[165px] shrink-0 overflow-hidden rounded-[4px]">
                  <Image
                    src={persona.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="165px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-7 py-1">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-h4 text-eilisys-light-text">
                      {persona.title}
                    </h3>
                    <p className="font-body text-body-4 text-eilisys-dark-subtext">
                      {persona.description}
                    </p>
                  </div>
                  {persona.showCta ? (
                    <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 rounded-[2px] bg-eilisys-white px-6 py-3 font-body text-base font-medium text-eilisys-primary-text opacity-80 transition-opacity hover:opacity-100"
                    >
                      <Star className="size-5 text-eilisys-orange-highlight" />
                      See What Your Team Gains
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex size-[60px] items-center justify-center bg-[#152236] text-eilisys-light-text transition-colors hover:bg-[#1c2d47]"
            aria-label="Previous persona"
          >
            <ArrowLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex size-[60px] items-center justify-center border border-eilisys-border-gray bg-eilisys-white text-eilisys-primary-text transition-colors hover:bg-eilisys-surface-gray"
            aria-label="Next persona"
          >
            <ArrowRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
