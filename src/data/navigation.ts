
// Types for navigation and services data

export interface Service {
  label: string;
  href: string;
}

export interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}

// Service section for the footer
export const footerServices: Service[] = [
  { label: "AgentOps", href: "/services/agentops" },
  { label: "RapidStack", href: "/services/rapidstack" },
  { label: "TokenCore", href: "/services/tokencore" }
];

// Quick links section - updated with correct paths
export const footerQuickLinks: QuickLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Partners", href: "/ecosystem-partners" },
  { label: "Team", href: "/team" },
  { label: "Contact Us", href: "/contact" }
];
