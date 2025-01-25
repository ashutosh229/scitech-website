import { Routes } from "@/types/routes";
import { clubsName } from "./clubs";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const routes: Routes = {
  home: "/",
  about: "/about-us",
  gallery: "/gallery",
  events: "/events",
  achievements: "/achievements",
  clubs: "/#clubs",
  team: "/team",
  contact: "/contact",
  history: "/history",
  join: "/join",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
};

export const quickLinks = [
  "About Us",
  "Gallery",
  "Events",
  "Achievements",
  "Clubs",
  "Team",
  "Contact",
];

export const socialLinks = [
  { icon: Facebook, href: "#", color: "text-blue-600" },
  { icon: Twitter, href: "#", color: "text-sky-400" },
  { icon: Instagram, href: "#", color: "text-pink-500" },
  { icon: Linkedin, href: "#", color: "text-blue-700" },
  {
    icon: Github,
    href: "#",
    color: "text-gray-600",
  },
];

const clubsRoutes = clubsName.map((club, index) => {
  const clubName = club.toLowerCase().replace(" ", "-");
  return {
    [club]: `/clubs/${clubName}`,
  };
});

export default routes;
export { clubsRoutes };
