"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { Timeline, TimelineItem } from "@/components/defined-ui/timeline";
import { historyData } from "@/data/history";
import { routes } from "@/data/links";
import { achievementsImages } from "@/data/achievements";

const HistoryPage = () => {
  return (
    <div className="bg-[#030617] min-h-screen flex flex-col">
      <Header />

      <motion.div
        className="container mx-auto px-6 py-20 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Our Journey Through Time
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the milestones and achievements of the SciTech Council over
            the years.
          </p>
        </div>

        {/* Timeline Section */}
        <motion.div
          className="bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Timeline>
            {historyData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                date={item.year}
                title={item.title}
                description={item.description}
                // className="bg-white/20 p-4 rounded-lg shadow-md mb-8"
              >
                {/* <h3 className="text-2xl text-white font-semibold mb-2">
                  {item.year}
                </h3>
                <h4 className="text-xl text-[#0A66C2] font-bold mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.description}</p> */}
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>

        {/* Achievements Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl text-white text-center mb-12 font-bold">
            Achievements Gallery
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {achievementsImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-md transition-transform transform hover:scale-105"
              >
                <img
                  src={image.src}
                  alt={`Achievement ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-lg font-bold">{image.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.h2
            className="text-3xl text-white font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Be Part of Our History
          </motion.h2>
          <motion.a
            href={routes.join}
            className="px-8 py-4 bg-[#0A66C2] text-white text-lg rounded-md shadow-lg hover:bg-[#0A66C2]/90 transition-all ease-in-out"
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
