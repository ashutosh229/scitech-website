import { Image } from "@/types/events";

import bibBlogs from "./blogs/Blockchain";
import dsaiBlogs from "./blogs/Dsai";
import electromosBlogs from "./blogs/Electromos";
import gdgBlogs from "./blogs/GDSC";
import sesBlogs from "./blogs/SES";
import openlakeBlogs from "./blogs/OpenLake";
import motorsportsBlogs from "./blogs/Motorsports";
import epsilonBlogs from "./blogs/Epsilon";
import ingenuityBlogs from "./blogs/Ingenuity";
import spectreBlogs from "./blogs/Spectre";

import bibMembers from "./members/Blockchain";
import dsaiMembers from "./members/Dsai";
import electromosMembers from "./members/Electromos";
import gdgMembers from "./members/GDSC";
import sesMembers from "./members/SES";
import openlakeMembers from "./members/OpenLake";
import motorsportsMembers from "./members/Motorsports";
import epsilonMembers from "./members/Epsilon";
import ingenuityMembers from "./members/Ingenuity";
import spectreMembers from "./members/Spectre";

export const clubsName = [
  "DSAI",
  "Electromos",
  "Spectre",
  "GDG",
  "SES",
  "BIB",
  "OpenLake",
  "Motorsports",
  "Epsilon",
  "Ingenuity",
];

export const clubsCarouselImages = clubsName.map((club, index) => {
  return {
    name: club,
    image: "club_carousel/" + `${club.toLowerCase()}` + ".png",
  };
});

export const clubLogos: Image[] = [
  {
    src: "club_logo/GsDSC.png",
    alt: "GDSC Club",
    name: "GDSC",
    href: "/clubs/gdg",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: gdgBlogs,
    members: gdgMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/SES Logo.png",
    alt: "SES Logo",
    name: "SES",
    href: "/clubs/ses",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: sesBlogs,
    members: sesMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/BIB.png",
    alt: "BIB Logo",
    name: "BlockChain",
    href: "/clubs/bib",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: bibBlogs,
    members: bibMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/OPENLAKE.png",
    alt: "OPENLAKE Club",
    name: "Openlake",
    href: "/clubs/openlake",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: openlakeBlogs,
    members: openlakeMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/Motorsports.png",
    alt: "Motorsports Club",
    name: "Motorsports",
    href: "/clubs/motorsports",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: motorsportsBlogs,
    members: motorsportsMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/epsilon_logo_new.png",
    alt: "Epsilon Logo",
    name: "Epsilon",
    href: "/clubs/epsilon",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: epsilonBlogs,
    members: epsilonMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/ING.png",
    alt: "ING Logo",
    name: "Ingenuity",
    href: "/clubs/ingenuity",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: ingenuityBlogs,
    members: ingenuityMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/DSAI.png",
    alt: "DSAI Logo",
    name: "DSAI",
    href: "/clubs/dsai",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: dsaiBlogs,
    members: dsaiMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/Electromos.png",
    alt: "Electromos Logo",
    name: "Electromos",
    href: "/clubs/electromos",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: electromosBlogs,
    members: electromosMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
  {
    src: "club_logo/DSAI.png",
    alt: "Spectra Logo",
    name: "Spectra",
    href: "/clubs/spectre",
    instagram: "",
    linkedin: "",
    youtube: "",
    description: "",
    blogs: spectreBlogs,
    members: spectreMembers,
    twitter: "",
    github: "",
    agenda: "",
  },
];

// export const blogs: { [key: string]: any } = {};
// clubsName.forEach((club) => {
//   const dynamicKey = club.toLowerCase().replace(" ", "-");
//   const blogsVariable = eval(`${dynamicKey}Blogs`);
//   blogs[club.toLowerCase().replace(" ", "-")] = blogsVariable;
// });

// export const clubMembers: { [key: string]: any } = {};
// clubsName.forEach((club) => {
//   const dynamicKey = club.toLowerCase().replace(" ", "-");
//   const membersVariable = eval(`${dynamicKey}Members`);
//   clubMembers[club.toLowerCase().replace(" ", "-")] = membersVariable;
// });
