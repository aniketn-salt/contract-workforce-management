import { FeatureRiskCard } from "@/components/ui/feature-risk-card";
import { SectionHeader } from "@/components/ui/section-header";
import { businessRisks } from "@/lib/constants/business-risks";

export function BusinessRisksSection() {
  const [rowOne, rowTwo] = [
    businessRisks.slice(0, 3),
    businessRisks.slice(3, 6),
  ];

  return (
    <section
      aria-labelledby="business-risks-heading"
      className="bg-eilisys-white px-[var(--section-x)] pt-[var(--section-y)] pb-32"
    >
      <div className="mx-auto flex max-w-[896px] flex-col gap-16">
        <SectionHeader
          badge="Business Risks"
          headingId="business-risks-heading"
          title={
            <>
              <span className="text-eilisys-blue-highlight">
                The hidden risks in contract workforce operations
              </span>
              <span className="text-eilisys-primary-text">
                {" "}
                can quietly increase cost and compliance exposure
              </span>
            </>
          }
          description="When contract worker records, attendance, deployment and compliance checks are managed manually, the business faces risks that are harder to detect early and more expensive to fix later."
        />

        <div className="flex w-full max-w-[var(--content-inner)] flex-col gap-12 self-center">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {rowOne.map((risk) => (
              <FeatureRiskCard key={risk.id} risk={risk} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {rowTwo.map((risk) => (
              <FeatureRiskCard key={risk.id} risk={risk} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
