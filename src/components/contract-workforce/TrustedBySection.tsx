import Image from "next/image";
import { ASSETS } from "@/lib/constants/assets";
import { trustedByHeadline } from "@/lib/constants/trusted-logos";

export function TrustedBySection() {
  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="bg-eilisys-white px-[var(--section-x)] pt-16 pb-20"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col items-center gap-12">
        <p
          id="trusted-by-heading"
          className="max-w-[828px] text-center font-body text-sm uppercase leading-normal tracking-[0.08em] text-eilisys-primary-text"
        >
          {trustedByHeadline}
        </p>

        <div className="relative w-full overflow-hidden">
          <Image
            src={ASSETS.trustedByLogos}
            alt="Trusted by Tata Motors, CIE Automotive, Trent, Titan, Tetra Pak, Dulux, KSB, Alfa Laval, HSBC, ŠKODA Volkswagen, United Breweries, and Allianz"
            width={2880}
            height={318}
            priority
            className="mx-auto block h-[159px] w-full object-contain"
          />

          <div
            className="trusted-by-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] sm:w-[160px]"
            aria-hidden="true"
          />
          <div
            className="trusted-by-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] sm:w-[160px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
