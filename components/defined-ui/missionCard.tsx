"use client";

import imagesPath from "@/data/images";
import { motion } from "framer-motion";

export const MissionCard = ({
  params: { title, content, image },
}: {
  params: { title: string; content: string; image: string };
}) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 items-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 10 }}
    >
      <div className="bg-[#101323] p-6 rounded-lg text-center flex-1">
        <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">
          {title}
        </h3>
        <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
        <p className="text-sm leading-relaxed">{content}</p>
      </div>

      <div className="flex flex-1 justify-center">
        <img
          src={image}
          alt="Mission"
          className="mission rounded-lg h-60 max-w-full object-contain"
        />
      </div>
    </motion.div>
  );
};
