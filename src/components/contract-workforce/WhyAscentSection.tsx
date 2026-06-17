"use client";

import { useState } from "react";
import {
  BadgeCent,
  BarChart3,
  ChevronDown,
  Eye,
  Globe,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: Eye,
    title: "Better worker visibility",
    description:
      "Track worker records, attendance, deployment and contractor activity with better operational clarity.",
  },
  {
    icon: ShieldAlert,
    title: "Stronger compliance control",
    description:
      "Maintain digital records, monitor contractor licenses, and receive automated alerts for compliance gaps.",
  },
  {
    icon: BadgeCent,
    title: "Better billing accuracy",
    description:
      "Verify attendance records and role mapping before processing invoices to prevent billing leakages.",
  },
  {
    icon: Wrench,
    title: "Built for site operations",
    description:
      "Onboard workers quickly, assign shifts, and manage daily access control directly at the plant gates.",
  },
  {
    icon: BarChart3,
    title: "Better reporting and control",
    description:
      "Gain real-time insights into contractor headcounts, attendance patterns, and compliance rates.",
  },
  {
    icon: Globe,
    title: "Ready for multi-location use",
    description:
      "Standardize your contractor workflows across multiple sites and manage all data in a single central dashboard.",
  },
];

export function WhyAscentSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      aria-labelledby="why-ascent-heading"
      className="bg-eilisys-white px-[var(--section-x)] pb-32"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16 lg:flex-row lg:items-start">
        <div className="w-full max-w-[610px] shrink-0">
          <SectionHeader
            badge="Why Ascent"
            align="left"
            headingId="why-ascent-heading"
            title={
              <>
                <span className="text-eilisys-primary-text">
                  Why businesses choose{" "}
                </span>
                <span className="text-eilisys-blue-highlight">
                  Ascent Contract Workforce Management
                </span>
              </>
            }
            description="We help businesses replace fragmented contractor processes with a more controlled, compliant and easy-to-manage workforce system."
          />
        </div>

        <div className="flex flex-1 flex-col gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openIdx === idx;

            return (
              <div
                key={item.title}
                className={cn(
                  "flex items-start gap-12 rounded-[4px] bg-eilisys-cream-bg p-6",
                  isOpen ? "items-start" : "items-center py-3",
                )}
              >
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center pt-1">
                    <Icon
                      className="size-8 text-eilisys-blue-highlight"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <h3 className="font-heading text-h4 text-eilisys-primary-text">
                      {item.title}
                    </h3>
                    {isOpen ? (
                      <p className="font-body text-body-4 text-eilisys-subtext">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIdx(idx)}
                  className="shrink-0 text-eilisys-primary-text transition-colors hover:text-eilisys-blue-highlight"
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.title}`}
                >
                  <ChevronDown
                    className={cn(
                      "size-6 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
