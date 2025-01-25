import { FaTrophy, FaHandshake, FaFlag } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export const historyData = [
  {
    year: "2016",
    title: "Formation of SciTech Council",
    description:
      "The Science and Technology Council was established to foster innovation and technical excellence among students.",
    icon: MdSchool,
  },
  {
    year: "2018",
    title: "Inception of Robotics Club",
    description:
      "The Robotics Club was formed, marking a significant step in promoting hands-on technical learning.",
    icon: FaTrophy,
  },
  {
    year: "2020",
    title: "Collaboration with Tech Giants",
    description:
      "Collaborated with industry leaders like Google and Microsoft to conduct workshops and hackathons.",
    icon: FaHandshake,
  },
  {
    year: "2023",
    title: "National Recognition",
    description:
      "Received accolades at the national level for groundbreaking projects in AI and robotics.",
    icon: FaFlag,
  },
];

export const joinCategories = [
  {
    title: "Students (UG/PG)",
    description:
      "As a student, you can become a Member, Core Member, Secretary/Coordinator, or General Secretary of SciTech Affairs. Take part in shaping the future of innovation at IIT Bhilai!",
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
  },
  {
    title: "Professors",
    description:
      "Professors can become Faculty In-Charge (FIC) of specific clubs, guiding and mentoring students to achieve their goals and drive impactful activities.",
    bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
  },
  {
    title: "Other Affiliates",
    description:
      "While you cannot formally join the club in an official capacity, you are encouraged to communicate with the club and participate in its activities.",
    bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
  },
  {
    title: "Non-College Individuals",
    description:
      "You cannot hold positions in the club but can collaborate to conduct events, attend events, or partner with us to drive impactful initiatives.",
    bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
  },
];
