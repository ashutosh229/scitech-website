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
    id: "gdg",
    src: "/club_logo/GDSC.png",
    alt: "GDSC Club",
    name: "GDSC",
    href: "/clubs/gdg",
    instagram: "https://www.instagram.com/dsc_iitbhilai/",
    linkedin:
      "https://www.linkedin.com/company/developer-student-club-iit-bhilai/",
    description:
      "The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world.",
    blogs: gdgBlogs,
    members: gdgMembers,
    twitter: "",
    github: "",
    agenda: "",
    youtube: "",
    gallery: [""],
    events: []

  },
  {
    id: "ses",
    src: "/club_logo/SES Logo.png",
    alt: "SES Logo",
    name: "SES",
    href: "/clubs/ses",
    instagram: "https://instagram.com/ses_iitbh?igshid=ZDc4ODBmNjlmNQ==",
    linkedin:
      "https://www.linkedin.com/company/space-exploration-society-iitbh/",
    youtube: "https://www.youtube.com/@spaceexplorationsocietyiit864/featured",
    description:
      "At IIT Bhilai, the Space Exploration Society (SES) thrives as a lively community where curiosity and the cosmos converge. Space fanatics within the institute unite to explore the universe’s wonders and advance aeronautical innovation. Under the expansive night sky, SES members revel in celestial observations and the excitement of aeromodelling. Established in 2017, SES quickly became a beacon for space enthusiasts, organizing impactful events and workshops that captivate and inspire. Esteemed astrophysicists, engineers, and distinguished alumni frequently share their expertise, enriching the society’s endeavors with deep insights and practical knowledge. Their mentorship has propelled students to excel in various competitions and projects, achieving significant milestones in both astronomy and aeronautics.",
    blogs: sesBlogs,
    members: sesMembers,
    twitter: "",
    github: "",
    agenda: "",
    gallery: [""],
    events: []
  },
  {
    id: "bib",
    src: "/club_logo/BIB.png",
    alt: "BIB Logo",
    name: "BlockChain",
    href: "/clubs/bib",
    instagram: "https://www.instagram.com/blockchainclub.iitbhilai/",
    linkedin: "https://www.linkedin.com/company/blockchainclubiitbhilai/",
    youtube: "https://youtube.com/@blockchainiitbh?feature=shared",
    description:
      "Blockchain at IIT Bhilai (BIB) is the institute's vibrant blockchain society, committed to fostering innovation and knowledge in decentralized technologies. Our club offers a rich blend of workshops, expert lectures, and hackathons, providing a hands-on approach to learning and applying blockchain concepts. With a focus on collaboration and real-world application, BIB is the hub for students passionate about exploring blockchain's vast potential and driving technological advancement. Join us to be a part of the blockchain revolution and contribute to cutting-edge projects and research.",
    blogs: bibBlogs,
    members: bibMembers,
    twitter: "https://twitter.com/BlockchainClubI1",
    github: "",
    agenda: "",
    gallery: [""],
    events: []
  },
  {
    id: "openlake",
    src: "/club_logo/OPENLAKE.png",
    alt: "OPENLAKE Club",
    name: "Openlake",
    href: "/clubs/openlake",
    instagram:
      "https://instagram.com/openlake_iitbhilai?igshid=MmU2YjMzNjRlOQ==",
    linkedin: "https://www.linkedin.com/company/openlake/",
    description:
      "OpenLake, the premier open-source club at IIT Bhilai. At OpenLake, we are committed to fostering a collaborative and innovative community where students can explore, contribute to, and learn from open-source projects. Our mission is to promote the spirit of open-source development, encouraging creativity, collaboration, and continuous learning. Whether you are a seasoned developer or just beginning your journey, OpenLake provides a platform for all to enhance their skills and share knowledge. Join us to delve into the world of open-source, participate in hackathons, attend informative workshops, and collaborate on impactful projects. Together, let's build, share, and grow.",
    blogs: openlakeBlogs,
    members: openlakeMembers,
    twitter: "https://twitter.com/OpenLakeClub?t=FpIJluBD6clOSITxfJXojw&s=09",
    github: "",
    agenda: "",
    youtube: "",
    gallery: [""],
    events: []
  },
  {
    id: "motorsports",
    src: "/club_logo/Motorsports.png",
    alt: "Motorsports Club",
    name: "Motorsports",
    href: "/clubs/motorsports",
    instagram: "https://www.instagram.com/blockchainclub.iitbhilai/",
    linkedin: "https://www.linkedin.com/company/blockchainclubiitbhilai/",
    description:
      "The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world.",
    blogs: motorsportsBlogs,
    members: motorsportsMembers,
    twitter: "https://twitter.com/BlockchainClubI1",
    github: "",
    agenda: "",
    youtube: "",
    gallery: [""],
    events: []
  },
  {
    id: "epsilon",
    src: "/club_logo/epsilon_logo_new.png",
    alt: "Epsilon Logo",
    name: "Epsilon",
    href: "/clubs/epsilon",
    instagram: "https://www.instagram.com/roboticsclub_iitbhilai/",
    linkedin:
      "https://www.linkedin.com/company/the-epsilon-club-iit-bhilai-robotics-club/",
    youtube: "https://www.youtube.com/@theepsilonclubiitbhilai2447/featured",
    description:
      "The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world.",
    blogs: epsilonBlogs,
    members: epsilonMembers,
    twitter: "",
    github: "",
    agenda: "",
    gallery: [""],
    events: []
  },
  {
    id: "ingenuity",
    src: "/club_logo/ING.png",
    alt: "ING Logo",
    name: "Ingenuity",
    href: "/clubs/ingenuity",
    instagram: "https://www.instagram.com/ingenuity_iit_bh/",
    linkedin: "https://www.linkedin.com/company/74349589/admin/feed/posts/",
    youtube: "https://www.youtube.com/channel/UCxJn-SGexPHBs7Pmx378osw",
    description:
      "Ingenuity, the competitive programming club of IIT Bhilai, is where innovation intertwines with algorithmic brilliance. Born from a vision to cultivate a haven of problem-solving and intellectual curiosity, Ingenuity is more than a coder's refuge - it's a thriving community of passionate enthusiasts. Here, we sharpen our problem-solving prowess and algorithmic acumen through exhilarating coding contests and dynamic collaborative learning.",
    blogs: ingenuityBlogs,
    members: ingenuityMembers,
    twitter: "",
    github: "",
    agenda: "",
    gallery: [""],
    events: []
  },
  {
    id: "dsai",
    src: "/club_logo/DSAI.png",
    alt: "DSAI Logo",
    name: "DSAI",
    href: "/clubs/dsai",
    instagram: "https://www.instagram.com/dsai_iitbhilai/",
    linkedin:
      "https://www.linkedin.com/company/data-science-and-artificial-intelligence-club-iit-bhilai/",
    youtube: "https://www.youtube.com/@datascienceaiclubiitbhilai5876",
    description:
      "The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world.",
    blogs: dsaiBlogs,
    members: dsaiMembers,
    twitter: "https://twitter.com/DSAI_IITBHILAI",
    github: "https://github.com/dsai-iitbhilai",
    agenda: "",
    gallery: [""],
    events: []
  },
  {
    id: "electromos",
    src: "/club_logo/Electromos.png",
    alt: "Electromos Logo",
    name: "Electromos",
    href: "/clubs/electromos",
    instagram: "https://www.instagram.com/electromos.iitbh/",
    linkedin:
      "https://www.linkedin.com/company/electromos-sci-tech-club-iit-bhilai/",
    description:
      "Electromos, the one and only electronics club of IIT Bhilai has always been the epicentre for electronics research and projects in the Sci-Tech community of this institute. Every year a bunch of electronics enthusiast gather to foster this club and propagate the knowledge of electronics and it's domain in the institute. We work in IoT, Signal processing, VLSI, control systems etc and intrested students also participate in the hackathons and projects related to this domain. Joining this dynamic, workaholic and open minded club is a must in your college life.",
    blogs: electromosBlogs,
    members: electromosMembers,
    twitter: "https://twitter.com/",
    github: "",
    agenda: "",
    youtube: "",
    gallery: [""],
    events: []
  },
  {
    id: "spectre",
    src: "/club_logo/DSAI.png",
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
    gallery: [""],
    events: []
  },
];

