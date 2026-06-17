"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { CheckListItem } from "@/components/ui/check-list-item";
import { SectionHeader } from "@/components/ui/section-header";
import { ASSETS } from "@/lib/constants/assets";
import { capabilitySlides } from "@/lib/constants/key-capabilities";

export function KeyCapabilitiesSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = capabilitySlides[activeSlide];

  return (
    <section
      id="key-capabilities"
      aria-labelledby="capabilities-heading"
      className="bg-eilisys-white px-[var(--section-x)] pt-[var(--section-y)] pb-32"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16">
        <SectionHeader
          badge="Key Capabilities"
          headingId="capabilities-heading"
          title={
            <>
              <span className="text-eilisys-primary-text">
                Everything needed to{" "}
              </span>
              <span className="text-eilisys-blue-highlight">
                manage contract workforce with more control
              </span>
            </>
          }
          description="Contract workforce operations become easier when onboarding, attendance, access, compliance and billing are managed through one connected workflow."
        />

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative min-h-[509px] overflow-hidden rounded-lg">
            <Image
              src={ASSETS.keyCapabilitiesImage}
              alt="Warehouse managers verifying contractor onboarding workflow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 484px"
            />
          </div>

          <div className="flex max-w-[732px] flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-h4 text-eilisys-primary-text">
                {slide.title}
              </h3>
              <p className="font-body text-base leading-6 text-eilisys-subtext">
                {slide.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {slide.items.map((item) => (
                <CheckListItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <CarouselDots
              total={7}
              activeIndex={activeSlide}
              onSelect={setActiveSlide}
              ariaLabel="Key capabilities slides"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" showArrow>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
