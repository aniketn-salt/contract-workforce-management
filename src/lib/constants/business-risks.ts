import type { BusinessRisk } from "@/components/ui/feature-risk-card";

export const businessRisks: BusinessRisk[] = [
  {
    id: "ghost-worker",
    title: "Ghost worker risk",
    description:
      "When worker records are not properly verified or deactivated on time, businesses may end up paying for people who should not be active in the system.",
  },
  {
    id: "billing-mismatch",
    title: "Billing and wage mismatch risk",
    description:
      "If deployed roles, approved rates and actual payouts do not match, contractor billing disputes and cost leakages become more common.",
  },
  {
    id: "skill-mismatch",
    title: "Skill mismatch on site",
    description:
      "At the site level, employees assigned to the incorrect skill category may cause problems with quality, operational delays, and compliance.",
  },
  {
    id: "compliance-tracking",
    title: "Compliance tracking risk",
    description:
      "Businesses are under more audit pressure and are less prepared for compliance when contractor records, licenses, or statutory documents are lacking.",
  },
  {
    id: "attendance-manipulation",
    title: "Attendance manipulation risk",
    description:
      "Without real-time visibility into contract worker attendance and movement, it becomes harder to trust workforce presence and deployment accuracy.",
  },
  {
    id: "contractor-accountability",
    title: "Weak contractor accountability",
    description:
      "When contractor performance, worker records and workforce data stay fragmented, decision-making becomes reactive instead of controlled.",
  },
];
