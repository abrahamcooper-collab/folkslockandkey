/** Primary navigation. Dropdown contents are derived from the service and area data. */
import { areaLabel, areaPath, areas } from "./areas";
import { categories, servicePath, servicesInCategory } from "./services";

export type NavLink = { readonly label: string; readonly href: string };

export type NavGroup = {
  readonly title?: string;
  readonly links: readonly NavLink[];
  /** Columns the group's links are laid out in on desktop. */
  readonly columns: 1 | 2 | 3;
};

export type NavItem =
  | { readonly kind: "link"; readonly label: string; readonly href: string }
  | {
      readonly kind: "menu";
      readonly id: "services" | "service-areas";
      readonly label: string;
      readonly groups: readonly NavGroup[];
      readonly viewAll: NavLink;
    };

/** "#contact" is in-page on purpose: every page renders the contact section. */
export const CONTACT_HREF = "#contact";

export const primaryNav: readonly NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "menu",
    id: "services",
    label: "Services",
    groups: categories.map((category) => ({
      title: category.name,
      columns: category.slug === "locksmith" ? 2 : 1,
      links: servicesInCategory(category.slug).map((service) => ({
        label: service.name,
        href: servicePath(service.slug),
      })),
    })),
    viewAll: { label: "View All Services", href: "/services" },
  },
  { kind: "link", label: "Residential", href: "/#residential" },
  { kind: "link", label: "Commercial", href: "/#commercial" },
  { kind: "link", label: "Automotive", href: "/#automotive" },
  {
    kind: "menu",
    id: "service-areas",
    label: "Service Areas",
    groups: [
      {
        columns: 3,
        links: areas.map((area) => ({ label: areaLabel(area), href: areaPath(area.slug) })),
      },
    ],
    viewAll: { label: "View All Service Areas", href: "/service-areas" },
  },
  { kind: "link", label: "Contact", href: CONTACT_HREF },
];
