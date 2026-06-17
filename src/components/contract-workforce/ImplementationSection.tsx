import {
  CalendarClock,
  FileText,
  HardHat,
  MapPin,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  {
    icon: HardHat,
    title: "Define contractor structure",
    description:
      "Map contractors, worker categories, sites, roles and approval needs based on your operating model.",
    featured: true,
  },
  {
    icon: FileText,
    title: "Set up worker records",
    description:
      "Digitize and upload individual worker files, verifying identity details and contractor associations.",
    featured: false,
  },
  {
    icon: CalendarClock,
    title: "Align attendance and billing workflows",
    description:
      "Connect punch machines or gate registers directly to the platform to automate attendance-linked contractor billing.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Configure compliance and alerts",
    description:
      "Input statutory rules and documentation checks, setting automated alerts for document expirations.",
    featured: false,
  },
  {
    icon: Rocket,
    title: "Start with a pilot rollout",
    description:
      "Deploy the system on a single plant or project site first to align teams and smooth out operational workflows.",
    featured: false,
  },
  {
    icon: MapPin,
    title: "Scale across locations",
    description:
      "Roll out the standard platform setup across all locations, factories, and contractor groups in your network.",
    featured: false,
  },
];

function StepCard({
  step,
}: {
  step: (typeof steps)[number];
}) {
  const Icon = step.icon;

  if (step.featured) {
    return (
      <article className="flex flex-col overflow-hidden rounded-[4px]">
        <div className="flex flex-col gap-2 bg-eilisys-dark-bg px-8 py-12">
          <Icon className="size-8 text-eilisys-light-text" aria-hidden="true" />
          <h3 className="min-h-[60px] font-heading text-h4 text-eilisys-light-text">
            {step.title}
          </h3>
        </div>
        <div className="bg-eilisys-cream-bg p-8">
          <p className="font-body text-body-4 text-eilisys-subtext">
            {step.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-[4px] bg-eilisys-dark-bg px-8 py-12">
      <div className="flex flex-col gap-2">
        <Icon className="size-8 text-eilisys-light-text" aria-hidden="true" />
        <h3 className="min-h-[60px] font-heading text-h4 text-eilisys-light-text">
          {step.title}
        </h3>
      </div>
    </article>
  );
}

export function ImplementationSection() {
  return (
    <section
      aria-labelledby="implementation-heading"
      className="bg-eilisys-white px-[var(--section-x)] pb-32"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16">
        <SectionHeader
          badge="Implementation"
          headingId="implementation-heading"
          title={
            <>
              <span className="text-eilisys-primary-text">A structured </span>
              <span className="text-eilisys-blue-highlight">rollout</span>
              <span className="text-eilisys-primary-text"> </span>
              <span className="text-eilisys-blue-highlight">for contract</span>
              <br />
              <span className="text-eilisys-blue-highlight">
                workforce operations
              </span>
            </>
          }
          description="Most businesses roll out Ascent by aligning worker records, attendance, compliance and billing workflows first, then expanding across sites with better control."
        />

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.slice(0, 3).map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.slice(3).map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" showArrow>
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
