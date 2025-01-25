"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { Timeline, TimelineItem } from "@/components/defined-ui/timeline";
import { FaTrophy, FaHandshake, FaFlag } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const historyData = [
  {
    year: "2016",
    title: "Formation of SciTech Council",
    description:
      "The Science and Technology Council was established to foster innovation and technical excellence among students.",
    icon: MdSchool, // Pass the component reference
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

const HistoryPage = () => {
  return (
    <div className="bg-[#030617] min-h-screen flex flex-col">
      <Header />

      <motion.div
        className="container mx-auto px-4 py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Journey Through Time
          </h1>
          <p className="text-lg text-gray-400">
            Explore the milestones and achievements of the SciTech Council over
            the years.
          </p>
        </div>

        {/* Timeline Section */}
        <motion.div
          className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Timeline>
            {historyData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                date={item.year}
                title={item.title}
                description={item.description} // Pass the icon component reference
              >
                {/* <h3 className="text-2xl text-white font-semibold mb-2">
                  {item.year}
                </h3>
                <h4 className="text-xl text-[#0A66C2] font-bold mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p> */}
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>

        {/* Achievements Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl text-white text-center mb-8 font-bold">
            Achievements Gallery
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Achievement+${index}`}
                  alt={`Achievement ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-lg font-bold">Achievement {index}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.h2
            className="text-3xl text-white font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Be Part of Our History
          </motion.h2>
          <motion.a
            href="/join"
            className="px-8 py-4 bg-[#0A66C2] text-white text-lg rounded-md shadow hover:bg-[#0A66C2]/90 transition"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            Join the SciTech Council
          </motion.a>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default HistoryPage;
