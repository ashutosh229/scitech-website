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

const clubs = clubsName.map((club, index) => {
  return {
    name: club,
    image: `${club.toLowerCase()}` + ".png",
  };
});

export default clubs;
