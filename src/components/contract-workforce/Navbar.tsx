"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants/assets";
import { navItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-eilisys-white shadow-[var(--shadow-nav)]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[var(--content-max)] items-center justify-between px-[var(--section-x)] py-[18px]"
      >
        <Link href="/" className="block shrink-0">
          <Image
            src={ASSETS.logo}
            alt="Eilisys"
            width={155}
            height={28}
            className="h-7 w-[155px] object-contain object-left"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.hasDropdown ? (
                <button
                  type="button"
                  className="group inline-flex items-center gap-1.5 font-body text-base leading-6 text-eilisys-primary-text transition-colors hover:text-eilisys-blue-highlight"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenDropdown((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === item.label && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="font-body text-base leading-6 text-eilisys-primary-text transition-colors hover:text-eilisys-blue-highlight"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="md" showArrow>
            Request a Demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-[#E4E7EC] lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-[#E4E7EC] px-[var(--section-x)] py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block font-body text-base leading-6 text-eilisys-primary-text transition-colors hover:text-eilisys-blue-highlight"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button size="md" showArrow className="w-full">
              Request a Demo
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
