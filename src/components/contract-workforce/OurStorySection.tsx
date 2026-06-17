"use client";

import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/ui/section-badge";

export function OurStorySection() {
  return (
    <section 
      aria-labelledby="story-heading"
      className="bg-eilisys-white px-[var(--section-x)] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Left Column: Story text */}
        <div className="flex flex-col items-start gap-8 lg:col-span-7">
          <div className="flex flex-col gap-5">
            <SectionBadge label="Our Story" />
            <h2 
              id="story-heading"
              className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] text-eilisys-primary-text md:text-4xl"
            >
              20 Years of solving India’s hardest workforce problems
            </h2>
            <div className="flex flex-col gap-4 font-body text-base leading-relaxed text-eilisys-subtext">
              <p>
                We did not build a generic HR platform and then add India compliance as an afterthought. 
                Eilisys started by understanding how Indian enterprises actually operate across plants, branches, 
                sites, shifts, contractors, and payroll-critical workflows and built from that reality.
              </p>
              <p>
                That is why Ascent workforce management software is designed for operational continuity, 
                process control, and workforce accuracy in environments where delays and errors have real business impact. 
                Every part of the platform is shaped by what enterprise HR, payroll, and operations teams need to run reliably at scale.
              </p>
            </div>
          </div>
          <Button size="md" showArrow>
            Read Our Story
          </Button>
        </div>

        {/* Right Column: Founder Quote Block */}
        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-eilisys-blue-highlight/10 to-transparent blur-2xl" />
          
          <div className="relative w-full max-w-[420px] rounded-3xl border border-eilisys-blue-highlight/10 bg-eilisys-light-blue-surface/40 p-8 shadow-sm backdrop-blur-xs">
            {/* Top Quote Mark Icon */}
            <div className="mb-6 flex size-10 items-center justify-center rounded-xl bg-eilisys-light-blue-bg text-eilisys-blue-highlight">
              <Quote className="size-5 rotate-180" />
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-body text-base font-medium leading-relaxed text-eilisys-primary-text italic">
                &ldquo;We built Eilisys to solve workforce realities in India that global platforms often miss. 20 years later, that mission remains the same: To Build reliable systems for enterprise scale.&rdquo;
              </p>
              
              <div className="border-t border-[#E4E7EC] pt-4">
                <cite className="font-heading text-base font-bold not-italic text-eilisys-primary-text">
                  Atul Alurkar
                </cite>
                <p className="font-body text-xs text-eilisys-subtext">
                  Founder &amp; CEO, Eilisys Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
