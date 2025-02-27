// TeamCarousel.tsx - Auto-Sliding + Manual Navigation
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Member } from "@/types/member";
import { MemberCard } from "./memberCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for arrows

interface CarouselProps {
  members: Member[];
}

export const TeamCarousel: React.FC<CarouselProps> = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [members.length, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + members.length) % members.length
    );
  };

  return (
    <div className="relative w-[24rem] h-[28rem] bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden mx-auto flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Carousel Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[20rem] h-[24rem] flex items-center justify-center">
            <MemberCard member={members[currentIndex]} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </div>
  );
};
