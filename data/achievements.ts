import { aboutUsInfo } from "./../types/events";
import imagesPath from "./images";
import { Achievement } from "@/types/events";

export const achievements: Achievement[] = [
  {
    title: "Top 5 in International Micromouse competition, IIT Bombay",
    details: "Recognized for Best bot design in Cosmoclench, IIT Bombay.",
    participants: "Darshan Prajapati, Mohit, Santosh, Hemant",
  },
  {
    title:
      "ICPC team (Lemon) ranked 40 among all participating teams at Pune-Gwalior region",
    details:
      "Defeated top teams from IIT Kharagpur, Roorkee, Guwahati, Hyderabad, Indore, NIT Calicut, and IIIT Allahabad.",
    participants: "Manish Salunkhe, Akshay Wairagade, Pravin Shankhapal",
  },
  {
    title: "1st Prize in ELCTROBLITZ at IIIT Raipur",
    participants: "Dhananjay, Mohit, Santosh",
  },
  {
    title: "Cleared Stage 1 of E-yantra competition",
    participants: "Divyanshu, Santosh, Shubham, Hemant",
  },
  {
    title:
      "Gold Medal in Inter IIT Tech Meet 11.0 for Cognitive Garage Problem Statement",
    details: "Among 23 IITs, IIT Bhilai's contingent bagged the gold medal.",
    participants:
      "Vaibhav Arora (PS lead), Tushar Bansal, Madhur Jain, Chirag, Kriti Gupta",
  },
  {
    title: "Google Summer of Code Selections",
    details:
      "GSoC is a global mentoring program for open-source contributions. Over the years, many students from IIT Bhilai have been selected.",
    participants: `
        GSoC '23: Prarabdh Shukla, Javed Habib, Shubham Balasaheb Dhaule, Aakash Thatte.
        GSoC '22: Vemuganti Satvik, Ananya Hooda, Madhur Jain.
        GSoC '21: Shashwat Jaiswal, Kumar Shivendu.
        GSoC '19: Anand Panchbhai.`,
  },
  {
    title: "Top 50 in Google Solutions Challenge 2022",
    participants:
      "Team Anton: Prakanshul Saxena, Prachir Agrawal, Harshil Singhal, Harshit Jajodia, Manas Wadhwa, Shaleen Malik",
  },
  {
    title:
      "Winners of Smart India Hackathon - Software Edition (SH1009, Ministry of Rural Development)",
    participants:
      "Prakanshul Saxena (Team lead), Prachir Agrawal, Harshil Singhal, Harshit Jajodia, Manas Wadhwa, Shaleen Malik",
  },
  {
    title: "ICPC Regionals Qualification (2022-23)",
    details:
      "The International Collegiate Programming Contest is the oldest and most prestigious programming contest in the world.",
    participants: "Shashwat Johri, Dakshraj Sadashiv Kashid, Sankalp Acharya",
  },
];

export const itemsPerPage = 6;

export const achievementsImages = [
  {
    src: "",
    name: "",
  },
];

export const aboutUsInformation: aboutUsInfo[] = [
  {
    title: "Our Mission",
    content:
      "To foster a vibrant culture of curiosity and creativity byorganizing engaging events, hands-on workshops, andcollaborative projects. We aim to inspire students to pushboundaries, develop cutting-edge solutions, and makeimpactful contributions to the world of science andtechnology.",
    image: `${imagesPath.aboutUs.mission}`,
  },
  {
    title: "Our Vision",
    content:
      "SciTech council aims to be a dynamic hub of innovation and collaboration, where students are empowered to explore, create, and lead in science and technology.",
    image: `${imagesPath.aboutUs.vision}`,
  },
  {
    title: "Our Values",
    content:
      "We believe in the power of innovation and encourage the pursuit of new ideas and creative solutions. Our community thrives on collaboration, bringing together diverse perspectives to foster teamwork and shared success. We balance hard work with fun, ensuring that our activities are engaging, enjoyable, and memorable.",
    image: `${imagesPath.aboutUs.values}`,
  },
];
