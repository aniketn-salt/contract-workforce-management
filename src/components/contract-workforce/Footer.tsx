"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants/assets";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const linksCompany = [
    { label: "About Us", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Life at Eilisys", href: "#" },
    { label: "Partner with Us", href: "#" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#", highlight: true },
  ];

  const linksWorkforce = [
    { label: "Contract workforce management", href: "#" },
    { label: "Employee onboarding", href: "#" },
    { label: "Leave management", href: "#" },
    { label: "Time & Attendance management", href: "#" },
    { label: "Payroll management", href: "#" },
    { label: "Travel and expense", href: "#" },
    { label: "Employee exit and separation", href: "#" },
  ];

  const linksEdge = [
    { label: "Training management", href: "#" },
    { label: "Performance Management", href: "#" },
    { label: "E-Probation and assessment", href: "#" },
    { label: "Visitor management", href: "#" },
    { label: "Employee self-service", href: "#" },
    { label: "Kiosk app", href: "#" },
    { label: "Mobile app", href: "#" },
    { label: "Canteen Management", href: "#" },
  ];

  return (
    <footer className="border-t border-eilisys-border-gray bg-eilisys-white px-[var(--section-x)] py-20">
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <Image
            src={ASSETS.footerCertifications}
            alt="SOC, ISO 27001, and TÜV NORD certifications"
            width={358}
            height={63}
            className="h-[63px] w-auto object-contain object-left"
          />

          <div className="flex w-full max-w-[520px] flex-col gap-3">
            <p className="font-body text-body-4 text-eilisys-subtext">
              Get product news, expert tips and industry trends!
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-[2px] border border-eilisys-border-gray bg-eilisys-white px-3.5 py-3 font-body text-body-4 text-eilisys-subtext shadow-[inset_2px_2px_4px_0px_rgba(76,92,109,0.09)] outline-none focus:border-eilisys-primary-blue"
                required
              />
              <Button type="submit" size="md" showArrow className="shrink-0">
                Subscribe
              </Button>
            </form>
            <p className="font-body text-xs leading-[18px] text-eilisys-subtext opacity-80">
              By signing up, you confirm you agree with our{" "}
              <Link href="#" className="underline">
                Terms and Conditions.
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3.5">
            <h4 className="font-heading text-h5 text-eilisys-primary-text">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {linksCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`font-body text-base leading-6 text-eilisys-subtext transition-colors hover:text-eilisys-primary-text ${
                      link.highlight
                        ? "font-medium text-eilisys-primary-blue underline"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h4 className="font-heading text-h5 text-eilisys-primary-text">
              Workforce Management
            </h4>
            <ul className="flex flex-col gap-4 capitalize">
              {linksWorkforce.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-base leading-6 text-eilisys-subtext transition-colors hover:text-eilisys-primary-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h4 className="font-heading text-h5 text-eilisys-primary-text">
              Edge Solutions
            </h4>
            <ul className="flex flex-col gap-4 capitalize">
              {linksEdge.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-base leading-6 text-eilisys-subtext transition-colors hover:text-eilisys-primary-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h4 className="font-heading text-h5 text-eilisys-primary-text">
              Corporate Office
            </h4>
            <div className="flex flex-col gap-4 font-body text-base leading-6 text-eilisys-subtext">
              <p>
                <span className="font-semibold text-eilisys-primary-text">
                  Eilisys Technologies Pvt. Ltd.
                </span>{" "}
                Office 201 &amp; 401, AGRK Near LMD Chowk, Bavdhan, Pune
                411021, Maharashtra, India.
              </p>
              <p>Tel: +91 20 67295300</p>
              <p>Email: sales@eilisys.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 border-t border-eilisys-border-gray pt-8">
          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="block">
              <Image
                src={ASSETS.logo}
                alt="Eilisys"
                width={169}
                height={30}
                className="h-[30px] w-[169px] object-contain object-left"
              />
            </Link>

            <div className="flex items-center gap-5 text-sm font-medium text-eilisys-subtext">
              <Link href="#" className="hover:text-eilisys-primary-blue">
                Facebook
              </Link>
              <Link href="#" className="hover:text-eilisys-primary-blue">
                <XIcon className="inline size-4" />
              </Link>
              <Link href="#" className="hover:text-eilisys-primary-blue">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-eilisys-primary-blue">
                Instagram
              </Link>
              <Link href="#" className="hover:text-eilisys-primary-blue">
                YouTube
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-4 border-t border-eilisys-border-gray pt-8 text-body-4 text-eilisys-subtext md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              <p>
                Copyright &copy; 2026. Eilisys Technologies Pvt Ltd. All rights
                reserved.
              </p>
              <p className="leading-6">
                Images and screenshots are for illustrative purposes only and may
                not represent the product.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="#" className="hover:text-eilisys-primary-text">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-eilisys-primary-text">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-eilisys-primary-text">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
