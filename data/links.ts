import { Routes } from "@/types/routes";
import { clubsName } from "./clubs";

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

const clubsRoutes = clubsName.map((club, index) => {
  const clubName = club.toLowerCase().replace(" ", "-");
  return {
    [club]: `/clubs/${clubName}`,
  };
});

export default routes;
export { clubsRoutes };
