export type CapabilitySlide = {
  id: string;
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
  }[];
};

export const capabilitySlides: CapabilitySlide[] = [
  {
    id: "control-oversight",
    title: "Comprehensive Control & Oversight",
    subtitle:
      "Bring worker onboarding, access, attendance and deployment into one controlled workflow.",
    items: [
      {
        title: "Verified Contractor Onboarding",
        description:
          "Aadhaar-based identity checks help ensure only legitimate workers enter the system.",
      },
      {
        title: "Skill-Based Role Matching",
        description:
          "Verified skills are matched to job roles to reduce mismatches and improve deployment accuracy.",
      },
      {
        title: "Secure Access Control",
        description:
          "Auto-issued gate passes help ensure only authorized workers access the site.",
      },
      {
        title: "Real-Time Attendance & Shift Visibility",
        description:
          "Live punch tracking and auto-rosters keep HR and contract workforce in sync.",
      },
      {
        title: "Revenue Protection Through Role-Pay Mapping",
        description:
          "Role and pay mapping helps flag billing mismatches and hidden commissions.",
      },
    ],
  },
  {
    id: "compliance-documentation",
    title: "Compliance & Documentation Control",
    subtitle:
      "Keep contractor licenses, worker records and statutory workflows aligned with operational needs.",
    items: [
      {
        title: "Digital Compliance Records",
        description:
          "Maintain contractor and worker documentation in one structured system for faster reviews.",
      },
      {
        title: "License & Statutory Alerts",
        description:
          "Automated reminders help teams act before licenses or compliance documents expire.",
      },
      {
        title: "Audit-Ready Reporting",
        description:
          "Generate compliance-ready reports when inspections, audits or internal reviews happen.",
      },
      {
        title: "Worker Verification Trails",
        description:
          "Track identity checks, onboarding steps and access approvals with better accountability.",
      },
      {
        title: "Policy-Based Workflow Control",
        description:
          "Apply site-level compliance rules consistently across contractors and worker categories.",
      },
    ],
  },
  {
    id: "attendance-billing",
    title: "Attendance & Billing Accuracy",
    subtitle:
      "Connect workforce presence, approved roles and contractor billing in one workflow.",
    items: [
      {
        title: "Attendance Reconciliation",
        description:
          "Match punch data with approved shifts and deployment records before billing is processed.",
      },
      {
        title: "Contractor Billing Validation",
        description:
          "Flag mismatches between attendance, role rates and payout data early in the cycle.",
      },
      {
        title: "Shift & Overtime Visibility",
        description:
          "Track shift patterns and overtime trends across sites with better operational clarity.",
      },
      {
        title: "Site-Level Deployment Checks",
        description:
          "Verify that workers present on site match approved contractor and role assignments.",
      },
      {
        title: "Reduced Billing Disputes",
        description:
          "Structured attendance-to-billing workflows help lower contractor invoice conflicts.",
      },
    ],
  },
  {
    id: "contractor-management",
    title: "Contractor & Workforce Management",
    subtitle:
      "Manage contractors, worker categories, sites and approvals from one platform.",
    items: [
      {
        title: "Contractor Master Setup",
        description:
          "Define contractors, sites, roles and approval flows based on your operating model.",
      },
      {
        title: "Worker Category Control",
        description:
          "Organize workers by skill, contractor, site and deployment type with clearer structure.",
      },
      {
        title: "Headcount Visibility",
        description:
          "Track active workers more accurately and reduce duplicate or unverified entries.",
      },
      {
        title: "Site Access Governance",
        description:
          "Control which workers can access which locations based on verified records and approvals.",
      },
      {
        title: "Contractor Performance Oversight",
        description:
          "Improve accountability with better visibility into contractor deployment and compliance.",
      },
    ],
  },
  {
    id: "reporting-analytics",
    title: "Reporting & Operational Analytics",
    subtitle:
      "Turn workforce data into actionable visibility for HR, finance and site teams.",
    items: [
      {
        title: "Real-Time Dashboards",
        description:
          "Monitor attendance, deployment and compliance indicators across sites from one view.",
      },
      {
        title: "Workforce Trend Analysis",
        description:
          "Identify patterns in contractor usage, attendance gaps and site-level workforce movement.",
      },
      {
        title: "Compliance Status Tracking",
        description:
          "See which contractors or worker groups need attention before deadlines are missed.",
      },
      {
        title: "Billing Exception Reports",
        description:
          "Highlight payout mismatches and attendance anomalies before invoices are approved.",
      },
      {
        title: "Management-Ready Insights",
        description:
          "Give leadership clearer operational reports for workforce cost and control decisions.",
      },
    ],
  },
  {
    id: "integration-security",
    title: "Integration & Security",
    subtitle:
      "Connect contract workforce operations with existing enterprise systems securely.",
    items: [
      {
        title: "Enterprise System Integration",
        description:
          "Integrate with HR, payroll and access systems to reduce duplicate data handling.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Give HR, site and finance teams the right level of visibility based on responsibility.",
      },
      {
        title: "Secure Worker Data Handling",
        description:
          "Protect worker identity, attendance and compliance records with enterprise-grade controls.",
      },
      {
        title: "Hardware & Gate Connectivity",
        description:
          "Connect biometrics, turnstiles and attendance devices for more reliable site data.",
      },
      {
        title: "Scalable Multi-Location Setup",
        description:
          "Support growing contractor operations across plants, projects and business units.",
      },
    ],
  },
  {
    id: "mobile-self-service",
    title: "Mobile & Self-Service Access",
    subtitle:
      "Extend workforce control to supervisors, contractors and site teams on the move.",
    items: [
      {
        title: "Supervisor Mobile Visibility",
        description:
          "Let site teams track attendance, deployment and exceptions without manual follow-up.",
      },
      {
        title: "Contractor Self-Service",
        description:
          "Enable contractors to manage submissions, records and compliance updates more efficiently.",
      },
      {
        title: "On-Site Exception Handling",
        description:
          "Resolve attendance, access and deployment issues faster with mobile-ready workflows.",
      },
      {
        title: "Faster Worker Onboarding",
        description:
          "Reduce onboarding delays with digital verification and site-ready worker activation.",
      },
      {
        title: "Operational Agility",
        description:
          "Keep contract workforce operations responsive across shifts, sites and changing demand.",
      },
    ],
  },
];
