"use client";

import imagesPath from "@/data/images";
import { motion } from "framer-motion";

export const AboutCard = () => {
  return (
    <motion.div
      className="text-white max-h-screen flex flex-col sm:flex-row m-4 md:m-8 overflow-hidden rounded-lg font-[poppins]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 8 }}
    >
      {/* Image */}
      <div className="flex-1">
        <img
          src={imagesPath.aboutMissionCards.mission}
          className="h-48 sm:h-full w-full object-cover sm:object-fill"
          alt="Our Story"
        />
      </div>
      <div className="flex-1 bg-[#101323] flex items-center justify-center py-8 px-8">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-[junge] font-semibold text-center">
            OUR <span className="text-sky-500">STORY</span>
          </h1>
          <p className="text-lg md:text-2xl font-[junge] text-center">
            "Innovate, Collaborate, Excel"
          </p>
          <p className="text-sm md:text-base text-center">
            "At IIT Bhilai, the Scitech Council was born from a shared passion
            for innovation and a desire to create a vibrant community centered
            around science and technology. Inspired by the limitless
            possibilities of discovery, we set out to build a space where
            curiosity could thrive and ideas could flourish."
          </p>
        </div>
      </div>
    </motion.div>
  );
};
