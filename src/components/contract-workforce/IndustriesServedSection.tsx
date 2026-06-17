import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ASSETS } from "@/lib/constants/assets";

type IndustryCard = {
  name: string;
  image: string;
  featured?: boolean;
  description?: string;
  differentiator?: string;
  cta?: string;
};

const industries: IndustryCard[] = [
  { name: "Automotive", image: ASSETS.industryAutomotive },
  { name: "Banking", image: ASSETS.industryBanking },
  { name: "Engineering", image: ASSETS.industryEngineering },
  { name: "EPC", image: ASSETS.industryEpc },
  {
    name: "Manufacturing",
    image: ASSETS.industryManufacturing,
    featured: true,
    description:
      "Manage contractor deployment, worker attendance, skill mapping and billing controls across plants with better workforce visibility and process discipline.",
    differentiator:
      "Built for high-volume, multi-shift environments with strict payroll cutoffs and production-linked workforce dependencies.",
    cta: "Explore Manufacturing",
  },
  { name: "Pharmaceutical", image: ASSETS.industryPharma },
  { name: "Retail", image: ASSETS.industryRetail },
  { name: "IT / Software", image: ASSETS.industryItSoftware },
];

function IndustryImageCard({ industry }: { industry: IndustryCard }) {
  return (
    <article className="group relative flex h-[505px] flex-col justify-end overflow-hidden border border-eilisys-border-gray p-6 shadow-[var(--shadow-xs)]">
      <Image
        src={industry.image}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 25vw"
        aria-hidden="true"
      />
      <div className="industry-card-gradient absolute inset-0" aria-hidden="true" />
      <div className="relative flex flex-col gap-6">
        <h3 className="font-heading text-h4 text-eilisys-primary-text">
          {industry.name}
        </h3>
        <ArrowRight
          className="size-5 text-[#3473da] transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

function ManufacturingFeaturedCard({ industry }: { industry: IndustryCard }) {
  return (
    <article className="relative flex min-h-[505px] flex-col justify-between overflow-hidden border border-eilisys-border-gray bg-eilisys-white p-6 shadow-[var(--shadow-xs)]">
      <Image
        src={industry.image}
        alt=""
        fill
        className="object-cover opacity-0"
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-h4 text-eilisys-primary-text">
            {industry.name}
          </h3>
          <p className="font-body text-base leading-6 text-eilisys-subtext">
            {industry.description}
          </p>
        </div>
        <div className="rounded-[2px] border-l-2 border-[#ffb237] bg-[rgba(255,178,55,0.06)] px-3 py-2">
          <div className="flex flex-col gap-2">
            <Star
              className="size-5 fill-[#ffb237] text-[#ffb237]"
              aria-hidden="true"
            />
            <p className="font-body text-base leading-6 text-[rgba(28,31,35,0.8)]">
              <span className="font-semibold italic">Differentiator:</span>{" "}
              {industry.differentiator}
            </p>
          </div>
        </div>
      </div>
      <Link
        href="#"
        className="relative inline-flex items-center gap-2 font-heading text-base font-semibold leading-6 text-[#3473da] transition-opacity hover:opacity-80"
      >
        {industry.cta}
        <ArrowRight className="size-5" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function IndustriesServedSection() {
  const rowOne = industries.slice(0, 4);
  const rowTwo = industries.slice(4);

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-eilisys-white py-32"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16 px-[var(--section-x)]">
        <SectionHeader
          badge="Industries We Serve"
          headingId="industries-heading"
          title={
            <>
              <span>Built for industries that depend on</span>
              <br />
              <span className="text-eilisys-blue-highlight">
                contract workforce at scale
              </span>
            </>
          }
          description="Ascent Workforce Management Software supports multi-shift, contractor-heavy, and location-based workforce operations across industries."
        />

        <div className="overflow-hidden rounded-lg border border-eilisys-border-gray">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {rowOne.map((industry) => (
              <IndustryImageCard key={industry.name} industry={industry} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {rowTwo.map((industry) =>
              industry.featured ? (
                <ManufacturingFeaturedCard
                  key={industry.name}
                  industry={industry}
                />
              ) : (
                <IndustryImageCard key={industry.name} industry={industry} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
