export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Company", href: "#company", hasDropdown: true },
  { label: "Testimonials", href: "#testimonials" },
];

export const LOGO_SRC =
  "https://www.figma.com/api/mcp/asset/02f52423-38ed-4c4b-89d8-1398bf23700b";
