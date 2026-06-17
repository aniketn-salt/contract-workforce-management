"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ASSETS } from "@/lib/constants/assets";

export function StickyBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const dismissed = localStorage.getItem("eilisys-banner-dismissed") === "true";
  if (dismissed || isDismissed) return null;

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("eilisys-banner-dismissed", "true");
  };

  return (
    <div className="relative z-50 w-full overflow-hidden px-[var(--section-x)] py-3">
      <Image
        src={ASSETS.stickyBannerBg}
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
        priority
      />
      <div
        className="absolute inset-0 bg-eilisys-dark-bg"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[var(--content-inner)] items-center justify-center gap-3.5">
        <p className="font-body text-sm font-semibold leading-5 text-white">
          Guide for Reducing Financial Leakage in Contract Workforce Management
        </p>

        <a
          id="download-ebook"
          href="#download-ebook"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-[2px] bg-eilisys-primary-blue py-0.5 pl-2.5 pr-2 font-heading text-sm font-semibold leading-5 text-white transition-colors hover:bg-[#3a7ae8]"
        >
          Download E-book
          <ArrowRight className="size-6" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-0 inline-flex size-6 items-center justify-center text-white/90 transition-colors hover:text-white"
          aria-label="Dismiss banner"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}
