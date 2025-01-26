// components/SciTechCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imagesPath from "@/data/images";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SciTechCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = imagesPath.home.scitechCarousel;

  const imageIndex = (page: number) =>
    ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[imageIndex(page)]}
            alt={`SciTech Image ${imageIndex(page) + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={() => paginate(-1)}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default SciTechCarousel;
