"use client";

import Image from "next/image";
import { useState } from "react";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { SectionHeader } from "@/components/ui/section-header";
import { ASSETS } from "@/lib/constants/assets";
import { whyEilisysSlides } from "@/lib/constants/why-eilisys";

export function WhyEilisysSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = whyEilisysSlides[activeSlide];

  return (
    <section
      aria-labelledby="why-eilisys-heading"
      className="bg-eilisys-white px-[var(--section-x)] pb-32"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16">
        <SectionHeader
          badge="Why Eilisys"
          headingId="why-eilisys-heading"
          title={
            <>
              <span className="text-eilisys-primary-text">A trusted partner </span>
              <span className="text-eilisys-blue-highlight">
                for contract workforce compliance and operational control
              </span>
            </>
          }
          description="Managing contract workforce is not only about worker records and attendance. It also requires process discipline, compliance readiness, cost visibility and a system teams can trust across sites and contractors."
        />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[400px_1fr]">
          <article className="relative flex min-h-[450px] flex-col justify-between overflow-hidden rounded-lg border border-eilisys-border-gray bg-eilisys-dark-bg px-8 pb-12 pt-16">
            <Image
              src={ASSETS.whyEilisysCardBg}
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-eilisys-dark-bg"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="font-heading text-h4 text-eilisys-light-text">
                {slide.title}
              </h3>
              <p className="font-body text-body-4 text-eilisys-dark-subtext">
                {slide.description}
              </p>
            </div>

            <CarouselDots
              total={whyEilisysSlides.length}
              activeIndex={activeSlide}
              onSelect={setActiveSlide}
              variant="dark"
              className="relative z-10"
              ariaLabel="Why Eilisys slides"
            />
          </article>

          <div className="relative min-h-[450px] overflow-hidden rounded-[4px]">
            <Image
              src={ASSETS.whyEilisysImage}
              alt="Operations team reviewing workforce data in an industrial warehouse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
