const clubsName = [
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

interface Image {
  src: string;
  alt: string;
  name: string;
  href: string;
}

const clubs = clubsName.map((club, index) => {
  return {
    name: club,
    image: "club_carousel/" + `${club.toLowerCase()}` + ".png",
  };
});

export const images: Image[] = [
  {
    src: "club_logo/GDSC.png",
    alt: "GDSC Club",
    name: "GDSC",
    href: "/clubs/gdsc",
  },
  {
    src: "club_logo/SES Logo.png",
    alt: "SES Logo",
    name: "SES",
    href: "/clubs/ses",
  },
  {
    src: "club_logo/BIB.png",
    alt: "BIB Logo",
    name: "BlockChain",
    href: "/clubs/blockchain",
  },
  {
    src: "club_logo/OPENLAKE.png",
    alt: "OPENLAKE Club",
    name: "Openlake",
    href: "/clubs/openlake",
  },
  {
    src: "club_logo/Motorsports.png",
    alt: "Motorsports Club",
    name: "Motorsports",
    href: "/clubs/motorsports",
  },
  {
    src: "club_logo/epsilon_logo_new.png",
    alt: "Epsilon Logo",
    name: "Epsilon",
    href: "/clubs/epsilon",
  },
  {
    src: "club_logo/ING.png",
    alt: "ING Logo",
    name: "Ingenuity",
    href: "/clubs/ingenuity",
  },
  {
    src: "club_logo/DSAI.png",
    alt: "DSAI Logo",
    name: "DSAI",
    href: "/clubs/dsai",
  },
  {
    src: "club_logo/Electromos.png",
    alt: "Electromos Logo",
    name: "Electromos",
    href: "/clubs/electromos",
  },
  {
    src: "club_logo/DSAI.png",
    alt: "Spectra Logo",
    name: "Spectra",
    href: "/clubs/spectra",
  },
];

export const blogs: { [key: string]: any } = {};
clubsName.forEach((club) => {
  const dynamicKey = club.toLowerCase().replace(" ", "-");
  const blogsVariable = eval(`${dynamicKey}Blogs`);
  blogs[club.toLowerCase().replace(" ", "-")] = blogsVariable;
});

export const clubMembers: { [key: string]: any } = {};
clubsName.forEach((club) => {
  const dynamicKey = club.toLowerCase().replace(" ", "-");
  const membersVariable = eval(`${dynamicKey}Members`);
  clubMembers[club.toLowerCase().replace(" ", "-")] = membersVariable;
});

export default clubs;
export { clubsName };
