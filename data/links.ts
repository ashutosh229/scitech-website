import { Routes } from "@/types/routes";
import { clubsName } from "./clubs";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export const routes: Routes = {
  home: "/",
  about: "/about-us",
  gallery: "/gallery",
  events: "/events",
  achievements: "/achievements",
  clubs: "/#clubs",
  developer: "/developer",
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
  "Developer",
  "Contact",
];

export const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/iit.bh",
    color: "text-blue-600",
  },
  { icon: Twitter, href: "https://x.com/IIT_Bhilai", color: "text-sky-400" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/scitech_council/",
    color: "text-pink-500",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/iit-bhilai-sci-tech-council-b962a7250/",
    color: "text-blue-700",
  },
  {
    icon: Github,
    href: "https://github.com/scitech-iitbh",
    color: "text-gray-600",
  },
];

export const clubsRoutes = clubsName.map((club, index) => {
  const clubName = club.toLowerCase().replace(" ", "-");
  return {
    [club]: `/clubs/${clubName}`,
  };
});
