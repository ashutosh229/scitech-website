"use client";

import imagesPath from "@/data/images";
import { motion } from "framer-motion";

export const MissionCardV2 = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 10 }}
    >
      <div className="flex flex-1 justify-center">
        <img
          src={imagesPath.aboutUs.mission}
          alt="Mission"
          className="mission rounded-lg h-60 max-w-full object-contain"
        />
      </div>
      <div className="bg-[#101323] p-6 rounded-lg text-center flex-1">
        <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">
          Our Mission
        </h3>
        <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
        <p className="text-sm leading-relaxed">
          To foster a vibrant culture of curiosity and creativity by organizing
          engaging events, hands-on workshops, and collaborative projects. We
          aim to inspire students to push boundaries, develop cutting-edge
          solutions, and make impactful contributions to the world of science
          and technology.
        </p>
      </div>
    </motion.div>
  );
};
