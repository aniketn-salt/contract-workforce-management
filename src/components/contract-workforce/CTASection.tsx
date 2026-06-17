import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants/assets";

export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="relative h-[543px] w-full overflow-hidden bg-eilisys-white">
      <Image
        src={ASSETS.ctaBackground}
        alt=""
        fill
        className="object-cover"
        priority={false}
        aria-hidden="true"
      />
      <div className="cta-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex h-full max-w-[1024px] flex-col items-center justify-center gap-12 px-[var(--section-x)] text-center">
        <div className="flex flex-col gap-5">
          <h2
            id="cta-heading"
            className="font-heading text-h1 text-eilisys-light-text"
          >
            <span>See how </span>
            <span className="text-[#79a7d7]">
              Ascent Contract Workforce Management
            </span>
            <span> fits your operations</span>
          </h2>
          <p className="mx-auto max-w-[768px] font-body text-xl leading-[30px] text-eilisys-dark-subtext">
            Talk to the Eilisys team about your workforce setup and get a guided
            walkthrough of{" "}
            <span className="font-heading font-semibold tracking-[-0.02em] text-eilisys-dark-subtext">
              Ascent Contract Workforce Management
            </span>{" "}
            system aligned to your sites, contractors, compliance needs and
            workflow priorities.
          </p>
        </div>

        <Button size="lg" showArrow>
          Request a Demo
        </Button>
      </div>
    </section>
  );
}
