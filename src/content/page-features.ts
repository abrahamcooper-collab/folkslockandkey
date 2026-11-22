/** Hero feature chips shared by the inner (service and area) page heroes. */
import { Clock, MapPin, Phone } from "lucide-react";

export const innerHeroFeatures = [
  { icon: Clock, label: "Open 24 Hours, 7 Days a Week" },
  { icon: MapPin, label: "Serving Vallejo & Nearby Cities" },
  { icon: Phone, label: "Call or Request Service Online" },
] as const;
