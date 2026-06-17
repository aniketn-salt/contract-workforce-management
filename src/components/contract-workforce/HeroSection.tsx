import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants/assets";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-eilisys-white lg:min-h-[684px]"
    >
      <div className="relative mx-auto max-w-[var(--content-max)]">
        <div className="grid grid-cols-1 items-center lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col gap-[60px] px-[var(--section-x)] py-12 lg:col-span-6 lg:py-[45px]">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit rounded-[var(--radius-md)] border border-eilisys-orange-highlight px-2 py-1.5 shadow-[0px_1.5px_15px_0px_rgba(243,108,24,0.25)]">
                <p className="font-heading text-base leading-6 text-eilisys-primary-text">
                  India&apos;s Intelligent Workforce Management Platform
                </p>
              </div>

              <h1
                id="hero-heading"
                className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.25] tracking-[-0.02em] lg:text-h1 lg:leading-[70px]"
              >
                <span className="text-eilisys-blue-highlight">
                  Contract Workforce Management Software
                </span>
                <span className="text-eilisys-primary-text">
                  {" "}
                  for Better Compliance and Cost Control
                </span>
              </h1>

              <p className="max-w-[673px] font-body text-xl leading-[30px] text-eilisys-subtext">
                <span className="font-semibold text-eilisys-subtext">
                  Ascent Contract Workforce Management
                </span>
                {
                  " software helps businesses manage contract workers, contractor records, attendance, compliance, billing and site visibility in one structured system."
                }
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" showArrow>
                Request a Demo
              </Button>
            </div>
          </div>

          <div className="relative h-[420px] w-full sm:h-[520px] lg:absolute lg:right-0 lg:top-0 lg:col-span-6 lg:h-full lg:w-[58%]">
            <div
              className="hero-gradient-accent absolute -right-10 top-8 hidden h-[88%] w-[78%] -rotate-[7.78deg] lg:block"
              aria-hidden="true"
            />

            <div className="hero-clip-diagonal relative h-full w-full overflow-hidden bg-eilisys-light-blue-surface">
              <Image
                src={ASSETS.heroImage}
                alt="Contract workers reviewing compliance controls on an industrial site"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
