import type { MetadataRoute } from "next";
import { areaPath, areas } from "@/content/areas";
import { absoluteUrl } from "@/content/business";
import { servicePath, services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/service-areas",
    ...services.map((service) => servicePath(service.slug)),
    ...areas.map((area) => areaPath(area.slug)),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
