"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Can it manage contractor and worker records in one place?",
    a: "Yes, the system helps businesses maintain contractor details, worker records, skill information, access control and related workforce data in one system.",
  },
  {
    q: "Does it support attendance tracking for contract workers?",
    a: "Yes, Ascent integrates with hardware biometrics, facial recognition terminals, and mobile apps to track punch times, shifts, and geo-fenced locations in real-time.",
  },
  {
    q: "Can it help reduce billing mismatches?",
    a: "Absolutely. The platform auto-reconciles contractor attendance records with their approved role-pay rates, instantly flagging ghost workers or billing discrepancies before payments are made.",
  },
  {
    q: "Does it support compliance-related workflows?",
    a: "Yes. It tracks statutory licenses, ESIC/PF contributions, labor laws compliance, and digital documentation checklists, automatically alerting contractors and administrators before expirations.",
  },
  {
    q: "Can it support worker onboarding and access control?",
    a: "Yes, it supports Aadhaar-based contractor self-onboarding, digital skill testing, and links directly to site turnstiles to issue automated gate passes for authorized workers.",
  },
  {
    q: "Is it suitable for multi-location operations?",
    a: "Yes. Ascent is designed for large enterprises, allowing central HR teams to view contractor operations, attendance, and compliance reports across multiple factories, plants, or branches.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-eilisys-white px-[var(--section-x)] pb-[var(--section-y)]"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16 lg:flex-row lg:items-start">
        <div className="flex w-full max-w-[380px] shrink-0 flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h2
              id="faq-heading"
              className="font-heading text-h2 text-eilisys-primary-text"
            >
              Contract Workforce Management FAQs
            </h2>
            <p className="font-body text-body-2 text-eilisys-subtext">
              Quick answers for businesses evaluating Ascent Contract Workforce
              Management system for worker records, compliance, billing and
              workforce control.
            </p>
          </div>
          <Button size="lg" showArrow>
            View All
          </Button>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-[4px] bg-eilisys-white p-6 shadow-[var(--shadow-xs)]",
                  isOpen && "border border-eilisys-blue-highlight",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-12 text-left"
                >
                  <span className="font-heading text-h5 font-medium tracking-[-0.02em] text-eilisys-primary-text">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="size-6 shrink-0 text-eilisys-primary-text" />
                  ) : (
                    <Plus className="size-6 shrink-0 text-eilisys-primary-text" />
                  )}
                </button>
                {isOpen ? (
                  <p className="mt-8 font-body text-body-4 text-eilisys-subtext">
                    {faq.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
